import{a as e}from"./index.ff0c7c7a.js";import{b as s}from"./index.8071d3ff.js";import{D as t,bH as i,a0 as r,F as n,G as a,aa as o,ar as c,N as p,X as l,w as f}from"./vendor.6c85a7e8.js";import"./index.9ab24415.js";import"./index.7c1480c0.js";import"./useWindowSizeFn.96fdc5eb.js";import"./useContentViewHeight.c06f0644.js";/* empty css              */import"./useSortable.42ee67fa.js";import"./lock.527f5c32.js";/* empty css              */var d=t({name:"ThemeColorPicker",components:{CheckOutlined:i},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(t){const{prefixCls:i}=e("setting-theme-picker");return{prefixCls:i,handleClick:function(e){t.event&&s(t.event,e)}}}});const m=["onClick"];d.render=function(e,s,t,i,d,u){const C=r("CheckOutlined");return n(),a("div",{class:p(e.prefixCls)},[(n(!0),a(o,null,c(e.colorList||[],(s=>(n(),a("span",{key:s,onClick:t=>e.handleClick(s),class:p([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===s}]),style:l({background:s})},[f(C)],14,m)))),128))],2)};export{d as default};
