namespace libraryApp.backend.Entity
{
    public class Page
    {
        public int id { get; set; }
        public int bookId { get; set; }
        public string content { get; set; } = string.Empty;
        public int pageNumber { get; set; }
    }
}
