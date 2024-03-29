using Nop.Core.Domain.Localization;

namespace Nop.Core.Domain.Custom
{
    public class UserEmailOtp : BaseEntity, ILocalizedEntity
    {
        public string Email { get; set; }
        public string OTP { get; set; }
    }
}
