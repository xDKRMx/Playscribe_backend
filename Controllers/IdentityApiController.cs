using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.FlowAnalysis.DataFlow.ValueContentAnalysis;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using PLAYSCRIBE_Backend.Models;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;

namespace PLAYSCRIBE_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdentityApiController : ControllerBase
    {
        public DataConnectionClass GameConnection { get; set; }
        public DataBlokClass BlokConnection { get; set; }
		private readonly UserManager<IdentityUser> userManager;
		public IdentityApiController(DataConnectionClass _GameConnection, DataBlokClass _BlokConnection, UserManager<IdentityUser> _userManager)
        {
			GameConnection = _GameConnection;
            BlokConnection = _BlokConnection;
            userManager = _userManager;

		}
        [HttpGet("check-auth")]
        public IActionResult CheckAuth()
        {
            bool isAuthenticated = User.Identity.IsAuthenticated;

            return Ok(new { isAuthenticated });
        }
		/*GAME İŞLEMLERİ*/
		public class ScoreData
        {
            public int GameScore { get; set; }
            public int[] DronKillCounts { get; set; }
        }
        [HttpPost("Score")]
        public IActionResult Score([FromBody] ScoreData data)
        {
            try
            {
                if (data == null)
                {
                    return BadRequest("Invalid JSON data");
                }

                // JSON verisini 
                int _GameScore = data.GameScore;
                int[] DronKillCount = data.DronKillCounts;
                var userScoreTable = GameConnection.BestScores
                    .FirstOrDefault(b => b.Username == User.Identity.Name);

                if (userScoreTable == null)
                {
                    // Kullanıcı için yeni bir skor tablosu oluşturma
                    ScoreTable ScoreTablosu = new ScoreTable()
                    {
                        Username = User.Identity.Name,
                        BestScore = _GameScore,
                        MaxDron1Kill = DronKillCount[0],
                        MaxDron2Kill = DronKillCount[1],
                        MaxDron3Kill = DronKillCount[2],
                        MaxDron4Kill = DronKillCount[3],
                    };

					GameConnection.BestScores.Add(ScoreTablosu);
                }
                else
                {
                    if (_GameScore > userScoreTable.BestScore)
                    {
                        userScoreTable.BestScore = _GameScore;
                    }
                    foreach (var item in DronKillCount)
                    {
                        var index = Array.IndexOf(DronKillCount, item);

                        switch (index)
                        {
                            case 0:
                                if (item > userScoreTable.MaxDron1Kill)
                                {
                                    userScoreTable.MaxDron1Kill = item;
                                }
                                break;
                            case 1:
                                if (item > userScoreTable.MaxDron2Kill)
                                {
                                    userScoreTable.MaxDron2Kill = item;
                                }
                                break;
                            case 2:
                                if (item > userScoreTable.MaxDron3Kill)
                                {
                                    userScoreTable.MaxDron3Kill = item;
                                }
                                break;
                            case 3:
                                if (item > userScoreTable.MaxDron4Kill)
                                {
                                    userScoreTable.MaxDron4Kill = item;
                                }
                                break;
                        }
                    }
                }


				GameConnection.SaveChanges(); // Değişiklikleri veritabanına kaydet
                return Ok(new { data });
            }
            catch (Exception ex)
            {
                return BadRequest($"An error occurred: {ex.Message}");
            }
        }
		public class PropertiesofDrone
		{
			public int? DroneColor { get; set; }
			public int? LazerColor { get; set; }
		}
		[HttpPost("SpecifiedDrone")]
		public IActionResult SpecifiedDrone([FromBody] PropertiesofDrone data)
		{
            try
            {
				int? _Dronecolor = data.DroneColor;
				int? _Lazercolor = data.LazerColor;
				var userScoreTable = GameConnection.DroneProperties
					.FirstOrDefault(b => b.Username == User.Identity.Name);
				
				if (userScoreTable == null)
				{
                    if(_Dronecolor == null)
                    {
						_Dronecolor = 0;
					}
					if (_Lazercolor == null)
					{
						_Dronecolor = 1;
					}
					DroneProperty DroneProp = new DroneProperty()
					{
						Username = User.Identity.Name,
						DroneColor = _Dronecolor,
						LazerColor = _Lazercolor
					};
					GameConnection.DroneProperties.Add(DroneProp);
				}
				else
				{
					if (_Dronecolor != null)
					{
                        userScoreTable.DroneColor = _Dronecolor;
					}
					if (_Lazercolor != null)
					{
						userScoreTable.LazerColor = _Lazercolor;
					}
				}
				GameConnection.SaveChanges(); // Değişiklikleri veritabanına kaydet
				return Ok(new { data });
			}
			catch (Exception ex)
			{
				return BadRequest($"An error occurred: {ex.Message}");
			}
			
		}
		[HttpGet("GetDroneProperty")]
		public IActionResult GetDroneProperty()
		{
            var DronProperties = GameConnection.DroneProperties.Where(x => x.Username == User.Identity.Name);
			return Ok(DronProperties);
			// Favori blogun adını döndür
		}
		/*BLOK İŞLEMLERİ*/
		public class BlokData
        {
            public string TargetBlok { get; set; }
            public string Comment { get; set; }
            public bool IsFavorite { get; set; }
        }
        [HttpPost("BlogPost")]
        public IActionResult BlogPost([FromBody] BlokData data)
        {
            try
            {
                if (data == null)
                {
                    return BadRequest("Invalid JSON data");
                }
                // JSON verisini 
                string _Comment = data.Comment;
                string _TargetBlog = data.TargetBlok;
                bool _IsFavorite = data.IsFavorite;

                var userBlogTable = BlokConnection.BlokComments
                .FirstOrDefault(b => b.Username == User.Identity.Name);

                if (userBlogTable == null)
                {
                    // Kullanıcı için yeni bir skor tablosu oluştur
                    BlokProcesses Blok = new BlokProcesses()
                    {
                        Username = User.Identity.Name,
                        Comment = _Comment,
                        TargetBlok = _TargetBlog,
                        IsFavorite = _IsFavorite,


                    };
                    BlokConnection.BlokComments.Add(Blok);
                }
                else
                {
                    if (_Comment != "")
                    {
                        userBlogTable.Comment = _Comment;
                    }
                    if (_IsFavorite != false)
                    {
                        userBlogTable.IsFavorite = _IsFavorite;
                    }
                    else if (_IsFavorite == false && _Comment == "")
                    {
                        userBlogTable.IsFavorite = _IsFavorite;
                    }
                    BlokConnection.BlokComments.Update(userBlogTable);
                }
                BlokConnection.SaveChanges();

                return Ok(new { data });

            }
            catch (Exception ex)
            {
                return BadRequest($"An error occurred: {ex.Message}");
            }
        }
        [HttpGet("ShowFavoriteBlogs")]
        public IActionResult ShowFavoriteBlogs()
        {
            // Favori bloğu sorgula
            var favoriteBlogs = BlokConnection.BlokComments.Where(b => b.Username == User.Identity.Name && b.IsFavorite == true).Select(b => b.TargetBlok).ToList();
            return Ok(favoriteBlogs);
            // Favori blogun adını döndür

        }
		public class ContactData
        {
			public string SenderName { get; set; }
			public string Title { get; set; }
            public string Description { get; set; }
			public string Email { get; set; }
		}
        [HttpPost("Contact")]
        public IActionResult Contact([FromBody] ContactData Data)
        {
            
            try
            {
                string Kullanılacak_email = Data.Email;
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress(Kullanılacak_email, Data.SenderName); // Gönderen e-posta adresi
                mail.To.Add("kereminci2007@gmail.com"); // Alıcı e-posta adresi
                mail.Subject = Data.Title; // E-posta konusu
                mail.Body = Data.SenderName + " : " + Data.Description;
                // SMTP sunucusu ayarları
                SmtpClient smtpClient = new SmtpClient("smtp.googlemail.com");
                smtpClient.Port = 587; // SMTP sunucusunun port numarası
                smtpClient.Credentials = new NetworkCredential("kereminci2007@gmail.com", "eipm tyyr tgwk vynw"); // E-posta adresi ve şifre
                smtpClient.EnableSsl = true;
                // E-posta gönderme
                smtpClient.Send(mail);

            }
            catch (Exception ex)
            {
                Console.WriteLine("E-posta gönderme hatası: " + ex.Message);
            }
            return Ok(Data);
        }
    }

}
