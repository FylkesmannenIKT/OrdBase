using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using OrdBaseCore.Models;
using OrdBaseCore.IData;

namespace OrdBaseCore.Services
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
        public IEnumerable<Client> Get(string name) 
        {
        	return (from c in _context.Client
        			where c.Name == name
        			select c)
        				.ToArray();
        } 

        public IEnumerable<Client> GetAll() 
        {
        	return _context.Client.ToArray();
        }

        //
        // CREATE
        //
        public IActionResult Create(Client client, IEnumerable<string> languageKeys)  
        {
            foreach (var key in languageKeys) {

                //
                // @note Here I am populating the Translation table with some default translations, one for
                //  each language. This is done, so that each time a new Translation is made, it is made with the same number
                //  of languages as this default translation. It can be viewed as a hack so we do not have to keep 
                //  a separate table for this dependency. It trades some complexity from one place to another. 
                //  This also validates that a new client only uses languages that already exists in the dataabse.
                //              - JSolsvik - 03.07.17
                //
                if (_context.Language.Where(lang => lang.Key == key).Count() == 1) {

                    _context.Translation.Add(new Translation {
                        ClientKey = client.Name,
                        LanguageKey = key,
                        Container = "default",
                        Key = "default",
                        Text = "default",
                        IsComplete = true,
                    });
                }
                else {
                    Console.WriteLine("The supplied key: " + key + " could not be found as a valid key in the Languages table. Error: no Client created!!");
                    return new NotFoundResult {};
                }   
            }

            _context.Client.Add(client);
            _context.SaveChanges();
            return new NoContentResult {};
        }

        //
        // TESTDATA
        //
        public static void AddTestData(TranslationDb context)
        {
            context.Client.AddRange(
                new Client { Name = "FMSF",         ApiKey = "1"},
                new Client { Name = "DIFI",         ApiKey = "2"},
                new Client { Name = "Skatteetaten", ApiKey = "3"}
            );
            context.SaveChanges();
        }
    }
}