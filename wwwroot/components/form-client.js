'use strict';
import html from './form-client.html';

export class Component_ClientForm extends HTMLElement {
    
    constructor(){
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = html;
    }

    setSubmitText(text) {
        this.root.getElementById('button-submit').innerHTML = text;
    }


    getClient() {
        return {
            key :          this.root.getElementById('form-client-name').value,
            webpageUrl:    this.root.getElementById('form-client-webpage').value,
            thumbnailUrl:  this.root.getElementById('form-client-thumbnail').value,
            apiKey:        this.root.getElementById('form-client-apikey').value,
        }
    }

    setClient(client) {
        this.root.getElementById('form-client-name').value = client.key;
        this.root.getElementById('form-client-webpage').value = client.webpageUrl;
        this.root.getElementById('form-client-thumbnail').value = client.thumbnailUrl;
        this.root.getElementById('form-client-apikey').value = client.apiKey;
    }
}

customElements.define('component-form-client', Component_ClientForm);
