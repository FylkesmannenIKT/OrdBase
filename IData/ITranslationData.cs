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
    	IEnumerable<Translation> GetOnClient(string client);
		IEnumerable<object>      GetGroupOnClient(string client);
    	IEnumerable<Translation> GetOnContainer(string client, string container);
    	IEnumerable<KeyValuePair<string,string>> GetOnContainer(string client, string languaage, string container); // @optimize
    	IEnumerable<Translation> GetOnAccessKey(string client, string accesskey);

		// @note - Consider deprecating the next two calls, Get and GetOnLanguage, they might never be used. Leaving them here complicates maintenance - JSolsvik 03.07.17
    	IEnumerable<Translation> Get(string client, string language, string container, string accessKey);
    	IEnumerable<Translation> GetOnLanguage(string client, string language);
		
		//
		// Create, update, delete
		//
		IActionResult Create(Translation Translation);
		IActionResult Update(Translation Translation);
		IActionResult Delete(string client, string language, string container, string accesskey);
    }	
}
