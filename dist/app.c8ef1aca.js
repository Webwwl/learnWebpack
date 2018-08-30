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

throw new Error("Module build failed: Error: Plugin/Preset files are not allowed to export objects, only functions. In F:\\Webpack\\learnWebpack\\node_modules\\babel-preset-es2015\\lib\\index.js\n    at createDescriptor (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\config-descriptors.js:178:11)\n    at items.map (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\config-descriptors.js:109:50)\n    at Array.map (<anonymous>)\n    at createDescriptors (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\config-descriptors.js:109:29)\n    at createPresetDescriptors (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\config-descriptors.js:101:10)\n    at presets (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\config-descriptors.js:47:19)\n    at mergeChainOpts (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\config-chain.js:315:26)\n    at F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\config-chain.js:278:7\n    at buildRootChain (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\config-chain.js:118:22)\n    at loadPrivatePartialConfig (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\partial.js:57:55)\n    at Object.loadPartialConfig (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\partial.js:82:18)\n    at Object.<anonymous> (F:\\Webpack\\learnWebpack\\node_modules\\_babel-loader@8.0.0@babel-loader\\lib\\index.js:82:26)\n    at Generator.next (<anonymous>)\n    at step (F:\\Webpack\\learnWebpack\\node_modules\\_babel-loader@8.0.0@babel-loader\\lib\\index.js:3:221)\n    at _next (F:\\Webpack\\learnWebpack\\node_modules\\_babel-loader@8.0.0@babel-loader\\lib\\index.js:3:409)\n    at F:\\Webpack\\learnWebpack\\node_modules\\_babel-loader@8.0.0@babel-loader\\lib\\index.js:3:477\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (F:\\Webpack\\learnWebpack\\node_modules\\_babel-loader@8.0.0@babel-loader\\lib\\index.js:3:97)\n    at Object._loader (F:\\Webpack\\learnWebpack\\node_modules\\_babel-loader@8.0.0@babel-loader\\lib\\index.js:148:18)\n    at Object.loader (F:\\Webpack\\learnWebpack\\node_modules\\_babel-loader@8.0.0@babel-loader\\lib\\index.js:36:18)\n    at Object.<anonymous> (F:\\Webpack\\learnWebpack\\node_modules\\_babel-loader@8.0.0@babel-loader\\lib\\index.js:31:12)");

/***/ })
/******/ ]);