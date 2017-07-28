'use strict';

import * as App from './App.js';
import * as Route from '../lib/Route.js';
import { force } from '../lib/Util.js'; 

import { View_EditClient }        from '../views/edit-client.js';

import { Component_SelectButton  } from '../components/button-select.js';
import { Component_ItemGenerator } from '../components/item-generator.js';
import { Component_ItemFlipper   } from '../components/item-flipper.js';
import { Component_ClientForm    } from '../components/form-client.js';

import { loadSelectClient } from './loadSelectClient.js';

export function loadEditClient(clientKey) {

    //
    // 0. Create component instances
    //
    const view      = new View_EditClient;     
    const generator = new Component_ItemGenerator;
    const flipper   = new Component_ItemFlipper;
    const form      = new Component_ClientForm;

    //
    // 1. Async calls 
    //
    __async__populateGenerator({generator: generator, clientKey: clientKey});
    __async__populateFlipper({flipper: flipper, clientKey: clientKey});
    __async__populateForm({form: form, clientKey: clientKey});

    //
    // 3. Set up header
    //
    App.HEADER.setTextSmall('Ordbase');    
    App.HEADER.setTextBig(`Edit ${clientKey}`);
    
    App.HEADER.setButtonIconLeft(App.ICON_BARS);
    App.HEADER.setButtonIconRight0(App.ICON_NONE);        
    App.HEADER.setButtonIconRight1(App.ICON_NONE);    
    App.HEADER.setButtonIconRight2(App.ICON_TIMES);

    App.HEADER.getButtonLeft().onclick   = App.defaultHandler;
    App.HEADER.getButtonRight0().onclick = App.defaultHandler;    
    App.HEADER.getButtonRight1().onclick = App.defaultHandler;
    App.HEADER.getButtonRight2().onclick = event => loadSelectClient();

    //
    // 4. Set up container generator
    //
    generator.OnGenerate(()=> {
        let button = new Component_SelectButton;
        let value = generator.getValue();

        button.setId(value);
        button.setText(value);
        button.setSelected(true);
        
        button.OnClick(() => {
            generator.removeItem(button);
        });

        generator.addItem(button);
    });

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
        __async__updateClient({ clientKey: clientKey, form: form, generator: generator, flipper: flipper});            
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
// 8. Fill container buttons into generator
//
function __async__populateGenerator({
            generator = force('generator'), 
            clientKey = force('clientKey'),
    }) {

    Route.client_getDefaultContainers(clientKey)
    .then( containers => {
        console.log('containers ', containers);

        containers.forEach( container => {

            const button = new Component_SelectButton;

            button.setId(container);
            button.setText(container);
            button.setSelected(true);

            button.OnClick(() => {
                generator.removeItem(button);
            });
            generator.addItem(button);
        });
    })
    .catch(reason => console.error('Error:', reason));
}

//
// 9. Fill languages into flipper
//
function __async__populateFlipper({
            flipper = force('flipper'), 
            clientKey = force('clientKey'),
    }) {
    let buttonArray = new Array();

    Route.language_getGlobal()
    .then(languages => {
        console.log('global ', languages);

        languages.forEach(lang => {
            let button = new Component_SelectButton;

            button.setId(lang.key);
            button.setText( `${lang.name} - ${lang.key}`);
            button.setSelected(false);

            button.OnClick(() => {
                button.toggleSelected();
            });

            buttonArray.push(button);
            flipper.addItem(button, { selected : false });
        });
        return Route.client_getDefaultLanguages(clientKey);
    })
    .then(languages => {
        console.log('selected ', languages);
        languages.forEach(lang => {

            let isDefaultButton = false;
            
            for (let i = 0; i < buttonArray.length; i++) {
                
                let button = buttonArray[i];
                if (button.getId() === lang) {
                    button.setSelected(true);     
                    flipper.flipItem(button);
                    break;
                }
            }
        })
    })
    .catch(error => console.log(error));
}

//
// 10. Fill client data into form
//
function __async__populateForm({
            form = force('form'), 
            clientKey = force('clientKey'),
    }) {

    Route.client_get(clientKey)
    .then(client => {
        form.setClient(client[0]);
    })
    .catch(error => console.log(error));        
}

//
// 11. Submit data from form, generator and flipper
//
function __async__updateClient({
            clientKey = force('clientKey'), 
            form      = force('form'), 
            generator = force('generator'), 
            flipper   = force('flipper')
    }) {

    let clientObject   = form.getClient();
    let containerArray = generator.getItemArray().map(button => { return button.getId(); });
    let languageArray  = flipper.getSelectedItemArray().map(button => { return button.getId(); });

    Route.client_update(clientObject).then(response => {

        Route.client_updateDefaultContainers(clientKey, containerArray).catch(error => console.error(error));
        Route.client_updateDefaultLanguages(clientKey,  languageArray).catch(error => console.error(error));

        loadSelectClient();
    })
    .catch(error => console.error(error));  // @TODO Display error in view

}