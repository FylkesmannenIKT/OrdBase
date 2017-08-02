using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;

using OrdBaseCore.Repositories;
using OrdBaseCore.Models;

namespace OrdBaseCore.Models 
{
    public class TranslationDb : DbContext 
    {
        public TranslationDb(DbContextOptions<TranslationDb> options)
            :base(options)
        {}

        // Base tables
        public DbSet<Client> Client { get; set; }
        public DbSet<Language> Language { get; set; }
        public DbSet<Translation> Translation { get; set; }
        public DbSet<Container> Container { get; set; }

        // Many to many linking tables
        public DbSet<ClientLanguage> ClientLanguage { get; set; }
        public DbSet<ClientContainer> ClientContainer { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {   
            // @note
            // Have to use fluent API cases, as data annotations are not supported in Ef Core yet for:
            // - indexes 
            // - Composite keys
            // - Many to many navigational properties
            //
            modelBuilder
                .Entity<Client>()
                .HasIndex(c => c.ApiKey)
                .IsUnique();

            //
            // @note Client has a many to many relationship with both Languages and Containers
            // @doc Configure many to many tables https://docs.microsoft.com/en-us/ef/core/modeling/relationships#many-to-many
            //
            //
            // Many to many Client <---> Container
            //
            modelBuilder
                .Entity<ClientContainer>()
                .HasKey(cc => new 
                    {
                        cc.ClientKey,
                        cc.ContainerKey,        
                    });

            modelBuilder
                .Entity<ClientContainer>()
                .HasOne(cc => cc.Client)
                .WithMany(c => c.Containers)
                .HasForeignKey(cc => cc.ClientKey);

            modelBuilder
                .Entity<ClientContainer>()
                .HasOne(cc => cc.Container)
                .WithMany(c => c.Clients)
                .HasForeignKey(cc => cc.ContainerKey);
            
            //
            // Many to many Client <---> Language
            //
            modelBuilder
                .Entity<ClientLanguage>()
                .HasKey(cl => new 
                    {
                        cl.ClientKey,
                        cl.LanguageKey,        
                    });

            modelBuilder
                .Entity<ClientLanguage>()
                .HasOne(cl => cl.Client)
                .WithMany(c => c.Languages)
                .HasForeignKey(cl => cl.ClientKey);

            modelBuilder
                .Entity<ClientLanguage>()
                .HasOne(cl => cl.Language)
                .WithMany(l => l.Clients)
                .HasForeignKey(cl => cl.LanguageKey);

            //
            // Set up Translation partial primary keys (PPK) aka composite key
            //
            modelBuilder
                .Entity<Translation>()
                .HasKey(t => new { 
                    t.ClientKey, 
                    t.LanguageKey,
                    t.ContainerKey,
                    t.Key
                });
        }

        public static void Seed(TranslationDb context) 
        {
            ContainerRepository.AddTestData(context);
            LanguageRepository.AddTestData(context);
            ClientRepository.AddTestData(context);
            TranslationRepository.AddTestData(context);

            context.SaveChanges();
            context.Dispose();
        }
    }
}