using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back.ViewModel
{
    public class UserToken
    {
        public string Token { get; set; } = String.Empty;
        public DateTime Expiration { get; set; }
    }
}