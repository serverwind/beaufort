/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Calc.js":
/*!*********************!*\
  !*** ./src/Calc.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Convertions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Convertions */ \"./src/Convertions.js\");\n/* harmony import */ var _Wind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wind */ \"./src/Wind.js\");\n/* harmony import */ var _ShowRes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowRes */ \"./src/ShowRes.js\");\n\n\n\nvar VALUES = document.getElementById(\"values\");\nvar SUBMIT = document.getElementById(\"submit\");\nSUBMIT.addEventListener(\"click\", check);\nfunction check() {\n  switch (VALUES.value) {\n    case \"ms\":\n      (0,_Wind__WEBPACK_IMPORTED_MODULE_1__.evalWind)((0,_Convertions__WEBPACK_IMPORTED_MODULE_0__.ms2kmh)());\n      break;\n    case \"knot\":\n      (0,_Wind__WEBPACK_IMPORTED_MODULE_1__.evalWind)((0,_Convertions__WEBPACK_IMPORTED_MODULE_0__.knot2kmh)());\n      break;\n    case \"fps\":\n      (0,_Wind__WEBPACK_IMPORTED_MODULE_1__.evalWind)((0,_Convertions__WEBPACK_IMPORTED_MODULE_0__.fps2kmh)());\n      break;\n    case \"mph\":\n      (0,_Wind__WEBPACK_IMPORTED_MODULE_1__.evalWind)((0,_Convertions__WEBPACK_IMPORTED_MODULE_0__.mph2kmh)());\n      break;\n    default:\n      (0,_Wind__WEBPACK_IMPORTED_MODULE_1__.evalWind)((0,_Convertions__WEBPACK_IMPORTED_MODULE_0__.kmh)());\n      break;\n  }\n  (0,_ShowRes__WEBPACK_IMPORTED_MODULE_2__.showRes)();\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/Calc.js?");

/***/ }),

/***/ "./src/Convertions.js":
/*!****************************!*\
  !*** ./src/Convertions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fps2kmh: () => (/* binding */ fps2kmh),\n/* harmony export */   kmh: () => (/* binding */ kmh),\n/* harmony export */   knot2kmh: () => (/* binding */ knot2kmh),\n/* harmony export */   mph2kmh: () => (/* binding */ mph2kmh),\n/* harmony export */   ms2kmh: () => (/* binding */ ms2kmh)\n/* harmony export */ });\nvar NUMBER = document.getElementById(\"number\");\nvar WIND_SPEED = document.getElementById(\"wind-speed\");\nfunction ms2kmh() {\n  var ms = Number(NUMBER.value);\n  var kmh = ms * 3.6;\n  WIND_SPEED.innerHTML = kmh;\n  return kmh;\n}\nfunction knot2kmh() {\n  var knot = Number(NUMBER.value);\n  var kmh = knot * 1.852;\n  WIND_SPEED.innerHTML = kmh;\n  return kmh;\n}\nfunction fps2kmh() {\n  var fps = Number(NUMBER.value);\n  var kmh = fps * 1.09;\n  WIND_SPEED.innerHTML = kmh;\n  return kmh;\n}\nfunction mph2kmh() {\n  var mph = Number(NUMBER.value);\n  var kmh = mph * 1.609;\n  WIND_SPEED.innerHTML = kmh;\n  return kmh;\n}\nfunction kmh() {\n  var kmh = Number(NUMBER.value);\n  WIND_SPEED.innerHTML = kmh;\n  return kmh;\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/Convertions.js?");

/***/ }),

/***/ "./src/ShowRes.js":
/*!************************!*\
  !*** ./src/ShowRes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showRes: () => (/* binding */ showRes)\n/* harmony export */ });\nvar RESULT = document.querySelector('.wind-result');\nfunction showRes() {\n  if (RESULT.classList.contains('wind-hidden')) {\n    RESULT.classList.remove('wind-hidden');\n  }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/ShowRes.js?");

/***/ }),

/***/ "./src/Wind.js":
/*!*********************!*\
  !*** ./src/Wind.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   evalWind: () => (/* binding */ evalWind)\n/* harmony export */ });\nvar BEAF_NUM = document.getElementById(\"beaufort-num\");\nvar WIND_NAME = document.getElementById(\"wind-name\");\nvar WAVE = document.getElementById(\"wave-height\");\nvar SEA = document.getElementById(\"sea\");\nvar LAND = document.getElementById(\"land\");\nfunction evalWind(kmh) {\n  if (kmh >= 0 && kmh < 2) {\n    BEAF_NUM.innerHTML = \"0\";\n    WIND_NAME.innerHTML = \"Calm\";\n    WAVE.innerHTML = \"0 ft / 0 m\";\n    SEA.innerHTML = \"Sea like a mirror\";\n    LAND.innerHTML = \"Smoke rises vertically\";\n    document.querySelector(\".wind-result\").classList.remove('wind-light');\n    document.querySelector(\".wind-result\").classList.remove('wind-moderate');\n    document.querySelector(\".wind-result\").classList.remove('wind-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-very-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-storm');\n    document.querySelector(\".wind-result\").classList.add(\"wind-calm\");\n  } else if (kmh >= 2 && kmh < 6) {\n    BEAF_NUM.innerHTML = \"1\";\n    WIND_NAME.innerHTML = \"Light air\";\n    WAVE.innerHTML = \"0-1 ft / 0-0,3 m\";\n    SEA.innerHTML = \"Ripples\";\n    LAND.innerHTML = \"Direction shown by smoke drift\";\n    document.querySelector(\".wind-result\").classList.remove('wind-light');\n    document.querySelector(\".wind-result\").classList.remove('wind-moderate');\n    document.querySelector(\".wind-result\").classList.remove('wind-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-very-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-storm');\n    document.querySelector(\".wind-result\").classList.add(\"wind-calm\");\n  } else if (kmh > 6 && kmh < 12) {\n    BEAF_NUM.innerHTML = \"2\";\n    WIND_NAME.innerHTML = \"Light breeze\";\n    WAVE.innerHTML = \"1-2 ft / 0,3-0,6 m\";\n    SEA.innerHTML = \"Small wavelets\";\n    LAND.innerHTML = \"Wind felt on face\";\n    document.querySelector(\".wind-result\").classList.remove('wind-light');\n    document.querySelector(\".wind-result\").classList.remove('wind-moderate');\n    document.querySelector(\".wind-result\").classList.remove('wind-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-very-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-storm');\n    document.querySelector(\".wind-result\").classList.add(\"wind-calm\");\n  } else if (kmh > 12 && kmh < 20) {\n    BEAF_NUM.innerHTML = \"3\";\n    WIND_NAME.innerHTML = \"Gentle breeze\";\n    WAVE.innerHTML = \"2-4 ft / 0,6-0,12 m\";\n    SEA.innerHTML = \"Large wavelets\";\n    LAND.innerHTML = \"Leaves and small twigs in constant motion\";\n    document.querySelector(\".wind-result\").classList.remove('wind-calm');\n    document.querySelector(\".wind-result\").classList.remove('wind-moderate');\n    document.querySelector(\".wind-result\").classList.remove('wind-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-very-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-storm');\n    document.querySelector(\".wind-result\").classList.add(\"wind-light\");\n  } else if (kmh > 20 && kmh < 29) {\n    BEAF_NUM.innerHTML = \"4\";\n    WIND_NAME.innerHTML = \"Moderate breeze\";\n    WAVE.innerHTML = \"3,5-6 ft / 1-2 m\";\n    SEA.innerHTML = \"Small waves\";\n    LAND.innerHTML = \"Raises dust and loose paper\";\n    document.querySelector(\".wind-result\").classList.remove('wind-calm');\n    document.querySelector(\".wind-result\").classList.remove('wind-moderate');\n    document.querySelector(\".wind-result\").classList.remove('wind-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-very-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-storm');\n    document.querySelector(\".wind-result\").classList.add(\"wind-light\");\n  } else if (kmh > 29 && kmh < 39) {\n    BEAF_NUM.innerHTML = \"5\";\n    WIND_NAME.innerHTML = \"Fresh breeze\";\n    WAVE.innerHTML = \"6-10 ft / 2-3 m\";\n    SEA.innerHTML = \"Moderate waves\";\n    LAND.innerHTML = \"Small trees and leafs begin to sway\";\n    document.querySelector(\".wind-result\").classList.remove('wind-calm');\n    document.querySelector(\".wind-result\").classList.remove('wind-light');\n    document.querySelector(\".wind-result\").classList.remove('wind-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-very-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-storm');\n    document.querySelector(\".wind-result\").classList.add(\"wind-moderate\");\n  } else if (kmh > 39 && kmh < 50) {\n    BEAF_NUM.innerHTML = \"6\";\n    WIND_NAME.innerHTML = \"Strong breeze\";\n    WAVE.innerHTML = \"9-13 ft / 3-4 m\";\n    SEA.innerHTML = \"Large waves\";\n    LAND.innerHTML = \"Large branches in motion\";\n    document.querySelector(\".wind-result\").classList.remove('wind-calm');\n    document.querySelector(\".wind-result\").classList.remove('wind-light');\n    document.querySelector(\".wind-result\").classList.remove('wind-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-very-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-storm');\n    document.querySelector(\".wind-result\").classList.add(\"wind-moderate\");\n  } else if (kmh > 50 && kmh < 62) {\n    BEAF_NUM.innerHTML = \"7\";\n    WIND_NAME.innerHTML = \"High Wind, moderate gale, near gale\";\n    WAVE.innerHTML = \"13-19 ft / 4-5,5 m\";\n    SEA.innerHTML = \"Sea heaps up\";\n    LAND.innerHTML = \"Whole trees in motion\";\n    document.querySelector(\".wind-result\").classList.remove('wind-calm');\n    document.querySelector(\".wind-result\").classList.remove('wind-light');\n    document.querySelector(\".wind-result\").classList.remove('wind-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-very-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-storm');\n    document.querySelector(\".wind-result\").classList.add(\"wind-moderate\");\n  } else if (kmh > 62 && kmh < 75) {\n    BEAF_NUM.innerHTML = \"8\";\n    WIND_NAME.innerHTML = \"Gale, fresh gale\";\n    WAVE.innerHTML = \"18-25 ft / 5,5-7,5 m\";\n    SEA.innerHTML = \"Moderately high waves\";\n    LAND.innerHTML = \"Twigs break off trees\";\n    document.querySelector(\".wind-result\").classList.remove('wind-calm');\n    document.querySelector(\".wind-result\").classList.remove('wind-light');\n    document.querySelector(\".wind-result\").classList.remove('wind-moderate');\n    document.querySelector(\".wind-result\").classList.remove('wind-very-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-storm');\n    document.querySelector(\".wind-result\").classList.add(\"wind-high\");\n  } else if (kmh > 75 && kmh < 89) {\n    BEAF_NUM.innerHTML = \"9\";\n    WIND_NAME.innerHTML = \"Strong/severe gale\";\n    WAVE.innerHTML = \"23-32 ft / 7-10 m\";\n    SEA.innerHTML = \"High waves\";\n    LAND.innerHTML = \"Slight structural damage\";\n    document.querySelector(\".wind-result\").classList.remove('wind-calm');\n    document.querySelector(\".wind-result\").classList.remove('wind-light');\n    document.querySelector(\".wind-result\").classList.remove('wind-moderate');\n    document.querySelector(\".wind-result\").classList.remove('wind-very-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-storm');\n    document.querySelector(\".wind-result\").classList.add(\"wind-high\");\n  } else if (kmh > 89 && kmh < 103) {\n    BEAF_NUM.innerHTML = \"10\";\n    WIND_NAME.innerHTML = \"Storm, whole gale\";\n    WAVE.innerHTML = \"29-41 ft / 9-12,5 m\";\n    SEA.innerHTML = \"Very high waves\";\n    LAND.innerHTML = \"Trees uprooted, considerable structural damage\";\n    document.querySelector(\".wind-result\").classList.remove('wind-calm');\n    document.querySelector(\".wind-result\").classList.remove('wind-light');\n    document.querySelector(\".wind-result\").classList.remove('wind-moderate');\n    document.querySelector(\".wind-result\").classList.remove('wind-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-storm');\n    document.querySelector(\".wind-result\").classList.add(\"wind-very-high\");\n  } else if (kmh > 103 && kmh < 118) {\n    BEAF_NUM.innerHTML = \"11\";\n    WIND_NAME.innerHTML = \"Violent storm\";\n    WAVE.innerHTML = \"37-52 ft / 11,5-16 m\";\n    SEA.innerHTML = \"Exceptionally high waves\";\n    LAND.innerHTML = \"Widespread damage\";\n    document.querySelector(\".wind-result\").classList.remove('wind-calm');\n    document.querySelector(\".wind-result\").classList.remove('wind-light');\n    document.querySelector(\".wind-result\").classList.remove('wind-moderate');\n    document.querySelector(\".wind-result\").classList.remove('wind-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-storm');\n    document.querySelector(\".wind-result\").classList.add(\"wind-very-high\");\n  } else if (kmh > 118) {\n    BEAF_NUM.innerHTML = \"12\";\n    WIND_NAME.innerHTML = \"Hurricane force\";\n    WAVE.innerHTML = \"&gt; 46 ft / &gt; 14 m\";\n    SEA.innerHTML = \"Exceptionally high waves, sea is completely white\";\n    LAND.innerHTML = \"Devastation\";\n    document.querySelector(\".wind-result\").classList.remove('wind-calm');\n    document.querySelector(\".wind-result\").classList.remove('wind-light');\n    document.querySelector(\".wind-result\").classList.remove('wind-moderate');\n    document.querySelector(\".wind-result\").classList.remove('wind-high');\n    document.querySelector(\".wind-result\").classList.remove('wind-very-high');\n    document.querySelector(\".wind-result\").classList.add(\"wind-storm\");\n  }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/Wind.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calc */ \"./src/Calc.js\");\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;