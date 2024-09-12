using libraryApp.backend.Entity;
using libraryApp.backend.Repository.Abstract;
using Microsoft.EntityFrameworkCore;

namespace libraryApp.backend.Repository.Concrete
{
    public class EfBookAuthorRepository : IBookAuthorRepository
    {
        private readonly LibraryDbContext _context;

        public EfBookAuthorRepository(LibraryDbContext context) 
        {
            _context = context;
        }
        public async Task AddBookAuthor(BookAuthor bookAuthor)
        {
            await _context.BookAuthors.AddAsync(bookAuthor);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteBookAuthor(int id)
        {
            var bookAuthor = await _context.BookAuthors.FindAsync(id);
            if (bookAuthor != null) 
            {
                _context.BookAuthors.Remove(bookAuthor);
            }
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<BookAuthor>> GetAllAuthors()
        {
            return await _context.BookAuthors.ToListAsync();
        }

        public async Task<BookAuthor> GetAuthorById(int id)
        {
            return await _context.BookAuthors.FindAsync(id);
        }

        public async Task UpdateBookAuthor(BookAuthor bookAuthor)
        {
            _context.BookAuthors.Update(bookAuthor);
            await _context.SaveChangesAsync();
        }
    }
}
