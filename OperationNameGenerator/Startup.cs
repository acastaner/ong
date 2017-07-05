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
using Folke.Identity.Server;

namespace OperationNameGenerator
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile("appsettings.Local.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOperationNameGeneratorServices();

            services.AddSingleton<IConfiguration>(provider => Configuration);

            // Set all Folke framework options here through Folke.Core
            services.AddFolkeCore<MySqlDriver>(options =>
            {
                options.Elm = elmOptions => elmOptions.ConnectionString = Configuration["Data:ConnectionString"];
                options.IdentityServer = identityServerOptions => identityServerOptions.RegistrationEnabled = bool.Parse(Configuration["Data:EnableRegistration"]);
                options.Identity = identityOptions => identityOptions.Password.RequiredLength = 8;
            });

            // Add framework services.
            services.AddMvc();
            services.AddLogging();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IFolkeConnection connection,
       RoleManager<Role> roleManager, UserManager<User> userManager, ApplicationPartManager applicationPartManager)
        {
            // Default admin credentials must be specified here because they interact with ASP.NET Identity
            app.UseFolkeCore(connection, env, roleManager, userManager, applicationPartManager, 
                options =>
                {
                    options.AdministratorEmail = Configuration["Data:DefaultAdministratorUserName"];
                    options.AdministratorPassword = Configuration["Data:DefaultAdministratorPassword"];
                });

            // Elm updates database schema
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
