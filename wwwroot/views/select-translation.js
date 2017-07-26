'use strict';
import html from './select-translation.html';

export class View_SelectTranslation extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;
    }



    setFlipper (flipper) {   this.root.querySelector('#list-show-containers-on-client').appendChild(flipper);  }
    appendCardTranslation (card) {  this.root.querySelector('#list-show-translations-on-client').appendChild(card); }
}
customElements.define('view-select-translation', View_SelectTranslation);