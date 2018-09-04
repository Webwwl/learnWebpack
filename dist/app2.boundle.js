webpackJsonp([4],{

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

let myModule = 'A'; // 提前将moduleC引入进来,这样A、B的打包代码里就不会有moduleC了
// moduleC此时在app.boundle.js中
// require.include('./moduleC')

if (myModule === 'A') {
  new Promise(resolve => {
    Promise.all/* require.ensure */([__webpack_require__.e(2), __webpack_require__.e(1)]).then((require => {
      resolve(__webpack_require__(
      /* webpackChunkName:'moduleA' */
      2));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }).then(function (moduleA) {
    console.log(moduleA);
  });
} else if (module === 'B') {
  new Promise(resolve => {
    Promise.all/* require.ensure */([__webpack_require__.e(2), __webpack_require__.e(0)]).then((require => {
      resolve(__webpack_require__(
      /*  webpackChunkName: "moduleB" */
      3));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }).then(function (moduleB) {
    console.log(moduleB);
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)(module)))

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

},[5]);