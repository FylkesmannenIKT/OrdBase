
using OrdBaseCore.Models;

namespace OrdBaseCore.IData
{
    public interface IContainerData
    {
    	string[] Get(string client, string accesskey);
    	string[] GetOnClient(string client);
    }	
}
