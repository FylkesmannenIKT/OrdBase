'use strict';

import  html  from './flipper-language.html';

const UP = 38;
const DOWN = 40;

export class Component_LanguageFlipper extends HTMLElement { 

    //
    // PUBLIC
    //
    makeItem({key, text, selected}){

        let fragment = this._buttonTemplate.content.cloneNode(true);
        let button   = fragment.querySelector('button');
        button.setAttribute('id', key);
        button.innerHTML = text;

        if (selected) {
            button.classList.add('selected');
            this._divUp.appendChild(button);
        }
        else {
            this._divDown.appendChild(button);
        }

        button.addEventListener('click', e => {

            if (button.parentElement.id === 'div-down') {
                this._flipUp(button);
            } 
            else if (button.parentElement.id === 'div-up') {
                this._flipDown(button);
            }

            button.focus();
        })
    }

    selectItem(key) {
        this._flipUp(this._root.getElementById(key));
    }

    setHeaderUp(text)   { 
        this._root.getElementById('div-up-header').innerHTML = text;
    }
    
    setHeaderDown(text) { 
        this._root.getElementById('div-down-header').innerHTML = text;
    }

    getLanguageKeyArray() {
        return [].slice.call(this._divUp.children).map(button => {
            return button.getAttribute('id');
        });
    }

    //
    // PRIVATE
    //
    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = html;
        this._buttonTemplate = this._root.getElementById('template-button');

        this._divUp   = this._root.getElementById('div-up');
        this._divDown = this._root.getElementById('div-down');

        //
        // Naviagte
        //
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

    _flipUp(item) {
        item.classList.add('selected');        
        this._divDown.removeChild(item);
        this._divUp.appendChild(item);
    }

    _flipDown(item) {
        item.classList.remove('selected');        
        this._divUp.removeChild(item);
        this._divDown.appendChild(item);
    }
    
}
customElements.define('component-flipper-language', Component_LanguageFlipper);
