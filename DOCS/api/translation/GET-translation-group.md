# GET - api/translation/group

| [__ /api ](../index.md)  | [__ /api/translation/keyvalue](GET-translation-keyvalue.md) -->


## Request example 

**URI parameters** 
```
clientKey: string            length: <= 127     optional
containerKey: string         length: <= 64      optional
translationKey: string       length: <= 127     optional 
``` 

**GET request url**
```url
http://localhost:5000/api/translation/group/?clientKey=Ordbase&languageKey=&containerKey=error_messages
``` 

**JSON Response**
```json
[
    {
        "key": "error_create_client",
        "clientKey": "Ordbase",
        "containerKey": "error_messages",
        "items": [
            {
                "key": "error_create_client",
                "text": "Failed to create client. Client may already exist",
                "isComplete": false
            },
            {
                "key": "error_create_client",
                "text": "Fikk ikke til å lage ny klient. Klienten finnes kanskje fra før?",
                "isComplete": true
            }
        ]
    }
]
```

**Response type**
```cs
    [] TranslationGroup
```

<br>

## Implementation Draft

[**Route.js**](/wwwroot/lib/Route.js)
```javascript
export function translation_getGroup({ clientKey      = '',  
                                       containerKey   = '', 
                                       translationKey = '', } = {}) {

    const queryString = `clientKey=${clientKey}
                         &containerKey=${containerKey}
                         &translationKey=${translationKey}`;

    return Fetch.GET({
        route: `api/translation/group/?${queryString}`,
    })
}
```

[**TranslationController.cs**](/controllers/TranslationController.cs)
```cs
[HttpGet("api/translation")]
public IEnumerable<Translation> Get([FromQuery] TranslationQuery query)
{   
    return _translationRepo.Get(query); 
}
```

[**TranslationRepository.cs**](/repositories/TranslationRepository.cs)
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