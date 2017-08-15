using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using OrdBaseCore.Models;
using OrdBaseCore.IData;

namespace OrdBaseCore.Controllers
{
    public class LanguageController : Controller
    {
        private readonly ILanguageData _languageRepo;

        public LanguageController(ILanguageData languageRepo)
        {
            _languageRepo = languageRepo;
        }

        [HttpGet("api/language")]
        public IEnumerable<Language> Get([FromQuery] string languageKey)
        {
            return _languageRepo.Get(languageKey);
        }

        [HttpPost("api/language")]
        public IActionResult Create([FromBody] Language language) 
        {   
            if (language == null)
                return  BadRequest();
                
            return _languageRepo.Create(language);
        }

        [HttpGet("api/language/active")]
        public IEnumerable<ClientLanguage> GetClientLanguageArray([FromQuery] ClientQuery query) 
        {
            return _languageRepo.GetClientLanguageArray(query);
        }

        [HttpPut("api/language/active")]
        public IActionResult SetClientLanguageArray([FromQuery] ClientQuery query, [FromBody] IEnumerable<ClientLanguage> clientLanguageArray) 
        {
            if (clientLanguageArray == null)
                return  BadRequest();

            return _languageRepo.SetClientLanguageArray(query, clientLanguageArray);
        }
    
    }
}
