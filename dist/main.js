"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkthe_meal"] = self["webpackChunkthe_meal"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: Georgia, \\\"Times New Roman\\\", Times, serif;\\n  font-size: 16px;\\n}\\n\\n.nav-bar {\\n  list-style-type: none;\\n  margin: 0;\\n  padding: 0;\\n  overflow: hidden;\\n  background: rgb(131, 58, 180);\\n  background:\\n    linear-gradient(\\n      90deg,\\n      rgba(131, 58, 180, 1) 0%,\\n      rgba(253, 29, 29, 1) 88%,\\n      rgba(252, 176, 69, 1) 100%\\n    );\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.nav-bar li {\\n  float: left;\\n  display: block;\\n  font-weight: 600;\\n  color: white;\\n  text-align: center;\\n  padding: 2rem 2rem;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n.logo a {\\n  text-decoration: none;\\n  color: aliceblue;\\n  padding-left: 2rem;\\n  padding-right: 2rem;\\n}\\n\\n.logo-img {\\n  max-width: 100%;\\n  width: 150px;\\n  padding-right: 2rem;\\n  padding-top: 0.5rem;\\n}\\n\\n.items-counter {\\n  text-align: center;\\n  font-size: 2.5rem;\\n  margin-top: 2rem;\\n}\\n\\n.grid {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\\n  margin: 4rem;\\n  grid-gap: 40px;\\n  align-items: stretch;\\n}\\n\\n.grid > .card {\\n  border-radius: 1rem;\\n  box-shadow: 10px 20px 20px 10px rgba(10, 10, 10, 0.2);\\n  height: 400px;\\n}\\n\\n.grid > .card img {\\n  border-radius: 1rem;\\n  width: 100%;\\n  max-width: 100%;\\n  height: 60%;\\n  object-fit: cover;\\n}\\n\\n.text {\\n  padding: 20px 20px 20px;\\n}\\n\\n.text > button {\\n  margin-top: 20px;\\n  background: rgb(92, 92, 92);\\n  border: 0;\\n  border-radius: 0.5rem;\\n  bottom: 0;\\n  color: white;\\n  padding: 10px;\\n  cursor: pointer;\\n}\\n\\n.popup {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0, 0.613);\\n  position: fixed;\\n  top: 0;\\n  left: -100%;\\n  transition: all 0.5s ease;\\n}\\n\\n.popup-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n  border-radius: 10px;\\n  width: 80%;\\n  height: 100%;\\n  background-color: #fff;\\n  padding: 5rem 0;\\n  overflow: scroll;\\n}\\n\\n.close-popup {\\n  position: absolute;\\n  top: 3%;\\n  right: 2%;\\n  cursor: pointer;\\n}\\n\\n.popup-content {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  padding: 2rem;\\n}\\n\\n.popup-img {\\n  width: 50%;\\n  border-radius: 8px;\\n}\\n\\n#comment-form {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-start;\\n  gap: 2rem;\\n}\\n\\n#comment-form input,\\ntextarea {\\n  border-radius: 5px;\\n  padding: 0.5rem;\\n  border: 1px solid #000;\\n}\\n\\n.submit-btn {\\n  background: transparent;\\n  border: 1px solid #000;\\n  padding: 0.5rem 2rem;\\n  border-radius: 5px;\\n  transition: all 0.3s ease;\\n  cursor: pointer;\\n}\\n\\n.submit-btn:hover {\\n  background-color: rgb(53, 53, 53);\\n  color: #fff;\\n}\\n\\n.comment-section {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  list-style: none;\\n  gap: 0.5rem;\\n  margin: 2rem 0;\\n  width: 100%;\\n}\\n\\n.text > button:hover {\\n  margin-top: 20px;\\n  background: #0b69c8;\\n  border: 0;\\n  border-radius: 0.5rem;\\n  bottom: 0;\\n  color: white;\\n  padding: 10px;\\n  cursor: pointer;\\n}\\n\\n.likes-number {\\n  padding-top: 0.5rem;\\n  color: red;\\n}\\n\\nfooter {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  margin-bottom: 0;\\n  left: 0;\\n  width: 100%;\\n  background: rgb(131, 58, 180);\\n  background:\\n    linear-gradient(\\n      90deg,\\n      rgba(131, 58, 180, 1) 0%,\\n      rgba(253, 29, 29, 1) 88%,\\n      rgba(252, 176, 69, 1) 100%\\n    );\\n  color: white;\\n  height: 60px;\\n}\\n\\n.heart {\\n  color: red;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://the-meal/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://the-meal/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://the-meal/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://the-meal/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://the-meal/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://the-meal/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://the-meal/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://the-meal/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://the-meal/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://the-meal/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/apis/requests.js":
/*!******************************!*\
  !*** ./src/apis/requests.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postMethod\": () => (/* binding */ postMethod)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kKxyvaitxuQ1NG8i2z1l/comments';\n\nconst postMethod = async (data = {}) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    mode: 'cors',\n    cache: 'no-cache',\n    credentials: 'same-origin',\n    headers: {\n      'Content-type': 'application/json',\n    },\n    redirect: 'follow',\n    body: JSON.stringify(data),\n  });\n  return response;\n};\n\nconst getComments = async (itemID) => {\n  const data = await fetch(`${url}?item_id=${itemID}`);\n  return data.json();\n};\n\n\n//# sourceURL=webpack://the-meal/./src/apis/requests.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _modules_mealsLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mealsLikes.js */ \"./src/modules/mealsLikes.js\");\n/* harmony import */ var _modules_renderCommentsList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderCommentsList.js */ \"./src/modules/renderCommentsList.js\");\n/* harmony import */ var _modules_submitComment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/submitComment.js */ \"./src/modules/submitComment.js\");\n\n\n\n\n\n\n// Get All meals Data\n(0,_modules_getData_js__WEBPACK_IMPORTED_MODULE_1__.getData)().then((data) => {\n  const allItemsCounter = document.querySelector('.items-counter');\n  allItemsCounter.innerText = `${data.meals.length} meals`;\n  // Appending the mealas to the api\n  let mealCard = '';\n  data.meals.forEach((elem) => {\n    mealCard += `  \n      <div data-set=\"${elem.idMeal}\" id=\"${elem.idMeal}\" class=\"card\">\n        <img class=\"meal-img\" src=\"${elem.strMealThumb}\" alt=\"${elem.strMeal}\">\n        <div class=\"text\">\n          <h3>${elem.strMeal} ❤</h3>\n          <h4 class=\"likes-number\">No likes</h4>\n          <button class=\"like-heart\">Like 👍</button>\n          <button class=\"view-comments\">Comment 💬</button>\n        </div>\n      </div>\n  `;\n    // Get likes\n    (0,_modules_getData_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)().then((data) => {\n      const likes = document.querySelectorAll('.likes-number');\n      /* eslint-disable */\n      data.filter((item) => {\n        likes.forEach((like) => {\n          const cardId = like.parentElement.parentElement.id;\n          if (item.item_id === cardId) {\n            like.innerHTML = `${item.likes} likes`;\n          }\n        });\n      });\n      // get likes ID when like button clicked\n      const likeBtn = document.querySelectorAll(\".like-heart\");\n      likeBtn.forEach((btn) => {\n        btn.onclick = () => {\n          const { id } = btn.parentElement.parentElement;\n          (0,_modules_mealsLikes_js__WEBPACK_IMPORTED_MODULE_2__.addLike)(id, likes);\n        };\n      });\n    });\n  });\n  document.querySelector(\".grid\").innerHTML = mealCard;\n\n  // Popup logic\n  const popup = document.querySelector(\".popup\");\n  const closePopup = document.querySelector(\".close-popup\");\n  const popupContent = document.querySelector(\".popup-content\");\n  const viewComments = document.querySelectorAll(\".view-comments\");\n\n  viewComments.forEach((btn) => {\n    btn.addEventListener(\"click\", () => {\n      let popupMeal = \"\";\n      const cardId = btn.parentElement.parentElement.dataset.set;\n      const filtredMeal = data.meals.filter((meal) => meal.idMeal === cardId);\n      popupMeal = `\n          <img class=\"popup-img\" src=\"${filtredMeal[0].strMealThumb}\" alt=\"${filtredMeal[0].strMeal}\">\n          <div class=\"text\">\n            <h3>${filtredMeal[0].strMeal} ❤</h3>\n          </div>\n      `;\n      // Popup reveal\n      popupContent.innerHTML = popupMeal;\n      popup.style.left = \"0\";\n      // Popup close\n      document.body.style.overflow = \"hidden\";\n      closePopup.addEventListener(\"click\", () => {\n        popup.style.left = \"-100%\";\n        document.body.style.overflow = \"scroll\";\n      });\n      // Passing the card id to the popup itself\n      popup.setAttribute(\"data-set\", cardId);\n      // Rendering the comments method\n      _modules_renderCommentsList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderCommentsList(cardId);\n    });\n  });\n});\n\n// Submit a comment method\n_modules_submitComment_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].commentSubmit();\n\n\n//# sourceURL=webpack://the-meal/./src/index.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\n// Get all meals data from API\nconst getData = async () => {\n  try {\n    const response = await fetch(\n      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef',\n    );\n    const meals = await response.json();\n    return meals;\n  } catch (e) {\n    return e.message;\n  }\n};\n\n// get all likes from API\nconst getLikes = async () => {\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/e74v3gv4fqA3Iq80tG1r/likes',\n  );\n  const data = await response.json();\n  return data;\n};\n\n\n//# sourceURL=webpack://the-meal/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/mealsLikes.js":
/*!***********************************!*\
  !*** ./src/modules/mealsLikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\n// function to update likes after button clicked\nconst updateLikes = async (id, likes) => {\n  try {\n    const response = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/e74v3gv4fqA3Iq80tG1r/likes/',\n    );\n    const data = await response.json();\n    /* eslint-disable */\n    data.filter((item) => {\n      likes.forEach((like) => {\n        const cardId = like.parentElement.parentElement.id;\n        if (item.item_id === cardId) {\n          like.innerHTML = `${item.likes} likes`;\n        } else {\n          return \"\";\n        }\n      });\n      return \"\";\n    });\n  } catch (e) {\n    return e.message;\n  }\n  return \"\";\n};\n// function to post likes to API\nconst addLike = async (id, likes) => {\n  try {\n    await fetch(\n      \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/e74v3gv4fqA3Iq80tG1r/likes/\",\n      {\n        method: \"POST\",\n        body: JSON.stringify({\n          item_id: `${id}`,\n        }),\n        headers: {\n          \"Content-Type\": \"application/json; charset=UTF-8\",\n        },\n      }\n    );\n    updateLikes(id, likes);\n  } catch (e) {\n    return e.message;\n  }\n  return \"\";\n};\n\n\n//# sourceURL=webpack://the-meal/./src/modules/mealsLikes.js?");

/***/ }),

/***/ "./src/modules/renderCommentsList.js":
/*!*******************************************!*\
  !*** ./src/modules/renderCommentsList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apis_requests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/requests.js */ \"./src/apis/requests.js\");\n\n\nclass RenderComments {\n  static renderCommentsList = async (cardId) => {\n    // Get method to view the comments\n    const comments = await (0,_apis_requests_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(cardId);\n    const commentsList = document.querySelector(\".comment-section\");\n    this.commentsCount(comments);\n\n    commentsList.innerHTML = \"\"; /* eslint-disable */\n    comments.length\n      ? comments.forEach((comment) => {\n          commentsList.innerHTML += `\n      <li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>\n    `;\n        })\n      : \"\";\n  };\n\n  static commentsCount(comments) {\n    const commentsCount = document.querySelector(\".comments-count\");\n    commentsCount.textContent = comments.length ? comments.length : \"0\";\n\n    return comments;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderComments);\n\n\n//# sourceURL=webpack://the-meal/./src/modules/renderCommentsList.js?");

/***/ }),

/***/ "./src/modules/submitComment.js":
/*!**************************************!*\
  !*** ./src/modules/submitComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apis_requests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/requests.js */ \"./src/apis/requests.js\");\n/* harmony import */ var _renderCommentsList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCommentsList.js */ \"./src/modules/renderCommentsList.js\");\n\n\n\nclass SubmitComment {\n  static commentSubmit() {\n    const formComment = document.querySelector('#comment-form');\n    formComment.addEventListener('submit', async (e) => {\n      e.preventDefault();\n      const cardId = formComment.parentElement.parentElement.dataset.set;\n      const userName = formComment.children[1].value;\n      const insight = formComment.children[2].value;\n      // Post method to set comments\n\n      await (0,_apis_requests_js__WEBPACK_IMPORTED_MODULE_0__.postMethod)({\n        item_id: cardId,\n        username: userName,\n        comment: insight,\n      });\n\n      _renderCommentsList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderCommentsList(cardId);\n      formComment.reset();\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitComment);\n\n\n//# sourceURL=webpack://the-meal/./src/modules/submitComment.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);