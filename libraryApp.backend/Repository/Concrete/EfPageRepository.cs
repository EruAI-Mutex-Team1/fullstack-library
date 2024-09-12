using libraryApp.backend.Entity;
using libraryApp.backend.Repository.Abstract;
using Microsoft.EntityFrameworkCore;

namespace libraryApp.backend.Repository.Concrete
{
    public class EfPageRepository : IPageRepository
    {
        private readonly LibraryDbContext _context;
        public EfPageRepository(LibraryDbContext context)
        {
            _context = context;
        }
        public async Task AddPage(Page page)
        {
            await _context.Pages.AddAsync(page);
        }

        public async Task DeletePage(int id)
        {
            var page = await _context.Pages.FindAsync(id);
            if(page != null)
            {
                _context.Pages.Remove(page);
            }
        }

        public async Task<IEnumerable<Page>> GetAllPages()
        {
            return await _context.Pages.ToListAsync();
        }

        public async Task<IEnumerable<Page>> GetAllPagesOfABook(Book book)
        {
            if(book == null)
            {
                throw new ArgumentNullException(nameof(book));
            }
            var pages = await _context.Pages.Where(p => p.bookId == book.id).ToListAsync();
            return pages;
        }

        public async Task<Page> GetPageById(int id)
        {
            return await _context.Pages.FindAsync(id);
        }

        public async Task UpdatePage(Page page)
        {
            _context.Pages.Update(page);
        }
    }
}
