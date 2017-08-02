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
        public IEnumerable<Client> Get(ClientQuery query) 
        {
        	return (from c in _context.Client
        			where c.Key == query.ClientKey || query.ClientKey == null
        			select c)
        			.ToArray();
        } 

        public IEnumerable<string> GetContainers(ClientQuery query)
        {
            return (from cl in _context.ClientContainer
                    where cl.ClientKey == query.ClientKey || query.ClientKey == null
                    select cl.ContainerKey)
                    .ToArray();
        }     

        public IEnumerable<string> GetLanguages(ClientQuery query) 
        {
            return (from cl in _context.ClientLanguage
                    where cl.ClientKey == query.ClientKey || query.ClientKey == null
                    select cl.LanguageKey)
                    .ToArray();
        }

        //
        // CREATE, Update, delete
        //
        
        public IActionResult Create(Client client)  
        {   
            //
            // @todo Adding a client which already exists with the same key, apikey, will throw a 
            //       server 500 error here. This could be handled by the front-end but, it would also be nice
            //       if the back-end failed in a more gracefull manner, giving a better feedback on what 
            //       went wrong - JSolsvik
            //
            _context.Client.Add(client);
            _context.SaveChanges();
            return new StatusCodeResult(201);
        }

        public IActionResult Update(ClientQuery query, Client client) 
        {
            // @note Do some research into if there is any better cleaner way to update entry in the database. -JSolsvik 26.07.17
            var _client = _context.Client.First(c => c.Key == query.ClientKey);

            if (_client == null)
                return new StatusCodeResult(404);

            _client.Key          = client.Key;
            _client.ApiKey       = client.ApiKey;
            _client.WebpageUrl   = client.WebpageUrl;
            _client.ThumbnailUrl = client.ThumbnailUrl;

            _context.Client.Update(_client);
            _context.SaveChanges();
            return new StatusCodeResult(204);
        }

        public IActionResult Delete(ClientQuery query) 
        {
            var client = _context.Client.First(c => c.Key == query.ClientKey);
            
            if (client == null)
                return new StatusCodeResult(404);

            _context.Client.Remove(client);
            _context.SaveChanges();
            return new StatusCodeResult(200);
        }

        //
        // SET containers and langugaes on client
        //
        public IActionResult SetContainers(ClientQuery query, IEnumerable<string> containerArray)
        {
            var _clientContainers = _context.ClientContainer.Where(cc => cc.ClientKey == query.ClientKey);
            _context.RemoveRange(_clientContainers);
            _context.SaveChanges();

            var clientContainers = containerArray.Select(containerKey => new ClientContainer 
            { 
                ClientKey = query.ClientKey, 
                ContainerKey = containerKey,
            });

            //
            // @todo Here we make sure that a container has to exist in the Container table, before it can be used as a 
            //      foreign key in the ClientContainer table. The SetLanguage method should probably also check this,
            //      but I am currently relying upon the front-end to make sure that only valid languages
            //      are set as new languages. This will throw an 500 error if  a 
            //      lanaguage or container does not already exists. - JSolsvik 01.08.17
            //
            foreach(var cc in clientContainers) {

                if (_context.Container.Where(c => c.Key == cc.ContainerKey).Count() == 0){
                    _context.Container.Add(new Container { Key = cc.ContainerKey});
                }
            }

            _context.AddRange(clientContainers);
            _context.SaveChanges();

            return new StatusCodeResult(201);
        }
        public IActionResult SetLanguages(ClientQuery query, IEnumerable<string> languageArray)
        {
            var _clientLanguages = _context.ClientLanguage.Where(cl => cl.ClientKey == query.ClientKey);
            _context.RemoveRange(_clientLanguages);
            _context.SaveChanges();

            var clientLanguages = languageArray.Select(languageKey => new ClientLanguage 
            { 
                ClientKey   = query.ClientKey, 
                LanguageKey = languageKey,
            });

            _context.AddRange(clientLanguages);
            _context.SaveChanges();

            return new StatusCodeResult(201);            
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