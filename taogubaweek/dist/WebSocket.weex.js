// { "framework": "Vue" }

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _WebSocket = __webpack_require__(1);

	var _WebSocket2 = _interopRequireDefault(_WebSocket);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_WebSocket2.default.el = '#root';
	exports.default = new Vue(_WebSocket2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(2)
	)

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/master/gitme/weexdemo/taogubaweek/src/components/WebSocket.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "input": {
	    "fontSize": 40,
	    "height": 80,
	    "width": 600
	  },
	  "button": {
	    "fontSize": 36,
	    "width": 150,
	    "color": "#41B883",
	    "textAlign": "center",
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "marginRight": 20,
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "rgba(162,217,192,0.2)"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

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
	//
	//
	//
	//
	//

	var websocket = weex.requireModule('webSocket'); //__weex_require_module__('webSocket');
	module.exports = {
	    data: {
	        connectinfo: '',
	        sendinfo: '',
	        onopeninfo: '',
	        onmessage: '',
	        oncloseinfo: '',
	        onerrorinfo: '',
	        closeinfo: '',
	        txtInput: '',
	        navBarHeight: 88,
	        title: 'Navigator',
	        dir: 'examples',
	        baseURL: ''
	    },
	    methods: {
	        connect: function connect() {
	            websocket.WebSocket('ws://echo.websocket.org', '');
	            var self = this;
	            self.onopeninfo = 'connecting...';
	            websocket.onopen = function (e) {
	                self.onopeninfo = 'websocket open';
	            };
	            websocket.onmessage = function (e) {
	                self.onmessage = e.data;
	            };
	            websocket.onerror = function (e) {
	                self.onerrorinfo = e.data;
	            };
	            websocket.onclose = function (e) {
	                self.onopeninfo = '';
	                self.onerrorinfo = e.code;
	            };
	        },
	        send: function send(e) {
	            var input = this.$el('input');
	            input.blur();
	            websocket.send(this.txtInput);
	            this.sendinfo = this.txtInput;
	        },
	        oninput: function oninput(event) {
	            this.txtInput = event.value;
	        },
	        close: function close(e) {
	            websocket.close();
	        }
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_c('div', [_vm._m(0), _c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "placeholder": "please input message to send",
	      "autofocus": "false",
	      "value": "",
	      "onchange": "onchange",
	      "oninput": "oninput",
	      "id": "input"
	    }
	  }), _vm._m(1), _vm._m(2), _c('text', {
	    staticStyle: {
	      color: "#000000",
	      height: "80"
	    }
	  }, [_vm._v(_vm._s(_vm.sendinfo))]), _vm._m(3), _c('text', {
	    staticStyle: {
	      color: "#000000",
	      height: "80"
	    }
	  }, [_vm._v(_vm._s(_vm.onopeninfo))]), _vm._m(4), _c('text', {
	    staticStyle: {
	      color: "#000000",
	      height: "100"
	    }
	  }, [_vm._v(_vm._s(_vm.onmessage))]), _vm._m(5), _c('text', {
	    staticStyle: {
	      color: "#000000",
	      height: "80"
	    }
	  }, [_vm._v(_vm._s(_vm.oncloseinfo))]), _vm._m(6), _c('text', {
	    staticStyle: {
	      color: "#000000",
	      height: "80"
	    }
	  }, [_vm._v(_vm._s(_vm.onerrorinfo))]), _vm._m(7), _c('text', {
	    staticStyle: {
	      color: "#000000",
	      height: "80"
	    }
	  }, [_vm._v(_vm._s(_vm.closeinfo))])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "#286090"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80",
	      padding: "20",
	      color: "#FFFFFF"
	    }
	  }, [_vm._v("websocket")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      justifyContent: "center"
	    }
	  }, [_c('text', {
	    staticClass: ["button"],
	    attrs: {
	      "onclick": "connect"
	    }
	  }, [_vm._v("connect")]), _c('text', {
	    staticClass: ["button"],
	    attrs: {
	      "onclick": "send"
	    }
	  }, [_vm._v("send")]), _c('text', {
	    staticClass: ["button"],
	    attrs: {
	      "onclick": "close"
	    }
	  }, [_vm._v("close")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "#D3D3D3",
	      marginTop: "20"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80",
	      padding: "20",
	      color: "#000000"
	    }
	  }, [_vm._v("method = send")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "#D3D3D3"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80",
	      padding: "20",
	      color: "#000000"
	    }
	  }, [_vm._v("method = onopen")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "#D3D3D3"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80",
	      padding: "20",
	      color: "#000000"
	    }
	  }, [_vm._v("method = onmessage")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "#D3D3D3"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80",
	      padding: "20",
	      color: "#000000"
	    }
	  }, [_vm._v("method = onclose")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "#D3D3D3"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80",
	      padding: "20",
	      color: "#000000"
	    }
	  }, [_vm._v("method = onerror")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "#D3D3D3"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80",
	      padding: "20",
	      color: "#000000"
	    }
	  }, [_vm._v("method = close")])])
	}]}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);