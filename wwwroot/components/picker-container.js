'use strict';

import  html  from './picker-container.html';

const UP = 38;
const DOWN = 40;

export class Component_ContainerPicker extends HTMLElement { 
  
    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = html;

        this._lastSelectedItem = null;
        this.__template__containerButton = this._root.getElementById('template-button');


        // Navigation with keyboard
        this.addEventListener('keydown', e => {
            if (e.keyCode == UP) {
                let activeElement = this._root.activeElement;
                if (activeElement.previousElementSibling != null){
                    activeElement.previousElementSibling.focus();
                }
            }
            else if (e.keyCode == DOWN) {

                let activeElement = this._root.activeElement;
                if (activeElement.nextElementSibling != null){
                    activeElement.nextElementSibling.focus();
                }
            } 
        }); 
    }

    makeItem({key, text, onclick})  {

        let fragment = this.__template__containerButton.content.cloneNode(true);
        let button   = fragment.querySelector('button');

        button.setAttribute('id', key);
        button.innerHTML = text;

        button.addEventListener('click', e => {

            button.classList.add('selected');
            this._lastSelectedItem.classList.remove('selected');
            this._lastSelectedItem = button;
            
            onclick(e);
        });

        this._root.getElementById('div-container-buttons').appendChild(button);
    }

    getContainerKey() {
        return this._lastSelectedItem.getAttribute('id');
    }

    setDefaultItem() {
        let defaultItem = this._root.getElementById('div-container-buttons').firstChild;
        defaultItem.classList.add('selected');
        this._lastSelectedItem = defaultItem;
    }

    setHeaderText(text)   { 
        this._root.getElementById('div-container-header').innerHTML = text;
    }
}
customElements.define('component-picker-container', Component_ContainerPicker);
