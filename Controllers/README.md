# Controller layer
*Last updated: 08.08.17 by J. Solsvik*

The controller layer recieves HTTP requests and converts these requests into function-calls to a coupled Repository. Each controller has a repository. ClientController has a ClientRepository, LangaugeController has a LanguageRepository, and so on..


A controller recieves request through defined routes:
```cs
[HttpGet("api/client")]
public IEnumerable<Client> Get([FromQuery] ClientQuery query)
{
    return _clientRepo.Get(query);
}
```
All the routes defined by all Controllers in the controller layer, together form the [Restful API](../README.md#api-reference) of the Ordbase service.