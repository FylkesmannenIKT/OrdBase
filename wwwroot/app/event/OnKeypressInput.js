'use strict';

export function OnKeypressInput(target) {

    const minSize = target.getAttribute('data-min-size') || 20;
    const valueSize = target.value.length;

    if (valueSize > minSize)
        target.setAttribute('size', valueSize);
    else 
        target.setAttribute('size', minSize);
};