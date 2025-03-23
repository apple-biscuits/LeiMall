!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",d=s.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(r){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),s=new P(n||[]);return i(a,"_invoke",{value:O(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var p="suspendedStart",v="suspendedYield",g="executing",y="completed",m={};function w(){}function b(){}function x(){}var k={};l(k,c,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(F([])));E&&E!==o&&a.call(E,c)&&(k=E);var _=x.prototype=w.prototype=Object.create(k);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function I(e,r){function n(o,i,s,c){var u=h(e[o],e,i);if("throw"!==u.type){var d=u.arg,l=d.value;return l&&"object"==t(l)&&a.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):r.resolve(l).then((function(t){d.value=t,s(d)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function O(t,e,n){var o=p;return function(a,i){if(o===g)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var c=S(s,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var u=h(t,e,n);if("normal"===u.type){if(o=n.done?y:v,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function S(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=h(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=x,i(_,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=l(x,d,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,d,"GeneratorFunction")),t.prototype=Object.create(_),t},n.awrap=function(t){return{__await:t}},j(I.prototype),l(I.prototype,u,(function(){return this})),n.AsyncIterator=I,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new I(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(_),l(_,d,"Generator"),l(_,c,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=F,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function r(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function s(t){r(i,o,a,s,c,"next",t)}function c(t){r(i,o,a,s,c,"throw",t)}s(void 0)}))}}System.register(["./index-legacy-70388b8a.js","./index-legacy-5fd0dc08.js","./address-legacy-42caf506.js","./user-legacy-2e34615d.js"],(function(t,r){"use strict";var o,a,i,s,c,u,d,l,f,h,p,v,g,y,m,w,b,x,k,L,E,_,j,I;return{setters:[function(t){o=t.d,a=t.R,i=t.ai,s=t.r,c=t.E,u=t.e,d=t.N,l=t.F,f=t.O,h=t.P,p=t.D,v=t.I,g=t.Q,y=t.al,m=t.K,w=t.M,b=t.J,x=t.aQ,k=t.a6},function(t){L=t.N,E=t._},function(t){_=t.a,j=t.d},function(t){I=t.u}],execute:function(){var r=document.createElement("style");r.textContent='.address-page[data-v-2dd92510]{height:100vh;background-color:#f7f8fa;overflow-y:scroll}.address-page .address-list[data-v-2dd92510]{margin:3.2vw 4.26667vw 19.2vw;background-color:#fff;border-radius:1.06667vw;padding:2.66667vw 0px}.address-page .address-list .item[data-v-2dd92510]{padding:3.2vw 4.26667vw 2.66667vw 5.33333vw;margin-bottom:2.66667vw;position:relative}.address-page .address-list .item[data-v-2dd92510]:after{content:"";display:block;height:1px;width:78.66667vw;background-color:#f2f3f5;position:absolute;left:8.53333vw;bottom:0}.address-page .address-list .item .details[data-v-2dd92510]{display:flex;align-items:center}.address-page .address-list .item .details p[data-v-2dd92510]{font-size:3.73333vw;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#051733;line-height:6.93333vw}.address-page .address-list .item .details span[data-v-2dd92510]{flex-shrink:0;width:8.53333vw;height:5.33333vw;line-height:5.33333vw;background:rgba(255,68,91,.1);border-radius:.53333vw;font-size:3.2vw;color:#ff445b;text-align:center;margin-left:2.93333vw}.address-page .address-list .item .receiver[data-v-2dd92510]{display:flex;align-items:center;font-size:3.73333vw;font-weight:400;color:#4f5c70;height:5.33333vw}.address-page .address-list .item .receiver span.phone[data-v-2dd92510]{flex-grow:1;margin-left:3.2vw}.address-page .address-list .item .receiver span.delete[data-v-2dd92510]{margin-right:4.26667vw}.address-page .add-address[data-v-2dd92510]{width:100vw;height:16.53333vw;background:#f7f8fa;position:fixed;bottom:0;left:0;right:0;z-index:222;display:flex;align-items:center;justify-content:center}.address-page .add-address .button[data-v-2dd92510]{width:87.2vw;height:12.26667vw;border-radius:6.13333vw;border:1px solid #ff445b;display:flex;align-items:center;justify-content:center}.address-page .add-address .button span[data-v-2dd92510]{font-size:3.73333vw;font-weight:400;color:#ff445b}\n',document.head.appendChild(r);var O={class:"address-page"},S={class:"address-list"},C=["onClick"],N={class:"details"},P={key:0},F={class:"receiver"},G={class:"phone"},z=["onClick"],T=["onClick"],A={class:"add-address"},q=function(t){return m("data-v-2dd92510"),t=t(),w(),t}((function(){return l("span",null,"添加收货地址",-1)})),D=o({__name:"AddressIndex",setup:function(t){var r=I(),o=a(),m=i().query.shopId,w=function(){history.back()},E=function(){o.push("/address/edit")},D=s([]),Q=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(r.userInfo.userId);case 3:D.value=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),D.value=[];case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();Q();return function(t,a){var i=b,s=L;return p(),c("div",O,[u(s,{title:"选择收货地址","left-arrow":"",onClickLeft:w},{right:d((function(){return[u(i,{name:"ellipsis",color:"#000",size:"30"})]})),_:1}),l("div",S,[(p(!0),c(f,null,h(D.value,(function(t){return p(),c("div",{class:"item",key:t.addressId,onClick:function(e){return r=Number(t.addressId),setTimeout((function(){o.replace({name:"orderComfirmation",params:{shopId:Number(m)},query:{addressId:r}})}),10),void history.back();var r}},[l("div",N,[l("p",null,v(t.area.split("/").join("")+t.detailsAddress),1),t.isDefault?(p(),c("span",P,v(t.isDefault?"默认":""),1)):g("",!0)]),l("div",F,[l("span",null,v(t.receiver),1),l("span",G,v(t.phone),1),l("span",{class:"delete",onClick:y((function(o){return a=t.addressId,void x({title:"提示",message:"确定要删除吗？"}).then(n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j(r.userInfo.userId,a);case 3:k({title:"提示",message:"删除成功"}).then((function(){Q()})),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),k({title:"提示",message:"删除成失败"}).then((function(){}));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).catch((function(){}));var a}),["stop"])},[u(i,{name:"delete-o"})],8,z),l("span",{class:"edit",onClick:y((function(e){return r=t.addressId,void o.push("/address/edit?addressId="+r);var r}),["stop"])},[u(i,{name:"edit"})],8,T)])],8,C)})),128))]),l("div",A,[l("div",{class:"button",onClick:E},[u(i,{name:"plus",size:"4.26vw",color:"#FF445B"}),q])])])}}});t("default",E(D,[["__scopeId","data-v-2dd92510"]]))}}}))}();
