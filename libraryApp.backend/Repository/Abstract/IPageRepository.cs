using libraryApp.backend.Entity;

namespace libraryApp.backend.Repository.Abstract
{
    public interface IPageRepository
    {
        Task<IEnumerable<Page>> GetAllPages();
        Task<IEnumerable<Page>> GetAllPagesOfABook(Book book);
        Task<Page> GetPageById(int id);
        Task AddPage(Page page);
        Task UpdatePage(Page page);
        Task DeletePage(int id);

    }
}
