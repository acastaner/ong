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

        public async Task<IList<Adjective>> ReadAllAsync()
        {
            IList<Adjective> adjList = await _session.SelectAllFrom<Adjective>().ToListAsync();
            return adjList;
        }

        public async Task<Adjective> ReadAsync(Guid id)
        {
            return await _session.LoadAsync<Adjective>(id);
        }

        public async Task<Adjective> ReadRandomAsync()
        {
            var adjList = await _session.SelectAllFrom<Adjective>().ToListAsync();

            int count = adjList.Count;
            Random rnd = new Random();
            int offset = rnd.Next(count);
            return adjList[offset];
        }

        public async Task<Adjective> UpdateAsync(Adjective adj)
        {
            await _session.UpdateAsync(adj);
            return adj;
        }
    }
}
