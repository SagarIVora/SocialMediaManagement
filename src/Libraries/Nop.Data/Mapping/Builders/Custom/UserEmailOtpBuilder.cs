using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentMigrator.Builders.Create.Table;
using Nop.Core.Domain.Custom;
using Nop.Core.Domain.Vendors;

namespace Nop.Data.Mapping.Builders.Custom
{
    public partial class UserEmailOtpBuilder : NopEntityBuilder<UserEmailOtp>
    {
        public override void MapEntity(CreateTableExpressionBuilder table)
        {
            table
                .WithColumn(nameof(UserEmailOtp.Email)).AsString(400).Nullable()
                .WithColumn(nameof(UserEmailOtp.OTP)).AsString(400).Nullable();
        }
    }
}
