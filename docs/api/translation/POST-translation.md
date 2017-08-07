# POST - api/translation/array

Last updated: 04.08.17 by Jonas Solsvik

## Request example 

**HTTP Method**
```
POST
```

**URL**
```url
http://localhost:5000/api/translation
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
CREATED 201
BAD REQUEST 400
```

<br>

## Implementation draft - asp.net core mvc 1.1.2

[**TranslationController.cs**](/Controllers/TranslationController.cs)
```cs
[HttpPost("api/translation")]
public IActionResult Create([FromBody] Translation translation) 
{   
    if (translation == null)
        return  BadRequest();

    return _translationRepo.Create(translation);
} 

```

[**TranslationRepository.cs**](/Repositories/TranslationRepository.cs)
```cs
public IActionResult Create(Translation translation) 
{   
    _context.Translation.Add(translation);
    _context.SaveChanges();
    return new StatusCodeResult(201);
}
```