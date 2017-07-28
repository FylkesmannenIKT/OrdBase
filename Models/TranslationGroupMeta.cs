using System.Collections.Generic;

namespace OrdBaseCore.Models 
{

    //
    // @note this is just a helper class, which is never stored in the database, but constructed from other stuff.
    //
    public class TranslationGroupMeta 
    {
        public string Key { get; set; }
    
        public string ClientKey   { get; set; }
        public string ContainerKey { get; set; }
        public IEnumerable<KeyValuePair<string, bool>> IsComplete { get; set; }
    }
}