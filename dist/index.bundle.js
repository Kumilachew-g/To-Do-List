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
/* harmony import */ var _constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor.js */ "./src/constructor.js");
/* harmony import */ var _Trash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trash.jpg */ "./src/Trash.jpg");


const addItem = data => {
  const newListItem = new _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"](data);
  localStorage.setItem('todoList', JSON.stringify(newListItem.getList()));
};
const clear = index => {
  _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list = _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list.filter(item => item !== _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list[index]);
  _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list.forEach((item, i) => {
    item.index = i;
  });
  localStorage.setItem('todoList', JSON.stringify(_constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list));
};
const update = (index, text) => {
  _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list[index].description = text;
  localStorage.setItem('todoList', JSON.stringify(_constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list));
};
const displayList = () => {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list.forEach(item => {
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
      _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list[index].update();
      descriptionText.classList.toggle('complete');
      textInput.classList.toggle('complete');
      localStorage.setItem('todoList', JSON.stringify(_constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].list));
    });
    descriptionText.addEventListener('click', () => {
      descriptionText.style.display = 'none';
      textInput.classList.toggle('update-item');
    });
    textInput.addEventListener('keydown', e => {
      descriptionText.innerHTML = textInput.value;
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

/***/ "./src/constructor.js":
/*!****************************!*\
  !*** ./src/constructor.js ***!
  \****************************/
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _activities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activities.js */ "./src/activities.js");
/* harmony import */ var _constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructor.js */ "./src/constructor.js");



const listItem = JSON.parse(localStorage.getItem('todoList'));

if (listItem) {
  listItem.forEach(item => new _constructor_js__WEBPACK_IMPORTED_MODULE_2__["default"](item.description, item.complete));
}

const addInputItems = document.getElementById('add-input');
addInputItems.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    (0,_activities_js__WEBPACK_IMPORTED_MODULE_1__.addItem)(addInputItems.value);
    addInputItems.value = '';
    (0,_activities_js__WEBPACK_IMPORTED_MODULE_1__.displayList)();
  }
});
const removeData = document.getElementById('remove-btn');
removeData.addEventListener('click', () => {
  (0,_activities_js__WEBPACK_IMPORTED_MODULE_1__.clearAll)(_constructor_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  (0,_activities_js__WEBPACK_IMPORTED_MODULE_1__.displayList)();
});
(0,_activities_js__WEBPACK_IMPORTED_MODULE_1__.displayList)();

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: sans-serif;\r\n  font-weight: normal;\r\n  margin: 0;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  display: grid;\r\n  box-shadow: 0 0 10px #888;\r\n  min-width: 42%;\r\n  max-width: 77%;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  padding: 16px;\r\n  font-size: inherit;\r\n  margin: 0;\r\n  padding-right: 25px;\r\n}\r\n\r\n.add-input-list {\r\n  border: 1px solid black;\r\n  font-style: italic;\r\n}\r\n\r\n.add-input-list,\r\n.remove-btn {\r\n  border: none;\r\n}\r\n\r\n.add-input-list,\r\n.item-container,\r\n.remove-btn {\r\n  padding: 16px;\r\n  border-bottom: 1px solid #b1afaf;\r\n  display: flex;\r\n}\r\n\r\n.remove-btn {\r\n  border: none;\r\n  color: #808080;\r\n  font-size: 15px;\r\n}\r\n\r\n.complete {\r\n  text-decoration: line-through;\r\n  color: #808080;\r\n}\r\n\r\n.text-area {\r\n  display: none;\r\n}\r\n\r\n.item-container {\r\n  gap: 6px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.item-container textarea,\r\n.item-container span {\r\n  width: 202px;\r\n  flex-grow: 1;\r\n}\r\n\r\n.trash-btn {\r\n  height: 22px;\r\n  width: 22px;\r\n}\r\n\r\n.update-item {\r\n  display: inline;\r\n  font: inherit;\r\n  padding: 0;\r\n  height: 18px;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n  cursor: text;\r\n  overflow: auto;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #b1afaf;\r\n  color: #b1afaf;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;AACd;;AAEA;;;EAGE,aAAa;EACb,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,QAAQ;EACR,8BAA8B;AAChC;;AAEA;;EAEE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,aAAa;EACb,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gCAAgC;EAChC,cAAc;AAChB","sourcesContent":["body {\r\n  font-family: sans-serif;\r\n  font-weight: normal;\r\n  margin: 0;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  display: grid;\r\n  box-shadow: 0 0 10px #888;\r\n  min-width: 42%;\r\n  max-width: 77%;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  padding: 16px;\r\n  font-size: inherit;\r\n  margin: 0;\r\n  padding-right: 25px;\r\n}\r\n\r\n.add-input-list {\r\n  border: 1px solid black;\r\n  font-style: italic;\r\n}\r\n\r\n.add-input-list,\r\n.remove-btn {\r\n  border: none;\r\n}\r\n\r\n.add-input-list,\r\n.item-container,\r\n.remove-btn {\r\n  padding: 16px;\r\n  border-bottom: 1px solid #b1afaf;\r\n  display: flex;\r\n}\r\n\r\n.remove-btn {\r\n  border: none;\r\n  color: #808080;\r\n  font-size: 15px;\r\n}\r\n\r\n.complete {\r\n  text-decoration: line-through;\r\n  color: #808080;\r\n}\r\n\r\n.text-area {\r\n  display: none;\r\n}\r\n\r\n.item-container {\r\n  gap: 6px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.item-container textarea,\r\n.item-container span {\r\n  width: 202px;\r\n  flex-grow: 1;\r\n}\r\n\r\n.trash-btn {\r\n  height: 22px;\r\n  width: 22px;\r\n}\r\n\r\n.update-item {\r\n  display: inline;\r\n  font: inherit;\r\n  padding: 0;\r\n  height: 18px;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n  cursor: text;\r\n  overflow: auto;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #b1afaf;\r\n  color: #b1afaf;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvYWN0aXZpdGllcy5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vY29uc3RydWN0b3IuanMnO1xuaW1wb3J0IFRyYXNoQnV0dG9uIGZyb20gJy4vVHJhc2guanBnJztcblxuZXhwb3J0IGNvbnN0IGFkZEl0ZW0gPSAoZGF0YSkgPT4ge1xuICBjb25zdCBuZXdMaXN0SXRlbSA9IG5ldyBUb0RvTGlzdChkYXRhKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkobmV3TGlzdEl0ZW0uZ2V0TGlzdCgpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXIgPSAoaW5kZXgpID0+IHtcbiAgVG9Eb0xpc3QubGlzdCA9IFRvRG9MaXN0Lmxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBUb0RvTGlzdC5saXN0W2luZGV4XSk7XG4gIFRvRG9MaXN0Lmxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgIGl0ZW0uaW5kZXggPSBpO1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoVG9Eb0xpc3QubGlzdCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZSA9IChpbmRleCwgdGV4dCkgPT4ge1xuICBUb0RvTGlzdC5saXN0W2luZGV4XS5kZXNjcmlwdGlvbiA9IHRleHQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KFRvRG9MaXN0Lmxpc3QpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XG4gIHRvZG9MaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gIFRvRG9MaXN0Lmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbS5pbmRleCk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0ID0gJ2l0ZW0tY29udGFpbmVyJztcblxuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGBcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgIDxzcGFuIGNsYXNzID1cInNwblwiPiR7aXRlbS5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgPHRleHRhcmVhIGNsYXNzPVwidGV4dC1hcmVhXCIgbWF4bGVuZ3RoPVwiMjVcIj4ke2l0ZW0uZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cbiAgICA8aW1nIGNsYXNzPVwidHJhc2gtYnRuXCIgc3JjPVwiJHtUcmFzaEJ1dHRvbn1cIj5cbiAgICBgO1xuXG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LWFyZWEnKTtcbiAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1idG4nKTtcbiAgICBjb25zdCBjaGVja2JveElucHV0ID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLnNwbicpO1xuXG4gICAgY2hlY2tib3hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGxpc3RJdGVtLmlkLCAxMCk7XG4gICAgICBUb0RvTGlzdC5saXN0W2luZGV4XS51cGRhdGUoKTtcbiAgICAgIGRlc2NyaXB0aW9uVGV4dC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpO1xuICAgICAgdGV4dElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShUb0RvTGlzdC5saXN0KSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmlwdGlvblRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkZXNjcmlwdGlvblRleHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRleHRJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCd1cGRhdGUtaXRlbScpO1xuICAgIH0pO1xuXG4gICAgdGV4dElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgZGVzY3JpcHRpb25UZXh0LmlubmVySFRNTCA9IHRleHRJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQobGlzdEl0ZW0uaWQsIDEwKTtcbiAgICAgIHVwZGF0ZShpbmRleCwgZGVzY3JpcHRpb25UZXh0LmlubmVySFRNTCk7XG4gICAgICBpZiAoZS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uVGV4dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGV4dElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ3VwZGF0ZS1pdGVtJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cmFzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQobGlzdEl0ZW0uaWQsIDEwKTtcbiAgICAgIGNsZWFyKGluZGV4KTtcbiAgICAgIGRpc3BsYXlMaXN0KCk7XG4gICAgfSk7XG4gICAgaWYgKGl0ZW0uY29tcGxldGUpIHtcbiAgICAgIGNoZWNrYm94SW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICBkZXNjcmlwdGlvblRleHQuY2xhc3NMaXN0ID0gJ2NvbXBsZXRlJztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyQWxsID0gKGFsbFRhc2tzKSA9PiB7XG4gIGFsbFRhc2tzLmxpc3QgPSBhbGxUYXNrcy5saXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZSA9PT0gZmFsc2UpO1xuICBhbGxUYXNrcy5saXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICBpdGVtLmluZGV4ID0gaTtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGFsbFRhc2tzLmxpc3QpKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XG4gIHN0YXRpYyBsaXN0ID0gW107XG5cbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNvbXBsZXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIHRoaXMuaW5kZXggPSBUb0RvTGlzdC5saXN0Lmxlbmd0aDtcbiAgICBUb0RvTGlzdC5saXN0LnB1c2godGhpcyk7XG4gICAgdGhpcy5nZXRMaXN0ID0gKCkgPT4gVG9Eb0xpc3QubGlzdDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5jb21wbGV0ZSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYWRkSXRlbSwgY2xlYXJBbGwsIGRpc3BsYXlMaXN0IH0gZnJvbSAnLi9hY3Rpdml0aWVzLmpzJztcbmltcG9ydCBUb0RvIGZyb20gJy4vY29uc3RydWN0b3IuanMnO1xuXG5jb25zdCBsaXN0SXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0JykpO1xuaWYgKGxpc3RJdGVtKSB7XG4gIGxpc3RJdGVtLmZvckVhY2goKGl0ZW0pID0+IG5ldyBUb0RvKGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uY29tcGxldGUpKTtcbn1cblxuY29uc3QgYWRkSW5wdXRJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtaW5wdXQnKTtcbmFkZElucHV0SXRlbXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgYWRkSXRlbShhZGRJbnB1dEl0ZW1zLnZhbHVlKTtcbiAgICBhZGRJbnB1dEl0ZW1zLnZhbHVlID0gJyc7XG4gICAgZGlzcGxheUxpc3QoKTtcbiAgfVxufSk7XG5cbmNvbnN0IHJlbW92ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWJ0bicpO1xucmVtb3ZlRGF0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2xlYXJBbGwoVG9Ebyk7XG4gIGRpc3BsYXlMaXN0KCk7XG59KTtcbmRpc3BsYXlMaXN0KCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjODg4O1xcclxcbiAgbWluLXdpZHRoOiA0MiU7XFxyXFxuICBtYXgtd2lkdGg6IDc3JTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWlucHV0LWxpc3Qge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaW5wdXQtbGlzdCxcXHJcXG4ucmVtb3ZlLWJ0biB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaW5wdXQtbGlzdCxcXHJcXG4uaXRlbS1jb250YWluZXIsXFxyXFxuLnJlbW92ZS1idG4ge1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjFhZmFmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1idG4ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICM4MDgwODA7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiAjODA4MDgwO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1hcmVhIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lciB7XFxyXFxuICBnYXA6IDZweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tY29udGFpbmVyIHRleHRhcmVhLFxcclxcbi5pdGVtLWNvbnRhaW5lciBzcGFuIHtcXHJcXG4gIHdpZHRoOiAyMDJweDtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYXNoLWJ0biB7XFxyXFxuICBoZWlnaHQ6IDIycHg7XFxyXFxuICB3aWR0aDogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogdGV4dDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjFhZmFmO1xcclxcbiAgY29sb3I6ICNiMWFmYWY7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFFBQVE7RUFDUiw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzg4ODtcXHJcXG4gIG1pbi13aWR0aDogNDIlO1xcclxcbiAgbWF4LXdpZHRoOiA3NyU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dC1saXN0IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWlucHV0LWxpc3QsXFxyXFxuLnJlbW92ZS1idG4ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWlucHV0LWxpc3QsXFxyXFxuLml0ZW0tY29udGFpbmVyLFxcclxcbi5yZW1vdmUtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IxYWZhZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtYnRuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjODA4MDgwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogIzgwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtYXJlYSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1jb250YWluZXIge1xcclxcbiAgZ2FwOiA2cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lciB0ZXh0YXJlYSxcXHJcXG4uaXRlbS1jb250YWluZXIgc3BhbiB7XFxyXFxuICB3aWR0aDogMjAycHg7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi50cmFzaC1idG4ge1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgd2lkdGg6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi51cGRhdGUtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IxYWZhZjtcXHJcXG4gIGNvbG9yOiAjYjFhZmFmO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJUb0RvTGlzdCIsIlRyYXNoQnV0dG9uIiwiYWRkSXRlbSIsIm5ld0xpc3RJdGVtIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldExpc3QiLCJjbGVhciIsImluZGV4IiwiZmlsdGVyIiwiZm9yRWFjaCIsInVwZGF0ZSIsInRleHQiLCJkZXNjcmlwdGlvbiIsImRpc3BsYXlMaXN0IiwidG9kb0xpc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibGlzdEl0ZW0iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0SW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwidHJhc2hCdXR0b24iLCJjaGVja2JveElucHV0IiwiZGVzY3JpcHRpb25UZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcnNlSW50IiwidG9nZ2xlIiwic3R5bGUiLCJkaXNwbGF5IiwiZSIsInZhbHVlIiwiY29kZSIsImNvbXBsZXRlIiwiY2hlY2tlZCIsImNsZWFyQWxsIiwiYWxsVGFza3MiLCJjb25zdHJ1Y3RvciIsIlRvRG8iLCJwYXJzZSIsImdldEl0ZW0iLCJhZGRJbnB1dEl0ZW1zIiwiZXZlbnQiLCJrZXkiLCJyZW1vdmVEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==