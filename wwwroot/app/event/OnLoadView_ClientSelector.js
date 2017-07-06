'use strict';

import { loadTemplate, unpackTemplate }   from '../library/jet-template-unpacker.js';
import { client as apiClient }            from '../library/api.js';
import { OnLoadView_TranslationSelector } from './OnLoadView_TranslationSelector.js';
import { OnLoadView_ClientEditor }        from './OnLoadView_ClientEditor.js';

const viewTemplate = loadTemplate('./app/view/view-client-selector.html');
const cardTemplate = loadTemplate('./app/component/card-client.html');

//
// @function OnLoadViewClientSelector
//
export function OnLoadView_ClientSelector() {
    
    const viewContent = unpackTemplate(viewTemplate, {
        bigHeader : 'Ordbase',
        smallHeader : 'Select client',
    });

    // Hook up all buttons
    viewContent.querySelector('#btn-toggle-inactive-menu').addEventListener('click', event => OnLoadView_ClientSelector());
    viewContent.querySelector('#btn-back-to-home-page').addEventListener('click', event => OnLoadView_ClientSelector());
    viewContent.querySelector('#btn-create-new-client').addEventListener('click', event => OnLoadView_ClientEditor('fmsf'));
   
   // Clear all content, insert new view
    document.body.innerHTML = ''; 
    document.body.appendChild(viewContent);

    // Get Client data
    apiClient.getAll().then(clientCollection => {

        // Loop through all clients and generate cards for each of thems
        

        const main = document.querySelector('main');

        clientCollection.forEach((client, index) => {
            const cardData = {
                id:         `card${index}`,
                name:       client.name,
                website:    'https://www.placeholder.no',
                thumbnail : 'http://placehold.it/250x125/FFC107', 
            };

            const cardContent = unpackTemplate(cardTemplate, cardData);

            cardContent.querySelector('button').addEventListener('click', event => OnLoadView_TranslationSelector(client.name));            
            main.appendChild(cardContent);            
        });      
    }).catch(reason => console.error('Error:', reason));

}
