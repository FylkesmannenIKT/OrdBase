'use strict';

// COMPILE WITH BABEL - https://css-tricks.com/transpiling-es6/
// TRanspile with webpack - https://webpack.github.io/docs/tutorials/getting-started/

import "./node_modules/babel-polyfill/dist/polyfill.min.js";
import { loadClientSelector } from './app/event/OnLoadView/loadClientSelector.js';

//
// @file main.js
// @doc 2017 es16 modules native in browsers https://jakearchibald.com/2017/es-modules-in-browsers/
//

window.addEventListener('load', () => {

    // 1. Register service worker
    navigator.serviceWorker.register('./service-worker.js', {
            scope: '/api/'
    }).then((registration) => {
        console.log('SW registered SCOPE is: ', registration.scope);
    }), (reason) => {
        console.log('NO Service worker registered..', reason);
    }

    loadClientSelector();
});
