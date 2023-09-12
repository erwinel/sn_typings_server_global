namespace module;

public class DbLogHandler
{
    private static readonly Dictionary<string, DbLogHandler> _handlers = new(StringComparer.InvariantCultureIgnoreCase);

    public DbLogHandler() { }

    internal void WriteError(string message)
    {
        throw new NotImplementedException();
    }

    internal void WriteWarning(string message)
    {
        throw new NotImplementedException();
    }

    internal void WriteInformation(string message)
    {
        throw new NotImplementedException();
    }

    internal void WriteDebug(string message)
    {
        throw new NotImplementedException();
    }
}
