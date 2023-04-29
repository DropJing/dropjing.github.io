"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _createForOfIteratorHelper(t,e){var r,n,o,i,s="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(s)return n=!(r=!0),{s:function(){s=s.call(t)},n:function(){var t=s.next();return r=t.done,t},e:function(t){n=!0,o=t},f:function(){try{r||null==s.return||s.return()}finally{if(n)throw o}}};if(Array.isArray(t)||(s=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length)return s&&(t=s),i=0,{s:e=function(){},n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var r;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var CutPolygon=function(){_inherits(r,Paint);var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),(t=e.call(this)).from=[],t.isDown=!1,t.statusEnum={init:"init",range:"range",move:"move"},t.status=t.statusEnum.init,t.selectArea="",t.path=[],t.mapper=[],t.mouseOffsetX=0,t.mouseOffsetY=0,t}return _createClass(r,[{key:"mousedown",value:function(t,e){var r=[t,e];this.status===this.statusEnum.init?(this.from=[t,e],this.path.push(this.from),this.status=this.statusEnum.range):this.status===this.statusEnum.range&&(this.isInRect(r,this.begin,this.rectW,this.rectH)?(this.status=this.statusEnum.move,this.mouseOffsetX=r[0]-this.begin[0],this.mouseOffsetY=r[1]-this.begin[1]):(this.clear(this.contextDraw),this.drawMainCanvas(this.context,this.begin),this.init())),this.isDown=!0}},{key:"init",value:function(){this.from=[],this.isDown=!1,this.status=this.statusEnum.init,this.selectArea="",this.path=[],this.mapper=[],this.mouseOffsetX=0,this.mouseOffsetY=0}},{key:"drawMainCanvas",value:function(t,e){for(var r=this.rectW,n=this.rectH,o=this.selectArea.data,i=0;i<r;i++)for(var s,a,u,c,h=0;h<n;h++)this.mapper[i][h]&&(a=o[0+(s=4*(h*r+i))],u=o[1+s],c=o[2+s],s=o[3+s],a="rgba(".concat(a,", ").concat(u,", ").concat(c,", ").concat(s,")"),u=e[0]+i,c=e[1]+h,this.drawPixel(t,u,c,a))}},{key:"changePixelAngle",value:function(t){this.drawPolygon(t,0,0);for(var e=this.rectW,r=this.rectH,n=this.begin,o=0;o<e;o++){this.mapper[o]=[];for(var i=0;i<r;i++){var s=n[0]+o,a=n[1]+i;this.contextDraw.isPointInPath(s,a,"evenodd")?this.mapper[o][i]=!0:(this.selectArea.data[3+4*(i*e+o)]=0,this.mapper[o][i]=!1)}}t.closePath()}},{key:"mouseup",value:function(t,e){this.isDown=!1;var r,t=[t,e];this.status===this.statusEnum.range?(e=this.getRect(this.path),0===this.rectW||0===this.rectH?this.init():(this.selectArea=(r=this.context).getImageData.apply(r,_toConsumableArray(e)),this.fillPolygon(this.context),this.clear(this.contextDraw),this.drawRect.apply(this,[this.contextDraw].concat(_toConsumableArray(e))),this.changePixelAngle(this.contextDraw),this.contextDraw.putImageData(this.selectArea,this.begin[0],this.begin[1]))):this.status===this.statusEnum.move&&(this.clear(this.contextDraw),r=t[0]-this.mouseOffsetX,e=t[1]-this.mouseOffsetY,this.drawMainCanvas(this.context,[r,e]),this.init())}},{key:"drawPolygon",value:function(t,e,r){t.save(),t.beginPath();var n=this.path,o=n[0];t.moveTo(o[0]+e,o[1]+r);for(var i=1;i<n.length;i++){var s=n[i];t.lineTo(s[0]+e,s[1]+r)}t.strokeStyle=this.color,t.stroke(),t.restore()}},{key:"fillPolygon",value:function(t){t.save();var e=this.path,r=e[0];t.beginPath(),t.moveTo(r[0],r[1]);for(var n=1;n<e.length;n++){var o=e[n];t.lineTo(o[0],o[1])}t.fillStyle=this.backColor,t.fill("evenodd"),t.restore(),t.closePath()}},{key:"getRect",value:function(t){var e,r=t[0][0],n=t[0][1],o=t[0][0],i=t[0][1],s=_createForOfIteratorHelper(this.path);try{for(s.s();!(e=s.n()).done;){var a=e.value,u=a[0],c=a[1];u<r&&(r=u),c<n&&(n=c),o<u&&(o=u),i<c&&(i=c)}}catch(t){s.e(t)}finally{s.f()}return this.begin=[r,n],this.rectW=Math.abs(o-r),this.rectH=Math.abs(i-n),[r,n,this.rectW,this.rectH]}},{key:"drawRect",value:function(t,e,r,n,o){t.save(),t.beginPath(),t.setLineDash([5,5]),t.rect(e,r,n,o),t.strokeStyle=this.color,t.stroke(),t.restore(),t.closePath()}},{key:"mousemove",value:function(t,e){var t=[t,e];this.status===this.statusEnum.range?this.isDown&&(this.path.push(t),this.drawPolygon(this.contextDraw,0,0),this.contextDraw.closePath()):this.status===this.statusEnum.move&&(e=t[0]-this.mouseOffsetX,t=t[1]-this.mouseOffsetY,this.clear(this.contextDraw),this.contextDraw.putImageData(this.selectArea,e,t),this.drawRect(this.contextDraw,e,t,this.rectW,this.rectH),e=e-this.begin[0],t=t-this.begin[1],this.drawPolygon(this.contextDraw,e,t),this.contextDraw.closePath())}},{key:"drawPixel",value:function(t,e,r,n){t.save(),t.beginPath(),t.rect(e,r,1,1),t.strokeStyle=n,t.stroke(),t.restore(),t.closePath()}}]),r}();