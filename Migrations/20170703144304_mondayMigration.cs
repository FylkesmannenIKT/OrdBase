using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OrdBaseCore.Migrations
{
    public partial class mondayMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClientLanguage");

            migrationBuilder.RenameColumn(
                name: "Done",
                table: "Translation",
                newName: "IsComplete");

            migrationBuilder.AddColumn<string>(
                name: "ThumbnailUrl",
                table: "Client",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WebpageUrl",
                table: "Client",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Client_WebpageUrl",
                table: "Client",
                column: "WebpageUrl",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Client_WebpageUrl",
                table: "Client");

            migrationBuilder.DropColumn(
                name: "ThumbnailUrl",
                table: "Client");

            migrationBuilder.DropColumn(
                name: "WebpageUrl",
                table: "Client");

            migrationBuilder.RenameColumn(
                name: "IsComplete",
                table: "Translation",
                newName: "Done");

            migrationBuilder.CreateTable(
                name: "ClientLanguage",
                columns: table => new
                {
                    ClientId = table.Column<int>(nullable: false),
                    LanguageId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientLanguage", x => new { x.ClientId, x.LanguageId });
                });
        }
    }
}
