namespace libraryApp.backend.Entity
{
    public class RegisterRequest  //Kayıt Talep
    {
        public int id { get; set; }
        public int userId { get; set; }
        public DateOnly responseDate { get; set; }
        public bool confirmation { get; set; }  //onaylamak
        public bool pending { get; set; }    //beklemede

        public User User { get; set; } = null;
    }
}
