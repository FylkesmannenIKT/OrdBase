using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OrdBaseCore.Models;

namespace OrdBaseCore.IData
{
    public interface IClientData
    {
        // GET Client stuff
        IEnumerable<Client> Get(ClientQuery query);

        //
        // CREATE UPDATE DELETE client
        //
        IActionResult Create(Client client);
        IActionResult Update(ClientQuery query, Client client);
        IActionResult Delete(ClientQuery query);
       
    }	
}
