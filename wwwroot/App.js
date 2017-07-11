'use strict';

// COMPILE WITH BABEL - https://css-tricks.com/transpiling-es6/
// TRanspile with webpack - https://webpack.github.io/docs/tutorials/getting-started/

import { loadSelectClient } from './app/event/OnLoadView/loadSelectClient.js';

//
// @file main.js
// @doc 2017 es16 modules native in browsers https://jakearchibald.com/2017/es-modules-in-browsers/
//


// Cache static element references
export const main         = document.getElementById('ordbase-main');    
export const header         = document.getElementById('ordbase-header');
export const defaultHandler = (event) => console.log('Default handler... nothing happened');


window.addEventListener('load', () => {
    loadSelectClient();
});