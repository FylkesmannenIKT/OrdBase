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
        public IEnumerable<Language> GetGlobal()
        {
            return _context.Language.ToArray();
        }

        public IEnumerable<Language> GetAll(string clientKey)
        {
            return (from t in _context.Translation
                    join l in _context.Language on t.LanguageKey equals l.Key
                    join c in _context.Client on t.ClientKey equals c.Key
                    where c.Key == clientKey
                    select l)
                        .ToArray();
        }

        //
        // CREATE, UPDATE, DELETE
        //
        public IActionResult Create(Language language )
        {
            _context.Language.Add(language);
            _context.SaveChanges();
            return new NoContentResult{};
        }

        public IActionResult Update(Language item) 
        {
            var language = _context.Language.First( t => t.Key == item.Key);
            
            if (language == null) 
                return new NotFoundResult{};

            language.Name = item.Name;

            _context.Language.Update(language);
            _context.SaveChanges();
            return new NoContentResult {};
        }

        public IActionResult Delete(string languageKey) 
        {
            var language = _context.Language.First(t => t.Key == languageKey);

            if (language == null)
                return new NotFoundResult {};

            _context.Language.Remove(language);
            _context.SaveChanges();
            return new NoContentResult {};
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