'use strict';
import html from './header.html';


export class Component_Header extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;

    }

    flashError(message) {

        let errorBanner = this.root.getElementById('error-banner');

        if(!errorBanner.classList.contains('animated'))
            errorBanner.classList.add('animated');

        errorBanner.classList.add('active');
        errorBanner.innerHTML = message;

        setTimeout(() => {
            errorBanner.classList.remove('active');
            errorBanner.innerHTML = '';
                        
        }, 3000);
    }

    setTextBig(text) { 
        this.root.getElementById('btn-header-mid-big')
                 .innerHTML = text;    
    }

    setTextSmall(text) { 
        this.root.getElementById('btn-header-mid-small')
                 .innerHTML = text;    
    }

    button0_setIcon(icon) { 
        this.root.querySelector('#btn-header-left i.fa')
                 .setAttribute('class', `fa ${icon}`) 
    }

    button1_setIcon(icon) { 
        this.root.querySelector('#btn-header-right0 i.fa')
                 .setAttribute('class', `fa ${icon}`);
    }

    button2_setIcon(icon, color) {
        console.log(color); 
        this.root.querySelector('#btn-header-right1 i.fa')
                 .setAttribute('class', `fa ${icon}`)
        }

    button3_setIcon(icon) { 
        this.root.querySelector('#btn-header-right2 i.fa')
                 .setAttribute('class', `fa ${icon}`);
    }

    setColor(color) {
        this.root.querySelector('#btn-header-left i').style.color = color;
    } 

    button0_OnClick(handler) { 
        this.root.getElementById('btn-header-left').onclick = event => handler.apply(this, event);
    }

    button1_OnClick(handler) {
        this.root.getElementById('btn-header-right0').onclick = event => handler.apply(this, event);
    }

    button2_OnClick(handler) { 
        this.root.getElementById('btn-header-right1').onclick = event => handler.apply(this, event); 
    }

    button3_OnClick(handler) { 
        this.root.getElementById('btn-header-right2').onclick = event => handler.apply(this, event); 
    } 

}
customElements.define('component-header', Component_Header);