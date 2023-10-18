using Microsoft.AspNetCore.Mvc;
using PLAYSCRIBE_Backend.Models;
using System.Diagnostics;

namespace PLAYSCRIBE_Backend.Controllers
{
	public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        public IActionResult HomeMain()
        {
            return View();
        }
		public IActionResult HomeSecondary()
		{
			return View();
		}

        public IActionResult Login()
        {
            return View();
        }
        public IActionResult SignUp()
        {
            return View();
        }

    }
}