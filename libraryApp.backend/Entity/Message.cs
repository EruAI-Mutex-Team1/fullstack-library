﻿namespace libraryApp.backend.Entity
{
    public class Message
    {
        public int id { get; set; }
        public int senderId { get; set; }
        public int recieverId { get; set; }
        public string content { get; set; } = string.Empty;
    }
}
