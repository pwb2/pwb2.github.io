var x=Object.defineProperty,w=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(t,e,s)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,m=(t,e)=>{for(var s in e||(e={}))v.call(e,s)&&p(t,s,e[s]);if(f)for(var s of f(e))b.call(e,s)&&p(t,s,e[s]);return t},h=(t,e)=>w(t,y(e));import{j as g,r as a,R as N,a as k}from"./vendor.1fec0fe4.js";const S=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}};S();const n=g.exports.jsx,u=g.exports.jsxs;function C(t,e){a.exports.useEffect(()=>(window.addEventListener(t,e),()=>window.removeEventListener(t,e)))}function R({guid:t,removeWidget:e}){const[s,c]=a.exports.useState(!1),[o,l]=a.exports.useState(!1),r="#"+Math.floor(t*16777215).toString(16).padStart(6,"0"),d=a.exports.useCallback((i,W)=>(i.preventDefault(),i.shiftKey?e({guid:t}):c(!s),!1),[t,s]);return n("div",{className:`w-full h-full rounded shadow text-sm flex items-center justify-center ${s?"sm:col-span-2":""} ${o?"row-span-2":""} `,style:{backgroundColor:r},onClick:i=>d(i,"onClick"),onContextMenu:i=>{i.preventDefault(),l(!o)},children:r})}function L(){const[t,e]=a.exports.useState(4),[s,c]=a.exports.useState([]),o=r=>c(d=>[...d,r]),l=r=>c(d=>d.filter(i=>i.guid!=r.guid));return C("keypress",r=>{r.key==" "&&(r.preventDefault(),o({guid:Math.random()}))}),u("div",{className:"w-full h-full",children:[n("div",{className:"fixed bg-white bg-opacity-50 rounded shadow-lg bottom-8 left-8 backdrop-blur p-1",children:u("table",{children:[[["Space","Add Widget"],["Click","Narrow / Wide"],["Right Click","Tall / Short"],["Shift Click","Delete"]].map(([r,d])=>u("tr",{children:[n("td",{className:"text-right px-1",children:n("code",{className:"bg-white px-1 rounded-sm",children:r})}),n("td",{className:"px-1",children:d})]},r)),u("tr",{children:[n("td",{className:"text-right px-1",children:n("input",{className:"w-12 rounded px-1",type:"number",value:t,onChange:r=>e(parseInt(r.target.value,10))})}),n("td",{className:"px-1",children:"Rows"})]})]})}),n("div",{className:"bg-gradient-to-b from-pink-100 to-violet-200 w-full h-full p-4 flex flex-col",children:n("div",{style:{gridAutoRows:`calc((100% - (${t} - 1) * 0.75rem) / ${t})`},className:"w-full h-full overflow-y-auto grid content-start gap-3 grid-flow-row-dense grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4",children:s.map(r=>a.exports.createElement(R,h(m({},r),{removeWidget:l,key:r.guid})))})})]})}N.render(n(k.StrictMode,{children:n(L,{})}),document.getElementById("root"));
