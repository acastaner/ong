using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Folke.Mvc.Extensions;
using Folke.Elm;
using OperationNameGenerator.Services;
using OperationNameGenerator.ViewModels;

namespace OperationNameGenerator.Controllers
{
    [Produces("application/json")]
    [Route("api/Data")]
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
        [Route("")]
        [HttpGet]
        public async Task<IHttpActionResult<DataDto>> GetAll()
        {
            try
            {
                var adjList = await _adjService.ReadAllAsync();
                var nounLList = await _nounService.ReadAllAsync();
                return Ok(new DataDto(adjList, nounLList));
            }
            catch
            {
                return InternalServerError<DataDto>(new DataDto());
            }
        }
    }
}