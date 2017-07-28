'use strict';

import * as App from './App.js';
import * as Route from '../lib/Route.js';
import { force } from '../lib/Util.js'; 

import { View_EditClient }  from '../views/edit-client.js';

import { Component_ItemGenerator } from '../components/item-generator.js';
import { Component_ItemFlipper }   from '../components/item-flipper.js';
import { Component_ClientForm }    from '../components/form-client.js';
import { Component_SelectButton }  from '../components/button-select.js';

import { loadSelectClient } from './loadSelectClient.js';

export function loadNewClient(clientKey) {

    //
    // 0. Create component instances
    //
    const view      = new View_EditClient;     
    const generator = new Component_ItemGenerator;
    const flipper   = new Component_ItemFlipper;
    const form      = new Component_ClientForm;
    
    //
    // 1. Fire async call
    //
    __async__populateFlipper({flipper: flipper});

    //
    // 2. Set up header
    //
    App.HEADER.setTextBig(   'Ordbase');    
    App.HEADER.setTextSmall( 'New client');
    App.HEADER.setButtonIconLeft  (App.ICON_BARS);
    App.HEADER.setButtonIconRight0(App.ICON_NONE);    
    App.HEADER.setButtonIconRight1(App.ICON_NONE);    
    App.HEADER.setButtonIconRight2(App.ICON_TIMES);

    App.HEADER.getButtonLeft().onclick   = App.defaultHandler;
    App.HEADER.getButtonRight0().onclick = App.defaultHandler;    
    App.HEADER.getButtonRight1().onclick = App.defaultHandler;
    App.HEADER.getButtonRight2().onclick = event => loadSelectClient();

    //
    // 3. Component generator
    //
    generator.OnGenerate(() => {
        let button = new Component_SelectButton;
        let value = generator.getValue();
        button.setId(value);
        button.setText(value);
        button.setSelected(true);
        return button;
    });

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
        __async__submitNewClient({form: form, generator: generator, flipper: flipper});            
    });

    //
    // 6. Inject components and append view to DOM.
    //
    view.setContainerGenerator(generator);
    view.setLanguageFlipper(flipper);
    view.setClientForm(form);
    App.switchView(view);

}

function __async__populateFlipper({ flipper = force('flipper') }) {
    //
    // 6. Promise fill in available languages
    //
    Route.language_getGlobal().then(languages => {

        languages.forEach(lang => {
            let button = new Component_SelectButton;

            button.setId(lang.key);
            button.setText( `${lang.name} - ${lang.key}`);
            button.setSelected(false);

            flipper.addItem(button, { selected : false });
        });
    })
    .catch(error => console.log(error));
}

function __async__submitNewClient({
            form      = force('form'), 
            generator = force('generator'), 
            flipper   = force('flipper'),
    }) {

    //
    //  @doc https://stackoverflow.com/questions/31676135/javascript-map-is-not-a-function
    //
    let client         = form.getClient();
    let containerArray = generator.getItemArray().map(button =>       { return button.getId(); });
    let languageArray  = flipper.getSelectedItemArray().map(button => { return button.getId(); });

    Route.client_create(client)
    .then(response => {
        
        Route.client_createDefaultContainers(client.key, containerArray).catch(error => console.error(error));        
        Route.client_createDefaultLanguages(client.key, languageArray).catch(error => console.error(error));           

        loadSelectClient();
    })
    .catch(error => console.error(error)); // @TODO Display error in view
} 

