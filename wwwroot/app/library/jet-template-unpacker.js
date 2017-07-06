'use strict'

// fetch API - https://davidwalsh.name/fetch
// fetch API parse to HTML - http://javascript.tutorialhorizon.com/2016/09/01/parse-html-response-with-fetch-api/
// HTML loader - https://stackoverflow.com/questions/37818401/importing-html-files-with-es6-template-string-loader
// Template databinding - https://www.joezimjs.com/javascript/javascript-templating-adding-html-the-right-way/
// Defining new DOM elements with prototyping - https://www.html5rocks.com/en/tutorials/webcomponents/customelements/
// Custom elements with Classes MDN - https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements/Custom_Elements_with_Classes

//
// @module jet-template-unpacker
// @file   jet-template-unpacker.js
// @created 05.07.17
// @creator Jonas J. Solsvik
// @brief Loads templates into the DOM from <link href='*.html'> files,
//         and unpacks them binding {{ data }} to them from matching properties of a javascript object.
//

export function loadTemplate(path) {

    let content = document.head.querySelector(`link[href="${path}"]`).import.querySelector('template');
    return document.importNode(content, true);
}

export function unpackTemplate(_template, dataBinder = {}) {

    let template = _template.cloneNode(true);
    let text = template.innerHTML;

    if (dataBinder != {}) { 

        for (const property in dataBinder) {
            const regexp = new RegExp('{{\\s*' + property + '\\s*}}', 'ig');
            text = text.replace(regexp, dataBinder[property]);
        }
    }
    template.innerHTML = text;
    return template.content;
}