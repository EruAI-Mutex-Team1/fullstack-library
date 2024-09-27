using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace libraryApp.backend.Migrations
{
    /// <inheritdoc />
    public partial class SecondMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Users_roleId",
                table: "Users",
                column: "roleId");

            migrationBuilder.CreateIndex(
                name: "IX_RegisterRequests_userId",
                table: "RegisterRequests",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_Punishments_userId",
                table: "Punishments",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_Points_userId",
                table: "Points",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_Pages_bookId",
                table: "Pages",
                column: "bookId");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_senderId",
                table: "Messages",
                column: "senderId");

            migrationBuilder.CreateIndex(
                name: "IX_LoanRequests_bookId",
                table: "LoanRequests",
                column: "bookId");

            migrationBuilder.CreateIndex(
                name: "IX_LoanRequests_userId",
                table: "LoanRequests",
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
                name: "IX_BookAuthors_bookId",
                table: "BookAuthors",
                column: "bookId");

            migrationBuilder.CreateIndex(
                name: "IX_BookAuthors_userId",
                table: "BookAuthors",
                column: "userId");

            migrationBuilder.AddForeignKey(
                name: "FK_BookAuthors_Books_bookId",
                table: "BookAuthors",
                column: "bookId",
                principalTable: "Books",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BookAuthors_Users_userId",
                table: "BookAuthors",
                column: "userId",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BookPublishRequests_Books_bookId",
                table: "BookPublishRequests",
                column: "bookId",
                principalTable: "Books",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BookPublishRequests_Users_userId",
                table: "BookPublishRequests",
                column: "userId",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LoanRequests_Books_bookId",
                table: "LoanRequests",
                column: "bookId",
                principalTable: "Books",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LoanRequests_Users_userId",
                table: "LoanRequests",
                column: "userId",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Messages_Users_senderId",
                table: "Messages",
                column: "senderId",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Pages_Books_bookId",
                table: "Pages",
                column: "bookId",
                principalTable: "Books",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Points_Users_userId",
                table: "Points",
                column: "userId",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Punishments_Users_userId",
                table: "Punishments",
                column: "userId",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RegisterRequests_Users_userId",
                table: "RegisterRequests",
                column: "userId",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Roles_roleId",
                table: "Users",
                column: "roleId",
                principalTable: "Roles",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookAuthors_Books_bookId",
                table: "BookAuthors");

            migrationBuilder.DropForeignKey(
                name: "FK_BookAuthors_Users_userId",
                table: "BookAuthors");

            migrationBuilder.DropForeignKey(
                name: "FK_BookPublishRequests_Books_bookId",
                table: "BookPublishRequests");

            migrationBuilder.DropForeignKey(
                name: "FK_BookPublishRequests_Users_userId",
                table: "BookPublishRequests");

            migrationBuilder.DropForeignKey(
                name: "FK_LoanRequests_Books_bookId",
                table: "LoanRequests");

            migrationBuilder.DropForeignKey(
                name: "FK_LoanRequests_Users_userId",
                table: "LoanRequests");

            migrationBuilder.DropForeignKey(
                name: "FK_Messages_Users_senderId",
                table: "Messages");

            migrationBuilder.DropForeignKey(
                name: "FK_Pages_Books_bookId",
                table: "Pages");

            migrationBuilder.DropForeignKey(
                name: "FK_Points_Users_userId",
                table: "Points");

            migrationBuilder.DropForeignKey(
                name: "FK_Punishments_Users_userId",
                table: "Punishments");

            migrationBuilder.DropForeignKey(
                name: "FK_RegisterRequests_Users_userId",
                table: "RegisterRequests");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Roles_roleId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_roleId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_RegisterRequests_userId",
                table: "RegisterRequests");

            migrationBuilder.DropIndex(
                name: "IX_Punishments_userId",
                table: "Punishments");

            migrationBuilder.DropIndex(
                name: "IX_Points_userId",
                table: "Points");

            migrationBuilder.DropIndex(
                name: "IX_Pages_bookId",
                table: "Pages");

            migrationBuilder.DropIndex(
                name: "IX_Messages_senderId",
                table: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_LoanRequests_bookId",
                table: "LoanRequests");

            migrationBuilder.DropIndex(
                name: "IX_LoanRequests_userId",
                table: "LoanRequests");

            migrationBuilder.DropIndex(
                name: "IX_BookPublishRequests_bookId",
                table: "BookPublishRequests");

            migrationBuilder.DropIndex(
                name: "IX_BookPublishRequests_userId",
                table: "BookPublishRequests");

            migrationBuilder.DropIndex(
                name: "IX_BookAuthors_bookId",
                table: "BookAuthors");

            migrationBuilder.DropIndex(
                name: "IX_BookAuthors_userId",
                table: "BookAuthors");
        }
    }
}
