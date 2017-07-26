'use strict';

import { getJSON, postJSON } from './Ajax.js';
import { routeBuilder } from './Util.js';


//
// @doc Destructuring arguments with default values ecma 6 - http://2ality.com/2015/01/es6-destructuring.html
// @doc Async Promises MDN - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
// @doc Arro functions MDN - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//

// @WARNING! @TODO
// @NOTE RESOLVE NAMING CONFLICTS BELOW§!!! client module scope variables, and client parameters...!!!!
// @WARNING!

//
// @modules - to be exported
//
export let client = {};
export let language = {};
export let container = {}; 
export let translation = {};     

//
// CLIENT ROUTES
//
client.getAll = () => {
    return getJSON({ 
        httpMethod: 'GET', 
        route: routeBuilder('api','client', 'all') 
    });
}

client.get = (_client) => {
    return getJSON({ 
        httpMethod: 'GET', 
        route: routeBuilder('api', _client) 
    });
}

client.create = (_client) => {
    return postJSON({ 
        httpMethod:  'POST', 
        route: routeBuilder('api', 'client', 'create'), 
        data:  _client 
    });
} 

client.update = (_client) => {  
    return postJSON({
        httpMethod:  'PUT',
        route: routeBuilder('api', 'client', 'update', _client.key, _client.apiKey, _client.webpageUrl, _client.thumbnailUrl),
        data:  _client, 
    });
}


client.getDefaultContainers = (_client) => {
    return getJSON({ 
        httpMethod:  'GET', 
        route: routeBuilder('api', _client, 'default', 'containers'), 
    });
};

client.getDefaultLanguages  = (_client) => {
    return getJSON({ 
        httpMethod:  'GET', 
        route: routeBuilder('api', _client, 'default', 'languages'), 
    });
};

client.createDefaultContainers = (_client, _containers) => {
    return postJSON({ 
        httpMethod:  'POST', 
        route: routeBuilder('api', _client, 'default', 'containers', 'create'), 
        data:  _containers
    });
};

client.createDefaultLanguages  = (_client, _languages) => {
    return postJSON({ 
        httpMethod:  'POST', 
        route: routeBuilder('api', _client, 'default', 'languages', 'create'), 
        data:  _languages 
    });
};

client.updateDefaultContainers = (_client, _containers) => {
    return postJSON({ 
        httpMethod:  'POST', 
        route: routeBuilder('api', _client, 'default', 'containers', 'update'), 
        data:  _containers
    });
};

client.updateDefaultLanguages  = (_client, _languages) => {
    return postJSON({ 
        httpMethod:  'POST', 
        route: routeBuilder('api', _client, 'default', 'languages', 'update'), 
        data:  _languages 
    });
};


//
// CONTAINER ROUTES
//
container.getOnClient = (_client) => {
    return getJSON({ 
        httpMethod: 'GET', 
        route: routeBuilder('api', _client, 'container') 
    });
}

container.getGroup = (_client, _translationKey) => {
    return getJSON({ 
        httpMethod: 'GET', 
        route: routeBuilder('api', _client, 'container', _translationKey) 
    });
}

//
// LANGUAGE ROUTES
//
language.getGlobal = () => {
    return getJSON({ 
        httpMethod: 'GET', 
        route: routeBuilder('api', 'language') 
    });
}

language.create = (_language) => {
    return postJSON({ 
        httpMethod: 'POST', 
        route: routeBuilder('api', 'language', 'create'), 
        data:  _language 
    });
}

//
// TRANSLATION ROUTES
//
translation.get = (_client, _container, _translationKey, _language) => { 
    return getJSON({ 
        httpMethod: 'GET', 
        route: routeBuilder('api', _client, 'translation', _container, _translationKey, _language) 
    }); 
}

translation.getOnClient = (_client) => {  
    return getJSON({
        httpMethod:  'GET',
        route: routeBuilder('api', _client, 'translation') 
    }); 
}

translation.getGroup = (_client) => {
    return getJSON({
        httpMethod: 'GET',
        route: routeBuilder('api', _client, 'translation', 'group')
    })
}

translation.getOnContainer = (_client, _container) => { 
    return getJSON({
        httpMethod: 'GET',
        route: routeBuilder('api', _client, 'translation', 'container', _container) 
    }); 
}

translation.getOnKey = (_client, _translationKey) => {   // @note - convert translationKey -> key
    return getJSON({
        httpMethod:  'GET',
        route: routeBuilder('api', _client, 'translation', 'translationKey', _translationKey) 
    }); 
}   

translation.create = (_translation) => {
    return postJSON({
        httpMethod:  'POST',
        route: routeBuilder('api', 'translation', 'create'),
        data:  _translation 
    }); 
}

translation.update = (_translation) => {  
    return postJSON({
        httpMethod:  'PUT',
        route: routeBuilder('api', 'translation', 'update', _translation.client, _translation.container, _translation.translationKey, _translation.language),
        data:  _translation 
    });
}

translation.delete = (_client, _container, _translationKey, _language) => {
    return getJSON({
        httpMethod:  'DELETE',
        route: routeBuilder('api', 'translation', 'delete', _client, _container, _translationKey, _language) 
    });
}