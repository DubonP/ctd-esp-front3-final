"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.page.tsx":
/*!******************************!*\
  !*** ./pages/index.page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dh_marvel_components_layouts_body_single_body_single__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dh-marvel/components/layouts/body/single/body-single */ \"./components/layouts/body/single/body-single.tsx\");\n/* harmony import */ var dh_marvel_components_cardHome_cardHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dh-marvel/components/cardHome/cardHome */ \"./components/cardHome/cardHome.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var data = param.data;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1), page = ref[0], setPage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), total = ref1[0], setTotal = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), comics = ref2[0], setComics = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loading = ref3[0], setLoading = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        setComics(data);\n        setTotal(data.length);\n    }, [\n        data\n    ]);\n    var handleChange = function(event, value) {\n        setPage(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Paulo\\\\Desktop\\\\DH\\\\3 bim DH-Especializacao\\\\Front3\\\\Final\\\\ctd-esp-front3-final\\\\pages\\\\index.page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Paulo\\\\Desktop\\\\DH\\\\3 bim DH-Especializacao\\\\Front3\\\\Final\\\\ctd-esp-front3-final\\\\pages\\\\index.page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Paulo\\\\Desktop\\\\DH\\\\3 bim DH-Especializacao\\\\Front3\\\\Final\\\\ctd-esp-front3-final\\\\pages\\\\index.page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Paulo\\\\Desktop\\\\DH\\\\3 bim DH-Especializacao\\\\Front3\\\\Final\\\\ctd-esp-front3-final\\\\pages\\\\index.page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(dh_marvel_components_layouts_body_single_body_single__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                        spacing: 2,\n                        direction: \"row\",\n                        justifyContent: \"center\",\n                        children: comics.map(function(comic) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: (0,dh_marvel_components_cardHome_cardHome__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                                    title: comic.title,\n                                    image: \"\".concat(comic.thumbnail.path, \".\").concat(comic.thumbnail.extension),\n                                    id: comic.id\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Paulo\\\\Desktop\\\\DH\\\\3 bim DH-Especializacao\\\\Front3\\\\Final\\\\ctd-esp-front3-final\\\\pages\\\\index.page.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Paulo\\\\Desktop\\\\DH\\\\3 bim DH-Especializacao\\\\Front3\\\\Final\\\\ctd-esp-front3-final\\\\pages\\\\index.page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                        spacing: 2,\n                        direction: \"row\",\n                        justifyContent: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Pagination, {\n                            count: total,\n                            page: page,\n                            onChange: handleChange,\n                            color: \"primary\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Paulo\\\\Desktop\\\\DH\\\\3 bim DH-Especializacao\\\\Front3\\\\Final\\\\ctd-esp-front3-final\\\\pages\\\\index.page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Paulo\\\\Desktop\\\\DH\\\\3 bim DH-Especializacao\\\\Front3\\\\Final\\\\ctd-esp-front3-final\\\\pages\\\\index.page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Paulo\\\\Desktop\\\\DH\\\\3 bim DH-Especializacao\\\\Front3\\\\Final\\\\ctd-esp-front3-final\\\\pages\\\\index.page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Paulo\\\\Desktop\\\\DH\\\\3 bim DH-Especializacao\\\\Front3\\\\Final\\\\ctd-esp-front3-final\\\\pages\\\\index.page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"4M8cnnA7NLEaZihMwR4cSUyeWVs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFnZXMvaW5kZXgucGFnZS50c3g/YWM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBCb2R5U2luZ2xlIGZyb20gXCJkaC1tYXJ2ZWwvY29tcG9uZW50cy9sYXlvdXRzL2JvZHkvc2luZ2xlL2JvZHktc2luZ2xlXCI7XHJcbmltcG9ydCB0eXBlIHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgZ2V0Q29taWNzIH0gZnJvbSBcImRoLW1hcnZlbC9zZXJ2aWNlcy9tYXJ2ZWwvbWFydmVsLnNlcnZpY2VcIjtcclxuaW1wb3J0IGNhcmRIb21lIGZyb20gXCJkaC1tYXJ2ZWwvY29tcG9uZW50cy9jYXJkSG9tZS9jYXJkSG9tZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFBhZ2luYXRpb24sIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgQ29taWNzUHJvcHMgPSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHRodW1ibmFpbDoge1xyXG4gICAgcGF0aDogc3RyaW5nO1xyXG4gICAgZXh0ZW5zaW9uOiBzdHJpbmc7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkYXRhIH06IHsgZGF0YTogQ29taWNzUHJvcHNbXSB9KSB7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY29taWNzLCBzZXRDb21pY3NdID0gdXNlU3RhdGU8Q29taWNzUHJvcHNbXT4oW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldENvbWljcyhkYXRhKTtcclxuICAgIHNldFRvdGFsKGRhdGEubGVuZ3RoKTtcclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PHVua25vd24+LCB2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRQYWdlKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxCb2R5U2luZ2xlPlxyXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAge2NvbWljcy5tYXAoKGNvbWljKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2NhcmRIb21lKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb21pYy50aXRsZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBgJHtjb21pYy50aHVtYm5haWwucGF0aH0uJHtjb21pYy50aHVtYm5haWwuZXh0ZW5zaW9ufWAsXHJcbiAgICAgICAgICAgICAgICBpZDogY29taWMuaWQsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZGlyZWN0aW9uPVwicm93XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgIGNvdW50PXt0b3RhbH1cclxuICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuICAgICAgPC9Cb2R5U2luZ2xlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDb21pY3MoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJCb2R5U2luZ2xlIiwiY2FyZEhvbWUiLCJQYWdpbmF0aW9uIiwiU3RhY2siLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJkYXRhIiwicGFnZSIsInNldFBhZ2UiLCJ0b3RhbCIsInNldFRvdGFsIiwiY29taWNzIiwic2V0Q29taWNzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNwYWNpbmciLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIm1hcCIsImNvbWljIiwiaW1hZ2UiLCJ0aHVtYm5haWwiLCJwYXRoIiwiZXh0ZW5zaW9uIiwiaWQiLCJjb3VudCIsIm9uQ2hhbmdlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.page.tsx\n"));

/***/ })

});