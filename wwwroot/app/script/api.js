'use strict';

let API = (() => {

    //
    // @doc vanilla Ajax XMLHttpRequest -  https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
    // @doc Destructuring arguments with default values ecma 6 - http://2ality.com/2015/01/es6-destructuring.html
    // @doc Async Promises MDN - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
    // @doc Arro functions MDN - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    //
    function mandatory() {
        throw new Error('Missing parameter');
    }

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

    //
    // @function URIRequest()
    //
    function URIRequest({ type = mandatory(), route = mandatory()} = {}) {
        return new Promise((resolve, reject) => {
            const httpRequest = new XMLHttpRequest();

            httpRequest.open(type, route);  // asynce is default
            httpRequest.onload  = () => resolve(JSON.parse(httpRequest.responseText));
            httpRequest.onerror = () => reject(httpRequest.statusText);
            httpRequest.send();
        });
    }

    //
    // @function JSONRequest 
    //
    function JSONRequest({ type = mandatory(), route = mandatory(), data = mandatory()} = {}) {
        return new Promise((resolve, reject) => {
            const httpRequest = new XMLHttpRequest();

            httpRequest.open(type, route, true);
            httpRequest.setRequestHeader('Content-type', 'application/json');
            httpRequest.onload = () => resolve(httpRequest.responseText);
            httpRequest.onerror = () => reject(httpRequest.statusText);
            httpRequest.send(JSON.stringify(data));
        });
    }

    //
    // @module api - to be exported
    //
    let API = { client: {}, language: {}, container: {}, translation: {}};     // @adivce ES6 - adobt using let and const, stop using var

    //
    // CLIENT ROUTES
    //
    API.client.getAll = () => { 
        return URIRequest({ 
            type: 'GET', 
            route: routeBuilder('api','client') 
        });
    }

    API.client.get = (client) => {
        return URIRequest({ 
            type: 'GET', 
            route: routeBuilder('api', client) 
        });
    }

    API.client.create = (client) => {
        return JSONRequest({ 
            type:  'POST', 
            route: routeBuilder('api', 'client', 'create'), 
            data:  client 
        });
    } 

    //
    // CONTAINER ROUTES
    //
    API.container.getOnClient = (client) => {
        return URIRequest({ 
            type: 'GET', 
            route: routeBuilder('api', client, 'container') 
        });
    }

    API.container.getOnKey = (client, accessKey) => {
        return URIRequest({ 
            type: 'GET', 
            route: routeBuilder('api', client, 'container', accessKey) 
        });
    }
    
    //
    // LANGUAGE ROUTES
    //
    API.language.getAll = () => {
        return URIRequest({ 
            type: 'GET', 
            route: routeBuilder('api', 'language') 
        });
    }

    API.language.getOnClient = (client) => {
        return URIRequest({ 
            type: 'GET', 
            route: routeBuilder('api', client, 'language') 
        });
    }

    API.language.create = (language) => {
        return JSONRequest({ 
            type: 'POST', 
            route: routeBuilder('api', 'language', 'create'), 
            data:  language 
        });
    }

    //
    // TRANSLATION ROUTES
    //
    API.translation.get = (client, container, accessKey, language) => { 
        return URIRequest({ 
            type: 'GET', 
            route: routeBuilder('api', client, 'translation', container, accessKey, language) 
        }); 
    }

    API.translation.getOnClient = (client) => {  
        return URIRequest({
            type:  'GET',
            route: routeBuilder('api', client, 'translation') 
        }); 
    }

    API.translation.getGroupOnClient = (client) => {
        return URIRequest({
            type: 'GET',
            route: routeBuilder('api', client, 'translation', 'group')
        })
    }

    API.translation.getOnContainer = (client, container) => { 
        return URIRequest({
            type: 'GET',
            route: routeBuilder('api', client, 'translation', 'container', container) 
        }); 
    }
    
    API.translation.getOnKey = (client, key) => {   // @note - convert accesskey -> key
        return URIRequest({
            type:  'GET',
            route: routeBuilder('api', client, 'translation', 'accesskey', key) 
        }); 
    }   

    API.translation.create = (translation) => {
        return JSONRequest({
            type:  'POST',
            route: routeBuilder('api', 'translation', 'create'),
            data:  translation 
        }); 
    }

    API.translation.update = (translation) => {  
        return JSONRequest({
            type:  'PUT',
            route: routeBuilder('api', 'translation', 'update', translation.client, translation.container, translation.accessKey, translation.language),
            data:  translation 
        });
    }

    API.translation.delete = (key) => {
        return URIRequest({
            type:  'DELETE',
            route: routeBuilder('api', 'translation', 'delete', client, container, accessKey, language) 
        });
    }

    return API;
})();