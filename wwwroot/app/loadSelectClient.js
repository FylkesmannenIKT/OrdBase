'use strict';

import * as App from './App.js';
import * as Route from '../lib/Route.js';
import { force } from '../lib/Util.js'; 

import { View_SelectClient }      from '../views/select-client.js';
import { Component_ClientCard   } from '../components/card-client.js';

import { loadEditClient }        from './loadEditClient.js';
import { loadNewClient }         from './loadNewClient.js'; 
import { loadSelectTranslation } from './loadSelectTranslation.js';


//
// @function OnloadViewClientSelector
//
export function loadSelectClient() {

    //
    // 0. Create component instances
    //
    const view  = new View_SelectClient;
    const cardArray = new Array;

    //
    // 1. Fire async call
    //
    __async__generateCards({view: view, cardArray: cardArray});

    //
    // 2. Set up header
    //
    App.HEADER.setTextSmall         ( 'Ordbase');
    App.HEADER.setTextBig       ( 'Select Client');

    App.HEADER.setButtonColorLeft('--ordbase-color-success');
    App.HEADER.setButtonIconLeft  ( App.ICON_SQUARE);
    App.HEADER.setButtonIconRight0( App.ICON_TRASH);
    App.HEADER.setButtonIconRight1( App.ICON_PENCIL);    
    App.HEADER.setButtonIconRight2( App.ICON_PLUS);

    App.HEADER.getButtonLeft().onclick   = App.defaultHandler;    
    App.HEADER.getButtonRight0().onclick = event => { 

        cardArray.forEach(card => {
            card.toggleDeleteable();
        })

        if (cardArray[0].isDeleteable()) {
            App.HEADER.setTextBig('Delete Client');
            App.HEADER.setButtonColorLeft('--ordbase-color-danger');            
        }
        else { 
            App.HEADER.setTextBig('Select Client');
            App.HEADER.setButtonColorLeft('--ordbase-color-success');
        }   
    };    

    App.HEADER.getButtonRight1().onclick = event => { 
     
        cardArray.forEach(card => {
            card.toggleEditable();
        })

        if (cardArray[0].isEditable()) {
            App.HEADER.setTextBig('Edit Client');
            App.HEADER.setButtonColorLeft('--ordbase-color-select');            
        }
        else {
            App.HEADER.setTextBig('Select Client'); 
            App.HEADER.setButtonColorLeft('--ordbase-color-success');            
        }        
    };
    App.HEADER.getButtonRight2().onclick = event => loadNewClient();

    //
    // 3. Insert new view into DOM
    //
    App.switchView(view);
}

//
// 4. Generate client cards
//
function __async__generateCards({ 
            view      = force('view'), 
            cardArray = force('cardArray'), 
    }) {

    Route.client_getAll().then(clients => {

        clients.forEach((client, i) => {

            let card = new Component_ClientCard;
            
            card.setId(`card${i}`);
            card.setHeading(client.key);
            card.setText(client.webpageUrl);
            card.setThumbnail(client.thumbnailUrl);

            // @note Duct-typing logic variables, used for later in edit click even
            card.selectHandler = event => loadSelectTranslation(client.key);
            card.editHandler   = event => loadEditClient(client.key);
            card.deleteHandler = event => __async__deleteCard({clientKey: client.key, view: view, card: card});
            card.button.onclick = card.selectHandler;

            cardArray.push(card);
            view.appendCard(card);
        });                            
    })
    .catch(reason => console.error('Error:', reason));
}

function __async__deleteCard({
            clientKey = force('clientKey'), 
            view      = force('view'), 
            card      = force('card'),
    }) {

    Route.client_delete(clientKey)
    .then(res => {
        view.root.removeChild(card);
        loadSelectClient();
    })
    .catch(reason => console.error('Error:', reason));
}