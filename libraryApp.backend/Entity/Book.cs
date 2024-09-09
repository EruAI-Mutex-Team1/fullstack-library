namespace libraryApp.backend.Entity
{
    public class Book
    {
        public int id { get; set; }
        public string title { get; set; } = string.Empty;
        public string author { get; set; } = string.Empty;
        public int totalPages { get; set; }
        public DateOnly publishDate { get; set; }


    }
}
