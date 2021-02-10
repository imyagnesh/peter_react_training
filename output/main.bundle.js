/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/** *** */ (() => {
  // webpackBootstrap
  /** *** */

  /** *** */ const __webpack_modules__ = {
    /***/ './src/home.js':
      /*! *********************!*\
  !*** ./src/home.js ***!
  \******************** */
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "a": () => (/* binding */ a),\n/* harmony export */   "b": () => (/* binding */ b),\n/* harmony export */   "c": () => (/* binding */ c)\n/* harmony export */ });\nvar a = 1;\nvar b = 2;\nvar c = 3; // form 1 file you can only do 1 export default\n\n//# sourceURL=webpack://peter_react_training/./src/home.js?',
        );
        /***/
      },

    /***/ './src/index.js':
      /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");\n // import * as abc from \'./home\';\n\nconsole.log(abc.a);\nconsole.log(abc.b);\nconsole.log(abc.c); // console.log(a)\n// console.log(b)\n// console.log(c)\n\n//# sourceURL=webpack://peter_react_training/./src/index.js?',
        );
        /***/
      },

    /** *** */
  }; // The module cache
  /** ********************************************************************* */
  /** *** */ /** *** */ const __webpack_module_cache__ = {}; // The require function
  /** *** */
  /** *** */ /** *** */ function __webpack_require__(moduleId) {
    /** *** */ // Check if module is in cache
    /** *** */ if (__webpack_module_cache__[moduleId]) {
      /** *** */ return __webpack_module_cache__[moduleId].exports;
      /** *** */
    } // Create a new module (and put it into the cache)
    /** *** */ /** *** */ const module = (__webpack_module_cache__[moduleId] = {
      /** *** */ // no module.id needed
      /** *** */ // no module.loaded needed
      /** *** */ exports: {},
      /** *** */
    }); // Execute the module function
    /** *** */
    /** *** */ /** *** */ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    ); // Return the exports of the module
    /** *** */
    /** *** */ /** *** */ return module.exports;
    /** *** */
  } /* webpack/runtime/define property getters */
  /** *** */
  /** ********************************************************************* */
  /** *** */ /** *** */ (() => {
    /** *** */ // define getter functions for harmony exports
    /** *** */ __webpack_require__.d = (exports, definition) => {
      /** *** */ for (const key in definition) {
        /** *** */ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /** *** */ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /** *** */
        }
        /** *** */
      }
      /** *** */
    };
    /** *** */
  })(); /* webpack/runtime/hasOwnProperty shorthand */
  /** *** */
  /** *** */ /** *** */ (() => {
    /** *** */ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /** *** */
  })(); /* webpack/runtime/make namespace object */
  /** *** */
  /** *** */ /** *** */ (() => {
    /** *** */ // define __esModule on exports
    /** *** */ __webpack_require__.r = exports => {
      /** *** */ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */
      }
      /** *** */ Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */
    };
    /** *** */
  })(); // startup // Load entry module
  /** *** */
  /** ********************************************************************* */
  /** *** */ /** *** */ /** *** */ __webpack_require__('./src/index.js');
  /** *** */ // This entry module used 'exports' so it can't be inlined
  /** *** */
})();
