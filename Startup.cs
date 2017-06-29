// System
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// AspNetCore
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

// Extensions
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

// EntityFramework
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

// OrdBase
using OrdBaseCore.Models;
using OrdBaseCore.IData;
using OrdBaseCore.Services;

namespace OrdBaseCore {

    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        
        // @doc Set up MySql service - https://damienbod.com/2016/08/26/asp-net-core-1-0-with-mysql-and-entity-framework-core/
        // @doc scoped vs transient vs singleton - https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection#service-lifetimes-and-registration-options
        
        public static IConfiguration Configuration { get; set; }
        public const string SqlProvider = "MicrosoftSQLProvider";

        //
        // @function Startup
        //  @brief Dont know what special things this does.
        //
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("config.json", optional: true, reloadOnChange: true);
                
            Configuration = builder.Build();
        }
         
         //
         // @function ConfigureServices
         //  @brief Sets up the DbContext and all the repositories + db connection
         //
        public void ConfigureServices(IServiceCollection services)
        {
            var sqlConnectionString = Configuration.GetConnectionString(Startup.SqlProvider);

            services.AddDbContext<TranslationDb>(options => 
               // options.UseInMemoryDatabase()
                options.UseSqlServer (
                    sqlConnectionString,
                    b => b.MigrationsAssembly("OrdBaseCore") )
                
            );

            services.AddDirectoryBrowser();
            services.AddMvc();

            services.AddTransient<IClientData,      ClientRepository>();
            services.AddTransient<IContainerData,   ContainerRepository>();
            services.AddTransient<ILanguageData,    LanguageRepository>();
            services.AddTransient<ITranslationData, TranslationRepository>();
        }

        //
        // @function Configure
        //  @brief This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        //
        public void Configure(IApplicationBuilder app, 
                              IHostingEnvironment env, 
                              ILoggerFactory loggerFactory,
                              TranslationDb context)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
           // TranslationDb.Seed(context);
            
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
       }
    }

    public class MigrationsContextFactory : IDbContextFactory<TranslationDb>
    {
        public TranslationDb Create(DbContextFactoryOptions options)
        {
            var optionsBuilder = new DbContextOptionsBuilder<TranslationDb>();
            optionsBuilder.UseSqlServer(Startup.Configuration.GetConnectionString(Startup.SqlProvider));

            return new TranslationDb(optionsBuilder.Options);
        }
    }
}
