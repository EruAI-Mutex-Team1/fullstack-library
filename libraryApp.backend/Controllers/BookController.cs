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

            var booksDto = _mapper.Map<Book>(books);

            return Ok(booksDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBookById(int id)
        {
            var book = await _bookRepository.GetBookById(id);
            if (book == null)
            {
                return NotFound();
            }

            var booksDto = _mapper.Map<BookSearchDTO>(_bookRepository);

            return Ok(booksDto);
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

            var booksDto = _mapper.Map<BookSearchDTO>(_bookRepository);

            return Ok(booksDto);
        }

        [HttpGet("borrowed/{id}")]
        public async Task<IActionResult> GetBorrowedBooksByUser(int id)
        {
            User user = await _userRepository.GetUseridAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            var books = user.LoanRequests.Where(b => b.pending != true && b.confirmation == true && b.isReturned == false);

            var booksDto = _mapper.Map<BookSearchDTO>(_bookRepository);

            return Ok(booksDto);
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

            var booksDto = _mapper.Map<BookSearchDTO>(_bookRepository);

            return Ok(books);
        }

        [HttpGet("publishrequests")]
        public async Task<IActionResult> GetBookPublishRequests()
        {
            var requests = await _bookPublishRequestRepository.GetAllBookPublishRequests.ToListAsync();
            if (!requests.Any())
            {
                return NotFound();
            }

            var requestsDto = _mapper.Map<BookPublishRequestDTO>(_bookPublishRequestRepository);

            return Ok(requests);
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
