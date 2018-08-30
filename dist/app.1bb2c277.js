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

throw new Error("Module build failed: ReferenceError: [BABEL] F:\\Webpack\\learnWebpack\\app.js: Unknown option: .target. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.\n    at throwUnknownError (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\validation\\options.js:122:11)\n    at Object.keys.forEach.key (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\validation\\options.js:106:5)\n    at Array.forEach (<anonymous>)\n    at validateNested (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\validation\\options.js:82:21)\n    at validate (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\validation\\options.js:73:10)\n    at instantiatePreset (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\full.js:244:36)\n    at cachedFunction (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\caching.js:33:19)\n    at loadPresetDescriptor (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\full.js:235:45)\n    at config.presets.reduce (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\full.js:77:21)\n    at Array.reduce (<anonymous>)\n    at recurseDescriptors (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\full.js:74:38)\n    at loadFullConfig (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\config\\full.js:108:6)\n    at process.nextTick (F:\\Webpack\\learnWebpack\\node_modules\\_@babel_core@7.0.0@@babel\\core\\lib\\transform.js:28:33)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ })
/******/ ]);