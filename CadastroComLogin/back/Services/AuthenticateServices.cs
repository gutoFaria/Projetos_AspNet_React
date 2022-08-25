using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace back.Services
{
    public class AuthenticateServices : IAuthenticate
    {
        // referência a microsoft aspnet.core identity
        private readonly SignInManager<IdentityUser> _signManager;
        private readonly UserManager<IdentityUser> _userManager;
        public AuthenticateServices(SignInManager<IdentityUser> signManager,
            UserManager<IdentityUser> userManager)
        {
            _signManager = signManager;
            _userManager = userManager;
        }
        public async Task<bool> Authenticate(string email, string password)
        {
            var result = await _signManager.PasswordSignInAsync(email,password,
                false,lockoutOnFailure:false);
            
            return result.Succeeded;
        }

        public async Task Logout()
        {
            await _signManager.SignOutAsync();
        }

        public async Task<bool> RegisterUser(string email, string password)
        {
            // uma instancia de user
            var user = new IdentityUser
            {
                UserName = email,
                Email = email
            };

            var result = await _userManager.CreateAsync(user,password);

            if(result.Succeeded)
            {
                await _signManager.SignInAsync(user,isPersistent:false);
            }

            return result.Succeeded;
        }
    }
}