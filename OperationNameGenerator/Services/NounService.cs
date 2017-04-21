﻿using System;
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

        public async Task<bool> ExistsAsync(Noun noun)
        {
            Noun dbNoun = await _session.SelectAllFrom<Noun>().Where(x => x.Value == noun.Value).FirstOrDefaultAsync();
            return (dbNoun == null ? false : true);
        }

        public async Task<IList<Noun>> ReadAllAsync()
        {
            IList<Noun> nounList = await _session.SelectAllFrom<Noun>().ToListAsync();
            return nounList;
        }

        public async Task<Noun> ReadAsync(Guid id)
        {
            return await _session.LoadAsync<Noun>(id);
        }

        public async Task<Noun> ReadRandomAsync()
        {
            try
            {
                int count = await _session.Select<Adjective>().CountAll().From().ScalarAsync<int>();
                Random rnd = new Random();
                int offset = rnd.Next(count);
                Noun noun = await _session.SelectAllFrom<Noun>().OrderBy(x => x.Id).Limit(offset, 1).FirstOrDefaultAsync();
                return noun;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.InnerException.ToString());
            }
            
        }

        public async Task<Noun> UpdateAsync(Noun noun)
        {
            await _session.UpdateAsync(noun);
            return noun;
        }
    }
}
