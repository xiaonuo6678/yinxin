"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3189,4103],{72834:function(J,R,n){var y=n(31108),v=n(85893);R.Z=function(){var $=(0,y.useIntl)(),O=$.formatMessage;return(0,v.jsxs)("div",{className:"my-[50px] text-center flex items-center justify-center flex-col",children:[(0,v.jsx)("img",{src:n(17325),className:"w-[137px]",alt:""}),(0,v.jsxs)("span",{className:"text-[13px]  text-[var(--color9)] mt-[20px]",children:["--",O({id:"lg_5"}),"--"]})]})}},18154:function(J,R,n){n.r(R),n.d(R,{default:function(){return ne}});var y=n(15009),v=n.n(y),$=n(99289),O=n.n($),Q=n(5574),b=n.n(Q),W=n(81276),A=n(56406),i=n(67294),j=n(31108),g=n(93742),x=n(66877),c=n(45859),m=n(72834),C=n(19515),e=n(85893),M=[{label:"lg_26",value:"expand"},{label:"lg_27",value:"append"}],u=function(a){var r,l=a.contractOrderId,s=(0,j.useIntl)(),d=s.formatMessage,f=(0,i.useState)(M[0].value),h=b()(f,2),p=h[0],P=h[1],o=(0,i.useState)([]),t=b()(o,2),D=t[0],I=t[1],E=function(){var N=O()(v()().mark(function _(B,z){var S;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(z!=="append"){T.next=6;break}return T.next=3,(0,x.av)({data:{contractOrderId:B}});case 3:S=T.sent,T.next=9;break;case 6:return T.next=8,(0,x.zY)({data:{contractOrderId:B}});case 8:S=T.sent;case 9:I(S.data||[]);case 10:case"end":return T.stop()}},_)}));return function(B,z){return N.apply(this,arguments)}}();return(0,i.useEffect)(function(){E(l,p)},[p,l]),(0,e.jsxs)("div",{className:"mt-[12px] px-[11px]",children:[(0,e.jsx)("div",{className:"flex items-center h-[33px] space-x-[24px]",children:M.map(function(N){return(0,e.jsx)("span",{className:"text-[15px] ".concat(p===N.value?"text-[var(--color6)] font-bold":" text-[var(--color4)]"," "),onClick:function(B){return P(N.value)},children:d({id:N.label})},N.value)})}),(0,e.jsxs)("div",{className:"h-[53px] flex items-center w-full text-[15px] text-[var(--color4)] font-bold border-b-[1px] border-[#f3f3f3]",children:[(0,e.jsx)("div",{className:" flex-1",children:d({id:"lg_28"})}),(0,e.jsx)("div",{className:" flex-1 text-center",children:d({id:(r=M.find(function(N){return N.value===p}))===null||r===void 0?void 0:r.label})}),(0,e.jsx)("div",{className:" flex-1 text-right",children:d({id:"lg_29"})})]}),D.length?(0,e.jsx)("ul",{className:"mt-[8px]",children:D.map(function(N,_){return(0,e.jsxs)("div",{className:"h-[53px] flex items-center w-full text-[15px] text-[var(--color6)]  border-b-[1px] border-[#f3f3f3]",children:[(0,e.jsx)("div",{className:" flex-1",children:_+1}),(0,e.jsx)("div",{className:" flex-1 text-center",children:p=="expand"?N.marginAmount:N.lossesAmount}),(0,e.jsx)("div",{className:" flex-1 text-right",children:(0,C.zd)(N.addTime,"yyyy-MM-dd")})]},N.id)})}):(0,e.jsx)(m.Z,{})]})},L=u,w=n(80987),K,H=function(a){var r=a.contractOrderId,l=(0,j.useIntl)(),s=l.formatMessage,d=(0,i.useState)([]),f=b()(d,2),h=f[0],p=f[1],P=function(){var o=O()(v()().mark(function t(D){var I,E;return v()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,w.V_)({data:{contractOrderId:D}});case 2:I=_.sent,E=I.data,p(E||[]);case 5:case"end":return _.stop()}},t)}));return function(D){return o.apply(this,arguments)}}();return(0,i.useEffect)(function(){return r&&(P(r),K&&clearInterval(K),K=setInterval(function(){return P(r)},1e4)),function(){K&&clearInterval(K)}},[r]),(0,e.jsxs)("div",{className:"mt-[10px]",children:[(0,e.jsxs)("div",{className:"min-h-[33px] py-[2px]  flex items-center w-full text-[14px] text-[var(--color6)] border-b-[1px] border-[#f3f3f3]",children:[(0,e.jsx)("div",{className:" flex-1 text-center",children:s({id:"lg_13"})}),(0,e.jsx)("div",{className:" flex-1 text-center",children:s({id:"lg_30"})}),(0,e.jsx)("div",{className:" flex-1 text-center",children:s({id:"lg_31"})}),(0,e.jsx)("div",{className:" flex-1 text-center",children:s({id:"lg_32"})})]}),h.length?(0,e.jsx)("ul",{className:"mt-[8px]",children:h.map(function(o){return(0,e.jsxs)("div",{className:" min-h-[67px] flex items-center w-full text-[15px] text-[var(--color6)] ",children:[(0,e.jsxs)("div",{onClick:function(){o!=null&&o.stockCode&&j.history.push("/quotes/kline?stockCode=".concat(o==null?void 0:o.stockCode))},className:" flex-1 text-center py-[5px] space-y-[3px]",children:[(0,e.jsx)("div",{className:"  leading-[22px] text-[16px] font-bold",children:o.stockName}),(0,e.jsx)("div",{className:"flex items-center space-x-[3px] justify-center",children:(0,e.jsx)("span",{className:"text-[13px] text-[var(--color4)]",children:o.stockCode})})]}),(0,e.jsxs)("div",{className:" flex-1 text-center",children:[o.curPrice,"/",(0,e.jsxs)("span",{className:"text-[#fb5949]",children:[o.increaseRadius||0,"%"]})]}),(0,e.jsxs)("div",{className:" flex-1 text-center",children:[o.buyAmount,"/",(0,e.jsx)("span",{className:"text-[#fb5949]",children:o.profit})]}),(0,e.jsxs)("div",{className:" flex-1 text-center",children:[(o.buyNum*o.buyPrice).toFixed(2),"/",o.buyNum]})]},o.id)})}):(0,e.jsx)(m.Z,{})]})},G=H,F=function(a){var r=a.contractOrderId,l=(0,j.useIntl)(),s=l.formatMessage,d=(0,i.useState)([]),f=b()(d,2),h=f[0],p=f[1],P=function(){var o=O()(v()().mark(function t(D){var I,E;return v()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,w.s)({data:{contractOrderId:D,status:w.YL.TRADE_STATUS_SUCCESS}});case 2:I=_.sent,E=I.data,p(E||[]);case 5:case"end":return _.stop()}},t)}));return function(D){return o.apply(this,arguments)}}();return(0,i.useEffect)(function(){r&&P(r)},[r]),(0,e.jsxs)("div",{className:"mt-[10px]",children:[(0,e.jsxs)("div",{className:"min-h-[33px] py-[2px] flex items-center w-full text-[14px] text-[var(--color6)] border-b-[1px] border-[#f3f3f3]",children:[(0,e.jsx)("div",{className:" flex-1 text-center",children:s({id:"lg_13"})}),(0,e.jsx)("div",{className:" flex-1 text-center",children:s({id:"lg_14"})}),(0,e.jsx)("div",{className:" flex-1 text-center",children:s({id:"lg_15"})}),(0,e.jsx)("div",{className:" flex-1 text-center",children:s({id:"lg_16"})})]}),h.length?(0,e.jsx)("ul",{className:"mt-[8px]",children:h.map(function(o){return(0,e.jsxs)("div",{className:" min-h-[67px] flex items-center w-full text-[15px] text-[var(--color6)] ",children:[(0,e.jsxs)("div",{className:" flex-1 text-center py-[5px] space-y-[3px]",children:[(0,e.jsx)("div",{className:"  leading-[22px] text-[16px] font-bold",children:o.stockName}),(0,e.jsx)("div",{className:"flex items-center space-x-[3px] justify-center",children:(0,e.jsx)("span",{className:"text-[13px] text-[var(--color4)]",children:o.stockCode})})]}),(0,e.jsxs)("div",{className:" flex-1 text-center",children:[o.price,"/",(0,e.jsxs)("span",{children:[s({id:o.tradeType=="TRADE_TYPE_BUY"?"lg_17":"lg_18"})," "]})]}),(0,e.jsxs)("div",{className:" flex-1 text-center",children:[o.num,"/",(0,e.jsxs)("span",{className:"text-[#fb5949]",children:[(o.price*o.num/1e4).toFixed(2),"\u4E07"]})]}),(0,e.jsxs)("div",{className:" flex-1 text-center",children:[(0,e.jsx)("div",{className:"text-[var(--color6)] font-bold h-[22px] leading-[1]",children:(0,C.zd)(o.endTime,"hh:mm:ss")}),(0,e.jsx)("div",{className:"h-[22px] text-[13px]  text-[var(--color4)] leading-[1]",children:(0,C.zd)(o.endTime,"yyyy-MM-dd")})]})]},o.id)})}):(0,e.jsx)(m.Z,{})]})},te=F,Z=n(72666),se=function(a){var r=a.contractOrderId,l=(0,j.useIntl)(),s=l.formatMessage,d=(0,i.useState)(!1),f=b()(d,2),h=f[0],p=f[1],P=(0,i.useState)(),o=b()(P,2),t=o[0],D=o[1],I=(0,i.useState)([]),E=b()(I,2),N=E[0],_=E[1],B=function(){var S=O()(v()().mark(function k(T){var q,le;return v()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return ee.next=2,(0,w.s)({data:{contractOrderId:T}});case 2:q=ee.sent,le=q.data,_(le||[]);case 5:case"end":return ee.stop()}},k)}));return function(T){return S.apply(this,arguments)}}();(0,i.useEffect)(function(){r&&B(r)},[r]);var z=function(k,T){switch(k){case w.YL.TRADE_STATUS_SUCCESS:return(0,e.jsx)("span",{className:"text-[var(--theme-color)]",children:s({id:"lg_19"})});case w.YL.TRADE_STATUS_FAIL:return(0,e.jsx)("span",{className:"text-[var(--color6)]",children:s({id:"lg_20"})});case w.YL.TRADE_STATUS_WAIT:return(0,e.jsx)("span",{onClick:function(){D(T),p(!0)},className:"text-white bg-[#f90] px-[14px] cursor-pointer py-[4px] rounded-[3px]",children:s({id:"lg_21"})})}};return(0,e.jsxs)("div",{className:"mt-[10px]",children:[(0,e.jsxs)("div",{className:"min-h-[33px] py-[2px]  flex items-center w-full text-[14px] text-[var(--color6)] border-b-[1px] border-[#f3f3f3]",children:[(0,e.jsx)("div",{className:" flex-1 text-center",children:s({id:"lg_22"})}),(0,e.jsx)("div",{className:" flex-1 text-center",children:s({id:"lg_23"})}),(0,e.jsx)("div",{className:" flex-1 text-center",children:s({id:"lg_24"})}),(0,e.jsx)("div",{className:" flex-1 text-center",children:s({id:"lg_25"})})]}),N.length?(0,e.jsx)("ul",{className:"mt-[8px]",children:N.map(function(S){return(0,e.jsxs)("div",{className:" min-h-[67px] flex items-center w-full text-[15px] text-[var(--color6)] ",children:[(0,e.jsxs)("div",{className:" flex-1 text-center py-[5px] space-y-[3px]",children:[(0,e.jsx)("div",{className:"  leading-[22px] text-[16px] font-bold",children:S.stockName}),(0,e.jsx)("div",{className:"flex items-center space-x-[3px] justify-center",children:(0,e.jsx)("span",{className:"text-[13px] text-[var(--color4)]",children:S.stockCode})})]}),(0,e.jsxs)("div",{className:" flex-1 text-center",children:[S.price,"/",(0,e.jsx)("span",{children:s({id:S.tradeType=="TRADE_TYPE_BUY"?"lg_17":"lg_18"})})]}),(0,e.jsxs)("div",{className:" flex-1 text-center",children:[S.num,"/",(0,e.jsx)("span",{children:(S.num*S.price).toFixed(0)})]}),(0,e.jsx)("div",{className:" flex-1 text-center ",children:z(S.tradeStatus,S.id)})]},S.id)})}):(0,e.jsx)(m.Z,{}),(0,e.jsx)(Z.h,{visible:h,setVisible:function(){var S=O()(v()().mark(function k(T,q){return v()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:p(T),q=="confirm"&&B(r);case 2:case"end":return re.stop()}},k)}));return function(k,T){return S.apply(this,arguments)}}(),applyId:t})]})},U=se,Y=[{title:"lg_33",key:"position"},{title:"lg_34",key:"funds"},{title:"lg_35",key:"cj"},{title:"lg_36",key:"entrust"}],ae=function(){var a,r=(0,j.useIntl)(),l=r.formatMessage,s=(0,i.useState)(Y[0].key),d=b()(s,2),f=d[0],h=d[1],p=g.Z.parse(j.history.location.search),P=(0,i.useState)(),o=b()(P,2),t=o[0],D=o[1],I=function(){var E=O()(v()().mark(function N(_){var B,z;return v()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,(0,x.f)({data:{contractOrderId:_}});case 2:B=k.sent,z=B.data,D(z||{});case 5:case"end":return k.stop()}},N)}));return function(_){return E.apply(this,arguments)}}();return(0,i.useEffect)(function(){p!=null&&p.id&&I(p==null?void 0:p.id)},[p==null?void 0:p.id]),(0,e.jsxs)("div",{children:[(0,e.jsx)(W.Z,{title:l({id:"lg_37"})}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"mt-[8px] p-[11px] pt-0 bg-white",children:[(0,e.jsxs)("p",{className:"min-h-[56px] leading-[24px] text-[16px] font-bold border-b-[1px] border-[#f3f3f3]",children:[" ",l({id:((a=c.typeList.find(function(E){return E.key===((t==null?void 0:t.contractType)||"")}))===null||a===void 0?void 0:a.subName)||"lg_52"})," ",l({id:"lg_39"},{value:(t==null?void 0:t.lever)||1})," [",t==null?void 0:t.id,"]"]}),(0,e.jsxs)("ul",{className:"flex  flex-wrap mt-[8px] mb-0 ",children:[(0,e.jsxs)("li",{className:"w-[25%] flex space-y-[6px] flex-col items-center text-[14px] py-[7px]",children:[(0,e.jsx)("span",{className:" font-bold text-[var(--theme-color)]",children:(t==null?void 0:t.totalAmount)||0}),(0,e.jsx)("span",{className:"text-[var(--color)] text-center",children:l({id:"lg_38"})})]}),(0,e.jsxs)("li",{className:"w-[25%] flex space-y-[6px] flex-col items-center text-[14px] py-[7px]",children:[(0,e.jsx)("span",{className:" font-bold text-[var(--theme-color)]",children:(t==null?void 0:t.fundingAmount)||0}),(0,e.jsx)("span",{className:"text-[var(--color)] text-center",children:l({id:"lg_40"})})]}),(0,e.jsxs)("li",{className:"w-[25%] flex space-y-[6px] flex-col items-center text-[14px] py-[7px]",children:[(0,e.jsx)("span",{className:" font-bold text-[var(--theme-color)]",children:(t==null?void 0:t.warningAmount)||0}),(0,e.jsx)("span",{className:"text-[var(--color)] text-center",children:l({id:"lg_41"})})]}),(0,e.jsxs)("li",{className:"w-[25%] flex space-y-[6px] flex-col items-center text-[14px] py-[7px]",children:[(0,e.jsx)("span",{className:" font-bold text-[var(--theme-color)]",children:(t==null?void 0:t.closingAmount)||0}),(0,e.jsx)("span",{className:"text-[var(--color)] text-center",children:l({id:"lg_42"})})]}),(0,e.jsxs)("li",{className:"w-[25%] flex space-y-[6px] flex-col items-center text-[14px] py-[7px]",children:[(0,e.jsx)("span",{className:" font-bold text-[var(--theme-color)]",children:(t==null?void 0:t.marginAmount)||0}),(0,e.jsx)("span",{className:"text-[var(--color)] text-center",children:l({id:"lg_43"})})]}),(0,e.jsxs)("li",{className:"w-[25%] flex space-y-[6px] flex-col items-center text-[14px] py-[7px]",children:[(0,e.jsx)("span",{className:" font-bold text-[var(--theme-color)]",children:(t==null?void 0:t.realAmount)||0}),(0,e.jsx)("span",{className:"text-[var(--color)] text-center",children:l({id:"lg_44"})})]}),(0,e.jsxs)("li",{className:"w-[25%] flex space-y-[6px] flex-col items-center text-[14px] py-[7px]",children:[(0,e.jsx)("span",{className:" font-bold text-[var(--theme-color)]",children:(t==null?void 0:t.stockMarketCap)||0}),(0,e.jsx)("span",{className:"text-[var(--color)] text-center",children:l({id:"lg_45"})})]}),(0,e.jsxs)("li",{className:"w-[25%] flex space-y-[6px] flex-col items-center text-[14px] py-[7px]",children:[(0,e.jsx)("span",{className:" font-bold text-[var(--theme-color)]",children:(t==null?void 0:t.stockProfit)||0}),(0,e.jsx)("span",{className:"text-[var(--color)] text-center",children:l({id:"lg_46"})})]}),(0,e.jsxs)("li",{className:"w-[25%] flex space-y-[6px] flex-col items-center text-[14px] py-[7px]",children:[(0,e.jsx)("span",{className:" font-bold text-[var(--theme-color)]",children:(t==null?void 0:t.expandAmount)||0}),(0,e.jsx)("span",{className:"text-[var(--color)] text-center",children:l({id:"lg_26"})})]}),(0,e.jsxs)("li",{className:"w-[25%] flex space-y-[6px] flex-col items-center text-[14px] py-[7px]",children:[(0,e.jsx)("span",{className:" font-bold text-[var(--theme-color)]",children:(t==null?void 0:t.appendAmount)||0}),(0,e.jsx)("span",{className:"text-[var(--color)] text-center",children:l({id:"lg_47"})})]}),(0,e.jsxs)("li",{className:"w-[25%] flex space-y-[6px] flex-col items-center text-[14px] py-[7px]",children:[(0,e.jsx)("span",{className:" font-bold text-[var(--theme-color)]",children:(t==null?void 0:t.profit)||0}),(0,e.jsx)("span",{className:"text-[var(--color)] text-center",children:l({id:"lg_48"})})]}),(0,e.jsxs)("li",{className:"w-[25%] flex space-y-[6px] flex-col items-center text-[14px] py-[7px]",children:[(0,e.jsx)("span",{className:" font-bold text-[var(--theme-color)]",children:(t==null?void 0:t.totalProfit)||0}),(0,e.jsx)("span",{className:"text-[var(--color)] text-center",children:l({id:"lg_49"})})]})]})]}),(0,e.jsxs)("div",{className:"mt-[8px] bg-white flex flex-col",children:[(0,e.jsx)("div",{className:" sticky top-[0px]",children:(0,e.jsx)(A.mQ,{className:"flex-1",activeLineMode:"auto",activeKey:f,defaultActiveKey:"efficient",onChange:h,style:{"--active-line-color":"var(--theme-color)","--active-line-height":"2px","--active-title-color":"var(--theme-color)","--title-font-size":"15px"},children:Y.map(function(E){return(0,e.jsx)(A.mQ.Tab,{title:l({id:E.title})},E.key)})})}),(0,e.jsxs)("div",{className:"flex flex-col flex-1",children:[f===Y[0].key?(0,e.jsx)(G,{contractOrderId:(t==null?void 0:t.id)||""}):null,f===Y[1].key?(0,e.jsx)(L,{contractOrderId:(t==null?void 0:t.id)||""}):null,f===Y[2].key?(0,e.jsx)(te,{contractOrderId:(t==null?void 0:t.id)||""}):null,f===Y[3].key?(0,e.jsx)(U,{contractOrderId:(t==null?void 0:t.id)||""}):null]})]})]})]})},ne=ae},72666:function(J,R,n){n.d(R,{h:function(){return C}});var y=n(15009),v=n.n(y),$=n(99289),O=n.n($),Q=n(5574),b=n.n(Q),W=n(72834),A=n(80987),i=n(64141),j=n(68872),g=n(67294),x=n(31108),c=n(85893),m=function(M){var u=M.stockCode,L=(0,g.useState)([]),w=b()(L,2),K=w[0],H=w[1],G=(0,x.useIntl)(),F=G.formatMessage,te=(0,g.useState)(!1),Z=b()(te,2),se=Z[0],U=Z[1],Y=(0,g.useState)(),ae=b()(Y,2),ne=ae[0],X=ae[1],a=function(){var r=O()(v()().mark(function l(s){var d,f;return v()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,A.s)({data:{stockCode:s,status:A.YL.TRADE_STATUS_WAIT}});case 2:d=p.sent,f=d.data,H(f||[]);case 5:case"end":return p.stop()}},l)}));return function(s){return r.apply(this,arguments)}}();return(0,g.useEffect)(function(){u&&a(u)},[u]),(0,c.jsxs)("div",{children:[K.length?(0,c.jsx)("ul",{className:" space-y-[11px] mt-[11px]",children:K.map(function(r){return(0,c.jsxs)("li",{className:"p-[16px] rounded-[11px] bg-white",children:[(0,c.jsx)("div",{className:"flex items-center justify-between",children:(0,c.jsx)("span",{className:"text-[17px] text-[var(--color)]",children:r.stockName})}),(0,c.jsxs)("div",{className:"mt-[11px] items-start flex justify-between",children:[(0,c.jsxs)("div",{className:" flex text-[13px] text-[#727272] items-center space-x-[6px]",children:[(0,c.jsx)("span",{children:F({id:"lg_477"})}),(0,c.jsx)("span",{className:"text-[#f56866]",children:r.price})]}),(0,c.jsxs)("div",{className:"flex flex-col items-end",children:[(0,c.jsxs)("div",{className:" flex text-[13px] text-[#727272] items-center space-x-[6px]",children:[(0,c.jsx)("span",{children:F({id:"lg_478"})}),(0,c.jsxs)("span",{className:" text-black",children:[r.num,"/",F({id:r.tradeType=="TRADE_TYPE_BUY"?"lg_17":"lg_18"})]})]}),(0,c.jsx)("div",{onClick:function(){U(!0),X(r.id)},className:" bg-[--theme-color] rounded-full py-[6px] px-[36px] text-[15px] cursor-pointer mt-[11px] text-white",children:F({id:"lg_21"})})]})]})]},r.id)})}):(0,c.jsx)(W.Z,{}),(0,c.jsx)(C,{visible:se,setVisible:function(){var r=O()(v()().mark(function l(s,d){return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(U(s),d!="confirm"){h.next=4;break}return h.next=4,a(u);case 4:case"end":return h.stop()}},l)}));return function(l,s){return r.apply(this,arguments)}}(),applyId:ne})]})};R.Z=m;var C=function(M){var u=M.visible,L=M.setVisible,w=M.applyId,K=(0,x.useIntl)(),H=K.formatMessage;return(0,c.jsx)(i.Z,{destroyOnClose:!0,footer:!1,open:u,className:"baseModal",styles:{body:{paddingBottom:0,margin:"0 "},content:{width:"calc(100% - 32px)",margin:"0 auto",padding:"22px 22px 0",backgroundColor:"white",paddingBottom:0,borderRadius:"8px",maxHeight:"calc(var(--vh,1vh)*100)",boxShadow:"none"}},centered:!0,maskClosable:!0,onCancel:function(){return L(!1,"cancel")},closable:!1,children:(0,c.jsxs)("div",{className:" flex flex-col items-center h-full bg-white rounded-[27px]",children:[(0,c.jsx)("div",{className:" ",children:(0,c.jsx)("span",{className:"text-[22px]",children:H({id:"lg_103"})})}),(0,c.jsx)("div",{className:" w-full text-center leading-[78px] text-[#939393] text-[16px]",children:H({id:"lg_479"})}),(0,c.jsxs)("div",{className:"flex justify-between items-center w-full pb-[22px] ",children:[(0,c.jsx)("div",{className:" text-center  cursor-pointer text-[16px] w-1/2",onClick:function(F){return L(!1)},children:H({id:"lg_87"})}),(0,c.jsx)("div",{className:"text-center   cursor-pointer text-[16px] w-1/2 text-[#1fc11d]",onClick:function(){var G=O()(v()().mark(function F(te){var Z;return v()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:if(w){U.next=2;break}return U.abrupt("return");case 2:return U.next=4,(0,A.A)({data:{applyId:w}});case 4:Z=U.sent,Z.status==="SUCCESS"?(L(!1,"confirm"),j.ZP.success(Z.message)):j.ZP.error(Z.message);case 6:case"end":return U.stop()}},F)}));return function(F){return G.apply(this,arguments)}}(),children:H({id:"lg_480"})})]})]})})}},80987:function(J,R,n){n.d(R,{A:function(){return c},V_:function(){return x},YL:function(){return i},jm:function(){return g},s:function(){return j}});var y=n(15009),v=n.n(y),$=n(97857),O=n.n($),Q=n(99289),b=n.n(Q),W=n(83050),A=function(m){return m.ApplyList="/web/stock/trade/applyList",m.CreateApply="/web/stock/trade/createApply",m.HoldList="/web/stock/trade/holdList",m.RevokeApply="/web/stock/trade/revokeApply",m}({}),i=function(m){return m.TRADE_STATUS_WAIT="TRADE_STATUS_WAIT",m.TRADE_STATUS_SUCCESS="TRADE_STATUS_SUCCESS",m.TRADE_STATUS_FAIL="TRADE_STATUS_FAIL",m}({}),j=function(){var m=b()(v()().mark(function C(e){return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,W.dc)(A.ApplyList,O()({method:"POST"},e||{}));case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},C)}));return function(e){return m.apply(this,arguments)}}(),g=function(){var m=b()(v()().mark(function C(e){return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,W.dc)(A.CreateApply,O()({method:"POST"},e||{}));case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},C)}));return function(e){return m.apply(this,arguments)}}(),x=function(){var m=b()(v()().mark(function C(e){return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,W.dc)(A.HoldList,O()({method:"POST"},e||{}));case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},C)}));return function(e){return m.apply(this,arguments)}}(),c=function(){var m=b()(v()().mark(function C(e){return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,W.dc)(A.RevokeApply,O()({method:"POST"},e||{}));case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},C)}));return function(e){return m.apply(this,arguments)}}()},19515:function(J,R,n){n.d(R,{YR:function(){return b},qs:function(){return W},zd:function(){return O}});var y=n(31108),v=function(i,j){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(i!=null&&i.length){var x=i.filter(function(m){return m.code===j});if(g){var c=x.filter(function(m){return getLocale()===m.languageCode});return c!=null&&c.length?c[0]:""}return x!=null&&x.length?x[0]:""}return""},$=function(i,j){if(i!=null&&i.length){var g=0;return i.forEach(function(x,c){x.name===j&&(c===i.length-1?g=c:g=c+1)}),i[g]}return""},O=function(i){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"yyyy-MM-dd";if(!i)return"--";var g=0;typeof i=="string"?i.length===13?g=parseInt(i):g=parseInt(i+"000"):i.toString().length===13?g=i:g=i*1e3;var x=new Date(g),c=x.getFullYear(),m=x.getMonth()+1<10?"0"+(x.getMonth()+1):x.getMonth()+1,C=x.getDate()<10?"0"+x.getDate():x.getDate(),e=x.getHours()<10?"0"+x.getHours():x.getHours(),M=x.getMinutes()<10?"0"+x.getMinutes():x.getMinutes(),u=x.getSeconds()<10?"0"+x.getSeconds():x.getSeconds(),L="";switch(j){case"hh:mm:ss":L=e+":"+M+":"+u;break;case"yyyy-MM-dd":L=c+"-"+m+"-"+C;break;case"MM-dd hh:mm":L=m+"-"+C+" "+e+":"+M;break;default:L=c+"-"+m+"-"+C+" "+e+":"+M+":"+u;break}return L},Q=function(i){if(i){var j=i.toString().split("."),g=j[0],x=j[1]?"."+j[1]:"",c=/(?=(?!\b)(\d{3})+$)/g;return g.replace(c,",")+x}return 0},b=function(){for(var i=[],j="0123456789ABCDEFGH",g=0;g<36;g++)i[g]=j.substr(Math.floor(Math.random()*16),1);i[14]="4",i[19]=j.substr(i[19]&3|8,1);var x=i.join("");return x},W={"zh-CN":"zh_CN","en-US":"en","hi-IN":"hi","vi-VN":"vi"}},74627:function(J,R,n){n.d(R,{Z:function(){return X}});var y=n(67294),v=n(93967),$=n.n(v),O=n(21770),Q=n(15105);const b=a=>a?typeof a=="function"?a():a:null;var W=n(33603),A=n(96159),i=n(53124),j=n(61781),g=n(92419),x=n(14747),c=n(50438),m=n(97414),C=n(79511),e=n(8796),M=n(27036),u=n(45503);const L=a=>{const{componentCls:r,popoverColor:l,titleMinWidth:s,fontWeightStrong:d,innerPadding:f,boxShadowSecondary:h,colorTextHeading:p,borderRadiusLG:P,zIndexPopup:o,titleMarginBottom:t,colorBgElevated:D,popoverBg:I,titleBorderBottom:E,innerContentPadding:N,titlePadding:_}=a;return[{[r]:Object.assign(Object.assign({},(0,x.Wf)(a)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:o,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":D,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${r}-content`]:{position:"relative"},[`${r}-inner`]:{backgroundColor:I,backgroundClip:"padding-box",borderRadius:P,boxShadow:h,padding:f},[`${r}-title`]:{minWidth:s,marginBottom:t,color:p,fontWeight:d,borderBottom:E,padding:_},[`${r}-inner-content`]:{color:l,padding:N}})},(0,m.ZP)(a,"var(--antd-arrow-background-color)"),{[`${r}-pure`]:{position:"relative",maxWidth:"none",margin:a.sizePopupArrow,display:"inline-block",[`${r}-content`]:{display:"inline-block"}}}]},w=a=>{const{componentCls:r}=a;return{[r]:e.i.map(l=>{const s=a[`${l}6`];return{[`&${r}-${l}`]:{"--antd-arrow-background-color":s,[`${r}-inner`]:{backgroundColor:s},[`${r}-arrow`]:{background:"transparent"}}}})}},K=a=>{const{lineWidth:r,controlHeight:l,fontHeight:s,padding:d,wireframe:f,zIndexPopupBase:h,borderRadiusLG:p,marginXS:P,lineType:o,colorSplit:t,paddingSM:D}=a,I=l-s,E=I/2,N=I/2-r,_=d;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:h+30},(0,C.w)(a)),(0,m.wZ)({contentRadius:p,limitVerticalRadius:!0})),{innerPadding:f?0:12,titleMarginBottom:f?0:P,titlePadding:f?`${E}px ${_}px ${N}px`:0,titleBorderBottom:f?`${r}px ${o} ${t}`:"none",innerContentPadding:f?`${D}px ${_}px`:0})};var H=(0,M.I$)("Popover",a=>{const{colorBgElevated:r,colorText:l}=a,s=(0,u.TS)(a,{popoverBg:r,popoverColor:l});return[L(s),w(s),(0,c._y)(s,"zoom-big")]},K,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),G=function(a,r){var l={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&r.indexOf(s)<0&&(l[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(a);d<s.length;d++)r.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(a,s[d])&&(l[s[d]]=a[s[d]]);return l};const F=(a,r,l)=>!r&&!l?null:y.createElement(y.Fragment,null,r&&y.createElement("div",{className:`${a}-title`},b(r)),y.createElement("div",{className:`${a}-inner-content`},b(l))),te=a=>{const{hashId:r,prefixCls:l,className:s,style:d,placement:f="top",title:h,content:p,children:P}=a;return y.createElement("div",{className:$()(r,l,`${l}-pure`,`${l}-placement-${f}`,s),style:d},y.createElement("div",{className:`${l}-arrow`}),y.createElement(g.G,Object.assign({},a,{className:r,prefixCls:l}),P||F(l,h,p)))};var se=a=>{const{prefixCls:r,className:l}=a,s=G(a,["prefixCls","className"]),{getPrefixCls:d}=y.useContext(i.E_),f=d("popover",r),[h,p,P]=H(f);return h(y.createElement(te,Object.assign({},s,{prefixCls:f,hashId:p,className:$()(l,P)})))},U=function(a,r){var l={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&r.indexOf(s)<0&&(l[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(a);d<s.length;d++)r.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(a,s[d])&&(l[s[d]]=a[s[d]]);return l};const Y=a=>{let{title:r,content:l,prefixCls:s}=a;return y.createElement(y.Fragment,null,r&&y.createElement("div",{className:`${s}-title`},b(r)),y.createElement("div",{className:`${s}-inner-content`},b(l)))},ne=y.forwardRef((a,r)=>{var l,s;const{prefixCls:d,title:f,content:h,overlayClassName:p,placement:P="top",trigger:o="hover",children:t,mouseEnterDelay:D=.1,mouseLeaveDelay:I=.1,onOpenChange:E,overlayStyle:N={}}=a,_=U(a,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:B}=y.useContext(i.E_),z=B("popover",d),[S,k,T]=H(z),q=B(),le=$()(p,k,T),[re,ee]=(0,O.Z)(!1,{value:(l=a.open)!==null&&l!==void 0?l:a.visible,defaultValue:(s=a.defaultOpen)!==null&&s!==void 0?s:a.defaultVisible}),ce=(V,ie)=>{ee(V,!0),E==null||E(V,ie)},de=V=>{V.keyCode===Q.Z.ESC&&ce(!1,V)},ue=V=>{ce(V)};return S(y.createElement(j.Z,Object.assign({placement:P,trigger:o,mouseEnterDelay:D,mouseLeaveDelay:I,overlayStyle:N},_,{prefixCls:z,overlayClassName:le,ref:r,open:re,onOpenChange:ue,overlay:f||h?y.createElement(Y,{prefixCls:z,title:f,content:h}):null,transitionName:(0,W.m)(q,"zoom-big",_.transitionName),"data-popover-inject":!0}),(0,A.Tm)(t,{onKeyDown:V=>{var ie,oe;y.isValidElement(t)&&((oe=t==null?void 0:(ie=t.props).onKeyDown)===null||oe===void 0||oe.call(ie,V)),de(V)}})))});ne._InternalPanelDoNotUseOrYouWillBeFired=se;var X=ne},17325:function(J,R,n){J.exports=n.p+"static/kong.0ac16abc.54014650.png"}}]);
