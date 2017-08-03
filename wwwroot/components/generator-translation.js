'use strict';
import html from './generator-translation.html';

const UP    = 38;
const DOWN  = 40;
const ESC   = 27;
const ENTER = 13;
const TAB   = 9;
const BACKSPACE = 8;

export class Component_TranslationGenerator extends HTMLElement {

    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = html;

        this._generatedItems = this._root.getElementById('div-generated-items');
        this._input  = this._root.querySelector('input');
        this._button = this._root.getElementById('button-generate');
        this._faIcon = this._button.querySelector('i');


        this._lastOpenCard = null;
        this._generateHandler  = (item) => { console.log('Default OnGenerate...') }

        //
        // Event click
        //
        this._button.addEventListener('click',  e => { 

            if (this._input.style.display === 'block') {
                this.deactivateInput();

                if(this._input.value != ''){
                    this._input.value = '';
                }
            }
            else {
                this.activateInput();                
            }
        });


        //
        // Navigate up and down component-items with arrow keys
        //
        this.addEventListener('keydown', e => {
            if (e.keyCode == UP) {
                let activeElement = this._root.activeElement;
                if (activeElement.parentElement == this._generatedItems && activeElement.previousElementSibling != null){
                    activeElement.previousElementSibling.focus();
                    
                }
            }
            else if (e.keyCode == DOWN) {

                let activeElement = this._root.activeElement;
                if (activeElement.parentElement == this._generatedItems && activeElement.nextElementSibling != null){
                    activeElement.nextElementSibling.focus();
                }
            } 
        });
    }

    deactivateInput() {
        this._input.style.display = 'none';
        this._button.classList.remove('cancel');
        this._faIcon.classList.remove('fa-times');                 
        this._faIcon.classList.add('fa-plus');
        this._button.focus();
    }

    activateInput() {
        this._input.style.display = 'block';
        this._faIcon.classList.remove('fa-plus');
        this._faIcon.classList.add('fa-times'); 
        this._button.classList.add('cancel');   
        this._input.focus();
    }

    OnGenerate(handler) {
        this._generateHandler = handler;

        this._input.addEventListener('keydown', e => {
            if (e.keyCode === ENTER) {

                if(this._input.value != '') {
                    this._generateHandler.apply(this, e);
                    this._input.value = '';
                }
            }
            else if (e.keyCode === ESC) {
                this.deactivateInput();
            }
        });
    }

    getInputValue() {
        return this._input.value;
    }
    
    setButtonHeight(height) {
        this._button.style.height = `${height}px`;
        this._input.style.height  = `${height-10}px`
    }

    addCard(card) {
        card.classList.add('generated')
        this._root.getElementById('div-generated-items').appendChild(card);


        card.addEventListener('click', e => {
            if (this._lastOpenCard != null && this._lastOpenCard != card) {
                this._lastOpenCard.close();
                this._lastOpenCard._clickHandler = this._lastOpenCard._openHandler;
            }
            this._lastOpenCard = card;
        })
    }

    clearItems() {
        this._root.getElementById('div-generated-items').innerHTML = '';
    }

    focus() {
        if(this._generatedItems.firstElementChild != null)
            this._generatedItems.firstElementChild._button.focus();
    }

    getCardArray() {
        console.log(this._root.getElementById('div-generated-items'))
        return [].slice.apply(this._root.getElementById('div-generated-items').children);
    }
}

customElements.define('component-generator-translation', Component_TranslationGenerator);