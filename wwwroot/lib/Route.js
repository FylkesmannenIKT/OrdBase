'use strict';

import { force }  from './Util.js';
import * as Fetch from './Fetch.js';

//
// @doc Destructuring arguments with default values ecma 6 - http://2ality.com/2015/01/es6-destructuring.html
// @doc Async Promises MDN - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
// @doc Arro functions MDN - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//

const API = 'api';

//
// ROUTE client
//
export function clients_get({ clientKey = 'null' }) {

    return Fetch.GET({  
        route: `${API}/clients/${clientKey}`, 
    });
}

export function clients_create({ client = force('client') }) {

    return Fetch.POST({ 
        route: `${API}/clients`, 
        data:  client 
    });
} 

export function clients_update({ client = force('client') }) {  

    return Fetch.PUT({
        route: `${API}/clients/${client.key}`,
        data:  client, 
    });
}

export function clients_delete({ clientKey = force('clientKey'), }) {

    return Fetch.DELETE({
        route: `${API}/clients/${clientKey}`,
    });
}

//
// GET, CREATE, UPDATE {client}/container
//
export function clients_getContainers({ clientKey = force('clientKey') }) {

    return Fetch.GET({ 
        route: `${API}/clients/${clientKey}/containers`, 
    });
};

export function clients_setContainers({ clientKey      = force('clientKey'),  
                                        containerArray = force('containerArray') }) {

    return Fetch.POST({ 
        route: `${API}/clients/${clientKey}/containers`, 
        data:  containerArray,
    });
};



//
// GET, CREATE, UPDATE {client}/language
//
export function clients_getLanguages({ clientKey = force('clientKey') }) {

    return Fetch.GET({ 
        route: `${API}/clients/${clientKey}/languages`, 
    });
};

export function clients_setLanguages({ clientKey     = force('clientKey'),  
                                       languageArray = force('languageArray') }) {
    return Fetch.POST({ 
        route: `${API}/clients/${clientKey}/languages`, 
        data:  languageArray,
    });
};


//
// GET translation
//
export function translations_get({ clientKey      = 'null',  
                                   languageKey    = 'null',  
                                   containerKey   = 'null',  
                                   translationKey = 'null', }) { 

    return Fetch.GET({  
        route: `${API}/translations/${clientKey}/${languageKey}/${containerKey}/${translationKey}`,
    }); 
}


export function translations_getGroup({ clientKey      = 'null',  
                                        containerKey   = 'null', 
                                        translationKey = 'null', }) {

    return Fetch.GET({
        route: `${API}/translations/${clientKey}/null/${containerKey}/${translationKey}/group`,
    })
}

export function translations_getGroupMeta({ clientKey      = 'null',  
                                            containerKey   = 'null', 
                                            translationKey = 'null', }) {

    return Fetch.GET({
        route: `${API}/translations/${clientKey}/null/${containerKey}/${translationKey}/group/meta`,
    })
}

//
// POST, PUT, DELETE translation
//
export function translations_create({ translation = force('translation') }) {

    return Fetch.POST({
        route: `${API}/translations`,
        data:  translation 
    }); 
}


export function translations_createArray({ translationArray = force('translationArray') }) {

    return Fetch.POST({
        route: `${API}/translations/array`,
        data:  translationArray 
    }); 
}

export function translations_update({ translation = force('translation') }) {  

    return Fetch.PUT({
        route: `${API}/translations/${translation.clientKey}/${translation.languageKey}/${translation.containerKey}/${translation.key}`,       
        data:  translation 
    });
}

export function translations_delete({ clientKey      = force('clientKey'),  
                                      languageKey    = force('languageKey'),  
                                      containerKey   = force('containerKey'),  
                                      translationKey = force('translationKey'), }) {

    return Fetch.DELETE({
        route: `${API}/translations/${clientKey}/${languageKey}/${containerKey}/${translationKey}`, 
    });
}

export function translations_deleteGroup({ clientKey      = force('clientKey'),  
                                           containerKey   = force('containerKey'),  
                                           translationKey = force('translationKey'), }) {

    return Fetch.DELETE({
        route: `${API}/translations/${clientKey}/null/${containerKey}/${translationKey}`, 
    });
}


//
// ROUTE container
//
export function containers_get() {
    return Fetch.GET({  
        route: '${API}/container',
    });
}

//
// ROUTE language
//
export function languages_get () {
    return Fetch.GET({  
        route: '${API}/language',
    });
}

export function languages_create ({ language = force('language') }) {
    return Fetch.POST({ 
        route: '${API}/language/create', 
        data:  language 
    });
}
