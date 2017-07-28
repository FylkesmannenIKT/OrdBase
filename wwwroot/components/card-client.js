'use strict';
import html from './card-client.html';



export class Component_ClientCard extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;
        this.button = this.root.querySelector('button');

        this.selectHandler = () => console.log('default.....');
        this.editHandler   = () => console.log('default.....');
        this.deleteHandler = () => console.log('default.....');

        this.button.onclick = this.selectHandler;
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

    toggleEditable() {
        this.button.classList.toggle('editable');
        this.button.classList.remove('deleteable');

        if(this.isEditable())
            this.button.onclick = this.editHandler;
        else 
            this.button.onclick = this.selectHandler;

    }

    toggleDeleteable() {
        this.button.classList.toggle('deleteable');
        this.button.classList.remove('editable');
       
        if(this.isDeleteable()) 
             this.button.onclick = this.deleteHandler;
        else
            this.button.onclick = this.selectHandler;
    }

    isEditable()   { return this.button.classList.contains('editable'); }
    isDeleteable() { return this.button.classList.contains('deleteable'); }
}
customElements.define('component-card-client', Component_ClientCard);