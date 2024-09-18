using libraryApp.backend.Entity;

namespace libraryApp.backend.Repository.Abstract
{
    public interface IRegisterRequestRepository
    {
        IQueryable<RegisterRequest> GetAllRegisterRequests { get; }
        Task<RegisterRequest> GetByIdAsync(int id);
        Task CreateRegisterRequestAsync(RegisterRequest record);
        Task UpdateAsync(RegisterRequest record);
        Task DeleteAsync(RegisterRequest record);
        Task<Role> GetAdminByIdAsync(int id);
    }
}
