"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4036],{81276:function(d,E,t){var _=t(31108),s=t(85893),g=function(o){var f=o.title,i=o.rigthDom,x=o.bgColor,v=o.black,m=v===void 0?!1:v,l=o.border,r=l===void 0?!1:l;return(0,s.jsxs)("div",{className:"".concat(r?"border-b-[1px] border-[var(--border-color)]":""," flex  w-full  flex-shrink-0 quotes  bg-[var(--theme-color)] min-h-[50px] px-[17px]  justify-between  items-center"),style:{backgroundColor:x},children:[(0,s.jsx)("div",{className:"  pr-[22px]  flex items-center justify-center cursor-pointer",onClick:function(){return _.history.back()},children:(0,s.jsx)("img",{src:t(m?88378:74645),className:"w-[24px]",alt:""})}),(0,s.jsx)("span",{className:" cursor-pointer text-[var(--color)] text-[14px]   text-right  ",children:i}),(0,s.jsx)("span",{className:"max-w-[50%] absolute left-[50%] -translate-x-[50%] font-bold  text-[#fff] text-[16px]  text-center",children:f})]})};E.Z=(0,_.connect)(function(u){return u})(g)},91629:function(d,E,t){t.r(E);var _=t(5574),s=t.n(_),g=t(81276),u=t(67294),o=t(31108),f=t(93742),i=t(85893),x=function(m){var l,r,A,C,n=m.siteConfig,e=f.Z.parse(o.history.location.search),p=(0,u.useState)(),P=s()(p,2),a=P[0],b=P[1];return(0,u.useEffect)(function(){var c;if(e!=null&&e.type&&n!==null&&n!==void 0&&(c=n.contents)!==null&&c!==void 0&&c.length){var B;b(n==null||(B=n.contents)===null||B===void 0?void 0:B.find(function(I){return I.code===(e==null?void 0:e.type)}))}},[e==null?void 0:e.type,n==null||(l=n.contents)===null||l===void 0?void 0:l.length]),(0,i.jsxs)("div",{children:[(0,i.jsx)(g.Z,{title:(a==null?void 0:a.title)||""}),(0,i.jsx)("div",{className:"py-[15px] px-[20px]  bg-white space-y-[12px]",children:a==null||(r=a.icon)===null||r===void 0||(A=r.split)===null||A===void 0||(A=A.call(r,"|"))===null||A===void 0||(C=A.map)===null||C===void 0?void 0:C.call(A,function(c){return(0,i.jsx)("img",{src:(n==null?void 0:n.staticFileSite)+c,alt:""},c)})})]})};E.default=(0,o.connect)(function(v){return v})(x)},74645:function(d){d.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAktJREFUaEPtmTFrVEEUhc+BFCksLVIEtLDQIrVNAoqKCitZ0SKQwjqokF5BBf0BgoKlhYWgkoQoUVAMaGOfYlMEFFKksLSwEI7vwiwMjxcIztyJA2+aXZZ9b79zz53Ze+8jKl+snB+9gMN2sHegdyAxAsVTSNIdAMOG+z7Jd4n8ZU8hSfcMPECPSJ6qRkAL3rifkLxdhQBJNw04gn0P4CrJ3/+9AEnzAF4DmAiw2eDtfq6bWNJFAKsAJgP8VwAXckR+7JybgA74EYA5kj9T0ya+3kWApNMAPgI4En7sO4AzJH/khHdJIUknAHwBMOUNn12ApOMAPgOwV1t7jROzJHdyRz77HuiA/wXgPMlvXvDZHJB0NKTNyQBr5/uQ5AdP+CwCJNlG3bBUKQ2fLECSne8rAC4F+D8ArpNc84588h7ogLd73iL5tBR8kgOSXlm0I1grjx+UhP9nAZJuNEfl88OGTxGwCOBFtQIMvCOF7pJ8VEUKBQFWHq9HJ5B9vEzycUkRScXcPsfoAsk3pUQkCQhO1PtHNo7yPqXEgOQnbyeSHYhETId6aFyJ1lPMRSKONY3LZquctkZm28uJbA5EIqwitZ4gbmjOkrSuLPvKLiBs7K6W0vrh3dwKXAQEEecAvI0mEvU09VE6dY1VLpO0DZ5luTkQibgG4GWVg61IRNdo8QpJa4CSlrsDkQgbqz+MaJ+RXEqi9x4ttuFaE+qtpmaaqUpAOJ3sGcGgeV/fA47UaHddX2wPeMDbPXsBXpE96H17Bw4aKa/vVe/AX5JZwDFzC85EAAAAAElFTkSuQmCC"},88378:function(d){d.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAArdJREFUaEPtmbGLE0EUxt8bTHLFpTMgScA3g8VZWNvcgaKiwoknWggW1qKCvcKdoH+AcIKlhaCgoqCigqKgjb2FFu6MOROE2OWKS0hmzBy7suRSHNmZPQcy1RbZ4fd9783kvbcIgS8MnB+mAnY6gtMITCOQ0YHcU4hzfh0Rl4bcK1EUvcrIn+8tJIRYtuAW2hjzTUq5PxgBafhYwKqU8moQAjjnlxFxNYE1xrwxxpxRSm389wKI6DRj7AkA7IqddwZv9/N6iInoOGPsOQDMxE5/1lofc+F8EjlvAkbh7aHtdrsLrVbrT9a0Sb/vRQARHWSMvQOA2ThtFAAcklL+dAnvJYXq9fq+QqHwCRH3+IZ3LoCICBE/ICLF8L/7/f782traD9fOOz8Do/AAsK61PqqU+uIL3lkEqtXq7lKpZNNmLnZ+wxizpJR66xPeiYBKpTJbLpdfA8B83vCZBRDRDCI+Q8QTsdN9ADgfRdFT385nPgNj4G2BdkVKeTcv+EwR4Jw/RsRzCazWekUpdTNP+IkFENFFxtj9nYafWIAQ4gIAPEi5bZuT3N2fWICtLDnnD9MpZIy5IaW8HUQKxZBWxIvUDQRa62tKqTt5ishUzAV9jSYuB/1HlogYV0oMBoPFRqPx3nc6ZUqhNFytVqsXi0VbD21WokEVc4kQzvneYePyMV1Ox43Md1+RcBaBBJCI5uKe4F9DY4w5rJSyXZnz5VyAJRzXUvZ6vYVms/nLtQIvAiykEOIIALxMJhJBNfWpdNoyVul0Oifb7fa6q0h4i0ACKIQ4CwCPghxspW6nLaNFKeUpALANUKblPQIpEXasfitFey+KokuZ6H2PFkfhiGiZMbY5XgeAr8PW80BQAuLbyX4jWBw+h/eBI6vb497P7Qz4gLd7TgX4cna7+04jsF2nfP0u+Aj8BfOBNUBA5VvuAAAAAElFTkSuQmCC"}}]);
