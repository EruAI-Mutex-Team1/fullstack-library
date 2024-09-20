using libraryApp.backend.Entity;

namespace libraryApp.backend.Dtos
{
    public class BookPublishRequestDTO
    {
        public DateOnly requestDate { get; set; }
        public bool confirmation { get; set; } 
        public bool pending { get; set; } 

        public User? User { get; set; }
        public Book? Book { get; set; }
    }
}
