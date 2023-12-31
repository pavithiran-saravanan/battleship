/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/style.css":
      /*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet/style.css ***!
  \************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n  box-sizing: border-box;\n}\n\nbody{\n  background-color: whitesmoke;\n  position: relative;\n  font-family: 'Black Ops One', cursive;\n  color: #333;\n}\n\nbutton{\n  font-family: 'Black Ops One', cursive;\n}\n\n.battleship-title{\n  font-size: 60px;\n  display: flex;\n  justify-content: center;\n  color: #333;\n  margin-top: 40px;\n}\n\n.boards{\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  margin-top: 15px;\n}\n\n.content > .play-again-btn{\n  display: block;\n  width: 200px;\n  margin: auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n.player-container,\n.computer-container {\n  display: grid;\n  gap: 10px;\n  place-items: center;\n}\n\n.player-title,\n.computer-title {\n  font-size: 25px;\n}\n\n.game-board{\n  display: inline-grid;\n  grid-template-columns: repeat(10, auto);\n  border: 1px solid #333;\n  /* gap: 3px; */\n}\n.cell{\n  position: relative;\n  width: 40px ;\n  height: 40px;\n  border: 1px solid #333;\n}\n\n.player-board .cell:hover{\n  background-color: #666;\n}\n\n.computer-board .cell:hover::before{\n  position: absolute;\n  content: '⌖';\n  font-size: 45px;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  color: #555;\n  margin-top: 2px;\n}\n\n.cell.ship.hidden {\n  background-color: transparent;\n}\n\n.cell.ship{\n  background-color: #555;\n}\n\n.cell.ship.hit{\n  background-color: rgb(226, 71, 71);\n}\n\n.cell.miss{\n  background-color: rgb(106, 152, 221);\n}\n\n.cell.miss::after, .cell.ship.hit::after{\n  position: absolute;\n  content: '〰';\n  font-size: 22px;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  color: rgb(61, 120, 207);\n}\n\n.cell.ship.hit::after{\n  position: absolute;\n  font-size: 30px;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  content: '✷';\n  color: rgb(172, 38, 38);\n  font-size: 30px;\n  margin-top: 2px;\n}\n\n.computer-board .cell.ship.hit::before, .computer-board .cell.miss::before{\n  content: none;\n}\n\n.gameover-container{\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.301);\n  backdrop-filter: blur(2px);\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 10;\n  display: grid;\n  place-content: center;\n}\n\n.gameover-options{\n  display: grid;\n  place-items: center;\n  gap: 15px;\n  background-color: white;\n  padding: 30px 50px;\n  width: 300px;\n  height: 150px;\n  border-radius: 8px;\n  box-shadow: 1px 1px 8px rgb(172, 172, 172)\n}\n\n.announce-winner{\n  font-size: 25px;\n  color: #666;\n}\n\n.play-again-btn{\n  width: 120px;\n  height: 30px;\n  border: 2px solid #666;\n  color: #666;\n}\n\n.hide{\n  visibility: hidden;\n}\n\n.focus{\n  pointer-events: none;\n  opacity: 70%;\n}\n\n.message-container{\n  margin-top: 20px;\n  color: #333;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.axis-button{\n  font-size: 20px;\n  background-color: #333;\n  color: white;\n  padding: 0px 10px;\n  margin-left: 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  user-select: none;\n}\n\n.axis-button.hidden{\n  display: none;\n}\n\n@media (max-width: 1000px){\n  .boards{\n    flex-direction: column;\n    gap: 25px;\n  }\n}\n\n@media (max-width: 500px) {\n  .battleship-title{\n    font-size: 40px;\n  }\n\n  .boards{\n    gap: 15px;\n  }\n  .cell{\n    width: 30px;\n    height: 30px;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/stylesheet/style.css?./node_modules/css-loader/dist/cjs.js",
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?",
        );

        /***/
      },

    /***/ "./src/stylesheet/style.css":
      /*!**********************************!*\
  !*** ./src/stylesheet/style.css ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/stylesheet/style.css?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?",
        );

        /***/
      },

    /***/ "./src/javascript/comp.js":
      /*!********************************!*\
  !*** ./src/javascript/comp.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ comp)\n/* harmony export */ });\n// A factory that returns a dom element based on the parameters\nfunction comp(type, className, ...properties) {\n  const element = document.createElement(type);\n  if (className) element.className = className;\n  properties.forEach((obj) => {\n    const key = Object.keys(obj)[0];\n    const value = obj[key];\n    element.setAttribute(key, value);\n  });\n  return element;\n}\n\n\n//# sourceURL=webpack://battleship/./src/javascript/comp.js?',
        );

        /***/
      },

    /***/ "./src/javascript/computer.js":
      /*!************************************!*\
  !*** ./src/javascript/computer.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getComputer)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/javascript/gameboard.js");\n\n\nfunction getComputer() {\n  const gameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();\n\n  function placeShips() {\n    gameBoard.placeShipsRandom();\n  }\n\n  function getCoordinates() {\n    const row = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.randNum)();\n    const col = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.randNum)();\n    return { row, col };\n  }\n\n  function play() {\n    return getCoordinates();\n  }\n\n  function clearShips() {\n    gameBoard.clearShips();\n  }\n\n  return {\n    gameBoard,\n    placeShips,\n    play,\n    clearShips\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/javascript/computer.js?',
        );

        /***/
      },

    /***/ "./src/javascript/dom.js":
      /*!*******************************!*\
  !*** ./src/javascript/dom.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   announceWinner: () => (/* binding */ announceWinner),\n/* harmony export */   clearDomShips: () => (/* binding */ clearDomShips),\n/* harmony export */   "default": () => (/* binding */ renderStaticContent),\n/* harmony export */   renderShips: () => (/* binding */ renderShips),\n/* harmony export */   setMessage: () => (/* binding */ setMessage),\n/* harmony export */   toggleAxisButton: () => (/* binding */ toggleAxisButton)\n/* harmony export */ });\n/* harmony import */ var _comp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp */ "./src/javascript/comp.js");\n\n\nfunction getBoard() {\n  const board = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "game-board");\n  for (let i = 0; i < 10; i += 1) {\n    for (let j = 0; j < 10; j += 1) {\n      const cell = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", `cell`, { "data-row": i }, { "data-col": j });\n      board.append(cell);\n    }\n  }\n  return board;\n}\n\nfunction getPlayAgainPrimary() {\n  const playAgain = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "play-again-btn play-again-btn-primary");\n  playAgain.textContent = "Restart Game";\n  return playAgain;\n}\n\nfunction getPlayAgain() {\n  const playAgain = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "play-again-btn");\n  playAgain.textContent = "Play Again";\n  return playAgain;\n}\n\nfunction getGameOver() {\n  const container = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "gameover-container hide");\n  const options = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "gameover-options");\n  const announcement = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "announce-winner");\n  announcement.textContent = "Player Won";\n\n  options.append(announcement, getPlayAgain());\n  container.append(options);\n  return container;\n}\n\nfunction getTitle() {\n  const title = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "battleship-title");\n  title.textContent = "BATTLESHIP";\n  return title;\n}\n\nfunction toggleAxisButton() {\n  const button = document.querySelector(".axis-button");\n  if (button.style.transform === "rotate(90deg)") {\n    button.style.transform = "rotate(0deg)";\n  } else {\n    button.style.transform = "rotate(90deg)";\n  }\n}\n\nfunction getMessageBoard() {\n  const message = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "message");\n  message.textContent = "Place Ship";\n\n  const button = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "axis-button");\n  button.textContent = "➔";\n  // button.addEventListener("click", toggleAxisButton);\n\n  const container = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "message-container");\n  container.append(message, button);\n  return container;\n}\n\nfunction renderStaticContent() {\n  const content = document.querySelector(".content");\n  const boards = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "boards");\n  content.append(\n    getGameOver(),\n    getTitle(),\n    getMessageBoard(),\n    boards,\n    getPlayAgainPrimary(),\n  );\n\n  const playerBoard = getBoard();\n  playerBoard.classList.add("player-board");\n\n  const computerBoard = getBoard();\n  computerBoard.classList.add("computer-board");\n\n  const playerContainer = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "player-container");\n  const computerContainer = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "computer-container");\n  const playerTitle = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "player-title title");\n  playerTitle.textContent = "Player";\n  const computerTitle = (0,_comp__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "computer-title");\n  computerTitle.textContent = "Computer";\n\n  playerContainer.append(playerTitle, playerBoard);\n  computerContainer.append(computerTitle, computerBoard);\n\n  boards.append(playerContainer, computerContainer);\n}\n\nfunction renderHelper(domBoard, board, hideShips = false) {\n  for (let i = 0; i < 10; i += 1) {\n    for (let j = 0; j < 10; j += 1) {\n      const cell = board[i][j];\n      const domCell = domBoard.querySelector(\n        `[data-row = "${i}"][data-col = "${j}"]`,\n      );\n      if (cell.hasShip) {\n        if (cell.isHit) domCell.classList.add("hit");\n        else {\n          domCell.classList.add("ship");\n          if (hideShips) domCell.classList.add("hidden");\n        }\n      } else if (cell.isHit) domCell.classList.add("miss");\n    }\n  }\n}\n\nfunction renderShips(pBoard, cBoard) {\n  if (pBoard) {\n    const playerBoard = document.querySelector(".player-board");\n    renderHelper(playerBoard, pBoard);\n  }\n  if (cBoard) {\n    const computerBoard = document.querySelector(".computer-board");\n    renderHelper(computerBoard, cBoard, true);\n  }\n}\n\nfunction clearDomShips() {\n  const playerCells = document\n    .querySelector(".player-board")\n    .querySelectorAll(".cell");\n  playerCells.forEach((cell) => {\n    cell.classList.remove("ship");\n    cell.classList.remove("hit");\n    cell.classList.remove("miss");\n    cell.classList.remove("hidden");\n  });\n\n  const computerCells = document\n    .querySelector(".computer-board")\n    .querySelectorAll(".cell");\n  computerCells.forEach((cell) => {\n    cell.classList.remove("ship");\n    cell.classList.remove("hit");\n    cell.classList.remove("miss");\n    cell.classList.remove("hidden");\n  });\n}\n\nfunction announceWinner(player) {\n  const announcement = document.querySelector(".announce-winner");\n  announcement.textContent = `${player} Won`;\n  document.querySelector(".gameover-container").classList.toggle("hide");\n}\n\nfunction setMessage(msg) {\n  const message = document.querySelector(".message");\n  message.textContent = msg;\n}\n\n\n//# sourceURL=webpack://battleship/./src/javascript/dom.js?',
        );

        /***/
      },

    /***/ "./src/javascript/game.js":
      /*!********************************!*\
  !*** ./src/javascript/game.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getGame)\n/* harmony export */ });\n/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer */ "./src/javascript/computer.js");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/javascript/dom.js");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/javascript/player.js");\n\n\n\n\nfunction getGame() {\n  // Get Players\n  const player = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])();\n  const computer = (0,_computer__WEBPACK_IMPORTED_MODULE_0__["default"])();\n  let shipId = 0;\n  let axis = 0;\n\n  // Board matrices\n  const pBoard = player.gameBoard.board;\n  const cBoard = computer.gameBoard.board;\n\n  // Computer Turn\n  function computerTurn() {\n    // const computerBoard = document.querySelector(".computer-board");\n    // const playerBoard = document.querySelector(".player-board");\n    let target = computer.play();\n    while (!player.gameBoard.receiveAttack(target.row, target.col)) {\n      target = computer.play();\n    }\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderShips)(pBoard, null);\n    if (player.gameBoard.allShipsSunk()) {\n      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.announceWinner)("Computer");\n    } else {\n      playerTurn();\n      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.setMessage)("Player\'s Turn");\n    }\n  }\n\n  // Player Turn\n  function playerTurn() {\n    const computerBoard = document.querySelector(".computer-board");\n    // const playerBoard = document.querySelector(".player-board");\n    const cells = computerBoard.querySelectorAll(".cell");\n    cells.forEach((cell) => {\n      cell.addEventListener("click", () => {\n        const row = cell.getAttribute("data-row");\n        const col = cell.getAttribute("data-col");\n        if (computer.gameBoard.receiveAttack(row, col)) {\n          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderShips)(null, cBoard);\n          if (computer.gameBoard.allShipsSunk()) {\n            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.announceWinner)("Player");\n          } else {\n            setTimeout(computerTurn, 0);\n          }\n        }\n      });\n    });\n  }\n\n  function shipPlacementHandler(e) {\n    const cell = e.target;\n    const computerBoard = document.querySelector(".computer-board");\n    const playerBoard = document.querySelector(".player-board");\n    const cells = playerBoard.querySelectorAll(".cell");\n\n    const row = cell.getAttribute("data-row");\n    const col = cell.getAttribute("data-col");\n    if (player.gameBoard.placeShip(+shipId, +row, +col, axis ? "y" : "x")) {\n      shipId += 1;\n      if (shipId < 5) {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.setMessage)(`Place ${player.gameBoard.getShipName(shipId)}`);\n      } else {\n        computerBoard.style.pointerEvents = "all";\n        playerBoard.style.pointerEvents = "none";\n        cells.forEach((c) => {\n          c.removeEventListener("click", shipPlacementHandler);\n        });\n        document.querySelector(".axis-button").classList.add("hidden");\n        start();\n      }\n      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderShips)(pBoard, null);\n    }\n  }\n\n  function axisHandler() {\n    axis = !axis;\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleAxisButton)();\n  }\n\n  function placePlayerShips() {\n    const computerBoard = document.querySelector(".computer-board");\n    const playerBoard = document.querySelector(".player-board");\n    computerBoard.style.pointerEvents = "none";\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.setMessage)(`Place ${player.gameBoard.getShipName(shipId)}`);\n\n    // Add event listeners to player cells\n    const cells = playerBoard.querySelectorAll(".cell");\n\n    // Axis button click event handler\n    const axisbutton = document.querySelector(".axis-button");\n    axisbutton.addEventListener("click", axisHandler);\n\n    cells.forEach((cell) => {\n      cell.addEventListener("click", shipPlacementHandler);\n    });\n  }\n\n  function start() {\n    computer.placeShips();\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderShips)(pBoard, cBoard);\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.setMessage)("Player\'s Turn");\n    setTimeout(playerTurn, 500);\n  }\n\n  function restart() {\n    // Clear ships\n    player.clearShips();\n    computer.clearShips();\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.clearDomShips)();\n    document.querySelector(".axis-button").removeEventListener(\'click\', axisHandler);\n\n    // Start\n    shipId = 0;\n    axis = 0;\n    document.querySelector(".player-board").style.pointerEvents = "all";\n    document.querySelector(".axis-button").classList.remove("hidden");\n    document.querySelector(".axis-button").style.transform = "rotate(0deg)";\n    placePlayerShips();\n  }\n\n  return {\n    start,\n    restart,\n    placePlayerShips,\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/javascript/game.js?',
        );

        /***/
      },

    /***/ "./src/javascript/gameboard.js":
      /*!*************************************!*\
  !*** ./src/javascript/gameboard.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getGameBoard),\n/* harmony export */   randNum: () => (/* binding */ randNum)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/javascript/ship.js");\n\n\nfunction createCell() {\n  return {\n    isHit: false,\n    hasShip: false,\n    ship: undefined,\n  };\n}\n\nfunction createBoard() {\n  const board = [];\n  for (let i = 0; i < 10; i += 1) {\n    const row = [];\n    for (let j = 0; j < 10; j += 1) {\n      row.push(createCell());\n    }\n    board.push(row);\n  }\n  return board;\n}\n\nfunction getShips() {\n  return [(0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2)];\n}\n\nfunction randNum() {\n  return Math.floor(Math.random() * 10);\n}\n\nfunction getGameBoard() {\n  const ships = getShips();\n  const placement = Array(5).fill(null);\n  const board = createBoard();\n\n  // Returns the name of ship given the Ship Id\n  function getShipName(id) {\n    switch (id) {\n      case 0:\n        return "Carrier";\n      case 1:\n        return "Battleship";\n      case 2:\n        return "Cruiser";\n      case 3:\n        return "Submarine";\n      case 4:\n        return "Destroyer";\n      default:\n        return "Ship";\n    }\n  }\n\n  // Check if given postition lies on board\n  function isOnBoard(row, col) {\n    if (row < 0 || col < 0 || row > 9 || col > 9) return false;\n    return true;\n  }\n\n  // Check if the requested placement is valid\n  function isPlacementValid(row, col, axis, length) {\n    if (axis === "x") {\n      for (let i = col; i < col + length; i += 1) {\n        if (!isOnBoard(row, i) || board[row][i].hasShip) return false;\n      }\n    } else {\n      for (let i = row; i < row + length; i += 1) {\n        if (!isOnBoard(i, col) || board[i][col].hasShip) return false;\n      }\n    }\n    return true;\n  }\n\n  // Place a given ship at specified position along specified direction\n  function placeShip(id, row, col, axis) {\n    if (!isPlacementValid(row, col, axis, ships[id].length)) return false;\n    placement[id] = { row, col, axis };\n    if (axis === "x") {\n      for (let i = col; i < col + ships[id].length; i += 1) {\n        board[row][i].hasShip = true;\n        board[row][i].ship = id;\n      }\n    } else {\n      for (let i = row; i < row + ships[id].length; i += 1) {\n        board[i][col].hasShip = true;\n        board[i][col].ship = id;\n      }\n    }\n    return true;\n  }\n\n  // Place all ships at random positions\n  function randDir() {\n    return Math.floor(Math.random() * 2) === 1 ? "x" : "y";\n  }\n\n  function placeShipsRandom() {\n    ships.forEach((ship, shipId) => {\n      while (true) {\n        if (placeShip(shipId, randNum(), randNum(), randDir())) break;\n      }\n    });\n  }\n\n  // Receive Attack\n  function receiveAttack(row, col) {\n    const cell = board[row][col];\n    if (cell.isHit) return false;\n    cell.isHit = true;\n    if (cell.hasShip) {\n      const shipId = cell.ship;\n      ships[shipId].hit();\n    }\n    return true;\n  }\n\n  // Check if all ships have been sunk\n  function allShipsSunk() {\n    for (let i = 0; i < ships.length; i += 1) {\n      if (!ships[i].isSunk()) return false;\n    }\n    return true;\n  }\n\n  function clearShips() {\n    for (let i = 0; i < 10; i += 1) {\n      for (let j = 0; j < 10; j += 1) {\n        const cell = board[i][j];\n        cell.isHit = false;\n        cell.hasShip = false;\n        cell.ship = undefined;\n      }\n    }\n    for (let i = 0; i < 5; i += 1) {\n      placement[i] = null;\n    }\n    for (let i = 0; i < ships.length; i += 1) {\n      ships[i].reset();\n    }\n  }\n\n  return {\n    board,\n    ships,\n    placeShip,\n    placeShipsRandom,\n    receiveAttack,\n    allShipsSunk,\n    clearShips,\n    getShipName\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/javascript/gameboard.js?',
        );

        /***/
      },

    /***/ "./src/javascript/index.js":
      /*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/javascript/dom.js");\n/* harmony import */ var _stylesheet_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheet/style.css */ "./src/stylesheet/style.css");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/javascript/game.js");\n\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__["default"])();\nconst game = (0,_game__WEBPACK_IMPORTED_MODULE_2__["default"])();\ngame.placePlayerShips();\n\nconst playAgain = document.querySelector(".play-again-btn");\nplayAgain.addEventListener("click", () => {\n  playAgain.parentElement.parentElement.classList.toggle("hide");\n  game.restart();\n});\n\nconst playAgainPrimary = document.querySelector(".play-again-btn-primary");\nplayAgainPrimary.addEventListener("click", () => game.restart());\n\n\n//# sourceURL=webpack://battleship/./src/javascript/index.js?',
        );

        /***/
      },

    /***/ "./src/javascript/player.js":
      /*!**********************************!*\
  !*** ./src/javascript/player.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getPlayer)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/javascript/gameboard.js");\n\n\nfunction getPlayer() {\n  const gameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();\n\n  function placeShips() {\n    gameBoard.placeShipsRandom();\n  }\n\n  function getCoordinates() {\n    const row = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.randNum)();\n    const col = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.randNum)();\n    return { row, col };\n  }\n\n  function play() {\n    return getCoordinates();\n  }\n\n  function clearShips() {\n    gameBoard.clearShips();\n  }\n\n  return {\n    gameBoard,\n    placeShips,\n    play,\n    clearShips\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/javascript/player.js?',
        );

        /***/
      },

    /***/ "./src/javascript/ship.js":
      /*!********************************!*\
  !*** ./src/javascript/ship.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getShip)\n/* harmony export */ });\nfunction getShip(len) {\n  function hit() {\n    if (this.hits < this.length) this.hits += 1;\n    if (this.hits === this.length) this.sunk = true;\n  }\n\n  function isSunk() {\n    return this.sunk;\n  }\n\n  function reset() {\n    this.hits = 0;\n    this.sunk = false;\n  }\n\n  return {\n    length: len,\n    hits: 0,\n    sunk: false,\n    hit,\n    isSunk,\n    reset\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/javascript/ship.js?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__(
    "./src/javascript/index.js",
  );
  /******/
  /******/
})();
