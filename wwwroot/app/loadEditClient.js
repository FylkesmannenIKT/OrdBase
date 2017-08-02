'use strict';

import * as App from './App.js';
import * as Route from '../lib/Route.js';
import { force } from '../lib/Util.js'; 

import { View_EditClient }        from '../views/edit-client.js';

import { Component_ContainerGenerator } from '../components/generator-container.js';
import { Component_LanguageFlipper   } from '../components/flipper-language.js';
import { Component_ClientForm    } from '../components/form-client.js';

import { loadSelectClient } from './loadSelectClient.js';

export function loadEditClient(clientKey) {

    //
    // 0. Create component instances
    //
    const header    = App.HEADER;
    const view      = new View_EditClient;     
    const generator = new Component_ContainerGenerator;
    const flipper   = new Component_LanguageFlipper;
    const form      = new Component_ClientForm;

    //
    // 1. Async calls filling in data in components
    //
    __async__client_getContainerKeyArray({ clientKey: clientKey,
        success : containerKeyArray => {     
            containerKeyArray.forEach( containerKey => {
                generator.makeItem({key: containerKey, selected: true}); 
            });
        }
    });


    __async__language_getArray__client_getLanguageKeyArray( {clientKey: clientKey, 
        success: (languageArray, languageKeyArray) => {

            languageArray.forEach(lang => {
                flipper.makeItem({ key: lang.key,  text: `${lang.name} - ${lang.key}`,  selected: false });
            });

            languageKeyArray.forEach(key => {
                flipper.selectItem(key);
            })            
        }
    });

    __async__clientGet({ clientKey: clientKey, 
        success: client => {
            form.setClient(client);        
        }
    });

    //
    // 2. Set up header event handlers
    //
    header.button0_OnClick(App.defaultHandler);
    header.button1_OnClick(App.defaultHandler);    
    header.button2_OnClick(App.defaultHandler);
    header.button3_OnClick(event => loadSelectClient());

    //
    // 3. Bind data to header
    //
    header.setTextSmall('Ordbase');    
    header.setTextBig('New client');
    header.button0_setIcon(App.ICON_BARS);
    header.button1_setIcon(App.ICON_NONE);    
    header.button2_setIcon(App.ICON_NONE);    
    header.button3_setIcon(App.ICON_TIMES);

    //
    // 5. Set up language flipper
    //
    flipper.setHeaderUp('Selected')    
    flipper.setHeaderDown('Available');

    //
    // 6. Set up form
    //
    form.setSubmitText(`Update ${clientKey}`);
    form.addEventListener('submit', e => {
        e.preventDefault();

        __async__client_update({ 
            client:         form.getClient(), 
            containerArray: generator.getContainerKeyArray(), 
            languageArray:  flipper.getLanguageKeyArray(), 
            success: () => loadSelectClient(),
        });
    });

    //
    // 7. Create view, inject components and append view to DOM.
    //
    view.setContainerGenerator(generator);
    view.setLanguageFlipper(flipper);
    view.setClientForm(form);
    App.switchView(view);
}

//
// @function __async__client_getContainerKeyArray
//  @note @todo
//
function __async__client_getContainerKeyArray({ clientKey = force('clientKey'),
                                                success   = force('success'),  }) {

    Route.client_getContainers({clientKey: clientKey})
    .then( containerKeyArray => {
        success(containerKeyArray);
    })
    .catch(reason => console.error('Error:', reason));
}

//
// @function _
//  @note @todo
//
function __async__language_getArray__client_getLanguageKeyArray({  success = force('success'),
                                                                   clientKey = force('clientKey'), }) {

    let languageArray;
    Route.language_get()
    .then(_languageArray => {
        languageArray = _languageArray;
        return Route.client_getLanguages({clientKey: clientKey});
    })
    .then(languageKeyArray => {
        success(languageArray, languageKeyArray);    
    })
    .catch(error => console.error(error));
}

//
// @function __async__clientGet
//  @note @todo
//
function __async__clientGet({ success = force('success'),
                              clientKey = force('clientKey'), }) {

    Route.client_get({clientKey: clientKey})
    .then(clientArray => {
        let client = clientArray[0];
        success(client);
    })
    .catch(error => console.error(error));        
}


//
// @function __async__client_update
//  @note @todo
//
function __async__client_update({ success = force('success'),
                                  client         = force('client'), 
                                  containerArray = force('containerArray'), 
                                  languageArray  = force('languageArray')
    }) {

    Route.client_update({clientKey: client.key, client: client}).then(res => {
        console.log('client_update():', res.status);
        if (res.status == App.HTTP_UPDATED) {

            Route.client_setContainers({clientKey: client.key, containerArray: containerArray}).then(res => {
                if (res.status != App.HTTP_CREATED) { 
                    App.HEADER.flashError(`code ${res.status}: clientContainers could not be updated`);
                }
                console.log('client_setContainers(): ', res.status)

            }).catch(error => console.error(error));

            Route.client_setLanguages({clientKey:  client.key, languageArray: languageArray}).then(res => {
                if (res.status != App.HTTP_CREATED) { 
                    App.HEADER.flashError(`code ${res.status}: clientLanguages could not be updated`);
                }
                console.log('client_setLanguages(): ', res.status)
            }).catch(error => console.error(error));
            
            success();
        }
        else {
            App.HEADER.flashError(`code ${res.status}: CRITICAL ERROR, Client could not be updated... `);
        }
    })
    .catch(error => App.HEADER.flash(error)); // @TODO Display error in view
}