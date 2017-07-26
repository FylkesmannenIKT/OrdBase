'use strict';

// COMPILE WITH BABEL - https://css-tricks.com/transpiling-es6/
// TRanspile with webpack - https://webpack.github.io/docs/tutorials/getting-started/

import { View_Header }      from '../views/header.js'; 
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

// Cache static element references

// @note hack-below I am not proud of the way I am filling in the Header view here.
//        Open for suggestions - JSolsvik 24.07.17
document.getElementById('ordbase-header').appendChild(new View_Header);
export const HEADER         = document.getElementById('ordbase-header').querySelector('view-header');
export const defaultHandler = (event) => console.log('Default handler... nothing happened');

export function switchView(view) {
    MAIN.innerHTML = '';
    MAIN.appendChild(view);
    return view;
}

const MAIN = document.getElementById('ordbase-main');    

window.addEventListener('load', () => {
    loadSelectClient();
});
