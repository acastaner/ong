using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Folke.Mvc.Extensions;
using Folke.Elm;
using OperationNameGenerator.Services;
using OperationNameGenerator.ViewModels;
using OperationNameGenerator.BusinessModels;
using Microsoft.AspNetCore.Authorization;
using System;

namespace OperationNameGenerator.Controllers
{
    [Produces("application/json")]
    [Route("api/data")]
    public class DataController : TypedControllerBase
    {
        private IFolkeConnection _session;
        private IAdjectiveService _adjService;
        private INounService _nounService;

        public DataController(IFolkeConnection session, IAdjectiveService adjService, INounService nounService)
        {
            _session = session;
            _adjService = adjService;
            _nounService = nounService;
        }
        [Route("getall")]
        [HttpGet]
        public async Task<IHttpActionResult<DataDto>> GetAll()
        {
            try
            {
                var adjList = await _adjService.ReadAllAsync();
                var nounList = await _nounService.ReadAllAsync();
                DataDto data = new DataDto(adjList, nounList);
                return Ok(data);
            }
            catch
            {
                return InternalServerError<DataDto>(new DataDto());
            }
        }
        [Route("import")]
        [HttpPost]
        [Authorize]
        public async Task<IHttpActionResult<string>> Import([FromBody] DataDto data)
        {
            try
            {
                int importedAdj = 0;
                int importedNoun = 0;
                foreach(AdjectiveReadDto adjDto in data.Adjectives)
                {
                    Adjective adj = new Adjective{ Value = adjDto.Value, CreationDate = DateTime.Now, ModificationDate = DateTime.Now };
                    await _adjService.CreateAsync(adj);
                    importedAdj++;
                }

                foreach(NounReadDto nounDto in data.Nouns)
                {
                    Noun noun = new Noun { Value = nounDto.Value, CreationDate = DateTime.Now, ModificationDate = DateTime.Now };
                    await _nounService.CreateAsync(noun);
                    importedNoun++;
                }
                return Ok<string>("Imported " + importedAdj + " adjective(s) and " + importedNoun + " noun(s).");
            }
            catch
            {
                return InternalServerError<string>("Could not import.");
            }
        }
    }
}