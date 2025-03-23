import{d as g,a as f,E as d,e as h,N as C,T as I,F as s,D as a,al as m,Q as c,I as e,a3 as k,R as y,O as N,P as B,H as G}from"./index-ce5e170b.js";import{u as $,e as A}from"./useAddCartAnimation-c55e2ead.js";import{_ as v}from"./index-95dee2f0.js";const V={class:"add-cart-control"},P=["onClick"],T={key:1,class:"count"},b=["onClick"],w=g({__name:"AddCart",props:{goods:{},shopId:{},shopName:{}},setup(l){const t=l,n=$(),i=f(()=>n.getGoodsCartCount(t.shopId,t.goods.goodsId)),u=()=>{n.removeProductFromCart(t.shopId,t.goods.goodsId)},p=o=>{A.emit("add-cart",o.target),n.pushProductToCart(t.shopId,t.shopName,t.goods)};return(o,r)=>(a(),d("div",V,[h(I,{name:"fade"},{default:C(()=>[i.value>0?(a(),d("div",{key:0,class:"minus",onClick:m(u,["stop"])},null,8,P)):c("",!0),i.value>0?(a(),d("div",T,e(i.value),1)):c("",!0)]),_:1}),s("div",{class:"add",onClick:m(p,["stop"])},null,8,b)]))}});const D=v(w,[["__scopeId","data-v-6f77c9f9"]]),F={class:"goods-item__left"},S=["src"],W={class:"goods-item__right"},E={class:"title common-ellipsis"},M={class:"tags"},R={key:0,class:"month-sales"},H={key:1,class:"discount"},L={class:"price-and-button"},O={class:"addcart"},Q=g({__name:"GoodsItem",props:{goods:{},shopId:{},shopName:{},marginBottom:{default:20},maxWidth:{default:37.33},sales:{type:Boolean,default:!0},discount:{type:Boolean,default:!0}},setup(l){const t=l;k(o=>({"35bef7a7":n,"7221f820":i}));const n=t.marginBottom+"px",i=t.maxWidth+"vw",u=y(),p=(o,r)=>{u.push({name:"goods",params:{shopId:o,goodsId:r}})};return(o,r)=>(a(),d("div",{class:"goods-item",onClick:r[0]||(r[0]=_=>p(o.shopId,o.goods.goodsId))},[s("div",F,[s("img",{src:o.goods.imgUrl,alt:""},null,8,S)]),s("div",W,[s("div",E,e(o.goods.name),1),s("div",M,[(a(!0),d(N,null,B(o.goods.tips,_=>(a(),d("span",{key:_},e(_),1))),128))]),o.sales?(a(),d("div",R,"月销："+e(o.goods.sellCount),1)):c("",!0),o.discount?(a(),d("div",H,[s("span",null,[s("i",null,e(o.goods.discount.value)+"折 限"+e(o.goods.discount.limitCount)+"份",1)])])):c("",!0),s("div",L,[G(" ￥"),s("b",null,e(o.goods.price),1),s("del",null,"￥"+e(o.goods.oldPrice),1),s("div",O,[h(D,{"shop-id":o.shopId,goods:o.goods,"shop-name":o.shopName},null,8,["shop-id","goods","shop-name"])])])])]))}});const z=v(Q,[["__scopeId","data-v-3dd2092e"]]);export{D as A,z as G};
