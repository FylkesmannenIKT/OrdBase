using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace OrdBaseCore.Models 
{
    //
    // @note Instances of these classes only exists in memory, and are never stored in DB. 
    //       This is mainly because a TranslationGroup is more structured data, which is not 
    //       a good fit for a relational database. Also there is no new data to be stored here, 
    //       as these classes represent the combination and structuring of existing 'flat' data
    //       from the Translation table. 'Flat' here meaning the opposite of structured data. 
    //         - JSolsvik 31.07.2017
    //
    public class TranslationGroup 
    {
        public class Item {
            public string LanguageKey { get; set; }
            public string Text { get; set; }
            public bool IsComplete { get; set; }
        }

        public string Key { get; set; }
        public string ClientKey { get; set; }
        public string ContainerKey { get; set; }

        public IEnumerable<Item> Items{ get; set; }
    }

    public class TranslationGroupMeta 
    {
        public class Item 
        {
            public string LanguageKey  { get; set; }
            public bool   IsComplete  { get; set; }
        }
        public string Key { get; set; }
        public string ClientKey   { get; set; }
        public string ContainerKey { get; set; }
        public IEnumerable<Item> Items { get; set; }
    }

    public class TranslationGroupQuery
    {  
        [FromQuery(Name="clientKey")]
        public string ClientKey      { get; set; }

        [FromQuery(Name="containerKey")]
        public string ContainerKey   { get; set; } 
        
        [FromQuery(Name="translationKey")]
        public string TranslationKey { get; set; }
    }
}