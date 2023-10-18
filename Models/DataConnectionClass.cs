using Microsoft.EntityFrameworkCore;

namespace PLAYSCRIBE_Backend.Models
{
    public class DataConnectionClass : DbContext
    {
        public DataConnectionClass(DbContextOptions<DataConnectionClass> options) : base(options)
        {
            
        }
        public DbSet<ScoreTable> BestScores { get; set; }
		public DbSet<DroneProperty> DroneProperties { get; set; }
	}
}
