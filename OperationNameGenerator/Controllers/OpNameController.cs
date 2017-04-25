using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Folke.Mvc.Extensions;
using Folke.Elm;
using OperationNameGenerator.Services;
using OperationNameGenerator.ViewModels;
using OperationNameGenerator.BusinessModels;
using System;

namespace OperationNameGenerator.Controllers
{
    [Produces("application/json")]
    [Route("api/opname")]

    public class OpNameController : TypedControllerBase
    {
        private IFolkeConnection _session;
        private INounService _nounService;
        private IAdjectiveService _adjService;

        public OpNameController(IFolkeConnection session,
                                INounService nounService,
                                IAdjectiveService adjService)
        {
            _session = session;
            _nounService = nounService;
            _adjService = adjService;
        }

        [Route("")]
        [HttpGet]
        public async Task<IHttpActionResult<OpNameDto>> Get()
        {
            try
            {
                Adjective adj = await _adjService.ReadRandomAsync();
                Noun noun = await _nounService.ReadRandomAsync();
                OpNameDto opNameDto = new OpNameDto
                                                {
                                                    Adjective = adj.Value,
                                                    Noun = noun.Value
                                                };
                return Ok<OpNameDto>(opNameDto);
                
            }
            catch
            {
                return InternalServerError<OpNameDto>(new OpNameDto());
            }
        }
    }
}