'use strict';

import * as App from './App.js';
import * as Route from '../lib/Route.js';
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
    async_client_getContainerKeyArray_container_getNoEmptyArray({ 
        clientKey: clientKey,
        success : (containerKeyArray, containerNoEmptyArray) => {     
            containerKeyArray.forEach( containerKey => {
                generator.makeItem({key: containerKey, selected: true}); 
            });

            containerNoEmptyArray.forEach(container => {
                let found = containerKeyArray.find(containerKey => { return containerKey == container.key; })
                if (found === undefined)
                    generator.makeItem({ key: container.key, selected: false })
            });

            generator.focus();    
        }
    });


    async_language_getArray_client_getLanguageKeyArray({
        clientKey: clientKey, 
        success: (languageArray, languageKeyArray) => {

            languageArray.forEach(lang => {
                flipper.makeItem({ key: lang.key,  text: `${lang.name} - ${lang.key}`,  selected: false });
            });

            languageKeyArray.forEach(key => {
                flipper.selectItem(key);
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
            containerArray: generator.getContainerKeyArray(), 
            languageArray:  flipper.getLanguageKeyArray(), 
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
// @function async_client_getContainerKeyArray_container_getNoEmptyArray
//  @note @todo
//
function async_client_getContainerKeyArray_container_getNoEmptyArray({ clientKey = force('clientKey'),
                                                                       success   = force('success'),  }) {

    let containerKeyArray = null;

    Route.client_getContainers({clientKey: clientKey})
    .then(_containerKeyArray => {
        containerKeyArray = _containerKeyArray;
        return Route.container_getNoEmpty({ clientKey: clientKey });
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
function async_language_getArray_client_getLanguageKeyArray({  success = force('success'),
                                                               clientKey = force('clientKey'), }) {

    let languageArray = null;
    Route.language_get()
    .then(_languageArray => {
        languageArray = _languageArray;
        return Route.client_getLanguages({clientKey: clientKey});
    })
    .then(languageKeyArray => {
        success(languageArray, languageKeyArray);    
    })
    .catch(error => App.flashError(error));
}

//
// @function async_clientGet
//  @note @todo
//
function async_clientGet({ success = force('success'),
                              clientKey = force('clientKey'), }) {

    Route.client_get({clientKey: clientKey})
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
                                  containerArray = force('containerArray'), 
                                  languageArray  = force('languageArray')
    }) {

    Route.client_update({clientKey: client.key, client: client}).then(res => {
        console.log('client_update():', res.status);
        if (res.status == App.HTTP_UPDATED) {

            Route.client_setContainers({clientKey: client.key, containerArray: containerArray}).then(res => {
                if (res.status != App.HTTP_CREATED) { 
                    App.flashError(`code ${res.status}: clientContainers could not be updated`);
                } else {
                    success();            
                }
                console.log('client_setContainers(): ', res.status)

            }).catch(error => App.flashError(error));

            Route.client_setLanguages({clientKey:  client.key, languageArray: languageArray}).then(res => {
                if (res.status != App.HTTP_CREATED) { 
                    App.flashError(`code ${res.status}: clientLanguages could not be updated`);
                }
                else {
                    success();
                }
                console.log('client_setLanguages(): ', res.status)
            }).catch(error => App.flashError(error));
            
        }
        else {
            App.flashError(`code ${res.status}: CRITICAL ERROR, Client could not be updated... `);
        }
    })
    .catch(error => App.flashError(error)); // @TODO Display error in view
}