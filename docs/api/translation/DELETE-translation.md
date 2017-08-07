# DELETE - api/translation

Last updated: 04.08.17 by Jonas Solsvik


## Request example 

**HTTP Method**
```
DELETE
```

**URL**
```url
http://localhost:5000/api/translation/? clientKey=Ordbase 
                                      & languageKey=en
                                      & containerKey=error_messages 
                                      & translationKey=error_input_email
``` 

**Status response**
```
OK 200
BAD REQUEST: 400
NOT FOUND:   404
```


<br>

## Implementation draft - asp.net core mvc 1.1.2


[**TranslationController.cs**](/Controllers/TranslationController.cs)
```cs
[HttpDelete("api/translation")]
public IActionResult Delete([FromQuery] TranslationQuery query)
{
    if (query == null || query.ClientKey      == null
                      || query.LanguageKey    == null
                      || query.ContainerKey   == null
                      || query.TranslationKey == null)
        return BadRequest();

    return _translationRepo.Delete(query);
}
```

[**TranslationRepository.cs**](/Repositories/TranslationRepository.cs)
```cs
public IActionResult Delete(TranslationQuery query) 
{   
    var translation = _context.Translation.First(
        t => t.ClientKey       == query.ClientKey    &&
                t.LanguageKey  == query.LanguageKey  &&
                t.ContainerKey == query.ContainerKey &&
                t.Key          == query.TranslationKey);    
    
    if (translation == null)
        return new StatusCodeResult(404);

    _context.Translation.Remove(translation);
    _context.SaveChanges();
    return new StatusCodeResult(200); // OK
}

```