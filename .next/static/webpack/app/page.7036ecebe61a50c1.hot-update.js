"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/three/Model.js":
/*!*******************************************!*\
  !*** ./src/app/components/three/Model.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Model; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-99983b2d.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Gltf.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/MeshTransmissionMaterial.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var _gsap_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gsap/react */ \"(app-pages-browser)/./node_modules/@gsap/react/src/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\nfunction Model() {\n    _s();\n    const meshRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const { nodes } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useGLTF)(\"/assets/ax_logo_3d.glb\");\n    console.log(nodes);\n    const timeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    const scrollProgressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    const [scrollDistortion, setScrollDistortion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const calcDelta = ()=>{\n        const position = window.scrollY;\n        setTimeout(()=>{\n            setScrollPosition(0);\n        }, 100);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", calcDelta);\n    }, [\n        scrollPosition\n    ]);\n    (0,_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP)(()=>{\n        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({\n            start: 0,\n            end: \"max\",\n            onUpdate: (self)=>{\n                scrollProgressRef.current = self.progress;\n                setScrollDistortion(self.progress * 0.4);\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (meshRef.current) {\n            meshRef.current.position.y = -0.4;\n            meshRef.current.rotation.x = 1.5;\n            meshRef.current.rotation.y = 0;\n            meshRef.current.rotation.z = 0;\n        }\n    }, []);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.C)((_, delta)=>{\n        if (meshRef.current) {\n            timeRef.current += delta;\n            meshRef.current.rotation.z += 0.1 * delta;\n            meshRef.current.position.y += Math.sin(timeRef.current) * 0.001;\n            meshRef.current.rotation.z = scrollProgressRef.current * Math.PI;\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                ref: meshRef,\n                geometry: nodes.Curve001.geometry,\n                scale: 18,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.MeshTransmissionMaterial, {\n                    transmissionSampler: false,\n                    backside: true,\n                    backsideThickness: 0.5,\n                    samples: 1,\n                    thickness: 0.5,\n                    chromaticAberration: 0.1,\n                    anisotropy: 0.8,\n                    distortion: 1,\n                    distortionScale: 0.9,\n                    temporalDistortion: 0.2,\n                    iridescence: 0.7,\n                    iridescenceIOR: 0.5,\n                    iridescenceThicknessRange: [\n                        0,\n                        1400\n                    ],\n                    clearcoat: 1,\n                    attenuationDistance: 0.1,\n                    attenuationColor: \"#ffffff\",\n                    color: \"white\",\n                    opacity: 0\n                }, void 0, false, {\n                    fileName: \"/Users/carlo/Desktop/repos/ax_solutions/src/app/components/three/Model.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/carlo/Desktop/repos/ax_solutions/src/app/components/three/Model.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.OrbitControls, {\n                minAzimuthAngle: -Math.PI / 4,\n                maxAzimuthAngle: Math.PI / 4,\n                minPolarAngle: Math.PI / 4,\n                maxPolarAngle: Math.PI * 3 / 4,\n                enableZoom: false\n            }, void 0, false, {\n                fileName: \"/Users/carlo/Desktop/repos/ax_solutions/src/app/components/three/Model.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_9__.Environment, {\n                preset: \"night\"\n            }, void 0, false, {\n                fileName: \"/Users/carlo/Desktop/repos/ax_solutions/src/app/components/three/Model.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                intensity: 0.8\n            }, void 0, false, {\n                fileName: \"/Users/carlo/Desktop/repos/ax_solutions/src/app/components/three/Model.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                position: [\n                    5,\n                    5,\n                    5\n                ],\n                intensity: 1\n            }, void 0, false, {\n                fileName: \"/Users/carlo/Desktop/repos/ax_solutions/src/app/components/three/Model.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/carlo/Desktop/repos/ax_solutions/src/app/components/three/Model.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Model, \"276dyx/Aq1YcyhSCqgTTybq64rw=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useGLTF,\n        _gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.C\n    ];\n});\n_c = Model;\nvar _c;\n$RefreshReg$(_c, \"Model\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy90aHJlZS9Nb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMyRDtBQUNIO0FBQ3pCO0FBT0o7QUFDSDtBQUMyQjtBQUNiO0FBRXRDWSw0Q0FBSUEsQ0FBQ0csY0FBYyxDQUFDRiw2REFBYUE7QUFFbEIsU0FBU0c7O0lBQ3RCLE1BQU1DLFVBQVVoQiw2Q0FBTUE7SUFDdEIsTUFBTSxFQUFFaUIsS0FBSyxFQUFFLEdBQUdYLDBEQUFPQSxDQUFDO0lBRTFCWSxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTUcsVUFBVXBCLDZDQUFNQSxDQUFDO0lBQ3ZCLE1BQU1xQixvQkFBb0JyQiw2Q0FBTUEsQ0FBQztJQUNqQyxNQUFNLENBQUNzQixrQkFBa0JDLG9CQUFvQixHQUFHckIsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDc0IsZ0JBQWdCQyxrQkFBa0IsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRXJELE1BQU13QixZQUFZO1FBQ2hCLE1BQU1DLFdBQVdDLE9BQU9DLE9BQU87UUFDL0JDLFdBQVc7WUFDVEwsa0JBQWtCO1FBQ3BCLEdBQUc7SUFDTDtJQUVBeEIsZ0RBQVNBLENBQUM7UUFDUjJCLE9BQU9HLGdCQUFnQixDQUFDLFVBQVVMO0lBQ3BDLEdBQUc7UUFBQ0Y7S0FBZTtJQUVuQlgsb0RBQU9BLENBQUM7UUFDTkQsNkRBQWFBLENBQUNvQixNQUFNLENBQUM7WUFDbkJDLE9BQU87WUFDUEMsS0FBSztZQUNMQyxVQUFVLENBQUNDO2dCQUNUZixrQkFBa0JnQixPQUFPLEdBQUdELEtBQUtFLFFBQVE7Z0JBQ3pDZixvQkFBb0JhLEtBQUtFLFFBQVEsR0FBRztZQUN0QztRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUxyQyxnREFBU0EsQ0FBQztRQUNSLElBQUllLFFBQVFxQixPQUFPLEVBQUU7WUFDbkJyQixRQUFRcUIsT0FBTyxDQUFDVixRQUFRLENBQUNZLENBQUMsR0FBRyxDQUFDO1lBQzlCdkIsUUFBUXFCLE9BQU8sQ0FBQ0csUUFBUSxDQUFDQyxDQUFDLEdBQUc7WUFDN0J6QixRQUFRcUIsT0FBTyxDQUFDRyxRQUFRLENBQUNELENBQUMsR0FBRztZQUM3QnZCLFFBQVFxQixPQUFPLENBQUNHLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFHO1FBQy9CO0lBQ0YsR0FBRyxFQUFFO0lBRUx0QyxxREFBUUEsQ0FBQyxDQUFDdUMsR0FBR0M7UUFDWCxJQUFJNUIsUUFBUXFCLE9BQU8sRUFBRTtZQUNuQmpCLFFBQVFpQixPQUFPLElBQUlPO1lBQ25CNUIsUUFBUXFCLE9BQU8sQ0FBQ0csUUFBUSxDQUFDRSxDQUFDLElBQUksTUFBTUU7WUFDcEM1QixRQUFRcUIsT0FBTyxDQUFDVixRQUFRLENBQUNZLENBQUMsSUFBSU0sS0FBS0MsR0FBRyxDQUFDMUIsUUFBUWlCLE9BQU8sSUFBSTtZQUMxRHJCLFFBQVFxQixPQUFPLENBQUNHLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFHckIsa0JBQWtCZ0IsT0FBTyxHQUFHUSxLQUFLRSxFQUFFO1FBQ2xFO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBS0MsS0FBS2xDO2dCQUFTbUMsVUFBVWxDLE1BQU1tQyxRQUFRLENBQUNELFFBQVE7Z0JBQUVFLE9BQU87MEJBQzVELDRFQUFDM0MsdUVBQXdCQTtvQkFDdkI0QyxxQkFBcUI7b0JBQ3JCQyxVQUFVO29CQUNWQyxtQkFBbUI7b0JBQ25CQyxTQUFTO29CQUNUQyxXQUFXO29CQUNYQyxxQkFBcUI7b0JBQ3JCQyxZQUFZO29CQUNaQyxZQUFZO29CQUNaQyxpQkFBaUI7b0JBQ2pCQyxvQkFBb0I7b0JBQ3BCQyxhQUFhO29CQUNiQyxnQkFBZ0I7b0JBQ2hCQywyQkFBMkI7d0JBQUM7d0JBQUc7cUJBQUs7b0JBQ3BDQyxXQUFXO29CQUNYQyxxQkFBcUI7b0JBQ3JCQyxrQkFBaUI7b0JBQ2pCQyxPQUFNO29CQUNOQyxTQUFTOzs7Ozs7Ozs7OzswQkFJYiw4REFBQ2hFLDREQUFhQTtnQkFDWmlFLGlCQUFpQixDQUFDM0IsS0FBS0UsRUFBRSxHQUFHO2dCQUM1QjBCLGlCQUFpQjVCLEtBQUtFLEVBQUUsR0FBRztnQkFDM0IyQixlQUFlN0IsS0FBS0UsRUFBRSxHQUFHO2dCQUN6QjRCLGVBQWUsS0FBTTVCLEVBQUUsR0FBRyxJQUFLO2dCQUMvQjZCLFlBQVk7Ozs7OzswQkFFZCw4REFBQ3BFLDBEQUFXQTtnQkFBQ3FFLFFBQU87Ozs7OzswQkFFcEIsOERBQUNDO2dCQUFhQyxXQUFXOzs7Ozs7MEJBQ3pCLDhEQUFDQztnQkFBaUJyRCxVQUFVO29CQUFDO29CQUFHO29CQUFHO2lCQUFFO2dCQUFFb0QsV0FBVzs7Ozs7Ozs7Ozs7O0FBR3hEO0dBeEZ3QmhFOztRQUVKVCxzREFBT0E7UUFtQnpCTyxnREFBT0E7UUFvQlBULGlEQUFRQTs7O0tBekNjVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvdGhyZWUvTW9kZWwuanM/YjM1YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVGhyZWUsIHVzZUZyYW1lIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7XG4gIHVzZUdMVEYsXG4gIE9yYml0Q29udHJvbHMsXG4gIEVudmlyb25tZW50LFxuICBNZXNoRGlzdG9ydE1hdGVyaWFsLFxuICBNZXNoVHJhbnNtaXNzaW9uTWF0ZXJpYWwsXG59IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJztcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ2dzYXAvU2Nyb2xsVHJpZ2dlcic7XG5pbXBvcnQgeyB1c2VHU0FQIH0gZnJvbSAnQGdzYXAvcmVhY3QnO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RlbCgpIHtcbiAgY29uc3QgbWVzaFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCB7IG5vZGVzIH0gPSB1c2VHTFRGKCcvYXNzZXRzL2F4X2xvZ29fM2QuZ2xiJyk7XG5cbiAgY29uc29sZS5sb2cobm9kZXMpO1xuICBjb25zdCB0aW1lUmVmID0gdXNlUmVmKDApO1xuICBjb25zdCBzY3JvbGxQcm9ncmVzc1JlZiA9IHVzZVJlZigwKTtcbiAgY29uc3QgW3Njcm9sbERpc3RvcnRpb24sIHNldFNjcm9sbERpc3RvcnRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY2FsY0RlbHRhID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTY3JvbGxQb3NpdGlvbigwKTtcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNhbGNEZWx0YSk7XG4gIH0sIFtzY3JvbGxQb3NpdGlvbl0pO1xuXG4gIHVzZUdTQVAoKCkgPT4ge1xuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZW5kOiAnbWF4JyxcbiAgICAgIG9uVXBkYXRlOiAoc2VsZikgPT4ge1xuICAgICAgICBzY3JvbGxQcm9ncmVzc1JlZi5jdXJyZW50ID0gc2VsZi5wcm9ncmVzcztcbiAgICAgICAgc2V0U2Nyb2xsRGlzdG9ydGlvbihzZWxmLnByb2dyZXNzICogMC40KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtZXNoUmVmLmN1cnJlbnQpIHtcbiAgICAgIG1lc2hSZWYuY3VycmVudC5wb3NpdGlvbi55ID0gLTAuNDtcbiAgICAgIG1lc2hSZWYuY3VycmVudC5yb3RhdGlvbi54ID0gMS41O1xuICAgICAgbWVzaFJlZi5jdXJyZW50LnJvdGF0aW9uLnkgPSAwO1xuICAgICAgbWVzaFJlZi5jdXJyZW50LnJvdGF0aW9uLnogPSAwO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUZyYW1lKChfLCBkZWx0YSkgPT4ge1xuICAgIGlmIChtZXNoUmVmLmN1cnJlbnQpIHtcbiAgICAgIHRpbWVSZWYuY3VycmVudCArPSBkZWx0YTtcbiAgICAgIG1lc2hSZWYuY3VycmVudC5yb3RhdGlvbi56ICs9IDAuMSAqIGRlbHRhO1xuICAgICAgbWVzaFJlZi5jdXJyZW50LnBvc2l0aW9uLnkgKz0gTWF0aC5zaW4odGltZVJlZi5jdXJyZW50KSAqIDAuMDAxO1xuICAgICAgbWVzaFJlZi5jdXJyZW50LnJvdGF0aW9uLnogPSBzY3JvbGxQcm9ncmVzc1JlZi5jdXJyZW50ICogTWF0aC5QSTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGdyb3VwPlxuICAgICAgPG1lc2ggcmVmPXttZXNoUmVmfSBnZW9tZXRyeT17bm9kZXMuQ3VydmUwMDEuZ2VvbWV0cnl9IHNjYWxlPXsxOH0+XG4gICAgICAgIDxNZXNoVHJhbnNtaXNzaW9uTWF0ZXJpYWxcbiAgICAgICAgICB0cmFuc21pc3Npb25TYW1wbGVyPXtmYWxzZX1cbiAgICAgICAgICBiYWNrc2lkZT17dHJ1ZX1cbiAgICAgICAgICBiYWNrc2lkZVRoaWNrbmVzcz17MC41fVxuICAgICAgICAgIHNhbXBsZXM9ezF9XG4gICAgICAgICAgdGhpY2tuZXNzPXswLjV9XG4gICAgICAgICAgY2hyb21hdGljQWJlcnJhdGlvbj17MC4xfVxuICAgICAgICAgIGFuaXNvdHJvcHk9ezAuOH1cbiAgICAgICAgICBkaXN0b3J0aW9uPXsxfVxuICAgICAgICAgIGRpc3RvcnRpb25TY2FsZT17MC45fVxuICAgICAgICAgIHRlbXBvcmFsRGlzdG9ydGlvbj17MC4yfVxuICAgICAgICAgIGlyaWRlc2NlbmNlPXswLjd9XG4gICAgICAgICAgaXJpZGVzY2VuY2VJT1I9ezAuNX1cbiAgICAgICAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc1JhbmdlPXtbMCwgMTQwMF19XG4gICAgICAgICAgY2xlYXJjb2F0PXsxfVxuICAgICAgICAgIGF0dGVudWF0aW9uRGlzdGFuY2U9ezAuMX1cbiAgICAgICAgICBhdHRlbnVhdGlvbkNvbG9yPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgb3BhY2l0eT17MH1cbiAgICAgICAgLz5cbiAgICAgIDwvbWVzaD5cblxuICAgICAgPE9yYml0Q29udHJvbHNcbiAgICAgICAgbWluQXppbXV0aEFuZ2xlPXstTWF0aC5QSSAvIDR9XG4gICAgICAgIG1heEF6aW11dGhBbmdsZT17TWF0aC5QSSAvIDR9XG4gICAgICAgIG1pblBvbGFyQW5nbGU9e01hdGguUEkgLyA0fVxuICAgICAgICBtYXhQb2xhckFuZ2xlPXsoTWF0aC5QSSAqIDMpIC8gNH1cbiAgICAgICAgZW5hYmxlWm9vbT17ZmFsc2V9XG4gICAgICAvPlxuICAgICAgPEVudmlyb25tZW50IHByZXNldD1cIm5pZ2h0XCIgLz5cblxuICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezAuOH0gLz5cbiAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IHBvc2l0aW9uPXtbNSwgNSwgNV19IGludGVuc2l0eT17MX0gLz5cbiAgICA8L2dyb3VwPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VUaHJlZSIsInVzZUZyYW1lIiwiVEhSRUUiLCJ1c2VHTFRGIiwiT3JiaXRDb250cm9scyIsIkVudmlyb25tZW50IiwiTWVzaERpc3RvcnRNYXRlcmlhbCIsIk1lc2hUcmFuc21pc3Npb25NYXRlcmlhbCIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwidXNlR1NBUCIsInJlZ2lzdGVyUGx1Z2luIiwiTW9kZWwiLCJtZXNoUmVmIiwibm9kZXMiLCJjb25zb2xlIiwibG9nIiwidGltZVJlZiIsInNjcm9sbFByb2dyZXNzUmVmIiwic2Nyb2xsRGlzdG9ydGlvbiIsInNldFNjcm9sbERpc3RvcnRpb24iLCJzY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbFBvc2l0aW9uIiwiY2FsY0RlbHRhIiwicG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGUiLCJzdGFydCIsImVuZCIsIm9uVXBkYXRlIiwic2VsZiIsImN1cnJlbnQiLCJwcm9ncmVzcyIsInkiLCJyb3RhdGlvbiIsIngiLCJ6IiwiXyIsImRlbHRhIiwiTWF0aCIsInNpbiIsIlBJIiwiZ3JvdXAiLCJtZXNoIiwicmVmIiwiZ2VvbWV0cnkiLCJDdXJ2ZTAwMSIsInNjYWxlIiwidHJhbnNtaXNzaW9uU2FtcGxlciIsImJhY2tzaWRlIiwiYmFja3NpZGVUaGlja25lc3MiLCJzYW1wbGVzIiwidGhpY2tuZXNzIiwiY2hyb21hdGljQWJlcnJhdGlvbiIsImFuaXNvdHJvcHkiLCJkaXN0b3J0aW9uIiwiZGlzdG9ydGlvblNjYWxlIiwidGVtcG9yYWxEaXN0b3J0aW9uIiwiaXJpZGVzY2VuY2UiLCJpcmlkZXNjZW5jZUlPUiIsImlyaWRlc2NlbmNlVGhpY2tuZXNzUmFuZ2UiLCJjbGVhcmNvYXQiLCJhdHRlbnVhdGlvbkRpc3RhbmNlIiwiYXR0ZW51YXRpb25Db2xvciIsImNvbG9yIiwib3BhY2l0eSIsIm1pbkF6aW11dGhBbmdsZSIsIm1heEF6aW11dGhBbmdsZSIsIm1pblBvbGFyQW5nbGUiLCJtYXhQb2xhckFuZ2xlIiwiZW5hYmxlWm9vbSIsInByZXNldCIsImFtYmllbnRMaWdodCIsImludGVuc2l0eSIsImRpcmVjdGlvbmFsTGlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/three/Model.js\n"));

/***/ })

});