import{D as e,bC as t,j as a,a0 as s,F as i,G as n,K as o,L as l,w as r,a4 as d,N as p}from"./vendor.6c85a7e8.js";import{a as c}from"./index.3ce01c17.js";import{b as m}from"./index.548c918b.js";import"./index.dca6ae57.js";import"./index.8be0104a.js";import"./useWindowSizeFn.96fdc5eb.js";import"./useContentViewHeight.adc16014.js";/* empty css              */import"./useSortable.fa3ae1a5.js";import"./lock.a0972923.js";/* empty css              */var u=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=c("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:a((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});u.render=function(e,t,a,c,m,u){const f=s("Select");return i(),n("div",{class:p(e.prefixCls)},[o("span",null,l(e.title),1),r(f,d(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)},u.__scopeId="data-v-6707e46b";export{u as default};
