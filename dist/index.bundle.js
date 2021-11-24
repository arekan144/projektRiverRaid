/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/HtmlElements.ts":
/*!****************************************!*\
  !*** ./src/components/HtmlElements.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar HtmlElements = /** @class */ (function () {\r\n    function HtmlElements(root) {\r\n        var _this = this;\r\n        this.root = root;\r\n        this.initCanvas = function () {\r\n            _this.canvas = document.createElement('canvas');\r\n            _this.canvas.id = 'canvas';\r\n            _this.canvas.width = 900;\r\n            _this.canvas.height = 800;\r\n            _this.root.appendChild(_this.canvas);\r\n        };\r\n        this.initCanvas();\r\n    }\r\n    return HtmlElements;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HtmlElements);\r\n\n\n//# sourceURL=webpack://projektus/./src/components/HtmlElements.ts?");

/***/ }),

/***/ "./src/components/Main.ts":
/*!********************************!*\
  !*** ./src/components/Main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlElements */ \"./src/components/HtmlElements.ts\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderer */ \"./src/components/Renderer.ts\");\n\r\n\r\nvar Main = /** @class */ (function () {\r\n    function Main(root) {\r\n        console.log(root);\r\n        this.HtmlElements = new _HtmlElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root);\r\n        this.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.HtmlElements.canvas);\r\n    }\r\n    return Main;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\r\n\n\n//# sourceURL=webpack://projektus/./src/components/Main.ts?");

/***/ }),

/***/ "./src/components/Renderer.ts":
/*!************************************!*\
  !*** ./src/components/Renderer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_exp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/exp */ \"./src/data/exp.ts\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './gfx/logo.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar Render = /** @class */ (function () {\r\n    function Render(canvas) {\r\n        var _this = this;\r\n        this.canvas = canvas;\r\n        this.status = 0;\r\n        this.pauseGame = function () {\r\n            // console.log('pause')\r\n            if (_data_exp__WEBPACK_IMPORTED_MODULE_0__.variables.game.pause || !_data_exp__WEBPACK_IMPORTED_MODULE_0__.variables.game.start)\r\n                return false;\r\n            return _data_exp__WEBPACK_IMPORTED_MODULE_0__.variables.game.pause = true;\r\n        };\r\n        this.resumeGame = function () {\r\n            // console.log('res')\r\n            if (!_data_exp__WEBPACK_IMPORTED_MODULE_0__.variables.game.pause || !_data_exp__WEBPACK_IMPORTED_MODULE_0__.variables.game.start)\r\n                return false;\r\n            _data_exp__WEBPACK_IMPORTED_MODULE_0__.variables.game.pause = false;\r\n            _this.refresh(0);\r\n            return true;\r\n        };\r\n        this.startGame = function () {\r\n            // console.log('start')\r\n            if (_data_exp__WEBPACK_IMPORTED_MODULE_0__.variables.game.start)\r\n                return false;\r\n            _data_exp__WEBPACK_IMPORTED_MODULE_0__.variables.game.start = true;\r\n            _this.refresh(0);\r\n            return true;\r\n        };\r\n        this.init = function () {\r\n            if (_this.ctx) {\r\n                _this.mainMenu();\r\n            }\r\n            // this.refresh(0);\r\n        };\r\n        this.mainMenu = function () { return __awaiter(_this, void 0, void 0, function () {\r\n            var logo;\r\n            return __generator(this, function (_a) {\r\n                logo = new Image();\r\n                console.log(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './gfx/logo.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n                this.status = 1;\r\n                this.ctx.fillStyle = 'lightGrey';\r\n                this.ctx.fillRect(50, 50, 800, 700);\r\n                return [2 /*return*/];\r\n            });\r\n        }); };\r\n        this.refresh = function (time) {\r\n            console.log(time);\r\n            if (!_data_exp__WEBPACK_IMPORTED_MODULE_0__.variables.game.pause)\r\n                window.requestAnimationFrame(function (t) { return _this.refresh(t); });\r\n        };\r\n        this.ctx = canvas.getContext('2d');\r\n        // new TestButton(document.body, this.startGame, 'sta')\r\n        // new TestButton(document.body, this.resumeGame, 'res')\r\n        // new TestButton(document.body, this.pauseGame, 'pau')\r\n        this.init();\r\n    }\r\n    return Render;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Render);\r\n\n\n//# sourceURL=webpack://projektus/./src/components/Renderer.ts?");

/***/ }),

/***/ "./src/data/exp.ts":
/*!*************************!*\
  !*** ./src/data/exp.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"variables\": () => (/* binding */ variables)\n/* harmony export */ });\nvar variables = {\r\n    game: {\r\n        start: false,\r\n        pause: false\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://projektus/./src/data/exp.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Main */ \"./src/components/Main.ts\");\n\r\nwindow.onload = function () {\r\n    var root = document.getElementById('root');\r\n    new _components_Main__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root);\r\n};\r\n\n\n//# sourceURL=webpack://projektus/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;