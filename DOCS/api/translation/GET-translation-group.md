# GET - api/translation/group

Last updated 04.08.17 by Jonas Solsvik

## Request example 

**HTTP Method**
```
GET
```


**URL**
```url
http://localhost:5000/api/translation/group/? clientKey=Ordbase
                                            & languageKey=
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

## Implementation draft - asp.net core mvc 1.1.2

[**TranslationController.cs**](/Controllers/TranslationController.cs)
```cs
[HttpGet("api/translation/group")]
public IEnumerable<TranslationGroup> GetGroup([FromQuery] TranslationGroupQuery query) 
{
    return  _translationRepo.GetGroup(query);
}   
```

[**TranslationRepository.cs**](/Repositories/TranslationRepository.cs)
```cs
public IEnumerable<TranslationGroup> GetGroup(TranslationGroupQuery query)
{
    return (from t in _context.Translation
            where t.ClientKey    == query.ClientKey      || query.ClientKey       == null
            where t.ContainerKey == query.ContainerKey   || query.ContainerKey    == null
            where t.Key          == query.TranslationKey || query.TranslationKey  == null
            group t by t.Key
            into grp
            select new TranslationGroup
            {
                Key          = grp.Key,
                ClientKey    = query.ClientKey,
                ContainerKey = query.ContainerKey,
                Items        = grp.Select(o => new TranslationGroup.Item 
                {
                    LanguageKey = o.LanguageKey,
                    Text  = o.Text,
                    IsComplete = o.IsComplete
                }).ToArray()
            }).ToArray();
}
```