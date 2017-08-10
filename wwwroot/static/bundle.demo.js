/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = force;


//
// @module Utill
//  @brief small usefull functions which helps reduce repitition.
//

function force(message = '') {
    throw new Error(`Missing parameter: ${message}`);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["setHeader"] = setHeader;
/* harmony export (immutable) */ __webpack_exports__["setView"] = setView;
/* harmony export (immutable) */ __webpack_exports__["flashError"] = flashError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__load_selectClient_js__ = __webpack_require__(2);


// COMPILE WITH BABEL - https://css-tricks.com/transpiling-es6/
// TRanspile with webpack - https://webpack.github.io/docs/tutorials/getting-started/



//
// @file main.js
// @doc 2017 es16 modules native in browsers https://jakearchibald.com/2017/es-modules-in-browsers/
//
const ICON_NONE = '';
/* harmony export (immutable) */ __webpack_exports__["ICON_NONE"] = ICON_NONE;

const ICON_PLUS = 'fa-plus';
/* harmony export (immutable) */ __webpack_exports__["ICON_PLUS"] = ICON_PLUS;

const ICON_BARS = 'fa-bars';
/* harmony export (immutable) */ __webpack_exports__["ICON_BARS"] = ICON_BARS;

const ICON_SQUARE = 'fa-square';
/* harmony export (immutable) */ __webpack_exports__["ICON_SQUARE"] = ICON_SQUARE;

const ICON_ARROW_LEFT = 'fa-arrow-left';
/* harmony export (immutable) */ __webpack_exports__["ICON_ARROW_LEFT"] = ICON_ARROW_LEFT;

const ICON_TIMES = 'fa-times';
/* harmony export (immutable) */ __webpack_exports__["ICON_TIMES"] = ICON_TIMES;

const ICON_CHECK = 'fa-check';
/* harmony export (immutable) */ __webpack_exports__["ICON_CHECK"] = ICON_CHECK;

const ICON_PENCIL = 'fa-pencil';
/* harmony export (immutable) */ __webpack_exports__["ICON_PENCIL"] = ICON_PENCIL;

const ICON_TRASH = 'fa-trash';
/* harmony export (immutable) */ __webpack_exports__["ICON_TRASH"] = ICON_TRASH;


// HTTP codes
const HTTP_OK = 200;
/* harmony export (immutable) */ __webpack_exports__["HTTP_OK"] = HTTP_OK;

const HTTP_CREATED = 201;
/* harmony export (immutable) */ __webpack_exports__["HTTP_CREATED"] = HTTP_CREATED;

const HTTP_UPDATED = 204;
/* harmony export (immutable) */ __webpack_exports__["HTTP_UPDATED"] = HTTP_UPDATED;

const HTTP_NOTFOUND = 404;
/* harmony export (immutable) */ __webpack_exports__["HTTP_NOTFOUND"] = HTTP_NOTFOUND;


// keycodes 
const KEY_BACKSPACE = 8;
const KEY_HOME = 36;

// Cache static element references
const MAIN = document.getElementById('ordbase-main');
const HEADER = document.getElementById('ordbase-header');

function setHeader(header) {
    HEADER.innerHTML = ''; // Clear existing header
    HEADER.appendChild(header);
}

function setView(view) {
    MAIN.innerHTML = '';
    MAIN.appendChild(view);
    return view;
}

function flashError(error) {
    HEADER.firstChild.flashMessage(error);
}

document.addEventListener('keydown', e => {
    if (e.keyCode === KEY_HOME) Object(__WEBPACK_IMPORTED_MODULE_0__load_selectClient_js__["a" /* load_selectClient */])();
});

window.addEventListener('load', () => {
    Object(__WEBPACK_IMPORTED_MODULE_0__load_selectClient_js__["a" /* load_selectClient */])();
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = load_selectClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_select_client_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_card_client_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__load_editClient_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__load_newClient_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__load_selectTranslation_js__ = __webpack_require__(21);














//
// @function load_selectClient
//
function load_selectClient() {

    //
    // 0. Create component instances
    //
    const header = new __WEBPACK_IMPORTED_MODULE_5__components_header_js__["a" /* Component_Header */]();
    const view = new __WEBPACK_IMPORTED_MODULE_3__views_select_client_js__["a" /* View_SelectClient */]();

    //
    // 1. Fire async call
    //
    async_client_getArray({
        header: header,
        success: clientArray => {
            clientArray.forEach(client => {

                let card = new __WEBPACK_IMPORTED_MODULE_4__components_card_client_js__["a" /* Component_ClientCard */]();

                card.setKey(client.key);
                card.setHeading(client.key);
                card.setText(client.webpageUrl);
                card.setThumbnail(client.thumbnailUrl);

                card.setEventHandlers({
                    onselect: (card, e) => {
                        Object(__WEBPACK_IMPORTED_MODULE_8__load_selectTranslation_js__["a" /* load_selectTranslation */])(card.getKey());
                    },
                    onedit: (card, e) => {
                        Object(__WEBPACK_IMPORTED_MODULE_6__load_editClient_js__["a" /* load_editClient */])(card.getKey());
                    }
                });

                card.setSelectable();
                view.addCard(card);
            });

            view.focus();
        }
    });

    //
    // 3. Set up header
    //
    header.setTheme({ textSmall: 'Ordbase', textBig: 'Select Client', selectable: true });
    header.setIcons({ button1: __WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_PENCIL"], button2: __WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_PLUS"] });
    header.setEventHandlers({

        button1_onclick: event => {

            let cardArray = view.getCardArray();

            if (!cardArray[0].isEditable()) {
                cardArray.forEach(card => card.setEditable());
                header.setTheme({ textBig: 'Edit Client', editable: true });
                header.setIcons({ button1: '', button2: __WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_TIMES"] });
                header.setEventHandlers({

                    button2_onclick: e => {
                        cardArray.forEach(card => card.setSelectable());
                        header.setTheme({ textBig: 'Select Client', selectable: true });
                        header.setIcons({ button1: __WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_PENCIL"], button2: __WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_PLUS"] });
                        header.setEventHandlers({ button2_onclick: e => {
                                Object(__WEBPACK_IMPORTED_MODULE_7__load_newClient_js__["a" /* load_newClient */])();
                            } });
                        view.focus();
                    }
                });
                view.focus();
            }
        },

        button2_onclick: e => {
            Object(__WEBPACK_IMPORTED_MODULE_7__load_newClient_js__["a" /* load_newClient */])();
        }
    });

    //
    // 5. Insert new view into DOM
    //
    __WEBPACK_IMPORTED_MODULE_0__App_js__["setHeader"](header);
    __WEBPACK_IMPORTED_MODULE_0__App_js__["setView"](view);
}

//
// @function async_deleteCard
//  @note todo
//
function async_client_getArray({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success'), header = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('header') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["b" /* client_get */]().then(clientArray => {
        if (clientArray.length > 0) success(clientArray);else __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"]('There are no clients to show');
    }).catch(err => __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](err));
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = client_get;
/* harmony export (immutable) */ __webpack_exports__["c"] = client_getContainers;
/* harmony export (immutable) */ __webpack_exports__["d"] = client_getLanguages;
/* harmony export (immutable) */ __webpack_exports__["a"] = client_create;
/* harmony export (immutable) */ __webpack_exports__["g"] = client_update;
/* unused harmony export client_delete */
/* harmony export (immutable) */ __webpack_exports__["e"] = client_setContainers;
/* harmony export (immutable) */ __webpack_exports__["f"] = client_setLanguages;
/* unused harmony export translation_get */
/* harmony export (immutable) */ __webpack_exports__["l"] = translation_getGroup;
/* harmony export (immutable) */ __webpack_exports__["m"] = translation_getGroupMeta;
/* unused harmony export translation_create */
/* harmony export (immutable) */ __webpack_exports__["j"] = translation_createArray;
/* unused harmony export translation_update */
/* harmony export (immutable) */ __webpack_exports__["n"] = translation_updateArray;
/* unused harmony export translation_delete */
/* harmony export (immutable) */ __webpack_exports__["k"] = translation_deleteGroup;
/* unused harmony export container_get */
/* harmony export (immutable) */ __webpack_exports__["h"] = container_getNoEmpty;
/* harmony export (immutable) */ __webpack_exports__["i"] = language_get;
/* unused harmony export languages_create */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Fetch_js__ = __webpack_require__(9);





//
// @doc Destructuring arguments with default values ecma 6 - http://2ality.com/2015/01/es6-destructuring.html
// @doc Async Promises MDN - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
// @doc Arro functions MDN - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//

//
// CLIENT ROUTES
//

//
// GET api/client
//
function client_get({ clientKey = '' } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["b" /* GET */]({
        route: `api/client/?clientKey=${clientKey}`
    });
}

function client_getContainers({ clientKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('clientKey') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["b" /* GET */]({
        route: `api/client/containers/?clientKey=${clientKey}`
    });
};

function client_getLanguages({ clientKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('clientKey') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["b" /* GET */]({
        route: `api/client/languages/?clientKey=${clientKey}`
    });
};

//
// CREATE, UPDATE, DELETE api/client
//
function client_create({ client = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('client') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["c" /* POST */]({
        route: `api/client`,
        data: client
    });
}

function client_update({ clientKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('clientKey'),
    client = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('client') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["d" /* PUT */]({
        route: `api/client/?clientKey=${clientKey}`,
        data: client
    });
}

function client_delete({ clientKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('clientKey') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["a" /* DELETE */]({
        route: `api/client/?clientKey=${clientKey}`
    });
}

//
// SET ROOT/clients/containers and languages
//
function client_setContainers({ clientKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('clientKey'),
    containerArray = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('containerArray') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["c" /* POST */]({
        route: `api/client/containers/?clientKey=${clientKey}`,
        data: containerArray
    });
};

function client_setLanguages({ clientKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('clientKey'),
    languageArray = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('languageArray') } = {}) {
    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["c" /* POST */]({
        route: `api/client/languages/?clientKey=${clientKey}`,
        data: languageArray
    });
};

//
// TRANSLATION ROUTES
//
function translation_makeQuery(clientKey, languageKey, containerKey, translationKey) {
    return;
}

//
// GET translation
//
function translation_get({ clientKey = '',
    languageKey = '',
    containerKey = '',
    translationKey = '' } = {}) {

    const queryString = `clientKey=${clientKey}&languageKey=${languageKey}&containerKey=${containerKey}&translationKey=${translationKey}`;

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["b" /* GET */]({
        route: `api/translation/?${queryString}`
    });
}

function translation_getGroup({ clientKey = '',
    containerKey = '',
    translationKey = '' } = {}) {

    const queryString = `clientKey=${clientKey}&containerKey=${containerKey}&translationKey=${translationKey}`;

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["b" /* GET */]({
        route: `api/translation/group/?${queryString}`
    });
}

function translation_getGroupMeta({ clientKey = '',
    containerKey = '',
    translationKey = '' } = {}) {

    const queryString = `clientKey=${clientKey}&containerKey=${containerKey}&translationKey=${translationKey}`;

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["b" /* GET */]({
        route: `api/translation/group/meta/?${queryString}`
    });
}

//
// POST, PUT, DELETE translation
//
function translation_create({ translation = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('translation') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["c" /* POST */]({
        route: `api/translation`,
        data: translation
    });
}

function translation_createArray({ translationArray = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('translationArray') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["c" /* POST */]({
        route: `api/translation/array`,
        data: translationArray
    });
}

function translation_update({ clientKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('clientKey'),
    languageKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('languageKey'),
    containerKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('containerKey'),
    translationKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('translationKey'),
    translation = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('translation') } = {}) {

    const queryString = `clientKey=${clientKey}&languageKey=${languageKey}&containerKey=${containerKey}&translationKey=${translationKey}`;

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["d" /* PUT */]({
        route: `api/translation/?${queryString}`,
        data: translation
    });
}

function translation_updateArray({ clientKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('clientKey'),
    containerKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('containerKey'),
    translationKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('translationKey'),
    translationArray = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('translationGroup') } = {}) {

    const queryString = `clientKey=${clientKey}&containerKey=${containerKey}&translationKey=${translationKey}`;

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["d" /* PUT */]({
        route: `api/translation/array/?${queryString}`,
        data: translationArray
    });
}

function translation_delete({ clientKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('clientKey'),
    languageKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('languageKey'),
    containerKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('containerKey'),
    translationKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('translationKey') } = {}) {

    const queryString = `clientKey=${clientKey}&languageKey=${languageKey}&containerKey=${containerKey}&translationKey=${translationKey}`;

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["a" /* DELETE */]({
        route: `api/translation/?${queryString}`
    });
}

function translation_deleteGroup({ clientKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('clientKey'),
    containerKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('containerKey'),
    translationKey = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('translationKey') } = {}) {

    const queryString = `clientKey=${clientKey}&containerKey=${containerKey}&translationKey=${translationKey}`;

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["a" /* DELETE */]({
        route: `api/translation/group/?${queryString}`
    });
}

//
// ROUTE container
//
function container_get({ containerKey = '' } = {}) {
    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["b" /* GET */]({
        route: `api/container/?containerKey=${containerKey}`
    });
}

function container_getNoEmpty({ clientKey = '' } = {}) {
    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["b" /* GET */]({
        route: `api/container/noempty/?clientKey=${clientKey}`
    });
}

//
// ROUTE language
//
function language_get({ languageKey = '' } = {}) {
    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["b" /* GET */]({
        route: `api/language/?languageKey=${languageKey}`
    });
}

function languages_create({ language = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])('language') } = {}) {
    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["c" /* POST */]({
        route: 'api/language/create',
        data: language
    });
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_html__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__header_html__);




class Component_Header extends HTMLElement {

    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__header_html___default.a;
    }

    flashMessage(message) {

        let errorBanner = this._root.getElementById('error-banner');

        if (!errorBanner.classList.contains('animated')) errorBanner.classList.add('animated');

        errorBanner.classList.add('active');
        errorBanner.innerHTML = message;

        setTimeout(() => {
            errorBanner.classList.remove('active');
            errorBanner.innerHTML = '';
        }, 3000);
    }

    setIcons({ button1 = null,
        button2 = null } = {}) {

        if (button1 !== null) this._root.querySelector('#btn-header-right1 i.fa').setAttribute('class', `fa ${button1}`);
        if (button2 !== null) this._root.querySelector('#btn-header-right2 i.fa').setAttribute('class', `fa ${button2}`);
    }

    setEventHandlers({ button1_onclick = null,
        button2_onclick = null } = {}) {

        if (button1_onclick !== null) this._root.getElementById('btn-header-right1').onclick = button1_onclick;
        if (button2_onclick !== null) this._root.getElementById('btn-header-right2').onclick = button2_onclick;
    }

    setTheme({ textBig = 'nO THeme',
        textSmall = 'Ordbase',
        editable = false,
        selectable = false,
        deleteable = false,
        newable = false } = {}) {

        this._root.getElementById('btn-header-mid-small').innerHTML = textSmall;
        this._root.getElementById('btn-header-mid-big').innerHTML = textBig;

        let leftButton = this._root.getElementById('btn-header-left');

        leftButton.classList.remove('selectable', 'editable', 'deleteable', 'newable');
        leftButton.classList.remove('editable');
        leftButton.classList.remove('deleteable');
        leftButton.classList.remove('newable');

        if (selectable) {
            leftButton.classList.add('selectable');
        } else if (editable) {
            leftButton.classList.add('editable');
        } else if (deleteable) {
            leftButton.classList.add('deleteable');
        } else if (newable) {
            leftButton.classList.add('newable');
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component_Header;

customElements.define('component-header', Component_Header);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_client_html__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_client_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__edit_client_html__);




class View_EditClient extends HTMLElement {

    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__edit_client_html___default.a;
    }

    setContainerGenerator(generator) {
        this._root.getElementById('edit-client-left-menu').insertBefore(generator, this._root.getElementById('slot-generator'));
    }

    setLanguageFlipper(flipper) {
        this._root.getElementById('edit-client-left-menu').insertBefore(flipper, this._root.getElementById('slot-flipper'));
    }

    setClientForm(form) {
        this._root.insertBefore(form, this._root.getElementById('slot-form'));
    }

    setClientCard(card) {
        this._root.insertBefore(card, this._root.getElementById('slot-card'));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View_EditClient;


customElements.define('view-edit-client', View_EditClient);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_container_html__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_container_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__generator_container_html__);




const UP = 38;
const DOWN = 40;
const ESC = 27;
const ENTER = 13;

class Component_ContainerGenerator extends HTMLElement {

    //
    // PUBLIC
    //
    getContainerKeyArray() {
        return [].slice.apply(this._generatedItems.children).filter(item => {
            return item.classList.contains('selected');
        }).map(item => {
            return item.innerHTML;
        });
    }

    makeItem({ key = '', selected = true }) {
        let fragment = this._buttonTemplate.content.cloneNode(true);
        let button = fragment.querySelector('button');

        button.setAttribute('id', key);
        button.innerHTML = key;
        if (selected) button.classList.add('selected');

        button.addEventListener('click', e => {
            this._deactivateInput();
            button.classList.toggle('selected');
        });

        this._generatedItems.appendChild(fragment);
    }

    //
    // PRIVATE 
    //
    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__generator_container_html___default.a;
        this._buttonTemplate = this._root.getElementById('template-item');

        this._generatedItems = this._root.getElementById('div-generated-items');
        this._input = this._root.getElementById('generator-input');
        this._button = this._root.getElementById('button-activate');
        this._faIcon = this._button.querySelector('i');

        //
        // Event click
        //
        this._button.addEventListener('click', e => {

            if (this._input.style.display === 'block') {
                this._deactivateInput();

                if (this._input.value != '') {
                    this._input.value = '';
                }
            } else {
                this._activateInput();
            }
        });

        //
        // Input key handler
        //
        this._input.addEventListener('keydown', e => {

            if (e.keyCode === ENTER) {

                if (this._input.value != '') {
                    this._generateItem();
                    this._input.value = '';
                }
            } else if (e.keyCode === ESC) {
                this._deactivateInput();
            }
        });

        //
        // Navigate up and down component-items with arrow keys
        //
        this.addEventListener('keydown', e => {
            if (e.keyCode == UP) {
                let activeElement = this._root.activeElement;
                if (activeElement.parentElement == this._generatedItems && activeElement.previousElementSibling != null) {
                    activeElement.previousElementSibling.focus();
                }
            } else if (e.keyCode == DOWN) {

                let activeElement = this._root.activeElement;
                if (activeElement.parentElement == this._generatedItems && activeElement.nextElementSibling != null) {
                    activeElement.nextElementSibling.focus();
                }
            }
        });
    }

    _deactivateInput() {
        this._input.style.display = 'none';
        this._button.classList.remove('cancel');
        this._faIcon.classList.remove('fa-times');
        this._faIcon.classList.add('fa-plus');
    }

    _activateInput() {

        this._input.style.display = 'block';
        this._faIcon.classList.remove('fa-plus');
        this._faIcon.classList.add('fa-times');
        this._button.classList.add('cancel');

        this._input.focus();
    }

    _generateItem() {
        let fragment = this._buttonTemplate.content.cloneNode(true);
        let button = fragment.querySelector('button');

        button.setAttribute('id', this._input.value);
        button.innerHTML = this._input.value;
        button.classList.add('selected');

        button.addEventListener('click', e => {
            this._deactivateInput();
            button.classList.toggle('selected');
        });

        this._generatedItems.appendChild(fragment);
    }

    focus() {
        if (this._generatedItems.firstElementChild != null) this._generatedItems.firstElementChild.focus();else this._button.focus();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component_ContainerGenerator;


customElements.define('component-generator-container', Component_ContainerGenerator);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flipper_language_html__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flipper_language_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__flipper_language_html__);




const UP = 38;
const DOWN = 40;

class Component_LanguageFlipper extends HTMLElement {

    //
    // PUBLIC
    //
    makeItem({ key, text, selected }) {

        let fragment = this._buttonTemplate.content.cloneNode(true);
        let button = fragment.querySelector('button');
        button.setAttribute('id', key);
        button.innerHTML = text;

        if (selected) {
            button.classList.add('selected');
            this._divUp.appendChild(button);
        } else {
            this._divDown.appendChild(button);
        }

        button.addEventListener('click', e => {

            if (button.parentElement.id === 'div-down') {
                this._flipUp(button);
            } else if (button.parentElement.id === 'div-up') {
                this._flipDown(button);
            }

            button.focus();
        });
    }

    selectItem(key) {
        this._flipUp(this._root.getElementById(key));
    }

    setTextUp(text) {
        this._root.getElementById('div-up-header').innerHTML = text;
    }

    setTextDown(text) {
        this._root.getElementById('div-down-header').innerHTML = text;
    }

    getLanguageKeyArray() {
        return [].slice.call(this._divUp.children).map(button => {
            return button.getAttribute('id');
        });
    }

    //
    // PRIVATE
    //
    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__flipper_language_html___default.a;
        this._buttonTemplate = this._root.getElementById('template-button');

        this._divUp = this._root.getElementById('div-up');
        this._divDown = this._root.getElementById('div-down');

        //
        // Naviagte
        //
        this.addEventListener('keydown', e => {
            if (e.keyCode == UP) {
                let activeElement = this._root.activeElement;
                if (activeElement.previousElementSibling != null) {
                    activeElement.previousElementSibling.focus();
                }
            } else if (e.keyCode == DOWN) {

                let activeElement = this._root.activeElement;
                if (activeElement.nextElementSibling != null) {
                    activeElement.nextElementSibling.focus();
                }
            }
        });
    }

    _flipUp(item) {
        item.classList.add('selected');
        this._divDown.removeChild(item);
        this._divUp.appendChild(item);
    }

    _flipDown(item) {
        item.classList.remove('selected');
        this._divUp.removeChild(item);
        this._divDown.appendChild(item);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component_LanguageFlipper;

customElements.define('component-flipper-language', Component_LanguageFlipper);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_client_html__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_client_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__form_client_html__);




class Component_ClientForm extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__form_client_html___default.a;
    }

    setSubmitText(text) {
        this.root.getElementById('button-submit').innerHTML = text;
    }

    getClient() {
        return {
            key: this.root.getElementById('form-client-name').value,
            webpageUrl: this.root.getElementById('form-client-webpage').value,
            thumbnailUrl: this.root.getElementById('form-client-thumbnail').value,
            apiKey: this.root.getElementById('form-client-apikey').value
        };
    }

    setClient(client) {
        this.root.getElementById('form-client-name').value = client.key;
        this.root.getElementById('form-client-webpage').value = client.webpageUrl;
        this.root.getElementById('form-client-thumbnail').value = client.thumbnailUrl;
        this.root.getElementById('form-client-apikey').value = client.apiKey;
    }

    focus() {
        this.root.getElementById('form-client-name').focus();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component_ClientForm;


customElements.define('component-form-client', Component_ClientForm);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = GET;
/* harmony export (immutable) */ __webpack_exports__["a"] = DELETE;
/* harmony export (immutable) */ __webpack_exports__["d"] = PUT;
/* unused harmony export PATCH */
/* harmony export (immutable) */ __webpack_exports__["c"] = POST;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util_js__ = __webpack_require__(0);

// 
// @module Ajax
// @file ajax.js
//

// @doc vanilla Ajax XMLHttpRequest -  https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
// @doc Do research on using fetch instead -- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// @doc CORS - https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
// @doc fetch POST request example - https://stackoverflow.com/questions/29775797/fetch-post-json-data




//
// @function GET
//
function GET({ route = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])() } = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])()) {

    return fetch(route, { method: 'GET' }).then(res => {

        let resjson = res.json();
        console.log('fetch.GET:', '\nroute', route, '\ndata', resjson);

        return resjson;
    });
}

//
// @function DELETE
//
function DELETE({ route = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])() } = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])()) {
    console.log('fetch.DELETE:', '\nroute', route);

    return fetch(route, { method: 'DELETE' });
}

//
// @function PUT
//
function PUT({ route = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])(), data = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])() } = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])()) {
    console.log('fetch.PUT:', '\nroute', route, '\ndata', data);

    return fetch(route, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(data)
    });
}

//
// @function PATCH
//
function PATCH({ route = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])(), data = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])() } = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])()) {
    console.log('fetch.PATCH:', '\nroute', route, '\ndata', data);

    return fetch(route, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
    });
}

//
// @function POST
//
function POST({ route = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])(), data = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])() } = Object(__WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */])()) {
    console.log('fetch.POST:', '\nroute', route, '\ndata', data);

    return fetch(route, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    });
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select_client_html__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select_client_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__select_client_html__);




class View_SelectClient extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__select_client_html___default.a;
    }

    addCard(card) {
        this.root.appendChild(card);
    }

    getCardArray() {
        return [].slice.apply(this.root.querySelectorAll('component-card-client'));
    }

    focus() {
        this.root.querySelector('component-card-client').focus();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View_SelectClient;

customElements.define('view-select-client', View_SelectClient);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<style>:host{height:100%;display:flex;justify-content:center;flex-wrap:wrap;background-color:var(--ordbase-color-light);align-content:flex-start}</style> ";

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_client_html__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_client_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_client_html__);




class Component_ClientCard extends HTMLElement {

    //
    // PRIVATE
    //
    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__card_client_html___default.a;
        this._button = this._root.querySelector('button');

        this._clickHandler = () => console.log('default click.....');
        this._selectHandler = () => console.log('default select.....');
        this._editHandler = () => console.log('default edit.....');

        this._root.addEventListener('click', e => {
            this._clickHandler(this, e);
        });

        this._button.addEventListener('focus', () => {
            if (!this._button.classList.contains('animated')) this._button.classList.add('animated');
        });

        this._button.addEventListener('mouseover', () => {
            if (!this._button.classList.contains('animated')) this._button.classList.add('animated');
        });
    }

    //
    // PUBLIC 
    //
    setEventHandlers({ onselect = (that, e) => {
            console.log('default onselect..');
        },
        onedit = (that, e) => {
            console.log('default onselect..');
        } } = {}) {
        this._selectHandler = onselect;
        this._editHandler = onedit;
    }

    setSelectable() {
        this._button.classList.remove('editable');
        this._clickHandler = this._selectHandler;
    }

    setEditable() {
        this._button.classList.add('editable');
        this._clickHandler = this._editHandler;
    }

    isEditable() {
        return this._button.classList.contains('editable');
    }

    focus() {
        this._button.focus();
    }

    //
    // get Set internal data
    // @note I could have used getters and setters here, but they are not staticly checked in javascript, 
    //       , which means that if someone mispells a getter or a setter name, no error is thrown, 
    //       even if there are no getter or setter with that name. functions on the other hand throw
    //       errors when not found, which is really great.  - JSolsvik 01.08.17
    //
    getKey() {
        return this.getAttribute('id');
    }

    setHeading(name) {
        this._root.getElementById('card-h2').innerHTML = name;
        this._name = name;
    }

    setKey(key) {
        this.setAttribute('id', key);
    }

    setText(text) {
        this._root.getElementById('card-p').innerHTML = text;
    }

    setThumbnail(url) {
        this._root.getElementById('card-img').src = url;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component_ClientCard;

customElements.define('component-card-client', Component_ClientCard);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<style>:host{--box-shadow-color:var(--ordbase-color-success);--box-shadow-min:20px;--box-shadow-max:70px 3px;--animation-speed:.3s;width:250px;height:220px;flex-shrink:0;padding:20px 10px 10px 10px;color:var(--ordbase-color-dark)}button{background-color:transparent;border:none;padding:0;cursor:pointer;color:var(--ordbase-color-dark);background-color:var(--ordbase-color-white)!important}h2{margin-bottom:0;margin-top:7px;padding:0 5px 0 10px}p{font-size:13px;padding:0 5px 0 10px}@keyframes focusAnimation{from{box-shadow:0 0 var(--box-shadow-min) var(--box-shadow-color)}to{box-shadow:0 0 var(--box-shadow-max) var(--box-shadow-color)}}@keyframes defocusAnimation{from{box-shadow:0 0 var(--box-shadow-max) var(--box-shadow-color)}to{box-shadow:0 0 var(--box-shadow-min) var(--box-shadow-color)}}button.animated{animation-name:defocusAnimation;animation-duration:var(--animation-speed)}button.animated:focus,button.animated:hover{animation-name:focusAnimation;animation-duration:var(--animation-speed)}button{--box-shadow-color:var(--ordbase-color-success);box-shadow:0 0 var(--box-shadow-min) var(--ordbase-color-success)}button:focus,button:hover{box-shadow:0 0 var(--box-shadow-max) var(--ordbase-color-success)}.editable{--box-shadow-color:var(--ordbase-color-select);box-shadow:0 0 var(--box-shadow-min) var(--ordbase-color-select)}.editable:focus,.editable:hover{box-shadow:0 0 var(--box-shadow-max) var(--ordbase-color-select)}.deleteable{--box-shadow-color:var(--ordbase-color-danger);box-shadow:0 0 var(--box-shadow-min) var(--ordbase-color-danger)}.deleteable:focus,.deleteable:hover{box-shadow:0 0 var(--box-shadow-max) var(--ordbase-color-danger)}</style> <button class=card-button> <img widt=250 height=125 id=card-img alt=\"Bilde av fylkesmannen\" src=xxxHTMLLINKxxx0.123879636639709470.3049340708267505xxx> <h2 id=card-h2> {{ ddd }}</h2> <p id=card-p> {{ text }}</p> </button>";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = " <link rel=stylesheet href=./node_modules/font-awesome/css/font-awesome.min.css> <style>#btn-header-left.selectable i{color:var(--ordbase-color-success)}#btn-header-left.editable i{color:var(--ordbase-color-select)}#btn-header-left.deleteable i{color:var(--ordbase-color-danger)}#btn-header-left.newable i{color:var(--ordbase-color-fresh)}.icon-button:focus .fa-times,.icon-button:focus .fa-trash,.icon-button:hover .fa-times,.icon-button:hover .fa-trash{color:var(--ordbase-color-danger)}.icon-button:focus .fa-arrow-left,.icon-button:hover .fa-arrow-left{color:var(--ordbase-color-success)}.icon-button:focus .fa-pencil,.icon-button:hover .fa-pencil{color:var(--ordbase-color-select)}.icon-button:focus .fa-plus,.icon-button:hover .fa-plus{color:var(--ordbase-color-fresh)}#button-row{display:flex;text-align:center;min-height:60px;background-color:var(--ordbase-color-dark);color:var(--ordbase-color-white)}button{background-color:transparent;border:none}.icon-button{font-size:40px;flex:0;flex-basis:130px;display:flex;justify-content:center;cursor:pointer}i{width:100%;height:100%;color:var(--ordbase-color-white)}.header-text-button{padding-left:50px;flex-grow:1;color:var(--ordbase-color-white);display:flex;align-items:center}h1{text-align:left;font-size:var(--ordbase-h1-font-size)}h2{padding:10px 0 0 20px;font-size:var(--ordbase-h2-font-size)}#error-banner{color:#fff;text-align:center;font-size:3rem;background-color:var(--ordbase-color-danger)}#error-banner.active{height:100px;padding:30px}#error-banner.animated{animation-name:unFlashError;animation-duration:.5s}#error-banner.active.animated{animation-name:flashError;animation-duration:.5s}@keyframes flashError{from{height:0;padding-top:0}to{height:100px;padding-top:30px}}@keyframes unFlashError{from{height:100px;padding-top:30px}to{height:0;padding-top:0}}</style> <div id=button-row> <button id=btn-header-left class=icon-button> <i class=\"fa fa-square\" aria-hidden=true></i> </button> <div id=btn-header-mid class=header-text-button> <h1 id=btn-header-mid-big> </h1> <h2 id=btn-header-mid-small></h2> </div> <button id=btn-header-right1 class=icon-button> <i class=fa aria-hidden=true></i> </button> <button id=btn-header-right2 class=icon-button> <i class=fa aria-hidden=true></i> </button> </div> <div id=error-banner> </div> ";

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = load_editClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_edit_client_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_header_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_generator_container_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_flipper_language_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_form_client_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__load_selectClient_js__ = __webpack_require__(2);















function load_editClient(clientKey) {

    //
    // 0. Create component instances
    //
    const view = new __WEBPACK_IMPORTED_MODULE_3__views_edit_client_js__["a" /* View_EditClient */]();
    const header = new __WEBPACK_IMPORTED_MODULE_4__components_header_js__["a" /* Component_Header */]();
    const generator = new __WEBPACK_IMPORTED_MODULE_5__components_generator_container_js__["a" /* Component_ContainerGenerator */]();
    const flipper = new __WEBPACK_IMPORTED_MODULE_6__components_flipper_language_js__["a" /* Component_LanguageFlipper */]();
    const form = new __WEBPACK_IMPORTED_MODULE_7__components_form_client_js__["a" /* Component_ClientForm */]();

    //
    // 1. Async calls filling in data in components
    //
    async_client_getContainerKeyArray_container_getNoEmptyArray({
        clientKey: clientKey,
        success: (containerKeyArray, containerNoEmptyArray) => {
            containerKeyArray.forEach(containerKey => {
                generator.makeItem({ key: containerKey, selected: true });
            });

            containerNoEmptyArray.forEach(container => {
                let found = containerKeyArray.find(containerKey => {
                    return containerKey == container.key;
                });
                if (found === undefined) generator.makeItem({ key: container.key, selected: false });
            });

            generator.focus();
        }
    });

    async_language_getArray_client_getLanguageKeyArray({
        clientKey: clientKey,
        success: (languageArray, languageKeyArray) => {

            languageArray.forEach(lang => {
                flipper.makeItem({ key: lang.key, text: `${lang.name} - ${lang.key}`, selected: false });
            });

            languageKeyArray.forEach(key => {
                flipper.selectItem(key);
            });
        }
    });

    async_clientGet({
        clientKey: clientKey,
        success: client => {
            form.setClient(client);
        }
    });

    //
    // 2. Set up header
    ///
    header.setTheme({ textBig: 'Edit Client', setTextSmall: 'Ordbase', editable: true });
    header.setIcons({ button2: __WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_TIMES"] });
    header.setEventHandlers({
        button2_onclick: event => Object(__WEBPACK_IMPORTED_MODULE_8__load_selectClient_js__["a" /* load_selectClient */])()
    });

    //
    // 3. Set up language flipper
    //
    flipper.setTextUp('Selected');
    flipper.setTextDown('Available');

    //
    // 4. Set up form
    //
    form.setSubmitText(`Update ${clientKey}`);
    form.addEventListener('submit', e => {
        e.preventDefault();

        async_client_update({
            client: form.getClient(),
            containerArray: generator.getContainerKeyArray(),
            languageArray: flipper.getLanguageKeyArray(),
            success: () => Object(__WEBPACK_IMPORTED_MODULE_8__load_selectClient_js__["a" /* load_selectClient */])()
        });
    });

    //
    // 5. Create view, inject components and append view to DOM.
    //
    view.setContainerGenerator(generator);
    view.setLanguageFlipper(flipper);
    view.setClientForm(form);
    __WEBPACK_IMPORTED_MODULE_0__App_js__["setHeader"](header);
    __WEBPACK_IMPORTED_MODULE_0__App_js__["setView"](view);
}

//
// @function async_client_getContainerKeyArray_container_getNoEmptyArray
//  @note @todo
//
function async_client_getContainerKeyArray_container_getNoEmptyArray({ clientKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('clientKey'),
    success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success') }) {

    let containerKeyArray = null;

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["c" /* client_getContainers */]({ clientKey: clientKey }).then(_containerKeyArray => {
        containerKeyArray = _containerKeyArray;
        return __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["h" /* container_getNoEmpty */]({ clientKey: clientKey });
    }).then(containerNoEmptyArray => {
        success(containerKeyArray, containerNoEmptyArray);
    }).catch(err => __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](err));
}

//
// @function _
//  @note @todo
//
function async_language_getArray_client_getLanguageKeyArray({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success'),
    clientKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('clientKey') }) {

    let languageArray = null;
    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["i" /* language_get */]().then(_languageArray => {
        languageArray = _languageArray;
        return __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["d" /* client_getLanguages */]({ clientKey: clientKey });
    }).then(languageKeyArray => {
        success(languageArray, languageKeyArray);
    }).catch(error => __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](error));
}

//
// @function async_clientGet
//  @note @todo
//
function async_clientGet({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success'),
    clientKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('clientKey') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["b" /* client_get */]({ clientKey: clientKey }).then(clientArray => {
        let client = clientArray[0];
        success(client);
    }).catch(error => __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](error));
}

//
// @function async_client_update
//  @note @todo
//
function async_client_update({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success'),
    client = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('client'),
    containerArray = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('containerArray'),
    languageArray = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('languageArray')
}) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["g" /* client_update */]({ clientKey: client.key, client: client }).then(res => {
        console.log('client_update():', res.status);
        if (res.status == __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_UPDATED"]) {

            __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["e" /* client_setContainers */]({ clientKey: client.key, containerArray: containerArray }).then(res => {
                if (res.status != __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_CREATED"]) {
                    __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](`code ${res.status}: clientContainers could not be updated`);
                } else {
                    success();
                }
                console.log('client_setContainers(): ', res.status);
            }).catch(error => __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](error));

            __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["f" /* client_setLanguages */]({ clientKey: client.key, languageArray: languageArray }).then(res => {
                if (res.status != __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_CREATED"]) {
                    __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](`code ${res.status}: clientLanguages could not be updated`);
                } else {
                    success();
                }
                console.log('client_setLanguages(): ', res.status);
            }).catch(error => __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](error));
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](`code ${res.status}: CRITICAL ERROR, Client could not be updated... `);
        }
    }).catch(error => __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](error)); // @TODO Display error in view
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = " <style>:host{height:100%;display:flex}#edit-client-left-menu{flex:0 0 350px;background-color:var(--ordbase-color-light);z-index:1;box-shadow:1px 0 5px -2px var(--ordbase-color-dark)}component-flipper-language{margin-top:10px;padding:0}component-generator-container{margin-top:10px}</style> <section id=edit-client-left-menu> <div id=slot-generator class=slot></div> <div id=slot-flipper class=slot></div> </section> <div id=slot-form class=slot></div> <div id=slot-card class=slot></div>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = " <link rel=stylesheet href=./node_modules/font-awesome/css/font-awesome.min.css> <style>h2{font-size:var(--ordbase-h2-font-size);margin-left:10px}input{display:none;width:100%;height:45px;font-size:var(--ordbase-input-font-size);text-align:center}#button-activate{font-size:3.2rem;cursor:pointer;height:50px;width:100%;background-color:transparent;color:var(--ordbase-color-dark);border:1px solid var(--ordbase-color-success);border-width:0 0 2px 0}#button-activate.cancel{border-color:var(--ordbase-color-danger)}#button-activate:focus{outline:0}#button-activate:focus,#button-activate:hover{background-color:var(--ordbase-color-success);color:var(--ordbase-color-white)}#button-activate.cancel:focus,#button-activate.cancel:hover{background-color:var(--ordbase-color-danger);color:var(--ordbase-color-white)}.button-container{margin:0;padding:0;outline:0;height:var(--ordbase-button-height);font-size:var(--ordbase-button-font-size);width:100%;cursor:pointer;background-color:transparent;color:var(--ordbase-color-dark);border:10px solid transparent;border-width:0 0 0 10px}.button-container:focus{outline-color:var(--ordbase-color-dark);outline-width:2px}.button-container:focus,.button-container:hover{background-color:var(--ordbase-color-dark);color:var(--ordbase-color-white)}.button-container.selected,.button-container.selected:focus{border-color:var(--ordbase-color-select)}</style> <h2>Containers</h2> <div id=div-generated-items> </div> <input id=generator-input type=text value=\"\"> <button id=button-activate class=button-add-item> <i class=\"fa fa-plus\" aria-hidden=true></i> </button> <template id=template-item> <button class=button-container></button> </template>";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = " <style>h2{font-size:var(--ordbase-h2-font-size);margin-left:10px}h3{font-size:var(--ordbase-h3-font-size);margin:15px}.button-language{height:var(--ordbase-button-height);font-size:var(--ordbase-button-font-size);width:100%;cursor:pointer;background-color:transparent;color:var(--ordbase-color-dark);border:none;border:10px solid transparent;border-width:0 0 0 10px}.button-language:focus{outline-color:var(--ordbase-color-dark);outline-width:2px}.button-language:focus,.button-language:hover{background-color:var(--ordbase-color-dark);color:var(--ordbase-color-white)}.button-language.selected,.button-language.selected:focus{border-color:var(--ordbase-color-select)}</style> <h2>Languages</h2> <h3 id=div-up-header> Flip up</h3> <div id=div-up></div> <h3 id=div-down-header> Flipdown</h3> <div id=div-down></div> <template id=template-button> <button class=button-language></button> </template>";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = " <style>#form-client{padding-left:10px;font-size:var(--ordbase-form-font-size)}label{color:var(--ordbase-color-dark);font-size:1.5em;font-weight:700}input{font-size:var(--ordbase-input-font-size);margin:0 20px 10px 4px;width:400px}fieldset{border:none}#button-submit{font-size:var(--ordbase-button-font-size);width:430px;height:var(--ordbase-button-height);cursor:pointer;background-color:transparent;color:var(--ordbase-color-dark);border:2px solid var(--ordbase-color-success);border-width:0 0 2px 0}#button-submit.selected,#button-submit:focus,#button-submit:hover{background-color:var(--ordbase-color-success);color:var(--ordbase-color-white)}</style> <form id=form-client> <h2>Basic Info</h2> <fieldset> <label for=form-client-name>Name</label><br> <input id=form-client-name class=ordbase-input type=text data-min-size=20> </fieldset> <fieldset> <label for=form-client-apikey>Api nøkkel</label><br> <input id=form-client-apikey class=ordbase-input type=text data-min-size=20> </fieldset> <fieldset> <label for=form-client-webpage>Nettadresse</label><br> <input id=form-client-webpage class=ordbase-input type=text data-min-size=20> </fieldset> <fieldset> <label for=form-client-thumbnail>Bildeadresse</label><br> <input id=form-client-thumbnail class=ordbase-input type=text data-min-size=20 value=http://placehold.it/250x125/FFC107> </fieldset> <br> <br> <button id=button-submit type=submit> {{ submitButtonText }} </button> </form> ";

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = load_newClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_edit_client_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_header_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_generator_container_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_flipper_language_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_form_client_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__load_selectClient_js__ = __webpack_require__(2);















function load_newClient(clientKey) {

    //
    // 0. Create component instances
    //
    const view = new __WEBPACK_IMPORTED_MODULE_3__views_edit_client_js__["a" /* View_EditClient */]();
    const header = new __WEBPACK_IMPORTED_MODULE_4__components_header_js__["a" /* Component_Header */]();
    const generator = new __WEBPACK_IMPORTED_MODULE_5__components_generator_container_js__["a" /* Component_ContainerGenerator */]();
    const flipper = new __WEBPACK_IMPORTED_MODULE_6__components_flipper_language_js__["a" /* Component_LanguageFlipper */]();
    const form = new __WEBPACK_IMPORTED_MODULE_7__components_form_client_js__["a" /* Component_ClientForm */]();

    //
    // 1. Fire async call
    //
    async_client_getLanguageKeyArray({
        success: languageKeyArray => {
            languageKeyArray.forEach(lang => {
                flipper.makeItem({ key: lang.key, text: `${lang.name} - ${lang.key}`, selected: false });
            });
        }
    });

    //
    // 2. Set up header 
    //
    header.setTheme({ textBig: 'New Client', textSmall: 'Ordbase', newable: true });
    header.setIcons({ button2: __WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_TIMES"] });
    header.setEventHandlers({
        button2_onclick: event => Object(__WEBPACK_IMPORTED_MODULE_8__load_selectClient_js__["a" /* load_selectClient */])()
    });

    //
    // 4. Component flipper and generator
    //
    flipper.setTextUp('Selected');
    flipper.setTextDown('Available');

    //
    // 5. Component form
    //
    form.setSubmitText('Create client');
    form.addEventListener('submit', e => {
        e.preventDefault();

        async_client_create({
            header: header,
            client: form.getClient(),
            containerArray: generator.getContainerKeyArray(),
            languageArray: flipper.getLanguageKeyArray(),
            success: () => Object(__WEBPACK_IMPORTED_MODULE_8__load_selectClient_js__["a" /* load_selectClient */])()
        });
    });

    //
    // 6. Inject components and append view to DOM.
    //
    view.setContainerGenerator(generator);
    view.setLanguageFlipper(flipper);
    view.setClientForm(form);
    __WEBPACK_IMPORTED_MODULE_0__App_js__["setHeader"](header);
    __WEBPACK_IMPORTED_MODULE_0__App_js__["setView"](view);
    form.focus();
}

//
// @function async_client_getLanguageKeyArray
//  @note @todo
//
function async_client_getLanguageKeyArray({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["i" /* language_get */]().then(languageKeyArray => {

        if (languageKeyArray.length > 0) {
            success(languageKeyArray);
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"]('There are no supported languages in the database....');
        }
    }).catch(error => __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](error));
}

//
// @function async_client_create
//  @note @todo
//
function async_client_create({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success'),
    client = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('client'),
    containerArray = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('containerArray'),
    languageArray = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('languageArray') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["a" /* client_create */]({ client: client }).then(res => {
        console.log('client_create(): ', res.status);

        if (res.status == __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_CREATED"]) {

            __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["e" /* client_setContainers */]({ clientKey: client.key, containerArray: containerArray }).then(res => {
                if (res.status != __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_CREATED"]) {
                    __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](`code ${res.status}: clientContainers could not be created`);
                } else {
                    success();
                }
                console.log('client_setContainers(): ', res.status);
            }).catch(error => console.error(error));

            __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["f" /* client_setLanguages */]({ clientKey: client.key, languageArray: languageArray }).then(res => {
                if (res.status != __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_CREATED"]) {
                    __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](`code ${res.status}: clientLanguages could not be created`);
                } else {
                    success();
                }
                console.log('client_setLanguages(): ', res.status);
            }).catch(error => console.error(error));
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](`code ${res.status}: Client could not be created. Client may already exist`);
        }
    }).catch(error => __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](error)); // @TODO Display error in view
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = load_selectTranslation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_select_translation_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_header_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_card_translation_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_generator_translation_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_picker_container_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__load_selectClient_js__ = __webpack_require__(2);















//
// @function load_selectTranslation
//  @note @todo
//
function load_selectTranslation(clientKey) {

    //
    // 0. Init components
    //
    const view = new __WEBPACK_IMPORTED_MODULE_3__views_select_translation_js__["a" /* View_SelectTranslation */]();
    const header = new __WEBPACK_IMPORTED_MODULE_4__components_header_js__["a" /* Component_Header */]();
    const generator = new __WEBPACK_IMPORTED_MODULE_6__components_generator_translation_js__["a" /* Component_TranslationGenerator */]();
    const picker = new __WEBPACK_IMPORTED_MODULE_7__components_picker_container_js__["a" /* Component_ContainerPicker */]();
    const cardPrototype = new __WEBPACK_IMPORTED_MODULE_5__components_card_translation_js__["a" /* Component_TranslationCard */]();
    const languageKeyArray = new Array();

    //
    // 1. Async calls
    //
    // Populate languageArray
    async_client_getLanguageKeyArray({
        clientKey: clientKey,
        success: _languageKeyArray => {
            languageKeyArray.push.apply(languageKeyArray, _languageKeyArray);
        }
    });

    // Populate picker and set up default item
    async_client_getContainerKeyArray({
        clientKey: clientKey,
        success: containerKeyArray => {

            // Populate generator with translation cards
            async_translation_getGroupMetaArray({
                clientKey: clientKey,
                containerKey: containerKeyArray[0],
                success: groupMetaArray => {
                    groupMetaArray.forEach(groupMeta => {
                        let card = makeTranslationCard({ cardPrototype: cardPrototype, groupMeta: groupMeta, languageKeyArray: languageKeyArray });
                        generator.addCard(card);
                    });
                }
            });

            containerKeyArray.forEach(containerKey => {

                picker.makeItem({
                    key: containerKey,
                    text: containerKey,

                    // On picker-item click, reload all translation cards
                    onclick: e => {

                        async_translation_getGroupMetaArray({
                            clientKey: clientKey,
                            containerKey: picker.getContainerKey(),
                            success: groupMetaArray => {
                                generator.clearItems();
                                groupMetaArray.forEach(groupMeta => {
                                    let card = makeTranslationCard({ cardPrototype: cardPrototype, groupMeta: groupMeta, languageKeyArray: languageKeyArray });
                                    generator.addCard(card);
                                });
                                generator.focus();
                            }
                        });

                        header.setTheme({ textBig: 'Select translation', selectable: true });
                    }
                });
            });

            picker.setDefaultItem();
            picker.focus();
        }
    });

    //
    // 2. Hook up Translation card event handlers
    //
    cardPrototype.setEventHandlers({
        onopen: (card, e) => {

            // Generate fieldsets
            async_translation_getGroup({
                clientKey: clientKey,
                containerKey: picker.getContainerKey(),
                translationKey: card.getTranslationKey(),
                success: group => {

                    languageKeyArray.forEach(languageKey => {

                        let item = group.items.find(item => {
                            return item.languageKey === languageKey;
                        });

                        if (item !== undefined) card.makeFieldset({ languageKey: item.languageKey, text: item.text, isComplete: item.isComplete });else card.makeFieldset({ languageKey: languageKey, text: 'default*', isComplete: false });
                    });

                    card.display();
                }
            });

            // @TODO close other open cards
            header.setTheme({ textBig: 'Edit translation', editable: true });
            card.open({ languageCount: languageKeyArray.length });
        },

        onclose: () => {
            header.setTheme({ textBig: 'Select translation', selectable: true });
        },

        ondelete: (card, e) => {
            // Delete translation
            async_translation_delete({
                clientKey: clientKey,
                containerKey: picker.getContainerKey(),
                translationKey: card.getTranslationKey(),
                success: () => {
                    card.delete();
                    generator.getCardArray().forEach(_card => _card.close());
                    generator.focus();
                }
            });
        },
        onsubmit: (card, e) => {

            let translationArray = new Array();
            let formData = card.getFormData();

            formData.fieldsetArray.forEach(fieldset => {

                if (fieldset.text === 'default*') fieldset.text = 'default';

                translationArray.push({
                    clientKey: clientKey,
                    languageKey: fieldset.languageKey,
                    containerKey: picker.getContainerKey(),
                    key: formData.translationKey,
                    text: fieldset.text,
                    isComplete: fieldset.isComplete
                });
            });

            async_translation_updateArray({ translationArray: translationArray,

                success: () => {
                    //
                    // @note Here I am updating ALL cards withing a container, even though 
                    //       only 1 card has been updated. It would be better to JUST updated that card.
                    //       The reason I dont do that yet, was that it was faster to just copy paste existing code snippet. - JSolsvik 02.08.17
                    //
                    generator.clearItems();

                    async_translation_getGroupMetaArray({
                        clientKey: clientKey,
                        containerKey: picker.getContainerKey(),
                        success: groupMetaArray => {
                            groupMetaArray.forEach(groupMeta => {
                                let card = makeTranslationCard({ cardPrototype: cardPrototype, groupMeta: groupMeta, languageKeyArray: languageKeyArray });
                                generator.addCard(card);
                            });
                            generator.focus();
                            generator.deactivateInput();
                        }
                    });
                }
            });
        }
    });

    //
    // 2. Setup header
    //
    header.setTheme({ textSmall: 'Ordbase', textBig: 'Select Translation', selectable: true });
    header.setIcons({ button1: __WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_TRASH"], button2: __WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_ARROW_LEFT"] });
    header.setEventHandlers({

        // 2.1 Delete translation
        button1_onclick: e => {

            let cardArray = generator.getCardArray();

            if (cardArray.length > 0) {
                if (!cardArray[0].isDeleteable()) {
                    cardArray.forEach(card => {
                        card.close();
                        card.setDeleteable();
                    });

                    header.setTheme({ deleteable: true, textBig: 'Delete Translation' });
                    header.setIcons({ button1: '', button2: __WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_TIMES"] });
                    header.setEventHandlers({
                        button2_onclick: e => {
                            cardArray.forEach(card => card.setOpenable());
                            header.setTheme({ textBig: 'Select Translation', selectable: true });
                            header.setIcons({ button1: __WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_TRASH"], button2: __WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_ARROW_LEFT"] });
                            header.setEventHandlers({ button2_onclick: e => {
                                    Object(__WEBPACK_IMPORTED_MODULE_8__load_selectClient_js__["a" /* load_selectClient */])();
                                } });
                            generator.focus();
                        }
                    });
                    generator.focus();
                }
            } else {
                __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"]('There is nothing to delete in this container...');
                picker.focus();
            }
        },
        // 2.2 Back to select client view
        button2_onclick: e => Object(__WEBPACK_IMPORTED_MODULE_8__load_selectClient_js__["a" /* load_selectClient */])()
    });

    //
    // 3. Setup Component_TranslationGenerator
    //
    generator.OnGenerate(e => {

        let translationArray = new Array();

        languageKeyArray.forEach(languageKey => {

            translationArray.push({
                clientKey: clientKey,
                languageKey: languageKey,
                containerKey: picker.getContainerKey(),
                key: generator.getInputValue(),
                text: 'default',
                isComplete: false
            });
        });

        async_translation_createArray({
            translationArray: translationArray,
            success: groupMeta => {
                let card = makeTranslationCard({ cardPrototype: cardPrototype, groupMeta: groupMeta, languageKeyArray: languageKeyArray });
                generator.addCard(card);
            }
        });
    });

    //
    // 5. Insert components into view, and add view to DOM
    //
    view.setTranslationGenerator(generator);
    view.setContainerPicker(picker);
    __WEBPACK_IMPORTED_MODULE_0__App_js__["setHeader"](header);
    __WEBPACK_IMPORTED_MODULE_0__App_js__["setView"](view);
}

//
// @function makeTranslationCard
//
function makeTranslationCard({ cardPrototype = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('cardPrototype'),
    groupMeta = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('groupMeta'),
    languageKeyArray = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('languageKeyArray') }) {

    if (languageKeyArray.length === 0) {
        __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"]('No languages registered yet....');
        throw Error('panic: no languages registered yet...');
    }

    let card = new __WEBPACK_IMPORTED_MODULE_5__components_card_translation_js__["a" /* Component_TranslationCard */]();

    card.setTranslationKey(groupMeta.key);

    languageKeyArray.forEach(languageKey => {
        let item = groupMeta.items.find(item => item.languageKey == languageKey);

        if (item !== undefined) {
            card.makeLanguagekeyComplete(item.languageKey, item.isComplete);
        } else {
            card.makeLanguagekeyComplete(languageKey, false);
        }
    });

    card.setEventHandlers(cardPrototype.getEventHandlers());
    return card;
}

//
// @function __async__getLanguageKeyArray
//
function async_client_getLanguageKeyArray({ clientKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('clientKey'),
    success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["d" /* client_getLanguages */]({ clientKey: clientKey }).then(languageKeyArray => {
        success(languageKeyArray);
    }).catch(err => console.error(err));
}

//
// @function async_translation_getGroup
//
function async_translation_getGroup({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success'),
    clientKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('clientKey'),
    containerKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('containerKey'),
    translationKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('translationKey') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["l" /* translation_getGroup */]({ clientKey: clientKey,
        containerKey: containerKey,
        translationKey: translationKey }).then(groupArray => {
        if (groupArray.length > 0) {
            let group = groupArray[0];
            success(group);
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"]('Pick a container to enable editing!');
        }
    }).catch(err => console.error(err));
}

//
// @function __async__getContainerKeyArray 
//
function async_client_getContainerKeyArray({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success'),
    clientKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('clientKey') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["c" /* client_getContainers */]({ clientKey: clientKey }).then(containerKeyArray => {
        if (containerKeyArray.length > 0) success(containerKeyArray);else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"]('There are no containers in this client...');
        }
    }).catch(err => console.error(err));
}

//
// @function async_translation_getGroupMetaArray
//
function async_translation_getGroupMetaArray({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success'),
    clientKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('clientKey'),
    containerKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('containerKey') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["m" /* translation_getGroupMeta */]({ clientKey: clientKey,
        containerKey: containerKey }).then(groupMetaArray => {
        success(groupMetaArray);
    }).catch(err => console.error(err));
}

//
// @function async_translation_getGroupMeta
//
function async_translation_getGroupMeta({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success'),
    clientKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('clientKey'),
    containerKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('containerKey'),
    translationKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('translationKey') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["m" /* translation_getGroupMeta */](arguments[0]).then(groupMetaArray => {
        let groupMeta = groupMetaArray[0];
        success(groupMeta);
    }).catch(err => console.error(err));
}

//
// @function async_translation_createArray
//
function async_translation_createArray({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success'),
    translationArray = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('translationArray') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["j" /* translation_createArray */]({ translationArray: translationArray }).then(res => {

        if (res.status != __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_CREATED"]) {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](`${res.status}: Was not able to create new translations...`);
            throw new Error('translation_createArray(): ', res.status);
        }

        return __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["m" /* translation_getGroupMeta */]({ clientKey: translationArray[0].clientKey,
            containerKey: translationArray[0].containerKey,
            translationKey: translationArray[0].key });
    }).then(groupMetaArray => {
        let groupMeta = groupMetaArray[0];
        success(groupMeta);
    }).catch(err => console.error(err));
}

//
// @function async_translation_delete
//

function async_translation_updateArray({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success'), translationArray = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('translationArray') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["n" /* translation_updateArray */]({ translationArray: translationArray,
        clientKey: translationArray[0].clientKey,
        containerKey: translationArray[0].containerKey,
        translationKey: translationArray[0].key }).then(res => {
        console.log('translation_updateArray():', res.status);

        if (__WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_UPDATED"]) {
            success();
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"]('Code ${res.status}: Something went wrong while updating the translations..');
        }
    }).catch(err => console.error(err));
}

//
// @function async_translation_delete
//
function async_translation_delete({ success = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('success'),
    clientKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('clientKey'),
    containerKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('containerKey'),
    translationKey = Object(__WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */])('translationKey') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["k" /* translation_deleteGroup */]({ clientKey: clientKey,
        containerKey: containerKey,
        translationKey: translationKey }).then(res => {

        console.log('translation_deleteGroup():', res.status);

        if (res.status == __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_OK"]) {
            success();
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["flashError"](`${res.status}: Was not able to delete card...`);
        }
    }).catch(err => console.error(err));
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select_translation_html__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select_translation_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__select_translation_html__);




const UP = 38;
const DOWN = 40;

class View_SelectTranslation extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__select_translation_html___default.a;

        this.activeContainerButton = null;
        this.activeTranslationCard = null;

        //
        // Navigation
        //
        this.addEventListener('keydown', e => {
            if (e.keyCode == UP) {
                let activeElement = this.root.activeElement;
                if (activeElement.previousElementSibling != null) {
                    activeElement.previousElementSibling.focus();
                }
            } else if (e.keyCode == DOWN) {
                let activeElement = this.root.activeElement;
                if (activeElement.nextElementSibling != null) {
                    activeElement.nextElementSibling.focus();
                }
            }
        });
    }

    setContainerPicker(picker) {
        this.root.getElementById('select-translation-menu').appendChild(picker);
    }

    setTranslationGenerator(generator) {
        this.root.getElementById('select-translation-table').appendChild(generator);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View_SelectTranslation;

customElements.define('view-select-translation', View_SelectTranslation);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = " <style>:host{display:flex;min-height:100%}h2{padding:10px;margin:0;font-size:var(--ordbase-h2-font-size);box-shadow:0 1px 5px -2px var(--ordbase-color-dark)}#select-translation-menu{min-height:100%;width:300px;display:flex;flex-direction:column;background-color:var(--ordbase-color-light);z-index:1;box-shadow:1px 0 5px -2px var(--ordbase-color-dark)}#select-translation-table{min-height:100%;display:flex;flex-direction:column;flex:1;background-color:var(--ordbase-color-white)}ordbase-button-select{font-size:1rem}ordbase-card-translation{font-size:1rem}</style> <section id=select-translation-menu> </section> <section id=select-translation-table> </section> ";

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_translation_html__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_translation_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_translation_html__);




class Component_TranslationCard extends HTMLElement {
    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__card_translation_html___default.a;

        this._button = this._root.querySelector('button');
        this._form = this._root.querySelector('form');
        this.__template__languageKeyComplete = this._root.getElementById('template-languagekey-complete');
        this.__template__fieldset = this._root.getElementById('template-fieldset');

        this._clickHandler = () => console.log('default click....');
        this._submitHandler = () => console.log('default submit....');
        this._deleteHandler = () => console.log('default delete.....');
        this._openHandler = () => console.log('default select.....');
        this._closeHandler = () => console.log('default close.....');

        //
        // Enable animation
        //
        this._button.addEventListener('focus', () => {
            if (!this._button.classList.contains('animated')) this._button.classList.add('animated');
        });

        this._button.addEventListener('mouseover', () => {
            if (!this._button.classList.contains('animated')) this._button.classList.add('animated');
        });

        this._button.addEventListener('click', e => {
            this._clickHandler(this, e);
        });

        this._form.addEventListener('submit', e => {
            e.preventDefault();
            this._submitHandler(this, e);
        });
    }

    //
    // PUBLIC
    //
    setEventHandlers({ onopen, onclose, ondelete, onsubmit }) {

        this._openHandler = (that, e) => {
            onopen(that, e);
            this._clickHandler = this._closeHandler;
        };

        this._deleteHandler = (that, e) => {
            ondelete(that, e);
            this._clickHandler = this._selectHandler;
        };

        this._closeHandler = (that, e) => {

            onclose(that, e);
            this.close();
            this._clickHandler = this._openHandler;
        };

        this._submitHandler = onsubmit;
        this._clickHandler = this._openHandler;
    }

    getEventHandlers() {
        return {
            onopen: this._openHandler,
            ondelete: this._deleteHandler,
            onsubmit: this._submitHandler,
            onclose: this._closeHandler
        };
    }

    open({ languageCount }) {
        this._root.getElementById('form-translation-key').value = this.getTranslationKey();

        this._button.classList.add('selected');
        this.style.setProperty('--fieldset-count', languageCount + 2); // Give data to the animation
        this._form.classList.add('active'); // Start the CSS animation 
    }

    display() {
        [].slice.apply(this._root.querySelectorAll('fieldset')).forEach(fieldset => {
            fieldset.style.display = 'block';
        });
    }

    close() {
        this._form.classList.remove('active');

        this._button.classList.remove('selected');

        [].slice.apply(this._root.querySelectorAll('fieldset')).forEach(fieldset => {
            if (fieldset.classList.contains('generated')) fieldset.parentElement.removeChild(fieldset);else fieldset.style.display = 'none';
        });
    }

    focus() {
        this._button.focus();
    }

    delete() {
        this.parentElement.removeChild(this);
    }

    isDeleteable() {
        return this._button.classList.contains('deleteable');
    }

    //
    // Getters and setters
    //
    setOpenable() {
        this._clickHandler = this._openHandler;
        this._button.classList.remove('deleteable');
    }
    setDeleteable() {
        this._clickHandler = this._deleteHandler;
        this._button.classList.add('deleteable');
    }

    setTranslationKey(key) {
        this._root.getElementById('card-translation-key').innerHTML = key;
    }

    getTranslationKey() {
        return this._root.getElementById('card-translation-key').innerHTML;
    }

    getFormData() {
        return {
            translationKey: this._root.getElementById('form-translation-key').value,
            fieldsetArray: [].slice.apply(this._root.querySelectorAll('.generated')).map(fieldset => {
                return {
                    languageKey: fieldset.querySelector('label').innerHTML,
                    text: fieldset.querySelector('input[type=text]').value,
                    isComplete: fieldset.querySelector('input[type=checkbox]').checked
                };
            })
        };
    }

    //
    // Make functions
    //
    makeFieldset({ languageKey, text, isComplete }) {

        let fragment = this.__template__fieldset.content.cloneNode(true);

        fragment.querySelector('label').setAttribute('for', `form-translation-${languageKey}`);
        fragment.querySelector('label').innerHTML = languageKey;
        fragment.querySelector('input[type="text"]').setAttribute('id', `form-translation-${languageKey}`);
        fragment.querySelector('input[type="text"]').value = text;
        fragment.querySelector('input[type="checkbox"]').checked = isComplete;
        fragment.querySelector('fieldset').classList.add('generated');

        this._form.insertBefore(fragment, this._root.getElementById('fieldset-button-submit'));
    }

    makeLanguagekeyComplete(languageKey, isComplete) {

        let fragment = this.__template__languageKeyComplete.content.cloneNode(true);

        fragment.querySelector('span').innerHTML = languageKey;
        if (isComplete === true) {
            fragment.querySelector('i').classList.remove('fa-times');
            fragment.querySelector('i').classList.add('fa-check');
        }
        this._root.getElementById('array-languagekey-complete').appendChild(fragment);
    }

    getTranslationGroup() {
        return {};
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component_TranslationCard;

customElements.define('component-card-translation', Component_TranslationCard);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = " <link rel=stylesheet href=./node_modules/font-awesome/css/font-awesome.min.css> <style>:host{width:100%;--fieldset-count:0;--input-height:65px}button{background-color:var(--ordbase-color-light);color:var(--ordbase-color-dark);display:flex;flex-wrap:wrap;margin-right:0;padding:0 4% 0 4%;width:100%;min-height:75px;font-size:var(--ordbase-button-font-size);border:10px solid transparent;border-width:0 0 0 10px}button:focus,button:hover{background-color:var(--ordbase-color-dark);color:var(--ordbase-color-white);cursor:pointer}button.selected,button.selected:focus{border-color:var(--ordbase-color-select)}#card-translation-key{flex:0 0 100px}#array-languagekey-complete{flex:1;display:flex;justify-content:flex-end;flex-wrap:wrap}.languagekey-complete{display:flex;flex:0 0 75px;margin:0 8px 0 5px;justify-content:center;font-size:1.9rem}.languagekey-complete span{margin-right:5px}.fa-check{color:var(--ordbase-color-success)}.fa-times{color:var(--ordbase-color-danger)}.deleteable,button.selected.deleteable{border:10px solid var(--ordbase-color-danger);border-width:0 0 0 10px;margin:2px 0 2px 0}form{height:0;background-color:var(--ordbase-color-light);box-shadow:inset 2px 0 10px -2px var(--ordbase-color-dark)}form.active{height:calc(100px + var(--fieldset-count) * var(--input-height));padding:20px}label{color:var(--ordbase-color-dark);font-size:1.5rem;font-weight:700}input.text-translation{font-size:var(--ordbase-input-font-size);margin:0 20px 10px 4px;width:400px}input.check-iscomplete{cursor:pointer;width:30px;height:30px;border-radius:3px;border:2px solid var(--ordbase-color-dark)}.checkbox-text{font-size:2rem}fieldset{display:none;border:none}#button-submit{font-size:var(--ordbase-button-font-size);width:400px;height:30px;cursor:pointer;background-color:transparent;color:var(--ordbase-color-dark);border:2px solid var(--ordbase-color-success);border-width:0 0 2px 0}#button-submit.selected,#button-submit:focus,#button-submit:hover{background-color:var(--ordbase-color-success);color:var(--ordbase-color-white)}@keyframes pushForm{from{height:0}to{height:calc(100px + var(--fieldset-count) * var(--input-height))}}@keyframes popForm{from{height:calc(100px + var(--fieldset-count) * var(--input-height))}to{height:0}}form.animated{animation-name:popForm;animation-duration:160ms}form.active.animated{animation-name:pushForm;animation-duration:160ms}</style> <button class=btn-load-translation-editor> <span id=card-translation-key class=translation-key>{{ translationKey }}</span> <div id=array-languagekey-complete> <template id=template-languagekey-complete> <div class=languagekey-complete> <span>{{languageKey}}</span> <i class=\"fa fa-times\"></i> </div> </template> </div> </button> <form> <fieldset> <label for=form-translation-key>Key</label><br> <input id=form-translation-key class=text-translation type=text data-min-size=20 value=\"\"> </fieldset> <template id=template-fieldset> <fieldset class=generated> <label for=\"form-translation-{{ languageCode }}\">Key</label><br> <input class=text-translation id=\"form-translation-{{ languageCode  }}\" type=text data-min-size=20 value=\"\"> <input class=check-iscomplete type=checkbox> <span class=checkbox-text>Complete </span> </fieldset> </template> <fieldset id=fieldset-button-submit> <button id=button-submit type=submit> Update </button> </fieldset> </form>";

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_translation_html__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_translation_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__generator_translation_html__);




const UP = 38;
const DOWN = 40;
const ESC = 27;
const ENTER = 13;
const TAB = 9;
const BACKSPACE = 8;

class Component_TranslationGenerator extends HTMLElement {

    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__generator_translation_html___default.a;

        this._generatedItems = this._root.getElementById('div-generated-items');
        this._input = this._root.querySelector('input');
        this._button = this._root.getElementById('button-generate');
        this._faIcon = this._button.querySelector('i');

        this._lastOpenCard = null;
        this._generateHandler = item => {
            console.log('Default OnGenerate...');
        };

        //
        // Event click
        //
        this._button.addEventListener('click', e => {

            if (this._input.style.display === 'block') {
                this.deactivateInput();

                if (this._input.value != '') {
                    this._input.value = '';
                }
            } else {
                this.activateInput();
            }
        });

        //
        // Navigate up and down component-items with arrow keys
        //
        this.addEventListener('keydown', e => {
            if (e.keyCode == UP) {
                let activeElement = this._root.activeElement;
                if (activeElement.parentElement == this._generatedItems && activeElement.previousElementSibling != null) {
                    activeElement.previousElementSibling.focus();
                }
            } else if (e.keyCode == DOWN) {

                let activeElement = this._root.activeElement;
                if (activeElement.parentElement == this._generatedItems && activeElement.nextElementSibling != null) {
                    activeElement.nextElementSibling.focus();
                }
            }
        });
    }

    deactivateInput() {
        this._input.style.display = 'none';
        this._button.classList.remove('cancel');
        this._faIcon.classList.remove('fa-times');
        this._faIcon.classList.add('fa-plus');
        this._button.focus();
    }

    activateInput() {
        this._input.style.display = 'block';
        this._faIcon.classList.remove('fa-plus');
        this._faIcon.classList.add('fa-times');
        this._button.classList.add('cancel');
        this._input.focus();
    }

    OnGenerate(handler) {
        this._generateHandler = handler;

        this._input.addEventListener('keydown', e => {
            if (e.keyCode === ENTER) {

                if (this._input.value != '') {
                    this._generateHandler.apply(this, e);
                    this._input.value = '';
                }
            } else if (e.keyCode === ESC) {
                this.deactivateInput();
            }
        });
    }

    getInputValue() {
        return this._input.value;
    }

    setButtonHeight(height) {
        this._button.style.height = `${height}px`;
        this._input.style.height = `${height - 10}px`;
    }

    addCard(card) {
        card.classList.add('generated');
        this._root.getElementById('div-generated-items').appendChild(card);

        card.addEventListener('click', e => {
            if (this._lastOpenCard != null && this._lastOpenCard != card) {
                this._lastOpenCard.close();
                this._lastOpenCard._clickHandler = this._lastOpenCard._openHandler;
            }
            this._lastOpenCard = card;
        });
    }

    clearItems() {
        this._root.getElementById('div-generated-items').innerHTML = '';
    }

    focus() {
        //
        // @NOTE this is a dependency that relies on an external component interface.
        //       This is the only place in the app there exists a inter-component dependency of this kind.
        //        JSolsvik - 08.08.17
        //
        if (this._generatedItems.firstElementChild != null) this._generatedItems.firstElementChild._button.focus();else this._button.focus();
    }

    getCardArray() {
        console.log(this._root.getElementById('div-generated-items'));
        return [].slice.apply(this._root.getElementById('div-generated-items').children);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component_TranslationGenerator;


customElements.define('component-generator-translation', Component_TranslationGenerator);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = " <link rel=stylesheet href=./node_modules/font-awesome/css/font-awesome.min.css> <style>input{display:none;width:100%;height:45px;font-size:var(--ordbase-input-font-size);text-align:center}#button-generate{font-size:3.2rem;cursor:pointer;height:50px;width:100%;background-color:transparent;color:var(--ordbase-color-dark);border:1px solid var(--ordbase-color-success);border-width:0 0 2px 0}#button-generate.cancel{border-color:var(--ordbase-color-danger)}#button-generate:focus{outline:0}#button-generate:focus,#button-generate:hover{background-color:var(--ordbase-color-success);color:var(--ordbase-color-white)}#button-generate.cancel:focus,#button-generate.cancel:hover{background-color:var(--ordbase-color-danger);color:var(--ordbase-color-white)}</style> <div id=div-generated-items> </div> <input type=text value=\"\"> <button id=button-generate class=button-add-item> <i class=\"fa fa-plus\" aria-hidden=true></i> </button>";

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__picker_container_html__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__picker_container_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__picker_container_html__);




const UP = 38;
const DOWN = 40;

class Component_ContainerPicker extends HTMLElement {

    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__picker_container_html___default.a;

        this._lastSelectedItem = null;
        this.__template__containerButton = this._root.getElementById('template-button');

        // Navigation with keyboard
        this.addEventListener('keydown', e => {
            if (e.keyCode == UP) {
                let activeElement = this._root.activeElement;
                if (activeElement.previousElementSibling != null) {
                    activeElement.previousElementSibling.focus();
                }
            } else if (e.keyCode == DOWN) {

                let activeElement = this._root.activeElement;
                if (activeElement.nextElementSibling != null) {
                    activeElement.nextElementSibling.focus();
                }
            }
        });
    }

    makeItem({ key, text, onclick }) {

        let fragment = this.__template__containerButton.content.cloneNode(true);
        let button = fragment.querySelector('button');

        button.setAttribute('id', key);
        button.innerHTML = text;

        button.addEventListener('click', e => {

            button.classList.add('selected');
            this._lastSelectedItem.classList.remove('selected');
            this._lastSelectedItem = button;

            onclick(e);
        });

        this._root.getElementById('div-container-buttons').appendChild(button);
    }

    getContainerKey() {
        return this._lastSelectedItem.getAttribute('id');
    }

    setDefaultItem() {
        let defaultItem = this._root.getElementById('div-container-buttons').firstElementChild;
        defaultItem.classList.add('selected');
        this._lastSelectedItem = defaultItem;
    }

    setHeaderText(text) {
        this._root.getElementById('div-container-header').innerHTML = text;
    }

    focus() {
        this._root.getElementById('div-container-buttons').firstElementChild.focus();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component_ContainerPicker;

customElements.define('component-picker-container', Component_ContainerPicker);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = " <style>h2{font-size:var(--ordbase-h2-font-size);margin-left:10px}h3{font-size:var(--ordbase-h3-font-size);margin:15px}.button-container{height:var(--ordbase-button-height);font-size:var(--ordbase-button-font-size);width:100%;cursor:pointer;background-color:transparent;color:var(--ordbase-color-dark);border:none;border:10px solid transparent;border-width:0 0 0 10px}.button-container:focus{outline-color:var(--ordbase-color-dark);outline-width:2px}.button-container:focus,.button-container:hover{background-color:var(--ordbase-color-dark);color:var(--ordbase-color-white)}.button-container.selected,.button-container.selected:focus{border-color:var(--ordbase-color-select)}</style> <h2 id=div-container-header>Containers</h2> <div id=div-container-buttons></div> <template id=template-button> <button class=button-container></button> </template>";

/***/ })
/******/ ]);