'use strict';

import * as App from './App.js';
import * as Api from '../lib/Api.js';

import { View_SelectTranslation } from '../views/select-translation.js';

import { Component_ButtonSelect }    from '../components/button-select.js';
import { Component_CardTranslation } from '../components/card-translation.js';
import { Component_GroupKeyIcon }    from '../components/group-key-icon.js';
import { Component_ItemFlipper }     from '../components/item-flipper.js';

import { loadNewTranslation }  from './loadNewTranslation.js';
import { loadEditTranslation } from './loadEditTranslation.js';
import { loadSelectClient }    from './loadSelectClient.js';

//
// @function loadSelectTranslation
//
export function loadSelectTranslation (clientKey) {

    // Create elements
    const view    = new View_SelectTranslation;
    const flipper = new Component_ItemFlipper;
    const cards   = new Array();

    // Async calls
    async_getFlipperData(flipper, clientKey);
    async_getTranslationCardData(cards, clientKey, view);

    // Setup header
    App.HEADER.setTextBig          ( 'Ordbase');
    App.HEADER.setTextSmall        ( `Select ${clientKey} Translation`);
    App.HEADER.setButtonIconLeft   ( App.ICON_BARS);
    App.HEADER.setButtonIconRight1 ( App.ICON_PLUS);
    App.HEADER.setButtonIconRight2 ( App.ICON_ARROW_LEFT);    

    App.HEADER.getButtonLeft().onclick   = App.defaultHandler;
    App.HEADER.getButtonRight0().onclick = App.defaultHandler;    
    App.HEADER.getButtonRight1().onclick = event => loadNewTranslation(clientKey);
    App.HEADER.getButtonRight2().onclick = event => loadSelectClient();

    view.setFlipper(flipper);
    App.switchView(view);
}


function async_getFlipperData(flipper, clientKey) {

        Api.client.getDefaultContainers(clientKey)  
        .then(containers => {        
            containers.forEach(container => {

                let button = new Component_ButtonSelect;

                button.setId( container);
                button.setText( container);
                button.setSelected(true)

                flipper.addItem(button, { selected : true });
            });
        })
}

function async_getTranslationCardData(cards, clientKey, view) {

    //
    //  @AJAX - Get all translation groups 
    //  @doc template literals - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
    //
    Api.translation.getGroupAll(clientKey).then(groups => {
        
        groups.forEach((group, i) => {

            let card = new Component_CardTranslation;
            
            card.key = group.key;
            card.onClickCard = event => loadEditTranslation(client, group.key);

            Object.keys(group.isComplete).forEach((languageKey, isComplete) => {
                
                let keyAndIcon = new Component_GroupKeyIcon;

                keyAndIcon.languageKey = languageKey;
                keyAndIcon.icon = (isComplete) ? App.ICON_CHECK : App.ICON_TIMES;

                card.appendKeyAndIcon(keyAndIcon);
            });
            view.appendCardTranslation(card);
        });           
    })
    .catch(reason => console.error('Error:', reason));
}