namespace libraryApp.backend.Entity
{
    public class Page
    {
        public int id { get; set; }
        public int bookId { get; set; }
        public int pageNumber { get; set; }

        public Book Book { get; set; } = null;
    }
}
