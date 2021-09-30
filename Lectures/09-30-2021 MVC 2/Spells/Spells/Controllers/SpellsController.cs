using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using Spells.Models;
using Spells.Services;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Spells.Controllers
{
    public class SpellsController : Controller
    {
        /// <summary>
        /// This is NOT the way to get a database.
        /// Stay tuned for assignment 6, dependency injection
        /// </summary>
        private static SpellsDatabase spells = new SpellsDatabase();

        static SpellsController()
        {
            spells.Add("Levitate");
            spells.Add("Transmute");
            spells.Add("Accio");
        }

        public IActionResult Index()
        {
            return View(spells);
        }

        public IActionResult ViewSpell(string id)
        {
            if (int.TryParse(id, out int result))
            {
                ViewData["id"] = result;
                return View(spells.Get(result));
            }

            return RedirectToAction("index");
        }

        [HttpPost]
        public IActionResult Add()
        {
            if (Request.HasFormContentType)
            {
                if (Request.Form.TryGetValue("spellName", out StringValues spellName))
                {
                    spells.Add(spellName.ToString());
                }
            }

            return RedirectToAction("index");
        }

        [HttpPost]
        public IActionResult Delete()
        {
            if (!Request.HasFormContentType)
            {
                return RedirectToAction("index");
            }

            if (!Request.Form.TryGetValue("spellIndex", out StringValues spellIndexString))
            {
                return RedirectToAction("index");
            }

            if (!int.TryParse(spellIndexString, out int spellIndex))
            {
                return RedirectToAction("index");
            }

            // don't forget to add bounds checking on the index

            spells.Delete(spellIndex);

            return RedirectToAction("index");
        }
    }
}
