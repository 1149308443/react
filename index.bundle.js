(()=>{var e,r,n,t={7309:(e,r,n)=>{"use strict";n(2439);var t=n(8184),o=n(5893),i=n(3935),d=n(798),a=n(787),c=n(6627),s=n(7755),l=function(){i.render((0,o.jsx)(t.ZP,Object.assign({locale:a.Z},{children:(0,o.jsx)(d.zt,Object.assign({store:s.Z},{children:(0,o.jsx)(c.default,{},void 0)}),void 0)}),void 0),document.getElementById("root"))};e.hot.accept(6627,(e=>{c=n(6627),l()})),l()},6627:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>u});var t=n(5893),o=n(7294),i=n(3727),d=n(5977);const a=(0,n(7531).lX)();const c=[{path:"/",componentPath:"/demo",exact:!0},{path:"/mobx",componentPath:"/mobx",exact:!0},{path:"/detail",componentPath:"/detail",children:[{path:"/detail/nofind",componentPath:"/404"}]},{path:"/skeleton",componentPath:"/skeleton",exact:!0}];const s=function(e){return"string"==typeof e?(0,o.lazy)((function(){return n(9331)("./views".concat(e))})):e};var l=function e(r){return r.map((function(r,n){var o=s(r.componentPath);return r.children?(0,t.jsx)(d.AW,{path:r.path,component:function(){return(0,t.jsx)(o,{children:e(r.children)},void 0)}},n.toString()):(0,t.jsx)(d.AW,{exact:r.exact,path:r.path,component:o},n.toString())}))};const u=function(){return(0,t.jsx)(i.VK,{children:(0,t.jsx)(d.F0,Object.assign({history:a},{children:(0,t.jsx)(o.Suspense,Object.assign({fallback:(0,t.jsx)(t.Fragment,{children:"loading"},void 0)},{children:(0,t.jsx)(d.rs,{children:l(c)},void 0)}),void 0)}),void 0)},void 0)}},7755:(e,r,n)=>{"use strict";n.d(r,{Z:()=>s});var t=n(5671),o=n(3144),i=n(1002),d=n(2188),a=function(e,r,n,t){var o,d=arguments.length,a=d<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,n):t;if("object"===("undefined"==typeof Reflect?"undefined":(0,i.Z)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,n,t);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(d<3?o(a):d>3?o(r,n,a):o(r,n))||a);return d>3&&a&&Object.defineProperty(r,n,a),a},c=function(){function e(){(0,t.Z)(this,e),this.age=1}return(0,o.Z)(e,[{key:"douleAge",get:function(){return console.log("age改变了"),this.age+2}},{key:"add",value:function(){this.age+=1}}]),e}();a([d.LO],c.prototype,"age",void 0),a([d.Fl],c.prototype,"douleAge",null),a([d.aD],c.prototype,"add",null);const s={RootStore:new c}},9331:(e,r,n)=>{var t={"./views/404":[5241,241],"./views/404/":[5241,241],"./views/404/index":[5241,241],"./views/404/index.tsx":[5241,241],"./views/demo":[9885,974,711,175,885],"./views/demo/":[9885,974,711,175,885],"./views/demo/components/map":[2110,110],"./views/demo/components/map.tsx":[2110,110],"./views/demo/index":[9885,974,711,175,885],"./views/demo/index.tsx":[9885,974,711,175,885],"./views/demo/style":[8825,825],"./views/demo/style.less":[8825,825],"./views/detail":[9018,18],"./views/detail/":[9018,18],"./views/detail/index":[9018,18],"./views/detail/index.tsx":[9018,18],"./views/mobx":[6559,559],"./views/mobx/":[6559,559],"./views/mobx/index":[6559,559],"./views/mobx/index.tsx":[6559,559],"./views/skeleton":[5400,400],"./views/skeleton/":[5400,400],"./views/skeleton/index":[5400,400],"./views/skeleton/index.tsx":[5400,400],"./views/skeleton/style":[4969,969],"./views/skeleton/style.less":[4969,969]};function o(e){if(!n.o(t,e))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=t[e],o=r[0];return Promise.all(r.slice(1).map(n.e)).then((()=>n(o)))}o.keys=()=>Object.keys(t),o.id=9331,e.exports=o}},o={};function i(e){var r=o[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=o[e]={id:e,loaded:!1,exports:{}};try{var d={id:e,module:n,factory:t[e],require:i};i.i.forEach((function(e){e(d)})),n=d.module,d.factory.call(n.exports,n,n.exports,d.require)}catch(e){throw n.error=e,e}return n.loaded=!0,n.exports}i.m=t,i.c=o,i.i=[],e=[],i.O=(r,n,t,o)=>{if(!n){var d=1/0;for(l=0;l<e.length;l++){for(var[n,t,o]=e[l],a=!0,c=0;c<n.length;c++)(!1&o||d>=o)&&Object.keys(i.O).every((e=>i.O[e](n[c])))?n.splice(c--,1):(a=!1,o<d&&(d=o));if(a){e.splice(l--,1);var s=t();void 0!==s&&(r=s)}}return r}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,t,o]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var n in r)i.o(r,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,n)=>(i.f[n](e,r),r)),[])),i.u=e=>e+".bundle.js",i.hu=e=>e+"."+i.h()+".hot-update.js",i.miniCssF=e=>"css/"+e+"."+i.h().slice(0,5)+".css",i.hmrF=()=>"index."+i.h()+".hot-update.json",i.h=()=>"de9a5aedc323f3e8545b",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="react-cli:",i.l=(e,t,o,d)=>{if(r[e])r[e].push(t);else{var a,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var u=s[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+o){a=u;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",n+o),a.src=e),r[e]=[t];var f=(n,t)=>{a.onerror=a.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(t))),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e,r,n,t,o={},d=i.c,a=[],c=[],s="idle";function l(e){s=e;for(var r=[],n=0;n<c.length;n++)r[n]=c[n].call(null,e);return Promise.all(r)}function u(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return u(e)}))}function f(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return l("check").then(i.hmrM).then((function(t){return t?l("prepare").then((function(){var o=[];return r=[],n=[],Promise.all(Object.keys(i.hmrC).reduce((function(e,r){return i.hmrC[r](t.c,t.r,t.m,e,n,o),e}),[])).then((function(){return u((function(){return e?h(e):l("ready").then((function(){return o}))}))}))})):l(v()?"ready":"idle").then((function(){return null}))}))}function p(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},v();var r=n.map((function(r){return r(e)}));n=void 0;var o=r.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var i=l("dispose");r.forEach((function(e){e.dispose&&e.dispose()}));var d,a=l("apply"),c=function(e){d||(d=e)},s=[];return r.forEach((function(e){if(e.apply){var r=e.apply(c);if(r)for(var n=0;n<r.length;n++)s.push(r[n])}})),Promise.all([i,a]).then((function(){return d?l("fail").then((function(){throw d})):t?h(e).then((function(e){return s.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):l("idle").then((function(){return s}))}))}function v(){if(t)return n||(n=[]),Object.keys(i.hmrI).forEach((function(e){t.forEach((function(r){i.hmrI[e](r,n)}))})),t=void 0,!0}i.hmrD=o,i.i.push((function(h){var v,m,y,g,w=h.module,b=function(n,t){var o=d[t];if(!o)return n;var i=function(r){if(o.hot.active){if(d[r]){var i=d[r].parents;-1===i.indexOf(t)&&i.push(t)}else a=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),a=[];return n(r)},c=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var f in n)Object.prototype.hasOwnProperty.call(n,f)&&"e"!==f&&Object.defineProperty(i,f,c(f));return i.e=function(e){return function(e){switch(s){case"ready":return l("prepare"),r.push(e),u((function(){return l("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},i}(h.require,h.id);w.hot=(v=h.id,m=w,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){a=m.parents.slice(),e=y?void 0:v,i(v)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":n=[],Object.keys(i.hmrI).forEach((function(e){i.hmrI[e](v,n)})),l("ready");break;case"ready":Object.keys(i.hmrI).forEach((function(e){i.hmrI[e](v,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(v)}},check:f,apply:p,status:function(e){if(!e)return s;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var r=c.indexOf(e);r>=0&&c.splice(r,1)},data:o[v]},e=void 0,g),w.parents=a,w.children=[],a=[],h.require=b})),i.hmrC={},i.hmrI={}})(),i.p="/",(()=>{var e=(e,r,n,t)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";return o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var d=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=d,c.request=a,o.parentNode.removeChild(o),t(c)}},o.href=r,document.head.appendChild(o),o},r=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(d=n[t]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(o===e||o===r))return d}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var d;if((o=(d=i[t]).getAttribute("data-href"))===e||o===r)return d}},n={826:0};i.f.miniCss=(t,o)=>{n[t]?o.push(n[t]):0!==n[t]&&{400:1,825:1,885:1,969:1}[t]&&o.push(n[t]=(n=>new Promise(((t,o)=>{var d=i.miniCssF(n),a=i.p+d;if(r(d,a))return t();e(n,a,t,o)})))(t).then((()=>{n[t]=0}),(e=>{throw delete n[t],e})))};var t=[],o=[],d=e=>({dispose:()=>{for(var e=0;e<t.length;e++){var r=t[e];r.parentNode&&r.parentNode.removeChild(r)}t.length=0},apply:()=>{for(var e=0;e<o.length;e++)o[e].rel="stylesheet";o.length=0}});i.hmrC.miniCss=(n,a,c,s,l,u)=>{l.push(d),n.forEach((n=>{var d=i.miniCssF(n),a=i.p+d,c=r(d,a);c&&s.push(new Promise(((r,i)=>{var d=e(n,a,(()=>{d.as="style",d.rel="preload",r()}),i);t.push(c),o.push(d)})))}))}})(),(()=>{var e=i.hmrS_jsonp=i.hmrS_jsonp||{826:0};i.f.j=(r,n)=>{var t=i.o(e,r)?e[r]:void 0;if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(((n,o)=>t=e[r]=[n,o]));n.push(t[2]=o);var d=i.p+i.u(r),a=new Error;i.l(d,(n=>{if(i.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var o=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+d+")",a.name="ChunkLoadError",a.type=o,a.request=d,t[1](a)}}),"chunk-"+r,r)}};var r,n,t,o,d={};function a(e){return new Promise(((r,n)=>{d[e]=r;var t=i.p+i.hu(e),o=new Error;i.l(t,(r=>{if(d[e]){d[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+t+": "+i+")",o.name="ChunkLoadError",o.type=t,o.request=i,n(o)}}))}))}function c(d){function a(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),d=o.id,a=o.chain,s=i.c[d];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:d};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:d};for(var l=0;l<s.parents.length;l++){var u=s.parents[l],f=i.c[u];if(f){if(f.hot._declinedDependencies[d])return{type:"declined",chain:a.concat([u]),moduleId:d,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[d]?(n[u]||(n[u]=[]),c(n[u],[d])):(delete n[u],r.push(u),t.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}i.f&&delete i.f.jsonpHmr,r=void 0;var s={},l=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(i.o(n,p)){var h,v=n[p],m=!1,y=!1,g=!1,w="";switch((h=v?a(p):{type:"disposed",moduleId:p}).chain&&(w="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":d.onDeclined&&d.onDeclined(h),d.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+w));break;case"declined":d.onDeclined&&d.onDeclined(h),d.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+w));break;case"unaccepted":d.onUnaccepted&&d.onUnaccepted(h),d.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+w));break;case"accepted":d.onAccepted&&d.onAccepted(h),y=!0;break;case"disposed":d.onDisposed&&d.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in u[p]=v,c(l,h.outdatedModules),h.outdatedDependencies)i.o(h.outdatedDependencies,p)&&(s[p]||(s[p]=[]),c(s[p],h.outdatedDependencies[p]));g&&(c(l,[h.moduleId]),u[p]=f)}n=void 0;for(var b,x=[],E=0;E<l.length;E++){var _=l[E],j=i.c[_];j&&(j.hot._selfAccepted||j.hot._main)&&u[_]!==f&&!j.hot._selfInvalidated&&x.push({module:_,require:j.hot._requireSelf,errorHandler:j.hot._selfAccepted})}return{dispose:function(){var r;t.forEach((function(r){delete e[r]})),t=void 0;for(var n,o=l.slice();o.length>0;){var d=o.pop(),a=i.c[d];if(a){var c={},u=a.hot._disposeHandlers;for(E=0;E<u.length;E++)u[E].call(null,c);for(i.hmrD[d]=c,a.hot.active=!1,delete i.c[d],delete s[d],E=0;E<a.children.length;E++){var f=i.c[a.children[E]];f&&((r=f.parents.indexOf(d))>=0&&f.parents.splice(r,1))}}}for(var p in s)if(i.o(s,p)&&(a=i.c[p]))for(b=s[p],E=0;E<b.length;E++)n=b[E],(r=a.children.indexOf(n))>=0&&a.children.splice(r,1)},apply:function(e){for(var r in u)i.o(u,r)&&(i.m[r]=u[r]);for(var n=0;n<o.length;n++)o[n](i);for(var t in s)if(i.o(s,t)){var a=i.c[t];if(a){b=s[t];for(var c=[],f=[],p=[],h=0;h<b.length;h++){var v=b[h],m=a.hot._acceptedDependencies[v],y=a.hot._acceptedErrorHandlers[v];if(m){if(-1!==c.indexOf(m))continue;c.push(m),f.push(y),p.push(v)}}for(var g=0;g<c.length;g++)try{c[g].call(null,b)}catch(r){if("function"==typeof f[g])try{f[g](r,{moduleId:t,dependencyId:p[g]})}catch(n){d.onErrored&&d.onErrored({type:"accept-error-handler-errored",moduleId:t,dependencyId:p[g],error:n,originalError:r}),d.ignoreErrored||(e(n),e(r))}else d.onErrored&&d.onErrored({type:"accept-errored",moduleId:t,dependencyId:p[g],error:r}),d.ignoreErrored||e(r)}}}for(var w=0;w<x.length;w++){var E=x[w],_=E.module;try{E.require(_)}catch(r){if("function"==typeof E.errorHandler)try{E.errorHandler(r,{moduleId:_,module:i.c[_]})}catch(n){d.onErrored&&d.onErrored({type:"self-accept-error-handler-errored",moduleId:_,error:n,originalError:r}),d.ignoreErrored||(e(n),e(r))}else d.onErrored&&d.onErrored({type:"self-accept-errored",moduleId:_,error:r}),d.ignoreErrored||e(r)}}return l}}}self.webpackHotUpdatereact_cli=(e,r,t)=>{for(var a in r)i.o(r,a)&&(n[a]=r[a]);t&&o.push(t),d[e]&&(d[e](),d[e]=void 0)},i.hmrI.jsonp=function(e,r){n||(n={},o=[],t=[],r.push(c)),i.o(n,e)||(n[e]=i.m[e])},i.hmrC.jsonp=function(d,s,l,u,f,p){f.push(c),r={},t=s,n=l.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],d.forEach((function(n){i.o(e,n)&&void 0!==e[n]&&(u.push(a(n)),r[n]=!0)})),i.f&&(i.f.jsonpHmr=function(n,t){r&&!i.o(r,n)&&i.o(e,n)&&void 0!==e[n]&&(t.push(a(n)),r[n]=!0)})},i.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(i.p+i.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},i.O.j=r=>0===e[r];var s=(r,n)=>{var t,o,[d,a,c]=n,s=0;if(d.some((r=>0!==e[r]))){for(t in a)i.o(a,t)&&(i.m[t]=a[t]);if(c)var l=c(i)}for(r&&r(n);s<d.length;s++)o=d[s],i.o(e,o)&&e[o]&&e[o][0](),e[d[s]]=0;return i.O(l)},l=self.webpackChunkreact_cli=self.webpackChunkreact_cli||[];l.forEach(s.bind(null,0)),l.push=s.bind(null,l.push.bind(l))})();var d=i.O(void 0,[974,711,853,384,333],(()=>i(7309)));d=i.O(d)})();