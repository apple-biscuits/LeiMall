import{an as Ie,ao as ve,y as Le,ap as Ne,r as z,aq as He,c as j,d as q,q as be,s as We,ar as ke,a as x,b as p,w as P,as as Re,at as Ye,au as Xe,i as me,av as Be,aw as $e,ax as Fe,ay as Ue,j as _e,e as S,t as H,v as W,m as Z,az as Q,l as he,n as N,x as Ve,a0 as ue,g as le,aA as de,h as Ze,aB as Ke,aC as je,f as qe,aD as we,_ as ge,aE as Ge,aF as Je,aG as ye,a1 as Qe,aH as pe,k as Te,aI as et,aJ as tt,aK as Ae,z as at,aL as nt,ac as lt,U as it,G as ot,aM as st,aN as ct,aO as rt,a8 as ut,aP as dt,B as ft,A as Se,ah as vt}from"./index-ce5e170b.js";import{u as Pe}from"./use-id-119f5b86.js";import{u as ht,S as gt}from"./index-8c74fe71.js";function bt(e,o,c){let s,r=0;const t=e.scrollLeft,d=c===0?1:Math.round(c*1e3/16);function u(){Ie(s)}function f(){e.scrollLeft+=(o-t)/d,++r<d&&(s=ve(f))}return f(),u}function mt(e,o,c,s){let r,t=Le(e);const d=t<o,u=c===0?1:Math.round(c*1e3/16),f=(o-t)/u;function h(){Ie(r)}function l(){t+=f,(d&&t>o||!d&&t<o)&&(t=o),Ne(e,t),d&&t<o||!d&&t>o?r=ve(l):s&&(r=ve(s))}return l(),h}function wt(){const e=z([]),o=[];return He(()=>{e.value=[]}),[e,s=>(o[s]||(o[s]=r=>{e.value[s]=r}),o[s])]}const[ze,ae]=j("swipe"),yt={loop:H,width:W,height:W,vertical:Boolean,autoplay:Z(0),duration:Z(500),touchable:H,lazyRender:Boolean,initialSwipe:Z(0),indicatorColor:String,showIndicators:H,stopPropagation:H},Oe=Symbol(ze);var Tt=q({name:ze,props:yt,emits:["change","dragStart","dragEnd"],setup(e,{emit:o,slots:c}){const s=z(),r=z(),t=be({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let d=!1;const u=We(),{children:f,linkChildren:h}=ke(Oe),l=x(()=>f.length),m=x(()=>t[e.vertical?"height":"width"]),C=x(()=>e.vertical?u.deltaY.value:u.deltaX.value),I=x(()=>t.rect?(e.vertical?t.rect.height:t.rect.width)-m.value*l.value:0),w=x(()=>m.value?Math.ceil(Math.abs(I.value)/m.value):l.value),k=x(()=>l.value*m.value),g=x(()=>(t.active+l.value)%l.value),K=x(()=>{const n=e.vertical?"vertical":"horizontal";return u.direction.value===n}),b=x(()=>{const n={transitionDuration:"".concat(t.swiping?0:e.duration,"ms"),transform:"translate".concat(e.vertical?"Y":"X","(").concat(+t.offset.toFixed(2),"px)")};if(m.value){const y=e.vertical?"height":"width",T=e.vertical?"width":"height";n[y]="".concat(k.value,"px"),n[T]=e[T]?"".concat(e[T],"px"):""}return n}),Y=n=>{const{active:y}=t;return n?e.loop?ue(y+n,-1,l.value):ue(y+n,0,w.value):y},X=(n,y=0)=>{let T=n*m.value;e.loop||(T=Math.min(T,-I.value));let _=y-T;return e.loop||(_=ue(_,I.value,0)),_},B=({pace:n=0,offset:y=0,emitChange:T})=>{if(l.value<=1)return;const{active:_}=t,a=Y(n),i=X(a,y);if(e.loop){if(f[0]&&i!==I.value){const v=i<I.value;f[0].setOffset(v?k.value:0)}if(f[l.value-1]&&i!==0){const v=i>0;f[l.value-1].setOffset(v?-k.value:0)}}t.active=a,t.offset=i,T&&a!==_&&o("change",g.value)},M=()=>{t.swiping=!0,t.active<=-1?B({pace:l.value}):t.active>=l.value&&B({pace:-l.value})},D=()=>{M(),u.reset(),Q(()=>{t.swiping=!1,B({pace:-1,emitChange:!0})})},G=()=>{M(),u.reset(),Q(()=>{t.swiping=!1,B({pace:1,emitChange:!0})})};let L;const $=()=>clearTimeout(L),F=()=>{$(),+e.autoplay>0&&l.value>1&&(L=setTimeout(()=>{G(),F()},+e.autoplay))},O=(n=+e.initialSwipe)=>{if(!s.value)return;const y=()=>{var T,_;if(!he(s)){const a={width:s.value.offsetWidth,height:s.value.offsetHeight};t.rect=a,t.width=+((T=e.width)!=null?T:a.width),t.height=+((_=e.height)!=null?_:a.height)}l.value&&(n=Math.min(l.value-1,n),n===-1&&(n=l.value-1)),t.active=n,t.swiping=!0,t.offset=X(n),f.forEach(a=>{a.setOffset(0)}),F()};he(s)?N().then(y):y()},U=()=>O(t.active);let J;const ie=n=>{!e.touchable||n.touches.length>1||(u.start(n),d=!1,J=Date.now(),$(),M())},oe=n=>{e.touchable&&t.swiping&&(u.move(n),K.value&&(!e.loop&&(t.active===0&&C.value>0||t.active===l.value-1&&C.value<0)||(Ve(n,e.stopPropagation),B({offset:C.value}),d||(o("dragStart",{index:g.value}),d=!0))))},ee=()=>{if(!e.touchable||!t.swiping)return;const n=Date.now()-J,y=C.value/n;if((Math.abs(y)>.25||Math.abs(C.value)>m.value/2)&&K.value){const _=e.vertical?u.offsetY.value:u.offsetX.value;let a=0;e.loop?a=_>0?C.value>0?-1:1:0:a=-Math[C.value>0?"ceil":"floor"](C.value/m.value),B({pace:a,emitChange:!0})}else C.value&&B({pace:0});d=!1,t.swiping=!1,o("dragEnd",{index:g.value}),F()},se=(n,y={})=>{M(),u.reset(),Q(()=>{let T;e.loop&&n===l.value?T=t.active===0?0:n:T=n%l.value,y.immediate?Q(()=>{t.swiping=!1}):t.swiping=!1,B({pace:T-t.active,emitChange:!0})})},ce=(n,y)=>{const T=y===g.value,_=T?{backgroundColor:e.indicatorColor}:void 0;return S("i",{style:_,class:ae("indicator",{active:T})},null)},re=()=>{if(c.indicator)return c.indicator({active:g.value,total:l.value});if(e.showIndicators&&l.value>1)return S("div",{class:ae("indicators",{vertical:e.vertical})},[Array(l.value).fill("").map(ce)])};return p({prev:D,next:G,state:t,resize:U,swipeTo:se}),h({size:m,props:e,count:l,activeIndicator:g}),P(()=>e.initialSwipe,n=>O(+n)),P(l,()=>O(t.active)),P(()=>e.autoplay,F),P([Re,Ye,()=>e.width,()=>e.height],U),P(Xe(),n=>{n==="visible"?F():$()}),me(O),Be(()=>O(t.active)),$e(()=>O(t.active)),Fe($),Ue($),_e("touchmove",oe,{target:r}),()=>{var n;return S("div",{ref:s,class:ae()},[S("div",{ref:r,style:b.value,class:ae("track",{vertical:e.vertical}),onTouchstartPassive:ie,onTouchend:ee,onTouchcancel:ee},[(n=c.default)==null?void 0:n.call(c)]),re()])}}});const St=le(Tt),[Ct,Ce]=j("tabs");var xt=q({name:Ct,props:{count:de(Number),inited:Boolean,animated:Boolean,duration:de(W),swipeable:Boolean,lazyRender:Boolean,currentIndex:de(Number)},emits:["change"],setup(e,{emit:o,slots:c}){const s=z(),r=u=>o("change",u),t=()=>{var u;const f=(u=c.default)==null?void 0:u.call(c);return e.animated||e.swipeable?S(St,{ref:s,loop:!1,class:Ce("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:r},{default:()=>[f]}):f},d=u=>{const f=s.value;f&&f.state.active!==u&&f.swipeTo(u,{immediate:!e.inited})};return P(()=>e.currentIndex,d),me(()=>{d(e.currentIndex)}),p({swipeRef:s}),()=>S("div",{class:Ce("content",{animated:e.animated||e.swipeable})},[t()])}});const[Ee,ne]=j("tabs"),It={type:qe("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:Z(0),duration:Z(.3),animated:Boolean,ellipsis:H,swipeable:Boolean,scrollspy:Boolean,offsetTop:Z(0),background:String,lazyRender:H,lineWidth:W,lineHeight:W,beforeChange:Function,swipeThreshold:Z(5),titleActiveColor:String,titleInactiveColor:String},Me=Symbol(Ee);var kt=q({name:Ee,props:It,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:o,slots:c}){let s,r,t,d,u;const f=z(),h=z(),l=z(),m=z(),C=Pe(),I=Ze(f),[w,k]=wt(),{children:g,linkChildren:K}=ke(Me),b=be({inited:!1,position:"",lineStyle:{},currentIndex:-1}),Y=x(()=>g.length>+e.swipeThreshold||!e.ellipsis||e.shrink),X=x(()=>({borderColor:e.color,background:e.background})),B=(a,i)=>{var v;return(v=a.name)!=null?v:i},M=x(()=>{const a=g[b.currentIndex];if(a)return B(a,b.currentIndex)}),D=x(()=>Ke(e.offsetTop)),G=x(()=>e.sticky?D.value+s:0),L=a=>{const i=h.value,v=w.value;if(!Y.value||!i||!v||!v[b.currentIndex])return;const A=v[b.currentIndex].$el,R=A.offsetLeft-(i.offsetWidth-A.offsetWidth)/2;d&&d(),d=bt(i,R,a?0:+e.duration)},$=()=>{const a=b.inited;N(()=>{const i=w.value;if(!i||!i[b.currentIndex]||e.type!=="line"||he(f.value))return;const v=i[b.currentIndex].$el,{lineWidth:A,lineHeight:R}=e,E=v.offsetLeft+v.offsetWidth/2,V={width:we(A),backgroundColor:e.color,transform:"translateX(".concat(E,"px) translateX(-50%)")};if(a&&(V.transitionDuration="".concat(e.duration,"s")),ge(R)){const te=we(R);V.height=te,V.borderRadius=te}b.lineStyle=V})},F=a=>{const i=a<b.currentIndex?-1:1;for(;a>=0&&a<g.length;){if(!g[a].disabled)return a;a+=i}},O=(a,i)=>{const v=F(a);if(!ge(v))return;const A=g[v],R=B(A,v),E=b.currentIndex!==null;b.currentIndex!==v&&(b.currentIndex=v,i||L(),$()),R!==e.active&&(o("update:active",R),E&&o("change",R,A.title)),t&&!e.scrollspy&&Je(Math.ceil(ye(f.value)-D.value))},U=(a,i)=>{const v=g.find((R,E)=>B(R,E)===a),A=v?g.indexOf(v):0;O(A,i)},J=(a=!1)=>{if(e.scrollspy){const i=g[b.currentIndex].$el;if(i&&I.value){const v=ye(i,I.value)-G.value;r=!0,u&&u(),u=mt(I.value,v,a?0:+e.duration,()=>{r=!1})}}},ie=(a,i,v)=>{const{title:A,disabled:R}=g[i],E=B(g[i],i);R||(Qe(e.beforeChange,{args:[E],done:()=>{O(i),J()}}),pe(a)),o("clickTab",{name:E,title:A,event:v,disabled:R})},oe=a=>{t=a.isFixed,o("scroll",a)},ee=a=>{N(()=>{U(a),J(!0)})},se=()=>{for(let a=0;a<g.length;a++){const{top:i}=Te(g[a].$el);if(i>G.value)return a===0?0:a-1}return g.length-1},ce=()=>{if(e.scrollspy&&!r){const a=se();O(a)}},re=()=>{if(e.type==="line"&&g.length)return S("div",{class:ne("line"),style:b.lineStyle},null)},n=()=>{var a,i,v;const{type:A,border:R,sticky:E}=e,V=[S("div",{ref:E?void 0:l,class:[ne("wrap"),{[Ge]:A==="line"&&R}]},[S("div",{ref:h,role:"tablist",class:ne("nav",[A,{shrink:e.shrink,complete:Y.value}]),style:X.value,"aria-orientation":"horizontal"},[(a=c["nav-left"])==null?void 0:a.call(c),g.map(te=>te.renderTitle(ie)),re(),(i=c["nav-right"])==null?void 0:i.call(c)])]),(v=c["nav-bottom"])==null?void 0:v.call(c)];return E?S("div",{ref:l},[V]):V},y=()=>{$(),N(()=>{var a,i;L(!0),(i=(a=m.value)==null?void 0:a.swipeRef.value)==null||i.resize()})};P(()=>[e.color,e.duration,e.lineWidth,e.lineHeight],$),P(Re,y),P(()=>e.active,a=>{a!==M.value&&U(a)}),P(()=>g.length,()=>{b.inited&&(U(e.active),$(),N(()=>{L(!0)}))});const T=()=>{U(e.active,!0),N(()=>{b.inited=!0,l.value&&(s=Te(l.value).height),L(!0)})},_=(a,i)=>o("rendered",a,i);return p({resize:y,scrollTo:ee}),Be($),$e($),je(T),ht(f,$),_e("scroll",ce,{target:I,passive:!0}),K({id:C,props:e,setLine:$,scrollable:Y,onRendered:_,currentName:M,setTitleRefs:k,scrollIntoView:L}),()=>S("div",{ref:f,class:ne([e.type])},[e.sticky?S(gt,{container:f.value,offsetTop:D.value,onScroll:oe},{default:()=>[n()]}):n(),S(xt,{ref:m,count:g.length,inited:b.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:b.currentIndex,onChange:O},{default:()=>{var a;return[(a=c.default)==null?void 0:a.call(c)]}})])}});const De=Symbol(),Nt=()=>et(De,null),[Rt,xe]=j("tab"),Bt=q({name:Rt,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:W,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:H},setup(e,{slots:o}){const c=x(()=>{const r={},{type:t,color:d,disabled:u,isActive:f,activeColor:h,inactiveColor:l}=e;d&&t==="card"&&(r.borderColor=d,u||(f?r.backgroundColor=d:r.color=d));const C=f?h:l;return C&&(r.color=C),r}),s=()=>{const r=S("span",{class:xe("text",{ellipsis:!e.scrollable})},[o.title?o.title():e.title]);return e.dot||ge(e.badge)&&e.badge!==""?S(tt,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[r]}):r};return()=>S("div",{id:e.id,role:"tab",class:[xe([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:c.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[s()])}}),[$t,_t]=j("swipe-item");var At=q({name:$t,setup(e,{slots:o}){let c;const s=be({offset:0,inited:!1,mounted:!1}),{parent:r,index:t}=Ae(Oe);if(!r)return;const d=x(()=>{const h={},{vertical:l}=r.props;return r.size.value&&(h[l?"height":"width"]="".concat(r.size.value,"px")),s.offset&&(h.transform="translate".concat(l?"Y":"X","(").concat(s.offset,"px)")),h}),u=x(()=>{const{loop:h,lazyRender:l}=r.props;if(!l||c)return!0;if(!s.mounted)return!1;const m=r.activeIndicator.value,C=r.count.value-1,I=m===0&&h?C:m-1,w=m===C&&h?0:m+1;return c=t.value===m||t.value===I||t.value===w,c}),f=h=>{s.offset=h};return me(()=>{N(()=>{s.mounted=!0})}),p({setOffset:f}),()=>{var h;return S("div",{class:_t(),style:d.value},[u.value?(h=o.default)==null?void 0:h.call(o):null])}}});const Pt=le(At),[zt,fe]=j("tab"),Ot=at({},nt,{dot:Boolean,name:W,badge:W,title:String,disabled:Boolean,titleClass:lt,titleStyle:[String,Object],showZeroBadge:H});var Et=q({name:zt,props:Ot,setup(e,{slots:o}){const c=Pe(),s=z(!1),r=vt(),{parent:t,index:d}=Ae(Me);if(!t)return;const u=()=>{var w;return(w=e.name)!=null?w:d.value},f=()=>{s.value=!0,t.props.lazyRender&&N(()=>{t.onRendered(u(),e.title)})},h=x(()=>{const w=u()===t.currentName.value;return w&&!s.value&&f(),w}),l=z(""),m=z("");it(()=>{const{titleClass:w,titleStyle:k}=e;l.value=w?ot(w):"",m.value=k&&typeof k!="string"?st(ct(k)):k});const C=w=>S(Bt,ft({key:c,id:"".concat(t.id,"-").concat(d.value),ref:t.setTitleRefs(d.value),style:m.value,class:l.value,isActive:h.value,controls:c,scrollable:t.scrollable.value,activeColor:t.props.titleActiveColor,inactiveColor:t.props.titleInactiveColor,onClick:k=>w(r.proxy,d.value,k)},Se(t.props,["type","color","shrink"]),Se(e,["dot","badge","title","disabled","showZeroBadge"])),{title:o.title}),I=z(!h.value);return P(h,w=>{w?I.value=!1:Q(()=>{I.value=!0})}),P(()=>e.title,()=>{t.setLine(),t.scrollIntoView()}),rt(De,h),p({id:c,renderTitle:C}),()=>{var w;const k="".concat(t.id,"-").concat(d.value),{animated:g,swipeable:K,scrollspy:b,lazyRender:Y}=t.props;if(!o.default&&!g)return;const X=b||h.value;if(g||K)return S(Pt,{id:c,role:"tabpanel",class:fe("panel-wrapper",{inactive:I.value}),tabindex:h.value?0:-1,"aria-hidden":!h.value,"aria-labelledby":k},{default:()=>{var D;return[S("div",{class:fe("panel")},[(D=o.default)==null?void 0:D.call(o)])]}});const M=s.value||b||!Y?(w=o.default)==null?void 0:w.call(o):null;return ut(S("div",{id:c,role:"tabpanel",class:fe("panel"),tabindex:X?0:-1,"aria-labelledby":k},[M]),[[dt,X]])}}});const Ht=le(Et),Wt=le(kt);export{Pt as S,Ht as T,St as a,Wt as b,Nt as u};
