using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace back.Models
{
    public class Usuario
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName ="nvarchar(150)")]
        public string Nome { get; set; } = String.Empty;
        [Column(TypeName ="nvarchar(15)")]
        public string telefone { get; set; } = String.Empty;
        [Column(TypeName ="nvarchar(150)")]
        public string Email { get; set; } = String.Empty;
        public int Idade { get; set; }
        [Column(TypeName ="nvarchar(150)")]
        public string Endereco { get; set; } = String.Empty;
    }
}