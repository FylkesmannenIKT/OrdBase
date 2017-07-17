'use strict'
// 
// @module Ajax
// @file ajax.js
//

// @doc Do research on using fetch instead -- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// @doc CORS - https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
// @doc fetch POST request example - https://stackoverflow.com/questions/29775797/fetch-post-json-data


import { mandatory } from './Util.js';

//
// @function getJSON()
//
export function getJSON({ httpMethod = mandatory(), route = mandatory()} = {}) {

    return fetch(route, { 
        method: httpMethod     // GET or DELETE
    })
    .then((response) => { return response.json(); })
}


//
// @function postJSON
//
export function postJSON({ httpMethod = mandatory(), route = mandatory(), data = mandatory()} = {}) {
    return fetch(route, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: httpMethod,                 // POST or PUT
        body: JSON.stringify(data),
    })
    .then((response) => { return response.json(); })
}