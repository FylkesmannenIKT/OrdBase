'use strict';

import * as App from './App.js';
import * as Route from '../lib/Route.js';
import { force } from  '../lib/Util.js'; 

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
    const header        = App.HEADER;
    const view          = new View_SelectClient;

    //
    // 1. Fire async call
    //
    __async__client_getArray({
        success: clientArray => {
            clientArray.forEach((client, i) => {

                let card = new Component_ClientCard;

                card.setKey(client.key);
                card.setHeading(client.key);
                card.setText(client.webpageUrl);
                card.setThumbnail(client.thumbnailUrl);
                
                card.setEventHandlers({
                    onselect: (card, e) => loadSelectTranslation(card.getKey()),
                    onedit:   (card, e) => loadEditClient(card.getKey()),
                    ondelete: (card, e) => {
                        __async__client_delete({ clientKey: card.getKey(), 
                            success: () => {
                                view.root.removeChild(card);
                            }
                        });
                    }
                });

                card.setSelectable();
                view.addCard(card)
            });                 
        }
    });

    //
    // 3. Set up header event handlers
    //   
    header.button0_OnClick(event => { 
        let cardArray = view.getCardArray();  
        header.setTextBig('Select Client');
        header.setColor(App.COLOR_SUCCESS);       
        cardArray.forEach(card => card.setSelectable()); 
    });     

    header.button1_OnClick(event => { 

        let cardArray = view.getCardArray();
        if (!cardArray[0].isDeleteable()) {
            
            header.setTextBig('Delete Client');
            header.setColor(App.COLOR_DANGER);  
            cardArray.forEach(card => card.setDeleteable());          
        }
        else { 
            header.setTextBig('Select Client');
            header.setColor(App.COLOR_SUCCESS);
            cardArray.forEach(card => card.setSelectable());
        }   
    });    

    header.button2_OnClick(event => { 

        let cardArray = view.getCardArray();

        if (!cardArray[0].isEditable()) {
            header.setTextBig('Edit Client');
            header.setColor(App.COLOR_SELECT); 
            cardArray.forEach(card => card.setEditable());           
        }
        else {
            header.setTextBig('Select Client'); 
            header.setColor(App.COLOR_SUCCESS);
            cardArray.forEach(card => card.setSelectable());            
        }     
    });

    header.button3_OnClick(event => loadNewClient());

    //
    // 4. Bind data to header
    //   
    header.setTextSmall( 'Ordbase');
    header.setTextBig( 'Select Client');
    header.setColor(App.COLOR_SUCCESS);
    header.button0_setIcon(App.ICON_SQUARE);
    header.button1_setIcon(App.ICON_TRASH);
    header.button2_setIcon(App.ICON_PENCIL);    
    header.button3_setIcon(App.ICON_PLUS);


    //
    // 5. Insert new view into DOM
    //
    App.switchView(view);
}

//
// @function __async__deleteCard
//  @note todo
//
function __async__client_getArray({ success = force('success')}) {

    Route.client_get().then(clientArray => {
        if(clientArray.length > 0)  
            success(clientArray);
        else
            App.HEADER.flashError('There are no clients to show');
    })
    .catch(reason => console.error('Error:', reason));
}

//
// @function __async__deleteCard
//  @note todo
//
function __async__client_delete({ clientKey = force('clientKey'),
                                success = force('success')  }) {

    Route.client_delete({clientKey: clientKey})
    .then(res => {

        if (res.status == App.HTTP_OK) {
            success();
        }
        else {
            App.HEADER.flashError(`Code ${res.status}: Card not deleted`);
        }
        loadSelectClient();
    })
    .catch(reason => console.error('Error:', reason));
}