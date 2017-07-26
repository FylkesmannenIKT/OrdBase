using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrdBaseCore.Models 
{
    public class ClientLanguage 
    {   
        public string ClientKey { get; set; }
        public virtual Client Client { get; set; }

        public string LanguageKey { get; set; }
        public virtual Language Language { get; set; }       
    }
}