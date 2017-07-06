'use strict';

import * as api from '../../library/api.js'; 
import { loadTemplate, unpackTemplate }                             from '../../library/jet-template-unpacker.js';
import { loadTranslationSelector }                           from './loadTranslationSelector.js';
import { loadClientSelector }                                from './loadClientSelector.js';

const viewTemplate = loadTemplate('./app/view/view-translation-editor.html');
const containerButtonTemplate = loadTemplate('./app/component/button-container.html');
const translationFieldsetTemplate = loadTemplate('./app/component/fieldset-translation.html');

//
// @function loadTranslationEditor
//
export function loadTranslationEditor (client, key) {
    
    let containersOnClient = {};

    const viewContent = unpackTemplate(viewTemplate, {
        bigHeader : 'Ordbase',
        smallHeader : 'Edit translation',
        translationKey : key,
        submitButtonText : 'Save changes',
    });

    viewContent.querySelector('#btn-toggle-container-list').onclick        = (event) => loadTranslationEditor(client);
    viewContent.querySelector('#btn-back-to-home-page').onclick            = (event) => loadClientSelector(client);
    viewContent.querySelector('#btn-back-to-translation-selector').onclick = (event) => loadTranslationSelector(client);    
    viewContent.querySelector('#btn-save-edited-translation').onclick      = (event) => loadTranslationEditor(client);


    //
    // @AJAX - Call to get all containers on a client
    //
    api.container.getOnClient(client).then(_containersOnClient => {

        containersOnClient = _containersOnClient;  
        return api.container.getOnKey(client, key);
    
    })
    //
    // @AJAX - Call to get the container which this translationGroup is connected to
    //
    .then(selectedContainer => {

        let containerList = viewContent.querySelector('#list-show-containers-on-translation');

        containersOnClient.forEach( container => {

            const button = unpackTemplate(containerButtonTemplate, {
                id : `button-${container}`,
                text : container,
                selected : (selectedContainer == container ? 'selected' : ''),
            }).querySelector('button');

            button.onclick = (event) => event.target.classList.toggle('selected'); 
            containerList.appendChild(button);
        });

        return api.translation.getOnKey(client, key);
    })
    //
    // @AJAX - Call to get a specific translationGroup to build the translation form
    //
    .then(translationGroup => {

        let fieldsetDiv = viewContent.querySelector('#fieldset-one-for-each-language');
        translationGroup.forEach( translation => {

            console.log(translation);
            const translationFieldset = unpackTemplate( translationFieldsetTemplate, {
                languageCode : translation.languageKey,
                inputId : `input-${translation.languageCode}`,
                inputValue : translation.text,
            });

            translationFieldset.querySelector('[type="checkbox"]').checked = translation.isComplete;
            fieldsetDiv.appendChild(translationFieldset);
        });
    })
    .catch(reason => console.error('Error:', reason))
    .then(() => {                                  
        // Clear all previous content, insert new view
        document.body.innerHTML = ''; 
        document.body.appendChild(viewContent);
    });
}
