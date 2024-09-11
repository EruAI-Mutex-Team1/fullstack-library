namespace libraryApp.backend.Entity
{
    public class BookAuthor
    {
        public int id { get; set; }
        public int userId { get; set; }
        public int bookId { get; set; }

        public User User { get; set; } = null;
        public Book Book { get; set; } = null;

    }
}
