using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Collections.Generic;
using System;

using System.Diagnostics;

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
        public IEnumerable<Translation> Get(TranslationQuery query)
        {
            return (from t in _context.Translation
                    where  t.ClientKey    == query.ClientKey        || query.ClientKey      == null           
                    where  t.LanguageKey  == query.LanguageKey      || query.LanguageKey    == null       
                    where  t.ContainerKey == query.ContainerKey     || query.ContainerKey   == null     
                    where  t.Key          == query.TranslationKey   || query.TranslationKey == null 
                    select t).ToArray();        
        }

        public IEnumerable<KeyValuePair<string,string>> GetKeyValue (TranslationQuery query) 
        {
            return (from t in _context.Translation
                    where t.ClientKey    == query.ClientKey      || query.ClientKey      == null 
                    where t.LanguageKey  == query.LanguageKey    || query.LanguageKey    == null
                    where t.ContainerKey == query.ContainerKey   || query.ContainerKey   == null
                    where t.Key          == query.TranslationKey || query.TranslationKey == null
                    select new KeyValuePair<string,string>(t.Key, t.Text)).ToArray();            
        }

        //
        // GET translation/group
        // 
        public IEnumerable<TranslationGroup> GetGroup(TranslationGroupQuery query)
        {
            return (from t in _context.Translation
                    where t.ClientKey    == query.ClientKey      || query.ClientKey       == null
                    where t.ContainerKey == query.ContainerKey   || query.ContainerKey    == null
                    where t.Key          == query.TranslationKey || query.TranslationKey  == null
                    group t by t.Key
                    into grp
                    select new TranslationGroup
                    {
                        Key          = grp.Key,
                        ClientKey    = query.ClientKey,
                        ContainerKey = query.ContainerKey,
                        Items        = grp.ToArray()
                    }).ToArray();
        }

        public IEnumerable<TranslationGroupMeta> GetGroupMeta(TranslationGroupQuery query)
        {
            return (from t in _context.Translation
                    where t.ClientKey    == query.ClientKey      || query.ClientKey      == null
                    where t.ContainerKey == query.ContainerKey   || query.ContainerKey   == null
                    where t.Key          == query.TranslationKey || query.TranslationKey == null
                    group t by t.Key
                    into grp
                    select new TranslationGroupMeta
                    {
                        Key          = grp.Key,
                        ClientKey    = query.ClientKey,
                        ContainerKey = query.ContainerKey,
                        Items        = grp.Select(t => new TranslationGroupMeta.Item 
                        {  
                            LanguageKey= t.LanguageKey, 
                            IsComplete = t.IsComplete
                        }).ToArray()
                    }).ToArray();
        }

        //
        // POST, PUT, DELETE translation
        //
        public IActionResult Create(Translation translation) 
        {   
            _context.Translation.Add(translation);
            _context.SaveChanges();
            return new StatusCodeResult(201);
        }

        public IActionResult CreateArray(IEnumerable<Translation> translationArray) 
        {   
            _context.Translation.AddRange(translationArray);            
            _context.SaveChanges();
            return new StatusCodeResult (201);
        }


        public IActionResult Update(TranslationQuery query, Translation translation) 
        {   
            var _translation = _context.Translation.First(
                t => t.ClientKey    == query.ClientKey    &&
                     t.LanguageKey  == query.LanguageKey  &&
                     t.ContainerKey == query.ContainerKey &&
                     t.Key          == query.TranslationKey);

            if (_translation == null) 
                return new NotFoundResult {};

            _translation.Key        = translation.Key;
            _translation.Text       = translation.Text;
            _translation.IsComplete = translation.IsComplete;
            
            _context.Translation.Update(_translation);
            _context.SaveChanges();
            return new StatusCodeResult(204); 
        }


        public IActionResult UpdateArray(TranslationGroupQuery query, IEnumerable<Translation> translationArray) 
        {   

            foreach (var translation in translationArray) {

                var found = _context.Translation.First(t => t.ClientKey    == translation.ClientKey    &&
                                                            t.LanguageKey  == translation.LanguageKey  &&
                                                            t.ContainerKey == translation.ContainerKey &&
                                                            t.Key          == translation.Key);


                if (found == null) 
                    return new NotFoundResult {};

                found.Key  = translation.Key;
                found.Text = translation.Text;
                found.IsComplete = translation.IsComplete;
                _context.Translation.Update(found);
    
                _context.SaveChanges();            
            }            
            return new StatusCodeResult(204); 
        }

        public IActionResult Delete(TranslationQuery query) 
        {   
            var translation = _context.Translation.First(
                t => t.ClientKey    == query.ClientKey    &&
                     t.LanguageKey  == query.LanguageKey  &&
                     t.ContainerKey == query.ContainerKey &&
                     t.Key          == query.TranslationKey);    
            
            if (translation == null)
                return new NotFoundResult {};

            _context.Translation.Remove(translation);
            _context.SaveChanges();
            return new StatusCodeResult(200); // OK
        }


        public IActionResult DeleteGroup(TranslationGroupQuery query) 
        {   
            var translationGroup = _context.Translation.Where(
                t => t.ClientKey    == query.ClientKey &&
                     t.ContainerKey == query.ContainerKey &&
                     t.Key          == query.TranslationKey);    
            
            if (translationGroup == null)
                return new StatusCodeResult(404); // Notfoundresult

            _context.Translation.RemoveRange(translationGroup);
            _context.SaveChanges();
            return new StatusCodeResult(204);
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