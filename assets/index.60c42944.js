import{D as o,aT as e,c1 as t,a as s,r as a,j as n,u as r,A as i,B as l,a0 as u,F as d,a1 as c,a5 as f,K as p,L as m,w as F,N as _,ac as C}from"./vendor.6c85a7e8.js";import{D as h,G as v,S as w}from"./siteSetting.c485f07c.js";import{O as L,a as g,o as R,e as y}from"./index.7bde028e.js";import{a as S}from"./useContentViewHeight.cc556090.js";import"./useWindowSizeFn.96fdc5eb.js";var U=o({name:"LayoutFooter",components:{Footer:e.Footer,GithubFilled:t},setup(){const{t:o}=y(),{getShowFooter:e}=L(),{currentRoute:t}=s(),{prefixCls:i}=g("layout-footer"),l=a(null),{setFooterHeight:u}=S();return{getShowLayoutFooter:n((()=>{var o,s;if(r(e)){const e=null==(o=r(l))?void 0:o.$el;u((null==e?void 0:e.offsetHeight)||0)}else u(0);return r(e)&&!(null==(s=r(t).meta)?void 0:s.hiddenFooter)})),prefixCls:i,t:o,DOC_URL:h,GITHUB_URL:v,SITE_URL:w,openWindow:R,footerRef:l}}});i("data-v-62583d60");const x=p("div",null,"Copyright ©2020 Vben Admin",-1);l(),U.render=function(o,e,t,s,a,n){const r=u("GithubFilled"),i=u("Footer");return o.getShowLayoutFooter?(d(),c(i,{key:0,class:_(o.prefixCls),ref:"footerRef"},{default:f((()=>[p("div",{class:_(`${o.prefixCls}__links`)},[p("a",{onClick:e[0]||(e[0]=e=>o.openWindow(o.SITE_URL))},m(o.t("layout.footer.onlinePreview")),1),F(r,{onClick:e[1]||(e[1]=e=>o.openWindow(o.GITHUB_URL)),class:_(`${o.prefixCls}__github`)},null,8,["class"]),p("a",{onClick:e[2]||(e[2]=e=>o.openWindow(o.DOC_URL))},m(o.t("layout.footer.onlineDocument")),1)],2),x])),_:1},8,["class"])):C("",!0)},U.__scopeId="data-v-62583d60";export{U as default};