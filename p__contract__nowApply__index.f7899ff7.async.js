"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4103],{74627:function(ce,j,a){a.d(j,{Z:function(){return _}});var l=a(67294),I=a(93967),P=a.n(I),W=a(21770),z=a(15105);const h=e=>e?typeof e=="function"?e():e:null;var D=a(33603),T=a(96159),$=a(53124),M=a(61781),R=a(92419),V=a(14747),Z=a(50438),S=a(97414),H=a(79511),L=a(8796),A=a(27036),F=a(45503);const G=e=>{const{componentCls:n,popoverColor:o,titleMinWidth:t,fontWeightStrong:r,innerPadding:i,boxShadowSecondary:s,colorTextHeading:d,borderRadiusLG:p,zIndexPopup:f,titleMarginBottom:v,colorBgElevated:y,popoverBg:g,titleBorderBottom:m,innerContentPadding:C,titlePadding:u}=e;return[{[n]:Object.assign(Object.assign({},(0,V.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:f,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":y,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:g,backgroundClip:"padding-box",borderRadius:p,boxShadow:s,padding:i},[`${n}-title`]:{minWidth:t,marginBottom:v,color:d,fontWeight:r,borderBottom:m,padding:u},[`${n}-inner-content`]:{color:o,padding:C}})},(0,S.ZP)(e,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},K=e=>{const{componentCls:n}=e;return{[n]:L.i.map(o=>{const t=e[`${o}6`];return{[`&${n}-${o}`]:{"--antd-arrow-background-color":t,[`${n}-inner`]:{backgroundColor:t},[`${n}-arrow`]:{background:"transparent"}}}})}},k=e=>{const{lineWidth:n,controlHeight:o,fontHeight:t,padding:r,wireframe:i,zIndexPopupBase:s,borderRadiusLG:d,marginXS:p,lineType:f,colorSplit:v,paddingSM:y}=e,g=o-t,m=g/2,C=g/2-n,u=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:s+30},(0,H.w)(e)),(0,S.wZ)({contentRadius:d,limitVerticalRadius:!0})),{innerPadding:i?0:12,titleMarginBottom:i?0:p,titlePadding:i?`${m}px ${u}px ${C}px`:0,titleBorderBottom:i?`${n}px ${f} ${v}`:"none",innerContentPadding:i?`${y}px ${u}px`:0})};var E=(0,A.I$)("Popover",e=>{const{colorBgElevated:n,colorText:o}=e,t=(0,F.TS)(e,{popoverBg:n,popoverColor:o});return[G(t),K(t),(0,Z._y)(t,"zoom-big")]},k,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),U=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const X=(e,n,o)=>!n&&!o?null:l.createElement(l.Fragment,null,n&&l.createElement("div",{className:`${e}-title`},h(n)),l.createElement("div",{className:`${e}-inner-content`},h(o))),Y=e=>{const{hashId:n,prefixCls:o,className:t,style:r,placement:i="top",title:s,content:d,children:p}=e;return l.createElement("div",{className:P()(n,o,`${o}-pure`,`${o}-placement-${i}`,t),style:r},l.createElement("div",{className:`${o}-arrow`}),l.createElement(R.G,Object.assign({},e,{className:n,prefixCls:o}),p||X(o,s,d)))};var J=e=>{const{prefixCls:n,className:o}=e,t=U(e,["prefixCls","className"]),{getPrefixCls:r}=l.useContext($.E_),i=r("popover",n),[s,d,p]=E(i);return s(l.createElement(Y,Object.assign({},t,{prefixCls:i,hashId:d,className:P()(o,p)})))},Q=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const q=e=>{let{title:n,content:o,prefixCls:t}=e;return l.createElement(l.Fragment,null,n&&l.createElement("div",{className:`${t}-title`},h(n)),l.createElement("div",{className:`${t}-inner-content`},h(o)))},B=l.forwardRef((e,n)=>{var o,t;const{prefixCls:r,title:i,content:s,overlayClassName:d,placement:p="top",trigger:f="hover",children:v,mouseEnterDelay:y=.1,mouseLeaveDelay:g=.1,onOpenChange:m,overlayStyle:C={}}=e,u=Q(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:w}=l.useContext($.E_),O=w("popover",r),[ee,te,ne]=E(O),oe=w(),re=P()(d,te,ne),[ae,le]=(0,W.Z)(!1,{value:(o=e.open)!==null&&o!==void 0?o:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),N=(c,x)=>{le(c,!0),m==null||m(c,x)},ie=c=>{c.keyCode===z.Z.ESC&&N(!1,c)},se=c=>{N(c)};return ee(l.createElement(M.Z,Object.assign({placement:p,trigger:f,mouseEnterDelay:y,mouseLeaveDelay:g,overlayStyle:C},u,{prefixCls:O,overlayClassName:re,ref:n,open:ae,onOpenChange:se,overlay:i||s?l.createElement(q,{prefixCls:O,title:i,content:s}):null,transitionName:(0,D.m)(oe,"zoom-big",u.transitionName),"data-popover-inject":!0}),(0,T.Tm)(v,{onKeyDown:c=>{var x,b;l.isValidElement(v)&&((b=v==null?void 0:(x=v.props).onKeyDown)===null||b===void 0||b.call(x,c)),ie(c)}})))});B._InternalPanelDoNotUseOrYouWillBeFired=J;var _=B}}]);
