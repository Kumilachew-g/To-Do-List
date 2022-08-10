"use strict";
(self["webpackChunkset_up_project_with_webpack"] = self["webpackChunkset_up_project_with_webpack"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/activities.js":
/*!***************************!*\
  !*** ./src/activities.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addItem": () => (/* binding */ addItem),
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "clearAll": () => (/* binding */ clearAll),
/* harmony export */   "displayList": () => (/* binding */ displayList),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _mainFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainFunctions */ "./src/mainFunctions.js");
/* harmony import */ var _Trash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trash.jpg */ "./src/Trash.jpg");


const addItem = data => {
  const newListItem = new _mainFunctions__WEBPACK_IMPORTED_MODULE_0__["default"](data);
  localStorage.setItem('todoList', JSON.stringify(newListItem.getList()));
};
const clear = index => {
  _mainFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].list = _mainFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].list.filter(item => item !== _mainFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].list[index]);
  _mainFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].list.forEach((item, i) => {
    item.index = i;
  });
  localStorage.setItem('todoList', JSON.stringify(_mainFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].list));
};
const update = (index, text) => {
  _mainFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].list[index].description = text;
  localStorage.setItem('todoList', JSON.stringify(_mainFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].list));
};
const displayList = () => {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  _mainFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].list.forEach(item => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', item.index);
    listItem.classList = 'item-container';
    listItem.innerHTML = `
    <input type="checkbox" class="checkbox">
    <span class ="spn">${item.description}</span>
    <textarea class="text-area" maxlength="25">${item.description}</textarea>
    <img class="trash-btn" src="${_Trash_jpg__WEBPACK_IMPORTED_MODULE_1__}">
    `;
    todoList.appendChild(listItem);
    const textInput = listItem.querySelector('.text-area');
    const trashButton = listItem.querySelector('.trash-btn');
    const checkboxInput = listItem.querySelector('.checkbox');
    const descriptionText = listItem.querySelector('.spn');
    checkboxInput.addEventListener('change', () => {
      const index = parseInt(listItem.id, 10);
      _mainFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].list[index].update();
      descriptionText.classList.toggle('complete');
      textInput.classList.toggle('complete');
      localStorage.setItem('todoList', JSON.stringify(_mainFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].list));
    });
    descriptionText.addEventListener('click', () => {
      descriptionText.style.display = 'none';
      textInput.classList.toggle('update-item');
    });
    textInput.addEventListener('keydown', e => {
      text.innerHTML = textInput.value;
      const index = parseInt(listItem.id, 10);
      update(index, descriptionText.innerHTML);

      if (e.code === 'Enter') {
        descriptionText.style.display = 'block';
        textInput.classList.toggle('update-item');
      }
    });
    trashButton.addEventListener('click', () => {
      const index = parseInt(listItem.id, 10);
      clear(index);
      displayList();
    });

    if (item.complete) {
      checkboxInput.checked = true;
      descriptionText.classList = 'complete';
    }
  });
};
const clearAll = allTasks => {
  allTasks.list = allTasks.list.filter(item => item.complete === false);
  allTasks.list.forEach((item, i) => {
    item.index = i;
  });
  localStorage.setItem('todoList', JSON.stringify(allTasks.list));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _activities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activities */ "./src/activities.js");
/* harmony import */ var _mainFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainFunctions */ "./src/mainFunctions.js");



const listItem = JSON.parse(localStorage.getItem('todoList'));

if (listItem) {
  listItem.forEach(item => new _mainFunctions__WEBPACK_IMPORTED_MODULE_2__["default"](item.description, item.complete));
}

const addInputItems = document.getElementById('add-input');
addInputItems.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    (0,_activities__WEBPACK_IMPORTED_MODULE_1__.addItem)(addInputItems.value);
    addInputItems.value = '';
    (0,_activities__WEBPACK_IMPORTED_MODULE_1__.displayList)();
  }
});
const removeData = document.getElementById('remove-btn');
removeData.addEventListener('click', () => {
  (0,_activities__WEBPACK_IMPORTED_MODULE_1__.clearAll)(_mainFunctions__WEBPACK_IMPORTED_MODULE_2__["default"]);
  (0,_activities__WEBPACK_IMPORTED_MODULE_1__.displayList)();
});
(0,_activities__WEBPACK_IMPORTED_MODULE_1__.displayList)();

/***/ }),

/***/ "./src/mainFunctions.js":
/*!******************************!*\
  !*** ./src/mainFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
class ToDoList {
  static list = [];

  constructor(description, complete = false) {
    this.description = description;
    this.complete = complete;
    this.index = ToDoList.list.length;
    ToDoList.list.push(this);

    this.getList = () => ToDoList.list;
  }

  update() {
    if (this.complete) {
      this.complete = false;
    } else {
      this.complete = true;
    }
  }

}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: sans-serif;\r\n  font-weight: normal;\r\n  margin: 0;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  display: grid;\r\n  box-shadow: 0 0 10px #888;\r\n  min-width: 42%;\r\n  max-width: 77%;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  padding: 16px;\r\n  font-size: inherit;\r\n  margin: 0;\r\n}\r\n\r\n.add-input-list {\r\n  border: 1px solid black;\r\n  font-style: italic;\r\n}\r\n\r\n.add-input-list,\r\n.remove-btn {\r\n  border: none;\r\n}\r\n\r\n.add-input-list,\r\n.item-container,\r\n.remove-btn {\r\n  padding: 16px;\r\n  border-bottom: 1px solid #b1afaf;\r\n  display: flex;\r\n}\r\n\r\n.remove-btn {\r\n  border: none;\r\n  color: #808080;\r\n  font-size: 15px;\r\n}\r\n\r\n.complete {\r\n  text-decoration: line-through;\r\n  color: #808080;\r\n}\r\n\r\n.text-area {\r\n  display: none;\r\n}\r\n\r\n.item-container {\r\n  gap: 6px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.item-container textarea,\r\n.item-container span {\r\n  width: 202px;\r\n  flex-grow: 1;\r\n}\r\n\r\n.trash-btn {\r\n  height: 22px;\r\n  width: 22px;\r\n}\r\n\r\n.update-item {\r\n  display: inline;\r\n  font: inherit;\r\n  padding: 0;\r\n  height: 18px;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n  cursor: text;\r\n  overflow: auto;\r\n}\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #b1afaf;\r\n  color: #b1afaf;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;AACd;;AAEA;;;EAGE,aAAa;EACb,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,QAAQ;EACR,8BAA8B;AAChC;;AAEA;;EAEE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,aAAa;EACb,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,cAAc;AAChB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gCAAgC;EAChC,cAAc;AAChB","sourcesContent":["body {\r\n  font-family: sans-serif;\r\n  font-weight: normal;\r\n  margin: 0;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  display: grid;\r\n  box-shadow: 0 0 10px #888;\r\n  min-width: 42%;\r\n  max-width: 77%;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  padding: 16px;\r\n  font-size: inherit;\r\n  margin: 0;\r\n}\r\n\r\n.add-input-list {\r\n  border: 1px solid black;\r\n  font-style: italic;\r\n}\r\n\r\n.add-input-list,\r\n.remove-btn {\r\n  border: none;\r\n}\r\n\r\n.add-input-list,\r\n.item-container,\r\n.remove-btn {\r\n  padding: 16px;\r\n  border-bottom: 1px solid #b1afaf;\r\n  display: flex;\r\n}\r\n\r\n.remove-btn {\r\n  border: none;\r\n  color: #808080;\r\n  font-size: 15px;\r\n}\r\n\r\n.complete {\r\n  text-decoration: line-through;\r\n  color: #808080;\r\n}\r\n\r\n.text-area {\r\n  display: none;\r\n}\r\n\r\n.item-container {\r\n  gap: 6px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.item-container textarea,\r\n.item-container span {\r\n  width: 202px;\r\n  flex-grow: 1;\r\n}\r\n\r\n.trash-btn {\r\n  height: 22px;\r\n  width: 22px;\r\n}\r\n\r\n.update-item {\r\n  display: inline;\r\n  font: inherit;\r\n  padding: 0;\r\n  height: 18px;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n  cursor: text;\r\n  overflow: auto;\r\n}\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #b1afaf;\r\n  color: #b1afaf;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Trash.jpg":
/*!***********************!*\
  !*** ./src/Trash.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3be3c06391d1ca6624af.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9hY3Rpdml0aWVzLmpzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvbWFpbkZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBUb0RvTGlzdCBmcm9tICcuL21haW5GdW5jdGlvbnMnO1xyXG5pbXBvcnQgVHJhc2hCdXR0b24gZnJvbSAnLi9UcmFzaC5qcGcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZEl0ZW0gPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IG5ld0xpc3RJdGVtID0gbmV3IFRvRG9MaXN0KGRhdGEpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KG5ld0xpc3RJdGVtLmdldExpc3QoKSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyID0gKGluZGV4KSA9PiB7XHJcbiAgVG9Eb0xpc3QubGlzdCA9IFRvRG9MaXN0Lmxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBUb0RvTGlzdC5saXN0W2luZGV4XSk7XHJcbiAgVG9Eb0xpc3QubGlzdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICBpdGVtLmluZGV4ID0gaTtcclxuICB9KTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShUb0RvTGlzdC5saXN0KSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlID0gKGluZGV4LCB0ZXh0KSA9PiB7XHJcbiAgVG9Eb0xpc3QubGlzdFtpbmRleF0uZGVzY3JpcHRpb24gPSB0ZXh0O1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KFRvRG9MaXN0Lmxpc3QpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5TGlzdCA9ICgpID0+IHtcclxuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QnKTtcclxuICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgVG9Eb0xpc3QubGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbS5pbmRleCk7XHJcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QgPSAnaXRlbS1jb250YWluZXInO1xyXG5cclxuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGBcclxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICA8c3BhbiBjbGFzcyA9XCJzcG5cIj4ke2l0ZW0uZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwidGV4dC1hcmVhXCIgbWF4bGVuZ3RoPVwiMjVcIj4ke2l0ZW0uZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cclxuICAgIDxpbWcgY2xhc3M9XCJ0cmFzaC1idG5cIiBzcmM9XCIke1RyYXNoQnV0dG9ufVwiPlxyXG4gICAgYDtcclxuXHJcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcudGV4dC1hcmVhJyk7XHJcbiAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1idG4nKTtcclxuICAgIGNvbnN0IGNoZWNrYm94SW5wdXQgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zcG4nKTtcclxuXHJcbiAgICBjaGVja2JveElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChsaXN0SXRlbS5pZCwgMTApO1xyXG4gICAgICBUb0RvTGlzdC5saXN0W2luZGV4XS51cGRhdGUoKTtcclxuICAgICAgZGVzY3JpcHRpb25UZXh0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJyk7XHJcbiAgICAgIHRleHRJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShUb0RvTGlzdC5saXN0KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkZXNjcmlwdGlvblRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uVGV4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0ZXh0SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgndXBkYXRlLWl0ZW0nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgdGV4dC5pbm5lckhUTUwgPSB0ZXh0SW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQobGlzdEl0ZW0uaWQsIDEwKTtcclxuICAgICAgdXBkYXRlKGluZGV4LCBkZXNjcmlwdGlvblRleHQuaW5uZXJIVE1MKTtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uVGV4dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB0ZXh0SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgndXBkYXRlLWl0ZW0nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdHJhc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQobGlzdEl0ZW0uaWQsIDEwKTtcclxuICAgICAgY2xlYXIoaW5kZXgpO1xyXG4gICAgICBkaXNwbGF5TGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoaXRlbS5jb21wbGV0ZSkge1xyXG4gICAgICBjaGVja2JveElucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBkZXNjcmlwdGlvblRleHQuY2xhc3NMaXN0ID0gJ2NvbXBsZXRlJztcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhckFsbCA9IChhbGxUYXNrcykgPT4ge1xyXG4gIGFsbFRhc2tzLmxpc3QgPSBhbGxUYXNrcy5saXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZSA9PT0gZmFsc2UpO1xyXG4gIGFsbFRhc2tzLmxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgaXRlbS5pbmRleCA9IGk7XHJcbiAgfSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoYWxsVGFza3MubGlzdCkpO1xyXG59O1xyXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgYWRkSXRlbSwgY2xlYXJBbGwsIGRpc3BsYXlMaXN0IH0gZnJvbSAnLi9hY3Rpdml0aWVzJztcclxuaW1wb3J0IFRvRG8gZnJvbSAnLi9tYWluRnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IGxpc3RJdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSk7XHJcbmlmIChsaXN0SXRlbSkge1xyXG4gIGxpc3RJdGVtLmZvckVhY2goKGl0ZW0pID0+IG5ldyBUb0RvKGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uY29tcGxldGUpKTtcclxufVxyXG5cclxuY29uc3QgYWRkSW5wdXRJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtaW5wdXQnKTtcclxuYWRkSW5wdXRJdGVtcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgYWRkSXRlbShhZGRJbnB1dEl0ZW1zLnZhbHVlKTtcclxuICAgIGFkZElucHV0SXRlbXMudmFsdWUgPSAnJztcclxuICAgIGRpc3BsYXlMaXN0KCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHJlbW92ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWJ0bicpO1xyXG5yZW1vdmVEYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNsZWFyQWxsKFRvRG8pO1xyXG4gIGRpc3BsYXlMaXN0KCk7XHJcbn0pO1xyXG5kaXNwbGF5TGlzdCgpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XHJcbiAgc3RhdGljIGxpc3QgPSBbXTtcclxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgY29tcGxldGUgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG4gICAgdGhpcy5pbmRleCA9IFRvRG9MaXN0Lmxpc3QubGVuZ3RoO1xyXG4gICAgVG9Eb0xpc3QubGlzdC5wdXNoKHRoaXMpO1xyXG4gICAgdGhpcy5nZXRMaXN0ID0gKCkgPT4gVG9Eb0xpc3QubGlzdDtcclxuICB9XHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuY29tcGxldGUpIHtcclxuICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM4ODg7XFxyXFxuICBtaW4td2lkdGg6IDQyJTtcXHJcXG4gIG1heC13aWR0aDogNzclO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dC1saXN0IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWlucHV0LWxpc3QsXFxyXFxuLnJlbW92ZS1idG4ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWlucHV0LWxpc3QsXFxyXFxuLml0ZW0tY29udGFpbmVyLFxcclxcbi5yZW1vdmUtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IxYWZhZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtYnRuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjODA4MDgwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogIzgwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1jb250YWluZXIge1xcclxcbiAgZ2FwOiA2cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lciB0ZXh0YXJlYSxcXHJcXG4uaXRlbS1jb250YWluZXIgc3BhbiB7XFxyXFxuICB3aWR0aDogMjAycHg7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi50cmFzaC1idG4ge1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgd2lkdGg6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi51cGRhdGUtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IxYWZhZjtcXHJcXG4gIGNvbG9yOiAjYjFhZmFmO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFFBQVE7RUFDUiw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjODg4O1xcclxcbiAgbWluLXdpZHRoOiA0MiU7XFxyXFxuICBtYXgtd2lkdGg6IDc3JTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaW5wdXQtbGlzdCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dC1saXN0LFxcclxcbi5yZW1vdmUtYnRuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dC1saXN0LFxcclxcbi5pdGVtLWNvbnRhaW5lcixcXHJcXG4ucmVtb3ZlLWJ0biB7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiMWFmYWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlLWJ0biB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogIzgwODA4MDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6ICM4MDgwODA7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWFyZWEge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tY29udGFpbmVyIHtcXHJcXG4gIGdhcDogNnB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1jb250YWluZXIgdGV4dGFyZWEsXFxyXFxuLml0ZW0tY29udGFpbmVyIHNwYW4ge1xcclxcbiAgd2lkdGg6IDIwMnB4O1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhc2gtYnRuIHtcXHJcXG4gIGhlaWdodDogMjJweDtcXHJcXG4gIHdpZHRoOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBkYXRlLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgY3Vyc29yOiB0ZXh0O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiMWFmYWY7XFxyXFxuICBjb2xvcjogI2IxYWZhZjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiVG9Eb0xpc3QiLCJUcmFzaEJ1dHRvbiIsImFkZEl0ZW0iLCJuZXdMaXN0SXRlbSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRMaXN0IiwiY2xlYXIiLCJpbmRleCIsImZpbHRlciIsImZvckVhY2giLCJ1cGRhdGUiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJkaXNwbGF5TGlzdCIsInRvZG9MaXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImxpc3RJdGVtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFwcGVuZENoaWxkIiwidGV4dElucHV0IiwicXVlcnlTZWxlY3RvciIsInRyYXNoQnV0dG9uIiwiY2hlY2tib3hJbnB1dCIsImRlc2NyaXB0aW9uVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJzZUludCIsInRvZ2dsZSIsInN0eWxlIiwiZGlzcGxheSIsImUiLCJ2YWx1ZSIsImNvZGUiLCJjb21wbGV0ZSIsImNoZWNrZWQiLCJjbGVhckFsbCIsImFsbFRhc2tzIiwiVG9EbyIsInBhcnNlIiwiZ2V0SXRlbSIsImFkZElucHV0SXRlbXMiLCJldmVudCIsImtleSIsInJlbW92ZURhdGEiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=