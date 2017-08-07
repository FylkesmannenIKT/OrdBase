'use strict';
import html from './card-client.html';



export class Component_ClientCard extends HTMLElement {

    
    //
    // PRIVATE
    //
    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = html;
        this._button = this._root.querySelector('button');

        this._clickHandler  = () => console.log('default click.....');
        this._selectHandler = () => console.log('default select.....');
        this._editHandler   = () => console.log('default edit.....');

        this._root.addEventListener('click', e => {
            this._clickHandler(this, e);
        });

        this._button.addEventListener('focus', () => {
            if(!this._button.classList.contains('animated'))
                this._button.classList.add('animated');
        })
        
        this._button.addEventListener('mouseover', () => {
            if(!this._button.classList.contains('animated'))           
                this._button.classList.add('animated');
        })  
    }

    //
    // PUBLIC 
    //
    setEventHandlers({ onselect = (that, e) => { console.log('default onselect..')}, 
                        onedit  = (that, e) => { console.log('default onselect..')}} = {}) {
        this._selectHandler = onselect;
        this._editHandler   = onedit;
    }

    setSelectable() {
        this._button.classList.remove('editable');
        this._clickHandler = this._selectHandler;        
    }
 
    setEditable() {
        this._button.classList.add('editable');
        this._clickHandler = this._editHandler;        
    }

    isEditable()   { return this._button.classList.contains('editable'); }

    focus(){
        this._button.focus();
    }

    //
    // get Set internal data
    // @note I could have used getters and setters here, but they are not staticly checked in javascript, 
    //       , which means that if someone mispells a getter or a setter name, no error is thrown, 
    //       even if there are no getter or setter with that name. functions on the other hand throw
    //       errors when not found, which is really great.  - JSolsvik 01.08.17
    //
    getKey() {
        return this.getAttribute('id');
    }

    setHeading (name){
        this._root.getElementById('card-h2').innerHTML = name;
        this._name = name;
    }    

    setKey(key) {
        this.setAttribute('id', key);
    }

    setText(text) {
        this._root.getElementById('card-p').innerHTML = text;
    }
                
    setThumbnail (url) { 
        this._root.getElementById('card-img').src = url;
    }
}
customElements.define('component-card-client', Component_ClientCard);