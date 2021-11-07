(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-math-arithmetic"],{1148:function(t,e,s){"use strict";var n=s("a691"),i=s("1d80");t.exports=function(t){var e=String(i(this)),s="",r=n(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(s+=e);return s}},"25f0":function(t,e,s){"use strict";var n=s("6eeb"),i=s("825a"),r=s("d039"),a=s("ad6d"),o="toString",c=RegExp.prototype,l=c[o],u=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),h=l.name!=o;(u||h)&&n(RegExp.prototype,o,(function(){var t=i(this),e=String(t.source),s=t.flags,n=String(void 0===s&&t instanceof RegExp&&!("flags"in c)?a.call(t):s);return"/"+e+"/"+n}),{unsafe:!0})},"33a4":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"card"},[s("h1",[s("div",[t._v("Ответы "+t._s(t.successAnswers)+"/"+t._s(t.totalAnswers))]),s("div",[t._v("Уровень "+t._s(t.level))]),s("div",[t._v("Правильно "+t._s(t.efficiency)+"%")])]),s("label",{staticClass:"task"},[t._v(" "+t._s(t.x)+" "+t._s(t.sign)+" "+t._s(t.y)+" = "),s("span",{staticClass:"typedResult",class:(t.typing||t.ok).toString()},[t._v(t._s(t.typedResult))])]),this.typing?s("div",{staticClass:"keys"},[t._l([7,8,9,4,5,6,1,2,3,0],(function(e){return s("div",{key:e,on:{click:function(s){return t.type(e)}}},[t._v(" "+t._s(e)+" ")])})),s("div",{staticClass:"invisible"}),s("div",{on:{click:t.backspace}},[t._v("←")])],2):s("div",{staticClass:"result"},[t._v(t._s(t.result))]),s("button",{staticClass:"next",class:(this.typing?"invisible ":"")+this.ok.toString(),on:{click:t.startTask}},[t._v(" Дальше ")])])])},i=[],r=s("1da1"),a=(s("b680"),s("d3b7"),s("25f0"),s("fb6a"),s("96cf"),s("4473")),o=s("d722"),c={data:function(){return{typing:null,ok:!1,x:null,y:null,sign:null,typedResult:null,totalAnswers:null,successAnswers:null,praises:null,solaces:null}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.getStoredInt("totalAnswers",0),t.getStoredInt("successAnswers",0),t.startTask(),e.next=5,o["a"].getStatic("praise/"+localStorage.username);case 5:return t.praises=e.sent,e.next=8,o["a"].getStatic("solace/solace");case 8:t.solaces=e.sent;case 9:case"end":return e.stop()}}),e)})))()},computed:{level:function(){return parseInt(5+.2*(.5*this.totalAnswers+this.successAnswers))},efficiency:function(){return(this.successAnswers/this.totalAnswers*100).toFixed(2)||0},result:function(){return Math.round(this.x+("+"===this.sign?1:-1)*this.y)}},methods:{type:function(t){this.typedResult+=t,this.result.toString().length===this.typedResult.length&&this.checkTask()},backspace:function(){this.typedResult=this.typedResult.slice(0,-1)},checkTask:function(){this.typing=!1,this.ok=this.result===parseInt(this.typedResult),this.setStoredInt("totalAnswers",++this.totalAnswers),this.ok&&this.setStoredInt("successAnswers",++this.successAnswers),this.ok?a["a"].play({word:this.praise(),lang:"ru"}):a["a"].play({word:this.solace(),lang:"ru"})},startTask:function(){this.typing=!0,this.typedResult="",this.sign=this.getRandomSign(),this.x=this.getRandomNumber(),this.y=this.getRandomNumber(this.x,this.sign)},getRandomNumber:function(t,e){return parseInt(Math.random()*("-"===e?t:this.level))},getRandomSign:function(){return Math.random()<.5?"+":"-"},getStoredInt:function(t,e){this[t]=parseInt(localStorage.getItem(localStorage.username+".math."+t))||e},setStoredInt:function(t,e){localStorage.setItem(localStorage.username+".math."+t,e)},praise:function(){return this.praises[parseInt(Math.random()*this.praises.length)]},solace:function(){return this.solaces[parseInt(Math.random()*this.solaces.length)]}}},l=c,u=(s("aefe"),s("2877")),h=Object(u["a"])(l,n,i,!1,null,"729fb485",null);e["default"]=h.exports},"408a":function(t,e,s){var n=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},4473:function(t,e,s){"use strict";s("99af");e["a"]={playing:!1,play:function(t,e){var s=this;if(!this.playing){var n="abcdefghijklmnopqrstuvwxyz".indexOf(t[0].toLowerCase())>-1?"en-US":"ru-RU";if(!e){var i=new Audio("".concat("","/api/play?phrase=").concat(t,"&lang=").concat(n.substring(0,2)));i.play(),this.playing=!0}setTimeout((function(){s.playing=!1;var e=new SpeechSynthesisUtterance;e.text=t,e.lang=n,e.rate="en-US"===n?.6:.8,speechSynthesis.speak(e)}),e?0:1500)}}}},aefe:function(t,e,s){"use strict";s("e511")},b680:function(t,e,s){"use strict";var n=s("23e7"),i=s("a691"),r=s("408a"),a=s("1148"),o=s("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,s){return 0===e?s:e%2===1?u(t,e-1,s*t):u(t*t,e/2,s)},h=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},f=function(t,e,s){var n=-1,i=s;while(++n<6)i+=e*t[n],t[n]=i%1e7,i=l(i/1e7)},p=function(t,e){var s=6,n=0;while(--s>=0)n+=t[s],t[s]=l(n/e),n=n%e*1e7},d=function(t){var e=6,s="";while(--e>=0)if(""!==s||0===e||0!==t[e]){var n=String(t[e]);s=""===s?n:s+a.call("0",7-n.length)+n}return s},g=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));n({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,s,n,o,c=r(this),l=i(t),g=[0,0,0,0,0,0],v="",y="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=h(c*u(2,69,1))-69,s=e<0?c*u(2,-e,1):c/u(2,e,1),s*=4503599627370496,e=52-e,e>0){f(g,0,s),n=l;while(n>=7)f(g,1e7,0),n-=7;f(g,u(10,n,1),0),n=e-1;while(n>=23)p(g,1<<23),n-=23;p(g,1<<n),f(g,1,1),p(g,2),y=d(g)}else f(g,0,s),f(g,1<<-e,0),y=d(g)+a.call("0",l);return l>0?(o=y.length,y=v+(o<=l?"0."+a.call("0",l-o)+y:y.slice(0,o-l)+"."+y.slice(o-l))):y=v+y,y}})},e511:function(t,e,s){},fb6a:function(t,e,s){"use strict";var n=s("23e7"),i=s("861d"),r=s("e8b5"),a=s("23cb"),o=s("50c4"),c=s("fc6a"),l=s("8418"),u=s("b622"),h=s("1dde"),f=h("slice"),p=u("species"),d=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var s,n,u,h=c(this),f=o(h.length),v=a(t,f),y=a(void 0===e?f:e,f);if(r(h)&&(s=h.constructor,"function"!=typeof s||s!==Array&&!r(s.prototype)?i(s)&&(s=s[p],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return d.call(h,v,y);for(n=new(void 0===s?Array:s)(g(y-v,0)),u=0;v<y;v++,u++)v in h&&l(n,u,h[v]);return n.length=u,n}})}}]);
//# sourceMappingURL=page-math-arithmetic.0ff75d79.js.map