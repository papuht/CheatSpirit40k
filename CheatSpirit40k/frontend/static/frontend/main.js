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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\src\\\\components\\\\App.js: Unexpected token (36:6)\\n\\n\\u001b[0m \\u001b[90m 34 | \\u001b[39m  render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 35 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 36 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mul\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 37 | \\u001b[39m        {\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate\\u001b[33m.\\u001b[39mdata\\u001b[33m.\\u001b[39mmap(unit \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 38 | \\u001b[39m          \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m \\u001b[90m 39 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mli\\u001b[39m key\\u001b[33m=\\u001b[39m{unit\\u001b[33m.\\u001b[39mid}\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser.raise (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7044:17)\\n    at Parser.unexpected (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8422:16)\\n    at Parser.parseExprAtom (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9701:20)\\n    at Parser.parseExprSubscripts (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9287:23)\\n    at Parser.parseMaybeUnary (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9267:21)\\n    at Parser.parseExprOps (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9137:23)\\n    at Parser.parseMaybeConditional (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9110:23)\\n    at Parser.parseMaybeAssign (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9065:21)\\n    at Parser.parseParenAndDistinguishExpression (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9842:28)\\n    at Parser.parseExprAtom (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9622:21)\\n    at Parser.parseExprSubscripts (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9287:23)\\n    at Parser.parseMaybeUnary (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9267:21)\\n    at Parser.parseExprOps (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9137:23)\\n    at Parser.parseMaybeConditional (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9110:23)\\n    at Parser.parseMaybeAssign (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9065:21)\\n    at Parser.parseExpression (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9017:23)\\n    at Parser.parseReturnStatement (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11091:28)\\n    at Parser.parseStatementContent (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10772:21)\\n    at Parser.parseStatement (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10724:17)\\n    at Parser.parseBlockOrModuleBlockBody (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11298:25)\\n    at Parser.parseBlockBody (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11285:10)\\n    at Parser.parseBlock (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11269:10)\\n    at Parser.parseFunctionBody (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10285:24)\\n    at Parser.parseFunctionBodyAndFinish (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10254:10)\\n    at Parser.parseMethod (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10216:10)\\n    at Parser.pushClassMethod (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11704:30)\\n    at Parser.parseClassMemberWithIsStatic (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11621:12)\\n    at Parser.parseClassMember (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11563:10)\\n    at E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11518:14\\n    at Parser.withTopicForbiddingContext (E:\\\\40kcalculations\\\\CheatSpirit40k\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10599:14)\");\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_App__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });