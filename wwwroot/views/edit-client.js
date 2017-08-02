'use strict';
import html from './edit-client.html';

export class View_EditClient extends HTMLElement {

    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = html;
    }

    setContainerGenerator(generator) {
        this._root.getElementById('edit-client-left-menu')
                  .insertBefore(generator, this._root.getElementById('slot-generator'));
    }

    setLanguageFlipper(flipper) {
        this._root.getElementById('edit-client-left-menu')
                  .insertBefore(flipper, this._root.getElementById('slot-flipper'));
    }

    setClientForm(form) {
        this._root.insertBefore(form, this._root.getElementById('slot-form'));
    }

    setClientCard(card) {
        this._root.insertBefore(card, this._root.getElementById('slot-card'));  
    }
}

customElements.define('view-edit-client', View_EditClient);