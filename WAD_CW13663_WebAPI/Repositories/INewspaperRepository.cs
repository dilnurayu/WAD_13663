using WAD_CW13663.Models;

namespace WAD_CW13663.Repositories
{
    public interface INewspaperRepository
    {
        Task<IEnumerable<Newspaper>> GetAllNewspapers();
        Task<Newspaper> GetById(int id);
        Task AddNewspaper(Newspaper newspaper);
        Task UpdateNewspaper(Newspaper newspaper);
        Task DeleteNewspaper(int id);
    }
}
