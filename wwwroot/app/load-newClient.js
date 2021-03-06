'use strict';

import * as App   from './App.js';
import * as Ordbase from '../lib/Ordbase.js';
import { force }  from '../lib/Util.js'; 

import { View_EditClient }  from '../views/edit-client.js';

import { Component_Header }             from '../components/header.js';
import { Component_ContainerGenerator } from '../components/generator-container.js';
import { Component_LanguageFlipper }    from '../components/flipper-language.js';
import { Component_ClientForm }         from '../components/form-client.js';

import { load_selectClient } from './load-selectClient.js';

export function load_newClient(clientKey) {

    //
    // 0. Create component instances
    //
    const view      = new View_EditClient;     
    const header    = new Component_Header;
    const generator = new Component_ContainerGenerator;
    const flipper   = new Component_LanguageFlipper;
    const form      = new Component_ClientForm;
    
    //
    // 1. Fire async call
    //
    async_language_getArray({
        success: languageArray => {
            languageArray.forEach(language => {
                flipper.makeItem({ key: language.key,  text: `${language.name} - ${language.key}`, selected: false });
            });
        }
    });

    //
    // 2. Set up header 
    //
    header.setTheme({ textBig:   'New Client', textSmall: 'Ordbase', newable: true, });
    header.setIcons({ button2: App.ICON_TIMES, });
    header.setEventHandlers({
        button2_onclick: event => load_selectClient()
    });

    //
    // 4. Component flipper and generator
    //
    flipper.setTextUp('Selected')    
    flipper.setTextDown('Available');

    //
    // 5. Component form
    //
    form.setSubmitText('Create client');
    form.addEventListener('submit', e => {
        e.preventDefault();

        async_client_create({ 
            header: header,
            client: form.getClient(), 
            containerKeyArray: generator.getContainerKeyArray(), 
            languageKeyArray: flipper.getLanguageKeyArray(), 
            success: () => load_selectClient(),
        });            
    });

    //
    // 6. Inject components and append view to DOM.
    //
    view.setContainerGenerator(generator);
    view.setLanguageFlipper(flipper);
    view.setClientForm(form);
    App.setHeader(header);
    App.setView(view);
    form.focus();
}

//
// @function async_language_getArray
//  @note @todo
//
function async_language_getArray({ success = force('success')}) {

    Ordbase.language_get().then(languageArray => {

        if (languageArray.length > 0) {
            success(languageArray);
        }
        else {
            App.flashError('There are no supported languages in the database....');
        }
    }) 
    .catch(error => console.error(error));
}

//
// @function async_client_create
//  @note @todo
//
function async_client_create({ success        = force('success'),
                               client         = force('client'), 
                               containerKeyArray = force('containerKeyArray'), 
                               languageKeyArray  = force('languageKeyArray'), }) {

    Ordbase.client_create({client: client})
    .then(res => {
        console.log('client_create(): ', res.status)

        if (res.status == App.HTTP_CREATED) {

            Ordbase.container_setClientContainerArray({
                clientKey: client.key, 
                clientContainerArray: containerKeyArray.map(containerKey => { return {containerKey: containerKey, clientKey: client.key }})
            }).then(res => {
                if (res.status != App.HTTP_CREATED) { 
                    App.flashError(`code ${res.status}: clientContainers could not be created`);
                    console.log(res.status);
                    
                } else {
                    success();        
                }
                console.log('client_setContainers(): ', res.status)
                
            }).catch(error => console.error(error));

            Ordbase.language_setClientLanguageArray({
                clientKey:  client.key, 
                clientLanguageArray: languageKeyArray.map(languageKey => { return { languageKey: languageKey, clientKey: client.key }}) 
            }).then(res => {
                if (res.status != App.HTTP_CREATED) { 
                    App.flashError(`code ${res.status}: clientLanguages could not be created`);
                    console.log(res.status);
                }
                else {
                    success();        
                }
                console.log('client_setLanguages(): ', res.status)
            }).catch(error => console.error(error));    
            
        }
        else {
            App.flashError(`code ${res.status}: Client could not be created. Client may already exist`);
        }
    })
    .catch(error => App.flashError(error)); // @TODO Display error in view
} 

