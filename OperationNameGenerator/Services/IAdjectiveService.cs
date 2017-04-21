using OperationNameGenerator.BusinessModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OperationNameGenerator.Services
{
    public interface IAdjectiveService
    {
        Task<Adjective> CreateAsync(Adjective adj);
        Task<Adjective> ReadAsync(Guid id);
        Task<IList<Adjective>> ReadAllAsync();
        Task<Adjective> ReadRandomAsync();
        Task<Adjective> UpdateAsync(Adjective adj);
        Task DeleteAsync(Adjective adj);
        Task<bool> ExistsAsync(Adjective adj);
    }
}
