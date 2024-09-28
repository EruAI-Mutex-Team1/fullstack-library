using libraryApp.backend.Entity;
using libraryApp.backend.Repository.Abstract;
using Microsoft.EntityFrameworkCore;

namespace libraryApp.backend.Repository.Concrete
{
    public class EfPointRepository : IPointRepository
    {

        private readonly LibraryDbContext _context;

        public EfPointRepository(LibraryDbContext context)
        {
            _context = context;
        }
        public IQueryable<Point> GetAllPoints => _context.Points;

        public async Task CreatePointAsync(Point point)
        {
            _context.Points.Add(point);
            await _context.SaveChangesAsync();
        }

        public async Task DeletePointAsync(int id)
        {
            var point = _context.Points.Find(id);
            if (point != null)
            {
                _context.Points.Remove(point);
                await _context.SaveChangesAsync();
            }
            throw new ArgumentException("Point could not found.");
        }

        public IQueryable<Point> GetAllPointsOfPunish(Point point)
        {
            if (point == null)
            {
                throw new ArgumentNullException(nameof(point));
            }
            return _context.Points.Where(p => p.point == point.id); 

        }

        public async Task<Point> GetByIdAsync(int id)
        {
            return await _context.Points.FirstOrDefaultAsync(x => x.id == id);

        }

        public async Task UpdatePointAsync(Point point)
        {
            if (point == null)
                throw new ArgumentNullException(nameof(point));

            _context.Points.Update(point);
            await _context.SaveChangesAsync();
        }
    }
}
