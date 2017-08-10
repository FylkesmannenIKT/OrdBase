'use strict';
import html from './header.html';

export class Component_Header extends HTMLElement {

    constructor() {
        super();
        let root = this.createShadowRoot();
        root.innerHTML = html;
        this._getElementById = root.getElementById.bind(root)
    }

    flashMessage(message) {

        let errorBanner = this._getElementById('error-banner');

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

        if (button1 !== null) this._getElementById('btn-header-right1-i').setAttribute('class', `fa ${button1}`);
        if (button2 !== null) this._getElementById('btn-header-right2-i').setAttribute('class', `fa ${button2}`);
    }

    
    setEventHandlers({ button1_onclick = null,
                       button2_onclick = null } = {}){

        if (button1_onclick !== null) this._getElementById('btn-header-right1').onclick = button1_onclick; 
        if (button2_onclick !== null) this._getElementById('btn-header-right2').onclick = button2_onclick; 
    } 

    setTheme({ textBig    = 'nO THeme', 
               textSmall  = 'Ordbase', 
               editable   = false, 
               selectable = false, 
               deleteable = false,
               newable    = false, } = {}){
        
        this._getElementById('btn-header-mid-small').innerHTML = textSmall;    
        this._getElementById('btn-header-mid-big').innerHTML   = textBig;    
                
        let leftButtonClassList = this._getElementById('btn-header-left').classList;

        leftButtonClassList.remove('selectable', 'editable', 'deleteable', 'newable');
        leftButtonClassList.remove('editable');
        leftButtonClassList.remove('deleteable'); 
        leftButtonClassList.remove('newable'); 

        if (selectable) {
            leftButtonClassList.add('selectable');
        
        } else if (editable) {
            leftButtonClassList.add('editable');
        }
        else if (deleteable) {
            leftButtonClassList.add('deleteable');
        }
        else if (newable) {
            leftButtonClassList.add('newable');
        }
    }
}
customElements.define('component-header', Component_Header);