using AutoMapper;
using libraryApp.backend.Entity;
using libraryApp.backend.Repository.Abstract;
using Microsoft.EntityFrameworkCore;

namespace libraryApp.backend.Repository.Concrete
{
    public class EfBookAuthorRepository : IBookAuthorRepository
    {
        private readonly LibraryDbContext _context;
        private readonly IMapper _mapper;

        public EfBookAuthorRepository(LibraryDbContext context, IMapper mapper) 
        {
            _context = context;
            _mapper = mapper;
        }

        public IQueryable<BookAuthor> GetAllAuthors => _context.BookAuthors;

        public async Task<BookAuthor> GetAuthorById(int id)
        {
            return await _context.BookAuthors.FirstOrDefaultAsync(a => a.id == id);
        }

        public async Task AddBookAuthor(BookAuthor bookAuthor)
        {
            if (bookAuthor == null)
            {
                throw new ArgumentNullException(nameof(bookAuthor));
            }
            await _context.BookAuthors.AddAsync(bookAuthor);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateBookAuthor(BookAuthor bookAuthor)
        {
            if (bookAuthor == null)
            {
                throw new ArgumentNullException(nameof(bookAuthor));
            }
            _context.BookAuthors.Update(bookAuthor);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteBookAuthor(int id)
        {
            var author = await _context.BookAuthors.FirstOrDefaultAsync(a => a.id == id);
            if (author != null)
            {
                _context.BookAuthors.Remove(author);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new ArgumentException("Book author not found");
            }
        }
    }
}
