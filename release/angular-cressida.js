/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Umayr Shahid on 9/16/2015.
	 */

	if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports) {
	  module.exports = 'cressida';
	}

	(function (window, angular) {
	  'use strict';

	  // Polyfill for array.include
	  Array.prototype.includes = function (value) {
	    return this.indexOf(value) > -1;
	  }

	  var cressida = __webpack_require__(1);

	  module.exports = angular
	    .module('cressida', [])
	    .factory('$cressida', function () {
	      var instance = null;

	      function create(options) {
	        instance = cressida.create(options);
	        return instance;
	      }

	      function message() {
	        return instance === null ? create() : instance;
	      }

	      return {
	        create: create,
	        message: message
	      };
	    });

	}(window, window.angular));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('./classes/cressida'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.Cressida);
	    global.index = mod.exports;
	  }
	})(this, function (exports, module, _classesCressida) {
	  /**
	   * Author: Umayr Shahid <umayrr@hotmail.com>,
	   * Created: 17:05, 17/08/15.
	   */

	  'use strict';

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  var _Cressida = _interopRequireDefault(_classesCressida);

	  module.exports = _Cressida['default'];
	});
	//# sourceMappingURL=index.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('./parser'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.Parser);
	    global.cressida = mod.exports;
	  }
	})(this, function (exports, module, _parser) {
	  /**
	   * Author: Umayr Shahid <umayrr@hotmail.com>,
	   * Created: 17:05, 17/08/15.
	   */

	  'use strict';

	  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var _Parser = _interopRequireDefault(_parser);

	  var DEFAULTS = {
	    auxiliary: 'should',
	    includeName: true
	  };

	  var Cressida = (function () {
	    function Cressida() {
	      _classCallCheck(this, Cressida);
	    }

	    _createClass(Cressida, null, [{
	      key: 'message',

	      /**
	       * Core method to generate messages.
	       *
	       * @returns {*}
	       */
	      value: function message() {
	        var _Parser$args = _Parser['default'].args.apply(_Parser['default'], arguments);

	        var _Parser$args2 = _slicedToArray(_Parser$args, 3);

	        var _name = _Parser$args2[0];
	        var _raw = _Parser$args2[1];
	        var _args = _Parser$args2[2];

	        if (typeof _raw === 'undefined' || !_raw) throw new Error('Operator can\'t be empty.');

	        var _Parser$operator = _Parser['default'].operator(_raw);

	        var _Parser$operator2 = _slicedToArray(_Parser$operator, 3);

	        var _not = _Parser$operator2[0];
	        var _operator = _Parser$operator2[1];
	        var _type = _Parser$operator2[2];

	        var options = Cressida._options;
	        var base = options.auxiliary + ' ' + (_not ? 'not be' : 'be');
	        var suffix = _Parser['default'].methods[_type](_operator, _args);

	        return options.includeName && typeof _name !== 'undefined' ? _name + ' ' + base + ' ' + suffix + '.' : base + ' ' + suffix + '.';
	      }

	      /**
	       * Factory method that return the main function to generate messages.
	       *
	       * @param options
	       * @returns {Cressida.message}
	       */
	    }, {
	      key: 'create',
	      value: function create(options) {
	        Cressida._options = Object.assign({}, DEFAULTS, options);
	        return Cressida.message;
	      }
	    }]);

	    return Cressida;
	  })();

	  module.exports = Cressida;
	});
	//# sourceMappingURL=cressida.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(4), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('util'), require('../utils'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.util, global.utils);
	    global.parser = mod.exports;
	  }
	})(this, function (exports, module, _util, _utils) {
	  /**
	   * Author: Umayr Shahid <umayrr@hotmail.com>,
	   * Created: 20:56, 06/09/15.
	   */

	  'use strict';

	  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TYPES = {
	    DATE: ['before', 'after'],
	    NUMBER: ['greater', 'smaller', 'min', 'max', 'divisible', 'divisibleby'],
	    STRING: ['contains', 'alphanumeric', 'numeric', 'equals', 'alpha', 'len', 'length', 'bytelength', 'lowercase', 'uppercase', 'null'],
	    STANDALONE: ['email', 'regex', 'url', 'json', 'ip', 'ipv4', 'ipv6', 'uuid', 'uuidv3', 'uuidv4', 'uuidv5', 'array', 'creditcard', 'int', 'float', 'decimal', 'date', 'hexadecimal', 'hexcolor'],
	    PATTERN: ['matches', 'is', 'not'],
	    BOOL: ['boolean'],
	    ARRAY: ['in'],
	    NONE: ['empty']
	  };

	  var STANDALONE = {
	    EMAIL: 'email address',
	    CREDITCARD: 'credit card number',
	    INT: 'integer value',
	    FLOAT: 'float value',
	    DECIMAL: 'decimal value',
	    IP: 'ip address',
	    IPV4: 'ipv4 address',
	    IPV6: 'ipv6 address',
	    JSON: 'json string',
	    HEXCOLOR: 'hex color code'
	  };

	  var STRING = {
	    LOWERCASE: 'consist of lowercase letters',
	    UPPERCASE: 'consist of uppercase letters',
	    ALPHA: 'consist of only letters',
	    ALPHANUMERIC: 'consist of only letters & numbers',
	    EQUALS: 'equal to %s',
	    CONTAINS: 'containing %s in it',
	    LEN: 'between %s to %s characters',
	    LENGTH: 'between %s to %s characters',
	    BYTELENGTH: 'between %s to %s characters',
	    ATLEAST: 'at least %s characters long',
	    NUMERIC: 'consist of only numbers',
	    NULL: 'a null string'
	  };

	  var PATTERN = {
	    MATCHES: 'matching with %s regex',
	    IS: 'matching with %s regex',
	    NOT: 'matching with %s regex'
	  };

	  var NUMBER = {
	    GREATER: 'greater than %s',
	    SMALLER: 'smaller than %s',
	    MIN: 'minimum %s',
	    MAX: 'maximum %s',
	    DIVISIBLE: 'divisible by %s',
	    DIVISIBLEBY: 'divisible by %s'
	  };

	  var BOOL = {
	    BOOLEAN: 'either %s or %s'
	  };

	  var ARRAY = {
	    BINARY: 'either %s or %s',
	    N: 'one of these values (%s)',
	    ONE: 'equal to %s'
	  };

	  var Parser = (function () {
	    function Parser() {
	      _classCallCheck(this, Parser);
	    }

	    _createClass(Parser, null, [{
	      key: 'operator',

	      /**
	       * Static method to parse operator.
	       *
	       * Possible inputs can be:
	       * - Positives: empty, isEmpty, !notEmpty, !isNotEmpty
	       * - Negatives: !empty, !isEmpty, notEmpty
	       * @param operator
	       * @returns {*[]}
	       */
	      value: function operator(_operator2) {
	        var _count = 0;
	        var _not = false;
	        var _operator = undefined;
	        var _type = undefined;

	        if (_operator2.includes('!')) {
	          _not = !_not;
	          _count++;
	        }
	        if (_operator2.substr(0, 3).toLowerCase().includes('is')) _count += 2;
	        if (_operator2.includes('not')) {
	          _not = !_not;
	          _count += 3;
	        }

	        _operator = _operator2.substr(_count, _operator2.length).toLowerCase();
	        _type = Parser.type(_operator);

	        return [_not, _operator, _type];
	      }

	      /**
	       * Static method to get the type of the operator.
	       *
	       * @param operator
	       * @returns {string}
	       */
	    }, {
	      key: 'type',
	      value: function type(operator) {
	        if (!Parser.isSupported(operator)) throw new Error('Provided operator `' + operator + '` is not supported.');
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = Object.keys(TYPES)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var type = _step.value;

	            if (TYPES[type].includes(operator)) return String(type).toLowerCase();
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator['return']) {
	              _iterator['return']();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }

	      /**
	       * Static method that wraps all type wise operations.
	       *
	       * @returns {*}
	       */
	    }, {
	      key: 'isSupported',

	      /**
	       * Return true if provided operator is valid.
	       *
	       * @param operator
	       * @returns {*}
	       */
	      value: function isSupported(operator) {
	        var _all = [];
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	          for (var _iterator2 = Object.keys(TYPES)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var type = _step2.value;

	            _all.push.apply(_all, _toConsumableArray(TYPES[type]));
	          }
	        } catch (err) {
	          _didIteratorError2 = true;
	          _iteratorError2 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	              _iterator2['return']();
	            }
	          } finally {
	            if (_didIteratorError2) {
	              throw _iteratorError2;
	            }
	          }
	        }

	        return Parser._containsAny(operator.toLowerCase(), _all);
	      }

	      /**
	       * Search through an array and returns true if any value of array matches the provided needle.
	       *
	       * @param needle
	       * @param haystack
	       * @returns {boolean}
	       * @private
	       */
	    }, {
	      key: '_containsAny',
	      value: function _containsAny(needle, haystack) {
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;

	        try {
	          for (var _iterator3 = haystack[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var straw = _step3.value;

	            if (needle.includes(straw)) return true;
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
	              _iterator3['return']();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }

	        return false;
	      }

	      /**
	       * Parse arguments.
	       *
	       * @returns {*[]}
	       */
	    }, {
	      key: 'args',
	      value: function args() {
	        var _Array$from = Array.from(arguments);

	        var _Array$from2 = _slicedToArray(_Array$from, 3);

	        var _first = _Array$from2[0];
	        var _second = _Array$from2[1];
	        var _third = _Array$from2[2];

	        return Parser.isSupported(_first) ? [_third, _first, _second] : [_first, _second, _third];
	      }
	    }, {
	      key: 'methods',
	      get: function get() {
	        return {
	          date: function date() {
	            var _Array$from3 = Array.from(arguments);

	            var _Array$from32 = _slicedToArray(_Array$from3, 2);

	            var _operator = _Array$from32[0];
	            var _args = _Array$from32[1];

	            return _operator + ' than ' + (0, _utils.humanize)(_args);
	          },
	          number: function number() {
	            var _Array$from4 = Array.from(arguments);

	            var _Array$from42 = _slicedToArray(_Array$from4, 2);

	            var _operator = _Array$from42[0];
	            var _args = _Array$from42[1];

	            return '' + ((0, _util.format)(NUMBER[_operator.toUpperCase()], _args) || _operator);
	          },
	          string: function string() {
	            var _Array$from5 = Array.from(arguments);

	            var _Array$from52 = _slicedToArray(_Array$from5, 2);

	            var _operator = _Array$from52[0];
	            var _args = _Array$from52[1];

	            var _msg = undefined;

	            if (_operator === 'len' || _operator === 'length' || _operator === 'bytelength' || _operator === 'equals' || _operator === 'contains') {
	              if ((_operator === 'len' || _operator === 'length' || _operator === 'bytelength') && _args.length === 1) _operator = 'atleast';
	              _msg = _util.format.apply(undefined, [STRING[_operator.toUpperCase()]].concat(_toConsumableArray(_args)));
	            } else _msg = '' + (STRING[_operator.toUpperCase()] || _operator);

	            return _msg;
	          },
	          standalone: function standalone() {
	            var _Array$from6 = Array.from(arguments);

	            var _Array$from62 = _slicedToArray(_Array$from6, 1);

	            var _operator = _Array$from62[0];

	            return 'a valid ' + (STANDALONE[_operator.toUpperCase()] || _operator);
	          },
	          bool: function bool() {
	            var _Array$from7 = Array.from(arguments);

	            var _Array$from72 = _slicedToArray(_Array$from7, 2);

	            var _operator = _Array$from72[0];
	            var _args = _Array$from72[1];

	            return '' + (_util.format.apply(undefined, [BOOL[_operator.toUpperCase()]].concat(_toConsumableArray(_args))) || _operator);
	          },
	          array: function array() {
	            var _Array$from8 = Array.from(arguments);

	            var _Array$from82 = _slicedToArray(_Array$from8, 2);

	            var _args = _Array$from82[1];

	            var _msg = undefined;

	            if (Array.isArray(_args)) _args = (0, _utils.flatten)(_args);

	            if (_args.length === 2) _msg = '' + _util.format.apply(undefined, [ARRAY['BINARY']].concat(_toConsumableArray(_args)));else if (_args.length > 2) _msg = '' + (0, _util.format)(ARRAY['N'], _args.join(', '));else _msg = '' + (0, _util.format)(ARRAY['ONE'], typeof _args[0] === 'object' ? JSON.stringify(_args[0]) : _args[0]);

	            return _msg;
	          },
	          pattern: function pattern() {
	            var _Array$from9 = Array.from(arguments);

	            var _Array$from92 = _slicedToArray(_Array$from9, 2);

	            var _operator = _Array$from92[0];
	            var _args = _Array$from92[1];

	            var _regex = undefined;

	            if (_args.length > 1) _regex = new RegExp(_args[0], _args[1]);else _regex = new RegExp(_args[0]);

	            return '' + ((0, _util.format)(PATTERN[_operator.toUpperCase()], _regex) || _operator);
	          },
	          none: function none(operator) {
	            return operator;
	          }
	        };
	      }
	    }]);

	    return Parser;
	  })();

	  module.exports = Parser;
	});
	//# sourceMappingURL=parser.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(6);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(7);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined') {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.utils = mod.exports;
	  }
	})(this, function (exports) {
	  /**
	   * Author: Umayr Shahid <umayrr@hotmail.com>,
	   * Created: 21:00, 06/09/15.
	   */

	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });
	  exports.humanize = humanize;
	  exports.flatten = flatten;
	  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	  /**
	   * Makes date a bit more humane.
	   *
	   * @param value
	   * @returns {*}
	   */

	  function humanize(value) {
	    var _date = typeof value === 'undefined' ? new Date() : new Date(value);

	    if (_date.toDateString() === 'Invalid Date') throw new Error('Invalid date.');

	    return _date.getDate() + 'th ' + MONTHS[_date.getMonth()] + ' ' + _date.getFullYear();
	  }

	  /**
	   * Flattens an array.
	   *
	   * @param list
	   */

	  function flatten(list) {
	    return list.reduce(function (a, b) {
	      return a.concat(Array.isArray(b) ? flatten(b) : b);
	    }, []);
	  }
	});
	//# sourceMappingURL=utils.js.map

/***/ }
/******/ ]);