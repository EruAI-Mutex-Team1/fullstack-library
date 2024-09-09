namespace libraryApp.backend.Entity
{
    public class Loan
    {
        public int id { get; set; }
        public int bookId { get; set; }
        public int memberId { get; set; }
        public DateOnly loanDate { get; set; }
        public DateOnly returnDate { get; set; }
        public bool isReturned { get; set; }
    }
}
