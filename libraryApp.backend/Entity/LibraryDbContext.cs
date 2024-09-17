using Microsoft.EntityFrameworkCore;

namespace libraryApp.backend.Entity
{
    public class LibraryDbContext : DbContext
    {
        public DbSet<Book> Books => Set<Book>();

        public DbSet<BookAuthor> BookAuthors => Set<BookAuthor>();

        public DbSet<BookPublishRequest> BookPublishRequests => Set<BookPublishRequest>();

        public DbSet<LoanRequest> LoanRequests => Set<LoanRequest>();

        public DbSet<Message> Messages => Set<Message>();

        public DbSet<Page> Pages => Set<Page>();

        public DbSet<Point> Points => Set<Point>();

        public DbSet<Punishment> Punishments => Set<Punishment>();

        public DbSet<RegisterRequest> RegisterRequests => Set<RegisterRequest>();

        public DbSet<Role> Roles => Set<Role>();

        public DbSet<User> Users => Set<User>();


        public LibraryDbContext(DbContextOptions<LibraryDbContext> options) : base(options)
        {

        }
    }
}
