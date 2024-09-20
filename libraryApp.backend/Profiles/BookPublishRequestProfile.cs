using AutoMapper;
using libraryApp.backend.Dtos;
using libraryApp.backend.Entity;

namespace libraryApp.backend.Profiles
{
    public class BookPublishRequestProfile : Profile
    {
        public BookPublishRequestProfile()
        {
            CreateMap<BookPublishRequest, BookPublishRequestDTO>();
        }
    }
}
