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
            // @doc Why List? here --> https://stackoverflow.com/questions/2113498/sqlexception-from-entity-framework-new-transaction-is-not-allowed-because-ther
            List<ClientContainer> newContainers = (from dc in defaultContainers
                                                    select new ClientContainer {
                                                        ClientKey = clientKey,
                                                        ContainerKey = dc
                                                    })
                                                    .ToList();

            List<ClientContainer> oldContainers = (from cc in _context.ClientContainer
                                                    where cc.ClientKey == clientKey
                                                    select cc)
                                                    .ToList();


            //
            // ADD New containers
            //
            foreach (ClientContainer cont in newContainers) 
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

            //
            // REMOVE Containers that don't exist anymore + all translations with that clientContainer
            //
            foreach (ClientContainer cont in oldContainers) 
            {
                if (newContainers.Where(nc => nc.ContainerKey == cont.ContainerKey).Count() == 0) 
                {
                    IList<Translation> containerTranslations = (from t in _context.Translation
                                                                where t.ClientKey == cont.ClientKey && t.ContainerKey == cont.ContainerKey
                                                                select t)
                                                                .ToList();

                    _context.RemoveRange(containerTranslations);
                    _context.ClientContainer.Remove(cont);     
                } 
            }
            _context.SaveChanges();                           
            
            return new NoContentResult {};            
        }
        
        public IActionResult UpdateDefaultLanguages(string clientKey, IEnumerable<string> newDefaultLanguages) 
        {
            List<ClientLanguage> newLanguages = (from ncl in newDefaultLanguages
                                                select new ClientLanguage {
                                                    ClientKey = clientKey,
                                                    LanguageKey = ncl
                                                })
                                                .ToList();        

            List<ClientLanguage> oldLanguages = (from cl in _context.ClientLanguage
                                                where cl.ClientKey == clientKey
                                                select cl)
                                                .ToList();

            //
            // Add new clientLanguages
            //
            foreach (ClientLanguage lang in newLanguages)
            {
                if (oldLanguages.Where(ol => ol.LanguageKey == lang.LanguageKey).Count() == 0) {
                    _context.ClientLanguage.Add(lang);
                }
            };

            //
            // Remove old clientLanguages + all translations with that clientLanguage 
            //
            foreach (ClientLanguage lang in oldLanguages) 
            {
                if (newLanguages.Where(nl => nl.LanguageKey == lang.LanguageKey).Count() == 0) {

                    List<Translation> languageTranslations = (from t in _context.Translation
                                                              where t.ClientKey == lang.ClientKey && t.LanguageKey == lang.LanguageKey
                                                              select t)
                                                              .ToList();

                    _context.Translation.RemoveRange(languageTranslations);
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