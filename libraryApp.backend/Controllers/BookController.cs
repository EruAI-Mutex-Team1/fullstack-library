using AutoMapper;
using libraryApp.backend.Dtos;
using libraryApp.backend.Entity;
using libraryApp.backend.Repository.Abstract;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace libraryApp.backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookRepository _bookRepository;
        private readonly IBookAuthorRepository _bookAuthorRepository;
        private readonly IBookPublishRequestRepository _bookPublishRequestRepository;
        private readonly IPageRepository _pageRepository;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public BookController(IBookRepository bookRepository, IBookAuthorRepository bookAuthorRepository,
            IBookPublishRequestRepository bookPublishRequestRepository, IPageRepository pageRepository,
            IUserRepository userRepository, IMapper mapper)
        {
            _bookRepository = bookRepository;
            _bookAuthorRepository = bookAuthorRepository;
            _bookPublishRequestRepository = bookPublishRequestRepository;
            _pageRepository = pageRepository;
            _userRepository = userRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBooks()
        {
            var books = await _bookRepository.GetAllBooks.ToListAsync();
            if (!books.Any())
            {
                return NotFound();
            }

            List<BookSearchDTO> BooksDtos = books.Select(b => new BookSearchDTO
            {
                title = b.title,
                type = b.type,
                number_of_pages = b.number_of_pages,
                BookAuthors = b.BookAuthors.Select(ba => ba.User.name + " " + ba.User.surname).ToList()
            }).ToList();
            
            return Ok(BooksDtos);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBookById(int id)
        {
            var book = await _bookRepository.GetBookById(id);
            if (book == null)
            {
                return NotFound();
            }


            BookSearchDTO bookSearchDTO = new BookSearchDTO
            {
                title = book.title,
                type = book.type,
                number_of_pages = book.number_of_pages,
            };

            return Ok(bookSearchDTO);
        }

        [HttpGet("bytitle/{title}")]
        public async Task<IActionResult> GetBooksByTitle(string title)
        {
            var books = await _bookRepository.GetAllBooks
                .Where(b => b.title.Contains(title))
                .ToListAsync();
            if (!books.Any())
            {
                return NotFound();
            }

            List<BookSearchDTO> BookDtos = books.Select(b => new BookSearchDTO
            {
                id = b.id,
                title = b.title,
                type = b.type,
                number_of_pages=b.number_of_pages,
                BookAuthors = b.BookAuthors.Select(ba => ba.User.name + " " + ba.User.surname).ToList()
            }).ToList();

            return Ok(BookDtos);
        }

        [HttpGet("borrowed/{id}")]
        public async Task<IActionResult> GetBorrowedBooksByUser(int id)
        {
            User user = await _userRepository.GetUseridAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            var books = user.LoanRequests.Where(b => b.pending != true && b.confirmation == true && b.isReturned == false).
                Select(b => b.Book);

            List<BookSearchDTO> BookDtos = books.Select(book => new BookSearchDTO
            {   id= book.id,
                title = book.title,
                type = book.type,
                number_of_pages = book.number_of_pages,
                BookAuthors = book.BookAuthors.Select(ba => ba.User.name + " " + ba.User.surname).ToList()
            }).ToList();

            return Ok(BookDtos);
        }

        [HttpGet("byauthor/{id}")]
        public async Task<IActionResult> GetBooksByAuthor(int id)
        {
            var books = await _bookAuthorRepository.GetAllAuthors
                .Where(ba => ba.User.id == id)
                .Select(ba => ba.Book)
                .ToListAsync();
            if (!books.Any())
            {
                return NotFound();
            }

            List<BookSearchDTO> BookDtos = books.Select(book => new BookSearchDTO
            {
                title = book.title,
                type = book.type,
                number_of_pages = book.number_of_pages,
                BookAuthors = book.BookAuthors.Select(ba => ba.User.name + " " + ba.User.surname).ToList()
            }).ToList();

            return Ok(BookDtos);
        }

        [HttpGet("publishrequests")]
        public async Task<IActionResult> GetBookPublishRequests()
        {
            var requests = await _bookPublishRequestRepository.GetAllBookPublishRequests.ToListAsync();
            if (!requests.Any())
            {
                return NotFound();
            }

            List<BookPublishRequestDTO> RequestDtos = requests.Select(request => new BookPublishRequestDTO
            {
                requestDate = request.requestDate,
                confirmation = request.confirmation,
                pending = request.pending,
                User = new List<string>
                {
                    request.User.name,
                    request.User.surname
                },
                Book = new List<string>
                {
                    request.Book.title,
                }
            }).ToList();

            return Ok(RequestDtos);
        }

        [HttpPost("{id}/addpage")]
        public async Task<IActionResult> AddPageToBook(int id, [FromBody] Page page)
        {
            var book = await _bookRepository.GetBookById(id);
            if (book == null)
            {
                return NotFound();
            }

            int newPageNumber = book.Pages.Count > 0 ? book.Pages.Max(p => p.pageNumber) + 1 : 1;
            page.bookId = id;
            page.pageNumber = newPageNumber;

            book.Pages.Add(page);
            await _pageRepository.AddPage(page);

            return Ok(new { Message = "Page added successfully!" });
        }
    }
}
