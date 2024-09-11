using libraryApp.backend.Entity;

namespace libraryApp.backend.Repository.Abstract
{
    public interface ILoanRequestRepository
    {
        public IEnumerable<LoanRequest> GetAllLoanRequests();
        public LoanRequest GetLoanRequestById(int id);
        public void AddLoanRequest(LoanRequest loanRequest);
        public void UpdateLoanRequest(LoanRequest loanRequest);
        public void DeleteLoanRequest(int id);
        public void Save();
    }
}
