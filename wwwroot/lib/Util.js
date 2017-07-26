'use strict';

//
// @module Utill
//  @brief small usefull functions which helps reduce repitition.
//

export function mandatory(message = 'Missing parameter') {
    throw new Error(message);
}

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