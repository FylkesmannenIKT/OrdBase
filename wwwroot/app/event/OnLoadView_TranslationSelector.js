'use strict';


import { loadTemplate, unpackTemplate } from '../library/jet-template-unpacker.js';
import { container   as containerApi, 
         translation as translationApi } from '../library/api.js'; 

import { OnLoadView_TranslationEditor } from '../event/OnLoadView_TranslationEditor.js';
import { OnLoadView_ClientSelector } from '../event/OnLoadView_ClientSelector.js';

const viewTemplate = loadTemplate('./app/view/view-translation-selector.html');
const translationCardTemplate = loadTemplate('./app/component/card-translation.html');
const keyIconTemplate = loadTemplate('./app/component/key-and-icon.html');
const containerButtonTemplate = loadTemplate('./app/component/button-container.html');

//
// @function OnLoadView_TranslationSelector
//
export function OnLoadView_TranslationSelector (client) {
    
    const fontAwesome_checkIconClass = 'fa-check';
    const fontAwesome_crossIconClass = 'fa-times';

    let viewContent = unpackTemplate(viewTemplate, {
        bigHeader : 'Ordbase',
        smallHeader : 'Edit translation',
    });

    // Hook up all buttons
    viewContent.querySelector('#btn-toggle-container-list').onclick   = (event) => OnLoadView_ClientSelector();
    viewContent.querySelector('#btn-back-to-home-page').onclick       = (event) => OnLoadView_ClientSelector();
    viewContent.querySelector('#btn-back-to-client-selector').onclick = (event) => OnLoadView_ClientSelector();
    viewContent.querySelector('#btn-create-new-translation').onclick  = (event) => OnLoadView_ClientSelector();

    // Swap content of body
    document.body.innerHTML =  '';
    document.body.appendChild(viewContent);


    containerApi.getOnClient(client).then( containers => {

        let containerList = document.querySelector('#list-show-containers-on-client');

        containers.forEach( container => {
            const button = unpackTemplate(containerButtonTemplate, {
                id : `button-${container}`,
                text : container
            });
            console.log(button);
            button.onclick = (event) => button.classList.toggle('selected');
            containerList.appendChild(button);    
        });
    })

    //
    // Get all translation groups 
    //  @doc template literals - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
    //
    translationApi.getGroupOnClient(client).then(data => {

        const translationList = document.querySelector('#list-show-translations-on-client');         
        
        data.forEach(translationGroup => {

            const cardContent = unpackTemplate(translationCardTemplate, { translationKey : client.key });
            const languagesComplete = cardContent.querySelector('.languages-complete');            
    
            Object.keys(translationGroup.isComplete).forEach((_languageKey, isComplete) => {

                const keyAndIcon = unpackTemplate(keyIconTemplate, {
                    languageKey : _languageKey,
                    fontawesomeClass : (isComplete ? fontAwesome_checkIconClass : fontAwesome_crossIconClass)
                });
                languagesComplete.appendChild(keyAndIcon);
            });

            // Remove the prototype
            cardContent.querySelector('.btn-load-translation-editor').onclick = (event) => OnLoadView_TranslationEditor(client, translationGroup.key);             
            translationList.appendChild(cardContent);   
        });
    })
    .catch(reason => console.error('Error:', reason));


}