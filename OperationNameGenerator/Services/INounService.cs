using OperationNameGenerator.BusinessModels;
using System.Threading.Tasks;

namespace OperationNameGenerator.Services
{
    public interface INounService
    {
        Task<Noun> Create(Noun nound);
        Task<Noun> Read(Noun nound);
        Task<Noun> ReadRandom(Noun nound);
        Task<Noun> Update(Noun nound);
        Task Delete(Noun nound);
    }
}
