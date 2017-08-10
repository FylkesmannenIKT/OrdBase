'use strict';

let html = document.querySelector('html');
let containerPromise;
let languageChangeObserver = null;

export function async_loadContainer(clientKey, containeKey) {
    let languageKey = html.getAttribute('lang');

    let url = `api/translation/keyvalue/?clientKey=${clientKey}&languageKey=${languageKey}&containeKey=${containeKey}`;
    console.log(url);

    containerPromise = fetch(url, { method: 'GET' })
                       .then(container => { return container.json(); })
                       .catch(error    => { console.error(`Container not found: ${error}`); });    
    console.log(containerPromise)                   
}

export function OnLanguageChange(handler) {
    
    if (languageChangeObserver)
        languageChangeObserver.disconnect();
    // create an observer instance
    languageChangeObserver = new MutationObserver(function(mutations) {
        let mutation = mutations.find(mutation => { return mutation.type == 'attributes'} );
        if (mutation) {
            handler(mutation.target.attributes['lang']);
        }
    });        
    languageChangeObserver.observe(html, { attributes: true });
}

export function translate(translationKey, success) {
    console.log('lang: ', html.getAttribute('lang')); 
    containerPromise.then(keyvalueArray => {
        let text = keyvalueArray.find(keyvalue => { return keyvalue.key == translationKey }).value;
        success(text);
    })
    .catch(error => { 
        let text = 'not found'; 
        success(text);
        console.error(`Translation not found: ${error}`);
    })
}

// 
// @note This problem here is a good candidate for using varargs. I have yet the proper way of doing this in javascript - JSolsvik 10.08.17
//
export function translate2(translationKey1, translationKey2, success) {

    containerPromise.then(keyvalueArray => {
        let text1 = keyvalueArray.find(keyvalue => { return keyvalue.key == translationKey1 }).value;
        let text2 = keyvalueArray.find(keyvalue => { return keyvalue.key == translationKey2 }).value;
        success(text1, text2);
    })
    .catch(error => { 
        let text = 'not found'; 
        success(text, text);
        console.error(`Translation not found: ${error}`);
    })
}

