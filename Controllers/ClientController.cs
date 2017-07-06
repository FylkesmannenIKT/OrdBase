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
        // @class ClientWithLanguageCodes
        //  @note This is a helper class for recieving a JSON object from the client, which has both
        //   the complete information of a new Client object, but also has an array of all the languages
        //   which will be connected to the new client. In the Relational database, the languages and the 
        //   clients are two separate tables, which is why they have to be split up here. JSolsvik - 03.07.17
        //
        public class ClientWithLanguageCodes 
        {
            public Client Client { get; }
            public string[] LanguageCodes { get; }
        }
        //
        // CREATE, UPDATE, DELETE  @doc https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-vsc#implement-the-other-crud-operations|
        //
        [HttpPost("api/client/create")]
        public IActionResult Create([FromBody] ClientWithLanguageCodes clientWithLanguageCodes) 
        {   
            // @note validates if JSON body has the correct type
            if (clientWithLanguageCodes == null)
                return  BadRequest();

            _clientRepo.Create(clientWithLanguageCodes.Client, clientWithLanguageCodes.LanguageCodes);
            return StatusCode(201);
        } 
    }
}
