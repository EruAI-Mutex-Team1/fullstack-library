using libraryApp.backend.Entity;

namespace libraryApp.backend.Repository.Abstract
{
    public interface IPunishRepository
    {
        IQueryable<Punishment> GetAllPunishments { get; }
        Task<Punishment> GetByIdAsync(int id);
        Task CreatePunishAsync(Punishment punish);
        Task UpdatePunishAsync(Punishment punish);
        Task DeletePunishAsync(int id);
        

    }
}
