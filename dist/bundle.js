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

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formLogin\": () => (/* binding */ formLogin),\n/* harmony export */   \"formRegister\": () => (/* binding */ formRegister)\n/* harmony export */ });\n/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.js */ \"./src/components/Input.js\");\n\r\n\r\nclass Form {\r\n    constructor (options){\r\n        const{inputs, onSubmit} = options;\r\n\r\n        this.inputs = inputs;\r\n\r\n        this.form = document.createElement('form')\r\n        const register = document.createElement('h3');\r\n        const login = document.createElement('h3');\r\n        const submitBtn = document.createElement('button');\r\n\r\n        submitBtn.type = 'submit';\r\n        register.classList.add('text');\r\n        login.classList.add('text');\r\n\r\n        register.innerText = 'REGISTER';\r\n        login.innerText = 'LOGIN';\r\n        submitBtn.innerText = 'Submit';\r\n\r\n        function getFormValue (inputs) {\r\n            return inputs.reduce((values, input) =>{\r\n                values[input.name] = input.value;\r\n                return values;\r\n            }, {}); \r\n        }\r\n\r\n        this.form.addEventListener('submit', (e) =>{\r\n            e.preventDefault();\r\n            const formValues = getFormValue(this.inputs);\r\n            onSubmit({formValues}, e)\r\n        })\r\n\r\n        \r\n        this.inputs.forEach((input) =>{\r\n            input.render(this.form);\r\n            console.log(input)\r\n        })\r\n       this.form.render();\r\n    }\r\n    render(container){\r\n        this.form.append(register, login, this.inputs,submitBtn)\r\n        container.append(this.form)\r\n    }\r\n}\r\n\r\nconst formRegister = new Form({\r\n    inputs: [_Input_js__WEBPACK_IMPORTED_MODULE_0__.emailInput, _Input_js__WEBPACK_IMPORTED_MODULE_0__.nameInput, _Input_js__WEBPACK_IMPORTED_MODULE_0__.passwordInput],\r\n});\r\nformRegister.render(document.body);\r\n\r\nconst formLogin = new Form({\r\n    inputs: [_Input_js__WEBPACK_IMPORTED_MODULE_0__.emailInput, _Input_js__WEBPACK_IMPORTED_MODULE_0__.passwordInput],\r\n    \r\n});\r\n\r\nformLogin.render(document.body);\r\nconsole.log(formLogin)\r\n\r\n\n\n//# sourceURL=webpack://final_project/./src/components/Form.js?");

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"emailInput\": () => (/* binding */ emailInput),\n/* harmony export */   \"nameInput\": () => (/* binding */ nameInput),\n/* harmony export */   \"passwordInput\": () => (/* binding */ passwordInput)\n/* harmony export */ });\nclass Input {\r\n    constructor (options){\r\n        const{name, type} = options;\r\n\r\n        this.element = document.createElement('input');\r\n        this.name = name;\r\n        this.value = this.element.value;\r\n        this.element.name = name;\r\n        this.element.type = type;\r\n        this.render()\r\n    }\r\n    render(){\r\n        const div = document.createElement('div');\r\n        const label = document.createElement('label');\r\n        div.classList.add('input-container');\r\n        label.classList.add('label');\r\n        label.innerText = this.name;\r\n        console.log(label)\r\n        console.log(this.element)\r\n        return div.append(label, this.element);\r\n        \r\n    }\r\n}\r\n\r\nconst emailInput = new Input({\r\n    name: 'Email',\r\n    type: 'email',\r\n})\r\n\r\n\r\nconst passwordInput = new Input({\r\n    name: 'Password',\r\n    type: 'password',\r\n})\r\n\r\nconst nameInput = new Input({\r\n    name: 'Name',\r\n    type: 'text',\r\n})\r\n\r\n\n\n//# sourceURL=webpack://final_project/./src/components/Input.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Form.js */ \"./src/components/Form.js\");\n/* import {a} from './test.js';\r\nimport './styles/style.css';\r\n\r\nconsole.log('hello world!!!', 30); */\r\n\r\n\r\n\r\n\r\nconsole.log(_components_Form_js__WEBPACK_IMPORTED_MODULE_0__.formRegister);\r\n\n\n//# sourceURL=webpack://final_project/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;