'use strict';

import * as api from '../../library/api.js';
import { loadTranslationSelector } from './loadTranslationSelector.js';
import { loadClientEditor }        from './loadClientEditor.js';
import { loadTemplate, loadTemplateDoc, unpackTemplate } from  '../../library/jet-template-unpacker.js';


const viewTemplate = loadTemplateDoc('./app/view/view-client-selector.html');
const cardTemplate = loadTemplateDoc('./app/component/card-client.html');

//
// @function OnloadViewClientSelector
//
export function loadClientSelector() {
    
    const view = unpackTemplate(viewTemplate, {
        bigHeader : 'Ordbase',
        smallHeader : 'Select client',
    });

    // Hook up all buttons
    view.querySelector('#btn-toggle-inactive-menu').addEventListener('click', event => loadClientSelector());
    view.querySelector('#btn-back-to-home-page').addEventListener('click', event => loadClientSelector());
    view.querySelector('#btn-create-new-client').addEventListener('click', event => loadClientEditor('new'));

    // Get Client data
    api.client.getAll().then(clientCollection => {

        // Loop through all clients and generate cards for each of thems
        const main = view.querySelector('main');

        clientCollection.forEach((client, index) => {
    
            const cardContent = unpackTemplate(cardTemplate, {
                id:         `card${index}`,
                name:       client.name,
                website:    'https://www.placeholder.no',
                thumbnail : 'http://placehold.it/250x125/FFC107', 
            });

            cardContent.querySelector('button').addEventListener('click', event => loadTranslationSelector(client.name));            
            main.appendChild(cardContent);            
        });      
    })
    .catch(reason => console.error('Error:', reason))
    .then(() => {                                  
        // Clear all previous content, insert new view
        document.body.innerHTML = ''; 
        document.body.appendChild(view);
    });
}
