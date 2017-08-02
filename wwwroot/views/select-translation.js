'use strict';
import html from './select-translation.html';

const UP = 38;
const DOWN = 40;

export class View_SelectTranslation extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;

        this.activeContainerButton = null;
        this.activeTranslationCard = null; 
        

        //
        // Navigation
        //
        this.addEventListener('keydown', e => {
            if (e.keyCode == UP) {
                let activeElement = this.root.activeElement;
                if (activeElement.previousElementSibling != null){
                    activeElement.previousElementSibling.focus();
                    
                }
            }
            else if (e.keyCode == DOWN) {
                let activeElement = this.root.activeElement;
                if (activeElement.nextElementSibling != null){
                    activeElement.nextElementSibling.focus();
                }
            } 
        }); 
    }

    setContainerPicker(picker) {
        this.root.getElementById('select-translation-menu').appendChild(picker);        
    }

    setTranslationGenerator(generator) {
        this.root.getElementById('select-translation-table').appendChild(generator);
    }
}
customElements.define('view-select-translation', View_SelectTranslation);