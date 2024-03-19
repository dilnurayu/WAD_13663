using Microsoft.EntityFrameworkCore;
using WAD_CW13663.Models;

namespace WAD_CW13663.Data
{
    public class NewspapersAppDbContext: DbContext
    {
        public NewspapersAppDbContext(DbContextOptions<NewspapersAppDbContext> options) : base(options) { }
       
        public DbSet<Publisher> Publishers { get; set; }
        public DbSet<Newspaper> Newspapers { get; set; }
    }
}
