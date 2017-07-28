'use strict';

import * as App from './App.js';
import * as Route from '../lib/Route.js';
import { force } from '../lib/Util.js'; 

import { View_SelectTranslation } from '../views/select-translation.js';

import { Component_SelectButton }    from '../components/button-select.js';
import { Component_TranslationCard } from '../components/card-translation.js';
import { Component_ItemGenerator }   from '../components/item-generator.js';

import { loadSelectClient }    from './loadSelectClient.js';

//
// @function loadSelectTranslation
//
export function loadSelectTranslation (clientKey) {
    
    //
    // 0. Create data
    //
    const view             = new View_SelectTranslation;
    const button           = new Component_SelectButton;
    const generator        = new Component_ItemGenerator;
    const translationArray = new Array();    
    const languageArray    = new Array();
    const buttonArray      = new Array();
    const cardArray        = new Array();

    //
    // 1. Async calls
    //
    __async__getDefaultLanguages({ languageArray: languageArray, clientKey: clientKey });
    __async__generateSelectButtons({view: view, generator: generator, buttonArray: buttonArray, cardArray: cardArray, clientKey: clientKey});
    __async__generateTranslationCards({view: view, generator: generator, cardArray: cardArray, clientKey: clientKey, containerKey: 'all'});

    //
    // 2. Setup header
    //
    App.HEADER.setTextSmall         ( 'Ordbase');
    App.HEADER.setTextBig       ( `Select Translation`);
    App.HEADER.setButtonIconLeft  ( App.ICON_BARS);
    App.HEADER.setButtonIconRight0( App.ICON_NONE);
    App.HEADER.setButtonIconRight1( App.ICON_TRASH);
    App.HEADER.setButtonIconRight2( App.ICON_ARROW_LEFT);    

    App.HEADER.getButtonLeft().onclick   = App.defaultHandler;
    App.HEADER.getButtonRight0().onclick = App.defaultHandler;    
    App.HEADER.getButtonRight1().onclick = e => {
            
        cardArray.forEach(card => {
            card.toggleDeleteable();
        })

        if(cardArray[0].isDeleteable())
            App.HEADER.textSmall = 'Delete Translation';
        else {
            App.HEADER.textSmall = 'Select Translation'; 
        }               
    }
    App.HEADER.getButtonRight2().onclick = e => loadSelectClient();

    //
    // 3. Component_SelectButton
    //
    button.setId('all');
    button.setText('All containers');
    button.setSelected(true);

    button.OnClick(() => {

        view.getActiveContainerButton().setSelected(false);
        button.setSelected(true);
        view.setActiveContainerButton(button);

        generator.clearItems();
        generator.deactivate();
        cardArray.length = 0;
        __async__generateTranslationCards({view: view, generator: generator, cardArray: cardArray, clientKey: clientKey, containerKey: button.getId()});
    });

    //
    // 4.Component_ItemGenerator
    //
    generator.OnGenerate(() => {
        let containerKey   = view.getActiveContainerButton().getId();
        let translationKey = generator.getValue();
       
        let translationArray = new Array();
        languageArray.forEach(language => {
        
            translationArray.push({
                clientKey : clientKey,
                languageKey : language,
                containerKey : containerKey,
                key : translationKey,
                text : 'default',
                isComplete : false,
            });
        });

        __async__submitNewTranslationGroup({view: view, generator: generator, cardArray: cardArray, clientKey: clientKey, translationKey: translationKey, translationArray: translationArray});
    });
    generator.setButtonHeight(60);
    generator.deactivate();

    //
    // 5. Insert components into view, and add view to DOM
    //
    view.setTranslationGenerator(generator);
    view.setActiveContainerButton(button);
    view.addContainerButton(button);
    App.switchView(view);
}

function makeTranslationCard({
             groupMeta = force('groupMeta'),
             view = force('view') 
    }) {

    let card = new Component_TranslationCard;
    card.setTranslationKey(groupMeta.key);

    groupMeta.isComplete.forEach(keyComplete => {
        card.makeLanguagekeyComplete(keyComplete.key, keyComplete.value);
    })

    card.selectHandler = () => { 
        let activeCard = view.getActiveTranslationCard();

        if (activeCard) {
            activeCard.setSelected(false);
        }
        
        card.setSelected(true);
        view.setActiveTranslationCard(card); 
    }

    card.deleteHandler = () => { 
        __async__deleteTranslationGroup({clientKey: groupMeta.clientKey, containerKey: groupMeta.containerKey, translationKey: groupMeta.key});
        card.parentElement.removeChild(card);
    }            
    card.button.onclick = card.selectHandler;

    return card;
}


//
// ASYNC GET CALLS
//
function __async__getDefaultLanguages({
            clientKey     = force('clientKey'), 
            languageArray = force('languageArray'),
    }){
        
        Route.client_getDefaultLanguages(clientKey).then(resLanguageArray => {
            resLanguageArray.forEach(language => {
                languageArray.push(language);
                console.log(language);
            })
        })
        .catch(err => console.error('Error:', err));      
    }

function __async__generateSelectButtons({
            view        = force('view'), 
            generator   = force('generator'),  
            buttonArray = force('buttonArray'), 
            cardArray   = force('cardArray'), 
            clientKey   = force('clientKey')
    }) {


    Route.client_getDefaultContainers(clientKey).then(containerArray => {        
        
        containerArray.forEach((container, i) => {

            let button = new Component_SelectButton;

            button.setId( container);
            button.setText( container);
            button.setSelected(false)

            button.OnClick(() => {
                view.getActiveContainerButton().setSelected(false);
                button.setSelected(true);
                view.setActiveContainerButton(button);

                generator.clearItems();
                generator.activate();

                cardArray.length = 0;
                __async__generateTranslationCards({view: view, generator: generator, cardArray: cardArray, clientKey: clientKey, containerKey: button.getId()});
            });
            
            buttonArray.push(button)
            view.addContainerButton(button);
        });
    })
}


function __async__generateTranslationCards({
            generator    = force('generator'), 
            cardArray    = force('cardArray'),
            view         = force('view'),              
            clientKey    = force('clientKey'), 
            containerKey = force('containerKey')
    }) {

    Route.translation_getGroupMetaOnContainer(clientKey, containerKey).then(groupMetaArray => {

        groupMetaArray.forEach((groupMeta, i) => {
            let card = makeTranslationCard({groupMeta: groupMeta, view: view});
            cardArray.push(card);
            generator.addItem(card);
        });    
    })
    .catch(err => console.error('Error:', err));  
}

//
// ASYNC CREATE DELETE
//
function __async__submitNewTranslationGroup({
            generator        = force('generator'),
            cardArray        = force('cardArray'), 
            view             = force('view'),             
            clientKey        = force('clientKey'), 
            translationKey   = force('translationKey'),
            translationArray = force('translationArray'),            
    }) {

    Route.translation_createMany(translationArray).then(res => {

        generator.setInputValue('');
        return Route.translation_getGroupMeta(clientKey, translationKey);
    })
    .then(groupMeta => {
        let card = makeTranslationCard({groupMeta: groupMeta, view: view});
        cardArray.push(card);
        generator.addItem(card);
    })
    .catch(err => console.error(err));
}
    
function __async__deleteTranslationGroup({
            clientKey      = force('clientKey'), 
            containerKey   = force('containerKey'), 
            translationKey = force('translationKey'),
    }) {
    Route.translation_deleteGroup(clientKey, containerKey, translationKey).catch(err => console.error('Error:', err));
}