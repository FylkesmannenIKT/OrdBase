using System.Linq;

using OrdBaseCore.Models;
using OrdBaseCore.IData;

namespace OrdBaseCore.Services
{	
	// 
	// @class ContainerRepository
	//  @brief Gets the names of containers
	//
    public class ContainerRepository : IContainerData
    {
        private readonly TranslationDb _context;

        public ContainerRepository (TranslationDb context) 
        { _context = context; }
        
        //
        // GET
        //  @note This repository will not have any create,update,delete, because containers do not have their own 
        //          table in the repository, but are part of the Translation table.
        //
        public string[] Get(string client, string accesskey) 
        { 
            return (from t in _context.Translation
                    where t.ClientKey == client && t.Key == accesskey
                    group t by t.Container into grp
                    select grp.Key)
                        .Distinct()
                        .ToArray();
        }

        public string[] GetOnClient(string client) 
        {
            return (from t in _context.Translation
                    where t.ClientKey == client
                    select t.Container)
                        .Distinct()
                        .ToArray();
                        
        }
    }
}