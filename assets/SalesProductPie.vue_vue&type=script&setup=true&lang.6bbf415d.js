import{D as a,r as e,S as t,F as i,a1 as n,a5 as o,K as r,X as s,u as l,bu as d}from"./vendor.6c85a7e8.js";/* empty css              *//* empty css              *//* empty css              */import{u}from"./useECharts.4c6b5036.js";var m=a({props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(a){const m=a,p=e(null),{setOptions:g}=u(p);return t((()=>m.loading),(()=>{m.loading||g({tooltip:{trigger:"item"},series:[{name:"访问来源",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"电子产品"},{value:310,name:"服装"},{value:274,name:"化妆品"},{value:400,name:"家居"}].sort((function(a,e){return a.value-e.value})),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return 400*Math.random()}}]})}),{immediate:!0}),(e,t)=>(i(),n(l(d),{title:"成交占比",loading:a.loading},{default:o((()=>[r("div",{ref:(a,e)=>{e.chartRef=a,p.value=a},style:s({width:a.width,height:a.height})},null,4)])),_:1},8,["loading"]))}});export{m as _};
