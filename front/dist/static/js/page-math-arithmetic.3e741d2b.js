(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-math-arithmetic"],{"156b":function(t,s,e){"use strict";e("575b")},"33a4":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page"},[e("div",{staticClass:"card"},[e("h1",[e("div",[t._v("Ответов "+t._s(t.totalAnswers))]),e("div",[t._v("Правильных "+t._s(t.successAnswers))]),e("div",[t._v("Уровень "+t._s(t.level))]),e("div",[t._v("Эффективность "+t._s(t.efficiency)+"%")])]),e("label",{staticClass:"task"},[t._v(" "+t._s(t.x)+" "+t._s(t.sign)+" "+t._s(t.y)+" = "),this.typing?e("span",[t._v(t._s(t.typedResult))]):e("label",{staticClass:"ok",class:this.ok.toString()},[t._v(t._s(t.result))])]),e("div",{staticClass:"numberKeys"},[t._l([7,8,9,4,5,6,1,2,3,0],(function(s){return e("div",{key:s,on:{click:function(e){return t.type(s)}}},[t._v(" "+t._s(s)+" ")])})),e("div",{staticClass:"invisible"}),e("div",{on:{click:t.backspace}},[t._v("←")])],2),e("button",{on:{click:t.next}},[t._v("Дальше")])])])},i=[],r=(e("fb6a"),{data:function(){return{typing:null,ok:null,x:null,y:null,sign:null,typedResult:null,totalAnswers:null,successAnswers:null}},created:function(){this.getStoredInt("totalAnswers",0),this.getStoredInt("successAnswers",0),this.startTask()},computed:{level:function(){return parseInt(.2*(.5*this.totalAnswers+this.successAnswers))},efficiency:function(){return parseInt(this.successAnswers/this.totalAnswers*100)||0},result:function(){return this.x+("+"===this.sign?1:-1)*this.y}},methods:{type:function(t){this.typedResult+=t},backspace:function(){this.typedResult=this.typedResult.slice(0,-1)},next:function(){this.typing?this.checkTask():this.startTask()},checkTask:function(){this.typing=!1,this.ok=this.result===parseInt(this.typedResult),this.setStoredInt("totalAnswers",++this.totalAnswers),this.ok&&this.setStoredInt("successAnswers",++this.successAnswers)},startTask:function(){this.typing=!0,this.typedResult="",this.sign=this.getRandomSign(),this.x=this.getRandomNumber(),this.y=this.getRandomNumber(this.x,this.sign)},getRandomNumber:function(t,s){return parseInt(Math.random()*("-"===s?t:5+this.level))},getRandomSign:function(){return Math.random()<.5?"+":"-"},getStoredInt:function(t,s){this[t]=parseInt(localStorage.getItem(localStorage.username+".math."+t))||s},setStoredInt:function(t,s){localStorage.setItem(localStorage.username+".math."+t,s)}}}),c=r,a=(e("156b"),e("2877")),o=Object(a["a"])(c,n,i,!1,null,"f3c7c156",null);s["default"]=o.exports},"575b":function(t,s,e){},fb6a:function(t,s,e){"use strict";var n=e("23e7"),i=e("861d"),r=e("e8b5"),c=e("23cb"),a=e("50c4"),o=e("fc6a"),l=e("8418"),u=e("b622"),h=e("1dde"),d=h("slice"),f=u("species"),p=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,s){var e,n,u,h=o(this),d=a(h.length),g=c(t,d),y=c(void 0===s?d:s,d);if(r(h)&&(e=h.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?i(e)&&(e=e[f],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return p.call(h,g,y);for(n=new(void 0===e?Array:e)(v(y-g,0)),u=0;g<y;g++,u++)g in h&&l(n,u,h[g]);return n.length=u,n}})}}]);
//# sourceMappingURL=page-math-arithmetic.3e741d2b.js.map