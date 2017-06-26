using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OrdBaseCore.Models;

namespace OrdBaseCore.IData
{
    public interface ILanguageData
    {
        IEnumerable<Language> GetAll();
        IEnumerable<Language> GetOnClient(string client);
        IActionResult Create(Language Language);
        IActionResult Update(Language Language);
        IActionResult Delete(string key);
    }	
}
