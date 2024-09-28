﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace libraryApp.backend.Migrations
{
    /// <inheritdoc />
    public partial class addContentToPageTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "content",
                table: "Pages",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "content",
                table: "Pages");
        }
    }
}
