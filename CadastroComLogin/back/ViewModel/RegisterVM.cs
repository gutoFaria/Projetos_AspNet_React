using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back.ViewModel
{
    public class RegisterVM
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = String.Empty;

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; } = String.Empty;

        [DataType(DataType.Password)]
        [Display(Name = "Confirma Password")]
        [Compare("Password", ErrorMessage = "Senhas não conferem" )]
        public string ConfirmaPassword { get; set; } = String.Empty;
    }
}