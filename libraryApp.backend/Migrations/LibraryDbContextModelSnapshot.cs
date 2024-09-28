﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using libraryApp.backend.Entity;

#nullable disable

namespace libraryApp.backend.Migrations
{
    [DbContext(typeof(LibraryDbContext))]
    partial class LibraryDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("libraryApp.backend.Entity.Book", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("number_of_pages")
                        .HasColumnType("integer");

                    b.Property<bool>("status")
                        .HasColumnType("boolean");

                    b.Property<string>("title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("type")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("Books");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.BookAuthor", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("bookId")
                        .HasColumnType("integer");

                    b.Property<int>("userId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("bookId");

                    b.HasIndex("userId");

                    b.ToTable("BookAuthors");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.BookPublishRequest", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("bookId")
                        .HasColumnType("integer");

                    b.Property<bool>("confirmation")
                        .HasColumnType("boolean");

                    b.Property<bool>("pending")
                        .HasColumnType("boolean");

                    b.Property<DateOnly>("requestDate")
                        .HasColumnType("date");

                    b.Property<int>("userId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("bookId");

                    b.HasIndex("userId");

                    b.ToTable("BookPublishRequests");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.LoanRequest", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("bookId")
                        .HasColumnType("integer");

                    b.Property<bool>("confirmation")
                        .HasColumnType("boolean");

                    b.Property<bool>("isReturned")
                        .HasColumnType("boolean");

                    b.Property<bool>("pending")
                        .HasColumnType("boolean");

                    b.Property<DateOnly>("requestDate")
                        .HasColumnType("date");

                    b.Property<DateOnly>("returnDate")
                        .HasColumnType("date");

                    b.Property<int>("userId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("bookId");

                    b.HasIndex("userId");

                    b.ToTable("LoanRequests");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.Message", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("isRead")
                        .HasColumnType("boolean");

                    b.Property<int>("recieverId")
                        .HasColumnType("integer");

                    b.Property<int>("senderId")
                        .HasColumnType("integer");

                    b.Property<DateOnly>("sendingDate")
                        .HasColumnType("date");

                    b.Property<string>("title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.HasIndex("senderId");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.Page", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("bookId")
                        .HasColumnType("integer");

                    b.Property<string>("content")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("pageNumber")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("bookId");

                    b.ToTable("Pages");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.Point", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<DateOnly>("earnDate")
                        .HasColumnType("date");

                    b.Property<int>("point")
                        .HasColumnType("integer");

                    b.Property<int>("userId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("userId");

                    b.ToTable("Points");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.Punishment", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("fineAmount")
                        .HasColumnType("integer");

                    b.Property<bool>("isActive")
                        .HasColumnType("boolean");

                    b.Property<DateOnly>("punishmentDate")
                        .HasColumnType("date");

                    b.Property<int>("userId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("userId");

                    b.ToTable("Punishments");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.RegisterRequest", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<bool>("confirmation")
                        .HasColumnType("boolean");

                    b.Property<bool>("pending")
                        .HasColumnType("boolean");

                    b.Property<DateOnly>("requestDate")
                        .HasColumnType("date");

                    b.Property<int>("userId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("userId");

                    b.ToTable("RegisterRequests");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.Role", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("Roles");

                    b.HasData(
                        new
                        {
                            id = 1,
                            name = "member"
                        },
                        new
                        {
                            id = 2,
                            name = "author"
                        },
                        new
                        {
                            id = 3,
                            name = "staff"
                        },
                        new
                        {
                            id = 4,
                            name = "manager"
                        });
                });

            modelBuilder.Entity("libraryApp.backend.Entity.User", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("roleId")
                        .HasColumnType("integer");

                    b.Property<string>("surname")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("userStatus")
                        .HasColumnType("boolean");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.HasIndex("roleId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.BookAuthor", b =>
                {
                    b.HasOne("libraryApp.backend.Entity.Book", "Book")
                        .WithMany("BookAuthors")
                        .HasForeignKey("bookId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("libraryApp.backend.Entity.User", "User")
                        .WithMany("BookAuthors")
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Book");

                    b.Navigation("User");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.BookPublishRequest", b =>
                {
                    b.HasOne("libraryApp.backend.Entity.Book", "Book")
                        .WithMany("BookPublishRequests")
                        .HasForeignKey("bookId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("libraryApp.backend.Entity.User", "User")
                        .WithMany("BookPublisRequests")
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Book");

                    b.Navigation("User");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.LoanRequest", b =>
                {
                    b.HasOne("libraryApp.backend.Entity.Book", "Book")
                        .WithMany("LoanRequest")
                        .HasForeignKey("bookId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("libraryApp.backend.Entity.User", "User")
                        .WithMany("LoanRequests")
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Book");

                    b.Navigation("User");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.Message", b =>
                {
                    b.HasOne("libraryApp.backend.Entity.User", "sender")
                        .WithMany("Messages")
                        .HasForeignKey("senderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("sender");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.Page", b =>
                {
                    b.HasOne("libraryApp.backend.Entity.Book", "Book")
                        .WithMany("Pages")
                        .HasForeignKey("bookId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Book");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.Point", b =>
                {
                    b.HasOne("libraryApp.backend.Entity.User", "User")
                        .WithMany("Points")
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.Punishment", b =>
                {
                    b.HasOne("libraryApp.backend.Entity.User", "User")
                        .WithMany("Punishments")
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.RegisterRequest", b =>
                {
                    b.HasOne("libraryApp.backend.Entity.User", "User")
                        .WithMany("RegisterRequests")
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.User", b =>
                {
                    b.HasOne("libraryApp.backend.Entity.Role", "Role")
                        .WithMany()
                        .HasForeignKey("roleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Role");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.Book", b =>
                {
                    b.Navigation("BookAuthors");

                    b.Navigation("BookPublishRequests");

                    b.Navigation("LoanRequest");

                    b.Navigation("Pages");
                });

            modelBuilder.Entity("libraryApp.backend.Entity.User", b =>
                {
                    b.Navigation("BookAuthors");

                    b.Navigation("BookPublisRequests");

                    b.Navigation("LoanRequests");

                    b.Navigation("Messages");

                    b.Navigation("Points");

                    b.Navigation("Punishments");

                    b.Navigation("RegisterRequests");
                });
#pragma warning restore 612, 618
        }
    }
}
