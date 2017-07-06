'use strict';

import { OnLoadView_ClientSelector } from './app/event/OnLoadView_ClientSelector.js';

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

    OnLoadView_ClientSelector();
});
