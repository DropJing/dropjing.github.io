"use strict";var regs=["a1","a2","a3","f1","pa","c1"],instructions=[".memory","set","load","save","add","compare","jump_if_less","jump","save_from_register","save_from_register1","set2","load2","add2","save2","subtract2","load_from_register","load_from_register1","load_from_register2","save_from_register2","jump_from_register","shift_right","and","multiply2","jump_if_equal","halt"],initCodeMirrorDefine=function(){CodeMirror.defineMIME("asm","asm"),CodeMirror.defineMode("asm",function(){function e(e,r){return r.beforeParams=!1,";"===(r=e.next())?(e.skipToEnd(),"comment"):"@"===r?(e.eatWhile(/\w/),"label"):/\./.test(r)?(e.eatWhile(/\w/),"keyword"):/\d/.test(r)?(e.eatWhile(/\./),"number"):(e.eatWhile(/[\w$_{}\xa1-\uffff]/),r=e.current(),instructions.includes(r)?"instruction":regs.includes(r)?"register":null)}return{startState:function(){return{tokenize:e,beforeParams:!1,inParams:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)}}})};initCodeMirrorDefine();