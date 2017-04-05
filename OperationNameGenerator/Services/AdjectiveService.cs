using System;
using System.Threading.Tasks;
using OperationNameGenerator.BusinessModels;
using Folke.Elm;

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

        public async Task<Adjective> ReadAsync(Guid id)
        {
            return await _session.LoadAsync<Adjective>(id);
        }

        public Task<Adjective> ReadRandomAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<Adjective> UpdateAsync(Adjective adj)
        {
            await _session.UpdateAsync(adj);
            return adj;
        }
    }
}
