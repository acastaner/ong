using System;
using System.Threading.Tasks;
using OperationNameGenerator.BusinessModels;
using Folke.Elm;
using System.Collections.Generic;
using Folke.Elm.Fluent;

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

        public async Task<Noun> ReadRandomAsync()
        {
            int count = await _session.Select<Adjective>().CountAll().From().ScalarAsync<int>();
            Random rnd = new Random();
            int offset = rnd.Next(count);
            Noun noun = await _session.SelectAllFrom<Noun>().OrderBy(x => x.Id).Limit(offset, 1).FirstOrDefaultAsync();
            return noun;
        }

        public async Task<Noun> UpdateAsync(Noun noun)
        {
            await _session.UpdateAsync(noun);
            return noun;
        }
    }
}
