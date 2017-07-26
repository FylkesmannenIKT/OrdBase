using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

using OrdBaseCore.Models;
using OrdBaseCore.IData;

namespace OrdBaseCore.Controllers
{
    public class ClientController : Controller
    {
        private readonly IClientData _clientRepo;

        public ClientController(IClientData clientRepo)
        {
            _clientRepo = clientRepo;
        }

        //
        // GET
        //
        [HttpGet("api/")]
    	[HttpGet("api/client")]
    	[HttpGet("api/client/all")]                
    	public IEnumerable<Client> GetAll()
    	{
    		return _clientRepo.GetAll();
    	}

    	[HttpGet("api/{clientKey}")]
    	public IEnumerable<Client> Get(string clientKey) 
    	{
            return _clientRepo.Get(clientKey);
    	}

        [HttpGet("api/{clientKey}/default/containers")]
        public IEnumerable<string> GetDefaultContainers(string clientKey) 
        {
            return _clientRepo.GetDefaultContainers(clientKey);
        }

        [HttpGet("api/{clientKey}/default/languages")] 
        public IEnumerable<string> GetDefaultLanguages(string clientKey) 
        {
            return _clientRepo.GetDefaultLanguages(clientKey);
        }

        //
        // CREATE, UPDATE, DELETE  @doc https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-vsc#implement-the-other-crud-operations|
        //
        [HttpPost("api/client/create")]
        public IActionResult Create([FromBody] Client client) 
        {   
            // @note validates if JSON body has the correct type
            if (client == null)
                return  BadRequest();

            _clientRepo.Create(client);
            return StatusCode(201);
        }


        [HttpPut("api/client/update/{clientKey}")]

        public IActionResult Update(string clientKey, [FromBody] Client client)
        {
            if (client == null || client.Key  != clientKey) 
                return BadRequest();
            return _clientRepo.Update(client);
        }        

        [HttpDelete("api/client/delete/{clientKey}")]
        public IActionResult Delete(string clientKey) 
        {
            return _clientRepo.Delete(clientKey);
        }

        [HttpPost("api/{clientKey}/default/containers/create")]
        public IActionResult  CreateDefaultContainers(string clientKey, [FromBody] string[] defaultContainers)
        {
            // Check if any of the data is null og nullstring            
            if (defaultContainers == null)
                return  BadRequest();

            _clientRepo.CreateDefaultContainers(clientKey, defaultContainers);
            return StatusCode(201);
        }

        [HttpPost("api/{clientKey}/default/languages/create")]         
        public IActionResult CreateDefaultLanguages(string clientKey, [FromBody] string[] defaultLanguages) 
        {
            // Check if any of the data is null og nullstring
            if (defaultLanguages == null)
                return  BadRequest();

            _clientRepo.CreateDefaultLanguages(clientKey, defaultLanguages);
            return StatusCode(201);
        }

        [HttpPost("api/{clientKey}/default/containers/update")]
        public IActionResult  UpdateDefaultContainers(string clientKey, [FromBody] string[] defaultContainers)
        {
            // Check if any of the data is null og nullstring            
            if (defaultContainers == null)
                return  BadRequest();

            _clientRepo.UpdateDefaultContainers(clientKey, defaultContainers);
            return StatusCode(201);
        }

        [HttpPost("api/{clientKey}/default/languages/update")] 
        public IActionResult UpdateDefaultLanguages(string clientKey, [FromBody] string[] defaultLanguages) 
        {
            // Check if any of the data is null og nullstring
            if (defaultLanguages == null)
                return  BadRequest();

            _clientRepo.UpdateDefaultLanguages(clientKey, defaultLanguages);
            return StatusCode(201);
        }
    }
}
