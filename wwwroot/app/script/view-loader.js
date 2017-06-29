'use strict';

//
// @module load
//
(() => {

    function swapView(view) {
        document.body.innerHTML = '';
        document.body.appendChild(view);
    }   

    let load = {};

    //
    // @function client-selector-view
    //
    load.clientSelectorView = function() {
        let view = document.createElement('client-selector-view');
        swapView(view);
        let main = view.querySelector('main');

        API
        .client.getAll()
        .then(data => {

            data.forEach(element => {
                let button = document.createElement('button');
                
                button.innerHTML = element.name;
                button.onclick = (event) => load.translationSelectorView(element.name);

                main.appendChild(button);
            });
        })
        .catch(reason => console.error('Error:', reason));
    }

    //
    // @function translation-selector-view
    //
    load.translationSelectorView = function(client) {

        let view = document.createElement('translation-selector-view');
        swapView(view);

        let containerList = document.querySelector('#container-list'); 
        let main         = document.querySelector('main');

        //
        // Get all container names
        //
        API
        .container.getOnClient(client)
        .then(data => {

            data.forEach(containerName => {
                let button = document.createElement('button');
                button.innerHTML = containerName;
                button.id = 'button-' + containerName;
                button.onclick = (event) => button.classList.toggle('selected'); 

                containerList.appendChild(button);
            });      
        })
        .catch(reason => console.error('Error:', reason));

        //
        // Get all translation groups 
        //  @doc template literals - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
        //
        API
        .translation.getGroupOnClient(client)
        .then(data => {
            data.forEach(translationGroup => {
                let button = document.createElement('button');
                button.innerHTML = translationGroup.key;
                button.onclick = (event) => load.translationEditorView(client, translationGroup.key); 
                
                Object.keys(translationGroup.isComplete)
                .forEach((key, value) => {

                    if (value == true) 
                        button.innerHTML += ` <span>${key}: OK</span>`;
                    else
                        button.innerHTML += ` <span>${key}: NO</span>`;
                });

                main.appendChild(button);
            });
        })
        .catch(reason => console.error('Error:', reason));

        view.querySelector('#back-button').onclick = (event) => load.clientSelectorView();
    }

    //
    // @function translation-editor
    //
    load.translationEditorView = function(client, key) {
        
        let view = document.createElement('translation-editor-view');
        swapView(view);
        let containerList = document.querySelector('#container-list'); 

        //
        // Get all container on client
        //
        API
        .container.getOnClient(client)
        .then(data => {

            data.forEach(containerName => {
                let button = document.createElement('button');
                button.innerHTML = containerName;
                button.id = 'button-' + containerName;
                button.onclick = (event) => button.classList.toggle('selected'); 

                containerList.appendChild(button);
            });      

            return API.container.getOnKey(client, key)
        })
        .then(data => {
            data.forEach(selectedContainer => {
                let button =  document.querySelector('#button-' + selectedContainer);
                if (button) {
                   button.classList.add('selected');
                }
            });
        })
        .catch(reason => console.error('Error:', reason));

        //
        // Get data about translations with the same key
        //
        API
        .translation.getOnKey(client, key)
        .then(data => {
            let main = document.querySelector('main');
            console.log('key:', key)
            main.querySelector('#input-key').setAttribute('value', key);
            
            data.forEach(translation => {
                console.log(translation);
                main.innerHTML += `<label for="input-${translation.languageKey}">  ${translation.languageKey} </label><br>`;
                main.innerHTML += `<input  id="input-${translation.languageKey}"  type="text" value="${translation.text}"><br>`;
                
                main.innerHTML += `<label for="input-${translation.languageKey}-approved"> Approved? </label><br>`;
                main.innerHTML += `<input  id="input-${translation.languageKey}-approved" type="checkbox" name="done"><br><br>` 
            })
        })
        .catch(reason => console.error('Error:', reason));

        view.querySelector('header h1').innerHTML = `Ordbase - Edit ${key} translation`;
        view.querySelector('#back-button').onclick = (event) => load.translationSelectorView(client);
    }

    window.addEventListener('load', () => load.clientSelectorView());
})();