'use strict';

import { loadClientSelector } from './loadClientSelector.js';

export function loadClientEditor() {
    
    view.querySelector('#btn-back-to-home-page').onclick     = (event) => loadClientSelector();
    view.querySelector('#btn-back-to-client-select').onclick = (event) => loadClientSelector();
}