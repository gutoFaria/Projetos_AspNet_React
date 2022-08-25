using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using back.Services;
using back.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
//using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;

namespace back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        // implementar e autenticar usuários
        private readonly IConfiguration _configuration;
        private readonly IAuthenticate _authentication;

        public AccountController(IConfiguration configuration,
        IAuthenticate authentication)
        {
            _configuration = configuration ??
                throw new ArgumentException(nameof(configuration));
            _authentication = authentication ??
                throw new ArgumentException(nameof(authentication));
        }

        [HttpPost("CreateUser")]
        public async Task<ActionResult<UserToken>> CreateUser([FromBody] RegisterVM model)
        {
            if(model.Password != model.ConfirmaPassword)
            {
                ModelState.AddModelError("ConfirmPassword","A senha não confere");
                return BadRequest(ModelState);
            }

            var result = await _authentication.RegisterUser(model.Email,model.Password);
        
            if(result)
            {
                return Ok($"Usuário {model.Email} criado com sucesso");
            }
            else
            {
                ModelState.AddModelError("CreateUser","Registro inválido");
                return BadRequest(ModelState);
            }
        }

        [HttpPost("LoginUser")]
        public async Task<ActionResult<UserToken>> Login([FromBody] LoginVM userInfo)
        {
            var result = await _authentication.Authenticate(userInfo.Email,userInfo.Password);

            if(result)
            {
                return GenerateToken(userInfo);
            }
            else
            {
                ModelState.AddModelError("LoginUser","Login inválido");
                return BadRequest(ModelState);
            }
        }

        private ActionResult<UserToken> GenerateToken(LoginVM userInfo)
        {
            //gerar clams
            var claims = new[]
            {
                new Claim("email",userInfo.Email),
                new Claim("meuToken","gutotoken"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()) // identificador único
            };

            // criar uma nova chave
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expiration = DateTime.UtcNow.AddMinutes(20);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"] ,
                claims: claims,
                expires: expiration,
                signingCredentials: creds
            );

            return new UserToken()
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = expiration
            };
        }
    }
}