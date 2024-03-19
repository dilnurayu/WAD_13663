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
    public class NewspapersController : ControllerBase
    {
        private readonly INewspaperRepository _newspaperRepository;

        public NewspapersController(INewspaperRepository newspaperRepository)
        {
            _newspaperRepository = newspaperRepository;

        }

        // GET: api/Newspapers
        [HttpGet]
        public async Task<IEnumerable<Newspaper>> GetAll() => await _newspaperRepository.GetAllNewspapers();


        // GET: api/Newspapers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var newspaper = await _newspaperRepository.GetById(id);
            return newspaper == null ? NotFound() : Ok(newspaper);
        }

        // PUT: api/Newspapers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNewspaper(int id, Newspaper newspaper)
        {
            if (id != newspaper.Id)
            {
                return BadRequest();
            }

            await _newspaperRepository.UpdateNewspaper(newspaper);
            return NoContent();
        }

        // POST: api/Newspapers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult> PostNewspaper(Newspaper newspaper)
        {
            _newspaperRepository.AddNewspaper(newspaper);

            return CreatedAtAction("GetNewspaper", new { id = newspaper.Id }, newspaper);
        }

        // DELETE: api/Newspapers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNewspaper(int id)
        {
            await _newspaperRepository.DeleteNewspaper(id);

            return NoContent();
        }
    }
}
