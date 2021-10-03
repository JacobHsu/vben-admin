import{F as e,p as o,a,f as t,e as s,o as r}from"./index.ff0c7c7a.js";import{D as n,az as i,aA as c,j as l,a0 as d,F as p,G as m,w as u,a5 as f,a1 as g,ac as k,K as x,N as h,L as _,aa as w}from"./vendor.6c85a7e8.js";import{D}from"./siteSetting.c485f07c.js";import{c as j,u as C}from"./index.9ab24415.js";import{a as L}from"./index.fd14b368.js";import{h as v}from"./header.d801b988.js";import"./index.7c1480c0.js";import"./useWindowSizeFn.96fdc5eb.js";import"./useContentViewHeight.c06f0644.js";/* empty css              */import"./useSortable.42ee67fa.js";import"./lock.527f5c32.js";var y=n({name:"UserDropdown",components:{Dropdown:i,Menu:c,MenuItem:j((()=>e((()=>import("./DropMenuItem.e8f23b33.js")),["assets/DropMenuItem.e8f23b33.js","assets/vendor.6c85a7e8.js","assets/vendor.28697ba9.css","assets/index.ff0c7c7a.js","assets/index.5d092154.css"]))),MenuDivider:c.Divider,LockAction:j((()=>e((()=>import("./LockModal.edac91a1.js")),["assets/LockModal.edac91a1.js","assets/LockModal.0068f88c.css","assets/index.236716d4.css","assets/index.ccc15a38.css","assets/index.35b5cf30.css","assets/index.7959f7e6.css","assets/index.c4896195.css","assets/index.553174f4.css","assets/index.317f90e2.css","assets/index.ff0c7c7a.js","assets/index.5d092154.css","assets/vendor.6c85a7e8.js","assets/vendor.28697ba9.css","assets/index.fd14b368.js","assets/index.b3b32c91.css","assets/useWindowSizeFn.96fdc5eb.js","assets/useForm.42c1abf2.js","assets/useForm.7b0022dd.css","assets/index.0b4a2568.js","assets/index.7b8b5e30.css","assets/download.b8a21dcd.js","assets/index.3651348e.js","assets/index.ea37bad1.css","assets/lock.527f5c32.js","assets/header.d801b988.js"])))},props:{theme:o.oneOf(["dark","light"])},setup(){const{prefixCls:e}=a("header-user-dropdown"),{t:o}=s(),{getShowDoc:n,getUseLockPage:i}=C(),c=t(),d=l((()=>{const{realName:e="",avatar:o,desc:a}=c.getUserInfo||{};return{realName:e,avatar:o||v,desc:a}})),[p,{openModal:m}]=L();return{prefixCls:e,t:o,getUserInfo:d,handleMenuClick:function(e){switch(e.key){case"logout":c.confirmLoginOut();break;case"doc":r(D);break;case"lock":m(!0)}},getShowDoc:n,register:p,getUseLockPage:i}}});const I=["src"];y.render=function(e,o,a,t,s,r){const n=d("MenuItem"),i=d("MenuDivider"),c=d("Menu"),l=d("Dropdown"),D=d("LockAction");return p(),m(w,null,[u(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:f((()=>[u(c,{onClick:e.handleMenuClick},{default:f((()=>[e.getShowDoc?(p(),g(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):k("",!0),e.getShowDoc?(p(),g(i,{key:1})):k("",!0),e.getUseLockPage?(p(),g(n,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):k("",!0),u(n,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:f((()=>[x("span",{class:h([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[x("img",{class:h(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,I),x("span",{class:h(`${e.prefixCls}__info hidden md:block`)},[x("span",{class:h([`${e.prefixCls}__name  `,"truncate"])},_(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),u(D,{onRegister:e.register},null,8,["onRegister"])],64)};export{y as default};