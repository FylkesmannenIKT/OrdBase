using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrdBaseCore.Models 
{   
    public class Translation
    {   
        [ForeignKey("Client")]
        public string ClientKey { get; set; } 
        protected virtual Client Client { get; set; }

        [ForeignKey("Language")]
        public string LanguageKey { get; set; }
        protected virtual Language Language { get; set; }

        [ForeignKey("Container")]
        public string ContainerKey { get; set; }
        protected virtual Container Container { get; set; }
        
        [StringLength(127)]
        public string Key { get; set; } 

        [StringLength(255)]
        [Required]
        public string Text { get; set; }
        
        [Required]
        public bool IsComplete { get; set; }
    }

    public class TranslationQuery
    {  
        [FromQuery(Name="clientKey")]
        public string ClientKey      { get; set; }

        [FromQuery(Name="languageKey")]
        public string LanguageKey    { get; set; }

        [FromQuery(Name="containerKey")]
        public string ContainerKey   { get; set; } 
        
        [FromQuery(Name="translationKey")]
        public string TranslationKey { get; set; }
    }
}