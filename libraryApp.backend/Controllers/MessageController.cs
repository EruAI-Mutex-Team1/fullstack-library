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
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMessageById(int id)
        {
            var message = await _messageRepository.GetMessageById(id);
            if (message == null)
            {
                return NotFound();
            }
            GetMessageDTO getMessageDTO = new GetMessageDTO
            {
                title = message.title,
                content = message.content,
                sendingDate = message.sendingDate,
                isRead = message.isRead,
                sender = message.sender,
                reciever = message.reciever
            };
            return Ok(getMessageDTO);
        }
        [HttpGet("isReadMessages")]
        public async Task<IActionResult> GetIsReadMessages()
        {
            var messages = await _messageRepository.GetAllMessages
                .Where(m => m.isRead == true)
                .ToListAsync();

            if (messages == null || !messages.Any())
            {
                return NotFound();
            }

            var messageDTO = messages.Select(m => new GetMessageDTO
            {
                title = m.title,
                content = m.content,
                sendingDate = m.sendingDate,
            }).ToList();

            return Ok(messageDTO);
        }

    }
}
