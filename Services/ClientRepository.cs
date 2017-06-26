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
        public IActionResult Create(Client client) 
        {
            _context.Client.Add(client);
            _context.SaveChanges();
            return new NoContentResult{};
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