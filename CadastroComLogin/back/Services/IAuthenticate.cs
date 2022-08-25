using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back.Services
{
    public interface IAuthenticate
    {
        //pode ser implementado outros contratos com cadastro de usuário
        Task<bool> Authenticate(string email,string password);
        Task<bool> RegisterUser(string email,string password);
        Task Logout();

    }
}