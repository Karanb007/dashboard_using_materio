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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n    console.log(req.query.slug);\n    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(`DataBase/vendors.json`, \"utf-8\", (err, data)=>{\n        console.log(\"slug:\" + req.query.slug);\n        // if(err){\n        //     res.status(500).json({error:\"Data not available\"})\n        // }\n        res.status(200).json(JSON.parse(data));\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3ZlbmRvcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdCO0FBRVQsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQ0ksS0FBSyxDQUFDQyxJQUFJLENBQUM7SUFDM0JQLHdDQUFXLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDUyxHQUFHLEVBQUNDLElBQUksR0FBRztRQUNwRE4sT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxHQUFDSCxHQUFHLENBQUNJLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO1FBQ25DLFdBQVc7UUFDWCx5REFBeUQ7UUFDekQsSUFBSTtRQUVKSixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osSUFBSSxDQUFDLENBQUM7S0FDekMsQ0FBQztDQUVMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0ZXJpby1tdWktcmVhY3QtbmV4dGpzLWFkbWluLXRlbXBsYXRlLWZyZWUvLi9zcmMvcGFnZXMvYXBpL3ZlbmRvcnMuanM/MzE1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLHJlcyl7XHJcbiAgICBjb25zb2xlLmxvZyhyZXEucXVlcnkuc2x1ZylcclxuICAgIGZzLnJlYWRGaWxlKGBEYXRhQmFzZS92ZW5kb3JzLmpzb25gLCd1dGYtOCcsKGVycixkYXRhKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2x1ZzpcIityZXEucXVlcnkuc2x1ZylcclxuICAgICAgICAvLyBpZihlcnIpe1xyXG4gICAgICAgIC8vICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyb3I6XCJEYXRhIG5vdCBhdmFpbGFibGVcIn0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKEpTT04ucGFyc2UoZGF0YSkpXHJcbiAgICB9KVxyXG4gICAgXHJcbn0iXSwibmFtZXMiOlsiZnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Iiwic2x1ZyIsInJlYWRGaWxlIiwiZXJyIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/vendors.js\n");

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