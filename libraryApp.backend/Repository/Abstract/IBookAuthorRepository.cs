using libraryApp.backend.Entity;

namespace libraryApp.backend.Repository.Abstract
{
    public interface IBookAuthorRepository
    {
        Task<IEnumerable<BookAuthor>> GetAllAuthors();
        Task<BookAuthor> GetAuthorById(int id);
        Task AddBookAuthor(BookAuthor bookAuthor);
        Task UpdateBookAuthor(BookAuthor bookAuthor);
        Task DeleteBookAuthor(int id);
    }
}
