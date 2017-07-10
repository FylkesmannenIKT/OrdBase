'use strict';

import * as api from '../../library/api.js'; 
import { submitTranslation }            from '../OnSubmitForm/submitTranslation.js';
import { loadSelectTranslation }      from './loadSelectTranslation.js';
import { loadSelectClient }           from './loadSelectClient.js';

//
// @function loadEditTranslation
//
export function loadEditTranslation (client, key) {
    
    let containersOnClient = {};

    const view = unpackTemplate(viewTemplate, {
        bigHeader : 'Ordbase',
        smallHeader : 'Edit translation',
        translationKey : key,
        submitButtonText : 'Save changes',
    });

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

        const containerList = unpackTemplate(containerListTemplate).querySelector('div');

        containersOnClient.forEach( container => {

            const containerButton = unpackTemplate(containerButtonTemplate, {
                id : `button-${container}`,
                text : container,
                selected : (selectedContainer == container ? 'selected' : ''),
            }).querySelector('button');

            containerList.appendChild(containerButton);
        });

        view.querySelector('#list-show-containers-on-translation').appendChild(containerList);
    
        return api.translation.getOnKey(client, key);
    })
    //
    // @AJAX - Call to get a specific translationGroup to build the translation form
    //
    .then(translationGroup => {

        let fieldsetDiv = view.querySelector('#fieldset-one-for-each-language');
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
        document.body.appendChild(view);
    });
}
