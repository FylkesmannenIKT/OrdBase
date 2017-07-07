using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using OrdBaseCore.Models;

namespace OrdBaseCore.Migrations
{
    [DbContext(typeof(TranslationDb))]
    [Migration("20170706191144_migrationJuly")]
    partial class migrationJuly
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2");

            modelBuilder.Entity("OrdBaseCore.Models.Client", b =>
                {
                    b.Property<string>("Name")
                        .HasMaxLength(127);

                    b.Property<string>("ApiKey")
                        .HasMaxLength(127);

                    b.Property<DateTime?>("LastAccess");

                    b.Property<int?>("RequestCount");

                    b.Property<string>("ThumbnailUrl");

                    b.Property<string>("WebpageUrl");

                    b.HasKey("Name");

                    b.HasIndex("ApiKey")
                        .IsUnique();

                    b.HasIndex("WebpageUrl")
                        .IsUnique();

                    b.ToTable("Client");
                });

            modelBuilder.Entity("OrdBaseCore.Models.Language", b =>
                {
                    b.Property<string>("Key")
                        .HasMaxLength(32);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(127);

                    b.HasKey("Key");

                    b.ToTable("Language");
                });

            modelBuilder.Entity("OrdBaseCore.Models.Translation", b =>
                {
                    b.Property<string>("ClientKey")
                        .HasMaxLength(127);

                    b.Property<string>("LanguageKey")
                        .HasMaxLength(32);

                    b.Property<string>("Container")
                        .HasMaxLength(127);

                    b.Property<string>("Key")
                        .HasMaxLength(127);

                    b.Property<bool>("IsComplete");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.HasKey("ClientKey", "LanguageKey", "Container", "Key");

                    b.ToTable("Translation");
                });
        }
    }
}
