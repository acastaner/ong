using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Folke.Core;
using Folke.Elm.Mysql;
using Folke.Elm;
using Microsoft.AspNetCore.Identity;
using Folke.Core.Entities;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Controllers;
using Folke.CsTsService;
using OperationNameGenerator.BusinessModels;
using System.Reflection;
using OperationNameGenerator.Services;

namespace OperationNameGenerator
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.Local.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOperationNameGeneratorServices();

            services.AddSingleton<IConfiguration>(provider => Configuration);
            services.AddFolkeCore<MySqlDriver>(options =>
            {
                options.ConnectionString = Configuration["Data:ConnectionString"];
            });

            // Add framework services.
            services.AddMvc();
            services.AddLogging();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IFolkeConnection connection,
       RoleManager<Role> roleManager, UserManager<User> userManager, ApplicationPartManager applicationPartManager)
        {
            app.UseFolkeCore(connection, env, roleManager, userManager, applicationPartManager, options =>
            {
                options.AdministratorEmail = Configuration["Data:DefaultAdministratorUserName"];
                options.AdministratorPassword = Configuration["Data:DefaultAdministratorPassword"];
            });

            // Tells ORM to update Schema
            connection.UpdateSchema(typeof(Adjective).GetTypeInfo().Assembly);

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            app.UseMvc();

            if (env.IsDevelopment())
            {
                CreateTypeScriptServices(applicationPartManager);
            }
        }

        private static void CreateTypeScriptServices(ApplicationPartManager applicationPartManager)
        {
            ControllerFeature feature = new ControllerFeature();
            applicationPartManager.PopulateFeature(feature);
            var controllerTypes = feature.Controllers.Select(c => c.AsType());
            var converter = new Converter();
            var assembly = converter.ReadControllers(controllerTypes);
            var typeScript = new TypeScriptWriter(options: TypeScriptOptions.ParametersInObject);
            // Call WriteAssembly twice; once for KO mappings, once for TS
            typeScript.WriteAssembly(assembly, false);
            typeScript.WriteAssembly(assembly, true);
            typeScript.WriteToFiles("src/services");
        }
    }
}
