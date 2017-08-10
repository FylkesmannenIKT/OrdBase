'use strict';
import html from './generator-container.html';

const UP    = 38;
const DOWN  = 40;
const ESC   = 27;
const ENTER = 13;

export class Component_ContainerGenerator extends HTMLElement {
    
    //
    // PUBLIC
    //
    getContainerKeyArray() {
        return [].slice.apply(this._generatedItems.children)
                        .filter(item => { return item.classList.contains('selected'); })
                        .map( item => { return item.innerHTML; });
    }

    makeItem({key = '', selected = true}) {
        let fragment = this._buttonTemplate.content.cloneNode(true);
        let button = fragment.querySelector('button');
        
        button.setAttribute('id', key);
        button.innerHTML = key;    
        if (selected)
            button.classList.add('selected');
        
        button.addEventListener('click', e => {
            this._deactivateInput();            
            button.classList.toggle('selected');
        });

        this._generatedItems.appendChild(fragment);
    }
    
    //
    // PRIVATE 
    //
    constructor() {
        super();
        let root = this.createShadowRoot();
        root.innerHTML  = html;
        this._buttonTemplate = root.getElementById('template-item');

        this._generatedItems = root.getElementById('div-generated-items')
        this._input  = root.getElementById('generator-input');
        this._button = root.getElementById('button-activate');
        this._faIcon = this._button.querySelector('i');

        //
        // Event click
        //
        this._button.addEventListener('click',  e => { 

            if (this._input.style.display === 'block') {
                this._deactivateInput();

                if(this._input.value != ''){
                    this._input.value = '';
                }
            }
            else {
                this._activateInput();                
            }
        });

        //
        // Input key handler
        //
        this._input.addEventListener('keydown', e => {
            
            if (e.keyCode === ENTER) {

                if(this._input.value != '') {
                    this._generateItem();
                    this._input.value = '';
                }
            }
            else if (e.keyCode === ESC) {
                this._deactivateInput();
            }
        });

        //
        // Navigate up and down component-items with arrow keys
        //
        this.addEventListener('keydown', e => {
            if (e.keyCode == UP) {
                let activeElement = root.activeElement;
                if (activeElement.parentElement == this._generatedItems && activeElement.previousElementSibling != null){
                    activeElement.previousElementSibling.focus();
                }
            }
            else if (e.keyCode == DOWN) {

                let activeElement = root.activeElement;
                if (activeElement.parentElement == this._generatedItems && activeElement.nextElementSibling != null){
                    activeElement.nextElementSibling.focus();
                }
            } 
        });
    }

    _deactivateInput() {
        this._input.style.display = 'none';
        this._button.classList.remove('cancel');
        this._faIcon.classList.remove('fa-times');                 
        this._faIcon.classList.add('fa-plus');
    }

    _activateInput() {

        this._input.style.display = 'block';
        this._faIcon.classList.remove('fa-plus');
        this._faIcon.classList.add('fa-times'); 
        this._button.classList.add('cancel');   
        
        this._input.focus();
    }

    _generateItem() {
        let fragment = this._buttonTemplate.content.cloneNode(true);
        let button = fragment.querySelector('button');
        
        button.setAttribute('id', this._input.value);
        button.innerHTML = this._input.value;    
        button.classList.add('selected');

        button.addEventListener('click', e => {
            this._deactivateInput();
            button.classList.toggle('selected');
        });

        this._generatedItems.appendChild(fragment);
    }

    focus() {
        if(this._generatedItems.firstElementChild != null)
            this._generatedItems.firstElementChild.focus();
        else 
            this._button.focus();
}
}

customElements.define('component-generator-container', Component_ContainerGenerator);