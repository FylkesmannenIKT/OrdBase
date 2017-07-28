using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

using OrdBaseCore.Models;
using OrdBaseCore.IData;

// CRUD operations - @doc https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-vsc#implement-the-other-crud-operations|

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
        // GET client
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

        //
        // GET client/default
        //
        [HttpGet("api/{clientKey}/default/container")]        
        [HttpGet("api/{clientKey}/default/container/all")]
        public IEnumerable<string> GetDefaultContainers(string clientKey) 
        {
            return _clientRepo.GetDefaultContainers(clientKey);
        }

        [HttpGet("api/{clientKey}/default/language")] 
        [HttpGet("api/{clientKey}/default/language/all")] 
        public IEnumerable<string> GetDefaultLanguages(string clientKey) 
        {
            return _clientRepo.GetDefaultLanguages(clientKey);
        }

        //
        // CREATE, UPDATE, DELETE client  
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
            if (client == null || client.Key != clientKey) 
                return BadRequest();
            return _clientRepo.Update(client);
        }        

        [HttpDelete("api/client/delete/{clientKey}")]
        public IActionResult Delete(string clientKey) 
        {
            return _clientRepo.Delete(clientKey);
        }

        //
        // CREATE client/default  
        //
        [HttpPost("api/{clientKey}/default/container/create")]        
        [HttpPost("api/{clientKey}/default/container/create/many")]
        public IActionResult  CreateDefaultContainers(string clientKey, [FromBody] string[] defaultContainers)
        {
            // Check if any of the data is null og nullstring            
            if (defaultContainers == null)
                return  BadRequest();

            _clientRepo.CreateDefaultContainers(clientKey, defaultContainers);
            return StatusCode(201);
        }

        [HttpPost("api/{clientKey}/default/language/create")]         
        [HttpPost("api/{clientKey}/default/language/create/many")]         
        public IActionResult CreateDefaultLanguages(string clientKey, [FromBody] string[] defaultLanguages) 
        {
            // Check if any of the data is null og nullstring
            if (defaultLanguages == null)
                return  BadRequest();

            _clientRepo.CreateDefaultLanguages(clientKey, defaultLanguages);
            return StatusCode(201);
        }

        //
        // UPDATE client/default  
        //
        [HttpPost("api/{clientKey}/default/container/update")]
        [HttpPost("api/{clientKey}/default/container/update/many")]        
        public IActionResult  UpdateDefaultContainers(string clientKey, [FromBody] string[] defaultContainers)
        {
            // Check if any of the data is null og nullstring            
            if (defaultContainers == null)
                return  BadRequest();

            _clientRepo.UpdateDefaultContainers(clientKey, defaultContainers);
            return StatusCode(201);
        }

        [HttpPost("api/{clientKey}/default/language/update")] 
        [HttpPost("api/{clientKey}/default/language/update/many")]         
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
