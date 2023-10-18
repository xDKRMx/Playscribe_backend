using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PLAYSCRIBE_Backend.Migrations
{
    /// <inheritdoc />
    public partial class GameData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BestScores",
                columns: table => new
                {
                    Username = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    BestScore = table.Column<int>(type: "int", nullable: false),
                    MaxDron1Kill = table.Column<int>(type: "int", nullable: false),
                    MaxDron2Kill = table.Column<int>(type: "int", nullable: false),
                    MaxDron3Kill = table.Column<int>(type: "int", nullable: false),
                    MaxDron4Kill = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BestScores", x => x.Username);
                });

            migrationBuilder.CreateTable(
                name: "DroneProperties",
                columns: table => new
                {
                    Username = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    DroneColor = table.Column<int>(type: "int", nullable: true),
                    LazerColor = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DroneProperties", x => x.Username);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BestScores");

            migrationBuilder.DropTable(
                name: "DroneProperties");
        }
    }
}
