'use strict';
import html from './item-generator.html';

const ESC   = 27;
const ENTER = 13;
const TAB   = 9;

export class Component_ItemGenerator extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;

        this.input  = this.root.querySelector('input');
        this.button = this.root.getElementById('button-generate');
        this.faIcon = this.button.querySelector('i');

        this.generateFunction = () => { return document.createElement('div'); }

        //
        // Event click
        //
        this.button.addEventListener('click',  e => { 

            this.button.classList.toggle('cancel');
            this.faIcon.classList.toggle('fa-plus');
            this.faIcon.classList.toggle('fa-times'); 
            
            if(this.input.style.display === 'block')
                this.input.style.display = 'none';
            else {
                this.input.style.display = 'block';
                this.input.focus();
            }
        });

        //
        // Event focusout
        //
        this.input.addEventListener('focusout', e => {
            this.generateItem();
            this.input.style.display = 'none';
            this.button.classList.remove('cancel');
            this.faIcon.classList.add('fa-plus');
            this.faIcon.classList.remove('fa-times');            
        });

        //
        // Event keyup
        //
        this.input.addEventListener('keydown', e => {
            if (e.keyCode === ENTER) {  // ENTER or TAB
                this.generateItem();
            }   
        });
    }

    generateItem() {
        if (this.input.value != '') {
            // 1. Create item and insert in proper place
            const item = this.generateFunction.apply(this);
            
            this.addItem(item);
            this.input.value = '';
        }
    }

    destroyItem(item) {

        if (item.nextSibling.classList.contains('generated')) {
            item.nextSibling.focus();
        }
        else if (item.previousSibling.nodeName != '#text') {
            item.previousSibling.focus();       
        }
        else {         
            this.button.focus();
        }
        this.root.removeChild(item);
    }


    getValue() {
        return this.input.value;
    }

    setGenerateFunction(func) {
        this.generateFunction = func; 
    }

    getItems() {
        return this.root.querySelectorAll('.generated');
    }

    addItem(item) {
        item.classList.add('generated')
        this.root.insertBefore(item, this.input);
        item.addEventListener('click', e => this.destroyItem(item));
    }
}

customElements.define('component-item-generator', Component_ItemGenerator);