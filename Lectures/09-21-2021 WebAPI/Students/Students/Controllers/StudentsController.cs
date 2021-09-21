using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Students.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : Controller
    {
        /// <summary>
        /// We don't like the new keyword here.
        /// from assignment 6 onwards, we have a MUCH better way
        /// </summary>
        private static List<StudentEntity> Students { get; set; } = new List<StudentEntity>();

        [HttpGet]
        public List<StudentEntity> Get()
        {
            return Students;
        }

        [HttpPost]
        public StudentEntity Post([FromBody] StudentEntity entity)
        {
            Students.Add(entity);

            return entity;
        }

        [HttpPut("{index:int}")]
        public IActionResult Put([FromBody] StudentEntity entity, int index)
        {
            if (index < 0 || index >= Students.Count)
            {
                return StatusCode((int)HttpStatusCode.NotFound);
            }

            Students[index] = entity;
            
            return Json(entity);
        }

        [HttpDelete("{index:int}")]
        public IActionResult Delete(int index)
        {
            if (index < 0 || index >= Students.Count)
            {
                return StatusCode((int)HttpStatusCode.NotFound);
            }

            Students.RemoveAt(index);

            return StatusCode((int)HttpStatusCode.NoContent);
        }

        [HttpPatch("{index:int}")]
        public IActionResult Patch([FromBody] StudentEntity entity, int index)
        {
            if (index < 0 || index >= Students.Count)
            {
                return StatusCode((int)HttpStatusCode.NotFound);
            }

            if (!string.IsNullOrWhiteSpace(entity.FirstName))
            {
                Students[index].FirstName = entity.FirstName;
            }

            if (!string.IsNullOrWhiteSpace(entity.LastName))
            {
                Students[index].LastName = entity.LastName;
            }

            return Json(entity);
        }
    }
}
