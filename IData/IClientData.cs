using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OrdBaseCore.Models;

namespace OrdBaseCore.IData
{
    public interface IClientData
    {
        IEnumerable<Client> Get(string clientKey);
        IEnumerable<Client> GetAll();
        
        IActionResult Create(Client client);
        IActionResult Update(Client client);
        IActionResult Delete(string clientKey);
        IEnumerable<string> GetDefaultLanguages(string clientKey);
        IEnumerable<string> GetDefaultContainers(string clientKey);        
        IActionResult CreateDefaultContainers(string clientKey, IEnumerable<string> defaultContainers);
        IActionResult CreateDefaultLanguages(string clientKey, IEnumerable<string> defultLanguages);
        IActionResult UpdateDefaultContainers(string clientKey, IEnumerable<string> defultLanguages);
        IActionResult UpdateDefaultLanguages(string clientKey, IEnumerable<string> defultLanguages);
        
    }	
}
