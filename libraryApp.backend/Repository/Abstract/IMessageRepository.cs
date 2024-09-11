using libraryApp.backend.Entity;

namespace libraryApp.backend.Repository.Abstract
{
    public interface IMessageRepository
    {
        public IEnumerable<Message> GetAllMessages();
        public Message GetMessageById(int id);
        public void AddMessage(Message message);
        public void UpdateMessage(Message message);
        public void DeleteMessage(int id);
        public void Save();
    }
}
