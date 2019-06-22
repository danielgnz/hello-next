webpackHotUpdate("static/development/pages/index.js",{

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
}; // Method 1 - Layout as a Higher Order Component

var withLayout = function withLayout(Page) {
  return function () {
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
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withLayout); // ========= Start of First Layout =========
// const Layout = props => (
// 	<div style={layoutStyle}>
// 		<Header />
// 		{props.children}
// 	</div>
// );
// export default Layout;
// ========= End of First Layout =========

/***/ })

})
//# sourceMappingURL=index.js.bf5c573e2ba4e819e919.hot-update.js.map