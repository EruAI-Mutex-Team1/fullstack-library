using libraryApp.backend.Entity;
using libraryApp.backend.Repository.Abstract;
using Microsoft.EntityFrameworkCore;

namespace libraryApp.backend.Repository.Concrete
{
    public class EfMessageRepository : IMessageRepository
    {
        private readonly LibraryDbContext _context;
        public EfMessageRepository(LibraryDbContext context)
        {
           _context = context;
        }
        public async Task AddMessage(Message message)
        {
            await _context.Messages.AddAsync(message);
        }

        public async Task DeleteMessage(int id)
        {
            var message = await _context.Messages.FindAsync(id);
            if (message != null) 
            { 
                _context.Messages.Remove(message);
            }
        }

        public async Task<IEnumerable<Message>> GetAllMessages()
        {
            return await _context.Messages.ToListAsync();
        }

        public async Task<Message> GetMessageById(int id)
        {
            return await _context.Messages.FindAsync(id);
        }

        public async Task UpdateMessage(Message message)
        {
            _context.Messages.Update(message);
        }
    }
}
