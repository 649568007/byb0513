(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a24f254"],{2203:function(t,e,s){"use strict";var a=s("4367"),i=s.n(a);i.a},4367:function(t,e,s){},c377:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"adddetailWrap"},[s("header",[s("router-link",{attrs:{to:"/newaddress"}},[s("i",{staticClass:"el-icon-arrow-left"})]),s("div",[t._v("搜索地址")])],1),s("section",[s("div",{staticClass:"add-detail"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputV,expression:"inputV"}],attrs:{type:"text",placeholder:"请输入小区/写字楼/学校等"},domProps:{value:t.inputV},on:{input:function(e){e.target.composing||(t.inputV=e.target.value)}}}),s("button",{on:{click:t.searchAdd}},[t._v("确认")])]),s("div",{staticClass:"warnpart"},[t._v("为了满足商家的送餐要求，建议您从列表中选择地址")]),s("section",{staticClass:"poisearch-container"},[s("ul",t._l(t.placeArr,(function(e){return s("li",{key:e.name,on:{click:function(s){return t.chenckAdd(e)}}},[s("p",{staticClass:"p1"},[t._v(t._s(e.name))]),s("p",[t._v(t._s(e.address))])])})),0)]),t.isShow?s("div",{staticClass:"point"},[s("p",[t._v("找不到地址？")]),s("p",[t._v("请尝试输入小区、写字楼或学校名")]),s("p",[t._v("详细地址（如门牌号）可稍后输入哦。")])]):t._e()])])},i=[],n=(s("b0c0"),{name:"SearchAddress",data:function(){return{cityId:"",inputV:"",placeArr:[],isShow:!0}},created:function(){this.cityId=localStorage.getItem("cityID")},methods:{searchAdd:function(){var t=this;this.isShow=!1,this.axios.get("/v1/pois",{params:{city_id:this.cityId,keyword:this.inputV,type:"search"}}).then((function(e){console.log(e),t.placeArr=e})).catch((function(t){}))},chenckAdd:function(t){this.inputV=t.name,this.$router.push("/addaddress"),localStorage.setItem("Address",t.name+"("+t.address+")")}}}),c=n,r=(s("2203"),s("2877")),o=Object(r["a"])(c,a,i,!1,null,"63b85556",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-9a24f254.9408497b.js.map