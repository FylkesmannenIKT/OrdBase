'use strict'
// 
// @module Ajax
// @file ajax.js
//

// @doc Do research on using fetch instead -- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// @doc CORS - https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS


import { mandatory } from './util.js';

//
// @function getJSON()
//
export function getJSON({ type = mandatory(), route = mandatory()} = {}) {
    return new Promise((resolve, reject) => {
        const httpRequest = new XMLHttpRequest();

        httpRequest.open(type, route);  // asynce is default
        httpRequest.onload  = () => resolve(JSON.parse(httpRequest.responseText));
        httpRequest.onerror = () => reject(httpRequest.statusText);
        httpRequest.send();
    });
}

//
// @function getJSON_experiemental()
//
export function getJSON_experimental({ httpMethod = mandatory(), route = mandatory()} = {}) {

    return fetch(route, { 
        method: httpMethod     // GET or DELETE
    })
    .then((response) => { return response.json(); })
    .catch((failure) => { return failure.json();  })
}

//
// @function postJSON 
//
export function postJSON({ type = mandatory(), route = mandatory(), data = mandatory()} = {}) {
    return new Promise((resolve, reject) => {
        const httpRequest = new XMLHttpRequest();

        httpRequest.open(type, route, true);
        httpRequest.setRequestHeader('Content-type', 'application/json');
        httpRequest.onload = () => resolve(httpRequest.responseText);
        httpRequest.onerror = () => reject(httpRequest.statusText);
        httpRequest.send(JSON.stringify(data));
    });
}

// @doc fetch POST request example - https://stackoverflow.com/questions/29775797/fetch-post-json-data
//
// @function postJSON
//
export function postJSON_experimental({ httpMethod = mandatory(), route = mandatory(), data = mandatory()} = {}) {
    return fetch(route, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: httpMethod,                 // POST or PUT
        body: JSON.stringify(data),
    })
    .then((response) => { return response.json(); })
    .catch((failure) => { return failure.json();  })
}