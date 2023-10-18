using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PLAYSCRIBE_Backend.Models
{
    public class ScoreTable
    {
        [Key]
		[Required]
		public  string Username { get; set; }
        [Required]
        public int BestScore { get; set; }
        public int MaxDron1Kill { get; set; }
        public int MaxDron2Kill { get; set; }
        public int MaxDron3Kill { get; set; }
        public int MaxDron4Kill { get; set; }
    }
}
