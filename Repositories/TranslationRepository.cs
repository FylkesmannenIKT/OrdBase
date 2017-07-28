using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Collections.Generic;

using OrdBaseCore.Models;
using OrdBaseCore.IData;

namespace OrdBaseCore.Repositories
{
    public class TranslationRepository : ITranslationData
    {
        private readonly TranslationDb _context;
                
        public TranslationRepository(TranslationDb context) 
        { 
            _context = context; 
        }

        //
        // GET translation
        //
        public IEnumerable<Translation> Get(string clientKey, string languageKey, string containerKey, string translationKey)
        {
            return (from t in _context.Translation
                    where t.ClientKey    == clientKey &&
                          t.LanguageKey  == languageKey &&
                          t.ContainerKey == containerKey &&
                          t.Key          == translationKey
                    select t)
                    .ToArray();        
        }

        public IEnumerable<Translation> GetAll(string clientKey)
        {
            return (from t in _context.Translation
                    where t.ClientKey == clientKey
                    select t)
                    .ToArray();
        }

        //
        // GET translation/group
        // 
        public IEnumerable<Translation> GetGroup(string clientKey, string translationKey)
        {
            return (from t in _context.Translation
                    where t.ClientKey == clientKey && t.Key == translationKey
                    select t)
                    .ToArray();
        }


        public IEnumerable<IEnumerable<Translation>> GetGroupAll(string clientKey)
        {
            return (from t in _context.Translation
                    where t.ClientKey == clientKey
                    group t by t.Key
                    into grp
                    select grp.ToArray())
                    .ToArray();
        }


        public TranslationGroupMeta GetGroupMeta(string clientKey, string translationKey)
        {
            return (from t in _context.Translation
                    where t.ClientKey == clientKey && t.Key == translationKey
                    group t by t.Key
                    into grp
                    select new TranslationGroupMeta
                    {
                        Key = grp.Key,
                        ClientKey   = clientKey,
                        ContainerKey = grp.First().ContainerKey,
                        IsComplete = grp.Select(o => new KeyValuePair<string, bool> (o.LanguageKey, o.IsComplete))
                                        .ToArray()
                    })
                    .First();
        }


        public IEnumerable<TranslationGroupMeta> GetGroupMetaOnContainer(string clientKey, string containerKey)
        {
            return (from t in _context.Translation
                    where t.ClientKey == clientKey && t.ContainerKey == containerKey
                    group t by t.Key
                    into grp
                    select new TranslationGroupMeta
                    {
                        Key = grp.Key,
                        ClientKey    = clientKey,
                        ContainerKey = containerKey,
                        IsComplete = grp.Select(o => new KeyValuePair<string, bool> (o.LanguageKey, o.IsComplete))
                                        .ToArray()
                    })
                    .ToArray();
        }
        
        public IEnumerable<TranslationGroupMeta> GetGroupMetaAll(string clientKey)
        {
            return (from t in _context.Translation
                    where t.ClientKey == clientKey
                    group t by t.Key
                    into grp
                    select new TranslationGroupMeta
                    {
                        Key = grp.Key,
                        ClientKey    = clientKey,
                        ContainerKey = grp.First().ContainerKey,
                        IsComplete = grp.Select(o => new KeyValuePair<string, bool> (o.LanguageKey, o.IsComplete))
                                        .ToArray()
                    })
                    .ToArray();
        }

        //
        // GET translation/container
        //
        public IEnumerable<Translation> GetOnContainer (string clientKey, string containerKey) 
        {
            return (from t in _context.Translation
                    where t.ClientKey == clientKey && t.ContainerKey == containerKey
                    select t)
                        .ToArray();
        }

         public IEnumerable<KeyValuePair<string,string>> GetOnContainerLanguage (string clientKey, string languageKey, string containerKey) 
        {
            return (from t in _context.Translation
                    where t.ClientKey == clientKey && t.LanguageKey  == languageKey && t.ContainerKey == containerKey
                    select t)
                        .ToDictionary(o => o.Key, o => o.Text);            
        }

        //
        // GET translation/language
        //
        public IEnumerable<Translation> GetOnLanguage(string clientKey, string languageKey)
        {
            return (from t in _context.Translation

                    where t.ClientKey   == clientKey &&
                          t.LanguageKey == languageKey
                    select t)
                        .ToArray();
        }

        //
        // POST, PUT, DELETE translation
        //
        public IActionResult Create(Translation translation) 
        {   
            _context.Translation.Add(translation);
            _context.SaveChanges();
            return new NoContentResult {};
        }

        public IActionResult CreateMany(IEnumerable<Translation> translationArray) 
        {   
            _context.Translation.AddRange(translationArray);            
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
            translation.IsComplete = item.IsComplete;
            
            _context.Translation.Update(translation);
            _context.SaveChanges();
            return new NoContentResult {};
        }

        public IActionResult Delete(string clientKey,string containerKey, string translationKey, string languageKey) 
        {   
            var translation = _context.Translation.First(
                t => t.ClientKey    == clientKey &&
                     t.LanguageKey  == languageKey &&
                     t.ContainerKey == containerKey &&
                     t.Key          == translationKey);    
            
            if (translation == null)
                return new NotFoundResult {};

            _context.Translation.Remove(translation);
            _context.SaveChanges();
            return new NoContentResult {};
        }


        public IActionResult DeleteGroup(string clientKey, string containerKey, string translationKey) 
        {   
            var translationGroup = _context.Translation.Where(
                t => t.ClientKey    == clientKey &&
                     t.ContainerKey == containerKey &&
                     t.Key          == translationKey);    
            
            if (translationGroup == null)
                return new NotFoundResult {};

            _context.Translation.RemoveRange(translationGroup);
            _context.SaveChanges();
            return new NoContentResult {};
        }

        //
        // TESTDATA translation
        //
        public static void AddTestData(TranslationDb context) 
        { 
            context.Translation.AddRange( 
                new Translation {  ClientKey = "FMSF", LanguageKey = "en",     ContainerKey = "Main"   , Key = "hello_world",  Text = "Hello World"   , IsComplete = true,  },
                new Translation {  ClientKey = "FMSF", LanguageKey = "no-nb",  ContainerKey = "Main"   , Key = "hello_world",  Text = "Hallo verden"  , IsComplete = false, },
                new Translation {  ClientKey = "DIFI", LanguageKey = "en",     ContainerKey = "Special", Key = "this_is_me",   Text = "This is me!"   , IsComplete = false, },
                new Translation {  ClientKey = "DIFI", LanguageKey = "no-nb",  ContainerKey = "Special", Key = "this_is_me",   Text = "Dette er meg!" , IsComplete = true,  }
            );
            context.SaveChanges();
        }
    }
}