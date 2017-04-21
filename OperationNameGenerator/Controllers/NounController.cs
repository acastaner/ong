using System;
using System.Threading.Tasks;
using Folke.Elm;
using Folke.Mvc.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OperationNameGenerator.BusinessModels;
using OperationNameGenerator.Mappings;
using OperationNameGenerator.Services;
using OperationNameGenerator.ViewModels;

namespace OperationNameGenerator.Controllers
{
    [Produces("application/json")]
    [Route("api/noun")]
    public class NounController : TypedControllerBase
    {
        private IFolkeConnection _session;
        private INounService _nounService;
        public NounController(IFolkeConnection session, INounService nounService)
        {
            _session = session;
            _nounService = nounService;
        }

        [HttpGet("{id}")]
        public async Task<IHttpActionResult<NounDto>> Get(Guid id)
        {
            try
            {
                Noun noun = await _nounService.ReadAsync(id);
                return Ok(noun.toNounDto());
            }
            catch
            {
                return InternalServerError<NounDto>(new NounDto());
            }
        }
        [Route("")]
        [Authorize]
        [HttpPost]
        public async Task<IHttpActionResult<NounDto>> Post([FromBody] NounDto nounDto)
        {
            try
            {
                Noun noun = new Noun
                {
                    Value = nounDto.Value,
                    ModificationDate = DateTime.Now
                };
                if (await _nounService.ExistsAsync(noun))
                    return BadRequest<NounDto>("Entry already exists");
                else
                {
                    noun = await _nounService.CreateAsync(noun);
                    return Ok(noun.toNounDto());
                }
            }
            catch
            {
                return InternalServerError<NounDto>(new NounDto());
            }
        }
    }
}
