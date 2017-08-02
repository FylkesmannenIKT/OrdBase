
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
    	IEnumerable<Translation> Get(TranslationQuery query);
		IEnumerable<KeyValuePair<string,string>> GetKeyValue(TranslationQuery query); 
		IEnumerable<TranslationGroup> GetGroup(TranslationGroupQuery query);		
    	IEnumerable<TranslationGroupMeta> GetGroupMeta(TranslationGroupQuery query);
		
		//
		// Create, update, delete
		//
		IActionResult Create(Translation translation);
		IActionResult CreateArray(IEnumerable<Translation> translationArray);		
		IActionResult Update(TranslationQuery query, Translation Translation);
		IActionResult UpdateArray(TranslationGroupQuery query, IEnumerable<Translation> Translation);
		IActionResult Delete(TranslationQuery query);
		IActionResult DeleteGroup(TranslationGroupQuery query);		
    }	
}