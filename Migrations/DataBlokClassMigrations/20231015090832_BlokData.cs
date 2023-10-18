using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PLAYSCRIBE_Backend.Migrations.DataBlokClassMigrations
{
    /// <inheritdoc />
    public partial class BlokData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
			migrationBuilder.CreateTable(
			   name: "BlokComments",
			   columns: table => new
			   {
				   Username = table.Column<string>(type: "nvarchar(450)", nullable: false),
				   TargetBlok = table.Column<string>(type: "nvarchar(max)", nullable: false),
				   Comment = table.Column<string>(type: "nvarchar(max)", nullable: false),
				   IsFavorite = table.Column<bool>(type: "bit", nullable: false)
			   },
			   constraints: table =>
			   {
				   table.PrimaryKey("PK_BlokComments", x => x.Username);
			   });
		}

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

			migrationBuilder.DropTable(
				name: "BlokComments");
		}
    }
}
