# GET - api/translation/keyvalue

<-- [__ /api/translation/group](GET-translation-group.md) | [__ /api ](../index.md)  | [__ /api/translation/meta](GET-meta.md) -->


## Request example 
**URI parameters**

```
clientKey: string            length: <= 127     optional
languageKey: string          length: <= 8       optional
containerKey: string         length: <= 64      optional
translationKey: string       length: <= 127     optional 
``` 


**GET Request URL**

```url
http://localhost:5000/api/translation/keyvalue/?clientKey=Ordbase&languageKey=&containerKey=error_messages
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

## Implementation Draft

[**Route.js**](/wwwroot/lib/Route.js)
```javascript
export function translation_getKeyValue({ clientKey      = '',  
                                          languageKey    = '',  
                                          containerKey   = '',  
                                          translationKey = '', } = {}) { 

    const queryString = `clientKey=${clientKey}
                         &languageKey=${languageKey}
                         &containerKey=${containerKey}
                         &translationKey=${translationKey}`;

    return Fetch.GET({
        route: `api/translation/group/meta/?${queryString}`,
    })
}
```

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