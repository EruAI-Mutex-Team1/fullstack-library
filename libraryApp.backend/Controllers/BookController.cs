﻿using AutoMapper;
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
            var book = await _bookRepository.GetAllBooks.Include(b => b.Pages).FirstOrDefaultAsync(b => b.id == id);
            if (book == null)
            {
                return NotFound();
            }


            bookReadDTO readDTO = new bookReadDTO{
                title = book.title,
                pages = book.Pages.Select(p => p.content).ToList(),
            };

            return Ok(readDTO);
        }

        [HttpGet("bytitle")]
        public async Task<IActionResult> GetBooksByTitle([FromQuery] string? title)
        {
            var books = await _bookRepository.GetAllBooks
                .Where(b => b.title.Contains(title ?? "") && b.status == true)
                .Include(b => b.BookAuthors)
                .ThenInclude(b => b.User)
                .ToListAsync();

            List<BookSearchDTO> BookDtos = books.Select(b => new BookSearchDTO
            {
                id = b.id,
                title = b.title,
                type = b.type,
                number_of_pages = b.number_of_pages,
                BookAuthors = b.BookAuthors.Select(ba => ba.User.name + " " + ba.User.surname).ToList()
            }).ToList();

            return Ok(BookDtos);
        }

        [HttpGet("borrowed/{id}")]
        public async Task<IActionResult> GetBorrowedBooksByUser(int id)
        {
            var bookLoans = _loanRequestRepository.GetAllLoanRequests.Where(b => b.pending != true && b.confirmation == true && b.isReturned == false).Include(lr => lr.Book).ThenInclude(u => u.BookAuthors).ThenInclude(ba => ba.User);

            List<LoanRequestListDTO> BookDtos = bookLoans.Select(loan => new LoanRequestListDTO
            {
                bookId = loan.bookId,
                title = loan.Book.title,
                BookAuthors = loan.Book.BookAuthors.Select(ba => ba.User.name + " " + ba.User.surname).ToList(),
                returnDate = loan.returnDate,
                requestDate = loan.requestDate,
            }).ToList();

            return Ok(BookDtos);
        }

        [HttpGet("byauthor/{id}")]
        public async Task<IActionResult> GetBooksByAuthor(int id)
        {
            var books = await _bookAuthorRepository.GetAllAuthors
                .Where(ba => ba.userId == id)
                .Select(ba => ba.Book)
                .ToListAsync();

            List<BookSearchDTO> BookDtos = books.Select(book => new BookSearchDTO
            {
                id = book.id,
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
            var requests = await _bookPublishRequestRepository.GetAllBookPublishRequests.Where(bpr => bpr.pending).Include(bpr => bpr.User).Include(bpr => bpr.Book).ToListAsync();

            List<BookPublishRequestDTO> RequestDtos = requests.Select(request => new BookPublishRequestDTO
            {
                id = request.id,
                bookId = request.Book.id,
                requestDate = request.requestDate,
                confirmation = request.confirmation,
                pending = request.pending,
                userFullname = request.User.name + " " +request.User.surname,
                bookTitle = request.Book.title,
            }).ToList();

            return Ok(RequestDtos);
        }

        [HttpPost("{id}/addpage")]
        public async Task<IActionResult> AddPageToBook(int id, [FromBody] PageDTO pageDTO)
        {
            var book = await _bookRepository.GetAllBooks.Include(b => b.Pages).FirstOrDefaultAsync(b => b.id == id);
            if (book == null)
            {
                return NotFound();
            }

            int newPageNumber = book.Pages.Count + 1;
            pageDTO.bookId = id;

            var newPage = new Page
            {
                bookId = id,
                pageNumber = newPageNumber,
                content = pageDTO.content
            };

            await _pageRepository.AddPage(newPage);

            return Ok(new { Message = "Page added successfully!" });
        }

        [HttpPut("returnBook")]
        public async Task<IActionResult> ReturnBook([FromBody] int kitapId)
        {
            var loan = await _loanRequestRepository.GetAllLoanRequests.FirstOrDefaultAsync(lr => lr.confirmation && !lr.isReturned && lr.bookId == kitapId);
            if (loan == null)
            {
                return NotFound();
            }

            loan.isReturned = true;
            await _loanRequestRepository.UpdateLoanRequest(loan);

            return Ok(new { Message = "Book returned succesfully!" });
        }
        [HttpPost("create")]
        public async Task<IActionResult> CreateBook([FromBody] bookCreateDTO bookCreateDTO)
        {
            var newBook = new Book
            {
                title = bookCreateDTO.title,
                type = bookCreateDTO.type,
                status = false,
                number_of_pages = 0,
            };
            await _bookRepository.AddBook(newBook);

            _bookAuthorRepository.AddBookAuthor(new BookAuthor{
                userId = bookCreateDTO.yazarId,
                bookId = newBook.id,
            });

            return Ok(new { Message = "Book created successfully!" });
        }
        [HttpPut("editBookTitle")]
        public async Task<IActionResult> editBookTitle([FromBody] bookChangeTitleDTO bookChangeTitleDTO)
        {
            var book = await _bookRepository.GetBookById(bookChangeTitleDTO.bookId);
            if(book == null) return NotFound();
            book.title = bookChangeTitleDTO.yeniIsim;
            _bookRepository.UpdateBook(book);
            return Ok();
        }

        [HttpPost("requestBook")]
        public async Task<IActionResult> RequestBorrowingBook([FromBody] LoanRequestDTO loanRequestDTO)
        {
            var user = await _userRepository.GetUseridAsync(loanRequestDTO.userId);
            if (user == null)
            {
                return NotFound();
            }

            var book = await _bookRepository.GetBookById(loanRequestDTO.bookId);
            if (book == null)
            {
                return NotFound();
            }
            // var existingRequest = await _loanRequestRepository.GetLoanRequestByUserAndBook(loanRequestDTO.userId, loanRequestDTO.bookId);
            // if (existingRequest != null && !existingRequest.isReturned)
            // {
            //     return Conflict(new { Message = "You have already sent borrowing request" });
            // }
            var newLoanRequest = new LoanRequest
            {
                userId = loanRequestDTO.userId,
                bookId = loanRequestDTO.bookId,
                requestDate = DateOnly.FromDateTime(DateTime.UtcNow),
                returnDate = DateOnly.FromDateTime(DateTime.UtcNow.AddDays(14)),
                isReturned = false,
                confirmation = false,
                pending = true
            };
            
            _loanRequestRepository.AddLoanRequest(newLoanRequest);
            return Ok(new { Message = "Loan request submitted successfully!" });
        }
        [HttpPost("setBorrowRequest")]
        public async Task<IActionResult> SetBorrowRequest([FromBody] BorrowRequestUpdateDTO borrowRequestUpdateDTO)
        {
            var loanRequest = await _loanRequestRepository.GetLoanRequestById(borrowRequestUpdateDTO.requestId);
            if (loanRequest == null)
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

        [HttpGet("getBorrowRequests")]
        public async Task<IActionResult> SetBorrowRequest()
        {
            var requests  = await _loanRequestRepository.GetAllLoanRequests.Where(lr => lr.pending).Include(lr => lr.User).Include(lr => lr.Book).ToListAsync();
            return Ok(requests.Select(r => new GetBorrowReqDTO{
                id = r.id,
                userFullname = r.User.name + " " + r.User.surname,
                bookTitle = r.Book.title,
                borrowDate = r.requestDate,
                returnDate = r.returnDate,
            }).ToList());
        }

        [HttpPost("requestpublishment")]
        public async Task<IActionResult> RequestPublishment([FromBody] RequestPublishmentDTO requestpublishment)
        {
            var newPublishRequest = new BookPublishRequest
            {
                bookId = requestpublishment.kitapId,
                requestDate = DateOnly.FromDateTime(DateTime.UtcNow),
                confirmation = false,
                pending = true,
                userId = requestpublishment.yazarId
            };

            await _bookPublishRequestRepository.AddBookPublishRequest(newPublishRequest);

            return Ok();
        }

        [HttpPut("setpublishing")]
        public async Task<IActionResult> SetPublishing([FromBody] SetPublishingDTO publishingDto)
        {
            var publishRequest = await _bookPublishRequestRepository.GetBookPublishRequestById(publishingDto.id);

            if (publishRequest == null)
            {
                return NotFound();
            }

            if (!publishRequest.pending)
            {
                return BadRequest(new { Message = "Publish request has already checked." });
            }

            publishRequest.confirmation = publishingDto.confirmation;
            publishRequest.pending = false;

            if (publishingDto.confirmation)
            {
                var book = await _bookRepository.GetBookById(publishRequest.bookId);
                if (book != null)
                {
                    book.status = true;
                    await _bookRepository.UpdateBook(book);
                }
            }

            await _bookPublishRequestRepository.UpdateBookPublishRequest(publishRequest);

            return Ok(new { Message = "Publish request updated.", Confirmation = publishRequest.confirmation });
        }

    }
}
