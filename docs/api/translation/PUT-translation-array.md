# PUT - api/translation/array

Last updated: 04.08.17 by Jonas Solsvik
@note this should probably be changed to api/translation/group, because of the way it is implemented, see below.

## Request example 

**HTTP Method**
```
PUT
```

**URL**
```url
http://localhost:5000/api/translation/? clientKey=Ordbase
                                      & containerKey=error_messages
                                      & translationKey=error_create_client
``` 

**JSON body**
```json
[
    {
        "clientKey": "Ordbase",
        "languageKey": "en",
        "containerKey": "error_messages",
        "key": "error_create_client",
        "text": "default",
        "isComplete": false
    },
    {
        "clientKey": "Ordbase",
        "languageKey": "no",
        "containerKey": "error_messages",
        "key": "error_create_client",
        "text": "default",
        "isComplete": false
    },
    {
        "clientKey": "Ordbase",
        "languageKey": "sv",
        "containerKey": "error_messages",
        "key": "error_create_client",
        "text": "default",
        "isComplete": false
    },
]
```
**JSON body type**
```
Translation[]
```


**Status response codes**
```cs
NO CONTENT 204
BAD REQUEST 400
NOT FOUND 404
```

<br>

## Implementation draft - asp.net core mvc 1.1.2

[**TranslationController.cs**](/Controllers/TranslationController.cs)
```cs
[HttpPut("api/translation/array")]
public IActionResult UpdateArray([FromQuery] TranslationGroupQuery query, [FromBody] IEnumerable<Translation> translationArray)
{   
    if (query == null || translationArray == null || query.ClientKey     != translationArray.First().ClientKey    ||
                                                    query.ContainerKey   != translationArray.First().ContainerKey ||
                                                    query.TranslationKey != translationArray.First().Key) 
        return BadRequest();
    
    return _translationRepo.UpdateArray(query, translationArray);
}

```

[**TranslationRepository.cs**](/Repositories/TranslationRepository.cs)
```cs
public IActionResult UpdateArray(TranslationGroupQuery query, IEnumerable<Translation> translationArray) 
{   

    foreach (var translation in translationArray) {

        var found = _context.Translation.First(t => t.ClientKey    == translation.ClientKey    &&
                                                    t.LanguageKey  == translation.LanguageKey  &&
                                                    t.ContainerKey == translation.ContainerKey &&
                                                    t.Key          == translation.Key);


        if (found == null) 
            return new StatusCodeResult(404);

        found.Key  = translation.Key;
        found.Text = translation.Text;
        found.IsComplete = translation.IsComplete;
        _context.Translation.Update(found);

        _context.SaveChanges();            
    }            
    return new StatusCodeResult(204); 
}
```