"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nanoclone";
exports.ids = ["vendor-chunks/nanoclone"];
exports.modules = {

/***/ "(ssr)/./node_modules/nanoclone/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/nanoclone/src/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clone)\n/* harmony export */ });\n// ES6 Map\nvar map\ntry {\n  map = Map\n} catch (_) { }\nvar set\n\n// ES6 Set\ntry {\n  set = Set\n} catch (_) { }\n\nfunction baseClone (src, circulars, clones) {\n  // Null/undefined/functions/etc\n  if (!src || typeof src !== 'object' || typeof src === 'function') {\n    return src\n  }\n\n  // DOM Node\n  if (src.nodeType && 'cloneNode' in src) {\n    return src.cloneNode(true)\n  }\n\n  // Date\n  if (src instanceof Date) {\n    return new Date(src.getTime())\n  }\n\n  // RegExp\n  if (src instanceof RegExp) {\n    return new RegExp(src)\n  }\n\n  // Arrays\n  if (Array.isArray(src)) {\n    return src.map(clone)\n  }\n\n  // ES6 Maps\n  if (map && src instanceof map) {\n    return new Map(Array.from(src.entries()))\n  }\n\n  // ES6 Sets\n  if (set && src instanceof set) {\n    return new Set(Array.from(src.values()))\n  }\n\n  // Object\n  if (src instanceof Object) {\n    circulars.push(src)\n    var obj = Object.create(src)\n    clones.push(obj)\n    for (var key in src) {\n      var idx = circulars.findIndex(function (i) {\n        return i === src[key]\n      })\n      obj[key] = idx > -1 ? clones[idx] : baseClone(src[key], circulars, clones)\n    }\n    return obj\n  }\n\n  // ???\n  return src\n}\n\nfunction clone (src) {\n  return baseClone(src, [], [])\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFub2Nsb25lL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxVc3VhcmlvXFxQcm9qZWN0c1xcaGFyYm91clxcbXktY21zXFxub2RlX21vZHVsZXNcXG5hbm9jbG9uZVxcc3JjXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFUzYgTWFwXG52YXIgbWFwXG50cnkge1xuICBtYXAgPSBNYXBcbn0gY2F0Y2ggKF8pIHsgfVxudmFyIHNldFxuXG4vLyBFUzYgU2V0XG50cnkge1xuICBzZXQgPSBTZXRcbn0gY2F0Y2ggKF8pIHsgfVxuXG5mdW5jdGlvbiBiYXNlQ2xvbmUgKHNyYywgY2lyY3VsYXJzLCBjbG9uZXMpIHtcbiAgLy8gTnVsbC91bmRlZmluZWQvZnVuY3Rpb25zL2V0Y1xuICBpZiAoIXNyYyB8fCB0eXBlb2Ygc3JjICE9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygc3JjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNyY1xuICB9XG5cbiAgLy8gRE9NIE5vZGVcbiAgaWYgKHNyYy5ub2RlVHlwZSAmJiAnY2xvbmVOb2RlJyBpbiBzcmMpIHtcbiAgICByZXR1cm4gc3JjLmNsb25lTm9kZSh0cnVlKVxuICB9XG5cbiAgLy8gRGF0ZVxuICBpZiAoc3JjIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShzcmMuZ2V0VGltZSgpKVxuICB9XG5cbiAgLy8gUmVnRXhwXG4gIGlmIChzcmMgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChzcmMpXG4gIH1cblxuICAvLyBBcnJheXNcbiAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSkge1xuICAgIHJldHVybiBzcmMubWFwKGNsb25lKVxuICB9XG5cbiAgLy8gRVM2IE1hcHNcbiAgaWYgKG1hcCAmJiBzcmMgaW5zdGFuY2VvZiBtYXApIHtcbiAgICByZXR1cm4gbmV3IE1hcChBcnJheS5mcm9tKHNyYy5lbnRyaWVzKCkpKVxuICB9XG5cbiAgLy8gRVM2IFNldHNcbiAgaWYgKHNldCAmJiBzcmMgaW5zdGFuY2VvZiBzZXQpIHtcbiAgICByZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKHNyYy52YWx1ZXMoKSkpXG4gIH1cblxuICAvLyBPYmplY3RcbiAgaWYgKHNyYyBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgIGNpcmN1bGFycy5wdXNoKHNyYylcbiAgICB2YXIgb2JqID0gT2JqZWN0LmNyZWF0ZShzcmMpXG4gICAgY2xvbmVzLnB1c2gob2JqKVxuICAgIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICAgIHZhciBpZHggPSBjaXJjdWxhcnMuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBpID09PSBzcmNba2V5XVxuICAgICAgfSlcbiAgICAgIG9ialtrZXldID0gaWR4ID4gLTEgPyBjbG9uZXNbaWR4XSA6IGJhc2VDbG9uZShzcmNba2V5XSwgY2lyY3VsYXJzLCBjbG9uZXMpXG4gICAgfVxuICAgIHJldHVybiBvYmpcbiAgfVxuXG4gIC8vID8/P1xuICByZXR1cm4gc3JjXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lIChzcmMpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZShzcmMsIFtdLCBbXSlcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nanoclone/src/index.js\n");

/***/ })

};
;