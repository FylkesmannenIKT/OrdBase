using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

using System.Collections.Generic;
using System.Linq;

using OrdBaseCore.Models;
using OrdBaseCore.IData;

namespace OrdBaseCore.Controllers
{   
    public class TranslationController : Controller
    {   
        private readonly ITranslationData _translationRepo;

        public TranslationController(ITranslationData translationRepo)
        {
            _translationRepo = translationRepo;
        }

        //
        // GET translation
        //
        [ResponseCache(CacheProfileName="api_cache")]  
        [HttpGet("api/translation")]
    	public IEnumerable<Translation> Get([FromQuery] TranslationQuery query)
        {   
            return _translationRepo.Get(query); 
        }

        [ResponseCache(CacheProfileName="api_cache")]  
        [HttpGet("api/translation/group")]
        public IEnumerable<TranslationGroup> GetGroup([FromQuery] TranslationGroupQuery query) 
        {
            return  _translationRepo.GetGroup(query);
        }   

        [ResponseCache(CacheProfileName="api_cache")]  
        [HttpGet("api/translation/meta")]        
        [HttpGet("api/translation/group/meta")]
        public IEnumerable<TranslationGroupMeta> GetGroupMeta([FromQuery] TranslationGroupQuery query)
        {
            return _translationRepo.GetGroupMeta(query);
        } 

        [ResponseCache(CacheProfileName="api_cache")]  
        [HttpGet("api/translation/keyvalue")]
        public IEnumerable<KeyValuePair<string,string>> GetKeyValue([FromQuery] TranslationQuery query)
        {
            return _translationRepo.GetKeyValue(query); 
        }

        //
        // POST, PUT, DELETE translation
        //  @doc https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-vsc#implement-the-other-crud-operations|
        //
        [HttpPost("api/translation")]
        public IActionResult Create([FromBody] Translation translation) 
        {   
            if (translation == null)
                return  BadRequest();

            return _translationRepo.Create(translation);
        } 


        [HttpPost("api/translation/array")]
        public IActionResult CreateArray([FromBody] IEnumerable<Translation> translationArray) 
        {   
            if (translationArray == null)
                return  BadRequest();

            return _translationRepo.CreateArray(translationArray);
        }

        [HttpPut("api/translation")]
        public IActionResult Update([FromQuery] TranslationQuery query, [FromBody] Translation translation)
        {   
            if (query == null || translation == null || query.ClientKey      != translation.ClientKey    ||
                                                        query.LanguageKey    != translation.LanguageKey  ||
                                                        query.ContainerKey   != translation.ContainerKey ||
                                                        query.TranslationKey != translation.Key) 
                return BadRequest();
            
            return _translationRepo.Update(query, translation);
        }

        [HttpPut("api/translation/array")]
        public IActionResult UpdateArray([FromQuery] TranslationGroupQuery query, [FromBody] IEnumerable<Translation> translationArray)
        {   
           if (query == null || translationArray == null || query.ClientKey      != translationArray.First().ClientKey    ||
                                                            query.ContainerKey   != translationArray.First().ContainerKey ||
                                                            query.TranslationKey != translationArray.First().Key) 
               return BadRequest();
           
           return _translationRepo.UpdateArray(query, translationArray);
        }


        [HttpDelete("api/translation")]
        public IActionResult Delete([FromQuery] TranslationQuery query)
        {
            if (query == null || query.ClientKey      == null
                              || query.LanguageKey    == null
                              || query.ContainerKey   == null
                              || query.TranslationKey == null)
                return BadRequest();

            return _translationRepo.Delete(query);
        }

        [HttpDelete("api/translation/group")]
        public IActionResult DeleteGroup([FromQuery] TranslationGroupQuery query)
        {
            if (query == null || query.ClientKey      == null
                              || query.ContainerKey   == null
                              || query.TranslationKey == null)
                return BadRequest();

            return _translationRepo.DeleteGroup(query);
        }
    }
}
