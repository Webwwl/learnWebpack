webpackJsonp([5],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {let myModule = 'A'; // 提前将moduleC引入进来,这样A、B的打包代码里就不会有moduleC了
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ })

},[4]);