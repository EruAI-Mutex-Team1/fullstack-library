namespace libraryApp.backend.Entity
{
    public class BookPublishRequest //gelen isteği yayınlama
    {
        public int id { get; set; }
        public int userId { get; set; }
        public int bookId { get; set; }
        public DateOnly requestDate { get; set; } //istek tarihi
        public bool confirmation { get; set; } //onay merkezi onaylama
        public bool pending { get; set; } //beklede

        public User? User { get; set; }
        public Book? Book { get; set; }
    }
}
