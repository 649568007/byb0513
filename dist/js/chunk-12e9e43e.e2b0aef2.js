(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12e9e43e"],{"1f93":function(t,s,i){"use strict";var e=i("d7af"),a=i.n(e);a.a},"5f36":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"profileinfoWrap"},[i("header",[i("router-link",{attrs:{to:"/profile"}},[i("i",{staticClass:"el-icon-arrow-left firsti"})]),i("div",[t._v("账户信息")])],1),t._m(0),i("section",{staticClass:"headportraitwo",on:{click:t.gosetusername}},[i("h2",[t._v("用户名")]),i("div",[i("p",[t._v(t._s(t.userName))]),i("i",{staticClass:"el-icon-arrow-right"})])]),i("section",{staticClass:"headportraitwo",on:{click:t.goAddress}},[i("h2",[t._v("收获地址")]),t._m(1)]),i("section",{staticClass:"bind-phone"},[t._v(" 账号绑定 ")]),i("section",{staticClass:"info-router",on:{click:t.appInfo}},[t._m(2)]),i("section",{staticClass:"bind-phone"},[t._v(" 安全设置 ")]),i("section",{staticClass:"headportraithree",on:{click:t.changeinfo}},[i("h2",[t._v("登录密码")]),t._m(3)]),i("section",{staticClass:"exitlogin",on:{click:t.logout}},[t._v("退出登录")]),t.isShow?i("section",{staticClass:"cover-content  cover-animate"},[t._m(4),i("h2",{staticClass:"tcdl"},[t._v("是否退出登录")]),i("div",{staticClass:"sa-botton"},[i("button",{staticClass:"waiting",on:{click:t.zdd}},[t._v("再等等")]),i("div",{staticStyle:{display:"inline-block"}},[i("button",{staticClass:"quitlogin",on:{click:t.logout1}},[t._v("退出登录")])])])]):t._e(),t.moblieAppisshow?i("section",{staticClass:"tip_text_container"},[t._m(5),i("p",{staticClass:"tip_text"},[t._v("请在手机APP中设置")]),i("div",{staticClass:"confrim",on:{click:t.moblieApp}},[t._v("确认")])]):t._e()])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"headportrait"},[i("h2",[t._v("头像")]),i("div",{staticClass:"haha"},[i("i",{staticClass:"el-icon-s-custom"}),i("i",{staticClass:"el-icon-arrow-right"})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("i",{staticClass:"el-icon-arrow-right"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"headportraithree"},[i("h2",[i("i",{staticClass:"el-icon-mobile"}),t._v("手机")]),i("div",[i("i",{staticClass:"el-icon-arrow-right"})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("p",[t._v("修改")]),i("i",{staticClass:"el-icon-arrow-right"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"sa-icon"},[i("i",{staticClass:"el-icon-bell"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"tip_icon"},[i("span",{staticClass:"s1"}),i("span",{staticClass:"s2"})])}],o={name:"Profile_info",data:function(){return{userName:"",isShow:!1,moblieAppisshow:!1}},created:function(){this.userName=localStorage.getItem("username")},methods:{logout:function(){this.isShow=!0},zdd:function(){this.isShow=!1},logout1:function(){this.isShow=!1,localStorage.removeItem("username"),this.$router.push("/profile")},changeinfo:function(){this.$router.push("/forget")},gosetusername:function(){this.$router.push("/setusername")},moblieApp:function(){this.moblieAppisshow=!1},appInfo:function(){this.moblieAppisshow=!0},goAddress:function(){this.$router.push("/address")}}},n=o,c=(i("1f93"),i("2877")),r=Object(c["a"])(n,e,a,!1,null,"31238e5e",null);s["default"]=r.exports},d7af:function(t,s,i){}}]);
//# sourceMappingURL=chunk-12e9e43e.e2b0aef2.js.map