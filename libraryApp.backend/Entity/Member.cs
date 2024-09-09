namespace libraryApp.backend.Entity
{
    public class Member
    {
        public int id { get; set; }
        public string name { get; set; } = string.Empty;
        public string surname { get; set; } = string.Empty;
        public string username {  get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public string phone { get; set; } = string.Empty;
        public int roleId { get; set; }

    }
}
