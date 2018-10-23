/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1fo8tqzulf = function () {
    var path = 'C:\\dev\\flyer-ui\\components\\table\\src\\main.vue',
        hash = '693417f19552fb3586b774f6e1029a4c21301c9b',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\dev\\flyer-ui\\components\\table\\src\\main.vue',
        statementMap: {
            '0': {
                start: {
                    line: 79,
                    column: 12
                },
                end: {
                    line: 81,
                    column: 13
                }
            },
            '1': {
                start: {
                    line: 84,
                    column: 12
                },
                end: {
                    line: 86,
                    column: 13
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 78,
                        column: 8
                    },
                    end: {
                        line: 78,
                        column: 9
                    }
                },
                loc: {
                    start: {
                        line: 78,
                        column: 18
                    },
                    end: {
                        line: 82,
                        column: 9
                    }
                },
                line: 78
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 83,
                        column: 8
                    },
                    end: {
                        line: 83,
                        column: 9
                    }
                },
                loc: {
                    start: {
                        line: 83,
                        column: 18
                    },
                    end: {
                        line: 87,
                        column: 9
                    }
                },
                line: 83
            }
        },
        branchMap: {},
        s: {
            '0': 0,
            '1': 0
        },
        f: {
            '0': 0,
            '1': 0
        },
        b: {},
        _coverageSchema: 'd34fc3e6b8297bcde183f5492bcb8fcb36775295'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}(); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tableEmpty = __webpack_require__(6);

var _tableEmpty2 = _interopRequireDefault(_tableEmpty);

var _tableBody = __webpack_require__(7);

var _tableBody2 = _interopRequireDefault(_tableBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'FlyTable',
    components: {
        TableEmpty: _tableEmpty2.default,
        TableBody: _tableBody2.default
    },
    props: {
        columns: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        },
        width: {
            type: String,
            default: 'auto'
        },
        height: {
            type: String,
            default: 'auto'
        },
        maxHeight: {
            type: String,
            default: 'auto'
        },
        showHeader: {
            type: Boolean,
            default: true
        },
        emptyText: {
            type: String,
            default: 'The data in the table is empty.'
        },
        border: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        getStyle: function getStyle() {
            cov_1fo8tqzulf.f[0]++;
            cov_1fo8tqzulf.s[0]++;

            return {
                width: this.width
            };
        },
        getClass: function getClass() {
            cov_1fo8tqzulf.f[1]++;
            cov_1fo8tqzulf.s[1]++;

            return {
                'fly-table-no_border': !this.border
            };
        }
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1vzwretw60 = function () {
    var path = 'C:\\dev\\flyer-ui\\components\\table\\src\\table-body.vue',
        hash = 'edf7852ab19768c19bec2153c6a109be60da9989',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\dev\\flyer-ui\\components\\table\\src\\table-body.vue',
        statementMap: {
            '0': {
                start: {
                    line: 25,
                    column: 8
                },
                end: {
                    line: 25,
                    column: 16
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 24,
                        column: 4
                    },
                    end: {
                        line: 24,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 24,
                        column: 13
                    },
                    end: {
                        line: 26,
                        column: 5
                    }
                },
                line: 24
            }
        },
        branchMap: {},
        s: {
            '0': 0
        },
        f: {
            '0': 0
        },
        b: {},
        _coverageSchema: 'd34fc3e6b8297bcde183f5492bcb8fcb36775295'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}(); //
//
//
//
//
//
//
//
//
//
//

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tableColumn = __webpack_require__(8);

var _tableColumn2 = _interopRequireDefault(_tableColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'FlyTableBody',
    components: {
        TableColumn: _tableColumn2.default
    },
    props: {
        data: Array,
        columns: Array,
        style: Object
    },
    created: function created() {
        cov_1vzwretw60.f[0]++;
        cov_1vzwretw60.s[0]++;

        debugger;
    }
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1lt2dhqcw3 = function () {
    var path = 'C:\\dev\\flyer-ui\\src\\index.js',
        hash = 'd87a64935d078f52b0b248f9175739e7b13a2065',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\dev\\flyer-ui\\src\\index.js',
        statementMap: {
            '0': {
                start: {
                    line: 2,
                    column: 19
                },
                end: {
                    line: 4,
                    column: 1
                }
            },
            '1': {
                start: {
                    line: 5,
                    column: 16
                },
                end: {
                    line: 9,
                    column: 1
                }
            },
            '2': {
                start: {
                    line: 6,
                    column: 4
                },
                end: {
                    line: 8,
                    column: 6
                }
            },
            '3': {
                start: {
                    line: 7,
                    column: 8
                },
                end: {
                    line: 7,
                    column: 48
                }
            },
            '4': {
                start: {
                    line: 10,
                    column: 0
                },
                end: {
                    line: 14,
                    column: 1
                }
            },
            '5': {
                start: {
                    line: 16,
                    column: 0
                },
                end: {
                    line: 16,
                    column: 39
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 5,
                        column: 16
                    },
                    end: {
                        line: 5,
                        column: 17
                    }
                },
                loc: {
                    start: {
                        line: 5,
                        column: 25
                    },
                    end: {
                        line: 9,
                        column: 1
                    }
                },
                line: 5
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 6,
                        column: 23
                    },
                    end: {
                        line: 6,
                        column: 24
                    }
                },
                loc: {
                    start: {
                        line: 6,
                        column: 36
                    },
                    end: {
                        line: 8,
                        column: 5
                    }
                },
                line: 6
            }
        },
        branchMap: {},
        s: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0
        },
        f: {
            '0': 0,
            '1': 0
        },
        b: {},
        _coverageSchema: 'd34fc3e6b8297bcde183f5492bcb8fcb36775295'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

var _table = __webpack_require__(4);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = (cov_1lt2dhqcw3.s[0]++, [_table2.default]);
cov_1lt2dhqcw3.s[1]++;
var install = function install(Vue) {
    cov_1lt2dhqcw3.f[0]++;
    cov_1lt2dhqcw3.s[2]++;

    components.forEach(function (component) {
        cov_1lt2dhqcw3.f[1]++;
        cov_1lt2dhqcw3.s[3]++;

        Vue.component(component.name, component);
    });
};
cov_1lt2dhqcw3.s[4]++;
module.exports = {
    version: '1.0.0',
    Table: _table2.default,
    install: install
};

cov_1lt2dhqcw3.s[5]++;
module.exports.default = module.exports;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_bszc259c4 = function () {
  var path = 'C:\\dev\\flyer-ui\\components\\table\\index.js',
      hash = '80ad679e47f50fcbb33f26d93c18a20be24203ac',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\dev\\flyer-ui\\components\\table\\index.js',
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: 'd34fc3e6b8297bcde183f5492bcb8fcb36775295'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(5);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _main2.default;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04c05e67_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04c05e67_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04c05e67_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components\\table\\src\\main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04c05e67", Component.options)
  } else {
    hotAPI.reload("data-v-04c05e67", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2qtnaqcfel = function () {
    var path = 'C:\\dev\\flyer-ui\\components\\table\\src\\table-empty.js',
        hash = 'c093455915c8be2d8fa5b1ad2fc546bd26d02554',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\dev\\flyer-ui\\components\\table\\src\\table-empty.js',
        statementMap: {
            '0': {
                start: {
                    line: 8,
                    column: 8
                },
                end: {
                    line: 18,
                    column: 9
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 7,
                        column: 4
                    },
                    end: {
                        line: 7,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 7,
                        column: 12
                    },
                    end: {
                        line: 19,
                        column: 5
                    }
                },
                line: 7
            }
        },
        branchMap: {},
        s: {
            '0': 0
        },
        f: {
            '0': 0
        },
        b: {},
        _coverageSchema: 'd34fc3e6b8297bcde183f5492bcb8fcb36775295'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'FlyTableEmpty',
    props: {
        style: Object,
        emptyText: String
    },
    render: function render() {
        var h = arguments[0];
        cov_2qtnaqcfel.f[0]++;
        cov_2qtnaqcfel.s[0]++;

        return h(
            'table',
            { style: this.style },
            [h('tbody', [h('tr', [h('td', [h('div', [this.emptyText])])])])]
        );
    }
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_557f5c6f_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_body_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_body_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_557f5c6f_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_body_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_557f5c6f_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_body_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components\\table\\src\\table-body.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-557f5c6f", Component.options)
  } else {
    hotAPI.reload("data-v-557f5c6f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1cspwl5thk = function () {
    var path = 'C:\\dev\\flyer-ui\\components\\table\\src\\table-column.js',
        hash = '756c6b6d7d34f36c9e552fe174fd7da06f4607d0',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\dev\\flyer-ui\\components\\table\\src\\table-column.js',
        statementMap: {
            '0': {
                start: {
                    line: 33,
                    column: 8
                },
                end: {
                    line: 39,
                    column: 13
                }
            },
            '1': {
                start: {
                    line: 42,
                    column: 8
                },
                end: {
                    line: 42,
                    column: 55
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 29,
                        column: 4
                    },
                    end: {
                        line: 29,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 29,
                        column: 13
                    },
                    end: {
                        line: 31,
                        column: 5
                    }
                },
                line: 29
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 32,
                        column: 4
                    },
                    end: {
                        line: 32,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 32,
                        column: 12
                    },
                    end: {
                        line: 40,
                        column: 5
                    }
                },
                line: 32
            },
            '2': {
                name: '(anonymous_2)',
                decl: {
                    start: {
                        line: 41,
                        column: 4
                    },
                    end: {
                        line: 41,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 41,
                        column: 22
                    },
                    end: {
                        line: 43,
                        column: 5
                    }
                },
                line: 41
            }
        },
        branchMap: {
            '0': {
                loc: {
                    start: {
                        line: 33,
                        column: 15
                    },
                    end: {
                        line: 39,
                        column: 13
                    }
                },
                type: 'cond-expr',
                locations: [{
                    start: {
                        line: 35,
                        column: 16
                    },
                    end: {
                        line: 35,
                        column: 71
                    }
                }, {
                    start: {
                        line: 38,
                        column: 16
                    },
                    end: {
                        line: 38,
                        column: 48
                    }
                }],
                line: 33
            }
        },
        s: {
            '0': 0,
            '1': 0
        },
        f: {
            '0': 0,
            '1': 0,
            '2': 0
        },
        b: {
            '0': [0, 0]
        },
        _coverageSchema: 'd34fc3e6b8297bcde183f5492bcb8fcb36775295'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'FlyTableName',
    props: {
        type: {
            type: String,
            default: 'default' // radio || checkout || default || expand
        },
        prop: String,
        label: String,
        labelClassName: String,
        className: String,
        colspan: Number,
        rowspan: Number,
        headerAlign: String,
        align: String,
        formatter: Function,
        minWidth: String,
        width: String,
        columnKey: String,
        sortable: Boolean,
        sortBy: String,
        sortOrders: String,
        sortMehtod: Function,
        filters: Array,
        filterMultiple: Boolean,
        filterMehtod: Function,
        row: Object
    },
    created: function created() {
        cov_1cspwl5thk.f[0]++;
    },
    render: function render() {
        var h = arguments[0];
        cov_1cspwl5thk.f[1]++;
        cov_1cspwl5thk.s[0]++;

        return typeof this.formatter === 'function' ? (cov_1cspwl5thk.b[0][0]++, this.formatter.call(this, this.row, this.prop, this.label)) : (cov_1cspwl5thk.b[0][1]++, h('div', [this.row[this.prop]]));
    },
    renderError: function renderError(h, err) {
        cov_1cspwl5thk.f[2]++;
        cov_1cspwl5thk.s[1]++;

        return h('pre', { style: { color: 'red' } }, err.stack);
    }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("table", { style: _vm.style }, [
    _c(
      "tbody",
      _vm._l(_vm.data, function(row, index) {
        return _c(
          "tr",
          { key: index },
          _vm._l(_vm.columns, function(column, index) {
            return _c(
              "td",
              { key: index },
              [
                _c(
                  "table-column",
                  _vm._b({ attrs: { row: row } }, "table-column", column, false)
                )
              ],
              1
            )
          })
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-557f5c6f", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", [
    _c("div", { staticClass: "fly-table" }, [
      _c("div", { staticClass: "fly-table-toolbar" }),
      _vm._v(" "),
      _vm.showHeader
        ? _c(
            "div",
            { staticClass: "fly-table-header", class: _vm.getClass() },
            [
              _c("table", { style: _vm.getStyle() }, [
                _c(
                  "thead",
                  _vm._l(_vm.columns, function(column, index) {
                    return _c("th", { key: index }, [
                      _c("div", [_vm._v(_vm._s(column.label))]),
                      _vm._v(" "),
                      _c("div", { staticClass: "fly-table-header_querying" }, [
                        _c(
                          "div",
                          { staticClass: "fly-table-header_querying_filter" },
                          [_c("i", { staticClass: "fly-icon icon-filter" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "fly-table-header_querying_sortable" },
                          [
                            _c("i", {
                              staticClass: "fly-icon icon-chevron-up"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fly-icon icon-chevron-down"
                            })
                          ]
                        )
                      ])
                    ])
                  })
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.data.length > 0
        ? _c(
            "div",
            { staticClass: "fly-table-body", class: _vm.getClass() },
            [
              _c("table-body", {
                style: _vm.getStyle(),
                attrs: { data: _vm.data, columsn: _vm.columns }
              })
            ],
            1
          )
        : _c(
            "div",
            { staticClass: "fly-table-empty", class: _vm.getClass() },
            [
              _c("table-empty", {
                style: _vm.getStyle(),
                attrs: { "empty-text": _vm.emptyText }
              })
            ],
            1
          ),
      _vm._v(" "),
      _c("div", { staticClass: "fly-table-footer" })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-04c05e67", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })
/******/ ]);