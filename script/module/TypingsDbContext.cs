using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Namotion.Reflection;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Management.Automation.Host;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace module;

public class TypingsDbContext : DbContext
{
    // public static TypingsDbContext GetDbContext(string dbPath, PSHostUserInterface ui)
    // {
    //     DbLogHandler handler = DbLogHandler.GetHandler(dbPath, out string connectionString);
    //     new DbContextOptionsBuilder<TypingsDbContext>().UseSqlite(new SqliteConnectionStringBuilder
    //     {
    //         DataSource = dbPath,
    //         ForeignKeys = true,
    //         Mode = SqliteOpenMode.ReadWrite
    //     }.ConnectionString).LogTo(DbLogHandler.Instance.Write).Options
    // }
    public TypingsDbContext(DbContextOptions<TypingsDbContext> options, DbLogHandler logHandler) : base(options)
    {
        SqliteConnectionStringBuilder csb = new(Database.GetConnectionString());
        if (!File.Exists(csb.DataSource))
        {
            csb.Mode = SqliteOpenMode.ReadWriteCreate;
            using SqliteConnection connection = new(csb.ConnectionString);
            connection.Open();
            foreach (string query in SysScope.GetDbInitCommands().Concat(GlideType.GetDbInitCommands()).Concat(TableInfo.GetDbInitCommands()).Concat(ElementInfo.GetDbInitCommands()))
            {
                using SqliteCommand command = connection.CreateCommand();
                command.CommandText = query;
                command.CommandType = System.Data.CommandType.Text;
                try { _ = command.ExecuteNonQuery(); }
                catch (Exception exception)
                {
#pragma warning disable CA2201 // Exception type System.Exception is not sufficiently specific
                    throw new Exception($"Error executing query '{query}': {exception.Message}");
#pragma warning restore CA2201 // Exception type System.Exception is not sufficiently specific
                }
            }
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        _ = modelBuilder.Entity<GlideType>(GlideType.OnBuildEntity)
            .Entity<TableInfo>(TableInfo.OnBuildEntity)
            .Entity<SysScope>(SysScope.OnBuildEntity);
    }

    public virtual DbSet<GlideType> Types { get; set; }

    public virtual DbSet<TableInfo> Tables { get; set; }

    public virtual DbSet<SysScope> Scopes { get; set; }
}
