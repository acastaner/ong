using System;
using System.Threading.Tasks;
using OperationNameGenerator.BusinessModels;
using Folke.Elm;
using System.Collections.Generic;

namespace OperationNameGenerator.Services
{
    public class NounService : INounService
    {
        private IFolkeConnection _session;
        public NounService(IFolkeConnection session)
        {
            _session = session;
        }
        public async Task<Noun> CreateAsync(Noun noun)
        {
            await _session.SaveAsync(noun);
            return noun;
        }

        public async Task DeleteAsync(Noun noun)
        {
            await _session.DeleteAsync(noun);
        }

        public async Task<IList<Noun>> ReadAllAsync()
        {
            IList<Noun> nounList = await _session.SelectAllFrom<Noun>().ToListAsync();
            return nounList;
        }

        public async Task<Noun> ReadAsync(Noun noun)
        {
            return await _session.GetAsync<Noun>(noun.Id);
        }

        public Task<Noun> ReadRandomAsync(Noun noun)
        {
            throw new NotImplementedException();
        }

        public async Task<Noun> UpdateAsync(Noun noun)
        {
            await _session.UpdateAsync(noun);
            return noun;
        }
    }
}
