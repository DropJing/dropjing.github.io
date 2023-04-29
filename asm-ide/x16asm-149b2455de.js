"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _createForOfIteratorHelper(e,r){var t,s,a,n,o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(o)return s=!(t=!0),{s:function(){o=o.call(e)},n:function(){var e=o.next();return t=e.done,e},e:function(e){s=!0,a=e},f:function(){try{t||null==o.return||o.return()}finally{if(s)throw a}}};if(Array.isArray(e)||(o=_unsupportedIterableToArray(e))||r&&e&&"number"==typeof e.length)return o&&(e=o),n=0,{s:r=function(){},n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){var t;if(e)return"string"==typeof e?_arrayLikeToArray(e,r):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,s=new Array(r);t<r;t++)s[t]=e[t];return s}var registerByName=function(e){return{pa:0,a1:1,a2:2,a3:3,c1:4,f1:5}[e]},callTemplate=function(e){return"set2 a3 14\n    add2 pa a3 a3\n    save_from_register2 a3 f1\n    set2 a3 2\n    add2 f1 a3 f1\n    jump ".concat(e)},returnTemplate=function(e){return"set2 a3 ".concat(e,"\n    subtract2 f1 a3 f1\n    load_from_register2 f1 a2\n    jump_from_register a2")},removeComments=function(e){var r,t=[],s=_createForOfIteratorHelper(e.split("\n"));try{for(s.s();!(r=s.n()).done;){var a,n,o,i,u,p,f=r.value;-1<f.indexOf(";")?(a=f.indexOf(";"),n=f.substr(0,a),t.push(n)):-1<f.indexOf(".call")?(o=(i=f.trim().split())[1],p=callTemplate(o),t.push(p)):-1<f.indexOf(".return")?(i=f.trim().split(),u=2,1<i.length&&(u+=parseInt(i[1])),p=returnTemplate(u),t.push(p)):t.push(f)}}catch(e){s.e(e)}finally{s.f()}return t.join("\n")},memoryAddress=function(e){var r=e.substr(1);return r=="".concat(parseInt(r))?[255&(r=parseInt(r)),r>>8]:[e]},machineCode=function(e){for(var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],t=[],s=[],a=(e=removeComments(e)).split("\n"),n={},o=0,i=0;i<a.length;i++){var u,p,f=_createForOfIteratorHelper(r);try{for(f.s();!(u=f.n()).done;)u.value===i&&(p={line:i,pa:o},s.push(p))}catch(e){f.e(e)}finally{f.f()}var l=a[i];if(""!=l.trim()){var l=l.trim().split(" "),m=l[0];if("set"==m){o+=3;var y=l[1],c=(y=registerByName(y),parseInt(l[2]));t.push(0),t.push(y),t.push(c)}else if("load"==m){o+=4;c=memoryAddress(l[1]),y=registerByName(l[2]);t.push(1),(t=t.concat(c)).push(y)}else if("add"==m){o+=4;var h=registerByName(l[1]),d=registerByName(l[2]),g=registerByName(l[3]);t.push(2),t.push(h),t.push(d),t.push(g)}else if("save"==m){o+=4;y=registerByName(l[1]),c=memoryAddress(l[2]);t.push(3),t.push(y),t=t.concat(c)}else if("compare"==m){o+=3;h=registerByName(l[1]),d=registerByName(l[2]);t.push(4),t.push(h),t.push(d)}else if("jump_if_less"==m){o+=3;c=memoryAddress(l[1]);t.push(5),t=t.concat(c)}else if("jump"==m){o+=3;c=memoryAddress(l[1]);t.push(6),t=t.concat(c)}else if("save_from_register"==m){o+=3;h=registerByName(l[1]),d=registerByName(l[2]);t.push(7),t.push(h),t.push(d)}else if("halt"==m)o+=1,t.push(255);else if("set2"==m){o+=4;var y=l[1],c=l[2],v=(c=parseInt(c))>>8;c=[255&c,v],y=registerByName(y),t.push(8),t.push(y),t=t.concat(c)}else if("load2"==m){o+=4;var _=l[1],y=l[2];y=registerByName(y),_=memoryAddress(_),t.push(9),(t=t.concat(_)).push(y)}else if("add2"==m){o+=4;h=l[1],d=l[2],g=l[3];h=registerByName(h),d=registerByName(d),g=registerByName(g),t.push(10),t.push(h),t.push(d),t.push(g)}else if("save2"==m){o+=4;y=l[1],_=l[2];y=registerByName(y),_=memoryAddress(_),t.push(11),t.push(y),t=t.concat(_)}else if("subtract2"==m){o+=4;h=l[1],d=l[2],g=l[3];h=registerByName(h),d=registerByName(d),g=registerByName(g),t.push(12),t.push(h),t.push(d),t.push(g)}else if("load_from_register"==m){o+=3;h=l[1],d=l[2];h=registerByName(h),d=registerByName(d),t.push(13),t.push(h),t.push(d)}else if("load_from_register2"==m){o+=3;h=l[1],d=l[2];h=registerByName(h),d=registerByName(d),t.push(14),t.push(h),t.push(d)}else if("save_from_register2"==m){o+=3;h=l[1],d=l[2];h=registerByName(h),d=registerByName(d),t.push(15),t.push(h),t.push(d)}else if("jump_from_register"==m){o+=2;h=l[1];h=registerByName(h),t.push(16),t.push(h)}else if("@"==m[0])n[m]=o;else{if(".memory"!=m){log(m),log("没有处理的指令 ".concat(m));break}for(var B=parseInt(l[1]);t.length<B;)t.push(0),o+=1}}}var N,b=[],A=_createForOfIteratorHelper(t);try{for(A.s();!(N=A.n()).done;){var I,O,S,T=N.value;_typeof(T)==_typeof("")?(_=[S=255&(I=n[T]),O=I>>8],b.push(S),b.push(O)):b.push(T)}}catch(e){A.e(e)}finally{A.f()}return[b,s]};