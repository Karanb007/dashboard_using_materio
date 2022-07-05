"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/vendors";
exports.ids = ["pages/api/vendors"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/vendors.js":
/*!**********************************!*\
  !*** ./src/pages/api/vendors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n    console.log(req.method);\n    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(`DataBase/vendors.json`, \"utf-8\", (err, data)=>{\n        if (err) {\n            res.status(500).json({\n                error: \"Data not available\"\n            });\n        } else {\n            console.log(JSON.parse(data));\n            res.status(200).json(JSON.parse(data));\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3ZlbmRvcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdCO0FBRVQsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQ0ksTUFBTSxDQUFDO0lBQ3ZCTix3Q0FBVyxDQUFDLENBQUMscUJBQXFCLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQ1EsR0FBRyxFQUFDQyxJQUFJLEdBQUc7UUFHcEQsSUFBR0QsR0FBRyxFQUFDO1lBQ0hMLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUNDLEtBQUssRUFBQyxvQkFBb0I7YUFBQyxDQUFDO1NBQ3JELE1BQ0c7WUFFQVIsT0FBTyxDQUFDQyxHQUFHLENBQUNRLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxJQUFJLENBQUMsQ0FBQztZQUM3Qk4sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLLENBQUNMLElBQUksQ0FBQyxDQUFDO1NBQ3pDO0tBRUosQ0FBQztDQUVMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0ZXJpby1tdWktcmVhY3QtbmV4dGpzLWFkbWluLXRlbXBsYXRlLWZyZWUvLi9zcmMvcGFnZXMvYXBpL3ZlbmRvcnMuanM/MzE1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLHJlcyl7XHJcbiAgICBjb25zb2xlLmxvZyhyZXEubWV0aG9kKVxyXG4gICAgZnMucmVhZEZpbGUoYERhdGFCYXNlL3ZlbmRvcnMuanNvbmAsJ3V0Zi04JywoZXJyLGRhdGEpPT57XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe2Vycm9yOlwiRGF0YSBub3QgYXZhaWxhYmxlXCJ9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGRhdGEpKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKGRhdGEpKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfSlcclxuICAgIFxyXG59Il0sIm5hbWVzIjpbImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJyZWFkRmlsZSIsImVyciIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/vendors.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/vendors.js"));
module.exports = __webpack_exports__;

})();