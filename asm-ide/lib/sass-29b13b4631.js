"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"object"==("undefined"==typeof module?"undefined":_typeof(module))?e(require("../../lib/codemirror"),require("../css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../css/css"],e):e(CodeMirror)}(function(t){t.defineMode("sass",function(f){var e=t.mimeModes["text/css"],o=e.propertyKeywords||{},i=e.colorKeywords||{},u=e.valueKeywords||{},a=e.fontProperties||{};var s,c=new RegExp("^"+["true","false","null","auto"].join("|")),p=new RegExp("^"+["\\(","\\)","=",">","<","==",">=","<=","\\+","-","\\!=","/","\\*","%","and","or","not",";","\\{","\\}",":"].join("|")),l=/^::?[a-zA-Z_][\w\-]*/;function m(e){return!e.peek()||e.match(/\s+$/,!1)}function d(e,t){var r=e.peek();return")"===r?(e.next(),t.tokenizer=b,"operator"):"("===r?(e.next(),e.eatSpace(),"operator"):(t.tokenizer="'"===r||'"'===r?y(e.next()):y(")",!1),"string")}function h(r,n){return function(e,t){return e.sol()&&e.indentation()<=r?(t.tokenizer=b)(e,t):(n&&e.skipTo("*/")?(e.next(),e.next(),t.tokenizer=b):e.skipToEnd(),"comment")}}function y(u,a){return null==a&&(a=!0),function e(t,r){var n=t.next(),o=t.peek(),i=t.string.charAt(t.pos-2);return"\\"!==n&&o===u||n===u&&"\\"!==i?(n!==u&&a&&t.next(),m(t)&&(r.cursorHalf=0),r.tokenizer=b,"string"):"#"===n&&"{"===o?(r.tokenizer=k(e),t.next(),"operator"):"string"}}function k(r){return function(e,t){return"}"===e.peek()?(e.next(),t.tokenizer=r,"operator"):b(e,t)}}function w(e){var t;0==e.indentCount&&(e.indentCount++,t=e.scopes[0].offset+f.indentUnit,e.scopes.unshift({offset:t}))}function x(e){1!=e.scopes.length&&e.scopes.shift()}function b(e,t){var r,n=e.peek();if(e.match("/*"))return t.tokenizer=h(e.indentation(),!0),t.tokenizer(e,t);if(e.match("//"))return t.tokenizer=h(e.indentation(),!1),t.tokenizer(e,t);if(e.match("#{"))return t.tokenizer=k(b),"operator";if('"'===n||"'"===n)return e.next(),t.tokenizer=y(n),"string";if(t.cursorHalf){if("#"===n&&(e.next(),e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)))return m(e)&&(t.cursorHalf=0),"number";if(e.match(/^-?[0-9\.]+/))return m(e)&&(t.cursorHalf=0),"number";if(e.match(/^(px|em|in)\b/))return m(e)&&(t.cursorHalf=0),"unit";if(e.match(c))return m(e)&&(t.cursorHalf=0),"keyword";if(e.match(/^url/)&&"("===e.peek())return t.tokenizer=d,m(e)&&(t.cursorHalf=0),"atom";if("$"===n)return e.next(),e.eatWhile(/[\w-]/),m(e)&&(t.cursorHalf=0),"variable-2";if("!"===n)return e.next(),t.cursorHalf=0,e.match(/^[\w]+/)?"keyword":"operator";if(e.match(p))return m(e)&&(t.cursorHalf=0),"operator";if(e.eatWhile(/[\w-]/))return m(e)&&(t.cursorHalf=0),s=e.current().toLowerCase(),u.hasOwnProperty(s)?"atom":i.hasOwnProperty(s)?"keyword":o.hasOwnProperty(s)?(t.prevProp=e.current().toLowerCase(),"property"):"tag";if(m(e))return t.cursorHalf=0,null}else{if("-"===n&&e.match(/^-\w+-/))return"meta";if("."===n){if(e.next(),e.match(/^[\w-]+/))return w(t),"qualifier";if("#"===e.peek())return w(t),"tag"}if("#"===n){if(e.next(),e.match(/^[\w-]+/))return w(t),"builtin";if("#"===e.peek())return w(t),"tag"}if("$"===n)return e.next(),e.eatWhile(/[\w-]/),"variable-2";if(e.match(/^-?[0-9\.]+/))return"number";if(e.match(/^(px|em|in)\b/))return"unit";if(e.match(c))return"keyword";if(e.match(/^url/)&&"("===e.peek())return t.tokenizer=d,"atom";if("="===n&&e.match(/^=[\w-]+/))return w(t),"meta";if("+"===n&&e.match(/^\+[\w-]+/))return"variable-3";if("@"!==n||e.match("@extend")&&!e.match(/\s*[\w]/)&&x(t),e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/))return w(t),"def";if("@"===n)return e.next(),e.eatWhile(/[\w-]/),"def";if(e.eatWhile(/[\w-]/))return e.match(/ *: *[\w-\+\$#!\("']/,!1)?(s=e.current().toLowerCase(),r=t.prevProp+"-"+s,o.hasOwnProperty(r)?"property":o.hasOwnProperty(s)?(t.prevProp=s,"property"):a.hasOwnProperty(s)?"property":"tag"):e.match(/ *:/,!1)?(w(t),t.cursorHalf=1,t.prevProp=e.current().toLowerCase(),"property"):(e.match(/ *,/,!1)||w(t),"tag");if(":"===n)return e.match(l)?"variable-3":(e.next(),t.cursorHalf=1,"operator")}return e.match(p)?"operator":(e.next(),null)}return{startState:function(){return{tokenizer:b,scopes:[{offset:0,type:"sass"}],indentCount:0,cursorHalf:0,definedVars:[],definedMixins:[]}},token:function(e,t){var r=function(e,t){e.sol()&&(t.indentCount=0);var r=t.tokenizer(e,t),n=e.current();if("@return"!==n&&"}"!==n||x(t),null!==r){for(var o=e.pos-n.length+f.indentUnit*t.indentCount,i=[],u=0;u<t.scopes.length;u++){var a=t.scopes[u];a.offset<=o&&i.push(a)}t.scopes=i}return r}(e,t);return t.lastToken={style:r,content:e.current()},r},indent:function(e){return e.scopes[0].offset},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"indent"}},"css"),t.defineMIME("text/x-sass","sass")});