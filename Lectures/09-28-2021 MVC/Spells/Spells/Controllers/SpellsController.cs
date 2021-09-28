using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spells.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Spells.Controllers
{
    public class SpellsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
