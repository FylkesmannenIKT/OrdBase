'use strict';
import html from './edit-client.html';

export class View_EditClient extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;
    }

    setContainerGenerator(generator) {
        this.root.getElementById('list-add-containers-on-client').appendChild(generator);
    }

    setLanguageFlipper(flipper) {
        this.root.getElementById('list-add-languages-on-client').appendChild(flipper);
    }

    setClientForm(form) {
        this.root.insertBefore(form, this.root.getElementById('hook-form'));
    }

    setClientCard(card) {
        this.root.insertBefore(card, this.root.getElementById('hook-card'));  
    }
}

customElements.define('view-edit-client', View_EditClient);