using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back.Migrations
{
    public partial class AddUsuario : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(150)", nullable: false),
                    telefone = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(150)", nullable: false),
                    Idade = table.Column<int>(type: "int", nullable: false),
                    Endereco = table.Column<string>(type: "nvarchar(150)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
