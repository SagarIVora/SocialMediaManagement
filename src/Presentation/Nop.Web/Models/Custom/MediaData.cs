using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Nop.Web.Models.Custom
{
    public class MediaData
    {
        [JsonProperty("caption")]
        public string caption { get; set; }

        [JsonProperty("media_url")]
        public string media_url { get; set; }

        [JsonProperty("media_type")]
        public string media_type { get; set; }

        [JsonProperty("comments_count")]
        public int comments_count { get; set; }

        [JsonProperty("like_count")]
        public int like_count { get; set; }

        [JsonProperty("permalink")]
        public string permalink { get; set; }

        [JsonProperty("comments")]
        public List<Comment> comments { get; set; }

        [JsonProperty("id")]
        public string id { get; set; }

        [JsonProperty("timestamp")]
        public DateTime timestamp { get; set; }

        public int MediaDataId { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
