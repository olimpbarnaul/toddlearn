(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-auth-switch"],{"0155":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"page"},[s("div",{staticClass:"card"},[s("h1",{staticClass:"justify-center"},[t._v("Сменить пользователя")]),t._l(t.users,(function(e){return s("div",{key:e.username,staticClass:"item"},[s("div",{class:t.user.username===e.username?"text-blue-400":"",on:{click:function(s){return t.switchUser(e)}}},[t._v(" "+t._s(e.firstName)+" ")]),s("img",{attrs:{src:"/static/trash.svg"},on:{click:function(s){return t.logoutUser(e)}}})])})),s("router-link",{staticClass:"button",attrs:{to:"/auth/login"}},[t._v("Добавить")])],2)])},r=[],a=e("2f62"),c={data:function(){return{username:null,password:null}},methods:{switchUser(t){localStorage.setItem("authToken",t.authToken),window.location.href="/"},logoutUser(t){this.$store.commit("deleteFromUsers",t)}},computed:Object(a["b"])(["users","user"])},u=c,i=(e("06eb"),e("2877")),o=Object(i["a"])(u,n,r,!1,null,"8c3ac984",null);s["default"]=o.exports},"06eb":function(t,s,e){"use strict";e("7ac1")},"7ac1":function(t,s,e){}}]);
//# sourceMappingURL=page-auth-switch.28d44d2d.js.map