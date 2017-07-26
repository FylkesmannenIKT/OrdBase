'use strict'
// 
// @module Ajax
// @file ajax.js
//

// @doc vanilla Ajax XMLHttpRequest -  https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
// @doc Do research on using fetch instead -- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// @doc CORS - https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
// @doc fetch POST request example - https://stackoverflow.com/questions/29775797/fetch-post-json-data


import { mandatory } from './Util.js';

//
// @function getJSON()
//
export function getJSON({ httpMethod = mandatory(), route = mandatory()} = {}) {
    console.log('getJSON:', '\nmethod',httpMethod, '\nroute', route);

    return fetch(route, { 
        method: httpMethod  
    })
    .then((response) => { return response.json(); });
}



export function deleteJSON({httpMethod = mandatory(), route = mandatory()} = {}) {
    console.log('deleteFetch:', '\nroute', route);
    
    return fetch(route, {  method: httpMethod });
}

//
// @function postJSON
//
export function postJSON({ httpMethod = mandatory(), route = mandatory(), data = mandatory()} = {}) {
    console.log('postJSON:', '\nmethod',httpMethod, '\nroute', route, '\ndata', data);
    return fetch(route, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: httpMethod,                 // POST or PUT
        body: JSON.stringify(data),
    });
}
