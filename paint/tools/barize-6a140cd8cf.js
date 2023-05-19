"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(n){var r=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(n);return _possibleConstructorReturn(this,r?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Barize=function(){_inherits(n,Paint);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.call(this)).isDown=!1,t.type="curve",t.points=[],t.points=[],t.standard=100,t}return _createClass(n,[{key:"mousedown",value:function(t,e){}},{key:"mouseup",value:function(t,e){t=[t,e],e=this.points[this.points.length-1];distance(e,t)>this.standard?(this.drawBezier(this.context,this.points),this.points=[t]):(this.points.push(t),this.contextDraw.clearRect(0,0,this.canvasDraw.width,this.canvasDraw.height),this.drawBezier(this.contextDraw,this.points,!0))}},{key:"mousemove",value:function(t,e){}},{key:"genBezierPoints",value:function(t){if(1===t.length)return t;for(var e=[],n=0;n<=100;n++){var r=this.genInterpolation(t,n/100);e.push(r)}return e}},{key:"genInterpolation",value:function(t,n){var r=[];return t.reduce(function(t,e){return r.push(calcMiddlePoint(t,e,n)),e}),1!==r.length?this.genInterpolation(r,n):r[0]}},{key:"drawBezier",value:function(t,e){2<arguments.length&&void 0!==arguments[2]&&arguments[2]&&this.connectLines(t,e,"blue",2);e=this.genBezierPoints(this.points);this.connectLines(t,e,this.color,this.lineWidth)}}]),n}();