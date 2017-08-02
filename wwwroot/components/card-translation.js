'use strict';
import html from './card-translation.html';

export class Component_TranslationCard extends HTMLElement { 
    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = html;

        this._button   = this._root.querySelector('button');
        this._form     = this._root.querySelector('form');
        this.__template__languageKeyComplete = this._root.getElementById('template-languagekey-complete');
        this.__template__fieldset            = this._root.getElementById('template-fieldset');

        this._isClosed = true;
        
        this._clickHandler  = () => console.log('default click....');
        this._submitHandler = () => console.log('default submit....');
        this._deleteHandler = () => console.log('default delete.....');
        this._openHandler   = () => console.log('default select.....');

        //
        // Enable animation
        //
        this._button.addEventListener('focus', () => {
            if(!this._button.classList.contains('animated'))
                this._button.classList.add('animated');
        })
        
        this._button.addEventListener('mouseover', () => {
            if(!this._button.classList.contains('animated'))           
                this._button.classList.add('animated');
        })  

        this._button.addEventListener('click', e => {  
            
            if  (this._isClosed) {
                this._clickHandler(this, e);
            }
            else {
                this.close();
            }
        });

        this._form.addEventListener('submit', e => {
            e.preventDefault();

            this._submitHandler(this, e);

        });
    }


    //
    // PUBLIC
    //
    open()  {
        let fieldsetArray = [].slice.apply(this._root.querySelectorAll('fieldset'));

        this._root.getElementById('form-translation-key').value = this.getTranslationKey();

        this._button.classList.add('selected');
        this.style.setProperty('--fieldset-count', fieldsetArray.length);  // Give data to the animation
        this._form.classList.add('active');                                      // Start the CSS animation 
        setTimeout(() => fieldsetArray.forEach(fieldset => { fieldset.style.display = 'block'; }), 150); // 

        this._isClosed = false;
    }

    close() { 
        this._form.classList.remove('active');
        
        this._button.classList.remove('selected');
        
        [].slice.apply(this._root.querySelectorAll('fieldset')).forEach(fieldset => {
            if (fieldset.classList.contains('generated'))
                fieldset.parentElement.removeChild(fieldset);
            else
                fieldset.style.display = 'none';
        });

        this._isClosed = true;
    }

    focus() { this.button.focus(); }

    toggleDeleteable() {
        this.button.classList.toggle('deleteable');
        
        if (this.isDeleteable()) {
            this._clickHandler = this._deleteHandler;
        }
        else {
            this._clickHandler = this._openHandler;
        }
    }

    isDeleteable() {
        return this.button.classList.contains('deleteable');
    }


    //
    // Getters and setters
    //
    setOpenable()  {  this._clickHandler = this._openHandler;    }
    setDeleteable(){  this._clickHandler = this._deleteHandler;  }
    setCloseable() {  this._clickHandler = this._close;        }

    setTranslationKey(key){ 
        this._root.getElementById('card-translation-key').innerHTML = key;  
    }

    getTranslationKey() {
        return this._root.getElementById('card-translation-key').innerHTML;
    }

    setEventHandlers({ onopen, ondelete, onsubmit}) {
        this._openHandler   = onopen;
        this._deleteHandler = ondelete,
        this._submitHandler = onsubmit;
        this._clickHandler  = this._openHandler;
    }

    getEventHandlers() {
        return {
            onopen: this._openHandler,
            ondelete: this._deleteHandler,
            onsubmit: this._submitHandler, 
        }
    }

    getFormData() {
        return {
            translationKey: this._root.getElementById('form-translation-key').value,
            fieldsetArray: [].slice.apply(this._root.querySelectorAll('.generated')).map(fieldset => {
                return {
                    languageKey: fieldset.querySelector('label').innerHTML,
                    text:        fieldset.querySelector('input[type=text]').value,
                    isComplete:  fieldset.querySelector('input[type=checkbox]').checked,
                }
            }),
        }
    }

    //
    // Make functions
    //
    makeFieldset({ languageKey, text, isComplete}) {

        let fragment = this.__template__fieldset.content.cloneNode(true);
        
        fragment.querySelector('label').setAttribute('for', `form-translation-${languageKey}`);  
        fragment.querySelector('label').innerHTML = languageKey;                                  
        fragment.querySelector('input[type="text"]').setAttribute('id',  `form-translation-${languageKey}`);
        fragment.querySelector('input[type="text"]').value = text;
        fragment.querySelector('input[type="checkbox"]').checked = isComplete;
        fragment.querySelector('fieldset').classList.add('generated');

        this._form.insertBefore(fragment, this._root.getElementById('fieldset-button-submit'));
    }

    
    makeLanguagekeyComplete(languageKey, isComplete) { 

        let fragment = this.__template__languageKeyComplete.content.cloneNode(true);

        fragment.querySelector('span').innerHTML = languageKey;
        if (isComplete === true) {
            fragment.querySelector('i').classList.remove('fa-times');
            fragment.querySelector('i').classList.add('fa-check');
        }
        this._root.getElementById('array-languagekey-complete').appendChild(fragment);
    }

    getTranslationGroup() {
        return {

        }
    }
}
customElements.define('component-card-translation', Component_TranslationCard);