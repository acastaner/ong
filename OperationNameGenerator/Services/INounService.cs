using OperationNameGenerator.BusinessModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OperationNameGenerator.Services
{
    public interface INounService
    {
        Task<Noun> CreateAsync(Noun noun);
        Task<Noun> ReadAsync(Noun noun);
        Task<IList<Noun>> ReadAllAsync();
        Task<Noun> ReadRandomAsync();
        Task<Noun> UpdateAsync(Noun noun);
        Task DeleteAsync(Noun noun);
        Task<bool> ExistsAsync(Noun noun);
    }
}
