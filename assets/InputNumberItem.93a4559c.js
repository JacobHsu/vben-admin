import{D as e,bB as s,a0 as t,F as n,G as a,K as i,L as r,w as o,a4 as p,N as m}from"./vendor.6c85a7e8.js";/* empty css              */import{a as d}from"./index.7bde028e.js";import{b as u}from"./index.94a755a0.js";import"./index.15c9a931.js";import"./index.d80d79b7.js";import"./useWindowSizeFn.96fdc5eb.js";import"./useContentViewHeight.cc556090.js";/* empty css              */import"./useSortable.bc5bea53.js";import"./lock.86e14a3a.js";/* empty css              */var l=e({name:"InputNumberItem",components:{InputNumber:s},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:s}=d("setting-input-number-item");return{prefixCls:s,handleChange:function(s){e.event&&u(e.event,s)}}}});l.render=function(e,s,d,u,l,c){const b=t("InputNumber");return n(),a("div",{class:m(e.prefixCls)},[i("span",null,r(e.title),1),o(b,p(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)},l.__scopeId="data-v-2dfafc16";export{l as default};