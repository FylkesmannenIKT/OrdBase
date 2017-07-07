'use strict';

import * as api from '../../library/api.js';
import { loadClientSelector } from './loadClientSelector.js';
import { submitClient }       from '../OnSubmitForm/submitClient.js';
import { loadTemplate, loadTemplateDoc, unpackTemplate } from '../../library/jet-template-unpacker.js';

const viewTemplate = loadTemplateDoc('./app/view/view-client-editor.html');

const containerListTemplate   = loadTemplateDoc('./app/component/list-container.html');
const containerButtonTemplate = loadTemplate('#template-button-container', containerListTemplate);

export function loadClientEditor(client) {
    
    const view = unpackTemplate(viewTemplate, {
        bigHeader : 'OrdBase',
        smallHeader : 'Edit Client',
    });

    view.querySelector('#btn-back-to-home-page').addEventListener('click', (event) => loadClientSelector());
    view.querySelector('#btn-back-to-client-select').addEventListener('click', (event) => loadClientSelector());
    view.querySelector('#btn-form-client-submit').addEventListener('click', (event) => submitClient(event));

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

        view.querySelector('#list-show-containers-edit-client').appendChild(containerList);

        return api.translation.getGroupOnClient(client);
    })
    .catch(reason => console.error('Error:', reason))
    .then(() => {                                  
        // Clear all previous content, insert new view
        document.body.innerHTML = ''; 
        document.body.appendChild(view);
    });

}