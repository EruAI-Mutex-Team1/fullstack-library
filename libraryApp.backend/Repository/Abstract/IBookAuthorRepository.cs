using libraryApp.backend.Entity;

namespace libraryApp.backend.Repository.Abstract
{
    public interface IBookAuthorRepository
    {
        public IEnumerable<BookAuthor> GetAllAuthors();
        public BookAuthor GetAuthorById(int id);
        public void AddBookAuthor(BookAuthor bookAuthor);
        public void UpdateBookAuthor(BookAuthor bookAuthor);
        public void DeleteBookAuthor(int id);
        public void Save();
    }
}
