'use strict';

import * as api from '../../library/api.js';

// Cache static element references
const main         = document.getElementById('ordbase-main');    
const header       = document.getElementById('ordbase-header');

//
// @function OnloadViewClientSelector
//
export function loadSelectClient() {

    // Create elements
    const selectClient = document.createElement('ordbase-select-client');

    // Setup header
    header.textBig          = 'Ordbase';
    header.textSmall        = 'Select Client';
    header.buttonIconLeft   = ICON_HEADER_SQUARE;
    header.buttonIconRight1 = '';    
    header.buttonIconRight2 = ICON_HEADER_PLUS;

    // Dependency injection
    header.buttonHandlerLeft   = {};
    header.buttonHandlerRight1 = {};      
    header.buttonHandlerRight2 = {};   
    selectClient.buttonHandler = {};

    // Batch-update DOM
    main.innerHTML = ''; 
    header.DOMUpdate();
    main.appendChild(selectClient);              
    
    // @ajax - Fetch client data from server
    api.client.getAll().then(clientObjects => {             
                
                            // Inject data into view                
                            selectClient.clients = clientObjects; 
                            
                            // Update DOM again
                            selectClient.DOMUpdate();
                        })
                        .catch(reason => console.error('Error:', reason))
}
