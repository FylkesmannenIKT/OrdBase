using System.Collections.Generic;
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
    	[HttpGet("api/client")]
    	public IEnumerable<Client> GetAll()
    	{
    		return _clientRepo.GetAll();
    	}

    	[HttpGet("api/{client}")]
    	public IEnumerable<Client> Get(string client) 
    	{
            return _clientRepo.Get(client);
    	}

        //
        // CREATE, UPDATE, DELETE  @doc https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-vsc#implement-the-other-crud-operations|
        //
        [HttpPost("api/client/create")]
        public IActionResult Create([FromBody] Client client) 
        {   
            if (client == null)
                return  BadRequest();

            return _clientRepo.Create(client);
        } 
    }
}
