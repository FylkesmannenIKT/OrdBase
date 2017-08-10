using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using OrdBaseCore.Models;

namespace OrdBaseCore.Migrations
{
    [DbContext(typeof(TranslationDb))]
    [Migration("20170810143343_translationCount_column")]
    partial class translationCount_column
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("OrdBaseCore.Models.Client", b =>
                {
                    b.Property<string>("Key")
                        .HasMaxLength(127);

                    b.Property<string>("ApiKey")
                        .HasMaxLength(127);

                    b.Property<string>("ThumbnailUrl")
                        .HasMaxLength(255);

                    b.Property<string>("WebpageUrl")
                        .HasMaxLength(255);

                    b.HasKey("Key");

                    b.HasIndex("ApiKey")
                        .IsUnique();

                    b.ToTable("Client");
                });

            modelBuilder.Entity("OrdBaseCore.Models.ClientContainer", b =>
                {
                    b.Property<string>("ClientKey");

                    b.Property<string>("ContainerKey");

                    b.Property<int?>("TranslationCount");

                    b.HasKey("ClientKey", "ContainerKey");

                    b.HasIndex("ContainerKey");

                    b.ToTable("ClientContainer");
                });

            modelBuilder.Entity("OrdBaseCore.Models.ClientLanguage", b =>
                {
                    b.Property<string>("ClientKey");

                    b.Property<string>("LanguageKey");

                    b.HasKey("ClientKey", "LanguageKey");

                    b.HasIndex("LanguageKey");

                    b.ToTable("ClientLanguage");
                });

            modelBuilder.Entity("OrdBaseCore.Models.Container", b =>
                {
                    b.Property<string>("Key")
                        .HasMaxLength(64);

                    b.HasKey("Key");

                    b.ToTable("Container");
                });

            modelBuilder.Entity("OrdBaseCore.Models.Language", b =>
                {
                    b.Property<string>("Key")
                        .HasMaxLength(8);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(64);

                    b.HasKey("Key");

                    b.ToTable("Language");
                });

            modelBuilder.Entity("OrdBaseCore.Models.Translation", b =>
                {
                    b.Property<string>("ClientKey");

                    b.Property<string>("LanguageKey");

                    b.Property<string>("ContainerKey");

                    b.Property<string>("Key")
                        .HasMaxLength(127);

                    b.Property<bool>("IsComplete");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.HasKey("ClientKey", "LanguageKey", "ContainerKey", "Key");

                    b.ToTable("Translation");
                });

            modelBuilder.Entity("OrdBaseCore.Models.ClientContainer", b =>
                {
                    b.HasOne("OrdBaseCore.Models.Client", "Client")
                        .WithMany("Containers")
                        .HasForeignKey("ClientKey")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OrdBaseCore.Models.Container", "Container")
                        .WithMany("Clients")
                        .HasForeignKey("ContainerKey")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OrdBaseCore.Models.ClientLanguage", b =>
                {
                    b.HasOne("OrdBaseCore.Models.Client", "Client")
                        .WithMany("Languages")
                        .HasForeignKey("ClientKey")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OrdBaseCore.Models.Language", "Language")
                        .WithMany("Clients")
                        .HasForeignKey("LanguageKey")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
