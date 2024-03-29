using System;
using System.Collections.Generic;

namespace Nop.Web.Models.Custom
{
    public class Media
    {
        public string id { get; set; }
        public int MediaDataId { get; set; }
        public string media_url { get; set; }
        public int comments_count { get; set; }
        public int like_count { get; set; }
        public int impression_count { get; set; }
        public string permalink { get; set; }
        public List<Comment> Comments { get; set; }
        public DateTime timestamp { get; set; }
        public DateTime DateCreated { get; set; }

        public Media()
        {
            Comments = new List<Comment>();
        }
    }
}
