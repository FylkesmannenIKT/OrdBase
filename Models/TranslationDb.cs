using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;

using OrdBaseCore.Services;
using OrdBaseCore.Models;

namespace OrdBaseCore.Models 
{
    public class TranslationDb : DbContext 
    {
        public TranslationDb(DbContextOptions<TranslationDb> options)
            :base(options)
        {}

        public DbSet<Client> Client { get; set; }
        public DbSet<Language> Language { get; set; }
        public DbSet<Translation> Translation { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {   
            // @note
            // Have to use fluent API in two cases, as data annotations are not supported yet for:
            // - indexes 
            // - Composite keys
            //
            modelBuilder
            .Entity<Client>()
                .HasIndex(c => c.ApiKey)
                .IsUnique();

            modelBuilder
            .Entity<Client>()
                .HasIndex(c => c.WebpageUrl)
                .IsUnique();
            

            modelBuilder
            .Entity<Translation>()
                .HasKey(t => new { 
                    t.ClientKey, 
                    t.LanguageKey,
                    t.Container,
                    t.Key
                });
        }

        public static void Seed(TranslationDb context) 
        {
            LanguageRepository.AddTestData(context);
            ClientRepository.AddTestData(context);
            TranslationRepository.AddTestData(context);

            context.SaveChanges();
            context.Dispose();
        }
    }
}