using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

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
    

        public IEnumerable<Container> GetNonEmpty(ClientQuery query) 
        {
            return (from t in _context.Translation
                    where t.ClientKey == query.ClientKey
                    select t.ContainerKey)
                    .Distinct()
                    .Select(key => new Container  { Key = key });
        }


        public IEnumerable<ClientContainer> GetClientContainerArray(ClientQuery query)
        {
            return (from cc in _context.ClientContainer
                    where cc.ClientKey == query.ClientKey || query.ClientKey == null
                    select new ClientContainer {
                        ClientKey = cc.ClientKey,
                        ContainerKey = cc.ContainerKey,
                        TranslationCount = _context.Translation.Where(t => t.ClientKey    == cc.ClientKey && 
                                                                           t.ContainerKey == cc.ContainerKey).Count()
                    })
                    .ToArray();
        }     

        public IActionResult SetClientContainerArray(ClientQuery query, IEnumerable<ClientContainer> clientContainerArray)
        {
            var _clientContainers = _context.ClientContainer.Where(cc => cc.ClientKey == query.ClientKey);
            _context.RemoveRange(_clientContainers);
            _context.SaveChanges();

            // If the foreign-key container does not exist,.. Add to Container table
            foreach(var cc in clientContainerArray) {
                if (_context.Container.Where(c => c.Key == cc.ContainerKey).Count() == 0){
                    _context.Container.Add(new Container { Key = cc.ContainerKey});
                }
            }
            
            _context.AddRange(clientContainerArray);
            _context.SaveChanges();

            return new StatusCodeResult(201);
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