using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nop.Core.Domain.Localization;

namespace Nop.Core.Domain.Custom
{
    public class UserMobileOTP : BaseEntity, ILocalizedEntity
    {
        public string PhoneNumber { get; set; }
        public string OTP { get; set; }
    }
}
