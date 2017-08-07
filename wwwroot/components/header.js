'use strict';
import html from './header.html';


export class Component_Header extends HTMLElement {

    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = html;

    }

    flashMessage(message) {

        let errorBanner = this._root.getElementById('error-banner');

        if(!errorBanner.classList.contains('animated'))
            errorBanner.classList.add('animated');

        errorBanner.classList.add('active');
        errorBanner.innerHTML = message;

        setTimeout(() => {
            errorBanner.classList.remove('active');
            errorBanner.innerHTML = '';
                        
        }, 3000);
    }

    setIcons({ button1 = null,
               button2 = null } = {}) {

        if (button1 !== null) this._root.querySelector('#btn-header-right1 i.fa').setAttribute('class', `fa ${button1}`);
        if (button2 !== null) this._root.querySelector('#btn-header-right2 i.fa').setAttribute('class', `fa ${button2}`);
    }

    
    setEventHandlers({ button1_onclick = null,
                       button2_onclick = null } = {}){

        if (button1_onclick !== null) this._root.getElementById('btn-header-right1').onclick =  button1_onclick; 
        if (button2_onclick !== null) this._root.getElementById('btn-header-right2').onclick =  button2_onclick; 
    } 

    setTheme({ textBig    = 'nO THeme', 
               textSmall  = 'Ordbase', 
               editable   = false, 
               selectable = false, 
               deleteable = false,
               newable    = false, } = {}){
        
        this._root.getElementById('btn-header-mid-small').innerHTML = textSmall;    
        this._root.getElementById('btn-header-mid-big').innerHTML   = textBig;    
                
        let leftButton = this._root.getElementById('btn-header-left');

        leftButton.classList.remove('selectable', 'editable', 'deleteable', 'newable');
        leftButton.classList.remove('editable');
        leftButton.classList.remove('deleteable'); 
        leftButton.classList.remove('newable'); 

        if (selectable) {
            leftButton.classList.add('selectable');
        
        } else if (editable) {
            leftButton.classList.add('editable');
        }
        else if (deleteable) {
            leftButton.classList.add('deleteable');
        }
        else if (newable) {
            leftButton.classList.add('newable');
        }
    }
}
customElements.define('component-header', Component_Header);