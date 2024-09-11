using libraryApp.backend.Entity;

namespace libraryApp.backend.Repository.Abstract
{
    public interface IPageRepository
    {
        public IEnumerable<Page> GetAllPages();
        public IEnumerable<Page> GetAllPagesOfABook(Book book);
        public Page GetPageById(int id);
        public void AddPage(Page page);
        public void UpdatePage(Page page);
        public void DeletePage(int id);
        public void Save();
    }
}
