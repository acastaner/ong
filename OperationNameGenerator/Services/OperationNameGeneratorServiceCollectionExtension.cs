using Microsoft.Extensions.DependencyInjection;

namespace OperationNameGenerator.Services
{
    public static class OperationNameGeneratorServiceCollectionExtension
    {
        public static IServiceCollection AddOperationNameGeneratorServices(this IServiceCollection services)
        {
            services.AddSingleton<IAdjectiveService, AdjectiveService>();
            services.AddSingleton<INounService, NounService>();
            return services;
        }
    }
}
