using Microsoft.AspNetCore.Mvc;
using PLAYSCRIBE_Backend.Migrations.DataBlokClassMigrations;
using PLAYSCRIBE_Backend.Models;
using System.Diagnostics;

namespace PLAYSCRIBE_Backend.Controllers
{
    public class BlogController : Controller
    {

        public DataBlokClass DataConnect { get; set; }
        public BlogController(DataBlokClass _DataConnect)
        {
            DataConnect = _DataConnect;

        }
        public IActionResult BlogMain()
        {
            return View();
        }

        public IActionResult GetBlogComments(string blokNo)
        {
            // Veritabanından belirli bir BlokNo ile ilişkilendirilmiş yorumları çekme sorgusu
            var blog = DataConnect.BlokComments
                .Where(b => b.TargetBlok == blokNo)
                .ToList();

            return PartialView("_BlogCommentsPartial", blog);
        }


    }
}