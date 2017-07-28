'use strict';

import * as Fetch from './Fetch.js';

//
// @doc Destructuring arguments with default values ecma 6 - http://2ality.com/2015/01/es6-destructuring.html
// @doc Async Promises MDN - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
// @doc Arro functions MDN - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//

//
// @function routeBuilder(...args)
// @doc https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
//
export function routeBuilder() {
    let route = '';
    for (let i = 0; i < arguments.length; i++) {
        route += '/' + arguments[i];
    }
    return route;
}

//
// GET client
//
export function client_getAll () {
    return Fetch.GET({  
        route: routeBuilder('api','client', 'all') 
    });
}

export function client_get (clientKey) {
    return Fetch.GET({  
        route: routeBuilder('api', clientKey) 
    });
}

//
// GET client/default
//
export function client_getDefaultContainers (clientKey) {
    return Fetch.GET({ 
        route: routeBuilder('api', clientKey, 'default', 'container', 'all'), 
    });
};

export function client_getDefaultLanguages  (clientKey) {
    return Fetch.GET({ 
        route: routeBuilder('api', clientKey, 'default', 'language', 'all'), 
    });
};

//
// CREATE, UPDATE, DELETE client
//
export function client_create (client) {
    return Fetch.POST({ 
        route: routeBuilder('api', 'client', 'create'), 
        data:  client 
    });
} 

export function client_update (client) {  
    return Fetch.PUT({
        route: routeBuilder('api', 'client', 'update', client.key),
        data:  client, 
    });
}

export function client_delete (clientKey) {
    return Fetch.DELETE({
        route: routeBuilder('api', 'client', 'delete', clientKey)
    });
}

//
// CREATE client/default
//
export function client_createDefaultContainers (clientKey, _containers) {
    return Fetch.POST({ 
        route: routeBuilder('api', clientKey, 'default', 'container', 'create', 'many'), 
        data:  _containers 
    });
};

export function client_createDefaultLanguages  (clientKey, _languages) {
    return Fetch.POST({ 
        route: routeBuilder('api', clientKey, 'default', 'language', 'create', 'many'), 
        data:  _languages 
    });
};

//
// UPDATE client/default
//
export function client_updateDefaultContainers (clientKey, _containers) {
    return Fetch.POST({ 
        route: routeBuilder('api', clientKey, 'default', 'container', 'update', 'many'), 
        data:  _containers
    });
};

export function client_updateDefaultLanguages  (clientKey, _languages) {
    return Fetch.POST({ 
        route: routeBuilder('api', clientKey, 'default', 'language', 'update', 'many'), 
        data:  _languages 
    });
};

//
// GET translation
//
export function translation_get (clientKey, containerKey, translationKey, languageKey) { 
    return Fetch.GET({  
        route: routeBuilder('api', clientKey, 'translation', containerKey, translationKey, languageKey) 
    }); 
}

export function translation_getAll (clientKey) {  
    return Fetch.GET({
        route: routeBuilder('api', clientKey, 'translation', 'all') 
    }); 
}

//
// GET translation/group
//
export function translation_getGroup(clientKey, translationKey) {
    return Fetch.GET({
        route: routeBuilder('api', clientKey, 'translation', 'group', translationKey)
    })
}

export function translation_getGroupAll (clientKey) {
    return Fetch.GET({
        route: routeBuilder('api', clientKey, 'translation', 'group', 'all')
    })
}

export function translation_getGroupMeta(clientKey, translationKey) {
    return Fetch.GET({
        route: routeBuilder('api', clientKey, 'translation', 'group', 'meta', translationKey)
    })
}

export function translation_getGroupMetaOnContainer (clientKey, containerKey) {
    return Fetch.GET({
        route: routeBuilder('api', clientKey, 'translation', 'group', 'meta', 'container', containerKey)
    })
}

export function translation_getGroupMetaAll (clientKey) {
    return Fetch.GET({
        route: routeBuilder('api', clientKey, 'translation', 'group', 'meta', 'all')
    })
}


//
// GET translation/container
//
export function translation_getOnContainer (clientKey, containerKey) { 
    return Fetch.GET({
        route: routeBuilder('api', clientKey, 'translation', 'container', containerKey) 
    }); 
}

export function translation_getOnContainerLanguage(clientKey, containerKey, languageKey) { 
    return Fetch.GET({
        route: routeBuilder('api', clientKey, 'translation', 'container', containerKey, languageKey) 
    }); 
}


//
// GET translation/language
//
export function translation_getOnLanguage(clientKey, languageKey) { 
    return Fetch.GET({
        route: routeBuilder('api', clientKey, 'translation', 'language', languageKey) 
    }); 
}

//
// POST, PUT, DELETE translation
//
export function translation_create (translation) {
    return Fetch.POST({
        route: routeBuilder('api', 'translation', 'create'),
        data:  translation 
    }); 
}


export function translation_createMany (translationArray) {
    return Fetch.POST({
        route: routeBuilder('api', 'translation', 'create', 'many'),
        data:  translationArray 
    }); 
}

export function translation_update (translation) {  
    return Fetch.PUT({
        route: routeBuilder('api', 'translation', 'update', translation.clientKey, translation.containerKey, translation.key, translation.languageKey),
        data:  translation 
    });
}

export function translation_delete(clientKey, containerKey, translationKey, languageKey) {
    return Fetch.DELETE({
        route: routeBuilder('api', 'translation', 'delete', clientKey, containerKey, translationKey, languageKey) 
    });
}

export function translation_deleteGroup(clientKey, containerKey, translationKey) {
    return Fetch.DELETE({
        route: routeBuilder('api', 'translation', 'delete', 'group', clientKey, containerKey, translationKey) 
    });
}


//
// ROUTE container
//
export function container_getGlobal () {
    return Fetch.GET({  
        route: routeBuilder('api', 'container') 
    });
}

//
// ROUTE language
//
export function language_getGlobal () {
    return Fetch.GET({  
        route: routeBuilder('api', 'language') 
    });
}

export function language_create (language) {
    return Fetch.POST({ 
        route: routeBuilder('api', 'language', 'create'), 
        data:  language 
    });
}
