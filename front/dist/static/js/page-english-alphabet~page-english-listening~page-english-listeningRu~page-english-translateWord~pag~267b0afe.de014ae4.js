(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-english-alphabet~page-english-listening~page-english-listeningRu~page-english-translateWord~pag~267b0afe"],{"04d1":function(t,e,r){var n=r("342f"),i=n.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},"0cb2":function(t,e,r){var n=r("7b0b"),i=Math.floor,o="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,c,u,f){var l=r+t.length,d=c.length,h=s;return void 0!==u&&(u=n(u),h=a),o.call(f,h,(function(n,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(l);case"<":a=u[o.slice(1,-1)];break;default:var s=+o;if(0===s)return n;if(s>d){var f=i(s/10);return 0===f?n:f<=d?void 0===c[f-1]?o.charAt(1):c[f-1]+o.charAt(1):n}a=c[s-1]}return void 0===a?"":a}))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),a=r("9112");for(var s in i){var c=n[s],u=c&&c.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"26e9":function(t,e,r){"use strict";var n=r("23e7"),i=r("e8b5"),o=[].reverse,a=[1,2];n({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return i(this)&&(this.length=this.length),o.call(this)}})},"3b36":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("div",{staticClass:"card"},[t.groups&&null!==t.currentGroup?r("h1",[r("div",{on:{click:t.changeMaxWordsInGroup}},[t._v(" Слово "+t._s(t.maxWordsInGroup-t.groups[t.currentGroup].length+1)+" / "+t._s(t.maxWordsInGroup)+" ")]),r("div",{on:{click:t.showGroupsInfo}},[t._v(" Группа "+t._s(t.currentGroup+1)+" / "+t._s(t.groups.length)+" ")])]):t._e(),r("label",{staticClass:"translate-word"},[r("div",{staticClass:"flex items-center",class:{invisible:t.typing&&"listening"===t.category,"justify-center":t.isAlphabet}},[t._v(" "+t._s("word"===t.typingCheck?t.dictionary[t.currentWord]:t.currentWord)+" ")]),r("img",{staticClass:"play",class:{invisible:t.typing&&"listening"!==t.category},attrs:{src:"/static/sound.svg"},on:{click:t.playWord}}),r("div",{staticClass:"flex flex-col",class:t.isAlphabet?"items-center":"items-end"},[t.ok||t.isAlphabet?t._e():r("span",{staticClass:"typed",class:{"line-through":!t.typing&&!t.ok}},[t._v(t._s(t.typedResult))]),t.typing?t._e():r("label",{staticClass:"text-right"},[t._v(" "+t._s(t.isAlphabet?t.dictionary[t.currentWord].toUpperCase():"word"===t.typingCheck?t.currentWord:t.dictionary[t.currentWord])+" ")])])]),t.groups&&!t.wordsInGroups?r("div",{staticClass:"text-center"},[r("img",{attrs:{src:"https://source.unsplash.com/800x600/?firework,winner"}}),r("h2",[t._v("Поздравляю! Ты победитель!")]),r("button",{staticClass:"next",on:{click:function(e){return t.startTask(!0)}}},[t._v("Сброс")])]):t.groups&&t.typing?[r("input-keys",{attrs:{keys:t.keys,caps:!!t.isAlphabet&&Math.random()<.5,backspace:!t.isAlphabet},model:{value:t.typedResult,callback:function(e){t.typedResult=e},expression:"typedResult"}}),r("button",{staticClass:"give-up",class:t.buttonInvisible,on:{click:function(e){return t.checkTask(!0)}}},[t._v(" Сдаюсь ")])]:t.groups?[t.isAlphabet?t._e():r("img",{staticClass:"illustration",attrs:{src:"https://source.unsplash.com/800x600/?"+t.currentWord}}),r("button",{staticClass:"next",class:t.buttonInvisible+t.ok.toString(),on:{click:function(e){return t.startTask(!1)}}},[t._v(" Дальше ")])]:r("div",{staticClass:"m-auto"},[r("img",{staticClass:"illustration",attrs:{src:"/static/loading.gif"}})])],2)])},i=[];function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return o(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0");function c(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return a(t)||s(t)||c(t)||u()}function l(t){if(Array.isArray(t))return t}function d(t,e){var r=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,i,o=[],a=!0,s=!1;try{for(r=r.call(t);!(a=(n=r.next()).done);a=!0)if(o.push(n.value),e&&o.length===e)break}catch(c){s=!0,i=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(s)throw i}}return o}}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t,e){return l(t)||d(t,e)||c(t,e)||h()}var v=r("1da1"),g=(r("96cf"),r("4ec9"),r("159b"),r("26e9"),r("b64b"),r("a434"),r("4de4"),r("4fad"),r("498a"),r("ac1f"),r("5319"),r("d81d"),r("6062"),r("1276"),r("a15b"),r("4e82"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"keys"},[t._l(t.keys,(function(e){return r("div",{key:e,on:{click:function(r){return t.type(e)}}},[t._v(" "+t._s(t.caps?e.toUpperCase():e)+" ")])})),t.backspace?r("div",{on:{click:function(e){return t.type("Backspace")}}},[t._v("←")]):t._e()],2)}),y=[],b=r("b84c"),m={props:{value:String,keys:Array,caps:Boolean,backspace:Boolean},created:function(){document.addEventListener("keydown",this.dispatchType)},destroyed:function(){document.removeEventListener("keydown",this.dispatchType)},methods:{type:function(t){"Backspace"===t?this.$emit("input",this.value.slice(0,-1)):1===t.length&&this.$emit("input",this.value+t)},dispatchType:function(t){var e=t.key;this.type(Object(b["d"])(e,this.keys))}}},x=m,w=r("2877"),k=Object(w["a"])(x,g,y,!1,null,null,null),S=k.exports,E=r("4473"),A=r("d722"),W={data:function(){return{typing:!0,typedResult:"",buttonInvisible:"",dictionary:null,groups:null,currentWord:null,maxWordsInGroup:null,praises:null,solaces:null,answered:new Map,factor:1,attempts:1}},props:{revers:Boolean,category:String,typingCheck:{type:String,default:""},lang:String},components:{InputKeys:S},methods:{fetchDictionary:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isAlphabet){e.next=6;break}t.factor=3,t.dictionary={},b["a"][t.lang].forEach((function(e){t.dictionary[e]=e})),e.next=9;break;case 6:return e.next=8,A["a"].getStatic("english/dictionary/"+localStorage.username,{});case 8:t.dictionary=e.sent;case 9:return t.revers&&(t.dictionary=t.reverse(t.dictionary)),e.t0=parseInt,e.next=13,A["a"].getUserData("maxWordsInGroup",10);case 13:return e.t1=e.sent,t.maxWordsInGroup=(0,e.t0)(e.t1),e.next=17,A["a"].getUserData("groups");case 17:return t.groups=e.sent,t.startTask(!t.groups,!0),e.next=21,A["a"].getStatic("praise/"+localStorage.username);case 21:return t.praises=e.sent,e.next=24,A["a"].getStatic("solace/"+localStorage.username);case 24:t.solaces=e.sent;case 25:case"end":return e.stop()}}),e)})))()},checkTask:function(t){(t||this.ok||this.typedFullfilled)&&(this.attempts+=1,this.typing=!1,this.hideButtons(),"listening"===this.category?this.ok?E["a"].play((Math.random()<.2?this.$store.state.user.firstName+"!":"")+this.praise(),!0):this.typedResult.length?(E["a"].play("Неправильно",!0),this.playWordTranslate()):this.playWordTranslate():this.playWordTranslate())},startTask:function(t,e){t&&this.formGroups(),e||"listening"===this.category||(this.ok?E["a"].play(this.praise(),!0):parseInt(Object({VUE_APP_API_URL:"",VUE_APP_STATIC_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SOLACE)&&E["a"].play(this.solace(),!0)),this.ok?(this.incMap(this.answered,this.currentWord),this.answered.get(this.currentWord)>=this.factor&&this.delCurrentWord()):this.currentWord&&this.decMap(this.answered,this.currentWord,this.isAlphabet?5:1),this.setCurrentWord(),"listening"===this.category&&this.playWord(),this.typing=!0,this.hideButtons()},incMap:function(t,e){t.set(e,(t.get(e)||0)+1)},decMap:function(t,e,r){t.set(e,Math.max((t.get(e)||0)-1,-1*r))},changeMaxWordsInGroup:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=parseInt(prompt("Сколько слов должно быть в группе? Всего ".concat(t.dictCount,"."),t.maxWordsInGroup)),isNaN(r)||r===t.maxWordsInGroup){e.next=10;break}return r=Math.min(r,t.dictCount),r=Math.max(r,1),t.maxWordsInGroup=r,t.startTask(!0),e.next=8,A["a"].setUserData("maxWordsInGroup",r);case 8:return e.next=10,A["a"].setUserData("groups",t.groups);case 10:case"end":return e.stop()}}),e)})))()},playWord:function(){E["a"].play(this.revers?this.dictionary[this.currentWord]:this.currentWord)},playWordTranslate:function(){E["a"].play(this.revers?this.dictionary[this.currentWord]:this.currentWord,!0),E["a"].play(this.revers?this.currentWord:this.dictionary[this.currentWord],!0)},hideButtons:function(){var t=this;this.buttonInvisible="invisible ",setTimeout((function(){return t.buttonInvisible=""}),1e3)},formGroups:function(){var t=Object.keys(this.dictionary),e=[[]],r=0,n=0;while(t.length>0){var i=parseInt(Math.random()*t.length);n==this.maxWordsInGroup&&(r++,n=0,e.push([])),e[r].push(t[i]),n++,t.splice(i,1)}this.groups=e},delCurrentWord:function(){var t=this.groups[this.currentGroup];t.splice(t.indexOf(this.currentWord),1)},setCurrentWord:function(){var t=this;this.typedResult="";var e=this.groups[this.currentGroup],r=e.filter((function(r){return r!==t.currentWord||1===e.length}));this.currentWord=r[parseInt(Math.random()*r.length)]},keydown:function(t){if("Enter"===t.key)this.typing?this.checkTask(!0):this.startTask();else if("Escape1"===t.key)this.typing?(this.typedResult=this.currentVariants[0],this.checkTask(!0)):this.startTask();else if([" ","r"].indexOf(t.key)>-1)return t.stopPropagation(),t.preventDefault(),!1},praise:function(){return this.praises[parseInt(Math.random()*this.praises.length)]},solace:function(){return this.solaces[parseInt(Math.random()*this.solaces.length)]},reverse:function(t){for(var e={},r=0,n=Object.entries(t);r<n.length;r++){var i=p(n[r],2),o=i[0],a=i[1];e[a]=o}return e},showGroupsInfo:function(){alert("Осталось всего слов: ".concat(this.wordsInGroups))}},computed:{isAlphabet:function(){return"alphabet"===this.typingCheck},wordsInGroups:function(){var t=0;if(this.groups)for(var e=0;e<this.groups.length;e++)t+=this.groups[e].length;return t},typedFormatted:function(){return this.typedResult.replace(/ +(?= )/g,"").trim()},ok:function(){return"word"===this.typingCheck?this.currentWord===this.typedFormatted:this.currentVariants.indexOf(this.typedFormatted)>-1},typedFullfilled:function(){return"word"===this.typingCheck?this.currentWord.length===this.typedFormatted.length:Math.max.apply(Math,f(this.currentVariants.map((function(t){return t.length}))))===this.typedFormatted.length},dictCount:function(){return Object.keys(this.dictionary).length},keys:function(){if(this.currentVariants&&this.currentWord){var t=b["a"][Object(b["b"])("word"===this.typingCheck?this.currentWord:this.currentVariants)],e=new Set("word"===this.typingCheck?this.currentWord:this.currentVariants.join("").split(""));while(e.size<(this.isAlphabet?9:11))e.add(t[parseInt(Math.random()*t.length*this.attempts/this.attempts)]);return Array.from(e).sort((function(){return.5-Math.random()}))}return null},currentGroup:function(){if(Array.isArray(this.groups))for(var t=0;t<this.groups.length;t++)if(this.groups[t].length)return t;return null},currentVariants:function(){return this.dictionary&&this.currentWord?this.dictionary[this.currentWord].split(",").map((function(t){return t.trim()})):[]}},mounted:function(){this.fetchDictionary(),document.addEventListener("keydown",this.keydown),window.onbeforeunload=function(){return""}},destroyed:function(){document.removeEventListener("keydown",this.keydown),window.onbeforeunload=null},watch:{typedResult:function(){this.checkTask()},groups:function(){(this.maxWordsInGroup-this.groups[this.currentGroup].length)%9||A["a"].setUserData("groups",this.groups)}}},I=W,O=(r("a96e"),Object(w["a"])(I,n,i,!1,null,"0d627f74",null));e["a"]=O.exports},4473:function(t,e,r){"use strict";r("99af");var n=r("b84c");e["a"]={playing:!1,play:function(t,e){var r=this,i=Object(n["c"])(t);if(!e){var o=new Audio("".concat("","/api/play?phrase=").concat(t,"&lang=").concat(i.substring(0,2)));o.play(),this.playing=!0}setTimeout((function(){r.playing=!1;var e=new SpeechSynthesisUtterance;e.text=t,e.lang=i,e.rate="en-US"===i?.6:.8,speechSynthesis.speak(e)}),e?0:1500)}}},"498a":function(t,e,r){"use strict";var n=r("23e7"),i=r("58a8").trim,o=r("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return i(this)}})},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),s=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,h,p=i(t),v="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:void 0,b=void 0!==y,m=u(p),x=0;if(b&&(y=n(y,g>2?arguments[2]:void 0,2)),void 0==m||v==Array&&a(m))for(e=s(p.length),r=new v(e);e>x;x++)h=b?y(p[x],x):p[x],c(r,x,h);else for(l=m.call(p),d=l.next,r=new v;!(f=d.call(l)).done;x++)h=b?o(l,y,[f.value,x],!0):f.value,c(r,x,h);return r.length=x,r}},"4e82":function(t,e,r){"use strict";var n=r("23e7"),i=r("1c0b"),o=r("7b0b"),a=r("50c4"),s=r("d039"),c=r("addb"),u=r("a640"),f=r("04d1"),l=r("d998"),d=r("2d00"),h=r("512c"),p=[],v=p.sort,g=s((function(){p.sort(void 0)})),y=s((function(){p.sort(null)})),b=u("sort"),m=!s((function(){if(d)return d<70;if(!(f&&f>3)){if(l)return!0;if(h)return h<603;var t,e,r,n,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)p.push({k:e+n,v:r})}for(p.sort((function(t,e){return e.v-t.v})),n=0;n<p.length;n++)e=p[n].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),x=g||!y||!b||!m,w=function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:String(e)>String(r)?1:-1}};n({target:"Array",proto:!0,forced:x},{sort:function(t){void 0!==t&&i(t);var e=o(this);if(m)return void 0===t?v.call(e):v.call(e,t);var r,n,s=[],u=a(e.length);for(n=0;n<u;n++)n in e&&s.push(e[n]);s=c(s,w(t)),r=s.length,n=0;while(n<r)e[n]=s[n++];while(n<u)delete e[n++];return e}})},"4ec9":function(t,e,r){"use strict";var n=r("6d61"),i=r("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},"4fad":function(t,e,r){var n=r("23e7"),i=r("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return i(t)}})},"512c":function(t,e,r){var n=r("342f"),i=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},5319:function(t,e,r){"use strict";var n=r("d784"),i=r("825a"),o=r("50c4"),a=r("a691"),s=r("1d80"),c=r("8aa5"),u=r("0cb2"),f=r("14c3"),l=Math.max,d=Math.min,h=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=n.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(r,n){var i=s(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!p&&v||"string"===typeof n&&-1===n.indexOf(g)){var s=r(e,t,this,n);if(s.done)return s.value}var y=i(t),b=String(this),m="function"===typeof n;m||(n=String(n));var x=y.global;if(x){var w=y.unicode;y.lastIndex=0}var k=[];while(1){var S=f(y,b);if(null===S)break;if(k.push(S),!x)break;var E=String(S[0]);""===E&&(y.lastIndex=c(b,o(y.lastIndex),w))}for(var A="",W=0,I=0;I<k.length;I++){S=k[I];for(var O=String(S[0]),C=l(d(a(S.index),b.length),0),_=[],j=1;j<S.length;j++)_.push(h(S[j]));var T=S.groups;if(m){var R=[O].concat(_,C,b);void 0!==T&&R.push(T);var M=String(n.apply(void 0,R))}else M=u(O,b,C,_,T,n);C>=W&&(A+=b.slice(W,C)+M,W=C+O.length)}return A+b.slice(W)}]}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),o="["+i+"]",a=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},6062:function(t,e,r){"use strict";var n=r("6d61"),i=r("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,r){"use strict";var n=r("9bf2").f,i=r("7c73"),o=r("e2cc"),a=r("0366"),s=r("19aa"),c=r("2266"),u=r("7dd0"),f=r("2626"),l=r("83ab"),d=r("f183").fastKey,h=r("69f3"),p=h.set,v=h.getterFor;t.exports={getConstructor:function(t,e,r,u){var f=t((function(t,n){s(t,f,e),p(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=n&&c(n,t[u],{that:t,AS_ENTRIES:r})})),h=v(e),g=function(t,e,r){var n,i,o=h(t),a=y(t,e);return a?a.value=r:(o.last=a={index:i=d(e,!0),key:e,value:r,previous:n=o.last,next:void 0,removed:!1},o.first||(o.first=a),n&&(n.next=a),l?o.size++:t.size++,"F"!==i&&(o.index[i]=a)),t},y=function(t,e){var r,n=h(t),i=d(e);if("F"!==i)return n.index[i];for(r=n.first;r;r=r.next)if(r.key==e)return r};return o(f.prototype,{clear:function(){var t=this,e=h(t),r=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,r=h(e),n=y(e,t);if(n){var i=n.next,o=n.previous;delete r.index[n.index],n.removed=!0,o&&(o.next=i),i&&(i.previous=o),r.first==n&&(r.first=i),r.last==n&&(r.last=o),l?r.size--:e.size--}return!!n},forEach:function(t){var e,r=h(this),n=a(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:r.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),o(f.prototype,r?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),l&&n(f.prototype,"size",{get:function(){return h(this).size}}),f},setStrong:function(t,e,r){var n=e+" Iterator",i=v(e),o=v(n);u(t,e,(function(t,e){p(this,{type:n,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,r=t.last;while(r&&r.removed)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),f(e)}}},"6d61":function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("94ca"),a=r("6eeb"),s=r("f183"),c=r("2266"),u=r("19aa"),f=r("861d"),l=r("d039"),d=r("1c7e"),h=r("d44e"),p=r("7156");t.exports=function(t,e,r){var v=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),y=v?"set":"add",b=i[t],m=b&&b.prototype,x=b,w={},k=function(t){var e=m[t];a(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!f(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})},S=o(t,"function"!=typeof b||!(g||m.forEach&&!l((function(){(new b).entries().next()}))));if(S)x=r.getConstructor(e,t,v,y),s.REQUIRED=!0;else if(o(t,!0)){var E=new x,A=E[y](g?{}:-0,1)!=E,W=l((function(){E.has(1)})),I=d((function(t){new b(t)})),O=!g&&l((function(){var t=new b,e=5;while(e--)t[y](e,e);return!t.has(-0)}));I||(x=e((function(e,r){u(e,x,t);var n=p(new b,e,x);return void 0!=r&&c(r,n[y],{that:n,AS_ENTRIES:v}),n})),x.prototype=m,m.constructor=x),(W||O)&&(k("delete"),k("has"),v&&k("get")),(O||A)&&k(y),g&&m.clear&&delete m.clear}return w[t]=x,n({global:!0,forced:x!=b},w),h(x,t),g||r.setStrong(x,t,v),x}},"6f53":function(t,e,r){var n=r("83ab"),i=r("df75"),o=r("fc6a"),a=r("d1e7").f,s=function(t){return function(e){var r,s=o(e),c=i(s),u=c.length,f=0,l=[];while(u>f)r=c[f++],n&&!a.call(s,r)||l.push(t?[r,s[r]]:s[r]);return l}};t.exports={entries:s(!0),values:s(!1)}},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==r&&n(a=o.prototype)&&a!==r.prototype&&i(t,a),t}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},"9bdd":function(t,e,r){var n=r("825a"),i=r("2a62");t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(a){throw i(t),a}}},a229:function(t,e,r){},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("23cb"),o=r("a691"),a=r("50c4"),s=r("7b0b"),c=r("65f0"),u=r("8418"),f=r("1dde"),l=f("splice"),d=Math.max,h=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!l},{splice:function(t,e){var r,n,f,l,g,y,b=s(this),m=a(b.length),x=i(t,m),w=arguments.length;if(0===w?r=n=0:1===w?(r=0,n=m-x):(r=w-2,n=h(d(o(e),0),m-x)),m+r-n>p)throw TypeError(v);for(f=c(b,n),l=0;l<n;l++)g=x+l,g in b&&u(f,l,b[g]);if(f.length=n,r<n){for(l=x;l<m-n;l++)g=l+n,y=l+r,g in b?b[y]=b[g]:delete b[y];for(l=m;l>m-n+r;l--)delete b[l-1]}else if(r>n)for(l=m-n;l>x;l--)g=l+n-1,y=l+r-1,g in b?b[y]=b[g]:delete b[y];for(l=0;l<r;l++)b[l+x]=arguments[l+2];return b.length=m-n+r,f}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),h=r("861d"),p=r("825a"),v=r("7b0b"),g=r("fc6a"),y=r("c04e"),b=r("5c6c"),m=r("7c73"),x=r("df75"),w=r("241c"),k=r("057f"),S=r("7418"),E=r("06cf"),A=r("9bf2"),W=r("d1e7"),I=r("9112"),O=r("6eeb"),C=r("5692"),_=r("f772"),j=r("d012"),T=r("90e3"),R=r("b622"),M=r("e538"),G=r("746f"),U=r("d44e"),P=r("69f3"),D=r("b727").forEach,F=_("hidden"),$="Symbol",N="prototype",z=R("toPrimitive"),B=P.set,L=P.getterFor($),V=Object[N],K=i.Symbol,J=o("JSON","stringify"),Q=E.f,q=A.f,H=k.f,X=W.f,Y=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),rt=C("wks"),nt=i.QObject,it=!nt||!nt[N]||!nt[N].findChild,ot=s&&f((function(){return 7!=m(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Q(V,e);n&&delete V[e],q(t,e,r),n&&t!==V&&q(V,e,n)}:q,at=function(t,e){var r=Y[t]=m(K[N]);return B(r,{type:$,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},ct=function(t,e,r){t===V&&ct(Z,e,r),p(t);var n=y(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,F)&&t[F][n]&&(t[F][n]=!1),r=m(r,{enumerable:b(0,!1)})):(l(t,F)||q(t,F,b(1,{})),t[F][n]=!0),ot(t,n,r)):q(t,n,r)},ut=function(t,e){p(t);var r=g(e),n=x(r).concat(pt(r));return D(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=y(t,!0),r=X.call(this,e);return!(this===V&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,F)&&this[F][e])||r)},dt=function(t,e){var r=g(t),n=y(e,!0);if(r!==V||!l(Y,n)||l(Z,n)){var i=Q(r,n);return!i||!l(Y,n)||l(r,F)&&r[F][n]||(i.enumerable=!0),i}},ht=function(t){var e=H(g(t)),r=[];return D(e,(function(t){l(Y,t)||l(j,t)||r.push(t)})),r},pt=function(t){var e=t===V,r=H(e?Z:g(t)),n=[];return D(r,(function(t){!l(Y,t)||e&&!l(V,t)||n.push(Y[t])})),n};if(c||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===V&&r.call(Z,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),ot(this,e,b(1,t))};return s&&it&&ot(V,e,{configurable:!0,set:r}),at(e,t)},O(K[N],"toString",(function(){return L(this).tag})),O(K,"withoutSetter",(function(t){return at(T(t),t)})),W.f=lt,A.f=ct,E.f=dt,w.f=k.f=ht,S.f=pt,M.f=function(t){return at(R(t),t)},s&&(q(K[N],"description",{configurable:!0,get:function(){return L(this).description}}),a||O(V,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:K}),D(x(rt),(function(t){G(t)})),n({target:$,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=K(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(v(t))}}),J){var vt=!c||f((function(){var t=K();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(h(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,J.apply(null,i)}})}K[N][z]||I(K[N],z,K[N].valueOf),U(K,$),j[F]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},a96e:function(t,e,r){"use strict";r("a229")},addb:function(t,e){var r=Math.floor,n=function(t,e){var a=t.length,s=r(a/2);return a<8?i(t,e):o(n(t.slice(0,s),e),n(t.slice(s),e),e)},i=function(t,e){var r,n,i=t.length,o=1;while(o<i){n=o,r=t[o];while(n&&e(t[n-1],r)>0)t[n]=t[--n];n!==o++&&(t[n]=r)}return t},o=function(t,e,r){var n=t.length,i=e.length,o=0,a=0,s=[];while(o<n||a<i)o<n&&a<i?s.push(r(t[o],e[a])<=0?t[o++]:e[a++]):s.push(o<n?t[o++]:e[a++]);return s};t.exports=n},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),a=r("d039"),s=a((function(){o(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return o(i(t))}})},b84c:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return s})),r.d(e,"a",(function(){return a})),r.d(e,"d",(function(){return u}));r("ac1f"),r("1276");var n="ru",i="en",o={ru:"ru-RU",en:"en-US"},a={ru:"абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split(""),en:"abcdefghijklmnopqrstuvwxyz".split("")};function s(t){return o[c(t)]}function c(t){return"абвгдеёжзийклмнопрстуфхцчшщъыьэюя".indexOf(t[0][0][0][0].toLowerCase())>-1?n:i}function u(t,e){var r={"`":"ё",q:"й",w:"ц",e:"у",r:"к",t:"е",y:"н",u:"г",i:"ш",o:"щ",p:"з","[":"х","]":"ъ",a:"ф",s:"ы",d:"в",f:"а",g:"п",h:"р",j:"о",k:"л",l:"д",";":"ж","'":"э",z:"я",x:"ч",c:"с",v:"м",b:"и",n:"т",m:"ь",",":"б",".":"ю","~":"Ё",Q:"Й",W:"Ц",E:"У",R:"К",T:"Е",Y:"Н",U:"Г",I:"Ш",O:"Щ",P:"З","{":"Х","}":"Ъ",A:"Ф",S:"Ы",D:"В",F:"А",G:"П",H:"Р",J:"О",K:"Л",L:"Д",":":"Ж",'"':"Э",Z:"Я",X:"Ч",C:"С",V:"М",B:"И",N:"Т",M:"Ь","<":"Б",">":"Ю"};return c(e)===n&&c(t)===i&&r[t]?r[t]:t}},bb2f:function(t,e,r){var n=r("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c8d2:function(t,e,r){var n=r("d039"),i=r("5899"),o="​᠎";t.exports=function(t){return n((function(){return!!i[t]()||o[t]()!=o||i[t].name!==t}))}},d28b:function(t,e,r){var n=r("746f");n("iterator")},d81d:function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").map,o=r("1dde"),a=o("map");n({target:"Array",proto:!0,forced:!a},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},d998:function(t,e,r){var n=r("342f");t.exports=/MSIE|Trident/.test(n)},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var h=d.prototype=f.prototype;h.constructor=d;var p=h.toString,v="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(a(l,t))return"";var r=v?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},f183:function(t,e,r){var n=r("d012"),i=r("861d"),o=r("5135"),a=r("9bf2").f,s=r("90e3"),c=r("bb2f"),u=s("meta"),f=0,l=Object.isExtensible||function(){return!0},d=function(t){a(t,u,{value:{objectID:"O"+ ++f,weakData:{}}})},h=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,u)){if(!l(t))return"F";if(!e)return"E";d(t)}return t[u].objectID},p=function(t,e){if(!o(t,u)){if(!l(t))return!0;if(!e)return!1;d(t)}return t[u].weakData},v=function(t){return c&&g.REQUIRED&&l(t)&&!o(t,u)&&d(t),t},g=t.exports={REQUIRED:!1,fastKey:h,getWeakData:p,onFreeze:v};n[u]=!0},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=l("slice"),h=f("species"),p=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,f,l=c(this),d=s(l.length),g=a(t,d),y=a(void 0===e?d:e,d);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(l,g,y);for(n=new(void 0===r?Array:r)(v(y-g,0)),f=0;g<y;g++,f++)g in l&&u(n,f,l[g]);return n.length=f,n}})}}]);
//# sourceMappingURL=page-english-alphabet~page-english-listening~page-english-listeningRu~page-english-translateWord~pag~267b0afe.de014ae4.js.map