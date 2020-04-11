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
/******/ 	__webpack_require__.p = "http://www.zhufengpeixun.cn/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_0__);\n// webpack打包我们的图片\n// 1) 在js中创建图片来引入\n// file-loader 默认会在内部生成一张图片到build目录下\n// 把生成的图片名字返回回来\n // 把图片引入 返回的结果是一个新的图片地址\n\nvar image = new Image();\nimage.src = _logo_png__WEBPACK_IMPORTED_MODULE_0___default.a;\ndocument.body.appendChild(image); // 2) 在css引入 background('url')\n// 3) <img src=\"\" alt=\"\" />\n// import $ from 'jquery';\n// expose-loader 暴露 全局的loader 内联的loader\n// pre 前面执行的loader normal 普通的loader 内联loader 后置 postloader\n// console.log(window.$);\n// import $ from 'jquery';\n// console.log($); // 在每个模块中注入 $对象\n// console.log(window.$);\n// let str = require('./a.js');\n// console.log(str + '1');\n\n__webpack_require__(/*! ./index.css */ \"./src/index.css\"); // let fn = () => {\n//   console.log('log');\n// };\n// fn();\n// @log\n// class A {\n//   a = 1;\n// }\n// let a = new A();\n// console.log(a.a);\n// function log (target) {\n//   console.log(target, '23')\n// }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/d61089a70f5e7b22682ff3de9b48ab69.png\";\n\n//# sourceURL=webpack:///./src/logo.png?");

/***/ })

/******/ });