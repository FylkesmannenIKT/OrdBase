# GET - api/translation/keyvalue

Last updated: 04.08.17 by Jonas Solsvik

## Request example 

**HTTP Method**
```
GET
```

**URL**

```url
http://localhost:5000/api/translation/keyvalue/? clientKey=Ordbase
                                               & languageKey=
                                               &containerKey=error_messages
                                               & translationKey=
``` 


**JSON Response**
```json
[
    {
        "key": "error_create_client",
        "value": "Failed to create client. Client may already exist"
    },
    {
        "key": "error_create_client",
        "value": "Fikk ikke til å lage ny klient. Klienten finnes kanskje fra før?"
    }
]
```

**Response type**
```cs
    [] KeyValuePair<string, string>
```

<br>

## Implementation draft - asp.net core mvc 1.1.2

[**TranslationController.cs**](/Controllers/TranslationController.cs)
```cs
[HttpGet("api/translation/keyvalue")]
public IEnumerable<KeyValuePair<string,string>> GetKeyValue([FromQuery] TranslationQuery query)
{
    return _translationRepo.GetKeyValue(query); 
}
```

[**TranslationRepository.cs**](/Repositories/TranslationRepository.cs)
```cs
public IEnumerable<KeyValuePair<string,string>> GetKeyValue (TranslationQuery query) 
{
    return (from t in _context.Translation
            where t.ClientKey    == query.ClientKey      || query.ClientKey      == null 
            where t.LanguageKey  == query.LanguageKey    || query.LanguageKey    == null
            where t.ContainerKey == query.ContainerKey   || query.ContainerKey   == null
            where t.Key          == query.TranslationKey || query.TranslationKey == null
            select new KeyValuePair<string,string>(t.Key, t.Text)).ToArray();            
}
```