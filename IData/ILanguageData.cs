using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OrdBaseCore.Models;

namespace OrdBaseCore.IData
{
    public interface ILanguageData
    {
        IEnumerable<Language> GetGlobal();
        IEnumerable<Language> GetAll(string clientKey);
        IActionResult Create(Language Language);
        IActionResult Update(Language Language);
        IActionResult Delete(string languageKey);
    }	
}
