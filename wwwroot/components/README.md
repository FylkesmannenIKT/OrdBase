# Component layer
*Last updated: 08.08.17 by J. Solsvik*

The component layer is structured as a collection of *webcomponents*. *Webcomponents* is an emerging standard, which makes it possible to create stand-alone* components working natively** in modern browsers. A *webcomponent* should only operate on it's own data, and should not change it's apperance and/or internal behaviour, when other parts of the system is changed***. All cross-component behaviour****, should be injected into the components by the application layer.

*contained, no external dependencies, independent, self-reliant <br>
**No libraries or frameworks needed. <br>
***Except for CSS color and size variables, see [shared.css](../shared.css) <br>
****Side-effects, glue-code

<br>

Web-components have 3 major features:

1. They inherit HTML element:
```javascript
export class Component_Header extends HTMLElement { ... }
```

2. They sport their own scoped/separate DOM Document, called a Shadow DOM:
```javascript
    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = HTML_TEMPLATE;
    }
```

3. They are declared as a custom element, which makes them accessible by the DOM API like any other HTMLElement:
```javascript
customElements.define('component-header', Component_Header);
```

<br>

This makes it possible to do:
```javascript
let header = new Component_Header();
```
..or
```javascript
let header = document.createElement('component-header');
```
..or even inline HTML..
```html
<component-header></component-header>
```
...and also  CSS
```css
component-header {
    display: grid;
    grid-template-columns: 100px 1fr repeat(3, 100px);
}
```
