'use strict';

import * as App from './App.js';
import * as Ordbase from '../lib/Ordbase.js';
import { force } from '../lib/Util.js'; 

import { View_EditClient }        from '../views/edit-client.js';

import { Component_Header  }            from '../components/header.js';
import { Component_ContainerGenerator } from '../components/generator-container.js';
import { Component_LanguageFlipper   }  from '../components/flipper-language.js';
import { Component_ClientForm    }      from '../components/form-client.js';

import { load_selectClient } from './load-selectClient.js';

export function load_editClient(clientKey) {

    //
    // 0. Create component instances
    //
    const view      = new View_EditClient;     
    const header    = new Component_Header;
    const generator = new Component_ContainerGenerator;
    const flipper   = new Component_LanguageFlipper;
    const form      = new Component_ClientForm;

    //
    // 1. Async calls filling in data in components
    //
    async_container_getClientContainerKeyArray_container_getNonEmptyArray({ 
        clientKey: clientKey,
        success : (containerKeyArray, containerNonEmptyArray) => {     
            containerKeyArray.forEach( containerKey => {
                generator.makeItem({key: containerKey, selected: true}); 
            });

            containerNonEmptyArray.forEach(container => {
                let found = containerKeyArray.find(containerKey => { return container.key == containerKey; })
                if (found === undefined)
                    generator.makeItem({ key: container.key, selected: false })
            });

            generator.focus();    
        }
    });


    async_language_getArray_client_getClientLanguageKeyArray({
        clientKey: clientKey, 
        success: (languageArray, clientLanguageKeyArray) => {

            languageArray.forEach(language => {
                flipper.makeItem({ key: language.key,  text: `${language.name} - ${language.key}`,  selected: false });
            });

            clientLanguageKeyArray.forEach(clientLanguageKey => {
                flipper.selectItem(clientLanguageKey);
            })            
        }
    });

    async_clientGet({ 
        clientKey: clientKey, 
        success: client => {
            form.setClient(client);        
        }
    });

    //
    // 2. Set up header
    ///
    header.setTheme({ textBig: 'Edit Client', setTextSmall: 'Ordbase', editable: true, });    
    header.setIcons({ button2: App.ICON_TIMES, });
    header.setEventHandlers({
        button2_onclick: event => load_selectClient()
    });

    //
    // 3. Set up language flipper
    //
    flipper.setTextUp('Selected')    
    flipper.setTextDown('Available');

    //
    // 4. Set up form
    //
    form.setSubmitText(`Update ${clientKey}`);
    form.addEventListener('submit', e => {
        e.preventDefault();

        async_client_update({ 
            client:         form.getClient(), 
            containerKeyArray: generator.getContainerKeyArray(), 
            languageKeyArray:  flipper.getLanguageKeyArray(), 
            success: () => load_selectClient(),
        });
    });

    //
    // 5. Create view, inject components and append view to DOM.
    //
    view.setContainerGenerator(generator);
    view.setLanguageFlipper(flipper);
    view.setClientForm(form);
    App.setHeader(header);
    App.setView(view);

}

//
// @function async_container_getClientContainerKeyArray_container_getNonEmptyArray
//  @note @todo
//
function async_container_getClientContainerKeyArray_container_getNonEmptyArray({ clientKey = force('clientKey'),
                                                                                success   = force('success'),  }) {

    let containerKeyArray = null;

    Ordbase.container_getClientContainerArray({clientKey: clientKey})
    .then(clientContainerArray => {
        containerKeyArray = clientContainerArray.map(clientContainer => { return clientContainer.containerKey; });
        return Ordbase.container_getNonEmpty({ clientKey: clientKey });
    })
    .then(containerNoEmptyArray => {
        success(containerKeyArray, containerNoEmptyArray);
    }) 
    .catch(err => App.flashError(err));
}

//
// @function _
//  @note @todo
//
function async_language_getArray_client_getClientLanguageKeyArray({  success = force('success'),
                                                                   clientKey = force('clientKey'), }) {

    let languageArray = null;
    Ordbase.language_get()
    .then(_languageArray => {
        languageArray = _languageArray;
        return Ordbase.language_getClientLanguageArray({clientKey: clientKey});
    })
    .then(clientLanguageArray => {
        success(languageArray, clientLanguageArray.map(clientLanguage => { return clientLanguage.languageKey; }));    
    })
    .catch(error => App.flashError(error));
}

//
// @function async_clientGet
//  @note @todo
//
function async_clientGet({ success = force('success'),
                              clientKey = force('clientKey'), }) {

    Ordbase.client_get({clientKey: clientKey})
    .then(clientArray => {
        let client = clientArray[0];
        success(client);
    })
    .catch(error => App.flashError(error));        
}


//
// @function async_client_update
//  @note @todo
//
function async_client_update({ success = force('success'),
                               client         = force('client'), 
                               containerKeyArray = force('containerKeyArray'), 
                               languageKeyArray  = force('languageKeyArray')
    }) {

    Ordbase.client_update({clientKey: client.key, client: client}).then(res => {
        console.log('client_update():', res.status);
        if (res.status == App.HTTP_UPDATED) {

            Ordbase.container_setClientContainerArray({
                clientKey: client.key, 
                clientContainerArray: containerKeyArray.map(containerKey => { return {containerKey: containerKey, clientKey: client.key }})
            }).then(res => {
                if (res.status != App.HTTP_CREATED) { 
                    App.flashError(`code ${res.status}: clientContainers could not be updated`);
                } else {
                    success();        
                }
                console.log('client_setContainers(): ', res.status)
                
            }).catch(error => console.error(error));

            Route.language_setClientLanguageArray({
                clientKey:  client.key, 
                clientLanguageArray: languageKeyArray.map(languageKey => { return { languageKey: languageKey, clientKey: client.key }}) 
            }).then(res => {
                if (res.status != App.HTTP_CREATED) { 
                    App.flashError(`code ${res.status}: clientLanguages could not be updated`);
                }
                else {
                    success();        
                }
                console.log('client_setLanguages(): ', res.status)
            }).catch(error => console.error(error)); 
            
        }
        else {
            App.flashError(`code ${res.status}: CRITICAL ERROR, Client could not be updated... `);
        }
    })
    .catch(error => App.flashError(error)); // @TODO Display error in view
}