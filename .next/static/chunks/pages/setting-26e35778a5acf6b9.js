(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{8931:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting",function(){return t(9468)}])},9468:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var i=t(5893),o=t(3049),l=t.n(o),s=t(7294);function c(e){let{className:n,name:t,value:o,options:c,onChange:r}=e,[a,u]=(0,s.useState)(!1),_=(0,s.useRef)(null),d=()=>{u(e=>!e)},p=()=>{u(!1)};(0,s.useEffect)(()=>{let e=e=>{var n;let t=null===(n=_.current)||void 0===n?void 0:n.contains(e.target);t||u(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}});let h="".concat(l().input," ").concat(a?l().opened:""," ").concat(n),w=c.find(e=>e.value===o);return(0,i.jsxs)("div",{className:h,onClick:d,onBlur:p,ref:_,children:[w.label,(0,i.jsx)("p",{className:l().arrow,width:12,height:9,children:"▼"}),(0,i.jsx)("div",{className:l().options,children:c.map(e=>{let n=o===e.value,s="".concat(l().option," ").concat(n?l().selected:"");return(0,i.jsx)("div",{className:s,onClick:()=>r(t,e.value),children:e.label},e.value)})})]})}var r=t(2784),a=t(2316),u=t.n(a);function _(){let{theme:e,setTheme:n}=(0,r.Fg)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:u().title,children:"설정"}),(0,i.jsxs)("section",{className:u().section,children:[(0,i.jsx)("h2",{className:u().sectionTitle,children:"테마 설정"}),(0,i.jsx)(c,{className:u().input,name:"theme",value:e,onChange:(e,t)=>n(t),options:[{label:"라이트",value:"light"},{label:"다크",value:"dark"}]})]})]})}},3049:function(e){e.exports={input:"Dropdown_input__LYrZl",arrow:"Dropdown_arrow__szLTP",opened:"Dropdown_opened__WTUXt",options:"Dropdown_options__5Z_Pi",option:"Dropdown_option__DPYAU",selected:"Dropdown_selected__q2Ur_"}},2316:function(e){e.exports={title:"Setting_title__Yf33b",section:"Setting_section__K6sMO",sectionTitle:"Setting_sectionTitle__ug0Gv",input:"Setting_input__H15PU"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8931)}),_N_E=e.O()}]);