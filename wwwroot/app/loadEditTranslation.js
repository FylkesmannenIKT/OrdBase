'use strict';

import * as App from './App.js';
import * as Api from '../lib/Api.js'; 

import { View_EditTranslation }          from '../views/edit-translation.js';

import { Component_ButtonSelect }        from '../components/button-select.js';
import { Component_FieldsetTranslation } from '../components/fieldset-translation.js';

import { loadSelectTranslation }      from './loadSelectTranslation.js';
import { loadSelectClient }           from './loadSelectClient.js';

//
// @function loadEditTranslation
//
export function loadEditTranslation (client, key) {

    App.HEADER.setTextBig('Ordbase');
    App.HEADER.setTextSmall('Edit translation');
    App.HEADER.setButtonIconLeft(App.ICON_BARS);
    App.HEADER.setButtonIconRight1(App.ICON_NONE);    
    App.HEADER.setButtonIconRight2(App.ICON_TIMES);
    
    App.HEADER.getButtonLeft().onclick   = App.defaultHandler;
    App.HEADER.getButtonRight1().onclick = App.defaultHandler;
    App.HEADER.getButtonRight2().onclick = event => loadSelectTranslation(client);

    const view = App.switchView(new View_EditTranslation);

    let containersOnClient = {};

    Api.container.getOnClient(client)
        //
        // @ajax promise
        //
        .then(_containersOnClient => {
            containersOnClient = _containersOnClient;  
            return Api.container.getOnKey(client, key);
        })
        //
        // @ajax promise
        //
        .then(selectedContainer => {

            containersOnClient.forEach( container => {

                let button = new Component_ButtonSelect;

                button.id = `button-${container}`,
                button.text = container,
                button.selected = (selectedContainer == container ? 'selected' : '');

                view.appendButtonContainer(button);
            });
            return Api.translation.getOnKey(client, key);
        })
        //
        // @ajax promise
        //
        .then(translationGroup => {

            translationGroup.forEach( translation => {

                let fieldset = new Component_FieldsetTranslation;

                fieldset.languageCode = translation.languageKey;
                fieldset.inputId      = `input-${translation.languageCode}`;
                fieldset.inputValue   = translation.text;
                fieldset.checked      = translation.isComplete;

                view.appendFieldset(fieldset);
            });
        })
        .catch(reason => console.error('Error:', reason))
}


