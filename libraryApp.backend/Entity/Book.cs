namespace libraryApp.backend.Entity
{
    public class Book
    {
        public int id { get; set; }
        public string title { get; set; } = string.Empty;
        public string type { get; set; } = string.Empty;
        public bool status {  get; set; }
        public int number_of_pages { get; set; }
    }
}
