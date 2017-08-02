'use strict';

import * as App from './App.js';
import * as Route from '../lib/Route.js';
import { force } from '../lib/Util.js'; 

import { View_SelectTranslation } from '../views/select-translation.js';

import { Component_TranslationCard }      from '../components/card-translation.js';
import { Component_TranslationGenerator } from '../components/generator-translation.js';
import { Component_ContainerPicker }      from '../components/picker-container.js';

import { loadSelectClient }    from './loadSelectClient.js';


//
// @function loadSelectTranslation
//  @note @todo
//
export function loadSelectTranslation (clientKey) {
    
    //
    // 0. Init components
    //
    const header           = App.HEADER;
    const view             = new View_SelectTranslation;
    const languageKeyArray = new Array();
    const generator        = new Component_TranslationGenerator;
    const picker           = new Component_ContainerPicker;
    const cardPrototype    = new Component_TranslationCard;
    
    //
    // 1. Async calls
    //
    // Populate languageArray
    __async__client_getLanguageKeyArray({ 
        clientKey: clientKey,
        success: _languageKeyArray => {
            languageKeyArray.push.apply(languageKeyArray, _languageKeyArray);
        }  
    });

    // Populate picker and set up default item
    __async__client_getContainerKeyArray({ 
        clientKey: clientKey, 
        success: containerKeyArray => {
            
            // Populate generator with translation cards
            __async__translation_getGroupMetaArray({ 
                clientKey: clientKey, 
                containerKey: containerKeyArray[0],
                success: groupMetaArray => {  
                    groupMetaArray.forEach(groupMeta => {
                        let card = makeTranslationCard({ cardPrototype: cardPrototype,  groupMeta: groupMeta})
                        generator.addCard(card);
                    });
                    generator.focus();    
                }
            });

            containerKeyArray.forEach(containerKey => {

                picker.makeItem({
                    key: containerKey, 
                    text: containerKey,

                    // On picker-item click, reload all translation cards
                    onclick: e => {

                        __async__translation_getGroupMetaArray({
                            clientKey: clientKey, 
                            containerKey: picker.getContainerKey(),
                            success: groupMetaArray => {
                                generator.clearItems();
                                groupMetaArray.forEach(groupMeta => {
                                    let card = makeTranslationCard({ cardPrototype: cardPrototype, groupMeta: groupMeta});
                                    generator.addCard(card);      
                                }) 
                            },
                        });
                    },
                });
            });
            picker.setDefaultItem();
        }
    });
    

    //
    // 2. Hook up Translation card event handlers
    //
    cardPrototype.setEventHandlers({
        onopen: (card, e) => { 

            // Generate fieldsets
            __async__translation_getGroup({ 
                clientKey:     clientKey, 
                containerKey:  picker.getContainerKey(), 
                translationKey: card.getTranslationKey(),
                success: group => {
                    group.items.forEach(item => {
                        console.log('ITEM!!',item, item.languageKey);
                        card.makeFieldset({languageKey: item.languageKey, text:  item.text, isComplete: item.isComplete})
                    });

                    card.open();                        
                } 
            })
            
        },
        ondelete:(card, e) => { 
            // Delete translation
            __async__translation_delete({ 
                clientKey:      clientKey, 
                containerKey:   picker.getContainerKey(), 
                translationKey: card.getTranslationKey(),
                success: () => {
                    card.delete();
                    generator.getCardArray().forEach(_card => _card.close()); 
                }
            });
        },
        onsubmit: (card, e) => {         

            let translationArray = new Array();
            let formData = card.getFormData();
            console.log(formData);
            formData.fieldsetArray.forEach(fieldset => {
            
                translationArray.push({
                    clientKey    : clientKey,
                    languageKey  : fieldset.languageKey,
                    containerKey : picker.getContainerKey(),
                    key          : formData.translationKey,
                    text         : fieldset.text,
                    isComplete   : fieldset.isComplete,
                });
            });
            
            __async__translation_updateArray({ translationArray: translationArray,
               
                success: () => {
                    //
                    // @note Here I am updating ALL cards withing a container, even though 
                    //       only 1 card has been updated. It would be better to JUST updated that card.
                    //       The reason I dont do that yet, was that it was faster to just copy paste existing code snippet. - JSolsvik 02.08.17
                    //
                    generator.clearItems();

                    __async__translation_getGroupMetaArray({ 
                        clientKey: clientKey, 
                        containerKey: picker.getContainerKey(),
                        success: groupMetaArray => {  
                            groupMetaArray.forEach(groupMeta => {
                                let card = makeTranslationCard({ cardPrototype: cardPrototype,  groupMeta: groupMeta})
                                generator.addCard(card);
                            });
                            generator.focus();
                            generator.deactivateInput();
                        }
                    });
                }
            });
        },
    });

    //
    // 2. Setup header events
    //
    header.button0_OnClick(App.defaultHandler);
    header.button1_OnClick(App.defaultHandler);    
    header.button2_OnClick( e => {
        
        let cardArray = generator.getCardArray();

        if(cardArray.length > 0) {
            if (!cardArray[0].isDeleteable()) {
                header.setTextBig('Delete Translation');
                cardArray.forEach(card => { 
                    card.close(); 
                    card.setDeleteable();
                });
            }
            else {
                header.setTextBig('Select Translation');
                cardArray.forEach(card => card.setOpenable());            
            }
        }                
    });
    header.button3_OnClick( e => loadSelectClient());


    //
    // 2. Setup header data
    //
    header.setTextSmall( 'Ordbase');
    header.setTextBig( `Select Translation`);

    header.button0_setIcon( App.ICON_BARS);
    header.button1_setIcon( App.ICON_NONE);
    header.button2_setIcon( App.ICON_TRASH);
    header.button3_setIcon( App.ICON_ARROW_LEFT);    


    //
    // 4.Component_TranslationGenerator
    //
    generator.OnGenerate( e => {
       
        let translationArray = new Array();

        languageKeyArray.forEach(languageKey => {
        
            translationArray.push({
                clientKey : clientKey,
                languageKey : languageKey,
                containerKey : picker.getContainerKey(),
                key : generator.getInputValue(),
                text : 'default',
                isComplete : false,
            });
        });

        __async__translation_createArray({ 
            translationArray: translationArray,
            success: (groupMeta) => {
                let card = makeTranslationCard({cardPrototype: cardPrototype, groupMeta: groupMeta}) 
                generator.addCard(card);
            } 
        });
    });

    //
    // 5. Insert components into view, and add view to DOM
    //
    view.setTranslationGenerator(generator);
    view.setContainerPicker(picker);
    App.switchView(view);
}


//
// @function makeTranslationCard
//
function makeTranslationCard({ cardPrototype = force('cardPrototype'), 
                               groupMeta = force('groupMeta')}) {
                                    
    let card = new Component_TranslationCard;

    card.setTranslationKey(groupMeta.key);
    
    groupMeta.items.forEach(item => {
        card.makeLanguagekeyComplete(item.languageKey, item.isComplete);
    });

    card.setEventHandlers(cardPrototype.getEventHandlers());
    return card;
}

//
// @function __async__getLanguageKeyArray
//
function __async__client_getLanguageKeyArray({ clientKey = force('clientKey'), 
                                               success   = force('success') }){
        
    Route.client_getLanguages({clientKey: clientKey}).then(languageKeyArray => {
        success(languageKeyArray);
    })
    .catch(err => console.error('Error:', err));      
}


//
// @function __async__translation_getGroup
//
function __async__translation_getGroup({ success       = force('success'),
                                         clientKey     = force('clientKey'),
                                         containerKey  = force('containerKey'),
                                         translationKey = force('translationKey'), }) {

    Route.translation_getGroup({clientKey: clientKey,
                                containerKey: containerKey,
                                translationKey: translationKey}).then((groupArray) => {
      if (groupArray.length > 0) {
            let group = groupArray[0];
            success(group);
      } else {
          App.HEADER.flashError('Pick a container to enable editing!');
      }

    }).catch(err => console.error('Error: ', err));
}


//
// @function __async__getContainerKeyArray 
//
function __async__client_getContainerKeyArray ({  success  = force('success'),
                                                  clientKey   = force('clientKey') }) {

    Route.client_getContainers({clientKey: clientKey}).then(containerKeyArray => {        
        success(containerKeyArray);
    })
    .catch(err => console.error('Error:', err));      
}

//
// @function __async__translation_getGroupMetaArray
//
function __async__translation_getGroupMetaArray({ success      = force('success'),
                                                  clientKey    = force('clientKey'), 
                                                  containerKey = force('containerKey') }) {

    Route.translation_getGroupMeta({clientKey:    clientKey, 
                                    containerKey: containerKey}).then(groupMetaArray => {
        success(groupMetaArray);
    })
    .catch(err => console.error('Error:', err));  
}

//
// @function __async__translation_getGroupMeta
//
function __async__translation_getGroupMeta({ success      = force('success'), 
                                             clientKey   = force('clientKey'),
                                             containerKey = force('containerKey'),
                                             translationKey = force('translationKey')}) {

    Route.translation_getGroupMeta(arguments[0]).then(groupMetaArray => {
        let groupMeta = groupMetaArray[0];
        success(groupMeta)
    })
    .catch(err => console.error('Error:', err));      
}

//
// @function __async__translation_createArray
//
function __async__translation_createArray({ success         = force('success'), 
                                            translationArray = force('translationArray')}) {

    Route.translation_createArray({ translationArray: translationArray }).then(res => {

        if(res.status != App.HTTP_CREATED) {
            App.HEADER.flashError(`${res.status}: Was not able to create new translations...`);
            throw new Error('translation_createArray(): ', res.status);
        }

        return Route.translation_getGroupMeta({ clientKey: translationArray[0].clientKey, 
                                                containerKey: translationArray[0].containerKey, 
                                                translationKey: translationArray[0].key }); 
    })
    .then(groupMetaArray => {
        let groupMeta = groupMetaArray[0];
        success(groupMeta);
    })
    .catch(err => console.error(err));
}

//
// @function __async__translation_delete
//

function __async__translation_updateArray({ success= force('success'), translationArray = force('translationArray') }) {

    Route.translation_updateArray({ translationArray: translationArray, 
                                    clientKey: translationArray[0].clientKey, 
                                    containerKey: translationArray[0].containerKey, 
                                    translationKey: translationArray[0].key })
    .then(res => {
        console.log('translation_updateArray():', res.status);
        
        if (App.HTTP_UPDATED) {
            success();
        } else {
            App.HEADER.flashError('Code ${res.status}: Something went wrong while updating the translations..');
        }
    })
    .catch(err => console.error('Error:', err));                                
}


//
// @function __async__translation_delete
//
function __async__translation_delete({  success        = force('success'),
                                        clientKey      = force('clientKey'), 
                                        containerKey   = force('containerKey'), 
                                        translationKey = force('translationKey'), }) {

    Route.translation_deleteGroup({clientKey: clientKey, 
                                   containerKey: containerKey, 
                                   translationKey: translationKey})
    .then(res => {

        console.log('translation_deleteGroup():', res.status);
        
        if (res.status == App.HTTP_CREATED) {
            success();
        }
        else {
            App.HEADER.flashError(`${res.status}: Was not able to delete card...`);
        }        
    }).catch(err => console.error('Error:', err));
}