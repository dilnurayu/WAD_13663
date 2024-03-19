using Microsoft.EntityFrameworkCore;
using WAD_CW13663.Data;
using WAD_CW13663.Models;

namespace WAD_CW13663.Repositories
{
    public class NewspaperRepository : INewspaperRepository
    {
        private readonly NewspapersAppDbContext _context;

        public NewspaperRepository(NewspapersAppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Newspaper>> GetAllNewspapers() =>
            await _context.Newspapers.Include(n => n.Publisher).ToArrayAsync();

        public async Task<Newspaper> GetById(int id)
        {
            return await _context.Newspapers.Include(n => n.Publisher).FirstOrDefaultAsync(n => n.Id == id);
        }

        public async Task AddNewspaper(Newspaper newspaper)
        {
            await _context.Newspapers.AddAsync(newspaper);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateNewspaper(Newspaper newspaper)
        {
            _context.Entry(newspaper).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteNewspaper(int id)
        {
            var newspaper = await _context.Newspapers.FindAsync(id);
            if (newspaper != null)
            {
                _context.Newspapers.Remove(newspaper);
                await _context.SaveChangesAsync();
            }
        }
    }
}
        