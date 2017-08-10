# Repository layer
*Last updated: 08.08.17 by J. Solsvik*

Each Repository is coupled with a Controller. For instance there is a LangugeController.cs and a LanguageRepository.cs, a ClientControllerand a ClientRepository, and so on...

A given repository is connected to the database through a DbContext object (see definition @ [TranslationDb.cs](../Models/TranslationDb.cs)).
The ASP.NET middleware injects the DbContext into a Controller on each request, which then injects it into it's coupled Repository:
```cs
private readonly TranslationDb _context;
public LanguageRepository(TranslationDb context) 
{ 
    _context = context; 
}

```

The Repository then uses the C# LINQ query-Language, to satisfy a specific request from the Coupled controller
```cs
public IEnumerable<Language> Get(string languageKey)
{
    return (from l in _context.Language
            where l.Key == languageKey || languageKey == null
            select l)
            .ToArray();
}

```