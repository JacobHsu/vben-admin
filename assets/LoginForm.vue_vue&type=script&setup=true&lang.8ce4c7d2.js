import{D as e,a_ as a,an as s,r as l,P as t,j as o,u as n,F as r,G as i,H as u,J as c,w as d,a5 as p,a$ as m,ad as g,L as f,aS as y,b0 as v,aa as x,b1 as _,b2 as h,t as w}from"./vendor.6c85a7e8.js";/* empty css              *//* empty css              *//* empty css              */import{u as b,a as k,L as S,_ as j,b as L}from"./LoginFormTitle.vue_vue&type=script&setup=true&lang.a80c5175.js";import{a as P,f as z,e as T,h as C}from"./index.7bde028e.js";var E=e({setup(e){const E=_,F=h,R=a.Item,$=s.Password,{t:D}=T(),{notification:M,createErrorModal:N}=C(),{prefixCls:U}=P("login"),G=z(),{setLoginState:I,getLoginState:K}=b(),{getFormRules:O}=k(),q=l(),A=l(!1),B=l(!1),H=t({account:"market",password:"88888888"}),{validForm:J}=L(q),W=o((()=>n(K)===S.LOGIN));function Q(){return e=this,a=null,s=function*(){const e=yield J();if(e)try{A.value=!0;const a=yield G.login(w({password:e.password,username:e.account,mode:"none"}));a&&M.success({message:D("sys.login.loginSuccessTitle"),description:`${D("sys.login.loginSuccessDesc")}: ${a.realName}`,duration:3})}catch(a){N({title:D("sys.api.errorTip"),content:a.message||D("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${U}`)||document.body})}finally{A.value=!1}},new Promise(((l,t)=>{var o=e=>{try{r(s.next(e))}catch(a){t(a)}},n=e=>{try{r(s.throw(e))}catch(a){t(a)}},r=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,n);r((s=s.apply(e,a)).next())}));var e,a,s}return(e,l)=>(r(),i(x,null,[u(d(j,{class:"enter-x"},null,512),[[c,n(W)]]),u(d(n(a),{class:"p-4 enter-x",model:n(H),rules:n(O),ref:(e,a)=>{a.formRef=e,q.value=e},onKeypress:v(Q,["enter"])},{default:p((()=>[d(n(R),{name:"account",class:"enter-x"},{default:p((()=>[d(n(s),{size:"large",value:n(H).account,"onUpdate:value":l[0]||(l[0]=e=>n(H).account=e),placeholder:n(D)("sys.login.userName"),class:"fix-auto-fill"},null,8,["value","placeholder"])])),_:1}),d(n(R),{name:"password",class:"enter-x"},{default:p((()=>[d(n($),{size:"large",visibilityToggle:"",value:n(H).password,"onUpdate:value":l[1]||(l[1]=e=>n(H).password=e),placeholder:n(D)("sys.login.password")},null,8,["value","placeholder"])])),_:1}),d(n(F),{class:"enter-x"},{default:p((()=>[d(n(E),{span:12},{default:p((()=>[d(n(R),null,{default:p((()=>[d(n(m),{checked:B.value,"onUpdate:checked":l[2]||(l[2]=e=>B.value=e),size:"small"},{default:p((()=>[g(f(n(D)("sys.login.rememberMe")),1)])),_:1},8,["checked"])])),_:1})])),_:1}),d(n(E),{span:12},{default:p((()=>[d(n(R),{style:{"text-align":"right"}},{default:p((()=>[d(n(y),{type:"link",size:"small",onClick:l[3]||(l[3]=e=>n(I)(n(S).RESET_PASSWORD))},{default:p((()=>[g(f(n(D)("sys.login.forgetPassword")),1)])),_:1})])),_:1})])),_:1})])),_:1}),d(n(R),{class:"enter-x"},{default:p((()=>[d(n(y),{type:"primary",size:"large",block:"",onClick:Q,loading:A.value},{default:p((()=>[g(f(n(D)("sys.login.loginButton")),1)])),_:1},8,["loading"])])),_:1})])),_:1},8,["model","rules","onKeypress"]),[[c,n(W)]])],64))}});export{E as _};
