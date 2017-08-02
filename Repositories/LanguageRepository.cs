using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using OrdBaseCore.Models;
using OrdBaseCore.IData;

namespace OrdBaseCore.Repositories
{
	// 
	// @class LanguageRepository
	//  @brief Get language data
	//
    public class LanguageRepository : ILanguageData
    {
        private readonly TranslationDb _context;
        public LanguageRepository(TranslationDb context) 
        { 
            _context = context; 
        }

        //
        // GET
        //
        public IEnumerable<Language> Get(string languageKey)
        {
            return (from l in _context.Language
                    where l.Key == languageKey || languageKey == null
                    select l)
                    .ToArray();
        }

        //
        // CREATE
        //
        public IActionResult Create(Language language )
        {
            _context.Language.Add(language);
            _context.SaveChanges();
            return new NoContentResult{};
        }

        //
        // TESTDATA
        //
        public static void AddTestData(TranslationDb context) 
        {
            context.Language.AddRange(
                new Language { Name = "Norwegian", Key = "no-nb" },
                new Language { Name = "Swedish",   Key = "sv"    },
                new Language { Name = "Danish",    Key = "da"    },
                new Language { Name = "English",   Key = "en"    }
            );
            context.SaveChanges();
        }
    }
}