webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/home/danielgnz/Documents/zero-to-mastery/jts2019/csr-ssr/next.js/next-tutorials/hello-next/components/MyLayout.js";


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}; // ============ START of Method 2 - Page content as prop ============

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), props.content);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout); // ============ END of Method 2 - Page content as prop ============
// =========== START of Method 1 - Layout as a Higher Order Component =========== 
// const withLayout = Page => {
// 	return () => (
// 		<div style={layoutStyle}>
// 			<Header />
// 			<Page />
// 		</div>
// 	)
// }
// export default withLayout;
// =========== END of Method 1 - Layout as a Higher Order Component =========== 
// ========= START of Layout =========
// const Layout = props => (
// 	<div style={layoutStyle}>
// 		<Header />
// 		{props.children}
// 	</div>
// );
// export default Layout;
// ========= END of Layout =========

/***/ })

})
//# sourceMappingURL=about.js.0c532abdc08858e87004.hot-update.js.map