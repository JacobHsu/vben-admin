import{D as e,a8 as t,A as a,B as s,a0 as i,F as l,G as r,aa as n,ar as p,a1 as o,a5 as d,K as c,N as f}from"./vendor.6c85a7e8.js";import{a as u}from"./index.7bde028e.js";var m=e({name:"MenuTypePicker",components:{Tooltip:t},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=u("setting-menu-type-picker");return{prefixCls:e}}});a("data-v-3bd5c878");const y=["onClick"],x=[c("div",{class:"mix-sidebar"},null,-1)];s(),m.render=function(e,t,a,s,u,m){const _=i("Tooltip");return l(),r("div",{class:f(e.prefixCls)},[(l(!0),r(n,null,p(e.menuTypeList||[],(t=>(l(),o(_,{key:t.title,title:t.title,placement:"bottom"},{default:d((()=>[c("div",{onClick:a=>e.handler(t),class:f([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},x,10,y)])),_:2},1032,["title"])))),128))],2)},m.__scopeId="data-v-3bd5c878";export{m as default};
