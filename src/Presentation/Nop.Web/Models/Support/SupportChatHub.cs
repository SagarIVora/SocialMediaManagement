using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Nop.Web.Models.Support
{
    public class SupportChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            // Broadcast the message to all clients
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
