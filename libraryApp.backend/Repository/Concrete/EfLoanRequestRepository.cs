using libraryApp.backend.Entity;
using libraryApp.backend.Repository.Abstract;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace libraryApp.backend.Repository.Concrete
{
    public class EfLoanRequestRepository : ILoanRequestRepository
    {
        private readonly LibraryDbContext _context;
        public EfLoanRequestRepository(LibraryDbContext context)
        {
            _context = context;
        }
        public async Task AddLoanRequest(LoanRequest loanRequest)
        {
            await _context.LoanRequests.AddAsync(loanRequest);
        }

        public async Task DeleteLoanRequest(int id)
        {
            var loanRequest = await _context.LoanRequests.FindAsync(id);
            if (loanRequest != null) 
            { 
                _context.LoanRequests.Remove(loanRequest);
            }
        }

        public async Task<IEnumerable<LoanRequest>> GetAllLoanRequests()
        {
            return await _context.LoanRequests.ToListAsync();
        }

        public async Task<LoanRequest> GetLoanRequestById(int id)
        {
            return await _context.LoanRequests.FindAsync(id);
        }

        public async Task UpdateLoanRequest(LoanRequest loanRequest)
        {
            _context.LoanRequests.Update(loanRequest);
        }
    }
}
