using System;
using System.Threading.Tasks;
using OperationNameGenerator.BusinessModels;
using Folke.Elm;
using Folke.Elm.Fluent;
using System.Collections.Generic;

namespace OperationNameGenerator.Services
{
    public class AdjectiveService : IAdjectiveService
    {
        private IFolkeConnection _session;
        public AdjectiveService(IFolkeConnection session)
        {
            _session = session;
        }
        public async Task<Adjective> CreateAsync(Adjective adj)
        {
            await _session.SaveAsync(adj);
            return adj;
        }

        public async Task DeleteAsync(Adjective adj)
        {
            await _session.DeleteAsync(adj);
        }

        public async Task<bool> ExistsAsync(Adjective adj)
        {
            Adjective dbAdj = await _session.SelectAllFrom<Adjective>().Where(x => x.Value == adj.Value).FirstOrDefaultAsync();
            return (dbAdj == null ? false : true);
        }

        public async Task<IList<Adjective>> ReadAllAsync()
        {
            IList<Adjective> adjList = await _session.SelectAllFrom<Adjective>().OrderBy(x => x.Value).Asc().ToListAsync();
            return adjList;
        }

        public async Task<Adjective> ReadAsync(Guid id)
        {
            return await _session.LoadAsync<Adjective>(id);
        }

        public async Task<Adjective> ReadRandomAsync()
        {
            int count = await _session.Select<Adjective>().CountAll().From().ScalarAsync<int>();
            int offset = HelperService.GetRandomNumber(0, count);
            Adjective adj = await _session.SelectAllFrom<Adjective>().OrderBy(x => x.Value).Limit(offset, 1).FirstOrDefaultAsync();
            return adj;
        }

        public async Task<Adjective> UpdateAsync(Adjective adj)
        {
            await _session.UpdateAsync(adj);
            return adj;
        }
    }
}
