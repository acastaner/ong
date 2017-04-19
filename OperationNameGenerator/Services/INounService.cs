using OperationNameGenerator.BusinessModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OperationNameGenerator.Services
{
    public interface INounService
    {
        Task<Noun> CreateAsync(Noun nound);
        Task<Noun> ReadAsync(Noun nound);
        Task<IList<Noun>> ReadAllAsync();
        Task<Noun> ReadRandomAsync();
        Task<Noun> UpdateAsync(Noun nound);
        Task DeleteAsync(Noun nound);
    }
}
