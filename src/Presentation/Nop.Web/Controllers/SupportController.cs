using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Nop.Core;
using Nop.Core.Domain.Customers;
using Nop.Data;
using Nop.Services.Customers;
using Nop.Web.Models.Support;

namespace Nop.Web.Controllers
{
    public class SupportController : Controller
    {
        private readonly IWorkContext _workContext;
        private readonly ICustomerService _customerService;
        private readonly IRepository<SupportChat> _chatRepository;

        public SupportController(IWorkContext workContext,
            ICustomerService customerService,
            IRepository<SupportChat> chatRepository)
        {
            _workContext = workContext;
            _customerService = customerService;
            _chatRepository = chatRepository;

        }
        public IActionResult Index()
        {
            var user = _workContext.GetCurrentCustomerAsync().Result;
            var roles = _customerService.GetCustomerRolesAsync(user);
            return View();          
        }

        public IActionResult GetSupportListForExecutive(int Id)
        {
            var allchatmessages = _chatRepository.GetAll().Where(x=>x.SenderId == Id || x.ReceiverId == Id).ToList();
            return Json(""); 
        }
    }
}
