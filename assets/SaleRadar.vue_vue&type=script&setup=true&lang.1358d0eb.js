import{D as a,r as t,S as e,F as s,a1 as i,a5 as o,K as r,X as d,u as l,bu as m}from"./vendor.6c85a7e8.js";/* empty css              *//* empty css              *//* empty css              */import{u as n}from"./useECharts.4c6b5036.js";var p=a({props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(a){const p=a,u=t(null),{setOptions:x}=n(u);return e((()=>p.loading),(()=>{p.loading||x({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"2017",max:100},{text:"2017",max:100},{text:"2018",max:100},{text:"2019",max:100},{text:"2020",max:100},{text:"2021",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})}),{immediate:!0}),(t,e)=>(s(),i(l(m),{title:"销售统计",loading:a.loading},{default:o((()=>[r("div",{ref:(a,t)=>{t.chartRef=a,u.value=a},style:d({width:a.width,height:a.height})},null,4)])),_:1},8,["loading"]))}});export{p as _};