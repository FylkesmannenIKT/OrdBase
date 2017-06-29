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
        public IEnumerable<Language> GetAll()
        {
            return _languageRepo.GetAll();
        }

        [HttpGet("api/{client}/language")]
        public IEnumerable<Language> GetOnClient(string client) 
        {
            return _languageRepo.GetOnClient(client);
        }

        //
        // CREATE, UPDATE, DELETE   @doc https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-vsc#implement-the-other-crud-operations|
        //
        [HttpPost("api/language/create")]
        public IActionResult Create([FromBody] Language language) 
        {   
            if (language == null)
                return  BadRequest();
            return _languageRepo.Create(language);
        }

        //
        // @note unsure if this should be part of the API, or that the languages should be hard-coded into the system
        //        from the beginning.  - JSolsvik 26.06.17
        /* 
        [HttpPut("api/language/update/{key}")]
        public IActionResult Update(string key, [FromBody]Language language) 
        {
            if (language == null || language.Key != key) 
                return BadRequest();

            return _languageRepo.Update(language);
        }

        [HttpDelete("api/language/delete/{key}")]
        public IActionResult Delete(string key) 
        {
            return _languageRepo.Delete(key);
        }
        */
    }
}
