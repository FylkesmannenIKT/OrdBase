'use strict';
import html from './card-translation.html';


export class Component_CardTranslation extends HTMLElement { 
    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;
    }
    
    set key (key)            { this.root.querySelector('span').innerHTML = key;  }
    set onClickCard(handler) { this.root.querySelector('button').onclick = handler; }

    appendKeyAndIcon(keyAndIcon) { 
        this.root.querySelector('div').appendChild(keyAndIcon); 
    }
}
customElements.define('component-card-translation', Component_CardTranslation);