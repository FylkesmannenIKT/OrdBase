'use strict';

import { getJSON, postJSON } from './ajax.js';


//
// @doc vanilla Ajax XMLHttpRequest -  https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
// @doc Destructuring arguments with default values ecma 6 - http://2ality.com/2015/01/es6-destructuring.html
// @doc Async Promises MDN - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
// @doc Arro functions MDN - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//

//
// @function routeBuilder(...args)
// @doc https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
//
function routeBuilder() {
    let route = '';
    for (let i = 0; i < arguments.length; i++) {
        route += '/' + arguments[i];
    }
    return route;
}

// @WARNING! @TODO
// @NOTE RESOLVE NAMING CONFLICTS BELOW§!!! client module scope variables, and client parameters...!!!!
// @WARNING!

//
// @modules - to be exported
//
let client = {};
let language = {};
let container = {}; 
let translation = {};     

//
// CLIENT ROUTES
//
client.getAll = () => { 
    return getJSON({ 
        type: 'GET', 
        route: routeBuilder('api','client') 
    });
}

client.get = (client) => {
    return getJSON({ 
        type: 'GET', 
        route: routeBuilder('api', client) 
    });
}

client.create = (client) => {
    return postJSON({ 
        type:  'POST', 
        route: routeBuilder('api', 'client', 'create'), 
        data:  client 
    });
} 

//
// CONTAINER ROUTES
//
container.getOnClient = (client) => {
    return getJSON({ 
        type: 'GET', 
        route: routeBuilder('api', client, 'container') 
    });
}

container.getOnKey = (client, accessKey) => {
    return getJSON({ 
        type: 'GET', 
        route: routeBuilder('api', client, 'container', accessKey) 
    });
}

//
// LANGUAGE ROUTES
//
language.getAll = () => {
    return getJSON({ 
        type: 'GET', 
        route: routeBuilder('api', 'language') 
    });
}

language.getOnClient = (client) => {
    return getJSON({ 
        type: 'GET', 
        route: routeBuilder('api', client, 'language') 
    });
}

language.create = (language) => {
    return postJSON({ 
        type: 'POST', 
        route: routeBuilder('api', 'language', 'create'), 
        data:  language 
    });
}

//
// TRANSLATION ROUTES
//
translation.get = (client, container, accessKey, language) => { 
    return getJSON({ 
        type: 'GET', 
        route: routeBuilder('api', client, 'translation', container, accessKey, language) 
    }); 
}

translation.getOnClient = (client) => {  
    return getJSON({
        type:  'GET',
        route: routeBuilder('api', client, 'translation') 
    }); 
}

translation.getGroupOnClient = (client) => {
    return getJSON({
        type: 'GET',
        route: routeBuilder('api', client, 'translation', 'group')
    })
}

translation.getOnContainer = (client, container) => { 
    return getJSON({
        type: 'GET',
        route: routeBuilder('api', client, 'translation', 'container', container) 
    }); 
}

translation.getOnKey = (client, key) => {   // @note - convert accesskey -> key
    return getJSON({
        type:  'GET',
        route: routeBuilder('api', client, 'translation', 'accesskey', key) 
    }); 
}   

translation.create = (translation) => {
    return postJSON({
        type:  'POST',
        route: routeBuilder('api', 'translation', 'create'),
        data:  translation 
    }); 
}

translation.update = (translation) => {  
    return postJSON({
        type:  'PUT',
        route: routeBuilder('api', 'translation', 'update', translation.client, translation.container, translation.accessKey, translation.language),
        data:  translation 
    });
}

translation.delete = (key) => {
    return getJSON({
        type:  'DELETE',
        route: routeBuilder('api', 'translation', 'delete', client, container, accessKey, language) 
    });
}


export { translation, client, container, language };