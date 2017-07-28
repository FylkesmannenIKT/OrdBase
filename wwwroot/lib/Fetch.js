'use strict'
// 
// @module Ajax
// @file ajax.js
//

// @doc vanilla Ajax XMLHttpRequest -  https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
// @doc Do research on using fetch instead -- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// @doc CORS - https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
// @doc fetch POST request example - https://stackoverflow.com/questions/29775797/fetch-post-json-data


import { force } from './Util.js';

//
// @function GET
//
export function GET({ route = force() } = force()) {

    return fetch(route, { method: 'GET' }).then((res) => { 

        let resjson = res.json();
        console.log('fetch.GET:','\nroute', route, '\ndata', resjson);

        return resjson; 
    });
}

//
// @function DELETE
//
export function DELETE({ route = force()} = force()) {
    
    console.log('fetch.DELETE:', '\nroute', route);

    return fetch(route, { method: 'DELETE' });
}

//
// @function PUT
//
export function PUT({ route = force(), data = force()} = force()) {
    console.log('fetch.PUT:', '\nroute', route, '\ndata', data);

    return fetch(route, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PUT',                 // POST or PUT
        body: JSON.stringify(data),
    });
}

//
// @function POST
//
export function POST({ route = force(), data = force()} = force()) {
    console.log('fetch.POST:', '\nroute', route, '\ndata', data);
    return fetch(route, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',                 // POST or PUT
        body: JSON.stringify(data),
    });
}
