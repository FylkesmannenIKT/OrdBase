using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OrdBaseCore.Migrations
{
    public partial class migrationJuly : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Client",
                columns: table => new
                {
                    Name = table.Column<string>(maxLength: 127, nullable: false),
                    ApiKey = table.Column<string>(maxLength: 127, nullable: true),
                    LastAccess = table.Column<DateTime>(nullable: true),
                    RequestCount = table.Column<int>(nullable: true),
                    ThumbnailUrl = table.Column<string>(nullable: true),
                    WebpageUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Client", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "Language",
                columns: table => new
                {
                    Key = table.Column<string>(maxLength: 32, nullable: false),
                    Name = table.Column<string>(maxLength: 127, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Language", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "Translation",
                columns: table => new
                {
                    ClientKey = table.Column<string>(maxLength: 127, nullable: false),
                    LanguageKey = table.Column<string>(maxLength: 32, nullable: false),
                    Container = table.Column<string>(maxLength: 127, nullable: false),
                    Key = table.Column<string>(maxLength: 127, nullable: false),
                    IsComplete = table.Column<bool>(nullable: false),
                    Text = table.Column<string>(maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Translation", x => new { x.ClientKey, x.LanguageKey, x.Container, x.Key });
                });

            migrationBuilder.CreateIndex(
                name: "IX_Client_ApiKey",
                table: "Client",
                column: "ApiKey",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Client_WebpageUrl",
                table: "Client",
                column: "WebpageUrl",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Client");

            migrationBuilder.DropTable(
                name: "Language");

            migrationBuilder.DropTable(
                name: "Translation");
        }
    }
}
