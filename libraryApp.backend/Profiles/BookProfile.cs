using AutoMapper;
using libraryApp.backend.Dtos;
using libraryApp.backend.Entity;

namespace libraryApp.backend.Profiles
{
    public class BookProfile : Profile
    {
        public BookProfile()
        {
            CreateMap<Book, BookSearchDTO>();
        }
    }
}
