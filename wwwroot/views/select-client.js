'use strict';
import html from './select-client.html';


export class View_SelectClient extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;
    }

    appendCard(card)  {   this.root.appendChild(card);                 }
}
customElements.define('component-select-client', View_SelectClient);