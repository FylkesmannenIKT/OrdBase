'use strict';

import * as App from '/app.js';
import * as Api from '/app/library/api.js';

import { loadEditTranslation } from './loadEditTranslation.js';
import { loadSelectClient }    from './loadSelectClient.js';

const ICON_CHECK      = 'fa-check';
const ICON_TIMES      = 'fa-times';


//
// @function loadSelectTranslation
//
export function loadSelectTranslation (client) {

    // Create elements
    const translationSelect = document.createElement('ordbase-select-translation');

    // Setup header
    App.header.data = {
        textBig          : 'Ordbase',
        textSmall        : 'Select Translation',
        buttonIconLeft   : ICON_HEADER_BARS,
        buttonIconRight1 : ICON_HEADER_ARROW_LEFT,    
        buttonIconRight2 : ICON_HEADER_PLUS,
    };
    
    App.header.onClickButtonRight2 = event => loadSelectClient();

    // Batch-update DOM
    App.main.removeChild(App.main.firstChild); // @bench towards innerHTML = ''; 
    App.main.appendChild(translationSelect);       

    //
    // @AJAX - fetch all containers on selected client
    //
    Api.container.getOnClient(client)
            .then(containersOnClient => {

                for(let i = 0; i < containersOnClient.length; i++) {
                    let button = translationSelect.spawnButtonContainer();

                    button.id       = containersOnClient[i].name;
                    button.text     = containersOnClient[i].name;
                    button.selected = '';

                    translationSelect.appendButtonContainer(button);
                }

                return Api.translation.getGroupOnClient(client);
            })
    //
    //  @AJAX - Get all translation groups 
    //  @doc template literals - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
    //
            .then(translationGroups => {

                    
                    for (let i = 0; i < translationGroups.length; i++) {

                        let card = translationSelect.spawnCardTranslation();

                        Object.keys(translationGroups[i].isComplete).forEach((languageKey, isComplete) => {
                            let keyAndIcon = card.spawnKeyAndIcon();

                            keyAndIcon.languageKey = languageKey;
                            keyAndIcon.icon = (isComplete) ? ICON_CHECK : ICON_TIMES;

                            card.appendKeyAndIcon(keyAndIcon);
                        });
                        translationSelect.appendCardTranslation(card);
                    }             
            })
            .catch(reason => console.error('Error:', reason));
}