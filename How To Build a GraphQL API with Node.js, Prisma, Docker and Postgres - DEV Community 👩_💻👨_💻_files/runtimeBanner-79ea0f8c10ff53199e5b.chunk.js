(window.webpackJsonp=window.webpackJsonp||[]).push([[49,3],{1:function(e,n,t){"use strict";t.r(n),t.d(n,"render",(function(){return N})),t.d(n,"hydrate",(function(){return R})),t.d(n,"createElement",(function(){return m})),t.d(n,"h",(function(){return m})),t.d(n,"Fragment",(function(){return g})),t.d(n,"createRef",(function(){return y})),t.d(n,"isValidElement",(function(){return _})),t.d(n,"Component",(function(){return b})),t.d(n,"cloneElement",(function(){return W})),t.d(n,"createContext",(function(){return z})),t.d(n,"toChildArray",(function(){return E})),t.d(n,"options",(function(){return l}));var o,l,r,_,i,u,c,a,s={},f=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function d(e,n){for(var t in n)e[t]=n[t];return e}function h(e){var n=e.parentNode;n&&n.removeChild(e)}function m(e,n,t){var l,r,_,i={};for(_ in n)"key"==_?l=n[_]:"ref"==_?r=n[_]:i[_]=n[_];if(arguments.length>2&&(i.children=arguments.length>3?o.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===i[_]&&(i[_]=e.defaultProps[_]);return v(e,i,l,r,null)}function v(e,n,t,o,_){var i={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==_?++r:_};return null!=l.vnode&&l.vnode(i),i}function y(){return{current:null}}function g(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function w(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return w(e)}}function C(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!x.__r++||c!==l.debounceRendering)&&((c=l.debounceRendering)||u)(x)}function x(){for(var e;x.__r=i.length;)e=i.sort((function(e,n){return e.__v.__b-n.__v.__b})),i=[],e.some((function(e){var n,t,o,l,r,_;e.__d&&(r=(l=(n=e).__v).__e,(_=n.__P)&&(t=[],(o=d({},l)).__v=l.__v+1,F(_,l,o,n.__n,void 0!==_.ownerSVGElement,null!=l.__h?[r]:null,t,null==r?k(l):r,l.__h),I(t,l),l.__e!=r&&w(l)))}))}function S(e,n,t,o,l,r,_,i,u,c){var a,p,d,h,m,y,b,w=o&&o.__k||f,C=w.length;for(t.__k=[],a=0;a<n.length;a++)if(null!=(h=t.__k[a]=null==(h=n[a])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?v(null,h,null,null,h):Array.isArray(h)?v(g,{children:h},null,null,null):h.__b>0?v(h.type,h.props,h.key,null,h.__v):h)){if(h.__=t,h.__b=t.__b+1,null===(d=w[a])||d&&h.key==d.key&&h.type===d.type)w[a]=void 0;else for(p=0;p<C;p++){if((d=w[p])&&h.key==d.key&&h.type===d.type){w[p]=void 0;break}d=null}F(e,h,d=d||s,l,r,_,i,u,c),m=h.__e,(p=h.ref)&&d.ref!=p&&(b||(b=[]),d.ref&&b.push(d.ref,null,h),b.push(p,h.__c||m,h)),null!=m?(null==y&&(y=m),"function"==typeof h.type&&null!=h.__k&&h.__k===d.__k?h.__d=u=O(h,u,e):u=P(e,h,d,w,m,u),c||"option"!==t.type?"function"==typeof t.type&&(t.__d=u):e.value=""):u&&d.__e==u&&u.parentNode!=e&&(u=k(d))}for(t.__e=y,a=C;a--;)null!=w[a]&&("function"==typeof t.type&&null!=w[a].__e&&w[a].__e==t.__d&&(t.__d=k(o,a+1)),L(w[a],w[a]));if(b)for(a=0;a<b.length;a++)B(b[a],b[++a],b[++a])}function O(e,n,t){var o,l;for(o=0;o<e.__k.length;o++)(l=e.__k[o])&&(l.__=e,n="function"==typeof l.type?O(l,n,t):P(t,l,l,e.__k,l.__e,n));return n}function E(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){E(e,n)})):n.push(e)),n}function P(e,n,t,o,l,r){var _,i,u;if(void 0!==n.__d)_=n.__d,n.__d=void 0;else if(null==t||l!=r||null==l.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(l),_=null;else{for(i=r,u=0;(i=i.nextSibling)&&u<o.length;u+=2)if(i==l)break e;e.insertBefore(l,r),_=r}return void 0!==_?_:l.nextSibling}function U(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||p.test(n)?t:t+"px"}function j(e,n,t,o,l){var r;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||U(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||U(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])r=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?o||e.addEventListener(n,r?D:A,r):e.removeEventListener(n,r?D:A,r);else if("dangerouslySetInnerHTML"!==n){if(l)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function A(e){this.l[e.type+!1](l.event?l.event(e):e)}function D(e){this.l[e.type+!0](l.event?l.event(e):e)}function F(e,n,t,o,r,_,i,u,c){var a,s,f,p,h,m,v,y,k,w,C,x=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(c=t.__h,u=n.__e=t.__e,n.__h=null,_=[u]),(a=l.__b)&&a(n);try{e:if("function"==typeof x){if(y=n.props,k=(a=x.contextType)&&o[a.__c],w=a?k?k.props.value:a.__:o,t.__c?v=(s=n.__c=t.__c).__=s.__E:("prototype"in x&&x.prototype.render?n.__c=s=new x(y,w):(n.__c=s=new b(y,w),s.constructor=x,s.render=M),k&&k.sub(s),s.props=y,s.state||(s.state={}),s.context=w,s.__n=o,f=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=x.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=d({},s.__s)),d(s.__s,x.getDerivedStateFromProps(y,s.__s))),p=s.props,h=s.state,f)null==x.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==x.getDerivedStateFromProps&&y!==p&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(y,w),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(y,s.__s,w)||n.__v===t.__v){s.props=y,s.state=s.__s,n.__v!==t.__v&&(s.__d=!1),s.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),s.__h.length&&i.push(s);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(y,s.__s,w),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(p,h,m)}))}s.context=w,s.props=y,s.state=s.__s,(a=l.__r)&&a(n),s.__d=!1,s.__v=n,s.__P=e,a=s.render(s.props,s.state,s.context),s.state=s.__s,null!=s.getChildContext&&(o=d(d({},o),s.getChildContext())),f||null==s.getSnapshotBeforeUpdate||(m=s.getSnapshotBeforeUpdate(p,h)),C=null!=a&&a.type===g&&null==a.key?a.props.children:a,S(e,Array.isArray(C)?C:[C],n,t,o,r,_,i,u,c),s.base=n.__e,n.__h=null,s.__h.length&&i.push(s),v&&(s.__E=s.__=null),s.__e=!1}else null==_&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=T(t.__e,n,t,o,r,_,i,c);(a=l.diffed)&&a(n)}catch(e){n.__v=null,(c||null!=_)&&(n.__e=u,n.__h=!!c,_[_.indexOf(u)]=null),l.__e(e,n,t)}}function I(e,n){l.__c&&l.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){l.__e(e,n.__v)}}))}function T(e,n,t,l,r,_,i,u){var c,a,f,p=t.props,d=n.props,m=n.type,v=0;if("svg"===m&&(r=!0),null!=_)for(;v<_.length;v++)if((c=_[v])&&(c===e||(m?c.localName==m:3==c.nodeType))){e=c,_[v]=null;break}if(null==e){if(null===m)return document.createTextNode(d);e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,d.is&&d),_=null,u=!1}if(null===m)p===d||u&&e.data===d||(e.data=d);else{if(_=_&&o.call(e.childNodes),a=(p=t.props||s).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!u){if(null!=_)for(p={},v=0;v<e.attributes.length;v++)p[e.attributes[v].name]=e.attributes[v].value;(f||a)&&(f&&(a&&f.__html==a.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,n,t,o,l){var r;for(r in t)"children"===r||"key"===r||r in n||j(e,r,null,t[r],o);for(r in n)l&&"function"!=typeof n[r]||"children"===r||"key"===r||"value"===r||"checked"===r||t[r]===n[r]||j(e,r,n[r],t[r],o)}(e,d,p,r,u),f)n.__k=[];else if(v=n.props.children,S(e,Array.isArray(v)?v:[v],n,t,l,r&&"foreignObject"!==m,_,i,_?_[0]:t.__k&&k(t,0),u),null!=_)for(v=_.length;v--;)null!=_[v]&&h(_[v]);u||("value"in d&&void 0!==(v=d.value)&&(v!==e.value||"progress"===m&&!v)&&j(e,"value",v,p.value,!1),"checked"in d&&void 0!==(v=d.checked)&&v!==e.checked&&j(e,"checked",v,p.checked,!1))}return e}function B(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){l.__e(e,t)}}function L(e,n,t){var o,r;if(l.unmount&&l.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||B(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){l.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&L(o[r],n,"function"!=typeof e.type);t||null==e.__e||h(e.__e),e.__e=e.__d=void 0}function M(e,n,t){return this.constructor(e,t)}function N(e,n,t){var r,_,i;l.__&&l.__(e,n),_=(r="function"==typeof t)?null:t&&t.__k||n.__k,i=[],F(n,e=(!r&&t||n).__k=m(g,null,[e]),_||s,s,void 0!==n.ownerSVGElement,!r&&t?[t]:_?null:n.firstChild?o.call(n.childNodes):null,i,!r&&t?t:_?_.__e:n.firstChild,r),I(i,e)}function R(e,n){N(e,n,R)}function W(e,n,t){var l,r,_,i=d({},e.props);for(_ in n)"key"==_?l=n[_]:"ref"==_?r=n[_]:i[_]=n[_];return arguments.length>2&&(i.children=arguments.length>3?o.call(arguments,2):t),v(e.type,i,l||e.key,r||e.ref,null)}function z(e,n){var t={__c:n="__cC"+a++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,o;return this.getChildContext||(t=[],(o={})[n]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(C)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}o=f.slice,l={__e:function(e,n){for(var t,o,l;n=n.__;)if((t=n.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(e)),l=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(n){e=n}throw e}},r=0,_=function(e){return null!=e&&void 0===e.constructor},b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(d({},t),this.props)),e&&d(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),C(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),C(this))},b.prototype.render=g,i=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,x.__r=0,a=0},123:function(e,n,t){"use strict";t.r(n);var o=t(1),l="runtimeBannerDismissed";function r(){localStorage.setItem(l,!0),_()}function _(){var e=document.getElementById("runtime-banner-container");null===e||void 0===e||e.remove()}var i=function(){if(!localStorage.getItem(l)&&"Browser-iOS"===Runtime.currentContext()){if("/r/mobile"===window.location.pathname)return _(),void function(){var e=document.getElementById("link-to-mobile-install"),n=document.getElementById("link-to-mobile-install-retry");if(e&&n){var t=new URLSearchParams(window.location.search).get("deep_link");if("iOS"===Runtime.currentOS()){e.href="https://apps.apple.com/us/app/forem/id1536933197";var o="".concat("com.forem.app","://").concat(window.location.host).concat(t);n.href=o,window.location.href=o}else"Android"===Runtime.currentOS()&&(n.href="intent://scan/#Intent;scheme=com.forem.app;package=com.forem.app;end",e.href="https://play.google.com/store/apps/details?id=to.dev.dev_android",window.location.href="/")}}();var e="https://".concat(window.location.host,"/r/mobile?deep_link=").concat(window.location.pathname),n="https://udl.forem.com/?r=".concat(encodeURIComponent(e));return Object(o.h)("div",{class:"runtime-banner"},Object(o.h)("a",{href:n,class:"flex items-center flex-1",target:"_blank",rel:"noopener noreferrer"},Object(o.h)("svg",{class:"crayons-icon crayons-icon--default",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(o.h)("path",{d:"M16.44 23.363a.5.5 0 0 1 .59.286c.712 1.893 2.765 2.915 4.713 2.393 1.938-.553 3.206-2.465 2.876-4.46a.474.474 0 0 1 .368-.543l1.628-.437a.508.508 0 0 1 .607.35l.008.032c.642 3.416-1.444 6.743-4.778 7.705-3.352.898-6.813-.909-7.933-4.196a.488.488 0 0 1 .31-.63l.032-.009 1.579-.491z",fill:"#E9F0E8"}),Object(o.h)("path",{d:"M12.828 11.415a.5.5 0 0 1-.59-.287c-.713-1.893-2.766-2.915-4.713-2.393-1.971.562-3.206 2.465-2.877 4.461a.474.474 0 0 1-.367.543l-1.628.436a.508.508 0 0 1-.607-.35l-.009-.032c-.642-3.416 1.444-6.742 4.779-7.704 3.352-.898 6.812.908 7.933 4.196a.488.488 0 0 1-.31.63l-.032.008-1.58.492z",fill:"#4CFCA7"}),Object(o.h)("path",{d:"m22.142 8.509-1.691.453a.508.508 0 0 1-.607-.35l-.692-2.582a.508.508 0 0 1 .35-.607l1.724-.462a.508.508 0 0 0 .35-.606l-.435-1.626a.486.486 0 0 0-.607-.35l-4.269 1.178a.508.508 0 0 0-.35.606l.563 2.105.692 2.582.692 2.582.026.096L19.81 18.7c.068.255.32.427.575.359l1.596-.428a.508.508 0 0 0 .35-.607l-1.597-5.961c-.051-.192.042-.353.234-.405l1.884-.504a.508.508 0 0 0 .35-.607l-.435-1.626c-.086-.319-.37-.482-.625-.413zm2.155-.133a.526.526 0 0 1 .255-.581c.746-.405 1.157-1.301.934-2.13-.222-.83-.993-1.408-1.834-1.354a.463.463 0 0 1-.502-.344l-.436-1.626c-.068-.255.095-.538.342-.638l.064-.017a4.412 4.412 0 0 1 4.92 3.295c.59 2.2-.511 4.476-2.605 5.345a.513.513 0 0 1-.654-.27l-.017-.063-.467-1.617z",fill:"#FBC1F5"})),Object(o.h)("div",{class:"flex flex-col pl-3"},Object(o.h)("span",null,"Forem"),Object(o.h)("span",null,"Open with the Forem app"))),Object(o.h)("button",{onClick:r,type:"button",class:"runtime-banner__dismiss crayons-btn crayons-btn--ghost crayons-btn--icon crayons-btn--inverted crayons-btn--s"},Object(o.h)("svg",{class:"crayons-icon",title:"Dismiss banner: Open with the Forem app",aria:"true",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(o.h)("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"}))))}_()};function u(){var e=document.getElementById("runtime-banner-container");e&&Object(o.render)(Object(o.h)(i,null),e)}!function e(){setTimeout((function(){"true"===document.body.getAttribute("data-loaded")?(window.InstantClick.on("change",(function(){u()})),u()):e()}),100)}()}},[[123,91]]]);
//# sourceMappingURL=runtimeBanner-79ea0f8c10ff53199e5b.chunk.js.map