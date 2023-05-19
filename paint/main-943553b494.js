"use strict";function _createForOfIteratorHelper(t,n){var r,o,e,i,a,c,l="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(l)return e=!(o=!0),{s:function(){l=l.call(t)},n:function(){var t=l.next();return o=t.done,t},e:(c=function(t){e=!0,i=t},u.toString=function(){return c.toString()},u),f:function(){try{o||null==l.return||l.return()}finally{if(e)throw i}}};if(Array.isArray(t)||(l=_unsupportedIterableToArray(t))||n&&t&&"number"==typeof t.length)return l&&(t=l),a=0,{s:n=function(){},n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:(r=function(t){throw t},f.toString=function(){return r.toString()},f),f:n};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");function u(t){return c.apply(this,arguments)}function f(t){return r.apply(this,arguments)}}function _unsupportedIterableToArray(t,n){var r;if(t)return"string"==typeof t?_arrayLikeToArray(t,n):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,n):void 0}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=t[r];return o}var initTools=function(){var t,n="",r=_createForOfIteratorHelper(ToolList);try{for(r.s();!(t=r.n()).done;){var o=t.value;n+='<div class="tool '.concat(o.type,'" data-type=').concat(o.type,">\n                <span style='background-position: ").concat(o.positionX,"px ").concat(o.positionY,"px;'>\n                </span>\n            </div>")}}catch(t){r.e(t)}finally{r.f()}appendHtml(e(".tools"),n)},initColors=function(){var t,n="",r=_createForOfIteratorHelper(ColorList);try{for(r.s();!(t=r.n()).done;){var o=t.value;n+='<div class="color-selection" data-color=\''.concat(o,"' style=\"background-color: ").concat(o,'">\n                 </div>')}}catch(t){r.e(t)}finally{r.f()}appendHtml(e(".color-button"),n)},drawLine=function(t,n,r){t.lineWidth=3<arguments.length&&void 0!==arguments[3]?arguments[3]:1,t.beginPath(),t.moveTo(n[0],n[1]),t.lineTo(r[0],r[1]),t.stroke()},initSelect=function(){initTools(),initColors()},__main=function(){initSelect();var t=new Paint;t.current=new Pencil,t.bindEvent()};__main();