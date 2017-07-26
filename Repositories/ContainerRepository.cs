using System.Linq;

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
        
        public string[] GetGlobal()
        {
            return _context.Container.Select(c => c.Key).ToArray();
        }
    
        public string[] GetGroup(string clientKey, string translationKey) 
        { 
            return (from t in _context.Translation
                    where t.ClientKey == clientKey && t.Key == translationKey
                    group t by t.ContainerKey into grp
                    select grp.Key)
                        .Distinct()
                        .ToArray();
        }

        public string[] GetAll(string client) 
        {
            return (from t in _context.ClientContainer
                    where t.ClientKey == client
                    select t.ContainerKey)
                        .Distinct()
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