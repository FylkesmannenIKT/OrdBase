'use strict';

import { overwriteFromTemplate } from '../library/Util.js';
import { container as containerApi, translation as translationApi } from '../library/Api.js'; 

import { OnLoadView_TranslationSelector } from '../event/OnLoadView-TranslationSelector.js';
import { OnLoadView_ClientSelector }      from '../event/OnLoadView_ClientSelector.js';

//
// @function OnLoadView_TranslationEditor
//
export function OnLoadView_TranslationEditor (client, key) {
    
    const view = overwriteFromTemplate(document.body, 'view-translation-editor');
    const containerList = view.querySelector('#list-show-containers-on-translation'); 

    //
    // Get all container on client
    //
    containerApi
    .getOnClient(client)
    .then(data => {

        data.forEach(containerName => {
            const button = document.createElement('button');
            button.innerHTML = containerName;
            button.id = 'button-' + containerName;
            button.onclick = (event) => button.classList.toggle('selected'); 

            containerList.appendChild(button);
        });      

        return containerApi.getOnKey(client, key)
    })
    .then(data => {
        data.forEach(selectedContainer => {
            const button =  document.querySelector('#button-' + selectedContainer);
            if (button) {
               button.classList.add('selected');
            }
        });
    })
    .catch(reason => console.error('Error:', reason));

    //
    // Get data about translations with the same key
    //
    translationApi
    .getOnKey(client, key)
    .then(data => {
        const main = view.querySelector('ordbase-form-translation'); 


        console.log('key:', key)
        main.querySelector('#input-key').setAttribute('value', key);
        
        data.forEach(translation => {
            console.log(translation);

            main.innerHTML += `<label for="input-${translation.languageKey}">  ${translation.languageKey} </label><br>`;
            main.innerHTML += `<input  id="input-${translation.languageKey}"  type="text" value="${translation.text}"><br>`;
            
            main.innerHTML += `<label for="input-${translation.languageKey}-approved"> Approved? </label><br>`;
            main.innerHTML += `<input  id="input-${translation.languageKey}-approved" type="checkbox" name="done"><br><br>` 
        })
    })
    .catch(reason => console.error('Error:', reason));
 
    // Hook up buttons
    view.querySelector('#btn-toggle-container-list').onclick        = (event) => OnLoadView_TranslationEditor(client);
    view.querySelector('#btn-back-to-home-page').onclick            = (event) => OnLoadView_ClientSelector(client);
    view.querySelector('#btn-back-to-translation-selector').onclick = (event) => OnLoadView_TranslationSelector(client);    
    view.querySelector('#btn-save-edited-translation').onclick      = (event) => OnLoadView_TranslationEditor(client);
}
