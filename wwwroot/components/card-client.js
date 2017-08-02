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
        this._deleteHandler = () => console.log('default delete.....');

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
    OnSelect(handler)  { this._selectHandler = handler; }
    OnEdit(handler)    { this._editHandler   = handler; }
    OnDelete(handler)  { this._deleteHandler = handler; }
    
    setSelectable() {
        this._button.classList.remove('editable');
        this._button.classList.remove('deleteable');
        this._clickHandler = this._selectHandler;        

    }
 
    setEditable() {
        this._button.classList.add('editable');
        this._button.classList.remove('deleteable');
        this._clickHandler = this._editHandler;
        
    }

    setDeleteable() {
        this._button.classList.add('deleteable');
        this._button.classList.remove('editable');

        this._clickHandler = this._deleteHandler;
        
    }

    isEditable()   { return this._button.classList.contains('editable'); }
    isDeleteable() { return this._button.classList.contains('deleteable'); }

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