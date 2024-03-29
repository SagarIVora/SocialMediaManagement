using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentMigrator.Builders.Create.Table;
using Nop.Core.Domain.Custom;

namespace Nop.Data.Mapping.Builders.Custom
{
    public class UserMobileOtpBuilder : NopEntityBuilder<UserMobileOTP>
    {
        public override void MapEntity(CreateTableExpressionBuilder table)
        {
            table
                .WithColumn(nameof(UserMobileOTP.PhoneNumber)).AsString(400).Nullable()
                .WithColumn(nameof(UserMobileOTP.OTP)).AsString(400).Nullable();
        }
    }
}
