'use strict';
import html from './button-select.html';

export class Component_SelectButton extends HTMLElement { 
   
    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;

        this.button = this.root.querySelector('button');
    }

    OnClick(handler){
        this.button.addEventListener('click',  e => {
            console.log('dfdfs')
            handler.apply(this, e)
        });
    }

    setId(id)     {  this.button.setAttribute('id', `${id}`);  }
    setText(text) {  this.button.innerHTML = text; }

    getId() { return this.button.getAttribute('id'); }

    toggleSelected() { this.button.classList.toggle('selected'); }

    setSelected(selected) { 
        if (selected) {
            this.button.classList.add('selected');
        }
        else {
            this.button.classList.remove('selected');  
        }         
    }



    isSelected() {
        return this.button.classList.contains('selected');
    }

    focus() { this.button.focus(); }
    blur()  { this.button.blur();  }
}
customElements.define('component-button-select', Component_SelectButton);