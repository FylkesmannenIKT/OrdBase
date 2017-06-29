//
// @file main.js
//
'use strict'
{
    window.addEventListener('load', () => {

        // 1. Register service worker
        navigator.serviceWorker.register(
            '/service-worker.js', {
                scope: '/api/'
            }
        ).then((registration) => {
            console.log('SW registered SCOPE is: ', registration.scope);
        }), (reason) => {
            console.log('NO Service worker registered..', reason);
        }
    });
};