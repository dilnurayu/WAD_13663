using WAD_CW13663.Models;

namespace WAD_CW13663.Repositories
{
    public interface IPublisherRepository
    {
        Task<IEnumerable<Publisher>> GetAllPublishers();
        Task<Publisher> GetById(int id);
        Task AddPublisher(Publisher publisher);
        Task UpdatePublisher(Publisher publisher);
        Task DeletePublisher(int id);
    }
}
