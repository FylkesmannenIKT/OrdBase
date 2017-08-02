'use strict';

// COMPILE WITH BABEL - https://css-tricks.com/transpiling-es6/
// TRanspile with webpack - https://webpack.github.io/docs/tutorials/getting-started/

import { Component_Header } from '../components/header.js'; 
import { loadSelectClient } from './loadSelectClient.js';

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


export const COLOR_SUCCESS = 'var(--ordbase-color-success)';
export const COLOR_SELECT  = 'var(--ordbase-color-select)';
export const COLOR_DANGER  = 'var(--ordbase-color-danger)';


export const HTTP_OK = 200;
export const HTTP_CREATED = 201;
export const HTTP_UPDATED = 204;
export const HTTP_NOTFOUND = 404;


const BACKSPACE = 8;
const HOME = 36;

// Cache static element references

// @note hack-below I am not proud of the way I am filling in the Header view here.
//        Open for suggestions - JSolsvik 24.07.17
document.getElementById('ordbase-header').appendChild(new Component_Header);

export const HEADER = document.getElementById('ordbase-header').querySelector('component-header');
export const defaultHandler = (event) => console.log('Default handler... nothing happened');

export function switchView(view) {
    MAIN.innerHTML = '';
    MAIN.appendChild(view);
    return view;
}

export function flashError(text) {
    App.HEADER.flashError(text);
}

const MAIN = document.getElementById('ordbase-main');    

document.addEventListener('keydown', (e) => {
    if (e.keyCode === HOME)    
        loadSelectClient();
})

window.addEventListener('load', () => {
    loadSelectClient();
});
