'use strict';

import { overwriteFromTemplate, appendFromTemplate } from '../library/Util.js';
import { OnLoadView_ClientSelector }                 from './OnLoadView_ClientSelector.js';

export function OnLoadView_ClientEditor() {
    const view = overwriteFromTemplate(document.body, 'view-client-editor');
    
    view.querySelector('#btn-back-to-home-page').onclick     = (event) => OnLoadView_ClientSelector();
    view.querySelector('#btn-back-to-client-select').onclick = (event) => OnLoadView_ClientSelector();
}