import{x as e}from"./index.7bde028e.js";import{u as t}from"./useWindowSizeFn.96fdc5eb.js";import{r as n,j as i,u as o}from"./vendor.6c85a7e8.js";const r=Symbol();const a=n(0),s=n(0);function u(){return{headerHeightRef:a,footerHeightRef:s,setHeaderHeight:function(e){a.value=e},setFooterHeight:function(e){s.value=e}}}function c(){const u=n(window.innerHeight),c=n(window.innerHeight),h=i((()=>o(u)-o(a)-o(s)||0));t((()=>{u.value=window.innerHeight}),100,{immediate:!0}),e({contentHeight:h,setPageHeight:function(e){return t=this,n=null,i=function*(){c.value=e},new Promise(((e,o)=>{var r=e=>{try{s(i.next(e))}catch(t){o(t)}},a=e=>{try{s(i.throw(e))}catch(t){o(t)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,a);s((i=i.apply(t,n)).next())}));var t,n,i},pageHeight:c},r,{native:!0})}export{u as a,c as u};
