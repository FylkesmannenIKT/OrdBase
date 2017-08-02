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