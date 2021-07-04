using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Linq;
using System.Net;
using CloudStorage.Services;
using CloudStorage.Entities;

namespace CloudStorage.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ImagesController : Controller
    {
        private IImageTableStorage imageTableStorage;

        public ImagesController(IImageTableStorage imageTableStorage)
        {
            this.imageTableStorage = imageTableStorage;
        }

        [HttpGet]
        public async Task<IEnumerable<ImageEntity>> GetAsync()
        {
            var results = (await imageTableStorage.GetAllImagesAsync()).Select(image => image.ToEntity());
            return results;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(string id)
        {
            var imageTableEntity = await this.imageTableStorage.GetAsync(id);

            // TODO: check to make sure imageModel is not null
            // if it is null (i.e. it doesn't exist), return not found

            // TODO: set Cache-Control header here, it is in seconds; should be cached for seven hours
            // Make sure the format of the header is correct. There is more too the header's value than just an int

            // TODO: return actual download url in the Location header
            Response.Headers["Location"] = string.Empty;

            // TODO: OK is not the correct status code here. Update it.
            return StatusCode((int)HttpStatusCode.OK);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] ImageEntity imageEntity)
        {
            // TODO: Add the imageEntity into the database

            // TODO: Return the entity to the client, but make sure you set the uploadUrl first so they can start the image upload.
            return null;
        }

        [HttpPost("{id}/uploadComplete")]
        public async Task<IActionResult> UploadCompleteAsync(string id)
        {
            var imageTableEntity = await this.imageTableStorage.GetAsync(id);

            // TODO: check to make sure imageModel is not null
            // if it is null (i.e. it doesn't exist), return a NotFound status code

            // TODO: Set UploadComplete to true on the imageModel and then save it.

            return Json(imageTableEntity.ToEntity());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(string id)
        {
            if (await this.imageTableStorage.DeleteAsync(id))
            {
                return StatusCode((int) HttpStatusCode.NoContent);
            }
            return StatusCode((int) HttpStatusCode.NotFound);
        }

        [HttpDelete]
        public async Task<IActionResult> PurgeAsync()
        {
            await this.imageTableStorage.PurgeAsync();
            return StatusCode((int)HttpStatusCode.NoContent);
        }
    }
}
