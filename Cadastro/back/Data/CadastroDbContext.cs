using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back.Models;
using Microsoft.EntityFrameworkCore;

namespace back.Data
{
    public class CadastroDbContext : DbContext
    {
        public CadastroDbContext(DbContextOptions<CadastroDbContext> options) : base(options)
        {
            
        }

        public DbSet<Usuario> Usuarios => Set<Usuario>();
    }
}