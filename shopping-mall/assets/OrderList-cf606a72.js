import{S as u,d as h,Y as C,E as n,F as s,I as o,G as g,Q as f,O as v,P as L,D as r,e as O,N as P,H as k}from"./index-ce5e170b.js";import{_ as y}from"./index-95dee2f0.js";function H(a){return u.post("/generate/order",a)}function Q(a){return u.get("/order/list",{params:{userId:a}})}const N={class:"order-list"},w={class:"order-list__top"},B={class:"title common-ellipsis"},V={class:"order-list__main"},F={class:"goods-img"},I=["src"],D={class:"goods-infos"},E={class:"title common-ellipsis"},R={class:"cart-count"},S={class:"goods-price"},T={class:"nowprice"},b={class:"oldprice"},x=h({__name:"OrderList",props:{data:{},show:{type:Boolean}},setup(a){const m=e=>{let i=0;return e.cartCount>e.discount.limitCount?i+=e.discount.limitCount*e.oldPrice*e.discount.value*.1+(e.cartCount-e.discount.limitCount)*e.oldPrice:i+=e.cartCount*e.oldPrice*e.discount.value*.1,i.toFixed(2)};return(e,i)=>{var c,d,l,_;const p=C("RouterLink");return r(),n("div",N,[s("div",w,[s("div",B,o((c=e.data)==null?void 0:c.shopName),1),e.show?(r(),n("div",{key:0,class:g(["order-state",{success:!((d=e.data)!=null&&d.isCanceled),cancel:(l=e.data)==null?void 0:l.isCanceled}])},o(e.data.isCanceled?"已取消":"已完成"),3)):f("",!0)]),s("div",V,[(r(!0),n(v,null,L((_=e.data)==null?void 0:_.goodsList,t=>(r(),n("div",{class:"goods",key:t.goodsId},[O(p,{to:"/"},{default:P(()=>[s("div",F,[s("img",{src:t.imgUrl,alt:""},null,8,I)]),s("div",D,[s("div",E,o(t.name),1),s("div",R,"X"+o(t.cartCount),1)]),s("div",S,[s("div",T,[k(" ￥"),s("b",null,o(m(t)),1)]),s("div",b,[s("del",null,"￥"+o(t.oldPrice*t.cartCount),1)])])]),_:2},1024)]))),128))])])}}});const U=y(x,[["__scopeId","data-v-094d59e0"]]);export{U as O,H as a,Q as g};
