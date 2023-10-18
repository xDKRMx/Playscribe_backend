using PLAYSCRIBE_Backend.Data;
using PLAYSCRIBE_Backend.Models;
public interface IUnitOfWork
{
    // Veritabanı işlemleri için gerekli metotları tanımlayabilirsiniz.
    // Örnek olarak:
    // void SaveChanges();
    // IRepository<TEntity> GetRepository<TEntity>() where TEntity : class;
}
public class UnitOfWork : IUnitOfWork
{
    private readonly DataConnectionClass _context;

    public UnitOfWork(DataConnectionClass context)
    {
        _context = context;
    }

    // IUnitOfWork arabirimini uygulayan metotları burada gerçekleştirebilirsiniz.
    // Örnek olarak:
    // public void SaveChanges()
    // {
    //     _context.SaveChanges();
    // }

    // IRepository<TEntity> GetRepository<TEntity>() where TEntity : class
    // {
    //     return new Repository<TEntity>(_context);
    // }
}