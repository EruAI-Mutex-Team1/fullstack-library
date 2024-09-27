using libraryApp.backend.Entity;

namespace libraryApp.backend.Dtos
{
    public class BookPublishRequestDTO
    {
        public DateOnly requestDate { get; set; }
        public bool confirmation { get; set; } 
        public bool pending { get; set; }

        public List<string> User { get; set; } = new();
        public List<string> Book { get; set; } = new();
    }
}
