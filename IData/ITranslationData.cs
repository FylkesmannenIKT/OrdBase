
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using OrdBaseCore.Models;

// @doc private interface property - https://stackoverflow.com/questions/7767024/why-c-sharp-compiler-does-not-allows-private-property-setters-in-interfaces

namespace OrdBaseCore.IData
{
    public interface ITranslationData
    {
		//
		// GET translation
		//
    	IEnumerable<Translation> Get(string clientKey, string languageKey, string containerKey, string translationKey);
    	IEnumerable<Translation> GetAll(string clientKey);

		//
		// GET translation/group
		//
		IEnumerable<Translation> GetGroup(string clientKey, string translationKey);		
		IEnumerable<IEnumerable<Translation>> GetGroupAll(string clientKey);
    	TranslationGroupMeta GetGroupMeta(string clientKey, string translationKey);
    	IEnumerable<TranslationGroupMeta> GetGroupMetaOnContainer(string clientKey, string containerKey);    	
		IEnumerable<TranslationGroupMeta> GetGroupMetaAll(string clientKey);
	
		//
		// GET translation/container
		//
    	IEnumerable<Translation> GetOnContainer(string clientKey, string containerKey);
		IEnumerable<KeyValuePair<string,string>> GetOnContainerLanguage(string clientKey, string containerKey, string languageKey); // @optimize
		
		//
		// GET translation/language
		//
    	IEnumerable<Translation> GetOnLanguage(string clientKey, string languageKey);
		
		//
		// Create, update, delete
		//
		IActionResult Create(Translation translation);
		IActionResult CreateMany(IEnumerable<Translation> array);		
		IActionResult Update(Translation Translation);
		IActionResult Delete(string clientKey, string containerKey, string translationKey, string languageKey);
		IActionResult DeleteGroup(string clientKey, string containerKey, string translationKey);		
    }	
}