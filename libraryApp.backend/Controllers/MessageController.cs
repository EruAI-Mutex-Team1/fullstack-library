using libraryApp.backend.Dtos;
using libraryApp.backend.Repository.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace libraryApp.backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IMessageRepository _messageRepository;
        public MessageController(IMessageRepository messageRepository) 
        { 
            _messageRepository = messageRepository;
        }
        [HttpGet("getMessages")]
        public async Task<IActionResult> GetAllMessages()
        {
            var messages = await _messageRepository.GetAllMessages.ToListAsync();
            if (!messages.Any())
            {
                return NotFound();
            }
            List<GetMessageDTO> messageDTO = messages.Select(m => new GetMessageDTO
            {
                title = m.title,
                content = m.content,
                sendingDate = m.sendingDate,
                isRead = m.isRead,
                sender = m.sender,
                reciever = m.reciever,
            }).ToList();
            return Ok(messageDTO);
        }
    }
}
