"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _createForOfIteratorHelper(e,r){var t,n,a,o,s="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(s)return n=!(t=!0),{s:function(){s=s.call(e)},n:function(){var e=s.next();return t=e.done,e},e:function(e){n=!0,a=e},f:function(){try{t||null==s.return||s.return()}finally{if(n)throw a}}};if(Array.isArray(e)||(s=_unsupportedIterableToArray(e))||r&&e&&"number"==typeof e.length)return s&&(e=s),o=0,{s:r=function(){},n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){var t;if(e)return"string"==typeof e?_arrayLikeToArray(e,r):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&_setPrototypeOf(e,r)}function _createSuper(t){var n=_isNativeReflectConstruct();return function(){var e,r=_getPrototypeOf(t);return _possibleConstructorReturn(this,n?(e=_getPrototypeOf(this).constructor,Reflect.construct(r,arguments,e)):r.apply(this,arguments))}}function _possibleConstructorReturn(e,r){if(r&&("object"===_typeof(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _construct(e,r,t){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(e,r,t){var n=[null];n.push.apply(n,r);r=new(Function.bind.apply(e,n));return t&&_setPrototypeOf(r,t.prototype),r}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _setPrototypeOf(e,r){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e})(e,r)}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var _log=console.log.bind(console),ensure=function(e,r){if(!e)throw _log("*** 测试失败:",r),"————————"},GuaObject=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"new",value:function(){for(var e=arguments.length,r=new _Array(e),t=0;t<e;t++)r[t]=arguments[t];return _construct(this,r)}}]),e}(),TokenType={number:"数字",string:"字符串",colon:"冒号 :::::",comma:"逗号 ,,,,",auto:"自动类型","left中括号":"[[[[[[","right中括号":"]]]]]","left花括号":"{{{{{","right花括号":"}}}}","left圆括号":"(((((((","right圆括号":")))))",assign:"等号===",variable:"变量",keyword:"关键字",plus:"加号 +++",minus:"减号 ---",less:"小于 <<<",great:"大于 >>>",dot:"点 .....",plusEqual:"+="},Token=function(){_inherits(o,GuaObject);var a=_createSuper(o);function o(e,r){_classCallCheck(this,o),(t=a.call(this)).value=e,t.type=r;var t,n={"[":TokenType.left中括号,"]":TokenType.right中括号,"(":TokenType.left圆括号,")":TokenType.right圆括号,"{":TokenType.left花括号,"}":TokenType.right花括号,":":TokenType.colon,",":TokenType.comma,"=":TokenType.assign,"+":TokenType.plus,"<":TokenType.less,">":TokenType.great,"-":TokenType.minus,".":TokenType.dot,"+=":TokenType.plusEqual};r==TokenType.auto&&(n[e]?t.type=n[e]:ensure(!1,"Err  未能处理的auto类型 【".concat(e,"】")));return r==TokenType.variable&&-1<["let","var","con","if","else","while","function","return"].indexOf(e)&&(t.type=TokenType.keyword),t}return _createClass(o)}(),Buffer=function(){_inherits(n,GuaObject);var t=_createSuper(n);function n(e){var r;return _classCallCheck(this,n),(r=t.call(this)).code=e,r.index=0,r}return _createClass(n,[{key:"hasChar",value:function(){return this.index<this.code.length}},{key:"peek",value:function(){return this.code[this.index]}},{key:"read",value:function(){var e=this.code[this.index];return this.index+=1,e}}]),n}(),isNumber=function(e){return-1<"0123456789".indexOf(e)},isAlph=function(e){return-1<"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e)},isChinese=function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isAuto=function(e){return-1<":,[]{}=+<()>-.".indexOf(e)},isSpace=function(e){return-1<" \n\t".indexOf(e)},readNumber=function(e){for(var r=e.index;e.hasChar();){var t=e.peek();if(!isNumber(t))return t=e.code.slice(r,e.index),parseInt(t);e.read()}},readVariable=function(e){for(var r=e.index;e.hasChar();){var t=e.peek();if(!(isAlph(t)||isChinese(t)||isNumber(t)))return e.code.slice(r,e.index);e.read()}},readString=function(e){e.read();for(var r,t=e.index;e.hasChar();)if('"'==e.read())return r=e.index-1,e.code.slice(t,r)},tokens=function(e){for(var r=Buffer.new(e+=" "),t=[];r.hasChar();){var n,a,o,s,i=r.peek();isNumber(i)?(n=readNumber(r),n=Token.new(n,TokenType.number),t.push(n)):isAlph(i)||isChinese(i)?(n=readVariable(r),a=Token.new(n,TokenType.variable),t.push(a)):'"'==i?(a=readString(r),o=Token.new(a,TokenType.string),t.push(o)):isAuto(i)?(o=r.read(),s=Token.new(o,TokenType.auto),t.push(s)):isSpace(i)?r.read():(r.read(),ensure(!1,"Err Tokenizer  未能处理的char 【".concat(i,"】")))}return t},AstType={Array:"数组",Map:"字典",Number:"数字",String:"字符串",Variable:"变量",VariableDeclaration:"变量定义",Expression:"表达式",BinaryOperator:"算术计算",Block:"块状结构  {} 内的东西",If:"If结构",While:"While结构",Assign:"赋值",Function:"函数",FunctionCall:"函数调用",Class:"类",DotCall:"点调用",Return:"return 语句"},Ast=function(){_inherits(r,GuaObject);var e=_createSuper(r);function r(){return _classCallCheck(this,r),e.apply(this,arguments)}return _createClass(r)}(),Block=function(){_inherits(n,Ast);var t=_createSuper(n);function n(){var e,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return _classCallCheck(this,n),(e=t.call(this)).type=AstType.Block,e.body=r,e}return _createClass(n,[{key:"push",value:function(e){this.body.push(e)}}]),n}(),_Array=function(){_inherits(t,Ast);var r=_createSuper(t);function t(){var e;return _classCallCheck(this,t),(e=r.call(this)).type=AstType.Array,e.elements=[],e}return _createClass(t,[{key:"push",value:function(e){this.elements.push(e)}}]),t}(),Map=function(){_inherits(t,Ast);var r=_createSuper(t);function t(){var e;return _classCallCheck(this,t),(e=r.call(this)).type=AstType.Map,e.properties={},e}return _createClass(t,[{key:"push",value:function(e,r){this.properties[e]=r}}]),t}(),Number=function(){_inherits(n,Ast);var t=_createSuper(n);function n(e){var r;return _classCallCheck(this,n),(r=t.call(this)).type=AstType.Number,r.value=e,r}return _createClass(n)}(),String=function(){_inherits(n,Ast);var t=_createSuper(n);function n(e){var r;return _classCallCheck(this,n),(r=t.call(this)).type=AstType.String,r.value=e,r}return _createClass(n)}(),Variable=function(){_inherits(n,Ast);var t=_createSuper(n);function n(e){var r;return _classCallCheck(this,n),(r=t.call(this)).type=AstType.Variable,r.value=e,r}return _createClass(n)}(),Expression=function(){_inherits(n,Ast);var t=_createSuper(n);function n(e){var r;return _classCallCheck(this,n),(r=t.call(this)).type=AstType.Expression,r.value=e,r}return _createClass(n)}(),BinaryOperator=function(){_inherits(o,Ast);var a=_createSuper(o);function o(e,r,t){var n;return _classCallCheck(this,o),(n=a.call(this)).type=AstType.BinaryOperator,n.left=e,n.op=r,n.right=t,n}return _createClass(o)}(),Assign=function(){_inherits(a,Ast);var n=_createSuper(a);function a(e,r){var t;return _classCallCheck(this,a),(t=n.call(this)).type=AstType.Assign,t.left=e,t.right=r,t}return _createClass(a)}(),VariableDeclaration=function(){_inherits(a,Ast);var n=_createSuper(a);function a(e,r){var t;return _classCallCheck(this,a),(t=n.call(this)).type=AstType.VariableDeclaration,t.name=e,t.value=r,t}return _createClass(a)}(),If=function(){_inherits(o,Ast);var a=_createSuper(o);function o(e,r){var t,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return _classCallCheck(this,o),(t=a.call(this)).type=AstType.If,t.test=e,t.block=r,t.alternate=n,t}return _createClass(o)}(),While=function(){_inherits(a,Ast);var n=_createSuper(a);function a(e,r){var t;return _classCallCheck(this,a),(t=n.call(this)).type=AstType.While,t.test=e,t.block=r,t}return _createClass(a)}(),_Function=function(){_inherits(a,Ast);var n=_createSuper(a);function a(e,r){var t;return _classCallCheck(this,a),(t=n.call(this)).type=AstType.Function,t.params=e,t.block=r,t}return _createClass(a)}(),FunctionCall=function(){_inherits(a,Ast);var n=_createSuper(a);function a(e,r){var t;return _classCallCheck(this,a),(t=n.call(this)).type=AstType.FunctionCall,t.params=r,t.name=e,t}return _createClass(a)}(),DotCall=function(){_inherits(a,Ast);var n=_createSuper(a);function a(e,r){var t;return _classCallCheck(this,a),(t=n.call(this)).type=AstType.DotCall,t.left=e,t.right=r,t}return _createClass(a)}(),Return=function(){_inherits(n,Ast);var t=_createSuper(n);function n(e){var r;return _classCallCheck(this,n),(r=t.call(this)).type=AstType.Return,r.value=e,r}return _createClass(n)}(),Class=function(){_inherits(a,Ast);var n=_createSuper(a);function a(e,r){var t;return _classCallCheck(this,a),(t=n.call(this)).type=AstType.Class,t.super_=e,t.block=r,t}return _createClass(a)}(),TokenList=function(){_inherits(n,GuaObject);var t=_createSuper(n);function n(e){var r;return _classCallCheck(this,n),(r=t.call(this)).ts=e,r.index=0,r}return _createClass(n,[{key:"hasToken",value:function(){return this.index<this.ts.length}},{key:"peek",value:function(){return this.ts[this.index]}},{key:"peekpeek",value:function(){return this.ts[this.index+1]}},{key:"read",value:function(e){var r=this.ts[this.index];return ensure(r.type==e,"Err read 类型错误  期望【".concat(e,"】实际【").concat(r.type,"】")),this.index+=1,r}},{key:"log",value:function(){for(var e=0;e<this.ts.length;e+=1){var r=this.ts[e];_log(r)}}}]),n}(),parseArray=function(e){e.read(TokenType.left中括号);for(var r=_Array.new();e.hasToken();){e.peek();var t=parseValue(e),t=(r.push(t),e.peek());if(t.type==TokenType.comma){e.peek();if(t.type==TokenType.right中括号){e.read(TokenType.right中括号);break}e.read(TokenType.comma)}else{if(t.type==TokenType.right中括号){e.read(TokenType.right中括号);break}ensure(!1,"数组元素后边必须跟 逗号 或者 ]")}}return r},parseVariable=function(e){var r=e.read(TokenType.variable),r=Variable.new(r.value);return e.hasToken()&&e.peek().type==TokenType.dot?(e.read(TokenType.dot),e=e.read(TokenType.variable),e=Variable.new(e.value),DotCall.new(r,e)):r},parseValue=function(e){var r,t,n,a=e.peek();return a.type==TokenType.left花括号?parseMap(e):a.type==TokenType.left中括号?parseArray(e):a.type==TokenType.number?(r=e.read(TokenType.number),Number.new(r.value)):a.type==TokenType.string?(r=e.read(TokenType.string),String.new(r.value)):a.type==TokenType.variable?(r=parseVariable(e),e.hasToken()&&e.peek().type==TokenType.left圆括号?(e.read(TokenType.left圆括号),t=r,n=parseParams(e),e.read(TokenType.right圆括号),FunctionCall.new(t,n)):r):void ensure(!1,"Err parseValue value不支持的类型【".concat(a.type,", ").concat(a.value,"】"))},parseMap=function(e){e.read(TokenType.left花括号);for(var r=Map.new();e.hasToken();){e.peek().type==TokenType.string?(n=e.read(TokenType.string),e.read(TokenType.colon),t=parseValue(e),r.push(n.value,t)):ensure(!1,"字典的key应为字符串类型");var t,n=e.peek();if(n.type==TokenType.comma){e.read(TokenType.comma);e.peek();if(n.type==TokenType.right花括号){e.read(TokenType.right花括号);break}}else{if(n.type==TokenType.right花括号){e.read(TokenType.right花括号);break}ensure(!1,"Err parseMap 字典的元素后只能为 ,  或者right花括号 }")}}return r},parseClass=function(e){e.read(TokenType.variable),e.read(TokenType.left圆括号);var r=parseParams(e),t=(ensure(1==r.length||0==r.length,"Class 最多只能继承一个父类"),r=0<r.length?r[0]:null,e.read(TokenType.right圆括号),e.read(TokenType.left花括号),parse(e));return e.read(TokenType.right花括号),Class.new(r,t)},parseFunction=function(e){e.read(TokenType.keyword),e.read(TokenType.left圆括号);var r=parseParams(e),t=(e.read(TokenType.right圆括号),e.read(TokenType.left花括号),parse(e));return e.read(TokenType.right花括号),_Function.new(r,t)},parseParams=function(e){for(var r=[];e.hasToken();){if(e.peek().type==TokenType.right圆括号)return r;var t=parseExpression(e);e.peek().type==TokenType.comma&&e.read(TokenType.comma),r.push(t)}ensure(!1,"参数没有结束符号")},parseVariableDeclaration=function(e){e.read(TokenType.keyword);var r=parseVariable(e),t=(e.read(TokenType.assign),e.peek()),n=null,n=(t.type==TokenType.keyword&&"function"==t.value?parseFunction:t.type==TokenType.variable&&"class"==t.value?parseClass:parseExpression)(e);return VariableDeclaration.new(r,n)},parseExpression=function(e){var r=parseValue(e);if(e.hasToken())for(;e.hasToken()&&e.peek().type==TokenType.plus|e.peek().type==TokenType.minus|e.peek().type==TokenType.less|e.peek().type==TokenType.great;)var t=r,n=e.read(e.peek().type),a=parseValue(e),r=BinaryOperator.new(t,n,a);return Expression.new(r)},parseIf=function(e){e.read(TokenType.keyword),e.read(TokenType.left圆括号);var r,t=parseExpression(e),n=(e.read(TokenType.right圆括号),e.read(TokenType.left花括号),parse(e)),a=(e.read(TokenType.right花括号),null);return e.hasToken()&&(r=e.peek()).type==TokenType.keyword&&"else"==r.value&&(e.read(TokenType.keyword),e.read(TokenType.left花括号),a=parse(e),e.read(TokenType.right花括号)),If.new(t,n,a)},parseWhile=function(e){e.read(TokenType.keyword),e.read(TokenType.left圆括号);var r=parseExpression(e),t=(e.read(TokenType.right圆括号),e.read(TokenType.left花括号),parse(e));return e.read(TokenType.right花括号),While.new(r,t)},parseReturn=function(e){e.read(TokenType.keyword);e=parseExpression(e);return Return.new(e)},parse=function(e){for(var r=Block.new([]);e.hasToken();){var t=e.peek();if(t.type==TokenType.left花括号)r.push(parseMap(e));else if(t.type==TokenType.left中括号)r.push(parseArray(e));else if(t.type==TokenType.number)r.push(parseExpression(e));else if(t.type==TokenType.variable){e.index;var n,a=parseVariable(e);e.hasToken&&e.peek().type==TokenType.assign?(e.read(TokenType.assign),n=parseExpression(e),r.push(Assign.new(a,n))):e.hasToken()&&e.peek().type==TokenType.left圆括号?(e.read(TokenType.left圆括号),n=a,o=parseParams(e),e.read(TokenType.right圆括号),r.push(FunctionCall.new(n,o))):r.push(a)}else if(t.type!=TokenType.keyword||"var"!=t.value&&"con"!=t.value)if(t.type==TokenType.keyword&&"if"==t.value){var o=parseIf(e);r.push(o)}else if(t.type==TokenType.keyword&&"while"==t.value){a=parseWhile(e);r.push(a)}else if(t.type==TokenType.keyword&&"return"==t.value){var s=parseReturn(e);r.push(s)}else{if(t.type==TokenType.right花括号)return r;ensure(!1,"Err parse 没有处理的类型【".concat(t.type,", ").concat(t.value,"】"))}else{s=parseVariableDeclaration(e);r.push(s)}}return r},codegen=function e(r){var t,n,a=r.type;if(a==AstType.Number)return["常量",r.value];if(a==AstType.String)return["常量",r.value];if(a==AstType.Variable)return["变量",r.value];if(a==AstType.VariableDeclaration)return["创建变量",r.name.value,e(r.value)];if(a==AstType.Expression)return e(r.value);if(a==AstType.BinaryOperator)return t="",r.op.type==TokenType.plus?t="加法":r.op.type==TokenType.great?t="大于":r.op.type==TokenType.less?t="小于":ensure(!1,"codegen BinaryOperator 没有处理的op【".concat(r.op.type,"】")),[t,e(r.left),e(r.right)];if(a==AstType.Block){var o,s=[],i=_createForOfIteratorHelper(r.body);try{for(i.s();!(o=i.n()).done;){var u=e(o.value);s.push(u)}}catch(e){i.e(e)}finally{i.f()}return s}if(a==AstType.If)return t=e(r.test),n=e(r.block),r.alternate?["if语句",t,n,e(r.alternate)]:["if语句",t,n];if(a==AstType.While)return["while语句",e(r.test),e(r.block)];if(a==AstType.Assign)return["赋值",e(r.left),e(r.right)];if(a!=AstType.Function)return a==AstType.Return?["return语句",e(r.value)]:(ensure(!1,"codegen 没有处理的类型【{}】".format(a)),[]);var p,l=[],c=_createForOfIteratorHelper(r.params);try{for(c.s();!(p=c.n()).done;){var y=e(p.value);l.push(y)}}catch(e){c.e(e)}finally{c.f()}return["函数",l,e(r.block)]},gl解析器=function(e){e=tokens(e),e=TokenList.new(e),e=parse(e);return codegen(e)};