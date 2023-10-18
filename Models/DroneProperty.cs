using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PLAYSCRIBE_Backend.Models
{
    public class DroneProperty
	{
        [Key]
		[Required]
		public  string Username { get; set; }
		public int? DroneColor { get; set; }
		public int? LazerColor { get; set; }
	}
}
