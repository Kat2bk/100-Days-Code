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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module '@babel/preset/react' from 'C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App'\n    at Function.resolveSync [as sync] (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\resolve\\lib\\sync.js:89:15)\n    at resolveStandardizedName (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:101:31)\n    at resolvePreset (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:58:10)\n    at loadPreset (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:77:20)\n    at createDescriptor (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:154:9)\n    at C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:109:50\n    at Array.map (<anonymous>)\n    at createDescriptors (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:109:29)\n    at createPresetDescriptors (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:101:10)\n    at presets (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:47:19)\n    at mergeChainOpts (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:319:26)\n    at C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:282:7\n    at Generator.next (<anonymous>)\n    at buildRootChain (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:89:27)\n    at buildRootChain.next (<anonymous>)\n    at loadPrivatePartialConfig (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\partial.js:95:62)\n    at loadPrivatePartialConfig.next (<anonymous>)\n    at Function.<anonymous> (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\partial.js:120:25)\n    at Generator.next (<anonymous>)\n    at evaluateSync (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\gensync\\index.js:244:28)\n    at Function.sync (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\gensync\\index.js:84:14)\n    at Object.<anonymous> (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\@babel\\core\\lib\\config\\index.js:43:61)\n    at Object.<anonymous> (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\babel-loader\\lib\\index.js:151:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\babel-loader\\lib\\index.js:3:103)\n    at _next (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\babel-loader\\lib\\index.js:5:194)\n    at C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\babel-loader\\lib\\index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\babel-loader\\lib\\index.js:5:97)\n    at Object._loader (C:\\Users\\Kat\\Desktop\\practice-remember\\100-Days-Code\\Indescision App\\node_modules\\babel-loader\\lib\\index.js:231:18)");

/***/ })
/******/ ]);