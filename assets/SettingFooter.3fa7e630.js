import{I as e,a as t,Y as a,f as s,U as o,e as n,aX as l,a6 as r,aP as c,aQ as i,h as d}from"./index.7bde028e.js";import{D as u,c8 as f,bi as g,u as p,a0 as C,F as y,G as m,w as S,a5 as k,ad as h,L as R,N as b}from"./vendor.6c85a7e8.js";var x=u({name:"SettingFooter",components:{CopyOutlined:f,RedoOutlined:g},setup(){const u=e(),{prefixCls:f}=t("setting-footer"),{t:g}=n(),{createSuccessModal:C,createMessage:y}=d(),m=a(),S=s(),k=o();return{prefixCls:f,t:g,handleCopy:function(){const{isSuccessRef:e}=l(JSON.stringify(p(k.getProjectConfig),null,2));p(e)&&C({title:g("layout.setting.operatingTitle"),content:g("layout.setting.operatingContent")})},handleResetSetting:function(){try{k.setProjectConfig(r);const{colorWeak:e,grayMode:t}=r;c(e),i(t),y.success(g("layout.setting.resetSuccess"))}catch(e){y.error(e)}},handleClearAndRedo:function(){localStorage.clear(),k.resetAllState(),u.resetState(),m.resetState(),S.resetState(),location.reload()}}}});x.render=function(e,t,a,s,o,n){const l=C("CopyOutlined"),r=C("a-button"),c=C("RedoOutlined");return y(),m("div",{class:b(e.prefixCls)},[S(r,{type:"primary",block:"",onClick:e.handleCopy},{default:k((()=>[S(l,{class:"mr-2"}),h(" "+R(e.t("layout.setting.copyBtn")),1)])),_:1},8,["onClick"]),S(r,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:k((()=>[S(c,{class:"mr-2"}),h(" "+R(e.t("common.resetText")),1)])),_:1},8,["onClick"]),S(r,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:k((()=>[S(c,{class:"mr-2"}),h(" "+R(e.t("layout.setting.clearBtn")),1)])),_:1},8,["onClick"])],2)},x.__scopeId="data-v-755ad017";export{x as default};
