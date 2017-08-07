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

		[Route("api/container")]
		public IEnumerable<Container> Get([FromQuery] string containerKey) 
		{
            return _containerRepo.Get(containerKey);
        }

        [Route("api/container/noempty")]
        public IEnumerable<Container> GetNoEmpty([FromQuery] string clientKey)
        {
            return _containerRepo.GetNoEmpty(clientKey);
        }
    }
}
