using libraryApp.backend.Entity;

namespace libraryApp.backend.Repository.Abstract
{
    public interface IBookPublishRequestRepository
    {
        public IEnumerable<BookPublishRequest> GetAllPublishRequests();
        public BookPublishRequest GetPublishRequestById(int id);
        public void AddPublishRequest(BookPublishRequest bookPublishRequest);
        public void UpdatePublishRequest(BookPublishRequest bookPublishRequest);
        public void DeletePublishRequestById(int id);
        public void Save();
    }
}
