using Microsoft.EntityFrameworkCore;

namespace PLAYSCRIBE_Backend.Models
{
    public class DataBlokClass :DbContext
    {
        public DataBlokClass(DbContextOptions<DataBlokClass> options):base(options)
        {
            
        }
        public DbSet<BlokProcesses> BlokComments { get; set; }
    }
}
