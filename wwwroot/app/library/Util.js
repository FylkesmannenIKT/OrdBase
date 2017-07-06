'use strict';

//
// @module Utill
//  @brief small usefull functions which helps reduce repitition.
//

export function overwriteFromTemplate(target = mandatory(), tag = mandatory()) {
    const template = document.createElement(tag);
    target.innerHTML = '';
    target.appendChild(template);
    
    return template;
}   

export function appendFromTemplate(target = mandatory(), tag = mandatory()) {
    const template = document.createElement(tag);
    target.appendChild(template);
    
    return template;
}

export function mandatory() {
    throw new Error('Missing parameter');
}