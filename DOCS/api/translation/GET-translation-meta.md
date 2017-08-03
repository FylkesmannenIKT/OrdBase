# GET - api/translation/meta

<-- [__ /api/translation/keyvalue](GET-translation-keyvalue.md) | [/api](/DOCS/api/index.md)  | [api/translation](GET-translation.md) -->


## Request example

**URI parameters**
```
clientKey: string            length: <= 127     optional
containerKey: string         length: <= 64      optional
translationKey: string       length: <= 127     optional 
``` 

**GET request url**
```url
http://localhost:5000/api/translation/meta/?clientKey=Ordbase&languageKey=&containerKey=error_messages
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
                "languageKey": "en",
                "isComplete": false
            },
            {
                "languageKey": "no-nb",
                "isComplete": true
            }
        ]
    }
]
```



**Response type**
```cs
    [] TranslationGroupMeta
```

<br>

## Implementation Draft

[**Route.js**](/wwwroot/lib/Route.js)
```javascript
export function translation_getGroupMeta({ clientKey      = '',  
                                           containerKey   = '', 
                                           translationKey = '', } = {}) {

    const queryString = `clientKey=${clientKey}
                         &containerKey=${containerKey}
                         &translationKey=${translationKey}`;

    return Fetch.GET({
        route: `api/translation/group/meta/?${queryString}`,
    })
}
```

[**TranslationController.cs**](/controllers/TranslationController.cs)
```cs
[HttpGet("api/translation/meta")]        
[HttpGet("api/translation/group/meta")]
public IEnumerable<TranslationGroupMeta> GetGroupMeta([FromQuery] TranslationGroupQuery query)
{
    return _translationRepo.GetGroupMeta(query);
} 
```

[**TranslationRepository.cs**](/repositories/TranslationRepository.cs)
```cs
public IEnumerable<TranslationGroupMeta> GetGroupMeta(TranslationGroupQuery query)
{
    return (from t in _context.Translation
            where t.ClientKey    == query.ClientKey      || query.ClientKey      == null
            where t.ContainerKey == query.ContainerKey   || query.ContainerKey   == null
            where t.Key          == query.TranslationKey || query.TranslationKey == null
            group t by t.Key
            into grp
            select new TranslationGroupMeta
            {
                Key          = grp.Key,
                ClientKey    = query.ClientKey,
                ContainerKey = query.ContainerKey,
                Items        = grp.Select(t => new TranslationGroupMeta.Item 
                {  
                    LanguageKey= t.LanguageKey, 
                    IsComplete = t.IsComplete
                }).ToArray()
            }).ToArray();
}
```