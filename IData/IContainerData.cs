using System.Collections.Generic;
using OrdBaseCore.Models;

namespace OrdBaseCore.IData
{
    public interface IContainerData
    {
        IEnumerable<Container> Get(string containerKey);
    }	
}
