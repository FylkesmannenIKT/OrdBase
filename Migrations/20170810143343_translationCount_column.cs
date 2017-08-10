using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OrdBaseCore.Migrations
{
    public partial class translationCount_column : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Client",
                columns: table => new
                {
                    Key = table.Column<string>(maxLength: 127, nullable: false),
                    ApiKey = table.Column<string>(maxLength: 127, nullable: true),
                    ThumbnailUrl = table.Column<string>(maxLength: 255, nullable: true),
                    WebpageUrl = table.Column<string>(maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Client", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "Container",
                columns: table => new
                {
                    Key = table.Column<string>(maxLength: 64, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Container", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "Language",
                columns: table => new
                {
                    Key = table.Column<string>(maxLength: 8, nullable: false),
                    Name = table.Column<string>(maxLength: 64, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Language", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "Translation",
                columns: table => new
                {
                    ClientKey = table.Column<string>(nullable: false),
                    LanguageKey = table.Column<string>(nullable: false),
                    ContainerKey = table.Column<string>(nullable: false),
                    Key = table.Column<string>(maxLength: 127, nullable: false),
                    IsComplete = table.Column<bool>(nullable: false),
                    Text = table.Column<string>(maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Translation", x => new { x.ClientKey, x.LanguageKey, x.ContainerKey, x.Key });
                });

            migrationBuilder.CreateTable(
                name: "ClientContainer",
                columns: table => new
                {
                    ClientKey = table.Column<string>(nullable: false),
                    ContainerKey = table.Column<string>(nullable: false),
                    TranslationCount = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientContainer", x => new { x.ClientKey, x.ContainerKey });
                    table.ForeignKey(
                        name: "FK_ClientContainer_Client_ClientKey",
                        column: x => x.ClientKey,
                        principalTable: "Client",
                        principalColumn: "Key",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClientContainer_Container_ContainerKey",
                        column: x => x.ContainerKey,
                        principalTable: "Container",
                        principalColumn: "Key",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ClientLanguage",
                columns: table => new
                {
                    ClientKey = table.Column<string>(nullable: false),
                    LanguageKey = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientLanguage", x => new { x.ClientKey, x.LanguageKey });
                    table.ForeignKey(
                        name: "FK_ClientLanguage_Client_ClientKey",
                        column: x => x.ClientKey,
                        principalTable: "Client",
                        principalColumn: "Key",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClientLanguage_Language_LanguageKey",
                        column: x => x.LanguageKey,
                        principalTable: "Language",
                        principalColumn: "Key",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Client_ApiKey",
                table: "Client",
                column: "ApiKey",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClientContainer_ContainerKey",
                table: "ClientContainer",
                column: "ContainerKey");

            migrationBuilder.CreateIndex(
                name: "IX_ClientLanguage_LanguageKey",
                table: "ClientLanguage",
                column: "LanguageKey");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClientContainer");

            migrationBuilder.DropTable(
                name: "ClientLanguage");

            migrationBuilder.DropTable(
                name: "Translation");

            migrationBuilder.DropTable(
                name: "Container");

            migrationBuilder.DropTable(
                name: "Client");

            migrationBuilder.DropTable(
                name: "Language");
        }
    }
}
