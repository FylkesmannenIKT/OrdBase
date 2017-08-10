# App layer
*Last updated: 07.08.17 by J. Solsvik*

The application layer is limited to functions which introduce side-effects. Application code is sometimes called glue-code, because it is the code which glues together different smaller components into a bigger whole.

The application layer is the heart of the Admin-tool application for Ordbase.
Here we have 1 file for each **view** that has to load. There is also 1 entry point file, *App.js*.

Loading a view is a batch operation - a long list of procedural events has to happen before the view is considered **loaded**.

Each *load-script* begins by, defining ALL components which will be in use once the view is loaded:
```javascript
const view             = new View_SelectTranslation;
const header           = new Component_Header;
const generator        = new Component_TranslationGenerator;
const picker           = new Component_ContainerPicker;
const cardPrototype    = new Component_TranslationCard;
```

Each *load-script* ends by, attaching all components to the view, and then *setting* the **view** of the **App**:
```javascript
view.setTranslationGenerator(generator);
view.setContainerPicker(picker);
App.setHeader(header);
App.setView(view);
```

In between the start and the end of the *load-script* we manipulate the components in two ways:
1. Setup the components the desired data
```javascript
let card = new Component_ClientCard;

card.setKey(client.key);
card.setHeading(client.key);
card.setText(client.webpageUrl);
card.setThumbnail(client.thumbnailUrl);

card.setSelectable();
view.addCard(card)
```

2. Hook up event-handlers which have side-effects
```javascript
card.setEventHandlers({
    onselect: (card, e) => { load_selectTranslation(card.getKey()) },
    onedit:   (card, e) => { load_editClient(card.getKey())},
});
```

Note: We try to define event-handlers which does not have side-effects inside the component definitions themselves. The component definitions are considered a different layer than the application layer. These internal event-handlers should have little to no coupling with the application logic.
