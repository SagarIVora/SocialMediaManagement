using System;
using System.ComponentModel.DataAnnotations;
using Nop.Core;

namespace Nop.Web.Models.Support
{
    public class SupportChat : BaseEntity
    {
        public int SenderId { get; set; }
        public int ReceiverId { get; set; }
        public string Message { get; set; }
        public DateTime? TimeStamp { get; set; }
        public bool IsRead { get; set; }
    }
}
