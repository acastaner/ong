using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Folke.Mvc.Extensions;
using Folke.Elm;
using OperationNameGenerator.Services;
using OperationNameGenerator.ViewModels;

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
    }
}