!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var e,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(e){f=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,a=Object.create(o.prototype),c=new C(n||[]);return i(a,"_invoke",{value:N(t,e,c)}),a}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var L={};f(L,u,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(T([])));E&&E!==o&&a.call(E,u)&&(L=E);var j=x.prototype=w.prototype=Object.create(L);function O(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function k(r,e){function n(o,i,c,u){var s=p(r[o],r,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}})}function N(t,r,n){var o=d;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(t,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function S(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function I(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function T(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function t(){for(;++o<r.length;)if(a.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(t(r)+" is not iterable")}return b.prototype=x,i(j,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},O(k.prototype),f(k.prototype,s,(function(){return this})),n.AsyncIterator=k,n.async=function(t,r,e,o,a){void 0===a&&(a=Promise);var i=new k(h(t,r,e,o),a);return n.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(j),f(j,l,"Generator"),f(j,u,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},n}function e(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function c(t){e(i,o,a,c,u,"next",t)}function u(t){e(i,o,a,c,u,"throw",t)}c(void 0)}))}}System.register(["./index-legacy-70388b8a.js","./index-legacy-4f638d6a.js","./index-legacy-5fd0dc08.js","./useAddCartAnimation-legacy-4ecd6ba3.js","./OrderDeliveryAddress-legacy-fb5c6b8c.js","./OrderList-legacy-d07a8f75.js","./OrderPayControl-legacy-a56acc5b.js","./address-legacy-42caf506.js","./user-legacy-2e34615d.js","./index-legacy-30a9912f.js"],(function(t,e){"use strict";var o,a,i,c,u,s,l,f,h,p,d,v,y,m,g,w,b,x,L,_,E,j,O,k;return{setters:[function(t){o=t.d,a=t.R,i=t.ai,c=t.r,u=t.E,s=t.F,l=t.e,f=t.N,h=t.W,p=t.aQ,d=t.D,v=t.H,y=t.J},null,function(t){m=t.N,g=t._},function(t){w=t.u},function(t){b=t.O},function(t){x=t.O,L=t.a},function(t){_=t.O},function(t){E=t.g,j=t.a},function(t){O=t.u},function(t){k=t.S}],execute:function(){var e=document.createElement("style");e.textContent='@charset "UTF-8";.order-comfirmation-page[data-v-d214a0ad]{height:100vh;overflow-y:scroll;background:linear-gradient(180deg,var(--theme-color-important) 0%,var(--theme-color-important) 11.73333vw,rgba(255,121,148,0) 78.93333vw);background-color:#f7f8fa}.order-comfirmation-page__main[data-v-d214a0ad]{margin-bottom:18.66667vw}\n',document.head.appendChild(e);var N={class:"order-comfirmation-page"},S={class:"order-comfirmation-page__main"},I=o({__name:"OrderComfirmation",setup:function(t){var e=O(),o=a(),g=i(),I=g.params.shopId,P=g.query.addressId,C=w(),T=C.getAllCheckedGoodsListByShopId(Number(I));console.log("orderList",T);var G=function(){history.back()},F=c(null),A=function(){var t=n(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(e.userInfo.userId);case 3:F.value=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),F.value=null;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),B=function(){var t=n(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j(Number(P));case 3:F.value=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),F.value=null;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),q=function(){var t=n(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P?B():A();case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();q();var D=C.getCartTotalPriceByShopId(Number(I)),Y=function(){var t=n(r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={userId:e.userInfo.userId,shopId:Number(I),shopName:T.shopName,addressId:Number(P),goodsList:T.goodsList,isCanceled:!1},t.next=3,p({title:"订单支付",message:"点击取消按扭可以取消支付。"}).then((function(){n.isCanceled=!1})).catch((function(){n.isCanceled=!0}));case 3:return t.next=5,L(n);case 5:r=Number(I),C.clearCartCheckedGoodsByShopId(r),o.push("/order");case 7:case"end":return t.stop()}var r}),t)})));return function(){return t.apply(this,arguments)}}();return function(t,r){var e=y,n=m,o=k;return d(),u("div",N,[s("div",S,[l(o,{"offset-top":0},{default:f((function(){return[l(n,{title:"订单确认","left-arrow":"",onClickLeft:G},{right:f((function(){return[l(e,{name:"ellipsis",color:"#000",size:"30"})]})),_:1})]})),_:1}),l(b,{data:F.value},null,8,["data"]),l(x,{data:h(T),show:!1},null,8,["data"]),l(_,{show:!!F.value,"total-price":h(D).nowPriceTotal,"preferential-price":h(D).oldPriceTotal-h(D).nowPriceTotal,onSubmit:Y},{default:f((function(){return[v(" 确认支付 ")]})),_:1},8,["show","total-price","preferential-price"])])])}}});t("default",g(I,[["__scopeId","data-v-d214a0ad"]]))}}}))}();
