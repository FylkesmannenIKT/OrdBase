'use strict';
import html from './header.html';


export class View_Header extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;

        [].slice.apply(this.root.querySelectorAll('.icon-button')).forEach(button => {
            button.addEventListener('click', e => {
                button.blur();
            })
        })
    }

    setTextBig(text) { 
        this.root.getElementById('btn-header-mid-big')
                 .innerHTML = text;    
    }

    setTextSmall(text) { 
        this.root.getElementById('btn-header-mid-small')
                 .innerHTML = text;    
    }

    setButtonIconLeft(icon) { 
        this.root.querySelector('#btn-header-left i.fa')
                 .setAttribute('class', `fa ${icon}`) 
    }

    setButtonIconRight0(icon) { 
        this.root.querySelector('#btn-header-right0 i.fa')
                 .setAttribute('class', `fa ${icon}`);
    }

    setButtonIconRight1(icon) { 
        this.root.querySelector('#btn-header-right1 i.fa')
                 .setAttribute('class', `fa ${icon}`);
    }

    setButtonIconRight2(icon) { 
        this.root.querySelector('#btn-header-right2 i.fa')
                 .setAttribute('class', `fa ${icon}`);
    }

    setButtonColorLeft(color) {
        console.log('asdfsdf', `var(${color})`)
        this.root.querySelector('#btn-header-left i').style.color = `var(${color})`;
    } 

    getButtonLeft() { 
        return this.root.getElementById('btn-header-left');
    }

    getButtonRight0() {
        return this.root.getElementById('btn-header-right0');
    }

    getButtonRight1() { 
        return this.root.getElementById('btn-header-right1'); 
    }

    getButtonRight2() { 
        return this.root.getElementById('btn-header-right2'); 
    } 

}
customElements.define('view-header', View_Header);