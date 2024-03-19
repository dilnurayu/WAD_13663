using Microsoft.EntityFrameworkCore;
using WAD_CW13663.Data;
using WAD_CW13663.Models;

namespace WAD_CW13663.Repositories
{
    public class PublisherRepository : IPublisherRepository
    {
        private readonly NewspapersAppDbContext _context;

        public PublisherRepository(NewspapersAppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Publisher>> GetAllPublishers() =>
            await _context.Publishers.ToArrayAsync();

        public async Task<Publisher> GetById(int id)
        {
            return await _context.Publishers.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task AddPublisher(Publisher publisher)
        {
            await _context.Publishers.AddAsync(publisher);
            await _context.SaveChangesAsync();
        }

        public async Task UpdatePublisher(Publisher publisher)
        {
            _context.Entry(publisher).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeletePublisher(int id)
        {
            var publisher = await _context.Publishers.FindAsync(id);
            if (publisher != null)
            {
                _context.Publishers.Remove(publisher);
                await _context.SaveChangesAsync();
            }
        }
    }
}
