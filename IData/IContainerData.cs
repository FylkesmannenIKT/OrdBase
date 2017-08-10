using System.Collections.Generic;
using OrdBaseCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace OrdBaseCore.IData
{
    public interface IContainerData
    {
        IEnumerable<Container> Get(string containerKey);
        IEnumerable<Container> GetNonEmpty(ClientQuery query);
        IEnumerable<ClientContainer> GetClientContainerArray(ClientQuery query);
        IActionResult SetClientContainerArray(ClientQuery query, IEnumerable<ClientContainer> clientContainerArray);
    }	
}
