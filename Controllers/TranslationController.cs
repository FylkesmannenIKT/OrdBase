using Microsoft.AspNetCore.Mvc;
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
        [HttpGet("api/{clientKey}/translation/{containerKey}/{translationKey}/{languageKey}")]
    	public IEnumerable<Translation> Get(string clientKey, string languageKey, string containerKey, string translationKey)
        {
            return _translationRepo.Get(clientKey, languageKey, containerKey, translationKey); 
        }
        
        [HttpGet("api/{clientKey}/translation/all")]
        public IEnumerable<Translation> GetAll(string clientKey)
        {
            return _translationRepo.GetAll(clientKey); 
        }

        //
        // GET translation/group
        //
        [HttpGet("api/{clientKey}/translation/group/{translationKey}")]
        public IEnumerable<Translation> GetGroup(string clientKey, string translationKey) 
        {
            return  _translationRepo.GetGroup(clientKey, translationKey);
        }   

        [HttpGet("api/{clientKey}/translation/group/all")]
        public IEnumerable<IEnumerable<Translation>> GetGroupAll(string clientKey)
        {
            return _translationRepo.GetGroupAll(clientKey);
        } 

        //
        // GET translation/group/meta
        //
        [HttpGet("api/{clientKey}/translation/group/meta/{translationKey}")]
        public TranslationGroupMeta GetGroupMeta(string clientKey, string translationKey)
        {
            return _translationRepo.GetGroupMeta(clientKey, translationKey);
        } 
        
        [HttpGet("api/{clientKey}/translation/group/meta/container/{containerKey}")]
        public IEnumerable<TranslationGroupMeta> GetGroupMetaOnContainer(string clientKey, string containerKey)
        {
            return _translationRepo.GetGroupMetaOnContainer(clientKey, containerKey);
        } 


        [HttpGet("api/{clientKey}/translation/group/meta/all")]
        [HttpGet("api/{clientKey}/translation/group/meta/container/all")]        
        public IEnumerable<TranslationGroupMeta> GetGroupMetaAll(string clientKey)
        {
            return _translationRepo.GetGroupMetaAll(clientKey);
        } 


        //
        // GET translation/container
        //
        [HttpGet("api/{clientKey}/translation/container/{containerKey}")]
        public IEnumerable<object> GetOnContainer(string clientKey, string containerKey)
        {
            return _translationRepo.GetOnContainer(clientKey, containerKey); 
        }

        [HttpGet("api/{clientKey}/translation/container/{containerKey}/{languageKey}")]
        public IEnumerable<KeyValuePair<string,string>> GetOnContainerLanguage(string clientKey, string languageKey, string containerKey)
        {
            return _translationRepo.GetOnContainerLanguage(clientKey, languageKey, containerKey); 
        }


        //
        // GET translation/language
        //
        [HttpGet("api/{clientKey}/translation/language/{languageKey}")]
        public IEnumerable<Translation> GetOnLanguage(string clientKey, string languageKey)
        {
            return _translationRepo.GetOnLanguage(clientKey, languageKey); 
        }
        
        //
        // POST, PUT, DELETE translation
        //  @doc https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-vsc#implement-the-other-crud-operations|
        //
        [HttpPost("api/translation/create")]
        public IActionResult Create([FromBody] Translation translation) 
        {   
            if (translation == null)
                return  BadRequest();
            return _translationRepo.Create(translation);
        } 


        [HttpPost("api/translation/create/many")]
        public IActionResult CreateMany([FromBody]IEnumerable<Translation> translationArray) 
        {   
            if (translationArray == null)
                return  BadRequest();
            return _translationRepo.CreateMany(translationArray);
        }

        [HttpPut("api/translation/update/{clientKey}/{containerKey}/{translationKey}/{languageKey}")]
        public IActionResult Update(string clientKey, string languageKey, string containerKey, string translationKey,
                                         [FromBody] Translation translation)
        {   
            if (translation == null || translation.ClientKey    != clientKey 
                                    || translation.LanguageKey  != languageKey
                                    || translation.ContainerKey != containerKey 
                                    || translation.Key          != translationKey) 
                return BadRequest();
            

            return _translationRepo.Update(translation);
        }

        [HttpDelete("api/translation/delete/{clientKey}/{containerKey}/{translationKey}/{languageKey}")]
        public IActionResult Delete(string clientKey, string languageKey, string containerKey, string translationKey)
        {
            return _translationRepo.Delete(clientKey, languageKey, containerKey, translationKey);
        }

        [HttpDelete("api/translation/delete/group/{clientKey}/{containerKey}/{translationKey}")]
        public IActionResult DeleteGroup(string clientKey, string containerKey, string translationKey)
        {
            return _translationRepo.DeleteGroup(clientKey, containerKey, translationKey);
        }
    }
}
