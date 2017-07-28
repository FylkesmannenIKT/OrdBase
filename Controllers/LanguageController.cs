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

        //
        // GET
        //
        [HttpGet("api/language")]
        public IEnumerable<Language> GetGlobal()
        {
            return _languageRepo.GetGlobal();
        }

        //
        // CREATE
        //
        [HttpPost("api/language/create")]
        public IActionResult Create([FromBody] Language language) 
        {   
            if (language == null)
                return  BadRequest();
                
            return _languageRepo.Create(language);
        }
    }
}
