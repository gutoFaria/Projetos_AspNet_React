using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace back.ViewModel
{
    public class LoginVM
    {
        [Required(ErrorMessage="Email é obrigatótio")]
        [EmailAddress(ErrorMessage ="Formato de email inválido")]
        public string Email { get; set; } = String.Empty;

        [Required(ErrorMessage = "A senha é obrigatória")]
        [StringLength(20,ErrorMessage =  "A {0} deve ter no mínimo {2} e no máximo {1} caracteres.",MinimumLength = 10)]
        [DataType(DataType.Password)]
        public string Password { get; set; } = String.Empty; 
    }
}