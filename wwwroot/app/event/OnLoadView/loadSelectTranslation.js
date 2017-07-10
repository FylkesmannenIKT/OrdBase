'use strict';

import * as api from '../../library/api.js';

import { loadEditTranslation } from './loadEditTranslation.js';
import { loadSelectClient }    from './loadSelectClient.js';

//
// @function loadSelectTranslation
//
export function loadSelectTranslation (client) {

    // Create elements
    const translationSelect = document.createElement('ordbase-select-translation');

    // Setup header
    header.textBig          = 'Ordbase';
    header.textSmall        = 'Select Translation';
    header.buttonIconLeft   = ICON_HEADER_BARS;
    header.buttonIconRight1 = ICON_HEADER_ARROW_LEFT;    
    header.buttonIconRight2 = ICON_HEADER_PLUS;

    // Dependency injection
    header.buttonHandlerLeft   = defaultHandler;     
    header.buttonHandlerRight1 = defaultHandler;     
    header.buttonHandlerRight2 = defaultHandler;  
    translationSelect.cardButtonHandler = defaultHandler

    // Batch-update DOM
    main.innerHTML = ''; 
    header.DOMUpdate();
    main.appendChild(selectClient);       

    //
    // @AJAX - fetch all containers on selected client
    //
    api.container.getOnClient(client).then( containersOnClient => {

        const containerList = unpackTemplate(containerListTemplate).querySelector('div');

        containersOnClient.forEach( container => {

            const containerButton = unpackTemplate(containerButtonTemplate, {
                id : `button-${container}`,
                text : container,
                selected : '',
            }).querySelector('button');

            containerButton.onclick = (event) => event.target.classList.toggle('selected'); 
            containerList.appendChild(containerButton);
        });

        view.querySelector('#list-show-containers-on-client').appendChild(containerList);

        return api.translation.getGroupOnClient(client);
    })
    //
    //  @AJAX - Get all translation groups 
    //  @doc template literals - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
    //
    .then(data => {

        const translationList = view.querySelector('#list-show-translations-on-client');         
        
        data.forEach(translationGroup => {

            const cardContent = unpackTemplate(translationCardTemplate, { translationKey : translationGroup.key });
            const languagesComplete = cardContent.querySelector('.languages-complete');            
    
            Object.keys(translationGroup.isComplete).forEach((_languageKey, isComplete) => {
             
                const keyAndIcon = unpackTemplate(keyIconTemplate, {
                    languageKey : _languageKey,
                    fontawesomeClass : (isComplete ? fontAwesome_checkIconClass : fontAwesome_timesIconClass)
                });
                languagesComplete.appendChild(keyAndIcon);
            });

            // Remove the prototype
            cardContent.querySelector('.btn-load-translation-editor').onclick = (event) => loadEditTranslation(client, translationGroup.key);             
            translationList.appendChild(cardContent);   
        });
    })
    .catch(reason => console.error('Error:', reason))
    .then(() => {                                  
        // Clear all previous content, insert new view
        document.body.innerHTML = ''; 
        document.body.appendChild(view);
    });
}