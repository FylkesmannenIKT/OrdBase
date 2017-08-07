# GET - api/translation

Last updated: 04.08.17 by Jonas Solsvik

## Request example 

**HTTP Method**
```
GET
```

**URL**
```url
http://localhost:5000/api/translation/? clientKey=Ordbase
                                      & languageKey=en
                                      & containerKey=error_messages
                                      & translationKey=
``` 

**JSON Response**
```json
[
    {
        "clientKey": "Ordbase",
        "languageKey": "en",
        "containerKey": "error_messages",
        "key": "error_create_client",
        "text": "Failed to create client. Client may already exist",
        "isComplete": false
    },
    {
        "clientKey": "Ordbase",
        "languageKey": "no-nb",
        "containerKey": "error_messages",
        "key": "error_create_client",
        "text": "Fikk ikke til å lage ny klient. Klienten finnes kanskje fra før?",
        "isComplete": true
    }
]
```

**Response type**
```cs
    [] Translation
```

<br>

## Implementation draft - asp.net core mvc 1.1.2


[**TranslationController.cs**](/Controllers/TranslationController.cs)
```cs
[HttpGet("api/translation")]
public IEnumerable<Translation> Get([FromQuery] TranslationQuery query)
{   
    return _translationRepo.Get(query); 
}
```

[**TranslationRepository.cs**](/Repositories/TranslationRepository.cs)
```cs
public IEnumerable<Translation> Get(TranslationQuery query)
{
    return (from t in _context.Translation
            where  t.ClientKey    == query.ClientKey      || query.ClientKey      == null           
            where  t.LanguageKey  == query.LanguageKey    || query.LanguageKey    == null       
            where  t.ContainerKey == query.ContainerKey   || query.ContainerKey   == null     
            where  t.Key          == query.TranslationKey || query.TranslationKey == null 
            select t).ToArray();        
}
```