using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Crypto.Generators;

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



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Book>().HasData(
    new Book { id = 1, title = "test1", type = "psycho", number_of_pages = 10, status = true },
    new Book { id = 2, title = "test2", type = "thriller", number_of_pages = 220, status = true },
    new Book { id = 3, title = "test3", type = "fantasy", number_of_pages = 320, status = true },
    new Book { id = 4, title = "test4", type = "mystery", number_of_pages = 140, status = false },
    new Book { id = 5, title = "test5", type = "non-fiction", number_of_pages = 250, status = true },
    new Book { id = 6, title = "test6", type = "science fiction", number_of_pages = 190, status = true },
    new Book { id = 7, title = "test7", type = "romance", number_of_pages = 270, status = false },
    new Book { id = 8, title = "test8", type = "horror", number_of_pages = 330, status = true },
    new Book { id = 9, title = "test9", type = "biography", number_of_pages = 410, status = true },
    new Book { id = 10, title = "test10", type = "history", number_of_pages = 200, status = false }
);

            modelBuilder.Entity<BookAuthor>().HasData(
                new BookAuthor { bookId = 1, userId = 1, id = 1 },
                new BookAuthor { bookId = 2, userId = 2, id = 2 },
                new BookAuthor { bookId = 3, userId = 3, id = 3 },
                new BookAuthor { bookId = 4, userId = 4, id = 4 },
                new BookAuthor { bookId = 5, userId = 5, id = 5 },
                new BookAuthor { bookId = 6, userId = 1, id = 6 },
                new BookAuthor { bookId = 7, userId = 2, id = 7 },
                new BookAuthor { bookId = 8, userId = 3, id = 8 },
                new BookAuthor { bookId = 9, userId = 4, id = 9 },
                new BookAuthor { bookId = 10, userId = 5, id = 10 }
            );

            modelBuilder.Entity<BookPublishRequest>().HasData(
                new BookPublishRequest { id = 1, bookId = 2, confirmation = false, pending = true, userId = 1, requestDate = DateOnly.FromDateTime(DateTime.Now) },
                new BookPublishRequest { id = 2, bookId = 3, confirmation = false, pending = true, userId = 2, requestDate = DateOnly.FromDateTime(DateTime.Now) },
                new BookPublishRequest { id = 3, bookId = 4, confirmation = true, pending = false, userId = 3, requestDate = DateOnly.FromDateTime(DateTime.Now) },
                new BookPublishRequest { id = 4, bookId = 5, confirmation = false, pending = true, userId = 4, requestDate = DateOnly.FromDateTime(DateTime.Now) },
                new BookPublishRequest { id = 5, bookId = 6, confirmation = true, pending = false, userId = 5, requestDate = DateOnly.FromDateTime(DateTime.Now) },
                new BookPublishRequest { id = 6, bookId = 7, confirmation = false, pending = true, userId = 1, requestDate = DateOnly.FromDateTime(DateTime.Now) },
                new BookPublishRequest { id = 7, bookId = 8, confirmation = true, pending = false, userId = 2, requestDate = DateOnly.FromDateTime(DateTime.Now) },
                new BookPublishRequest { id = 8, bookId = 9, confirmation = false, pending = true, userId = 3, requestDate = DateOnly.FromDateTime(DateTime.Now) },
                new BookPublishRequest { id = 9, bookId = 10, confirmation = true, pending = false, userId = 4, requestDate = DateOnly.FromDateTime(DateTime.Now) },
                new BookPublishRequest { id = 10, bookId = 1, confirmation = false, pending = true, userId = 5, requestDate = DateOnly.FromDateTime(DateTime.Now) }
            );

            modelBuilder.Entity<LoanRequest>().HasData(
                new LoanRequest { id = 1, bookId = 1, confirmation = false, isReturned = false, requestDate = DateOnly.FromDateTime(DateTime.Now), returnDate = DateOnly.FromDateTime(DateTime.Now.AddDays(7)), pending = true, userId = 1 },
                new LoanRequest { id = 2, bookId = 2, confirmation = true, isReturned = true, requestDate = DateOnly.FromDateTime(DateTime.Now), returnDate = DateOnly.FromDateTime(DateTime.Now.AddDays(7)), pending = false, userId = 2 },
                new LoanRequest { id = 3, bookId = 3, confirmation = false, isReturned = false, requestDate = DateOnly.FromDateTime(DateTime.Now), returnDate = DateOnly.FromDateTime(DateTime.Now.AddDays(7)), pending = true, userId = 3 },
                new LoanRequest { id = 4, bookId = 4, confirmation = true, isReturned = false, requestDate = DateOnly.FromDateTime(DateTime.Now), returnDate = DateOnly.FromDateTime(DateTime.Now.AddDays(7)), pending = false, userId = 4 },
                new LoanRequest { id = 5, bookId = 5, confirmation = false, isReturned = false, requestDate = DateOnly.FromDateTime(DateTime.Now), returnDate = DateOnly.FromDateTime(DateTime.Now.AddDays(7)), pending = true, userId = 5 },
                new LoanRequest { id = 6, bookId = 6, confirmation = true, isReturned = false, requestDate = DateOnly.FromDateTime(DateTime.Now), returnDate = DateOnly.FromDateTime(DateTime.Now.AddDays(7)), pending = false, userId = 1 },
                new LoanRequest { id = 7, bookId = 7, confirmation = false, isReturned = false, requestDate = DateOnly.FromDateTime(DateTime.Now), returnDate = DateOnly.FromDateTime(DateTime.Now.AddDays(7)), pending = true, userId = 2 },
                new LoanRequest { id = 8, bookId = 8, confirmation = true, isReturned = false, requestDate = DateOnly.FromDateTime(DateTime.Now), returnDate = DateOnly.FromDateTime(DateTime.Now.AddDays(7)), pending = false, userId = 3 },
                new LoanRequest { id = 9, bookId = 9, confirmation = false, isReturned = false, requestDate = DateOnly.FromDateTime(DateTime.Now), returnDate = DateOnly.FromDateTime(DateTime.Now.AddDays(7)), pending = true, userId = 4 },
                new LoanRequest { id = 10, bookId = 10, confirmation = true, isReturned = false, requestDate = DateOnly.FromDateTime(DateTime.Now), returnDate = DateOnly.FromDateTime(DateTime.Now.AddDays(7)), pending = false, userId = 5 }
            );

            modelBuilder.Entity<Message>().HasData(
                new Message { id = 1, content = "Hello!", isRead = false, recieverId = 2, senderId = 1, sendingDate = DateOnly.FromDateTime(DateTime.Now), title = "Greetings" },
                new Message { id = 2, content = "How are you?", isRead = true, recieverId = 3, senderId = 2, sendingDate = DateOnly.FromDateTime(DateTime.Now), title = "Check-in" },
                new Message { id = 3, content = "Meeting tomorrow?", isRead = false, recieverId = 4, senderId = 3, sendingDate = DateOnly.FromDateTime(DateTime.Now), title = "Meeting" },
                new Message { id = 4, content = "Check your email", isRead = false, recieverId = 5, senderId = 4, sendingDate = DateOnly.FromDateTime(DateTime.Now), title = "Reminder" },
                new Message { id = 5, content = "Let's catch up", isRead = true, recieverId = 1, senderId = 5, sendingDate = DateOnly.FromDateTime(DateTime.Now), title = "Catch-up" },
                new Message { id = 6, content = "Project update", isRead = false, recieverId = 2, senderId = 1, sendingDate = DateOnly.FromDateTime(DateTime.Now), title = "Update" },
                new Message { id = 7, content = "Great job!", isRead = false, recieverId = 3, senderId = 2, sendingDate = DateOnly.FromDateTime(DateTime.Now), title = "Praise" },
                new Message { id = 8, content = "Next steps?", isRead = true, recieverId = 4, senderId = 3, sendingDate = DateOnly.FromDateTime(DateTime.Now), title = "Discussion" },
                new Message { id = 9, content = "See you soon", isRead = false, recieverId = 5, senderId = 4, sendingDate = DateOnly.FromDateTime(DateTime.Now), title = "Goodbye" },
                new Message { id = 10, content = "Congrats!", isRead = false, recieverId = 1, senderId = 5, sendingDate = DateOnly.FromDateTime(DateTime.Now), title = "Congratulations" }
            );

            modelBuilder.Entity<Page>().HasData(
                new Page { id = 1, bookId = 1, content = "Page content 1", pageNumber = 1 },
                new Page { id = 2, bookId = 1, content = "Page content 2", pageNumber = 2 },
                new Page { id = 3, bookId = 2, content = "Page content 1", pageNumber = 1 },
                new Page { id = 4, bookId = 2, content = "Page content 2", pageNumber = 2 },
                new Page { id = 5, bookId = 3, content = "Page content 1", pageNumber = 1 },
                new Page { id = 6, bookId = 3, content = "Page content 2", pageNumber = 2 },
                new Page { id = 7, bookId = 4, content = "Page content 1", pageNumber = 1 },
                new Page { id = 8, bookId = 4, content = "Page content 2", pageNumber = 2 },
                new Page { id = 9, bookId = 5, content = "Page content 1", pageNumber = 1 },
                new Page { id = 10, bookId = 5, content = "Page content 2", pageNumber = 2 }
            );

            modelBuilder.Entity<Point>().HasData(
                new Point { id = 1, earnDate = DateOnly.FromDateTime(DateTime.Now), userId = 1, point = 10 },
                new Point { id = 2, earnDate = DateOnly.FromDateTime(DateTime.Now), userId = 2, point = 20 },
                new Point { id = 3, earnDate = DateOnly.FromDateTime(DateTime.Now), userId = 3, point = 30 },
                new Point { id = 4, earnDate = DateOnly.FromDateTime(DateTime.Now), userId = 4, point = 40 },
                new Point { id = 5, earnDate = DateOnly.FromDateTime(DateTime.Now), userId = 5, point = 50 },
                new Point { id = 6, earnDate = DateOnly.FromDateTime(DateTime.Now), userId = 1, point = 60 },
                new Point { id = 7, earnDate = DateOnly.FromDateTime(DateTime.Now), userId = 2, point = 70 },
                new Point { id = 8, earnDate = DateOnly.FromDateTime(DateTime.Now), userId = 3, point = 80 },
                new Point { id = 9, earnDate = DateOnly.FromDateTime(DateTime.Now), userId = 4, point = 90 },
                new Point { id = 10, earnDate = DateOnly.FromDateTime(DateTime.Now), userId = 5, point = 100 }
            );

            modelBuilder.Entity<Punishment>().HasData(
                new Punishment { id = 1, fineAmount = 5, isActive = true, punishmentDate = DateOnly.FromDateTime(DateTime.Now), userId = 1},
                new Punishment { id = 2, fineAmount = 10, isActive = true, punishmentDate = DateOnly.FromDateTime(DateTime.Now), userId = 3 },
                new Punishment { id = 3, fineAmount = 15, isActive = false, punishmentDate = DateOnly.FromDateTime(DateTime.Now), userId = 1 },
                new Punishment { id = 4, fineAmount = 20, isActive = true, punishmentDate = DateOnly.FromDateTime(DateTime.Now), userId = 2 },
                new Punishment { id = 5, fineAmount = 25, isActive = false, punishmentDate = DateOnly.FromDateTime(DateTime.Now), userId = 1 },
                new Punishment { id = 6, fineAmount = 30, isActive = true, punishmentDate = DateOnly.FromDateTime(DateTime.Now), userId = 3 },
                new Punishment { id = 7, fineAmount = 35, isActive = true, punishmentDate = DateOnly.FromDateTime(DateTime.Now), userId = 2 },
                new Punishment { id = 8, fineAmount = 40, isActive = false, punishmentDate = DateOnly.FromDateTime(DateTime.Now), userId = 1 },
                new Punishment { id = 9, fineAmount = 45, isActive = true, punishmentDate = DateOnly.FromDateTime(DateTime.Now), userId = 4 },
                new Punishment { id = 10, fineAmount = 50, isActive = false, punishmentDate = DateOnly.FromDateTime(DateTime.Now), userId = 1 }
            );

            modelBuilder.Entity<RegisterRequest>().HasData(
                new RegisterRequest { id = 1, confirmation = false, pending = true, requestDate = DateOnly.FromDateTime(DateTime.Now), userId = 1 },
                new RegisterRequest { id = 2, confirmation = true, pending = false, requestDate = DateOnly.FromDateTime(DateTime.Now), userId = 2 },
                new RegisterRequest { id = 3, confirmation = false, pending = true, requestDate = DateOnly.FromDateTime(DateTime.Now), userId = 3 },
                new RegisterRequest { id = 4, confirmation = true, pending = false, requestDate = DateOnly.FromDateTime(DateTime.Now), userId = 4 },
                new RegisterRequest { id = 5, confirmation = false, pending = true, requestDate = DateOnly.FromDateTime(DateTime.Now), userId = 5 },
                new RegisterRequest { id = 6, confirmation = true, pending = false, requestDate = DateOnly.FromDateTime(DateTime.Now), userId = 1 },
                new RegisterRequest { id = 7, confirmation = false, pending = true, requestDate = DateOnly.FromDateTime(DateTime.Now), userId = 2 },
                new RegisterRequest { id = 8, confirmation = true, pending = false, requestDate = DateOnly.FromDateTime(DateTime.Now), userId = 3 },
                new RegisterRequest { id = 9, confirmation = false, pending = true, requestDate = DateOnly.FromDateTime(DateTime.Now), userId = 4 },
                new RegisterRequest { id = 10, confirmation = true, pending = false, requestDate = DateOnly.FromDateTime(DateTime.Now), userId = 5 }
            );

            modelBuilder.Entity<User>().HasData(
                new User { id = 1, email = "test1@ex.com", name = "Alice", surname = "Smith", username = "alice_smith", password = "pass123", roleId = 1, userStatus = true },
                new User { id = 2, email = "test2@ex.com", name = "Bob", surname = "Johnson", username = "bob_johnson", password = "pass456", roleId = 2, userStatus = true },
                new User { id = 3, email = "test3@ex.com", name = "Charlie", surname = "Brown", username = "charlie_brown", password = "pass789", roleId = 1, userStatus = false },
                new User { id = 4, email = "test4@ex.com", name = "Diana", surname = "Wright", username = "diana_wright", password = "pass321", roleId = 2, userStatus = true },
                new User { id = 5, email = "test5@ex.com", name = "Eve", surname = "Davis", username = "eve_davis", password = "pass654", roleId = 1, userStatus = true },
                new User { id = 6, email = "test6@ex.com", name = "Frank", surname = "Clark", username = "frank_clark", password = "pass987", roleId = 2, userStatus = false },
                new User { id = 7, email = "test7@ex.com", name = "Grace", surname = "Lewis", username = "grace_lewis", password = "pass147", roleId = 1, userStatus = true },
                new User { id = 8, email = "test8@ex.com", name = "Henry", surname = "Walker", username = "henry_walker", password = "pass258", roleId = 2, userStatus = true },
                new User { id = 9, email = "test9@ex.com", name = "Ivy", surname = "Allen", username = "ivy_allen", password = "pass369", roleId = 1, userStatus = false },
                new User { id = 10, email = "test10@ex.com", name = "Jack", surname = "Young", username = "jack_young", password = "pass1234", roleId = 2, userStatus = true }
            );

            modelBuilder.Entity<Role>().HasData(

               new Role { id = 1, name = "member" },
                new Role { id = 2, name = "manager" },
                new Role { id = 3, name = "staff" },
                new Role { id = 4, name = "author" }
                );
        }
    }
}
