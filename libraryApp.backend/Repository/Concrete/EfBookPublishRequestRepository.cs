using libraryApp.backend.Entity;
using libraryApp.backend.Repository.Abstract;
using Microsoft.EntityFrameworkCore;

namespace libraryApp.backend.Repository.Concrete
{
    public class EfBookPublishRequestRepository : IBookPublishRequestRepository
    {
        private readonly LibraryDbContext _context;

        public EfBookPublishRequestRepository(LibraryDbContext context)
        {
            _context = context;
        }

        public async Task AddBookPublishRequest(BookPublishRequest bookPublishRequest)
        {
            await _context.BookPublishRequests.AddAsync(bookPublishRequest);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteBookPublishRequestBy(int id)
        {
            var publishRequest = await _context.BookPublishRequests.FindAsync(id);
            if (publishRequest != null)
            {
                _context.BookPublishRequests.Remove(publishRequest);
            }
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<BookPublishRequest>> GetAllBookPublishRequests()
        {
            return await _context.BookPublishRequests.ToListAsync();
        }

        public async Task<BookPublishRequest> GetBookPublishRequestById(int id)
        {
            return await _context.BookPublishRequests.FindAsync(id);
        }

        public async Task UpdateBookPublishRequest(BookPublishRequest bookPublishRequest)
        {
            _context.BookPublishRequests.Update(bookPublishRequest);
            await _context.SaveChangesAsync();
        }
    }
}
