using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace libraryApp.backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    title = table.Column<string>(type: "text", nullable: false),
                    type = table.Column<string>(type: "text", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: false),
                    number_of_pages = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Pages",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    bookId = table.Column<int>(type: "integer", nullable: false),
                    pageNumber = table.Column<int>(type: "integer", nullable: false),
                    content = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pages", x => x.id);
                    table.ForeignKey(
                        name: "FK_Pages_Books_bookId",
                        column: x => x.bookId,
                        principalTable: "Books",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    roleId = table.Column<int>(type: "integer", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    surname = table.Column<string>(type: "text", nullable: false),
                    email = table.Column<string>(type: "text", nullable: false),
                    username = table.Column<string>(type: "text", nullable: false),
                    password = table.Column<string>(type: "text", nullable: false),
                    userStatus = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.id);
                    table.ForeignKey(
                        name: "FK_Users_Roles_roleId",
                        column: x => x.roleId,
                        principalTable: "Roles",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BookAuthors",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    bookId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookAuthors", x => x.id);
                    table.ForeignKey(
                        name: "FK_BookAuthors_Books_bookId",
                        column: x => x.bookId,
                        principalTable: "Books",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BookAuthors_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BookPublishRequests",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    bookId = table.Column<int>(type: "integer", nullable: false),
                    requestDate = table.Column<DateOnly>(type: "date", nullable: false),
                    confirmation = table.Column<bool>(type: "boolean", nullable: false),
                    pending = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookPublishRequests", x => x.id);
                    table.ForeignKey(
                        name: "FK_BookPublishRequests_Books_bookId",
                        column: x => x.bookId,
                        principalTable: "Books",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BookPublishRequests_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LoanRequests",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    bookId = table.Column<int>(type: "integer", nullable: false),
                    requestDate = table.Column<DateOnly>(type: "date", nullable: false),
                    returnDate = table.Column<DateOnly>(type: "date", nullable: false),
                    isReturned = table.Column<bool>(type: "boolean", nullable: false),
                    confirmation = table.Column<bool>(type: "boolean", nullable: false),
                    pending = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoanRequests", x => x.id);
                    table.ForeignKey(
                        name: "FK_LoanRequests_Books_bookId",
                        column: x => x.bookId,
                        principalTable: "Books",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LoanRequests_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Messages",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    senderId = table.Column<int>(type: "integer", nullable: false),
                    recieverId = table.Column<int>(type: "integer", nullable: false),
                    title = table.Column<string>(type: "text", nullable: false),
                    content = table.Column<string>(type: "text", nullable: false),
                    sendingDate = table.Column<DateOnly>(type: "date", nullable: false),
                    isRead = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Messages", x => x.id);
                    table.ForeignKey(
                        name: "FK_Messages_Users_senderId",
                        column: x => x.senderId,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Points",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    point = table.Column<int>(type: "integer", nullable: false),
                    earnDate = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Points", x => x.id);
                    table.ForeignKey(
                        name: "FK_Points_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Punishments",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    punishmentDate = table.Column<DateOnly>(type: "date", nullable: false),
                    isActive = table.Column<bool>(type: "boolean", nullable: false),
                    fineAmount = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Punishments", x => x.id);
                    table.ForeignKey(
                        name: "FK_Punishments_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RegisterRequests",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    requestDate = table.Column<DateOnly>(type: "date", nullable: false),
                    confirmation = table.Column<bool>(type: "boolean", nullable: false),
                    pending = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RegisterRequests", x => x.id);
                    table.ForeignKey(
                        name: "FK_RegisterRequests_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "id", "number_of_pages", "status", "title", "type" },
                values: new object[,]
                {
                    { 1, 10, true, "test1", "psycho" },
                    { 2, 220, true, "test2", "thriller" },
                    { 3, 320, true, "test3", "fantasy" },
                    { 4, 140, false, "test4", "mystery" },
                    { 5, 250, true, "test5", "non-fiction" },
                    { 6, 190, true, "test6", "science fiction" },
                    { 7, 270, false, "test7", "romance" },
                    { 8, 330, true, "test8", "horror" },
                    { 9, 410, true, "test9", "biography" },
                    { 10, 200, false, "test10", "history" }
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "id", "name" },
                values: new object[,]
                {
                    { 1, "member" },
                    { 2, "manager" },
                    { 3, "staff" },
                    { 4, "author" }
                });

            migrationBuilder.InsertData(
                table: "Pages",
                columns: new[] { "id", "bookId", "content", "pageNumber" },
                values: new object[,]
                {
                    { 1, 1, "Page content 1", 1 },
                    { 2, 1, "Page content 2", 2 },
                    { 3, 2, "Page content 1", 1 },
                    { 4, 2, "Page content 2", 2 },
                    { 5, 3, "Page content 1", 1 },
                    { 6, 3, "Page content 2", 2 },
                    { 7, 4, "Page content 1", 1 },
                    { 8, 4, "Page content 2", 2 },
                    { 9, 5, "Page content 1", 1 },
                    { 10, 5, "Page content 2", 2 }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "id", "email", "name", "password", "roleId", "surname", "userStatus", "username" },
                values: new object[,]
                {
                    { 1, "test1@ex.com", "Alice", "pass123", 1, "Smith", true, "alice_smith" },
                    { 2, "test2@ex.com", "Bob", "pass456", 2, "Johnson", true, "bob_johnson" },
                    { 3, "test3@ex.com", "Charlie", "pass789", 1, "Brown", false, "charlie_brown" },
                    { 4, "test4@ex.com", "Diana", "pass321", 2, "Wright", true, "diana_wright" },
                    { 5, "test5@ex.com", "Eve", "pass654", 1, "Davis", true, "eve_davis" },
                    { 6, "test6@ex.com", "Frank", "pass987", 2, "Clark", false, "frank_clark" },
                    { 7, "test7@ex.com", "Grace", "pass147", 1, "Lewis", true, "grace_lewis" },
                    { 8, "test8@ex.com", "Henry", "pass258", 2, "Walker", true, "henry_walker" },
                    { 9, "test9@ex.com", "Ivy", "pass369", 1, "Allen", false, "ivy_allen" },
                    { 10, "test10@ex.com", "Jack", "pass1234", 2, "Young", true, "jack_young" }
                });

            migrationBuilder.InsertData(
                table: "BookAuthors",
                columns: new[] { "id", "bookId", "userId" },
                values: new object[,]
                {
                    { 1, 1, 1 },
                    { 2, 2, 2 },
                    { 3, 3, 3 },
                    { 4, 4, 4 },
                    { 5, 5, 5 },
                    { 6, 6, 1 },
                    { 7, 7, 2 },
                    { 8, 8, 3 },
                    { 9, 9, 4 },
                    { 10, 10, 5 }
                });

            migrationBuilder.InsertData(
                table: "BookPublishRequests",
                columns: new[] { "id", "bookId", "confirmation", "pending", "requestDate", "userId" },
                values: new object[,]
                {
                    { 1, 2, false, true, new DateOnly(2024, 9, 29), 1 },
                    { 2, 3, false, true, new DateOnly(2024, 9, 29), 2 },
                    { 3, 4, true, false, new DateOnly(2024, 9, 29), 3 },
                    { 4, 5, false, true, new DateOnly(2024, 9, 29), 4 },
                    { 5, 6, true, false, new DateOnly(2024, 9, 29), 5 },
                    { 6, 7, false, true, new DateOnly(2024, 9, 29), 1 },
                    { 7, 8, true, false, new DateOnly(2024, 9, 29), 2 },
                    { 8, 9, false, true, new DateOnly(2024, 9, 29), 3 },
                    { 9, 10, true, false, new DateOnly(2024, 9, 29), 4 },
                    { 10, 1, false, true, new DateOnly(2024, 9, 29), 5 }
                });

            migrationBuilder.InsertData(
                table: "LoanRequests",
                columns: new[] { "id", "bookId", "confirmation", "isReturned", "pending", "requestDate", "returnDate", "userId" },
                values: new object[,]
                {
                    { 1, 1, false, false, true, new DateOnly(2024, 9, 29), new DateOnly(2024, 10, 6), 1 },
                    { 2, 2, true, true, false, new DateOnly(2024, 9, 29), new DateOnly(2024, 10, 6), 2 },
                    { 3, 3, false, false, true, new DateOnly(2024, 9, 29), new DateOnly(2024, 10, 6), 3 },
                    { 4, 4, true, false, false, new DateOnly(2024, 9, 29), new DateOnly(2024, 10, 6), 4 },
                    { 5, 5, false, false, true, new DateOnly(2024, 9, 29), new DateOnly(2024, 10, 6), 5 },
                    { 6, 6, true, false, false, new DateOnly(2024, 9, 29), new DateOnly(2024, 10, 6), 1 },
                    { 7, 7, false, false, true, new DateOnly(2024, 9, 29), new DateOnly(2024, 10, 6), 2 },
                    { 8, 8, true, false, false, new DateOnly(2024, 9, 29), new DateOnly(2024, 10, 6), 3 },
                    { 9, 9, false, false, true, new DateOnly(2024, 9, 29), new DateOnly(2024, 10, 6), 4 },
                    { 10, 10, true, false, false, new DateOnly(2024, 9, 29), new DateOnly(2024, 10, 6), 5 }
                });

            migrationBuilder.InsertData(
                table: "Messages",
                columns: new[] { "id", "content", "isRead", "recieverId", "senderId", "sendingDate", "title" },
                values: new object[,]
                {
                    { 1, "Hello!", false, 2, 1, new DateOnly(2024, 9, 29), "Greetings" },
                    { 2, "How are you?", true, 3, 2, new DateOnly(2024, 9, 29), "Check-in" },
                    { 3, "Meeting tomorrow?", false, 4, 3, new DateOnly(2024, 9, 29), "Meeting" },
                    { 4, "Check your email", false, 5, 4, new DateOnly(2024, 9, 29), "Reminder" },
                    { 5, "Let's catch up", true, 1, 5, new DateOnly(2024, 9, 29), "Catch-up" },
                    { 6, "Project update", false, 2, 1, new DateOnly(2024, 9, 29), "Update" },
                    { 7, "Great job!", false, 3, 2, new DateOnly(2024, 9, 29), "Praise" },
                    { 8, "Next steps?", true, 4, 3, new DateOnly(2024, 9, 29), "Discussion" },
                    { 9, "See you soon", false, 5, 4, new DateOnly(2024, 9, 29), "Goodbye" },
                    { 10, "Congrats!", false, 1, 5, new DateOnly(2024, 9, 29), "Congratulations" }
                });

            migrationBuilder.InsertData(
                table: "Points",
                columns: new[] { "id", "earnDate", "point", "userId" },
                values: new object[,]
                {
                    { 1, new DateOnly(2024, 9, 29), 10, 1 },
                    { 2, new DateOnly(2024, 9, 29), 20, 2 },
                    { 3, new DateOnly(2024, 9, 29), 30, 3 },
                    { 4, new DateOnly(2024, 9, 29), 40, 4 },
                    { 5, new DateOnly(2024, 9, 29), 50, 5 },
                    { 6, new DateOnly(2024, 9, 29), 60, 1 },
                    { 7, new DateOnly(2024, 9, 29), 70, 2 },
                    { 8, new DateOnly(2024, 9, 29), 80, 3 },
                    { 9, new DateOnly(2024, 9, 29), 90, 4 },
                    { 10, new DateOnly(2024, 9, 29), 100, 5 }
                });

            migrationBuilder.InsertData(
                table: "Punishments",
                columns: new[] { "id", "fineAmount", "isActive", "punishmentDate", "userId" },
                values: new object[,]
                {
                    { 1, 5, true, new DateOnly(2024, 9, 29), 1 },
                    { 2, 10, true, new DateOnly(2024, 9, 29), 3 },
                    { 3, 15, false, new DateOnly(2024, 9, 29), 1 },
                    { 4, 20, true, new DateOnly(2024, 9, 29), 2 },
                    { 5, 25, false, new DateOnly(2024, 9, 29), 1 },
                    { 6, 30, true, new DateOnly(2024, 9, 29), 3 },
                    { 7, 35, true, new DateOnly(2024, 9, 29), 2 },
                    { 8, 40, false, new DateOnly(2024, 9, 29), 1 },
                    { 9, 45, true, new DateOnly(2024, 9, 29), 4 },
                    { 10, 50, false, new DateOnly(2024, 9, 29), 1 }
                });

            migrationBuilder.InsertData(
                table: "RegisterRequests",
                columns: new[] { "id", "confirmation", "pending", "requestDate", "userId" },
                values: new object[,]
                {
                    { 1, false, true, new DateOnly(2024, 9, 29), 1 },
                    { 2, true, false, new DateOnly(2024, 9, 29), 2 },
                    { 3, false, true, new DateOnly(2024, 9, 29), 3 },
                    { 4, true, false, new DateOnly(2024, 9, 29), 4 },
                    { 5, false, true, new DateOnly(2024, 9, 29), 5 },
                    { 6, true, false, new DateOnly(2024, 9, 29), 1 },
                    { 7, false, true, new DateOnly(2024, 9, 29), 2 },
                    { 8, true, false, new DateOnly(2024, 9, 29), 3 },
                    { 9, false, true, new DateOnly(2024, 9, 29), 4 },
                    { 10, true, false, new DateOnly(2024, 9, 29), 5 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BookAuthors_bookId",
                table: "BookAuthors",
                column: "bookId");

            migrationBuilder.CreateIndex(
                name: "IX_BookAuthors_userId",
                table: "BookAuthors",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_BookPublishRequests_bookId",
                table: "BookPublishRequests",
                column: "bookId");

            migrationBuilder.CreateIndex(
                name: "IX_BookPublishRequests_userId",
                table: "BookPublishRequests",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_LoanRequests_bookId",
                table: "LoanRequests",
                column: "bookId");

            migrationBuilder.CreateIndex(
                name: "IX_LoanRequests_userId",
                table: "LoanRequests",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_senderId",
                table: "Messages",
                column: "senderId");

            migrationBuilder.CreateIndex(
                name: "IX_Pages_bookId",
                table: "Pages",
                column: "bookId");

            migrationBuilder.CreateIndex(
                name: "IX_Points_userId",
                table: "Points",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_Punishments_userId",
                table: "Punishments",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_RegisterRequests_userId",
                table: "RegisterRequests",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_roleId",
                table: "Users",
                column: "roleId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookAuthors");

            migrationBuilder.DropTable(
                name: "BookPublishRequests");

            migrationBuilder.DropTable(
                name: "LoanRequests");

            migrationBuilder.DropTable(
                name: "Messages");

            migrationBuilder.DropTable(
                name: "Pages");

            migrationBuilder.DropTable(
                name: "Points");

            migrationBuilder.DropTable(
                name: "Punishments");

            migrationBuilder.DropTable(
                name: "RegisterRequests");

            migrationBuilder.DropTable(
                name: "Books");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}
