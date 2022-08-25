using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace back.Data
{
    public class CadastroDbContext : IdentityDbContext<IdentityUser>
    {
        public CadastroDbContext(DbContextOptions<CadastroDbContext> options) : base(options)
        {
            
        }

        public DbSet<Usuario> Usuarios => Set<Usuario>();
    }
}