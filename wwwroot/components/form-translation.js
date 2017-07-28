'use strict';
import html from './form-translation.html';

export class Component_TranslationForm extends HTMLElement {
    
    constructor(){
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;
    }
}

customElements.define('component-form-translation', Component_TranslationForm);
