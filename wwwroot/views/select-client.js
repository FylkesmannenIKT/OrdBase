'use strict';
import html from './select-client.html';


export class View_SelectClient extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;
    }

    addCard(card)  {   this.root.appendChild(card); }

    getCardArray() {
        return [].slice.apply(this.root.querySelectorAll('component-card-client'));
    }
}
customElements.define('view-select-client', View_SelectClient);