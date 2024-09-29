namespace libraryApp.backend.Dtos
{
    public class RequestPublishmentDTO
    {
        public string title { get; set; } = string.Empty;
        public string type { get; set; } = string.Empty;
        public int number_of_pages { get; set; }
        public DateOnly requestDate { get; set; }
        public bool confirmation { get; set; }
        public bool pending { get; set; }

        public List<string> User { get; set; } = new();
        public List<string> Book { get; set; } = new();
    }
}
