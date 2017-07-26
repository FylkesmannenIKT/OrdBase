'use strict';
import html from './card-client.html';



export class Component_CardClient extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;
        this.button = this.root.querySelector('button');
    }

    setHeading (name){
        this.root.getElementById('card-h2')
                 .innerHTML = name || '{{ null heading }}';
        this._name = name;
    }
    
    setId(id) {
        this.setAttribute('id', id);
    }

    setText(text) {
        this.root.getElementById('card-p')
                 .innerHTML = text || '{{ null text }}';
    }

    setThumbnail (url) { 
        this.root.getElementById('card-img').src = url;
    }


    setState_Selectable() {
        this.button.classList.remove('deleteable');
        this.button.classList.remove('editable');
        this.button.onclick = this.selectHandler;        
    }
    setState_Deleteable() {
        this.button.classList.remove('editable');
        this.button.classList.add('deleteable');
        this.button.onclick = this.deleteHandler;                
    }

    setState_Editable() {
        this.button.classList.remove('deleteable');
        this.button.classList.add('editable');
        this.button.onclick = this.editHandler;
    }
}
customElements.define('component-card-client', Component_CardClient);