using OperationNameGenerator.BusinessModels;
using System;
using System.Threading.Tasks;

namespace OperationNameGenerator.Services
{
    public interface IAdjectiveService
    {
        Task<Adjective> CreateAsync(Adjective adj);
        Task<Adjective> ReadAsync(Guid id);
        Task<Adjective> ReadRandomAsync();
        Task<Adjective> UpdateAsync(Adjective adj);
        Task DeleteAsync(Adjective adj);
    }
}
