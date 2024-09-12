using libraryApp.backend.Entity;

namespace libraryApp.backend.Repository.Abstract
{
    public interface ILoanRequestRepository
    {
        Task<IEnumerable<LoanRequest>> GetAllLoanRequests();
        Task<LoanRequest> GetLoanRequestById(int id);
        Task AddLoanRequest(LoanRequest loanRequest);
        Task UpdateLoanRequest(LoanRequest loanRequest);
        Task DeleteLoanRequest(int id);
    }
}
