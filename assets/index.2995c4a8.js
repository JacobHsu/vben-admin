import{F as e,O as t,aI as s,a as o,X as r}from"./index.ff0c7c7a.js";import{D as i,c0 as a,j as n,u as p,a0 as u,F as m,G as g,w as c,a1 as d,ac as f,N as j,aa as l}from"./vendor.6c85a7e8.js";import{c as x,u as T}from"./index.9ab24415.js";import _ from"./SessionTimeoutLogin.c9ba10af.js";import"./index.7c1480c0.js";import"./useWindowSizeFn.96fdc5eb.js";import"./useContentViewHeight.c06f0644.js";/* empty css              */import"./useSortable.42ee67fa.js";import"./lock.527f5c32.js";import"./Login.vue_vue&type=style&index=0&lang.c62273a3.js";import"./LoginForm.vue_vue&type=script&setup=true&lang.ddbc6532.js";/* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.vue_vue&type=script&setup=true&lang.67380bc8.js";import"./ForgetPasswordForm.vue_vue&type=script&setup=true&lang.709e233d.js";import"./index.0b4a2568.js";import"./RegisterForm.vue_vue&type=script&setup=true&lang.09ef927e.js";import"./index.3651348e.js";import"./MobileForm.vue_vue&type=script&setup=true&lang.5de6d92f.js";import"./QrCodeForm.vue_vue&type=script&setup=true&lang.d72d7605.js";/* empty css              */import"./download.b8a21dcd.js";var v=i({name:"LayoutFeatures",components:{BackTop:a,LayoutLockPage:x((()=>e((()=>import("./index.bfe3fbe2.js")),["assets/index.bfe3fbe2.js","assets/vendor.6c85a7e8.js","assets/vendor.28697ba9.css","assets/LockPage.4f527786.js","assets/LockPage.a0ac435f.css","assets/index.ff0c7c7a.js","assets/index.5d092154.css","assets/lock.527f5c32.js","assets/header.d801b988.js"]))),SettingDrawer:x((()=>e((()=>import("./index.8071d3ff.js").then((function(e){return e.i}))),["assets/index.8071d3ff.js","assets/index.5c7227e9.css","assets/index.35b5cf30.css","assets/index.ff0c7c7a.js","assets/index.5d092154.css","assets/vendor.6c85a7e8.js","assets/vendor.28697ba9.css","assets/index.9ab24415.js","assets/index.da3c7702.css","assets/index.65674215.css","assets/index.7c1480c0.js","assets/index.55076fdd.css","assets/useWindowSizeFn.96fdc5eb.js","assets/useContentViewHeight.c06f0644.js","assets/useSortable.42ee67fa.js","assets/lock.527f5c32.js"]))),SessionTimeoutLogin:_},setup(){const{getUseOpenBackTop:e,getShowSettingButton:i,getSettingButtonPosition:a,getFullContent:u}=t(),m=s(),{prefixCls:g}=o("setting-drawer-fearure"),{getShowHeader:c}=T(),d=n((()=>m.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:n((()=>{if(!p(i))return!1;const e=p(a);return e===r.AUTO?!p(c)||p(u):e===r.FIXED})),prefixCls:g,getIsSessionTimeout:d}}});v.render=function(e,t,s,o,r,i){const a=u("LayoutLockPage"),n=u("BackTop"),p=u("SettingDrawer"),x=u("SessionTimeoutLogin");return m(),g(l,null,[c(a),e.getUseOpenBackTop?(m(),d(n,{key:0,target:e.getTarget},null,8,["target"])):f("",!0),e.getIsFixedSettingDrawer?(m(),d(p,{key:1,class:j(e.prefixCls)},null,8,["class"])):f("",!0),e.getIsSessionTimeout?(m(),d(x,{key:2})):f("",!0)],64)};export{v as default};
