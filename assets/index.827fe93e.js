import{D as t,bv as e,bx as a,c4 as i,bl as s,r as l,j as o,u as r,S as n,A as p,B as c,a0 as d,F as m,a1 as g,a5 as u,G as y,ar as v,w as b,K as h,X as k,ad as f,L as j,ac as C,aa as w,N as x,ao as D,c5 as G,bj as T,bN as S}from"./vendor.6c85a7e8.js";/* empty css              *//* empty css              */import{a as z,ab as N,h as P}from"./index.7bde028e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */const B=[{key:"1",name:"通知",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"你收到了 14 份新周报",description:"",datetime:"2017-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"你推荐的 曲妮妮 已通过第三轮面试",description:"",datetime:"2017-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"这种模板可以区分多种通知类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"标题可以设置自动显示省略号，本例中标题行数已设为1行，如果内容超过1行将自动截断并支持tooltip显示完整标题。",description:"",datetime:"2017-08-07",type:"1"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000009",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000010",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"}]},{key:"2",name:"消息",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",description:"描述信息描述信息描述信息",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"朱偏右 回复了你",description:"这种模板用于提醒谁与你发生了互动",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"标题",description:"请将鼠标移动到此处，以便测试超长的消息在此处将如何处理。本例中设置的描述最大行数为2，超过2行的描述内容将被省略并且可以通过tooltip查看完整内容",datetime:"2017-08-07",type:"2",clickClose:!0}]},{key:"3",name:"待办",list:[{id:"000000009",avatar:"",title:"任务名称",description:"任务需要在 2017-01-12 20:00 前启动",datetime:"",extra:"未开始",color:"",type:"3"},{id:"000000010",avatar:"",title:"第三方紧急代码变更",description:"冠霖 需在 2017-01-07 前完成代码变更任务",datetime:"",extra:"马上到期",color:"red",type:"3"},{id:"000000011",avatar:"",title:"信息安全考试",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"已耗时 8 天",color:"gold",type:"3"},{id:"000000012",avatar:"",title:"ABCD 版本发布",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"进行中",color:"blue",type:"3"}]}];var O=t({components:{[e.name]:e,[a.name]:a,[a.Item.name]:a.Item,AListItemMeta:a.Item.Meta,ATypographyParagraph:i.Paragraph,[s.name]:s},props:{list:{type:Array,default:()=>[]},pageSize:{type:[Boolean,Number],default:5},currentPage:{type:Number,default:1},titleRows:{type:Number,default:1},descRows:{type:Number,default:2},onTitleClick:{type:Function}},emits:["update:currentPage"],setup(t,{emit:e}){const{prefixCls:a}=z("header-notify-list"),i=l(t.currentPage||1),s=o((()=>{const{pageSize:e,list:a}=t;if(!1===e)return[];let s=N(e)?e:5;return a.slice(s*(r(i)-1),s*r(i))}));n((()=>t.currentPage),(t=>{i.value=t}));const p=o((()=>!!t.onTitleClick));return{prefixCls:a,getPagination:o((()=>{const{list:a,pageSize:s}=t;return!!(s>0&&a&&a.length>s)&&{total:a.length,pageSize:s,current:r(i),onChange(t){i.value=t,e("update:currentPage",t)}}})),getData:s,handleTitleClick:function(e){t.onTitleClick&&t.onTitleClick(e)},isTitleClickable:p}}});p("data-v-313258aa");const _={class:"title"},F={key:0,class:"extra"},K={key:1},A={key:0,class:"description"},R={class:"datetime"};c(),O.render=function(t,e,a,i,s,l){const o=d("a-typography-paragraph"),r=d("a-tag"),n=d("a-avatar"),p=d("a-list-item-meta"),c=d("a-list-item"),D=d("a-list");return m(),g(D,{class:x(t.prefixCls),bordered:"",pagination:t.getPagination},{default:u((()=>[(m(!0),y(w,null,v(t.getData,(e=>(m(),g(c,{key:e.id,class:"list-item"},{default:u((()=>[b(p,null,{title:u((()=>[h("div",_,[b(o,{onClick:a=>t.handleTitleClick(e),style:k([{width:"100%","margin-bottom":"0 !important"},{cursor:t.isTitleClickable?"pointer":""}]),delete:!!e.titleDelete,ellipsis:!!(t.$props.titleRows&&t.$props.titleRows>0)&&{rows:t.$props.titleRows,tooltip:!!e.title},content:e.title},null,8,["onClick","style","delete","ellipsis","content"]),e.extra?(m(),y("div",F,[b(r,{class:"tag",color:e.color},{default:u((()=>[f(j(e.extra),1)])),_:2},1032,["color"])])):C("",!0)])])),avatar:u((()=>[e.avatar?(m(),g(n,{key:0,class:"avatar",src:e.avatar},null,8,["src"])):(m(),y("span",K,j(e.avatar),1))])),description:u((()=>[h("div",null,[e.description?(m(),y("div",A,[b(o,{style:{width:"100%","margin-bottom":"0 !important"},ellipsis:!!(t.$props.descRows&&t.$props.descRows>0)&&{rows:t.$props.descRows,tooltip:!!e.description},content:e.description},null,8,["ellipsis","content"])])):C("",!0),h("div",R,j(e.datetime),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["class","pagination"])},O.__scopeId="data-v-313258aa";var q=t({components:{Popover:D,BellOutlined:G,Tabs:T,TabPane:T.TabPane,Badge:S,NoticeList:O},setup(){const{prefixCls:t}=z("header-notify"),{createMessage:e}=P();return{prefixCls:t,listData:l(B),count:o((()=>{let t=0;for(let e=0;e<B.length;e++)t+=B[e].list.length;return t})),onNoticeClick:function(t){e.success("你点击了通知，ID="+t.id),t.titleDelete=!t.titleDelete},numberStyle:{}}}});const I={key:0};q.render=function(t,e,a,i,s,l){const o=d("BellOutlined"),r=d("Badge"),n=d("NoticeList"),p=d("TabPane"),c=d("Tabs"),h=d("Popover");return m(),y("div",{class:x(t.prefixCls)},[b(h,{title:"",trigger:"click",overlayClassName:`${t.prefixCls}__overlay`},{content:u((()=>[b(c,null,{default:u((()=>[(m(!0),y(w,null,v(t.listData,(e=>(m(),g(p,{key:e.key},{tab:u((()=>[f(j(e.name)+" ",1),0!==e.list.length?(m(),y("span",I,"("+j(e.list.length)+")",1)):C("",!0)])),default:u((()=>["1"===e.key?(m(),g(n,{key:0,list:e.list,onTitleClick:t.onNoticeClick},null,8,["list","onTitleClick"])):(m(),g(n,{key:1,list:e.list},null,8,["list"]))])),_:2},1024)))),128))])),_:1})])),default:u((()=>[b(r,{count:t.count,dot:"",numberStyle:t.numberStyle},{default:u((()=>[b(o)])),_:1},8,["count","numberStyle"])])),_:1},8,["overlayClassName"])],2)};export{q as default};
