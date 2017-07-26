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
		// Get
		//
    	IEnumerable<Translation> Get(string clientKey, string languageKey, string containerKey, string translationKey);
    	IEnumerable<Translation> GetAll(string clientKey);
		IEnumerable<object>      GetGroupAll(string clientKey);
    	IEnumerable<Translation> GetOnContainer(string clientKey, string containerKey);
    	IEnumerable<KeyValuePair<string,string>> GetOnContainerLanguage(string clientKey, string containerKey, string languageKey); // @optimize
    	IEnumerable<Translation> GetOnKey(string clientKey, string translationKey);
		
    	IEnumerable<Translation> GetOnLanguage(string clientKey, string languageKey);
		
		//
		// Create, update, delete
		//
		IActionResult Create(Translation Translation);
		IActionResult Update(Translation Translation);
		IActionResult Delete(string clientKey, string languageKey, string containerKey, string translationKey);
    }	
}
