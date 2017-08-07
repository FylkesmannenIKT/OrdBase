'use strict';

// COMPILE WITH BABEL - https://css-tricks.com/transpiling-es6/
// TRanspile with webpack - https://webpack.github.io/docs/tutorials/getting-started/

import { load_selectClient } from './selectClient.js';

//
// @file main.js
// @doc 2017 es16 modules native in browsers https://jakearchibald.com/2017/es-modules-in-browsers/
//
export const ICON_NONE       = '';
export const ICON_PLUS       = 'fa-plus';
export const ICON_BARS       = 'fa-bars';
export const ICON_SQUARE     = 'fa-square';
export const ICON_ARROW_LEFT = 'fa-arrow-left';
export const ICON_TIMES      = 'fa-times';
export const ICON_CHECK      = 'fa-check';
export const ICON_PENCIL     = 'fa-pencil';
export const ICON_TRASH      = 'fa-trash';


// HTTP codes
export const HTTP_OK       = 200;
export const HTTP_CREATED  = 201;
export const HTTP_UPDATED  = 204;
export const HTTP_NOTFOUND = 404;

// keycodes
const KEY_BACKSPACE = 8;
const KEY_HOME = 36;

// Cache static element references
const MAIN   = document.getElementById('ordbase-main');    
const HEADER = document.getElementById('ordbase-header');


export function setHeader(header){
    HEADER.innerHTML = ''; // Clear existing header
    HEADER.appendChild(header);
}

export function switchView(view) {
    MAIN.innerHTML = '';
    MAIN.appendChild(view);
    return view;
}

export function flashError(error) {
    HEADER.firstChild.flashMessage(error);
}

document.addEventListener('keydown', (e) => {
    if (e.keyCode === KEY_HOME)    
        load_selectClient();
})

window.addEventListener('load', () => {
    load_selectClient();
});
