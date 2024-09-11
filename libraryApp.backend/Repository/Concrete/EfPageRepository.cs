using libraryApp.backend.Entity;
using libraryApp.backend.Repository.Abstract;

namespace libraryApp.backend.Repository.Concrete
{
    public class EfPageRepository : IPageRepository
    {
        public void AddPage(Page page)
        {
            throw new NotImplementedException();
        }

        public void DeletePage(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Page> GetAllPages()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Page> GetAllPagesOfABook(Book book)
        {
            throw new NotImplementedException();
        }

        public Page GetPageById(int id)
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public void UpdatePage(Page page)
        {
            throw new NotImplementedException();
        }
    }
}
