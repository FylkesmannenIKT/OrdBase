using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using OrdBaseCore.Models;
using OrdBaseCore.IData;

// @doc Better to use where to check for exist only https://github.com/aspnet/EntityFramework/issues/7064

namespace OrdBaseCore.Repositories
{
    public class ClientRepository : IClientData
    {
        private readonly TranslationDb _context;

        public ClientRepository(TranslationDb context) 
        { 
            _context = context; 
        }

        //
        // GET
        // 
        public IEnumerable<Client> Get(string clientKey) 
        {
        	return (from c in _context.Client
        			where c.Key == clientKey
        			select c)
        				.ToArray();
        } 

        public IEnumerable<Client> GetAll() 
        {
        	return _context.Client.ToArray();
        }
        
        public IEnumerable<string> GetDefaultContainers(string clientKey)
        {
            return (from cl in _context.ClientContainer
                    where cl.ClientKey == clientKey
                    select cl.ContainerKey)
                        .ToArray();
        }     

        public IEnumerable<string> GetDefaultLanguages(string clientKey)
        {
            return (from cl in _context.ClientLanguage
                    where cl.ClientKey == clientKey
                    select cl.LanguageKey)
                        .ToArray();
        }
        //
        // CREATE, Update, delete
        //
        public IActionResult Create(Client client)  
        {
            _context.Client.Add(client);
            _context.SaveChanges();
            return new NoContentResult {};
        }

        public IActionResult Update(Client item) 
        {
            // @note Do some research into if there is any better cleaner way to update entry in the database. -JSolsvik 26.07.17
            var client = _context.Client.First(c => c.Key == item.Key);

            if (client == null)
                return new NotFoundResult {};

            client.Key          = item.Key;
            client.ApiKey       = item.ApiKey;
            client.WebpageUrl   = item.WebpageUrl;
            client.ThumbnailUrl = item.ThumbnailUrl;

            _context.Client.Update(client);
            _context.SaveChanges();
            return new NoContentResult {};   
        }

        public IActionResult Delete(string clientKey) 
        {
            var client = _context.Client.First(c => c.Key == clientKey);
            if (client == null)
                return new NotFoundResult {};

            _context.Client.Remove(client);
            _context.SaveChanges();
            return new NoContentResult {};
        }

        public IActionResult CreateDefaultContainers(string clientKey, IEnumerable<string> defaultContainers)
        {

            // @note This could be simplified using AddRange(select blabalbla)

           foreach (var containerKey in defaultContainers) {
                _context.ClientContainer.Add( new ClientContainer 
                {
                    ClientKey = clientKey,
                    ContainerKey = containerKey,
                });
           };

            _context.SaveChanges();
            return new NoContentResult {};
        }
        public IActionResult CreateDefaultLanguages(string clientKey, IEnumerable<string> defaultLanguages)
        {
            foreach (var languageKey in defaultLanguages) {

                _context.ClientLanguage.Add( new ClientLanguage 
                {
                    ClientKey = clientKey,
                    LanguageKey = languageKey,
                });
            };

            _context.SaveChanges();
            return new NoContentResult {};            
        }

        public IActionResult UpdateDefaultContainers(string clientKey, IEnumerable<string> defaultContainers) 
        {
            var newContainers = from dc in defaultContainers
                                select new ClientContainer {
                                    ClientKey = clientKey,
                                    ContainerKey = dc
                                };

            var oldContainers = from cc in _context.ClientContainer
                                where cc.ClientKey == clientKey
                                select cc;

            foreach (var cont in newContainers) 
            {
                if (_context.Container.Where(c => c.Key == cont.ContainerKey).Count() == 0) 
                {
                    _context.Container.Add(new Container { Key = cont.ContainerKey});
                }

                if (oldContainers.Where(oc => oc.ContainerKey == cont.ContainerKey).Count() == 0) 
                {
                    _context.ClientContainer.Add(cont);
                }
            };

            foreach (var cont in oldContainers) 
            {
                if (newContainers.Where(nc => nc.ContainerKey == cont.ContainerKey).Count() == 0) 
                {
                    _context.ClientContainer.Remove(cont);
                } 
            }
            
            _context.SaveChanges();
            return new NoContentResult {};            
        }
        
        public IActionResult UpdateDefaultLanguages(string clientKey, IEnumerable<string> newDefaultLanguages) 
        {
            var newLanguages = from ncl in newDefaultLanguages
                                select new ClientLanguage {
                                    ClientKey = clientKey,
                                    LanguageKey = ncl
                                };        

            var oldLanguages = from cl in _context.ClientLanguage
                               where cl.ClientKey == clientKey
                               select cl;

            foreach (var lang in newLanguages)
            {
                if (!oldLanguages.Contains(lang)) {
                    _context.ClientLanguage.Add(lang);
                }
            };

            foreach (var lang in oldLanguages) 
            {
                if (!newLanguages.Contains(lang)) {
                    _context.ClientLanguage.Remove(lang);
                }
            }

            _context.SaveChanges();
            return new NoContentResult {};            
        }

        //
        // TESTDATA
        //
        public static void AddTestData(TranslationDb context)
        {
            context.Client.AddRange(
                new Client { Key = "FMSF",         ApiKey = "1", ThumbnailUrl = "http://placehold.it/250x125/FFC107", WebpageUrl = "https://fmsf.plaholder.magic"},
                new Client { Key = "DIFI",         ApiKey = "2", ThumbnailUrl = "http://placehold.it/250x125/FFC107", WebpageUrl = "https://difi.plaholder.magic"},
                new Client { Key = "Skatteetaten", ApiKey = "3", ThumbnailUrl = "http://placehold.it/250x125/FFC107", WebpageUrl = "https://skatteetaten.plaholder.magic"}
            );
            context.SaveChanges();
        }
    }
}