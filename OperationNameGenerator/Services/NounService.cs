using System;
using System.Threading.Tasks;
using OperationNameGenerator.BusinessModels;
using Folke.Elm;

namespace OperationNameGenerator.Services
{
    public class NounService : INounService
    {
        private IFolkeConnection _session;
        public NounService(IFolkeConnection session)
        {
            _session = session;
        }
        public async Task<Noun> Create(Noun noun)
        {
            await _session.SaveAsync(noun);
            return noun;
        }

        public async Task Delete(Noun noun)
        {
            await _session.DeleteAsync(noun);
        }

        public async Task<Noun> Read(Noun noun)
        {
            return await _session.GetAsync<Noun>(noun.Id);
        }

        public Task<Noun> ReadRandom(Noun noun)
        {
            throw new NotImplementedException();
        }

        public async Task<Noun> Update(Noun noun)
        {
            await _session.UpdateAsync(noun);
            return noun;
        }
    }
}
