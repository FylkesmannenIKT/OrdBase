using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OrdBaseCore.Models;

namespace OrdBaseCore.IData
{
    public interface IClientData
    {
        // GET Client stuff
        IEnumerable<Client> Get(ClientQuery query);
        IEnumerable<string> GetLanguages(ClientQuery query);
        IEnumerable<string> GetContainers(ClientQuery query); 

        //
        // CREATE UPDATE DELETE client
        //
        IActionResult Create(Client client);
        IActionResult Update(ClientQuery query, Client client);
        IActionResult Delete(ClientQuery query);
       
        //
        // SET Containers and languages connected to client
        //
        IActionResult SetContainers(ClientQuery query, IEnumerable<string> containerArray);
        IActionResult SetLanguages(ClientQuery query, IEnumerable<string> languageArray);
    }	
}
