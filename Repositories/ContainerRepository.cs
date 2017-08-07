using System.Linq;
using System.Collections.Generic;

using OrdBaseCore.Models;
using OrdBaseCore.IData;

namespace OrdBaseCore.Repositories
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
        
        public IEnumerable<Container> Get(string containerKey)
        {
            return (from c in _context.Container
                    where c.Key == containerKey || containerKey == null
                    select c)
                    .ToArray();
        }
    

        public IEnumerable<Container> GetNoEmpty(string clientKey) 
        {

            return (from t in _context.Translation
                    where t.ClientKey == clientKey
                    select t.ContainerKey)
                    .Distinct()
                    .Select(key => new Container { Key = key });
        }

        //
        // TESTDATA add
        //
        public static void AddTestData(TranslationDb context) 
        {
            context.Container.AddRange(
                new Container { Key = "Main"},
                new Container { Key = "Special"}                
            );
        }
    }
}