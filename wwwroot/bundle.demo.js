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
/* harmony export (immutable) */ __webpack_exports__["switchView"] = switchView;
/* harmony export (immutable) */ __webpack_exports__["flashError"] = flashError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadSelectClient_js__ = __webpack_require__(2);


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


const COLOR_SUCCESS = 'var(--ordbase-color-success)';
/* harmony export (immutable) */ __webpack_exports__["COLOR_SUCCESS"] = COLOR_SUCCESS;

const COLOR_SELECT = 'var(--ordbase-color-select)';
/* harmony export (immutable) */ __webpack_exports__["COLOR_SELECT"] = COLOR_SELECT;

const COLOR_DANGER = 'var(--ordbase-color-danger)';
/* harmony export (immutable) */ __webpack_exports__["COLOR_DANGER"] = COLOR_DANGER;


const HTTP_OK = 200;
/* harmony export (immutable) */ __webpack_exports__["HTTP_OK"] = HTTP_OK;

const HTTP_CREATED = 201;
/* harmony export (immutable) */ __webpack_exports__["HTTP_CREATED"] = HTTP_CREATED;

const HTTP_UPDATED = 204;
/* harmony export (immutable) */ __webpack_exports__["HTTP_UPDATED"] = HTTP_UPDATED;

const HTTP_NOTFOUND = 404;
/* harmony export (immutable) */ __webpack_exports__["HTTP_NOTFOUND"] = HTTP_NOTFOUND;


const BACKSPACE = 8;
const HOME = 36;

// Cache static element references

// @note hack-below I am not proud of the way I am filling in the Header view here.
//        Open for suggestions - JSolsvik 24.07.17
document.getElementById('ordbase-header').appendChild(new __WEBPACK_IMPORTED_MODULE_0__components_header_js__["a" /* Component_Header */]());

const HEADER = document.getElementById('ordbase-header').querySelector('component-header');
/* harmony export (immutable) */ __webpack_exports__["HEADER"] = HEADER;

const defaultHandler = event => console.log('Default handler... nothing happened');
/* harmony export (immutable) */ __webpack_exports__["defaultHandler"] = defaultHandler;


function switchView(view) {
    MAIN.innerHTML = '';
    MAIN.appendChild(view);
    return view;
}

function flashError(text) {
    App.HEADER.flashError(text);
}

const MAIN = document.getElementById('ordbase-main');

document.addEventListener('keydown', e => {
    if (e.keyCode === HOME) __WEBPACK_IMPORTED_MODULE_1__loadSelectClient_js__["a" /* loadSelectClient */]();
});

window.addEventListener('load', () => {
    __WEBPACK_IMPORTED_MODULE_1__loadSelectClient_js__["a" /* loadSelectClient */]();
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadSelectClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_select_client_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_card_client_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loadEditClient_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loadNewClient_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loadSelectTranslation_js__ = __webpack_require__(21);













//
// @function OnloadViewClientSelector
//
function loadSelectClient() {

    //
    // 0. Create component instances
    //
    const header = __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"];
    const view = new __WEBPACK_IMPORTED_MODULE_3__views_select_client_js__["a" /* View_SelectClient */]();

    //
    // 1. Fire async call
    //
    __async__client_getArray({
        success: clientArray => {
            clientArray.forEach((client, i) => {

                let card = new __WEBPACK_IMPORTED_MODULE_4__components_card_client_js__["a" /* Component_ClientCard */]();

                card.setKey(client.key);
                card.setHeading(client.key);
                card.setText(client.webpageUrl);
                card.setThumbnail(client.thumbnailUrl);

                card.setEventHandlers({
                    onselect: (card, e) => __WEBPACK_IMPORTED_MODULE_7__loadSelectTranslation_js__["a" /* loadSelectTranslation */](card.getKey()),
                    onedit: (card, e) => __WEBPACK_IMPORTED_MODULE_5__loadEditClient_js__["a" /* loadEditClient */](card.getKey()),
                    ondelete: (card, e) => {
                        __async__client_delete({ clientKey: card.getKey(),
                            success: () => {
                                view.root.removeChild(card);
                            }
                        });
                    }
                });

                card.setSelectable();
                view.addCard(card);
            });
        }
    });

    //
    // 3. Set up header event handlers
    //   
    header.button0_OnClick(event => {
        let cardArray = view.getCardArray();
        header.setTextBig('Select Client');
        header.setColor(__WEBPACK_IMPORTED_MODULE_0__App_js__["COLOR_SUCCESS"]);
        cardArray.forEach(card => card.setSelectable());
    });

    header.button1_OnClick(event => {

        let cardArray = view.getCardArray();
        if (!cardArray[0].isDeleteable()) {

            header.setTextBig('Delete Client');
            header.setColor(__WEBPACK_IMPORTED_MODULE_0__App_js__["COLOR_DANGER"]);
            cardArray.forEach(card => card.setDeleteable());
        } else {
            header.setTextBig('Select Client');
            header.setColor(__WEBPACK_IMPORTED_MODULE_0__App_js__["COLOR_SUCCESS"]);
            cardArray.forEach(card => card.setSelectable());
        }
    });

    header.button2_OnClick(event => {

        let cardArray = view.getCardArray();

        if (!cardArray[0].isEditable()) {
            header.setTextBig('Edit Client');
            header.setColor(__WEBPACK_IMPORTED_MODULE_0__App_js__["COLOR_SELECT"]);
            cardArray.forEach(card => card.setEditable());
        } else {
            header.setTextBig('Select Client');
            header.setColor(__WEBPACK_IMPORTED_MODULE_0__App_js__["COLOR_SUCCESS"]);
            cardArray.forEach(card => card.setSelectable());
        }
    });

    header.button3_OnClick(event => __WEBPACK_IMPORTED_MODULE_6__loadNewClient_js__["a" /* loadNewClient */]());

    //
    // 4. Bind data to header
    //   
    header.setTextSmall('Ordbase');
    header.setTextBig('Select Client');
    header.setColor(__WEBPACK_IMPORTED_MODULE_0__App_js__["COLOR_SUCCESS"]);
    header.button0_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_SQUARE"]);
    header.button1_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_TRASH"]);
    header.button2_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_PENCIL"]);
    header.button3_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_PLUS"]);

    //
    // 5. Insert new view into DOM
    //
    __WEBPACK_IMPORTED_MODULE_0__App_js__["switchView"](view);
}

//
// @function __async__deleteCard
//  @note todo
//
function __async__client_getArray({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["c" /* client_get */]().then(clientArray => {
        if (clientArray.length > 0) success(clientArray);else __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError('There are no clients to show');
    }).catch(reason => console.error('Error:', reason));
}

//
// @function __async__deleteCard
//  @note todo
//
function __async__client_delete({ clientKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('clientKey'),
    success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["b" /* client_delete */]({ clientKey: clientKey }).then(res => {

        if (res.status == __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_OK"]) {
            success();
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError(`Code ${res.status}: Card not deleted`);
        }
        loadSelectClient();
    }).catch(reason => console.error('Error:', reason));
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = client_get;
/* harmony export (immutable) */ __webpack_exports__["d"] = client_getContainers;
/* harmony export (immutable) */ __webpack_exports__["e"] = client_getLanguages;
/* harmony export (immutable) */ __webpack_exports__["a"] = client_create;
/* harmony export (immutable) */ __webpack_exports__["h"] = client_update;
/* harmony export (immutable) */ __webpack_exports__["b"] = client_delete;
/* harmony export (immutable) */ __webpack_exports__["f"] = client_setContainers;
/* harmony export (immutable) */ __webpack_exports__["g"] = client_setLanguages;
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
/* harmony export (immutable) */ __webpack_exports__["i"] = language_get;
/* unused harmony export languages_create */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Fetch_js__ = __webpack_require__(10);





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

function client_getContainers({ clientKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('clientKey') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["b" /* GET */]({
        route: `api/client/containers/?clientKey=${clientKey}`
    });
};

function client_getLanguages({ clientKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('clientKey') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["b" /* GET */]({
        route: `api/client/languages/?clientKey=${clientKey}`
    });
};

//
// CREATE, UPDATE, DELETE api/client
//
function client_create({ client = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('client') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["c" /* POST */]({
        route: `api/client`,
        data: client
    });
}

function client_update({ clientKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('clientKey'),
    client = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('client') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["d" /* PUT */]({
        route: `api/client/?clientKey=${clientKey}`,
        data: client
    });
}

function client_delete({ clientKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('clientKey') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["a" /* DELETE */]({
        route: `api/client/?clientKey=${clientKey}`
    });
}

//
// SET ROOT/clients/containers and languages
//
function client_setContainers({ clientKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('clientKey'),
    containerArray = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('containerArray') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["c" /* POST */]({
        route: `api/client/containers/?clientKey=${clientKey}`,
        data: containerArray
    });
};

function client_setLanguages({ clientKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('clientKey'),
    languageArray = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('languageArray') } = {}) {
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
function translation_create({ translation = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('translation') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["c" /* POST */]({
        route: `api/translation`,
        data: translation
    });
}

function translation_createArray({ translationArray = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('translationArray') } = {}) {

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["c" /* POST */]({
        route: `api/translation/array`,
        data: translationArray
    });
}

function translation_update({ clientKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('clientKey'),
    languageKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('languageKey'),
    containerKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('containerKey'),
    translationKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('translationKey'),
    translation = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('translation') } = {}) {

    const queryString = `clientKey=${clientKey}&languageKey=${languageKey}&containerKey=${containerKey}&translationKey=${translationKey}`;

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["d" /* PUT */]({
        route: `api/translation/?${queryString}`,
        data: translation
    });
}

function translation_updateArray({ clientKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('clientKey'),
    containerKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('containerKey'),
    translationKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('translationKey'),
    translationArray = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('translationGroup') } = {}) {

    const queryString = `clientKey=${clientKey}&containerKey=${containerKey}&translationKey=${translationKey}`;

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["d" /* PUT */]({
        route: `api/translation/array/?${queryString}`,
        data: translationArray
    });
}

function translation_delete({ clientKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('clientKey'),
    languageKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('languageKey'),
    containerKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('containerKey'),
    translationKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('translationKey') } = {}) {

    const queryString = `clientKey=${clientKey}&languageKey=${languageKey}&containerKey=${containerKey}&translationKey=${translationKey}`;

    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["a" /* DELETE */]({
        route: `api/translation/?${queryString}`
    });
}

function translation_deleteGroup({ clientKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('clientKey'),
    containerKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('containerKey'),
    translationKey = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('translationKey') } = {}) {

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

//
// ROUTE language
//
function language_get({ languageKey = '' } = {}) {
    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["b" /* GET */]({
        route: `api/language/?languageKey=${languageKey}`
    });
}

function languages_create({ language = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]('language') } = {}) {
    return __WEBPACK_IMPORTED_MODULE_1__Fetch_js__["c" /* POST */]({
        route: 'api/language/create',
        data: language
    });
}

/***/ }),
/* 4 */
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
/* 5 */
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
        console.log(this._divGeneratedItems);
        return [].slice.apply(this._divGeneratedItems.children).map(item => {
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
            this._divGeneratedItems.removeChild(button);
        });

        this._divGeneratedItems.appendChild(fragment);
    }

    //
    // PRIVATE 
    //
    constructor() {
        super();
        this._root = this.createShadowRoot();
        this._root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__generator_container_html___default.a;
        this._buttonTemplate = this._root.getElementById('template-item');

        this._divGeneratedItems = this._root.getElementById('div-generated-items');
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
                if (activeElement.parentElement == this._divGeneratedItems && activeElement.previousElementSibling != null) {
                    activeElement.previousElementSibling.focus();
                }
            } else if (e.keyCode == DOWN) {

                let activeElement = this._root.activeElement;
                if (activeElement.parentElement == this._divGeneratedItems && activeElement.nextElementSibling != null) {
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
            this._divGeneratedItems.removeChild(button);
        });

        this._divGeneratedItems.appendChild(fragment);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component_ContainerGenerator;


customElements.define('component-generator-container', Component_ContainerGenerator);

/***/ }),
/* 6 */
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

    setHeaderUp(text) {
        this._root.getElementById('div-up-header').innerHTML = text;
    }

    setHeaderDown(text) {
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
/* 7 */
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component_ClientForm;


customElements.define('component-form-client', Component_ClientForm);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_html__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__header_html__);




class Component_Header extends HTMLElement {

    constructor() {
        super();
        this.root = this.createShadowRoot();
        this.root.innerHTML = __WEBPACK_IMPORTED_MODULE_0__header_html___default.a;
    }

    flashError(message) {

        let errorBanner = this.root.getElementById('error-banner');

        if (!errorBanner.classList.contains('animated')) errorBanner.classList.add('animated');

        errorBanner.classList.add('active');
        errorBanner.innerHTML = message;

        setTimeout(() => {
            errorBanner.classList.remove('active');
            errorBanner.innerHTML = '';
        }, 3000);
    }

    setTextBig(text) {
        this.root.getElementById('btn-header-mid-big').innerHTML = text;
    }

    setTextSmall(text) {
        this.root.getElementById('btn-header-mid-small').innerHTML = text;
    }

    button0_setIcon(icon) {
        this.root.querySelector('#btn-header-left i.fa').setAttribute('class', `fa ${icon}`);
    }

    button1_setIcon(icon) {
        this.root.querySelector('#btn-header-right0 i.fa').setAttribute('class', `fa ${icon}`);
    }

    button2_setIcon(icon, color) {
        console.log(color);
        this.root.querySelector('#btn-header-right1 i.fa').setAttribute('class', `fa ${icon}`);
    }

    button3_setIcon(icon) {
        this.root.querySelector('#btn-header-right2 i.fa').setAttribute('class', `fa ${icon}`);
    }

    setColor(color) {
        this.root.querySelector('#btn-header-left i').style.color = color;
    }

    button0_OnClick(handler) {
        this.root.getElementById('btn-header-left').onclick = event => handler.apply(this, event);
    }

    button1_OnClick(handler) {
        this.root.getElementById('btn-header-right0').onclick = event => handler.apply(this, event);
    }

    button2_OnClick(handler) {
        this.root.getElementById('btn-header-right1').onclick = event => handler.apply(this, event);
    }

    button3_OnClick(handler) {
        this.root.getElementById('btn-header-right2').onclick = event => handler.apply(this, event);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component_Header;

customElements.define('component-header', Component_Header);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = " <style>/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(node_modules/font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format('embedded-opentype'),url(node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0) format('woff2'),url(node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0) format('woff'),url(node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0) format('truetype'),url(node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format('svg');font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);-ms-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-cog:before,.fa-gear:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-cogs:before,.fa-gears:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-floppy-o:before,.fa-save:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-sort:before,.fa-unsorted:before{content:\"\\f0dc\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-gavel:before,.fa-legal:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-bolt:before,.fa-flash:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-clipboard:before,.fa-paste:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\\f150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\\f151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\\f152\"}.fa-eur:before,.fa-euro:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-inr:before,.fa-rupee:before{content:\"\\f156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\\f157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\\f158\"}.fa-krw:before,.fa-won:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\\f19c\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\\f1c5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\\f1c6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\\f1d0\"}.fa-empire:before,.fa-ge:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-paper-plane:before,.fa-send:before{content:\"\\f1d8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-bed:before,.fa-hotel:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-y-combinator:before,.fa-yc:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-television:before,.fa-tv:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\\f2a3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-sign-language:before,.fa-signing:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.fa-handshake-o:before{content:\"\\f2b5\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-o:before{content:\"\\f2b7\"}.fa-linode:before{content:\"\\f2b8\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-book-o:before{content:\"\\f2ba\"}.fa-address-card:before,.fa-vcard:before{content:\"\\f2bb\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\\f2bc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-circle-o:before{content:\"\\f2be\"}.fa-user-o:before{content:\"\\f2c0\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\f2c3\"}.fa-quora:before{content:\"\\f2c4\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\\f2c7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-shower:before{content:\"\\f2cc\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\\f2cd\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f2d3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\f2d4\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-grav:before{content:\"\\f2d6\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-eercast:before{content:\"\\f2da\"}.fa-microchip:before{content:\"\\f2db\"}.fa-snowflake-o:before{content:\"\\f2dc\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-meetup:before{content:\"\\f2e0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}#button-row{display:flex;text-align:center;min-height:100px;background-color:var(--ordbase-color-dark);color:var(--ordbase-color-white)}button{background-color:transparent;border:none}.icon-button{font-size:40px;flex:0;flex-basis:130px;display:flex;justify-content:center;cursor:pointer}i{width:100%;height:100%;color:var(--ordbase-color-white)}.header-text-button{padding-left:50px;flex-grow:1;color:var(--ordbase-color-white);display:flex;align-items:center}h1{text-align:left;font-size:var(--ordbase-h1-font-size)}h2{padding:10px 0 0 20px;font-size:var(--ordbase-h2-font-size)}#btn-header-right0:focus i,#btn-header-right0:hover i{color:var(--ordbase-color-danger)}#btn-header-right1:focus i,#btn-header-right1:hover i{color:var(--ordbase-color-select)}#btn-header-right2:focus i,#btn-header-right2:hover i{color:var(--ordbase-color-success)}#error-banner{color:#fff;text-align:center;font-size:3rem;background-color:var(--ordbase-color-danger)}#error-banner.active{height:100px;padding:30px}#error-banner.animated{animation-name:unFlashError;animation-duration:.5s}#error-banner.active.animated{animation-name:flashError;animation-duration:.5s}@keyframes flashError{from{height:0;padding-top:0}to{height:100px;padding-top:30px}}@keyframes unFlashError{from{height:100px;padding-top:30px}to{height:0;padding-top:0}}</style> <div id=button-row> <button id=btn-header-left class=icon-button> <i class=\"fa fa-square\" aria-hidden=true></i> </button> <div id=btn-header-mid class=header-text-button> <h1 id=btn-header-mid-big> </h1> <h2 id=btn-header-mid-small></h2> </div> <button id=btn-header-right0 class=icon-button> <i class=\"fa fa-none\" aria-hidden=true></i> </button> <button id=btn-header-right1 class=icon-button> <i class=\"fa fa-square\" aria-hidden=true></i> </button> <button id=btn-header-right2 class=icon-button> <i class=\"fa fa-plus\" aria-hidden=true></i> </button> </div> <div id=error-banner> </div> ";

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = GET;
/* harmony export (immutable) */ __webpack_exports__["a"] = DELETE;
/* harmony export (immutable) */ __webpack_exports__["d"] = PUT;
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
function GET({ route = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]() } = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]()) {

    return fetch(route, { method: 'GET' }).then(res => {

        let resjson = res.json();
        console.log('fetch.GET:', '\nroute', route, '\ndata', resjson);

        return resjson;
    });
}

//
// @function DELETE
//
function DELETE({ route = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]() } = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]()) {

    console.log('fetch.DELETE:', '\nroute', route);

    return fetch(route, { method: 'DELETE' });
}

//
// @function PUT
//
function PUT({ route = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */](), data = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]() } = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]()) {
    console.log('fetch.PUT:', '\nroute', route, '\ndata', data);

    return fetch(route, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT', // POST or PUT
        body: JSON.stringify(data)
    });
}

//
// @function POST
//
function POST({ route = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */](), data = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]() } = __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* force */]()) {
    console.log('fetch.POST:', '\nroute', route, '\ndata', data);
    return fetch(route, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST', // POST or PUT
        body: JSON.stringify(data)
    });
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select_client_html__ = __webpack_require__(12);
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View_SelectClient;

customElements.define('view-select-client', View_SelectClient);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<style>:host{height:100%;display:flex;justify-content:center;flex-wrap:wrap;background-color:var(--ordbase-color-light);align-content:flex-start}</style> ";

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_client_html__ = __webpack_require__(14);
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
        this._deleteHandler = () => console.log('default delete.....');

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
    setEventHandlers({ onselect, onedit, ondelete }) {
        this._selectHandler = onselect;
        this._editHandler = onedit;
        this._deleteHandler = ondelete;
    }

    setSelectable() {
        this._button.classList.remove('editable');
        this._button.classList.remove('deleteable');
        this._clickHandler = this._selectHandler;
    }

    setEditable() {
        this._button.classList.add('editable');
        this._button.classList.remove('deleteable');
        this._clickHandler = this._editHandler;
    }

    setDeleteable() {
        this._button.classList.add('deleteable');
        this._button.classList.remove('editable');

        this._clickHandler = this._deleteHandler;
    }

    isEditable() {
        return this._button.classList.contains('editable');
    }
    isDeleteable() {
        return this._button.classList.contains('deleteable');
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
/* 14 */
/***/ (function(module, exports) {

module.exports = " <style>/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(node_modules/font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format('embedded-opentype'),url(node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0) format('woff2'),url(node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0) format('woff'),url(node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0) format('truetype'),url(node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format('svg');font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);-ms-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-cog:before,.fa-gear:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-cogs:before,.fa-gears:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-floppy-o:before,.fa-save:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-sort:before,.fa-unsorted:before{content:\"\\f0dc\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-gavel:before,.fa-legal:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-bolt:before,.fa-flash:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-clipboard:before,.fa-paste:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\\f150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\\f151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\\f152\"}.fa-eur:before,.fa-euro:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-inr:before,.fa-rupee:before{content:\"\\f156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\\f157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\\f158\"}.fa-krw:before,.fa-won:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\\f19c\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\\f1c5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\\f1c6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\\f1d0\"}.fa-empire:before,.fa-ge:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-paper-plane:before,.fa-send:before{content:\"\\f1d8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-bed:before,.fa-hotel:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-y-combinator:before,.fa-yc:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-television:before,.fa-tv:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\\f2a3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-sign-language:before,.fa-signing:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.fa-handshake-o:before{content:\"\\f2b5\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-o:before{content:\"\\f2b7\"}.fa-linode:before{content:\"\\f2b8\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-book-o:before{content:\"\\f2ba\"}.fa-address-card:before,.fa-vcard:before{content:\"\\f2bb\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\\f2bc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-circle-o:before{content:\"\\f2be\"}.fa-user-o:before{content:\"\\f2c0\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\f2c3\"}.fa-quora:before{content:\"\\f2c4\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\\f2c7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-shower:before{content:\"\\f2cc\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\\f2cd\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f2d3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\f2d4\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-grav:before{content:\"\\f2d6\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-eercast:before{content:\"\\f2da\"}.fa-microchip:before{content:\"\\f2db\"}.fa-snowflake-o:before{content:\"\\f2dc\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-meetup:before{content:\"\\f2e0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}:host{--box-shadow-color:var(--ordbase-color-success);--box-shadow-min:20px;--box-shadow-max:70px 3px;--animation-speed:.3s;width:250px;height:220px;flex-shrink:0;padding:20px 10px 10px 10px;color:var(--ordbase-color-dark)}button{background-color:transparent;border:none;padding:0;cursor:pointer;color:var(--ordbase-color-dark);background-color:var(--ordbase-color-white)!important}h2{margin-bottom:0;margin-top:7px;padding:0 5px 0 10px}p{font-size:13px;padding:0 5px 0 10px}@keyframes focusAnimation{from{box-shadow:0 0 var(--box-shadow-min) var(--box-shadow-color)}to{box-shadow:0 0 var(--box-shadow-max) var(--box-shadow-color)}}@keyframes defocusAnimation{from{box-shadow:0 0 var(--box-shadow-max) var(--box-shadow-color)}to{box-shadow:0 0 var(--box-shadow-min) var(--box-shadow-color)}}button.animated{animation-name:defocusAnimation;animation-duration:var(--animation-speed)}button.animated:focus,button.animated:hover{animation-name:focusAnimation;animation-duration:var(--animation-speed)}button{--box-shadow-color:var(--ordbase-color-success);box-shadow:0 0 var(--box-shadow-min) var(--ordbase-color-success)}button:focus,button:hover{box-shadow:0 0 var(--box-shadow-max) var(--ordbase-color-success)}.editable{--box-shadow-color:var(--ordbase-color-select);box-shadow:0 0 var(--box-shadow-min) var(--ordbase-color-select)}.editable:focus,.editable:hover{box-shadow:0 0 var(--box-shadow-max) var(--ordbase-color-select)}.deleteable{--box-shadow-color:var(--ordbase-color-danger);box-shadow:0 0 var(--box-shadow-min) var(--ordbase-color-danger)}.deleteable:focus,.deleteable:hover{box-shadow:0 0 var(--box-shadow-max) var(--ordbase-color-danger)}</style> <button class=card-button> <img widt=250 height=125 id=card-img alt=\"Bilde av fylkesmannen\" src=xxxHTMLLINKxxx0.79369523222791940.8914937536634204xxx> <h2 id=card-h2> {{ ddd }}</h2> <p id=card-p> {{ text }}</p> </button>";

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadEditClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_edit_client_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_generator_container_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_flipper_language_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_form_client_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loadSelectClient_js__ = __webpack_require__(2);














function loadEditClient(clientKey) {

    //
    // 0. Create component instances
    //
    const header = __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"];
    const view = new __WEBPACK_IMPORTED_MODULE_3__views_edit_client_js__["a" /* View_EditClient */]();
    const generator = new __WEBPACK_IMPORTED_MODULE_4__components_generator_container_js__["a" /* Component_ContainerGenerator */]();
    const flipper = new __WEBPACK_IMPORTED_MODULE_5__components_flipper_language_js__["a" /* Component_LanguageFlipper */]();
    const form = new __WEBPACK_IMPORTED_MODULE_6__components_form_client_js__["a" /* Component_ClientForm */]();

    //
    // 1. Async calls filling in data in components
    //
    __async__client_getContainerKeyArray({ clientKey: clientKey,
        success: containerKeyArray => {
            containerKeyArray.forEach(containerKey => {
                generator.makeItem({ key: containerKey, selected: true });
            });
        }
    });

    __async__language_getArray__client_getLanguageKeyArray({ clientKey: clientKey,
        success: (languageArray, languageKeyArray) => {

            languageArray.forEach(lang => {
                flipper.makeItem({ key: lang.key, text: `${lang.name} - ${lang.key}`, selected: false });
            });

            languageKeyArray.forEach(key => {
                flipper.selectItem(key);
            });
        }
    });

    __async__clientGet({ clientKey: clientKey,
        success: client => {
            form.setClient(client);
        }
    });

    //
    // 2. Set up header event handlers
    //
    header.button0_OnClick(__WEBPACK_IMPORTED_MODULE_0__App_js__["defaultHandler"]);
    header.button1_OnClick(__WEBPACK_IMPORTED_MODULE_0__App_js__["defaultHandler"]);
    header.button2_OnClick(__WEBPACK_IMPORTED_MODULE_0__App_js__["defaultHandler"]);
    header.button3_OnClick(event => __WEBPACK_IMPORTED_MODULE_7__loadSelectClient_js__["a" /* loadSelectClient */]());

    //
    // 3. Bind data to header
    //
    header.setTextSmall('Ordbase');
    header.setTextBig('New client');
    header.button0_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_BARS"]);
    header.button1_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_NONE"]);
    header.button2_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_NONE"]);
    header.button3_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_TIMES"]);

    //
    // 5. Set up language flipper
    //
    flipper.setHeaderUp('Selected');
    flipper.setHeaderDown('Available');

    //
    // 6. Set up form
    //
    form.setSubmitText(`Update ${clientKey}`);
    form.addEventListener('submit', e => {
        e.preventDefault();

        __async__client_update({
            client: form.getClient(),
            containerArray: generator.getContainerKeyArray(),
            languageArray: flipper.getLanguageKeyArray(),
            success: () => __WEBPACK_IMPORTED_MODULE_7__loadSelectClient_js__["a" /* loadSelectClient */]()
        });
    });

    //
    // 7. Create view, inject components and append view to DOM.
    //
    view.setContainerGenerator(generator);
    view.setLanguageFlipper(flipper);
    view.setClientForm(form);
    __WEBPACK_IMPORTED_MODULE_0__App_js__["switchView"](view);
}

//
// @function __async__client_getContainerKeyArray
//  @note @todo
//
function __async__client_getContainerKeyArray({ clientKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('clientKey'),
    success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["d" /* client_getContainers */]({ clientKey: clientKey }).then(containerKeyArray => {
        success(containerKeyArray);
    }).catch(reason => console.error('Error:', reason));
}

//
// @function _
//  @note @todo
//
function __async__language_getArray__client_getLanguageKeyArray({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success'),
    clientKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('clientKey') }) {

    let languageArray;
    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["i" /* language_get */]().then(_languageArray => {
        languageArray = _languageArray;
        return __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["e" /* client_getLanguages */]({ clientKey: clientKey });
    }).then(languageKeyArray => {
        success(languageArray, languageKeyArray);
    }).catch(error => console.error(error));
}

//
// @function __async__clientGet
//  @note @todo
//
function __async__clientGet({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success'),
    clientKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('clientKey') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["c" /* client_get */]({ clientKey: clientKey }).then(clientArray => {
        let client = clientArray[0];
        success(client);
    }).catch(error => console.error(error));
}

//
// @function __async__client_update
//  @note @todo
//
function __async__client_update({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success'),
    client = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('client'),
    containerArray = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('containerArray'),
    languageArray = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('languageArray')
}) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["h" /* client_update */]({ clientKey: client.key, client: client }).then(res => {
        console.log('client_update():', res.status);
        if (res.status == __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_UPDATED"]) {

            __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["f" /* client_setContainers */]({ clientKey: client.key, containerArray: containerArray }).then(res => {
                if (res.status != __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_CREATED"]) {
                    __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError(`code ${res.status}: clientContainers could not be updated`);
                }
                console.log('client_setContainers(): ', res.status);
            }).catch(error => console.error(error));

            __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["g" /* client_setLanguages */]({ clientKey: client.key, languageArray: languageArray }).then(res => {
                if (res.status != __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_CREATED"]) {
                    __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError(`code ${res.status}: clientLanguages could not be updated`);
                }
                console.log('client_setLanguages(): ', res.status);
            }).catch(error => console.error(error));

            success();
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError(`code ${res.status}: CRITICAL ERROR, Client could not be updated... `);
        }
    }).catch(error => __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flash(error)); // @TODO Display error in view
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = " <style>:host{height:100%;display:flex}#edit-client-left-menu{flex:0 0 350px;background-color:var(--ordbase-color-light);z-index:1;box-shadow:1px 0 5px -2px var(--ordbase-color-dark)}component-flipper-language{margin-top:10px;padding:0}component-generator-container{margin-top:10px}</style> <section id=edit-client-left-menu> <div id=slot-generator class=slot></div> <div id=slot-flipper class=slot></div> </section> <div id=slot-form class=slot></div> <div id=slot-card class=slot></div>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<style>/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(node_modules/font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format('embedded-opentype'),url(node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0) format('woff2'),url(node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0) format('woff'),url(node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0) format('truetype'),url(node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format('svg');font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);-ms-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-cog:before,.fa-gear:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-cogs:before,.fa-gears:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-floppy-o:before,.fa-save:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-sort:before,.fa-unsorted:before{content:\"\\f0dc\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-gavel:before,.fa-legal:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-bolt:before,.fa-flash:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-clipboard:before,.fa-paste:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\\f150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\\f151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\\f152\"}.fa-eur:before,.fa-euro:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-inr:before,.fa-rupee:before{content:\"\\f156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\\f157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\\f158\"}.fa-krw:before,.fa-won:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\\f19c\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\\f1c5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\\f1c6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\\f1d0\"}.fa-empire:before,.fa-ge:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-paper-plane:before,.fa-send:before{content:\"\\f1d8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-bed:before,.fa-hotel:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-y-combinator:before,.fa-yc:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-television:before,.fa-tv:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\\f2a3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-sign-language:before,.fa-signing:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.fa-handshake-o:before{content:\"\\f2b5\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-o:before{content:\"\\f2b7\"}.fa-linode:before{content:\"\\f2b8\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-book-o:before{content:\"\\f2ba\"}.fa-address-card:before,.fa-vcard:before{content:\"\\f2bb\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\\f2bc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-circle-o:before{content:\"\\f2be\"}.fa-user-o:before{content:\"\\f2c0\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\f2c3\"}.fa-quora:before{content:\"\\f2c4\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\\f2c7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-shower:before{content:\"\\f2cc\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\\f2cd\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f2d3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\f2d4\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-grav:before{content:\"\\f2d6\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-eercast:before{content:\"\\f2da\"}.fa-microchip:before{content:\"\\f2db\"}.fa-snowflake-o:before{content:\"\\f2dc\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-meetup:before{content:\"\\f2e0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}h2{font-size:var(--ordbase-h2-font-size);margin-left:10px}input{display:none;width:100%;height:45px;font-size:var(--ordbase-input-font-size);text-align:center}#button-activate{font-size:3.2rem;cursor:pointer;height:50px;width:100%;background-color:transparent;color:var(--ordbase-color-dark);border:1px solid var(--ordbase-color-success);border-width:0 0 2px 0}#button-activate.cancel{border-color:var(--ordbase-color-danger)}#button-activate:focus{outline:0}#button-activate:focus,#button-activate:hover{background-color:var(--ordbase-color-success);color:var(--ordbase-color-white)}#button-activate.cancel:focus,#button-activate.cancel:hover{background-color:var(--ordbase-color-danger);color:var(--ordbase-color-white)}.button-container{margin:0;padding:0;outline:0;height:var(--ordbase-button-height);font-size:var(--ordbase-button-font-size);width:100%;cursor:pointer;background-color:transparent;color:var(--ordbase-color-dark);border:10px solid transparent;border-width:0 0 0 10px}.button-container:focus{outline-color:var(--ordbase-color-dark);outline-width:2px}.button-container:focus,.button-container:hover{background-color:var(--ordbase-color-dark);color:var(--ordbase-color-white)}.button-container.selected,.button-container.selected:focus{border-color:var(--ordbase-color-select)}</style> <h2>Containers</h2> <div id=div-generated-items> </div> <input id=generator-input type=text value=\"\"> <button id=button-activate class=button-add-item> <i class=\"fa fa-plus\" aria-hidden=true></i> </button> <template id=template-item> <button class=button-container></button> </template>";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = " <style>h2{font-size:var(--ordbase-h2-font-size);margin-left:10px}h3{font-size:var(--ordbase-h3-font-size);margin:15px}.button-language{height:var(--ordbase-button-height);font-size:var(--ordbase-button-font-size);width:100%;cursor:pointer;background-color:transparent;color:var(--ordbase-color-dark);border:none;border:10px solid transparent;border-width:0 0 0 10px}.button-language:focus{outline-color:var(--ordbase-color-dark);outline-width:2px}.button-language:focus,.button-language:hover{background-color:var(--ordbase-color-dark);color:var(--ordbase-color-white)}.button-language.selected,.button-language.selected:focus{border-color:var(--ordbase-color-select)}</style> <h2>Languages</h2> <h3 id=div-up-header> Flip up</h3> <div id=div-up></div> <h3 id=div-down-header> Flipdown</h3> <div id=div-down></div> <template id=template-button> <button class=button-language></button> </template>";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = " <style>#form-client{padding-left:10px;font-size:var(--ordbase-form-font-size)}label{color:var(--ordbase-color-dark);font-size:1.5em;font-weight:700}input{font-size:var(--ordbase-input-font-size);margin:0 20px 10px 4px;width:400px}fieldset{border:none}#button-submit{font-size:var(--ordbase-button-font-size);width:430px;height:var(--ordbase-button-height);cursor:pointer;background-color:transparent;color:var(--ordbase-color-dark);border:2px solid var(--ordbase-color-success);border-width:0 0 2px 0}#button-submit.selected,#button-submit:focus,#button-submit:hover{background-color:var(--ordbase-color-success);color:var(--ordbase-color-white)}</style> <form id=form-client> <h2>Basic Info</h2> <fieldset> <label for=form-client-name>Name</label><br> <input id=form-client-name class=ordbase-input type=text data-min-size=20 value=soldata> </fieldset> <fieldset> <label for=form-client-apikey>Api nøkkel</label><br> <input id=form-client-apikey class=ordbase-input type=text data-min-size=20 value=soldata-production> </fieldset> <fieldset> <label for=form-client-webpage>Nettadresse</label><br> <input id=form-client-webpage class=ordbase-input type=text data-min-size=20 value=soldata.no> </fieldset> <fieldset> <label for=form-client-thumbnail>Bildeadresse</label><br> <input id=form-client-thumbnail class=ordbase-input type=text data-min-size=20 value=http://placehold.it/250x125/FFC107> </fieldset> <br> <br> <button id=button-submit type=submit> {{ submitButtonText }} </button> </form> ";

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadNewClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_edit_client_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_generator_container_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_flipper_language_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_form_client_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loadSelectClient_js__ = __webpack_require__(2);














function loadNewClient(clientKey) {

    //
    // 0. Create component instances
    //
    const header = __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"];
    const view = new __WEBPACK_IMPORTED_MODULE_3__views_edit_client_js__["a" /* View_EditClient */]();
    const generator = new __WEBPACK_IMPORTED_MODULE_4__components_generator_container_js__["a" /* Component_ContainerGenerator */]();
    const flipper = new __WEBPACK_IMPORTED_MODULE_5__components_flipper_language_js__["a" /* Component_LanguageFlipper */]();
    const form = new __WEBPACK_IMPORTED_MODULE_6__components_form_client_js__["a" /* Component_ClientForm */]();

    //
    // 1. Fire async call
    //
    __async__client_getLanguageKeyArray({
        success: languageKeyArray => {
            languageKeyArray.forEach(lang => {
                flipper.makeItem({ key: lang.key, text: `${lang.name} - ${lang.key}`, selected: false });
            });
        }
    });

    //
    // 2. Set up header event handlers
    //
    header.button0_OnClick(__WEBPACK_IMPORTED_MODULE_0__App_js__["defaultHandler"]);
    header.button1_OnClick(__WEBPACK_IMPORTED_MODULE_0__App_js__["defaultHandler"]);
    header.button2_OnClick(__WEBPACK_IMPORTED_MODULE_0__App_js__["defaultHandler"]);
    header.button3_OnClick(event => __WEBPACK_IMPORTED_MODULE_7__loadSelectClient_js__["a" /* loadSelectClient */]());

    //
    // 3. Bind data to header
    //
    header.setTextSmall('Ordbase');
    header.setTextBig('New client');
    header.button0_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_BARS"]);
    header.button1_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_NONE"]);
    header.button2_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_NONE"]);
    header.button3_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_TIMES"]);

    //
    // 4. Component flipper
    //
    flipper.setHeaderUp('Selected');
    flipper.setHeaderDown('Available');

    //
    // 5. Component form
    //
    form.setSubmitText('Create client');
    form.addEventListener('submit', e => {
        e.preventDefault();

        __async__client_create({
            client: form.getClient(),
            containerArray: generator.getContainerKeyArray(),
            languageArray: flipper.getLanguageKeyArray(),
            success: () => __WEBPACK_IMPORTED_MODULE_7__loadSelectClient_js__["a" /* loadSelectClient */]()
        });
    });

    //
    // 6. Inject components and append view to DOM.
    //
    view.setContainerGenerator(generator);
    view.setLanguageFlipper(flipper);
    view.setClientForm(form);
    __WEBPACK_IMPORTED_MODULE_0__App_js__["switchView"](view);
}

//
// @function __async__client_getLanguageKeyArray
//  @note @todo
//
function __async__client_getLanguageKeyArray({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["i" /* language_get */]().then(languageKeyArray => {

        if (languageKeyArray.length > 0) {
            success(languageKeyArray);
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError('There are no supported languages in the database....');
        }
    }).catch(error => console.log(error));
}

//
// @function __async__client_create
//  @note @todo
//
function __async__client_create({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success'),
    client = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('client'),
    containerArray = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('containerArray'),
    languageArray = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('languageArray') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["a" /* client_create */]({ client: client }).then(res => {
        console.log('client_create(): ', res.status);

        if (res.status == __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_CREATED"]) {

            __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["f" /* client_setContainers */]({ clientKey: client.key, containerArray: containerArray }).then(res => {
                if (res.status != __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_CREATED"]) {
                    __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError(`code ${res.status}: clientContainers could not be created`);
                }
                console.log('client_setContainers(): ', res.status);
            }).catch(error => console.error(error));

            __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["g" /* client_setLanguages */]({ clientKey: client.key, languageArray: languageArray }).then(res => {
                if (res.status != __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_CREATED"]) {
                    __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError(`code ${res.status}: clientLanguages could not be created`);
                }
                console.log('client_setLanguages(): ', res.status);
            }).catch(error => console.error(error));

            success();
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError(`code ${res.status}: Client could not be created. Client may already exist`);
        }
    }).catch(error => __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flash(error)); // @TODO Display error in view
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadSelectTranslation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_select_translation_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_card_translation_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_generator_translation_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_picker_container_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loadSelectClient_js__ = __webpack_require__(2);














//
// @function loadSelectTranslation
//  @note @todo
//
function loadSelectTranslation(clientKey) {

    //
    // 0. Init components
    //
    const header = __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"];
    const view = new __WEBPACK_IMPORTED_MODULE_3__views_select_translation_js__["a" /* View_SelectTranslation */]();
    const languageKeyArray = new Array();
    const generator = new __WEBPACK_IMPORTED_MODULE_5__components_generator_translation_js__["a" /* Component_TranslationGenerator */]();
    const picker = new __WEBPACK_IMPORTED_MODULE_6__components_picker_container_js__["a" /* Component_ContainerPicker */]();
    const cardPrototype = new __WEBPACK_IMPORTED_MODULE_4__components_card_translation_js__["a" /* Component_TranslationCard */]();

    //
    // 1. Async calls
    //
    // Populate languageArray
    __async__client_getLanguageKeyArray({
        clientKey: clientKey,
        success: _languageKeyArray => {
            languageKeyArray.push.apply(languageKeyArray, _languageKeyArray);
        }
    });

    // Populate picker and set up default item
    __async__client_getContainerKeyArray({
        clientKey: clientKey,
        success: containerKeyArray => {

            // Populate generator with translation cards
            __async__translation_getGroupMetaArray({
                clientKey: clientKey,
                containerKey: containerKeyArray[0],
                success: groupMetaArray => {
                    groupMetaArray.forEach(groupMeta => {
                        let card = makeTranslationCard({ cardPrototype: cardPrototype, groupMeta: groupMeta });
                        generator.addCard(card);
                    });
                    generator.focus();
                }
            });

            containerKeyArray.forEach(containerKey => {

                picker.makeItem({
                    key: containerKey,
                    text: containerKey,

                    // On picker-item click, reload all translation cards
                    onclick: e => {

                        __async__translation_getGroupMetaArray({
                            clientKey: clientKey,
                            containerKey: picker.getContainerKey(),
                            success: groupMetaArray => {
                                generator.clearItems();
                                groupMetaArray.forEach(groupMeta => {
                                    let card = makeTranslationCard({ cardPrototype: cardPrototype, groupMeta: groupMeta });
                                    generator.addCard(card);
                                });
                            }
                        });

                        header.setColor(__WEBPACK_IMPORTED_MODULE_0__App_js__["COLOR_SUCCESS"]);
                        header.setTextBig('Select translation');
                    }

                });
            });
            picker.setDefaultItem();
        }
    });

    //
    // 2. Hook up Translation card event handlers
    //
    cardPrototype.setEventHandlers({
        onopen: (card, e) => {

            // Generate fieldsets
            __async__translation_getGroup({
                clientKey: clientKey,
                containerKey: picker.getContainerKey(),
                translationKey: card.getTranslationKey(),
                success: group => {
                    group.items.forEach(item => {
                        card.makeFieldset({ languageKey: item.languageKey, text: item.text, isComplete: item.isComplete });
                    });
                    card.display();
                }
            });

            // @TODO close other open cards
            header.setColor(__WEBPACK_IMPORTED_MODULE_0__App_js__["COLOR_SELECT"]);
            header.setTextBig('Edit translation');
            card.open({ languageCount: languageKeyArray.length });
        },

        onclose: () => {
            header.setColor(__WEBPACK_IMPORTED_MODULE_0__App_js__["COLOR_SUCCESS"]);
            header.setTextBig('Select translation');
        },

        ondelete: (card, e) => {
            // Delete translation
            __async__translation_delete({
                clientKey: clientKey,
                containerKey: picker.getContainerKey(),
                translationKey: card.getTranslationKey(),
                success: () => {
                    card.delete();
                    generator.getCardArray().forEach(_card => _card.close());
                }
            });
        },
        onsubmit: (card, e) => {

            let translationArray = new Array();
            let formData = card.getFormData();

            formData.fieldsetArray.forEach(fieldset => {

                translationArray.push({
                    clientKey: clientKey,
                    languageKey: fieldset.languageKey,
                    containerKey: picker.getContainerKey(),
                    key: formData.translationKey,
                    text: fieldset.text,
                    isComplete: fieldset.isComplete
                });
            });

            __async__translation_updateArray({ translationArray: translationArray,

                success: () => {
                    //
                    // @note Here I am updating ALL cards withing a container, even though 
                    //       only 1 card has been updated. It would be better to JUST updated that card.
                    //       The reason I dont do that yet, was that it was faster to just copy paste existing code snippet. - JSolsvik 02.08.17
                    //
                    generator.clearItems();

                    __async__translation_getGroupMetaArray({
                        clientKey: clientKey,
                        containerKey: picker.getContainerKey(),
                        success: groupMetaArray => {
                            groupMetaArray.forEach(groupMeta => {
                                let card = makeTranslationCard({ cardPrototype: cardPrototype, groupMeta: groupMeta });
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
    // 2. Setup header events
    //
    header.button0_OnClick(() => {
        let cardArray = generator.getCardArray();
        header.setTextBig('Select Translation');
        header.setColor(__WEBPACK_IMPORTED_MODULE_0__App_js__["COLOR_SUCCESS"]);
        cardArray.forEach(card => card.setOpenable());
    });

    header.button1_OnClick(e => {

        let cardArray = generator.getCardArray();

        console.log(cardArray);
        if (cardArray.length > 0) {
            if (!cardArray[0].isDeleteable()) {
                header.setTextBig('Delete Translation');
                header.setColor(__WEBPACK_IMPORTED_MODULE_0__App_js__["COLOR_DANGER"]);
                cardArray.forEach(card => {
                    card.close();
                    card.setDeleteable();
                });
            } else {
                header.setTextBig('Select Translation');
                header.setColor(__WEBPACK_IMPORTED_MODULE_0__App_js__["COLOR_SUCCESS"]);
                cardArray.forEach(card => card.setOpenable());
            }
        }
    });

    header.button2_OnClick(__WEBPACK_IMPORTED_MODULE_0__App_js__["defaultHandler"]);
    header.button3_OnClick(e => __WEBPACK_IMPORTED_MODULE_7__loadSelectClient_js__["a" /* loadSelectClient */]());

    //
    // 2. Setup header data
    //
    header.setTextSmall('Ordbase');
    header.setTextBig(`Select Translation`);

    header.button0_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_BARS"]);
    header.button1_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_TRASH"]);
    header.button2_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_NONE"]);
    header.button3_setIcon(__WEBPACK_IMPORTED_MODULE_0__App_js__["ICON_ARROW_LEFT"]);

    //
    // 4.Component_TranslationGenerator
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

        __async__translation_createArray({
            translationArray: translationArray,
            success: groupMeta => {
                let card = makeTranslationCard({ cardPrototype: cardPrototype, groupMeta: groupMeta });
                generator.addCard(card);
            }
        });
    });

    //
    // 5. Insert components into view, and add view to DOM
    //
    view.setTranslationGenerator(generator);
    view.setContainerPicker(picker);
    __WEBPACK_IMPORTED_MODULE_0__App_js__["switchView"](view);
}

//
// @function makeTranslationCard
//
function makeTranslationCard({ cardPrototype = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('cardPrototype'),
    groupMeta = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('groupMeta') }) {

    let card = new __WEBPACK_IMPORTED_MODULE_4__components_card_translation_js__["a" /* Component_TranslationCard */]();

    card.setTranslationKey(groupMeta.key);

    groupMeta.items.forEach(item => {
        card.makeLanguagekeyComplete(item.languageKey, item.isComplete);
    });

    card.setEventHandlers(cardPrototype.getEventHandlers());
    return card;
}

//
// @function __async__getLanguageKeyArray
//
function __async__client_getLanguageKeyArray({ clientKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('clientKey'),
    success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["e" /* client_getLanguages */]({ clientKey: clientKey }).then(languageKeyArray => {
        success(languageKeyArray);
    }).catch(err => console.error('Error:', err));
}

//
// @function __async__translation_getGroup
//
function __async__translation_getGroup({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success'),
    clientKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('clientKey'),
    containerKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('containerKey'),
    translationKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('translationKey') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["l" /* translation_getGroup */]({ clientKey: clientKey,
        containerKey: containerKey,
        translationKey: translationKey }).then(groupArray => {
        if (groupArray.length > 0) {
            let group = groupArray[0];
            success(group);
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError('Pick a container to enable editing!');
        }
    }).catch(err => console.error('Error: ', err));
}

//
// @function __async__getContainerKeyArray 
//
function __async__client_getContainerKeyArray({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success'),
    clientKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('clientKey') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["d" /* client_getContainers */]({ clientKey: clientKey }).then(containerKeyArray => {
        success(containerKeyArray);
    }).catch(err => console.error('Error:', err));
}

//
// @function __async__translation_getGroupMetaArray
//
function __async__translation_getGroupMetaArray({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success'),
    clientKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('clientKey'),
    containerKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('containerKey') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["m" /* translation_getGroupMeta */]({ clientKey: clientKey,
        containerKey: containerKey }).then(groupMetaArray => {
        success(groupMetaArray);
    }).catch(err => console.error('Error:', err));
}

//
// @function __async__translation_getGroupMeta
//
function __async__translation_getGroupMeta({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success'),
    clientKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('clientKey'),
    containerKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('containerKey'),
    translationKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('translationKey') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["m" /* translation_getGroupMeta */](arguments[0]).then(groupMetaArray => {
        let groupMeta = groupMetaArray[0];
        success(groupMeta);
    }).catch(err => console.error('Error:', err));
}

//
// @function __async__translation_createArray
//
function __async__translation_createArray({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success'),
    translationArray = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('translationArray') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["j" /* translation_createArray */]({ translationArray: translationArray }).then(res => {

        if (res.status != __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_CREATED"]) {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError(`${res.status}: Was not able to create new translations...`);
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
// @function __async__translation_delete
//

function __async__translation_updateArray({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success'), translationArray = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('translationArray') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["n" /* translation_updateArray */]({ translationArray: translationArray,
        clientKey: translationArray[0].clientKey,
        containerKey: translationArray[0].containerKey,
        translationKey: translationArray[0].key }).then(res => {
        console.log('translation_updateArray():', res.status);

        if (__WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_UPDATED"]) {
            success();
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError('Code ${res.status}: Something went wrong while updating the translations..');
        }
    }).catch(err => console.error('Error:', err));
}

//
// @function __async__translation_delete
//
function __async__translation_delete({ success = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('success'),
    clientKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('clientKey'),
    containerKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('containerKey'),
    translationKey = __WEBPACK_IMPORTED_MODULE_2__lib_Util_js__["a" /* force */]('translationKey') }) {

    __WEBPACK_IMPORTED_MODULE_1__lib_Route_js__["k" /* translation_deleteGroup */]({ clientKey: clientKey,
        containerKey: containerKey,
        translationKey: translationKey }).then(res => {

        console.log('translation_deleteGroup():', res.status);

        if (res.status == __WEBPACK_IMPORTED_MODULE_0__App_js__["HTTP_OK"]) {
            success();
        } else {
            __WEBPACK_IMPORTED_MODULE_0__App_js__["HEADER"].flashError(`${res.status}: Was not able to delete card...`);
        }
    }).catch(err => console.error('Error:', err));
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

module.exports = " <style>/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(node_modules/font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format('embedded-opentype'),url(node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0) format('woff2'),url(node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0) format('woff'),url(node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0) format('truetype'),url(node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format('svg');font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);-ms-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-cog:before,.fa-gear:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-cogs:before,.fa-gears:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-floppy-o:before,.fa-save:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-sort:before,.fa-unsorted:before{content:\"\\f0dc\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-gavel:before,.fa-legal:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-bolt:before,.fa-flash:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-clipboard:before,.fa-paste:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\\f150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\\f151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\\f152\"}.fa-eur:before,.fa-euro:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-inr:before,.fa-rupee:before{content:\"\\f156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\\f157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\\f158\"}.fa-krw:before,.fa-won:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\\f19c\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\\f1c5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\\f1c6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\\f1d0\"}.fa-empire:before,.fa-ge:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-paper-plane:before,.fa-send:before{content:\"\\f1d8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-bed:before,.fa-hotel:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-y-combinator:before,.fa-yc:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-television:before,.fa-tv:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\\f2a3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-sign-language:before,.fa-signing:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.fa-handshake-o:before{content:\"\\f2b5\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-o:before{content:\"\\f2b7\"}.fa-linode:before{content:\"\\f2b8\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-book-o:before{content:\"\\f2ba\"}.fa-address-card:before,.fa-vcard:before{content:\"\\f2bb\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\\f2bc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-circle-o:before{content:\"\\f2be\"}.fa-user-o:before{content:\"\\f2c0\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\f2c3\"}.fa-quora:before{content:\"\\f2c4\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\\f2c7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-shower:before{content:\"\\f2cc\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\\f2cd\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f2d3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\f2d4\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-grav:before{content:\"\\f2d6\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-eercast:before{content:\"\\f2da\"}.fa-microchip:before{content:\"\\f2db\"}.fa-snowflake-o:before{content:\"\\f2dc\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-meetup:before{content:\"\\f2e0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}:host{width:100%;--fieldset-count:0;--input-height:55px}button{background-color:var(--ordbase-color-light);color:var(--ordbase-color-dark);display:flex;flex-wrap:wrap;margin-right:0;padding:0 4% 0 4%;width:100%;min-height:75px;font-size:var(--ordbase-button-font-size);border:10px solid transparent;border-width:0 0 0 10px}button span{flex:0 0 100px}button:focus,button:hover{background-color:var(--ordbase-color-dark);color:var(--ordbase-color-white);cursor:pointer}button.selected,button.selected:focus{border-color:var(--ordbase-color-select)}#array-languagekey-complete{flex:1;display:flex;justify-content:flex-end;flex-wrap:wrap}.languagekey-complete{display:flex;flex:0 0 100px;margin:0 20px 0 20px}.fa-check{color:var(--ordbase-color-success)}.fa-times{color:var(--ordbase-color-danger)}.deleteable,button.selected.deleteable{border:10px solid var(--ordbase-color-danger);border-width:0 0 0 10px;margin:2px 0 2px 0}form{height:0;background-color:var(--ordbase-color-light);box-shadow:inset 2px 0 10px -2px var(--ordbase-color-dark)}form.active{height:calc(100px + var(--fieldset-count) * var(--input-height));padding:20px}label{color:var(--ordbase-color-dark);font-size:1.5rem;font-weight:700}input.text-translation{font-size:var(--ordbase-input-font-size);margin:0 20px 10px 4px;width:400px}input.check-iscomplete{cursor:pointer;width:30px;height:30px;border-radius:3px;border:2px solid var(--ordbase-color-dark)}.checkbox-text{font-size:2rem}fieldset{display:none;border:none}#button-submit{font-size:var(--ordbase-button-font-size);width:400px;height:30px;cursor:pointer;background-color:transparent;color:var(--ordbase-color-dark);border:2px solid var(--ordbase-color-success);border-width:0 0 2px 0}#button-submit.selected,#button-submit:focus,#button-submit:hover{background-color:var(--ordbase-color-success);color:var(--ordbase-color-white)}@keyframes pushForm{from{height:0}to{height:calc(100px + var(--fieldset-count) * var(--input-height))}}@keyframes popForm{from{height:calc(100px + var(--fieldset-count) * var(--input-height))}to{height:0}}form.animated{animation-name:popForm;animation-duration:160ms}form.active.animated{animation-name:pushForm;animation-duration:160ms}</style> <button class=btn-load-translation-editor> <span id=card-translation-key class=translation-key>{{ translationKey }}</span> <div id=array-languagekey-complete> <template id=template-languagekey-complete> <div class=languagekey-complete> <span>{{languageKey}}</span> <i class=\"fa fa-times\"></i> </div> </template> </div> </button> <form> <fieldset> <label for=form-translation-key>Key</label><br> <input id=form-translation-key class=text-translation type=text data-min-size=20 value=\"\"> </fieldset> <template id=template-fieldset> <fieldset class=generated> <label for=\"form-translation-{{ languageCode }}\">Key</label><br> <input class=text-translation id=\"form-translation-{{ languageCode  }}\" type=text data-min-size=20 value=\"\"> <input class=check-iscomplete type=checkbox> <span class=checkbox-text>Complete </span> </fieldset> </template> <fieldset id=fieldset-button-submit> <button id=button-submit type=submit> Update </button> </fieldset> </form>";

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
        if (this._generatedItems.firstElementChild != null) this._generatedItems.firstElementChild._button.focus();
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

module.exports = "<style>/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(node_modules/font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format('embedded-opentype'),url(node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0) format('woff2'),url(node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0) format('woff'),url(node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0) format('truetype'),url(node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format('svg');font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);-ms-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-cog:before,.fa-gear:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-cogs:before,.fa-gears:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-floppy-o:before,.fa-save:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-sort:before,.fa-unsorted:before{content:\"\\f0dc\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-gavel:before,.fa-legal:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-bolt:before,.fa-flash:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-clipboard:before,.fa-paste:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\\f150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\\f151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\\f152\"}.fa-eur:before,.fa-euro:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-inr:before,.fa-rupee:before{content:\"\\f156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\\f157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\\f158\"}.fa-krw:before,.fa-won:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\\f19c\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\\f1c5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\\f1c6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\\f1d0\"}.fa-empire:before,.fa-ge:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-paper-plane:before,.fa-send:before{content:\"\\f1d8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-bed:before,.fa-hotel:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-y-combinator:before,.fa-yc:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-television:before,.fa-tv:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\\f2a3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-sign-language:before,.fa-signing:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.fa-handshake-o:before{content:\"\\f2b5\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-o:before{content:\"\\f2b7\"}.fa-linode:before{content:\"\\f2b8\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-book-o:before{content:\"\\f2ba\"}.fa-address-card:before,.fa-vcard:before{content:\"\\f2bb\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\\f2bc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-circle-o:before{content:\"\\f2be\"}.fa-user-o:before{content:\"\\f2c0\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\f2c3\"}.fa-quora:before{content:\"\\f2c4\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\\f2c7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-shower:before{content:\"\\f2cc\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\\f2cd\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f2d3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\f2d4\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-grav:before{content:\"\\f2d6\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-eercast:before{content:\"\\f2da\"}.fa-microchip:before{content:\"\\f2db\"}.fa-snowflake-o:before{content:\"\\f2dc\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-meetup:before{content:\"\\f2e0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}input{display:none;width:100%;height:45px;font-size:var(--ordbase-input-font-size);text-align:center}#button-generate{font-size:3.2rem;cursor:pointer;height:50px;width:100%;background-color:transparent;color:var(--ordbase-color-dark);border:1px solid var(--ordbase-color-success);border-width:0 0 2px 0}#button-generate.cancel{border-color:var(--ordbase-color-danger)}#button-generate:focus{outline:0}#button-generate:focus,#button-generate:hover{background-color:var(--ordbase-color-success);color:var(--ordbase-color-white)}#button-generate.cancel:focus,#button-generate.cancel:hover{background-color:var(--ordbase-color-danger);color:var(--ordbase-color-white)}</style> <div id=div-generated-items> </div> <input type=text value=\"\"> <button id=button-generate class=button-add-item> <i class=\"fa fa-plus\" aria-hidden=true></i> </button>";

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
        let defaultItem = this._root.getElementById('div-container-buttons').firstChild;
        defaultItem.classList.add('selected');
        this._lastSelectedItem = defaultItem;
    }

    setHeaderText(text) {
        this._root.getElementById('div-container-header').innerHTML = text;
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