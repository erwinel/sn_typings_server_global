using System.Net;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json;
using Markdig.Extensions.Tables;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace module;

public class TypingsDB : IDisposable
{
    private IHost? _host;
    private readonly NetworkCredential _credentials;
    private readonly Uri _remoteUri;

    public SysScope? GetScope(string value)
    {
        using TypingsDbContext dbContext = GetDbContext();
        var result = dbContext.Scopes.FirstOrDefault(t => t.Value == value);
        if (result is not null || (result = dbContext.Scopes.FirstOrDefault(t => t.SysID == value)) is not null)
            return result;
        using HttpClientHandler handler = new HttpClientHandler { Credentials = _credentials };
        using HttpClient httpClient = new HttpClient(handler);
        string q = Uri.EscapeDataString($"scope={value}");
        HttpRequestMessage message = new(HttpMethod.Get, new UriBuilder(_remoteUri)
        {
            Path = "/api/now/table/sys_scope",
            Query = $"sysparm_query={q}",
            Fragment = null
        }.Uri);
        message.Headers.Add("Accept", "application/json");
        using HttpResponseMessage response = httpClient.Send(message);
        response.EnsureSuccessStatusCode();
        string responseBody = response.Content.ReadAsStringAsync().Result;
        using JsonDocument doc = JsonDocument.Parse(responseBody);
        if (doc.RootElement.ValueKind == JsonValueKind.Object && doc.RootElement.TryGetProperty("sys_id", out JsonElement sysIdElement) && sysIdElement.ValueKind == JsonValueKind.String)
        {
            if (doc.RootElement.TryGetProperty("scope", out JsonElement valueElement) && valueElement.ValueKind == JsonValueKind.String)
            {
                result = new()
                {
                    SysID = sysIdElement.GetString()!,
                    Value = valueElement.GetString()!
                };
                if (doc.RootElement.TryGetProperty("name", out JsonElement nameElement) && nameElement.ValueKind == JsonValueKind.String)
                {
                    result.Name = nameElement.GetString()!;
                    if (string.IsNullOrWhiteSpace(result.Name))
                        result.Name = result.Value;
                }
                else
                    result.Name = result.Value;
            }
            else if (doc.RootElement.TryGetProperty("name", out JsonElement nameElement) && nameElement.ValueKind == JsonValueKind.String)
            {
                result = new()
                {
                    SysID = sysIdElement.GetString()!,
                    Value = nameElement.GetString()!
                };
                result.Name = result.Value;
            }
            else
                return null;
            if (doc.RootElement.TryGetProperty("short_description", out sysIdElement) && sysIdElement.ValueKind == JsonValueKind.String)
            {
                result.ShortDescription = sysIdElement.GetString()!;
                if (string.IsNullOrWhiteSpace(result.ShortDescription))
                    result.ShortDescription = null;
            }
            dbContext.Scopes.Add(result);
            dbContext.SaveChanges();
        }
        return result;
    }

    public GlideType? GetGlideType(string name, Func<IQueryable<GlideType>, IQueryable<GlideType>>? onQuery = null)
    {
        using TypingsDbContext dbContext = GetDbContext();
        IQueryable<GlideType> queryable = (onQuery is null) ? dbContext.Types : onQuery(dbContext.Types);
        var result = queryable.FirstOrDefault(t => t.Name == name);
        if (result is not null || (result = queryable.FirstOrDefault(t => t.SysID == name)) is not null)
            return result;
        using HttpClientHandler handler = new HttpClientHandler { Credentials = _credentials };
        using HttpClient httpClient = new HttpClient(handler);
        string q = Uri.EscapeDataString($"name={name}");
        HttpRequestMessage message = new(HttpMethod.Get, new UriBuilder(_remoteUri)
        {
            Path = "/api/now/table/sys_glide_object",
            Query = $"sysparm_query={q}",
            Fragment = null
        }.Uri);
        message.Headers.Add("Accept", "application/json");
        using HttpResponseMessage response = httpClient.Send(message);
        response.EnsureSuccessStatusCode();
        string responseBody = response.Content.ReadAsStringAsync().Result;
        using JsonDocument doc = JsonDocument.Parse(responseBody);
        if (doc.RootElement.ValueKind == JsonValueKind.Object && doc.RootElement.TryGetProperty("sys_id", out JsonElement sysIdElement) && sysIdElement.ValueKind == JsonValueKind.String &&
            doc.RootElement.TryGetProperty("name", out JsonElement nameElement) && nameElement.ValueKind == JsonValueKind.String)
        {
            var sys_id = sysIdElement.GetString()!;
            if ((result = queryable.FirstOrDefault(t => t.SysID == sys_id)) is null)
            {
                string actualName = nameElement.GetString()!;
                if (actualName.Equals(name, StringComparison.InvariantCultureIgnoreCase))
                {
                    result = new()
                    {
                        SysID = sys_id,
                        Name = actualName,
                        UseOriginalValue = doc.RootElement.TryGetProperty("use_original_value", out nameElement) && nameElement.ValueKind == JsonValueKind.True,
                        Visible = doc.RootElement.TryGetProperty("use_original_value", out sysIdElement) && sysIdElement.ValueKind == JsonValueKind.True
                    };
                    if (doc.RootElement.TryGetProperty("label", out nameElement) && nameElement.ValueKind == JsonValueKind.String)
                    {
                        var label = nameElement.GetString()!;
                        result.Label = string.IsNullOrWhiteSpace(label) ? actualName : label;
                    }
                    // TODO: Set ScalarLength;
                    // TODO: Set ScalarType;
                    // TODO: Set ClassName;
                    // TODO: Set Scope;
                    dbContext.Types.Add(result);
                    dbContext.SaveChanges();
                }
            }
            // else
                // TODO: What do we do now?
        }
        return result;
    }

    public TableInfo? GetTable(string name, Func<IQueryable<TableInfo>, IQueryable<TableInfo>>? onQuery = null)
    {
        using TypingsDbContext dbContext = GetDbContext();
        IQueryable<TableInfo> queryable = (onQuery is null) ? dbContext.Tables : onQuery(dbContext.Tables);
        var result = queryable.FirstOrDefault(t => t.Name == name);
        if (result is not null)
            return result;
        using HttpClientHandler handler = new HttpClientHandler { Credentials = _credentials };
        using HttpClient httpClient = new HttpClient(handler);
        string q = Uri.EscapeDataString($"name={name}");
        HttpRequestMessage message = new(HttpMethod.Get, new UriBuilder(_remoteUri)
        {
            Path = "/api/now/table/sys_db_object",
            Query = $"sysparm_query={q}",
            Fragment = null
        }.Uri);
        message.Headers.Add("Accept", "application/json");
        using HttpResponseMessage response = httpClient.Send(message);
        response.EnsureSuccessStatusCode();
        string responseBody = response.Content.ReadAsStringAsync().Result;
        using JsonDocument doc = JsonDocument.Parse(responseBody);
        if (doc.RootElement.ValueKind == JsonValueKind.Object && doc.RootElement.TryGetProperty("sys_id", out JsonElement sysIdElement) && sysIdElement.ValueKind == JsonValueKind.String &&
            doc.RootElement.TryGetProperty("name", out JsonElement nameElement) && nameElement.ValueKind == JsonValueKind.String)
        {
            var sys_id = sysIdElement.GetString()!;
            if ((result = queryable.FirstOrDefault(t => t.SysID == sys_id)) is null)
            {
                string actualName = nameElement.GetString()!;
                if (actualName.Equals(name, StringComparison.InvariantCultureIgnoreCase))
                {
                    result = new()
                    {
                        SysID = sys_id,
                        Name = actualName,
                        IsExtendable = doc.RootElement.TryGetProperty("is_extendable", out nameElement) && nameElement.ValueKind == JsonValueKind.True
                    };
                    if (doc.RootElement.TryGetProperty("label", out nameElement) && nameElement.ValueKind == JsonValueKind.String)
                    {
                        var label = nameElement.GetString()!;
                        result.Label = string.IsNullOrWhiteSpace(label) ? actualName : label;
                    }
                    // TODO: Set NumberPrefix;
                    // TODO: Set Scope;
                    // TODO: Set SuperClass;
                    dbContext.Tables.Add(result);
                    dbContext.SaveChanges();
                }
            }
            // else
                // TODO: What do we do now?
        }
        return result;
    }

    public TypingsDbContext GetDbContext() => (_host ?? throw new ObjectDisposedException(nameof(TypingsDB))).Services.GetRequiredService<TypingsDbContext>();

    public DbLogHandler GetDbDbLogHandler() => (_host ?? throw new ObjectDisposedException(nameof(TypingsDB))).Services.GetRequiredService<DbLogHandler>();

    public TypingsDB(string dbPath, Uri remoteUri, NetworkCredential credentials, LogLevel logLevel = LogLevel.Warning)
    {
        if (string.IsNullOrWhiteSpace(dbPath))
            throw new ArgumentException($"'{nameof(dbPath)}' cannot be null or whitespace.", nameof(dbPath));
        _credentials = credentials ?? throw new ArgumentNullException(nameof(credentials));
        if (!(_remoteUri = remoteUri ?? throw new ArgumentNullException(nameof(remoteUri))).IsAbsoluteUri)
            throw new ArgumentException($"'{nameof(remoteUri)}' cannot be relative.", nameof(remoteUri));
        if (remoteUri.Scheme != Uri.UriSchemeHttp && remoteUri.Scheme != Uri.UriSchemeHttps)
            throw new ArgumentException($"'{nameof(remoteUri)}' must use the {Uri.UriSchemeHttp} or {Uri.UriSchemeHttps} scheme.", nameof(remoteUri));

        FileInfo fileInfo;
        try { fileInfo = new(dbPath); }
        catch (Exception exc) { throw new FileNotFoundException("Invalid DB file path", dbPath, exc); }
        if (!fileInfo.Exists)
        {
            if (fileInfo.Directory is null)
                throw new FileNotFoundException("DB file not found", fileInfo.FullName);
            if (!fileInfo.Directory.Exists)
                throw new DirectoryNotFoundException($"Subdirectory \"{fileInfo.Directory}\" does not exist.");
        }
        DbLogHandler logHandler = new();
        _host = Host.CreateDefaultBuilder()
            .UseDefaultServiceProvider(opt => { }) // workaround?
            .ConfigureServices((hostContext, services) =>
                services.AddSingleton(logHandler)
                    .AddDbContextPool<TypingsDbContext>(options =>
                    {
                        options.UseSqlite(new SqliteConnectionStringBuilder
                        {
                            DataSource = fileInfo.FullName,
                            ForeignKeys = true,
                            Mode = SqliteOpenMode.ReadWrite
                        }.ConnectionString);
                        if (logLevel != LogLevel.None)
                        {
                            options.LogTo(logHandler.WriteError, (id, level) => level is LogLevel.Error or LogLevel.Critical);
                            if (logLevel < LogLevel.Error)
                            {
                                options.LogTo(logHandler.WriteWarning, (id, level) => level == LogLevel.Warning);
                                if (logLevel < LogLevel.Warning)
                                {
                                    options.LogTo(logHandler.WriteInformation, (id, level) => level == LogLevel.Information);
                                    if (logLevel < LogLevel.Information)
                                        options.LogTo(logHandler.WriteDebug, (logLevel == LogLevel.Debug) ? (id, level) => level is LogLevel.Debug or LogLevel.Trace : (id, level) => level == LogLevel.Trace);
                                }
                            }
                        }
                    })).Build();
        _host.StartAsync();
    }

    protected virtual void Dispose(bool disposing)
    {
        IHost? host = _host;
        _host = null;
        if (disposing && host is not null)
        {
            try { host.StopAsync().Wait(); }
            finally { host.Dispose(); }
        }
    }

    // // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
    // ~TypingsDB()
    // {
    //     // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
    //     Dispose(disposing: false);
    // }

    public void Dispose()
    {
        // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        Dispose(disposing: true);
        GC.SuppressFinalize(this);
    }
}
