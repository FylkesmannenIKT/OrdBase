# PUT - api/translation

Last updated: 04.08.17 by Jonas Solsvik

## Request example 

**HTTP Method**
```
PUT
```

**URL**
```url
http://localhost:5000/api/translation/? clientKey=Ordbase
                                      & languageKey=en
                                      & containerKey=error_messages
                                      & translationKey=error_create_client
``` 

**JSON body**
```json
{
    "clientKey": "Ordbase",
    "languageKey": "en",
    "containerKey": "error_messages",
    "key": "error_create_client",
    "text": "default",
    "isComplete": false
}
```
**JSON body type**
```
Translation
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
public IActionResult Update([FromQuery] TranslationQuery query, [FromBody] Translation translation)
{   
    if (query == null || translation == null || query.ClientKey      != translation.ClientKey    ||
                                                query.LanguageKey    != translation.LanguageKey  ||
                                                query.ContainerKey   != translation.ContainerKey ||
                                                query.TranslationKey != translation.Key) 
        return BadRequest();
    
    return _translationRepo.Update(query, translation);
}

```

[**TranslationRepository.cs**](/Repositories/TranslationRepository.cs)
```cs
public IActionResult Update(TranslationQuery query, Translation translation) 
{   
    var _translation = _context.Translation.First(
        t => t.ClientKey    == query.ClientKey    &&
                t.LanguageKey  == query.LanguageKey  &&
                t.ContainerKey == query.ContainerKey &&
                t.Key          == query.TranslationKey);

    if (_translation == null) 
        return new StatusCodeResult(404);

    _translation.Key        = translation.Key;
    _translation.Text       = translation.Text;
    _translation.IsComplete = translation.IsComplete;
    
    _context.Translation.Update(_translation);
    _context.SaveChanges();
    return new StatusCodeResult(204); 
}
```