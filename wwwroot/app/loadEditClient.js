'use strict';

import * as App from './App.js';
import * as Api from '../lib/Api.js';

import { View_EditClient }        from '../views/edit-client.js';

import { Component_ButtonSelect  } from '../components/button-select.js';
import { Component_ItemGenerator } from '../components/item-generator.js';
import { Component_ItemFlipper   } from '../components/item-flipper.js';
import { Component_FormClient    } from '../components/form-client.js';

import { loadSelectClient } from './loadSelectClient.js';

export function loadEditClient(client) {

    //
    // 0. Create component instances
    //
    const view = new View_EditClient;     
    const generator = new Component_ItemGenerator;
    const flipper = new Component_ItemFlipper;
    const form = new Component_FormClient;

    //
    // 1. Async calls 
    //
    async_getGeneratorData(generator, client);
    async_getFlipperData(flipper, client);
    async_getFormData(form, client);

    //
    // 3. Set up header
    //
    App.HEADER.setTextBig('Ordbase');    
    App.HEADER.setTextSmall(`Edit ${client}`);
    
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
    generator.setGenerateFunction(() => {
        let button = new Component_ButtonSelect;
        let value = generator.getValue();
        button.setId(value);
        button.setText(value);
        button.setSelected(true);
        return button;
    });

    //
    // 5. Set up language flipper
    //
    flipper.setHeaderUp('Selected')    
    flipper.setHeaderDown('Available');

    //
    // 6. Set up form
    //
    form.setSubmitText(`Update ${client}`);
    form.addEventListener('submit', e => {
        e.preventDefault();
        async_submitFormData(client, form, generator, flipper);            
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
function async_getGeneratorData(generator, client) {

    Api.client.getDefaultContainers(client)
    .then( containers => {
        console.log('containers ', containers);

        containers.forEach( container => {

            const button = new Component_ButtonSelect;

            button.setId(container);
            button.setText(container);
            button.setSelected(true);

            generator.addItem(button);
        });
    })
    .catch(reason => console.error('Error:', reason));
}

//
// 9. Fill languages into flipper
//
function async_getFlipperData(flipper, client) {

    let buttonArray = new Array();

    Api.language.getGlobal()
    .then(languages => {
        console.log('global ', languages);

        languages.forEach(lang => {
            let button = new Component_ButtonSelect;

            button.setId(lang.key);
            button.setText( `${lang.name} - ${lang.key}`);
            button.setSelected(false);

            buttonArray.push(button);
            flipper.addItem(button, { selected : false });
        });
        return Api.client.getDefaultLanguages(client);
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
function async_getFormData(form, client) {
    Api.client.get(client)
    .then(client => {
        form.setClient(client[0]);
    })
    .catch(error => console.log(error));        
}

//
// 11. Submit data from form, generator and flipper
//
function async_submitFormData(clientKey, form, generator, flipper){

    let clientObject = form.getClient();

    let containerArray = [].slice.call(generator.getItems())
        .map(button => {
            return button.getId();
        });

    console.log(containerArray);

    let languageArray = [].slice.call(flipper.getSelectedItems())
        .map(button => {                
            return button.getId();
        });

    console.log('Updating existing client...');

    Api.client.update(clientObject).then(response => {
        console.log('editresponse', response);

        Api.client.updateDefaultContainers(clientKey, containerArray).catch(error => console.error(error));
        Api.client.updateDefaultLanguages(clientKey,  languageArray).catch(error => console.error(error));

        loadSelectClient();
    })
    .catch(error => console.error(error));  // @TODO Display error in view

}