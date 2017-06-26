using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OrdBaseCore.Models;

namespace OrdBaseCore.IData
{
    public interface IClientData
    {
        IEnumerable<Client> Get(string name);
        IEnumerable<Client> GetAll();
        
        IActionResult Create(Client client);
    }	
}
