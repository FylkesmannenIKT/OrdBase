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
        // GET api/client/*
        //
    	[HttpGet("api/client")]
    	public IEnumerable<Client> Get([FromQuery] ClientQuery query)
    	{
    		return _clientRepo.Get(query);
    	}

        [HttpGet("api/client/containers")]        
        public IEnumerable<string> GetContainers([FromQuery] ClientQuery query) 
        {
            return _clientRepo.GetContainers(query);
        }

        [HttpGet("api/client/languages")] 
        public IEnumerable<string> GetLanguages([FromQuery] ClientQuery query) 
        {
            return _clientRepo.GetLanguages(query);
        }

        //
        // CREATE, UPDATE, DELETE api/client/*
        //
        [HttpPost("api/client")]
        public IActionResult Create([FromBody] Client client) 
        {   
            if (client == null)
                return  BadRequest();

            return _clientRepo.Create(client);
        }

        [HttpPut("api/client")]
        public IActionResult Update([FromQuery] ClientQuery query, [FromBody] Client client)
        {
            if (client == null || client.Key != query.ClientKey) 
                return BadRequest();

            return _clientRepo.Update(query, client);
        }        

        [HttpDelete("api/client")]
        public IActionResult Delete([FromQuery] ClientQuery query) 
        {
            return _clientRepo.Delete(query);
        }

        //
        // SET containers and languages connected to client
        //
        [HttpPost("api/client/containers")]
        public IActionResult  SetContainers([FromQuery] ClientQuery query, [FromBody] string[] containerArray)
        {
            if (containerArray ==  null)
                return  BadRequest();

            return _clientRepo.SetContainers(query, containerArray);
        }

        [HttpPost("api/client/languages")]         
        public IActionResult SetLanguages([FromQuery] ClientQuery query, [FromBody] string[] languageArray) 
        {
            if (languageArray == null)
                return  BadRequest();

            return _clientRepo.SetLanguages(query, languageArray);
        }
    }
}
