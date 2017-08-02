'use strict';

import * as App from './App.js';
import * as Route from '../lib/Route.js';
import { force } from '../lib/Util.js'; 

import { View_EditClient }  from '../views/edit-client.js';

import { Component_ContainerGenerator } from '../components/generator-container.js';
import { Component_LanguageFlipper }   from '../components/flipper-language.js';
import { Component_ClientForm }        from '../components/form-client.js';

import { loadSelectClient } from './loadSelectClient.js';

export function loadNewClient(clientKey) {

    //
    // 0. Create component instances
    //
    const header    = App.HEADER;
    const view      = new View_EditClient;     
    const generator = new Component_ContainerGenerator;
    const flipper   = new Component_LanguageFlipper;
    const form      = new Component_ClientForm;
    
    //
    // 1. Fire async call
    //
    __async__client_getLanguageKeyArray({
        success: languageKeyArray => {
            languageKeyArray.forEach(lang => {
                flipper.makeItem({ key: lang.key,  text: `${lang.name} - ${lang.key}`, selected: false });
            });
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
    // 4. Component flipper
    //
    flipper.setHeaderUp('Selected')    
    flipper.setHeaderDown('Available');

    //
    // 5. Component form
    //
    form.setSubmitText('Create client');
    form.addEventListener('submit', e => {
        e.preventDefault();

        __async__client_create({ 
            client: form.getClient(), 
            containerArray: generator.getContainerKeyArray(), 
            languageArray: flipper.getLanguageKeyArray(), 
            success: () => loadSelectClient(),
        });            
    });

    //
    // 6. Inject components and append view to DOM.
    //
    view.setContainerGenerator(generator);
    view.setLanguageFlipper(flipper);
    view.setClientForm(form);
    App.switchView(view);

}

//
// @function __async__client_getLanguageKeyArray
//  @note @todo
//
function __async__client_getLanguageKeyArray({ success = force('success')}) {

    Route.language_get().then(languageKeyArray => {

        if (languageKeyArray.length > 0) {
            success(languageKeyArray);
        }
        else {
            App.HEADER.flashError('There are no supported languages in the database....');
        }
    }) 
    .catch(error => console.log(error));
}

//
// @function __async__client_create
//  @note @todo
//
function __async__client_create({ success        = force('success'),
                                 client         = force('client'), 
                                 containerArray = force('containerArray'), 
                                 languageArray  = force('languageArray'), }) {

    Route.client_create({client: client})
    .then(res => {
        console.log('client_create(): ', res.status)

        if (res.status == App.HTTP_CREATED) {

            Route.client_setContainers({clientKey: client.key, containerArray: containerArray}).then(res => {
                if (res.status != App.HTTP_CREATED) { 
                    App.HEADER.flashError(`code ${res.status}: clientContainers could not be created`);
                }
                console.log('client_setContainers(): ', res.status)
                
            }).catch(error => console.error(error));

            Route.client_setLanguages({clientKey:  client.key, languageArray: languageArray}).then(res => {
                if (res.status != App.HTTP_CREATED) { 
                    App.HEADER.flashError(`code ${res.status}: clientLanguages could not be created`);
                }
                console.log('client_setLanguages(): ', res.status)
            }).catch(error => console.error(error));    
            
            success();        
        }
        else {
            App.HEADER.flashError(`code ${res.status}: Client could not be created. Client may already exist`);
        }
    })
    .catch(error => App.HEADER.flash(error)); // @TODO Display error in view
} 

