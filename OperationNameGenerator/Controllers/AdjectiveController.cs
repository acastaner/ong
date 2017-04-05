using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Folke.Mvc.Extensions;
using Folke.Elm;
using OperationNameGenerator.Services;
using OperationNameGenerator.ViewModels;
using OperationNameGenerator.BusinessModels;
using OperationNameGenerator.Mappings;
using Microsoft.AspNetCore.Authorization;

namespace OperationNameGenerator.Controllers
{
    [Produces("application/json")]
    [Route("api/Adjective")]
    public class AdjectiveController : TypedControllerBase
    {
        private IFolkeConnection _session;
        private IAdjectiveService _adjService;
        public AdjectiveController(IFolkeConnection session,
                                    IAdjectiveService adjService)
        {
            _session = session;
            _adjService = adjService;
        }

        [HttpGet("{id}")]
        public async Task<IHttpActionResult<AdjectiveDto>> Get(Guid id)
        {
            try
            {
                Adjective adj = await _adjService.ReadAsync(id);
                return Ok(adj.toAdjectiveDto());
            }
            catch
            {
                return InternalServerError<AdjectiveDto>(new AdjectiveDto());
            }
        }
        [Authorize]
        [HttpDelete]
        public async Task<IHttpActionResult<AdjectiveDto>> Delete(Guid id)
        {
            try
            {
                Adjective adj = await _adjService.ReadAsync(id);
                await _adjService.DeleteAsync(adj);
                return Ok(new AdjectiveDto());
            }
            catch
            {
                return InternalServerError<AdjectiveDto>(new AdjectiveDto());
            }
        }
    }
}