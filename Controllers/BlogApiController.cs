using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PLAYSCRIBE_Backend.Models;

namespace PLAYSCRIBE_Backend.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class BlogApiController : ControllerBase
	{

		//public DataBlokClass BlokConnection { get; set; }
		//public BlogApiController(DataBlokClass _BlokConnection)
		//{
		//	BlokConnection = _BlokConnection;

		//}
		//[HttpGet("check-auth")]
		//public IActionResult CheckAuth()
		//{

		//	bool isAuthenticated = User.Identity.IsAuthenticated;

		//	return Ok(new { isAuthenticated });
		//}
		//[HttpPost("BlogPost")]
		//public IActionResult BlogPost([FromBody] BlokProcesses data)
		//{
		//	try
		//	{
		//		if (data == null)
		//		{
		//			return BadRequest("Invalid JSON data");
		//		}
		//		// JSON verisini 
		//		string _Comment = data.Comment;
		//		string _TargetBlog = data.TargetBlok;
		//		bool _IsFavorite = data.IsFavorite;

		//		var userBlogTable = BlokConnection.BlokComments
		//		.FirstOrDefault(b => b.TargetBlok == data.TargetBlok);

		//		if (userBlogTable == null)
		//		{
		//			// Kullanıcı için yeni bir skor tablosu oluştur
		//			BlokProcesses Blok = new BlokProcesses()
		//			{
		//				Username = User.Identity.Name,
		//				Comment = _Comment,
		//				TargetBlok = _TargetBlog,
		//				IsFavorite = _IsFavorite,


		//			};
		//			BlokConnection.BlokComments.Add(Blok);
		//		}
		//		else
		//		{
		//			if (_Comment != null)
		//			{
		//				userBlogTable.Comment = _Comment;
		//			}
		//			if (_IsFavorite != null)
		//			{
		//				userBlogTable.IsFavorite = _IsFavorite;
		//			}
		//			BlokConnection.BlokComments.Update(userBlogTable);
		//		}
		//		BlokConnection.SaveChanges();

		//		return Ok(new { data });

		//	}
		//	catch (Exception ex)
		//	{
		//		return BadRequest($"An error occurred: {ex.Message}");
		//	}
		//}
	}
}
