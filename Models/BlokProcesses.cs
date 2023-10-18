using System.ComponentModel.DataAnnotations;

namespace PLAYSCRIBE_Backend.Models
{
    public class BlokProcesses
    {
        [Key]
        [Required]
        public string Username { get; set; }
        public string TargetBlok { get; set; }
        public string Comment { get; set; }

        public bool IsFavorite { get; set; }
    }
}
