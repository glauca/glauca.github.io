(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec8fac8c"],{3079:function(t,e,n){},"82e1":function(t,e,n){"use strict";var i=n("3079"),a=n.n(i);a.a},cd07:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header-index-wide"},[n("a-card",{style:{height:"100%"},attrs:{bordered:!1,bodyStyle:{padding:"16px 0",height:"100%"}}},[n("div",{staticClass:"account-settings-info-main",class:t.device},[n("div",{staticClass:"account-settings-info-left"},[n("a-menu",{style:{border:"0",width:"mobile"==t.device?"560px":"auto"},attrs:{mode:"mobile"==t.device?"horizontal":"inline",selectedKeys:t.selectedKeys,type:"inner"},on:{openChange:t.onOpenChange}},[n("a-menu-item",{key:"/account/settings/base"},[n("router-link",{attrs:{to:{name:"BaseSettings"}}},[t._v("\n              基本设置\n            ")])],1),n("a-menu-item",{key:"/account/settings/security"},[n("router-link",{attrs:{to:{name:"SecuritySettings"}}},[t._v("\n              安全设置\n            ")])],1),n("a-menu-item",{key:"/account/settings/custom"},[n("router-link",{attrs:{to:{name:"CustomSettings"}}},[t._v("\n              个性化\n            ")])],1),n("a-menu-item",{key:"/account/settings/binding"},[n("router-link",{attrs:{to:{name:"BindingSettings"}}},[t._v("\n              账户绑定\n            ")])],1),n("a-menu-item",{key:"/account/settings/notification"},[n("router-link",{attrs:{to:{name:"NotificationSettings"}}},[t._v("\n              新消息通知\n            ")])],1)],1)],1),n("div",{staticClass:"account-settings-info-right"},[n("div",{staticClass:"account-settings-info-title"},[n("span",[t._v(t._s(t.$route.meta.title))])]),n("route-view")],1)])])],1)},a=[],s=n("680ad"),o=n("ac0d"),c={components:{RouteView:s["d"],PageView:s["c"]},mixins:[o["c"]],data:function(){return{mode:"inline",openKeys:[],selectedKeys:[],preview:{},option:{img:"/avatar2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]},pageTitle:""}},created:function(){this.updateMenu()},methods:{onOpenChange:function(t){this.openKeys=t},updateMenu:function(){var t=this.$route.matched.concat();this.selectedKeys=[t.pop().path]}},watch:{$route:function(t){this.updateMenu()}}},u=c,r=(n("82e1"),n("17cc")),d=Object(r["a"])(u,i,a,!1,null,"3b20d68e",null);e["default"]=d.exports}}]);