(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6004)}])},8943:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),o=n(522),l=n.n(o);function u(e){let{className:t="",page:n=!1,children:o}=e,u="".concat(l().container," ").concat(n?l().page:""," ").concat(t);return(0,r.jsx)("div",{className:u,children:o})}},5221:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),o=n(1664),l=n.n(o),u=n(6951),a=n.n(u),c=n(8943);function i(){return(0,r.jsx)("header",{className:a().header,children:(0,r.jsxs)(c.Z,{className:a().container,children:[(0,r.jsx)(l(),{className:a().logo,href:"/",children:"codietmall"}),(0,r.jsx)(l(),{className:a().setting,href:"/setting",children:"설정"})]})})}},2784:function(e,t,n){"use strict";n.d(t,{Fg:function(){return a},f6:function(){return u}});var r=n(5893),o=n(7294);let l=(0,o.createContext)(),u=e=>{let{children:t}=e,[n,u]=(0,o.useState)("dark");return(0,o.useEffect)(()=>(document.body.classList.add(n),()=>{document.body.classList.remove(n)}),[n]),(0,r.jsx)(l.Provider,{value:{theme:n,setTheme:u},children:t})},a=()=>{let e=(0,o.useContext)(l);if(!e)throw Error("ThemeContext 안에서 써야 합니다.");return e}},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),u=n(4532),a=n(3353),c=n(1410),i=n(9064),f=n(370),s=n(9955),d=n(4224),p=n(508),h=n(1516),v=n(4266);let _=new Set;function y(e,t,n,r,o){if(o||a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(_.has(l))return;_.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function b(e){return"string"==typeof e?e:c.formatUrl(e)}let g=l.default.forwardRef(function(e,t){let n,r;let{href:c,as:_,children:g,prefetch:m,passHref:j,replace:x,shallow:C,scroll:E,locale:M,onClick:k,onMouseEnter:P,onTouchStart:O,legacyBehavior:w=!1}=e,L=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,w&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let N=!1!==m,T=l.default.useContext(s.RouterContext),I=l.default.useContext(d.AppRouterContext),R=null!=T?T:I,S=!T,{href:Z,as:H}=l.default.useMemo(()=>{if(!T){let e=b(c);return{href:e,as:_?b(_):e}}let[e,t]=u.resolveHref(T,c,!0);return{href:e,as:_?u.resolveHref(T,_):t||e}},[T,c,_]),U=l.default.useRef(Z),A=l.default.useRef(H);w&&(r=l.default.Children.only(n));let D=w?r&&"object"==typeof r&&r.ref:t,[K,B,q]=p.useIntersection({rootMargin:"200px"}),X=l.default.useCallback(e=>{(A.current!==H||U.current!==Z)&&(q(),A.current=H,U.current=Z),K(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[H,D,Z,q,K]);l.default.useEffect(()=>{R&&B&&N&&y(R,Z,H,{locale:M},S)},[H,Z,B,M,N,null==T?void 0:T.locale,R,S]);let z={ref:X,onClick(e){w||"function"!=typeof k||k(e),w&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,r,o,u,c,i,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:i,scroll:c}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};f?l.default.startTransition(h):h()}(e,R,Z,H,x,C,E,M,S,N)},onMouseEnter(e){w||"function"!=typeof P||P(e),w&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(N||!S)&&y(R,Z,H,{locale:M,priority:!0,bypassPrefetchedCheck:!0},S)},onTouchStart(e){w||"function"!=typeof O||O(e),w&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(N||!S)&&y(R,Z,H,{locale:M,priority:!0,bypassPrefetchedCheck:!0},S)}};if(i.isAbsoluteUrl(H))z.href=H;else if(!w||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==M?M:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&h.getDomainLocale(H,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);z.href=t||v.addBasePath(f.addLocale(H,e,null==T?void 0:T.defaultLocale))}return w?l.default.cloneElement(r,z):l.default.createElement("a",Object.assign({},L,z),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,i=c||!l,[f,s]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(i||f)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!f){let e=o.requestIdleCallback(()=>s(!0));return()=>o.cancelIdleCallback(e)}},[i,n,t,f,d.current]);let h=r.useCallback(()=>{s(!1)},[]);return[p,f,h]};var r=n(7294),o=n(29);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6004:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893),o=n(8943),l=n(5221),u=n(2784);function a(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(u.f6,{children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(t,{...n})})]})}n(5488)},5488:function(){},522:function(e){e.exports={container:"Container_container__e2It7",page:"Container_page__f4lp3"}},6951:function(e){e.exports={header:"Header_header__l1qoc",container:"Header_container__2E6BT"}},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);