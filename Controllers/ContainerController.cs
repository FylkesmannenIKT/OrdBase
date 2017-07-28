using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

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
		[Route("api/container/all")]
		public string[] GetGlobal() 
		{
			return _containerRepo.GetGlobal();
		}

    	[Route("api/{clientKey}/container/all")]		
    	public string[] GetAll(string clientKey) 
    	{
    		return _containerRepo.GetAll(clientKey); 
    	}
    }
}
