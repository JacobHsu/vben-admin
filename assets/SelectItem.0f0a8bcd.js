import{D as e,bC as t,j as s,a0 as a,F as i,G as n,K as o,L as l,w as r,a4 as d,N as p}from"./vendor.6c85a7e8.js";import{a as m}from"./index.7bde028e.js";import{b as u}from"./index.94a755a0.js";import"./index.15c9a931.js";import"./index.d80d79b7.js";import"./useWindowSizeFn.96fdc5eb.js";import"./useContentViewHeight.cc556090.js";/* empty css              */import"./useSortable.bc5bea53.js";import"./lock.86e14a3a.js";/* empty css              */var c=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=m("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&u(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});c.render=function(e,t,s,m,u,c){const f=a("Select");return i(),n("div",{class:p(e.prefixCls)},[o("span",null,l(e.title),1),r(f,d(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)},c.__scopeId="data-v-6707e46b";export{c as default};
