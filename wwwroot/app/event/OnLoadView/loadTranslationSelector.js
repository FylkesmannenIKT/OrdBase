'use strict';

import * as api from '../../library/api.js';

import { loadTranslationEditor } from './loadTranslationEditor.js';
import { loadClientSelector }    from './loadClientSelector.js';
import { loadTemplate, loadTemplateDoc, unpackTemplate } from  '../../library/jet-template-unpacker.js';

const viewTemplate            = loadTemplateDoc('./app/view/view-translation-selector.html');
const translationCardTemplate = loadTemplate('#template-card-translation', viewTemplate);
const keyIconTemplate         = loadTemplate('#template-key-and-icon', translationCardTemplate);

const containerListTemplate   = loadTemplateDoc('./app/component/list-container.html');
const containerButtonTemplate = loadTemplate('#template-button-container', containerListTemplate);

const fontAwesome_checkIconClass = 'fa-check';
const fontAwesome_timesIconClass = 'fa-times';

//
// @function loadTranslationSelector
//
export function loadTranslationSelector (client) {

    let view = unpackTemplate(viewTemplate, {
        bigHeader : 'Ordbase',
        smallHeader : 'Edit translation',
    });

    // Hook up all buttons
    view.querySelector('#btn-toggle-container-list').addEventListener(  'click', (event) => loadClientSelector());
    view.querySelector('#btn-back-to-home-page').addEventListener(      'click', (event) => loadClientSelector());
    view.querySelector('#btn-back-to-client-selector').addEventListener('click', (event) => loadClientSelector());
    view.querySelector('#btn-create-new-translation').addEventListener( 'click', (event) => loadClientSelector());

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
            cardContent.querySelector('.btn-load-translation-editor').onclick = (event) => loadTranslationEditor(client, translationGroup.key);             
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