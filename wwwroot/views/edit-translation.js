'use strict';
import html from './edit-translation.html';


export class View_EditTranslation extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;
    }
}
customElements.define('view-edit-translation', View_EditTranslation);