# DELETE - api/translation/group

Last updated: 04.08.17 by Jonas Solsvik


## Request example 

**HTTP Method**
```
DELETE
```

**URL**
```url
http://localhost:5000/api/translation/? clientKey=Ordbase 
                                      & containerKey=error_messages 
                                      & translationKey=error_input_email
``` 

**Status response**
```
OK 200
BAD REQUEST 400
NOT FOUND 404
```


<br>

## Implementation draft - asp.net core mvc 1.1.2


[**TranslationController.cs**](/Controllers/TranslationController.cs)
```cs
[HttpDelete("api/translation/group")]
public IActionResult DeleteGroup([FromQuery] TranslationGroupQuery query)
{
    if (query == null || query.ClientKey      == null
                      || query.ContainerKey   == null
                      || query.TranslationKey == null)
        return BadRequest();

    return _translationRepo.DeleteGroup(query);
}
```

[**TranslationRepository.cs**](/Repositories/TranslationRepository.cs)
```cs
public IActionResult DeleteGroup(TranslationGroupQuery query) 
{   
    var translationGroup = _context.Translation.Where(
        t => t.ClientKey       == query.ClientKey &&
                t.ContainerKey == query.ContainerKey &&
                t.Key          == query.TranslationKey);    
    
    if (translationGroup == null)
        return new StatusCodeResult(404); // Notfoundresult

    _context.Translation.RemoveRange(translationGroup);
    _context.SaveChanges();
    return new StatusCodeResult(200);
}

```