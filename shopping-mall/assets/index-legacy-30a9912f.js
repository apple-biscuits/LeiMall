!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],f=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;f=!1}else for(;!(f=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);f=!0);}catch(t){l=!0,o=t}finally{try{if(!f&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy-70388b8a.js"],(function(t,r){"use strict";var o,i,u,a,f,l,c,s,v,d,m,h,p,y,b,g,x,w,S,j,O,I,A,T,z,B;return{setters:[function(t){o=t.ae,i=t.ax,u=t.ay,a=t.aC,f=t.c,l=t.d,c=t.r,s=t.h,v=t.q,d=t.a,m=t.aB,h=t.z,p=t.aS,y=t.w,b=t.j,g=t.l,x=t.n,w=t.k,S=t.as,j=t.at,O=t.e,I=t.v,A=t.f,T=t.m,z=t.y,B=t.g}],execute:function(){function r(t,e){if(o&&window.IntersectionObserver){var n=new IntersectionObserver((function(t){e(t[0].intersectionRatio>0)}),{root:document.body}),r=function(){t.value&&n.unobserve(t.value)};i(r),u(r),a((function(){t.value&&n.observe(t.value)}))}}t("u",r);var E=n(f("sticky"),2),P=E[0],k=E[1],C={zIndex:I,position:A("top"),container:Object,offsetTop:T(0),offsetBottom:T(0)},q=l({name:P,props:C,emits:["scroll","change"],setup:function(t,n){var o=n.emit,i=n.slots,u=c(),a=s(u),f=v({fixed:!1,width:0,height:0,transform:0}),l=c(!1),I=d((function(){return m("top"===t.position?t.offsetTop:t.offsetBottom)})),A=d((function(){if(!l.value){var t=f.fixed,e=f.height,n=f.width;return t?{width:"".concat(n,"px"),height:"".concat(e,"px")}:void 0}})),T=d((function(){if(f.fixed&&!l.value){var n=h(p(t.zIndex),e({width:"".concat(f.width,"px"),height:"".concat(f.height,"px")},t.position,"".concat(I.value,"px")));return f.transform&&(n.transform="translate3d(0, ".concat(f.transform,"px, 0)")),n}})),B=function(){if(u.value&&!g(u)){var e=t.container,n=t.position,r=w(u),i=z(window);if(f.width=r.width,f.height=r.height,"top"===n)if(e){var a=w(e),l=a.bottom-I.value-f.height;f.fixed=I.value>r.top&&a.bottom>0,f.transform=l<0?l:0}else f.fixed=I.value>r.top;else{var c=document.documentElement.clientHeight;if(e){var s=w(e),v=c-s.top-I.value-f.height;f.fixed=c-I.value<r.bottom&&c>s.top,f.transform=v<0?-v:0}else f.fixed=c-I.value<r.bottom}!function(t){o("scroll",{scrollTop:t,isFixed:f.fixed})}(i)}};return y((function(){return f.fixed}),(function(t){return o("change",t)})),b("scroll",B,{target:a,passive:!0}),r(u,B),y([S,j],(function(){u.value&&!g(u)&&f.fixed&&(l.value=!0,x((function(){var t=w(u);f.width=t.width,f.height=t.height,l.value=!1})))})),function(){var t;return O("div",{ref:u,style:A.value},[O("div",{class:k({fixed:f.fixed&&!l.value}),style:T.value},[null==(t=i.default)?void 0:t.call(i)])])}}});t("S",B(q))}}}))}();
