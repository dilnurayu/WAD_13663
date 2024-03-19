using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WAD_CW13663.Data;
using WAD_CW13663.Models;
using WAD_CW13663.Repositories;

namespace WAD_CW13663.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublishersController : ControllerBase
    {
        private readonly IPublisherRepository _publisherRepository;

        public PublishersController(IPublisherRepository publisherRepository)
        {
            _publisherRepository = publisherRepository;

        }

        // GET: api/Publishers
        [HttpGet]
        public async Task<IEnumerable<Publisher>> GetAll() => await _publisherRepository.GetAllPublishers();


        // GET: api/Publishers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var publisher = await _publisherRepository.GetById(id);
            return publisher == null ? NotFound() : Ok(publisher);
        }

        // PUT: api/Publishers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPublisher(int id, Publisher publisher)
        {
            if (id != publisher.Id)
            {
                return BadRequest();
            }

            await _publisherRepository.UpdatePublisher(publisher);
            return NoContent();
        }

        // POST: api/Publishers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult> PostPublisher(Publisher publisher)
        {
            _publisherRepository.AddPublisher(publisher);

            return CreatedAtAction("GetPublisher", new { id = publisher.Id }, publisher);
        }

        // DELETE: api/Publishers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePublisher(int id)
        {
            await _publisherRepository.DeletePublisher(id);

            return NoContent();
        }
    }
}
