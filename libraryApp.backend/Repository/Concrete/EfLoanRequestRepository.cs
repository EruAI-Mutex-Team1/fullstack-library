using AutoMapper;
using libraryApp.backend.Entity;
using libraryApp.backend.Repository.Abstract;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace libraryApp.backend.Repository.Concrete
{
    public class EfLoanRequestRepository : ILoanRequestRepository
    {
        private readonly LibraryDbContext _context;
        private readonly IMapper _mapper;

        public EfLoanRequestRepository(LibraryDbContext context, IMapper mapper )
        {
            _context = context;
            _mapper = mapper;
        }
        public IQueryable<LoanRequest> GetAllLoanRequests => _context.LoanRequests;

        public async Task<LoanRequest> GetLoanRequestById(int id)
        {
            return await _context.LoanRequests.FirstOrDefaultAsync(lr => lr.id == id);
        }

        public async Task AddLoanRequest(LoanRequest loanRequest)
        {
            if (loanRequest == null)
            {
                throw new ArgumentNullException(nameof(loanRequest));
            }
            await _context.LoanRequests.AddAsync(loanRequest);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateLoanRequest(LoanRequest loanRequest)
        {
            if (loanRequest == null)
            {
                throw new ArgumentNullException(nameof(loanRequest));
            }
            _context.LoanRequests.Update(loanRequest);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteLoanRequest(int id)
        {
            var loanRequest = await _context.LoanRequests.FirstOrDefaultAsync(lr => lr.id == id);
            if (loanRequest != null)
            {
                _context.LoanRequests.Remove(loanRequest);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new ArgumentException("Loan request not found");
            }
        }
    }
}
