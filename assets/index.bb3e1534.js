import{F as e,O as t,aI as s,a as o,X as r}from"./index.7b779941.js";import{D as i,c0 as a,j as n,u as p,a0 as u,F as m,G as d,w as g,a1 as c,ac as j,N as l,aa as f}from"./vendor.6c85a7e8.js";import{c as x,u as T}from"./index.d5293269.js";import _ from"./SessionTimeoutLogin.d335cda7.js";import"./index.4b0c313e.js";import"./useWindowSizeFn.96fdc5eb.js";import"./useContentViewHeight.d50a5f72.js";/* empty css              */import"./useSortable.367722f1.js";import"./lock.63e90cc1.js";import"./Login.vue_vue&type=style&index=0&lang.aca2f427.js";import"./LoginForm.vue_vue&type=script&setup=true&lang.85c52a00.js";/* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.vue_vue&type=script&setup=true&lang.29d7d233.js";import"./ForgetPasswordForm.vue_vue&type=script&setup=true&lang.da133499.js";import"./index.951449ef.js";import"./RegisterForm.vue_vue&type=script&setup=true&lang.2cd9854c.js";import"./index.4d3e16d7.js";import"./MobileForm.vue_vue&type=script&setup=true&lang.ed36e4ab.js";import"./QrCodeForm.vue_vue&type=script&setup=true&lang.203eff32.js";/* empty css              */import"./download.db642179.js";var v=i({name:"LayoutFeatures",components:{BackTop:a,LayoutLockPage:x((()=>e((()=>import("./index.33c784d1.js")),["assets/index.33c784d1.js","assets/vendor.6c85a7e8.js","assets/vendor.28697ba9.css","assets/LockPage.193f54ac.js","assets/LockPage.a0ac435f.css","assets/index.7b779941.js","assets/index.5d092154.css","assets/lock.63e90cc1.js","assets/header.d801b988.js"]))),SettingDrawer:x((()=>e((()=>import("./index.b0273580.js").then((function(e){return e.i}))),["assets/index.b0273580.js","assets/index.5c7227e9.css","assets/index.35b5cf30.css","assets/index.7b779941.js","assets/index.5d092154.css","assets/vendor.6c85a7e8.js","assets/vendor.28697ba9.css","assets/index.d5293269.js","assets/index.da3c7702.css","assets/index.65674215.css","assets/index.4b0c313e.js","assets/index.c5ac7777.css","assets/useWindowSizeFn.96fdc5eb.js","assets/useContentViewHeight.d50a5f72.js","assets/useSortable.367722f1.js","assets/lock.63e90cc1.js"]))),SessionTimeoutLogin:_},setup(){const{getUseOpenBackTop:e,getShowSettingButton:i,getSettingButtonPosition:a,getFullContent:u}=t(),m=s(),{prefixCls:d}=o("setting-drawer-fearure"),{getShowHeader:g}=T(),c=n((()=>m.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:n((()=>{if(!p(i))return!1;const e=p(a);return e===r.AUTO?!p(g)||p(u):e===r.FIXED})),prefixCls:d,getIsSessionTimeout:c}}});v.render=function(e,t,s,o,r,i){const a=u("LayoutLockPage"),n=u("BackTop"),p=u("SettingDrawer"),x=u("SessionTimeoutLogin");return m(),d(f,null,[g(a),e.getUseOpenBackTop?(m(),c(n,{key:0,target:e.getTarget},null,8,["target"])):j("",!0),e.getIsFixedSettingDrawer?(m(),c(p,{key:1,class:l(e.prefixCls)},null,8,["class"])):j("",!0),e.getIsSessionTimeout?(m(),c(x,{key:2})):j("",!0)],64)};export{v as default};