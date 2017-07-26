'use strict';
import html from './group-key-icon.html';


export class Component_GroupKeyIcon extends HTMLElement { 
    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;
    }

    set languageKey(key) { 
        this.root.querySelector('span').innerHTML = key; 
    }
    
    set icon(iconClass)  {  
        this.root.querySelector('i.fa').classList.toggle(iconClass); 
    }
}
customElements.define('component-group-key-icon', Component_GroupKeyIcon);