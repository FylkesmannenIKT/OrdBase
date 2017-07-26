'use strict';
import html from './fieldset-translation.html';


export class Component_FieldsetTranslation extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;
    }
}
customElements.define('component-fieldset-translation', Component_FieldsetTranslation);