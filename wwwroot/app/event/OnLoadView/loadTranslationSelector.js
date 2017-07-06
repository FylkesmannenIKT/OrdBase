'use strict';

import * as api from '../../library/api.js';
import { loadTemplate, unpackTemplate } from  '../../library/jet-template-unpacker.js';

import { loadTranslationEditor } from './loadTranslationEditor.js';
import { loadClientSelector }    from './loadClientSelector.js';

const viewTemplate = loadTemplate('./app/view/view-translation-selector.html');
const translationCardTemplate = loadTemplate('./app/component/card-translation.html');
const keyIconTemplate = loadTemplate('./app/component/key-and-icon.html');
const containerButtonTemplate = loadTemplate('./app/component/button-container.html');

const fontAwesome_checkIconClass = 'fa-check';
const fontAwesome_crossIconClass = 'fa-times';

//
// @function loadTranslationSelector
//
export function loadTranslationSelector (client) {

    let viewContent = unpackTemplate(viewTemplate, {
        bigHeader : 'Ordbase',
        smallHeader : 'Edit translation',
    });

    // Hook up all buttons
    viewContent.querySelector('#btn-toggle-container-list').onclick   = (event) => loadClientSelector();
    viewContent.querySelector('#btn-back-to-home-page').onclick       = (event) => loadClientSelector();
    viewContent.querySelector('#btn-back-to-client-selector').onclick = (event) => loadClientSelector();
    viewContent.querySelector('#btn-create-new-translation').onclick  = (event) => loadClientSelector();

    api.container.getOnClient(client).then( containers => {

        let containerList = viewContent.querySelector('#list-show-containers-on-client');

        containers.forEach( container => {

            const button = unpackTemplate(containerButtonTemplate, {
                id : `button-${container}`,
                text : container,
                selected : '',
            }).querySelector('button');

            button.onclick = (event) => { event.target.classList.toggle('selected'); }
            containerList.appendChild(button);    
        });

        return api.translation.getGroupOnClient(client);
    })
    //
    // Get all translation groups 
    //  @doc template literals - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
    //
    .then(data => {

        const translationList = viewContent.querySelector('#list-show-translations-on-client');         
        
        data.forEach(translationGroup => {

            const cardContent = unpackTemplate(translationCardTemplate, { translationKey : translationGroup.key });
            const languagesComplete = cardContent.querySelector('.languages-complete');            
    
            Object.keys(translationGroup.isComplete).forEach((_languageKey, isComplete) => {
             
                const keyAndIcon = unpackTemplate(keyIconTemplate, {
                    languageKey : _languageKey,
                    fontawesomeClass : (isComplete ? fontAwesome_checkIconClass : fontAwesome_crossIconClass)
                });
                languagesComplete.appendChild(keyAndIcon);
            });

            // Remove the prototype
            cardContent.querySelector('.btn-load-translation-editor').onclick = (event) => loadTranslationEditor(client, translationGroup.key);             
            translationList.appendChild(cardContent);   
        });
    })
    .catch(reason => console.error('Error:', reason))
    .then(() => {                                  
        // Clear all previous content, insert new view
        document.body.innerHTML = ''; 
        document.body.appendChild(viewContent);
    });
}