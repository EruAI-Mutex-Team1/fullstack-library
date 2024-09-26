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
        private readonly ILoanRequestRepository _loanRequestRepository;

        public BookController(IBookRepository bookRepository, IBookAuthorRepository bookAuthorRepository,
            IBookPublishRequestRepository bookPublishRequestRepository, IPageRepository pageRepository,
            IUserRepository userRepository, ILoanRequestRepository loanRequestRepository)
        {
            _bookRepository = bookRepository;
            _bookAuthorRepository = bookAuthorRepository;
            _bookPublishRequestRepository = bookPublishRequestRepository;
            _pageRepository = pageRepository;
            _userRepository = userRepository;
            _loanRequestRepository = loanRequestRepository;
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
            {
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
        [HttpPut("returnBook")]
        public async Task<IActionResult> ReturnBook([FromBody] ReturnBookDTO returnBookDTO)// elimizde kitap ve kullanıcı id si var 
        {
            var loan = await _loanRequestRepository.GetLoanRequestById(returnBookDTO.bookId);
            if(loan == null)
            {
                return NotFound();
            }
            if (loan.isReturned)
            {
                return BadRequest("Book is already returned.");
            }
            
            loan.isReturned = true;
            await _loanRequestRepository.UpdateLoanRequest(loan);

            var book = await _bookRepository.GetBookById(returnBookDTO.bookId);
            if(book != null)
            {
                book.status = true;
                await _bookRepository.UpdateBook(book);
            }
            return Ok(new { Message = "Book returned succesfully!" });
        }
        [HttpPost("create")]
        public async Task<IActionResult> CreateBook([FromBody] Book book)
        {
            if (book == null || string.IsNullOrEmpty(book.title) || string.IsNullOrEmpty(book.type))
            {
                return BadRequest(new { Message = "Invalid book data. Title and Type are required." });
            }

            if (book.BookAuthors == null || !book.BookAuthors.Any())
            {
                return BadRequest(new { Message = "A book must have at least one author." });
            }

            await _bookRepository.AddBook(book);

            return Ok(new { Message = "Book created successfully!", BookId = book.id });
        }
        [HttpPost("requestBook")]
        public async Task<IActionResult> RequestBorrowingBook([FromBody] LoanRequestDTO loanRequestDTO)
        {
            var user = await _userRepository.GetUseridAsync(loanRequestDTO.userId);
            if(user == null)
            {
                return NotFound();
            }

            var book = await _bookRepository.GetBookById(loanRequestDTO.bookId);
            if(book == null)
            {
                return NotFound();
            }
            var existingRequest = await _loanRequestRepository.GetLoanRequestByUserAndBook(loanRequestDTO.userId, loanRequestDTO.bookId);
            if(existingRequest != null && !existingRequest.isReturned)
            {
                return Conflict(new { Message = "You have already sent borrowing request" });
            }
            var newLoanRequest = new LoanRequest
            {
                userId = loanRequestDTO.userId,
                bookId = book.id,
                requestDate = DateOnly.FromDateTime(DateTime.UtcNow),
                returnDate = DateOnly.FromDateTime(DateTime.UtcNow.AddDays(14)),
                isReturned = false,
                confirmation = false,
                pending = true
            };
            return Ok(new { Message = "Loan request submitted successfully!" });
        }
        [HttpPost("setBorrowRequest")]
        public async Task<IActionResult> SetBorrowRequest([FromBody] BorrowRequestUpdateDTO borrowRequestUpdateDTO)
        {
            var loanRequest = await _loanRequestRepository.GetLoanRequestById(borrowRequestUpdateDTO.requestId);
            if(loanRequest == null)
            {
                return NotFound();
            }
            if (borrowRequestUpdateDTO.confirmation)
            {
                loanRequest.confirmation = true;
                loanRequest.pending = false;
                loanRequest.isReturned = false;
            }
            else
            {
                loanRequest.pending = false;
                loanRequest.confirmation = false;
            }
            await _loanRequestRepository.UpdateLoanRequest(loanRequest);
            return Ok(new { Message = borrowRequestUpdateDTO.confirmation ? "Loan request approved successfully!" : "Loan request rejected successfully!" });
        }
    }
}
