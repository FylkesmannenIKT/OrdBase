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
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.ResponseCaching;
using Microsoft.Net.Http.Headers;

// Extensions
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging.Debug;

// EntityFramework
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

// OrdBase
using OrdBaseCore.Models;
using OrdBaseCore.IData;
using OrdBaseCore.Repositories;


namespace OrdBaseCore {

    public class Startup
    {

        public static IConfiguration Configuration { get; set; }
        public const string SqlProvider = "MicrosoftSQLProvider";

        //
        // @function Startup
        //
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }
         
        //
        // @function ConfigureServices
        //  @brief Sets up the DbContext and all the repositories + db connection
        //    This method gets called by the runtime. Use this method to add services to the container.
        //    For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        //
        public void ConfigureServices(IServiceCollection services)
        {
            var sqlConnectionString = Configuration.GetConnectionString(Startup.SqlProvider);
            // var sqlConnectionString = configuration.GetSection("PATH").Value;

            services.AddDbContext<TranslationDb>(options => 
               // options.UseInMemoryDatabase()
                options.UseSqlServer(
                    sqlConnectionString,
                    b => b.MigrationsAssembly("OrdBaseCore") )
                
            );

            services.AddDirectoryBrowser();
            services.AddMvc((options) => {
                options.CacheProfiles.Add("api_cache", new CacheProfile() {  
                    Duration = 60 * 60 * 24,  
                        Location = ResponseCacheLocation.Any  
                });
            });
            // @doc response caching middleware - https://docs.microsoft.com/en-us/aspnet/core/performance/caching/middleware
            services.AddResponseCaching();

            // @doc GZIP compression service - https://www.softfluent.com/blog/dev/Enabling-gzip-compression-with-ASP-NET-Core
            services.Configure<GzipCompressionProviderOptions>(options => options.Level = System.IO.Compression.CompressionLevel.Optimal);
            services.AddResponseCompression();

            // @note add Repositories as services
            // @doc scoped vs transient vs singleton - https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection#service-lifetimes-and-registration-options
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
            // @note Failed to make logging to console work - JSolsvik 09.08.17
            loggerFactory.AddConsole()
                         .AddDebug();

            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }


            app.UseDefaultFiles();
            // @doc caching static files  https://andrewlock.net/adding-cache-control-headers-to-static-files-in-asp-net-core/
            app.UseStaticFiles(new StaticFileOptions  
            {
                OnPrepareResponse = ctx =>
                {
                    const int durationInSeconds = 60 * 60 * 24;
                    ctx.Context.Response.Headers[HeaderNames.CacheControl] = "public,max-age=" + durationInSeconds;
                }
            });
            app.UseMvc();
            app.UseResponseCompression();
            app.UseResponseCaching();   

            // @note Only use this when the database is empty.
            //TranslationDb.Seed(context); 
       }
    }
    //
    // @note This is needed for Entity Framework to be able to do migrations.
    //       The class makes it possible for EF to get the DbContext, but this should
    //       aldready be possible through services.addDbContext above. I don't know why entity
    //       framework does not use the standard way.
    //       Perhaps this class can be removed in the future, when we find a way for entity framework
    //       to use the standard way of obtaining the DbContext.  - JSolsvik 30.06.2017
    //
    //       @doc Set up MySql service - https://damienbod.com/2016/08/26/asp-net-core-1-0-with-mysql-and-entity-framework-core/
    //
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
