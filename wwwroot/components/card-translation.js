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

        this._clickHandler  = () => console.log('default click....');
        this._submitHandler = () => console.log('default submit....');
        this._deleteHandler = () => console.log('default delete.....');
        this._openHandler   = () => console.log('default select.....');
        this._closeHandler  = () => console.log('default close.....');

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
            this._clickHandler(this, e);
        });

        this._form.addEventListener('submit', e => {
            e.preventDefault();
            this._submitHandler(this, e);
        });
    }


    //
    // PUBLIC
    //
    setEventHandlers({ onopen, onclose, ondelete, onsubmit }) {
        
        this._openHandler   = (that, e) => { 
            onopen(that, e);
            this._clickHandler = this._closeHandler;
        }

        this._deleteHandler = (that, e) => {
            ondelete(that, e); 
            this._clickHandler = this._selectHandler;
        }

        this._closeHandler = (that, e) => {
            
            onclose(that, e);
            this.close();
            this._clickHandler = this._openHandler;
        } 

        this._submitHandler = onsubmit;
        this._clickHandler  = this._openHandler;
    }

    getEventHandlers() {
        return {
            onopen: this._openHandler,
            ondelete: this._deleteHandler,
            onsubmit: this._submitHandler,
            onclose: this._closeHandler, 
        }
    }

    open({languageCount})  {
        this._root.getElementById('form-translation-key').value = this.getTranslationKey();

        this._button.classList.add('selected');
        this.style.setProperty('--fieldset-count', languageCount+2);  // Give data to the animation
        this._form.classList.add('active');                           // Start the CSS animation 
    }

    display() {[].slice.apply(this._root.querySelectorAll('fieldset')).forEach(fieldset => { fieldset.style.display = 'block'; }); }

    close() { 
        this._form.classList.remove('active');
        
        this._button.classList.remove('selected');
        
        [].slice.apply(this._root.querySelectorAll('fieldset')).forEach(fieldset => {
            if (fieldset.classList.contains('generated'))
                fieldset.parentElement.removeChild(fieldset);
            else
                fieldset.style.display = 'none';
        });
    }

    focus() { this._button.focus(); }

    delete() {
        this.parentElement.removeChild(this);
    }

    isDeleteable() {
        return this._button.classList.contains('deleteable');
    }


    //
    // Getters and setters
    //
    setOpenable()  {  
        this._clickHandler = this._openHandler;    
        this._button.classList.remove('deleteable');
    }
    setDeleteable(){  
        this._clickHandler = this._deleteHandler;
        this._button.classList.add('deleteable');
    }

    setTranslationKey(key){ 
        this._root.getElementById('card-translation-key').innerHTML = key;  
    }

    getTranslationKey() {
        return this._root.getElementById('card-translation-key').innerHTML;
    }

    setSubmitButtontext(text) {
        this._root.getElementById('button-submit').innerHTML = text;
    }
    setCheckboxText(text) {
        this._checkboxText = text;
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
        let _querySelector = fragment.querySelector.bind(fragment);

        _querySelector('label').setAttribute('for', `form-translation-${languageKey}`);  
        _querySelector('label').innerHTML = languageKey;                                  
        _querySelector('input[type="text"]').setAttribute('id',  `form-translation-${languageKey}`);
        _querySelector('input[type="text"]').value = text;
        _querySelector('input[type="checkbox"]').checked = isComplete;
        _querySelector('.checkbox-text').innerHTML = this._checkboxText;
        _querySelector('fieldset').classList.add('generated');

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
}
customElements.define('component-card-translation', Component_TranslationCard);