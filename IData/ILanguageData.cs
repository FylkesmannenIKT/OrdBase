using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OrdBaseCore.Models;

namespace OrdBaseCore.IData
{
    public interface ILanguageData
    {
        IEnumerable<Language> Get(string languageKey);
        IActionResult Create(Language Language);
    }	
}
