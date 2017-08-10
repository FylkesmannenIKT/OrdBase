using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

using OrdBaseCore.Models;
using OrdBaseCore.IData;

namespace OrdBaseCore.Controllers
{	
    public class ContainerController : Controller
    {
        private readonly IContainerData _containerRepo;

        public ContainerController(IContainerData containerRepo)
        {
            _containerRepo = containerRepo;
        }

	    [ResponseCache(CacheProfileName="api_cache")]  
        [Route("api/container")]
		public IEnumerable<Container> Get([FromQuery] string containerKey) 
		{
            return _containerRepo.Get(containerKey);
        }

        [Route("api/container/nonempty")]
        public IEnumerable<Container> GetNonEmpty([FromQuery] ClientQuery query)
        {
            return _containerRepo.GetNonEmpty(query);
        }

        [ResponseCache(CacheProfileName="api_cache")]  
        [HttpGet("api/container/active")]
        public IEnumerable<ClientContainer> GetClientContainerArray([FromQuery] ClientQuery query) 
        {
            return _containerRepo.GetClientContainerArray(query);
        }

        [HttpPut("api/container/active")]
        public IActionResult  SetClientContainerArray([FromQuery] ClientQuery query, [FromBody] IEnumerable<ClientContainer> clientContainerArray)
        {
            if (clientContainerArray ==  null)
                return  BadRequest();

            return _containerRepo.SetClientContainerArray(query, clientContainerArray);
        }
    }
}
