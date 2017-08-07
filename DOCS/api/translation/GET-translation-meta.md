# GET - api/translation/meta

Last updated: 04.08.17 by Jonas solsvik

## Request example

**HTTP Method**
```
GET
``` 

**URL**
```url
http://localhost:5000/api/translation/meta/? clientKey=Ordbase
                                           & containerKey=error_messages
                                           & translationKey=error_create_client
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

## Implementation draft - asp.net core mvc 1.1.2


[**TranslationController.cs**](/Controllers/TranslationController.cs)
```cs
[HttpGet("api/translation/meta")]        
[HttpGet("api/translation/group/meta")]
public IEnumerable<TranslationGroupMeta> GetGroupMeta([FromQuery] TranslationGroupQuery query)
{
    return _translationRepo.GetGroupMeta(query);
} 
```

[**TranslationRepository.cs**](/Repositories/TranslationRepository.cs)
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