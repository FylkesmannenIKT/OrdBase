using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Collections.Generic;

using OrdBaseCore.Models;
using OrdBaseCore.IData;

namespace OrdBaseCore.Services
{
    public class TranslationRepository : ITranslationData
    {
        private readonly TranslationDb _context;
                
        public TranslationRepository(TranslationDb context) 
        { 
            _context = context; 
        }
        public IEnumerable<Translation> Get (string client, string language, string container, string accessKey)
        {
            return (from t in _context.Translation

                    where t.ClientKey == client &&
                          t.LanguageKey == language &&
                          t.Container == container &&
                          t.Key == accessKey

                    select t)
                        .ToArray();        
        }

        public IEnumerable<Translation> GetOnClient   (string client)
        {
            return (from t in _context.Translation

                    where t.ClientKey == client
                    select t)
                        .ToArray();
        }

        public IEnumerable<object> GetGroupOnClient(string client)
        {
            return (from t in _context.Translation
                    where t.ClientKey == client
                    group t by t.Key
                    into set
                    select new {
                        Key = set.Key,
                        IsComplete = set.ToDictionary(o => o.LanguageKey, o => o.Done)
                    });
        }
        
        public IEnumerable<Translation> GetOnContainer (string client, string container) 
        {
            return (from t in _context.Translation

                    where t.ClientKey == client &&
                          t.Container == container
                    select t)
                        .ToArray();
        }

         public IEnumerable<KeyValuePair<string,string>> GetOnContainer (string client, string language, string container) 
        {
            return (from t in _context.Translation

                    where t.ClientKey == client &&
                          t.LanguageKey == language &&
                          t.Container == container
                    select t)
                        .ToDictionary(o => o.Key, o => o.Text);
                       
            
           // return  x.ToDictionary(p => p.AccessKey, p => p.Text);    
        }

        public IEnumerable<Translation> GetOnAccessKey(string client, string accesskey)
        {
            return (from t in _context.Translation

                    where t.ClientKey == client &&
                          t.Key == accesskey
                    select t)
                        .ToArray();
        }

        public IEnumerable<Translation> GetOnLanguage(string client, string language)
        {
            return (from t in _context.Translation

                    where t.ClientKey == client &&
                          t.LanguageKey == language
                    select t)
                        .ToArray();
        }


        //
        // POST - Create, update, delete
        //
        public IActionResult Create(Translation translation) 
        {   
            //
            // @TODO - validate that ClientKey and languae already exists!! - JSolsvik 23.06
            //
            _context.Translation.Add(translation);
            _context.SaveChanges();
            return new NoContentResult {};
        }

        public IActionResult Update(Translation item) 
        {   
            // @note - Documentation suggest using FirstOrDefault here. I Do not fully understand what default means in this context - JSolsvik 23.06.17
            var translation = _context.Translation.First(
                t => t.ClientKey == item.ClientKey &&
                     t.LanguageKey == item.LanguageKey &&
                     t.Container == item.Container &&
                     t.Key == item.Key);

            if (translation == null) 
                return new NotFoundResult {};

            translation.Text = item.Text;
            translation.Done = item.Done;
            
            _context.Translation.Update(translation);
            _context.SaveChanges();
            return new NoContentResult {};
        }

        public IActionResult Delete(string client, string language, string container, string accesskey) 
        {   
            var translation = _context.Translation.First(
                t => t.ClientKey == client &&
                     t.LanguageKey == language &&
                     t.Container == container &&
                     t.Key == accesskey);    
            
            if (translation == null)
                return new NotFoundResult {};

            _context.Translation.Remove(translation);
            _context.SaveChanges();
            return new NoContentResult {};
        }

        //
        // TESTDATA add
        //
        public static void AddTestData(TranslationDb context) 
        { 
            context.Translation.AddRange( 
                new Translation {  ClientKey = "FMSF", LanguageKey = "en",     Container = "Main"   , Key = "hello_world",  Text = "Hello World"   , Done = true,  },
                new Translation {  ClientKey = "FMSF", LanguageKey = "no-nb",  Container = "Main"   , Key = "hello_world",  Text = "Hallo verden"  , Done = false, },
                new Translation {  ClientKey = "DIFI", LanguageKey = "en",     Container = "Special", Key = "this_is_me",   Text = "This is me!"   , Done = false, },
                new Translation {  ClientKey = "DIFI", LanguageKey = "no-nb",  Container = "Special", Key = "this_is_me",   Text = "Dette er meg!" , Done = true,  }
            );
            context.SaveChanges();
        }
    }
}