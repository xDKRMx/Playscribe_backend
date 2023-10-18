using Microsoft.AspNetCore.Mvc;
using PLAYSCRIBE_Backend.Models;
using System.Diagnostics;

namespace PLAYSCRIBE_Backend.Controllers
{
    public class AboutController : Controller
    {
        private readonly ILogger<AboutController> _logger;

        public AboutController(ILogger<AboutController> logger)
        {
            _logger = logger;
        }
        public IActionResult AboutMain()
        {
            return View();
        }
    }
}