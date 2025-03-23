import{g as G,S as g,d as U,r as m,R as D,E as p,e as t,N as l,F as a,a5 as R,a6 as P,D as f,W as c,I as T,H as v,J as q,a2 as H,K,M as O}from"./index-ce5e170b.js";import{F as z,C as A,a as J}from"./index-c4bdb8ba.js";import{F as M}from"./index-78fb2202.js";import{N as W,_ as j}from"./index-95dee2f0.js";import{s as Q,u as X,P as Y,C as Z,_ as $,a as ee,b as oe,c as se}from"./useSmsCode-2d08b4ae.js";import{u as te}from"./user-638b6ecb.js";import"./use-id-119f5b86.js";G(Q);function ae(e){return g.post("/login/code/send",{phone:e})}function ne(e,o){return g.post("/login/code/check",{phone:e,code:o})}function de(e,o){return g.post("/sms/login",{phone:e,code:o})}const r=e=>(K("data-v-adf8074e"),e=e(),O(),e),le={class:"register-page"},ce={class:"register-page__body"},re=R('<div class="body-title" data-v-adf8074e><div class="txt" data-v-adf8074e>验证码登录</div><img src="'+$+'" alt="橘黄色渐变图" data-v-adf8074e></div><div class="body-cart-img" data-v-adf8074e><img src="'+ee+'" alt="购物车" data-v-adf8074e></div>',2),ie={class:"body-form"},_e=r(()=>a("h3",{class:"title"},"手机号",-1)),ue=r(()=>a("h3",{class:"title"},"短信验证码",-1)),me={key:1,class:"code-count-down"},pe={class:"agreement"},fe=r(()=>a("a",{href:"#"},"《隐私协议》",-1)),ve=r(()=>a("a",{href:"#"},"《免责声明》",-1)),ge=U({__name:"LoginIndex",setup(e){const o=m(""),i=m(""),_=m(!1),y=D(),C=te(),b=()=>{history.back()},x=n=>new Promise(s=>{oe("验证中..."),ne(Number(o.value),n).then(u=>{s(u.ACK==="ok")}).catch(()=>{s(!1)}).finally(()=>{se()})}),{isGetCode:k,countdown:V,getCode:I}=X(),N=()=>{I(ae,Number(o.value))},S=async()=>{if(!_.value){P({message:"请先同意相关条款"});return}try{let n=await de(Number(o.value),i.value);C.addUserInfo(n),y.push("/")}catch(n){}};return(n,s)=>{const u=q,w=W,h=M,L=A,E=H,B=J,F=z;return f(),p("div",le,[t(w,{title:"登录","left-arrow":"",onClickLeft:b},{right:l(()=>[t(u,{name:"ellipsis",color:"#000",size:"30"})]),_:1}),a("div",ce,[re,a("div",ie,[t(F,{onSubmit:S},{default:l(()=>[t(L,{inset:""},{default:l(()=>[_e,t(h,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=d=>o.value=d),name:"phone",placeholder:"请输入手机号",autocomplete:"off",rules:[{required:!0,message:"请添写手机号"},{pattern:c(Y),message:"手机号格式不正确"}]},null,8,["modelValue","rules"]),ue,t(h,{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=d=>i.value=d),name:"code",autocomplete:"off",placeholder:"填写短信验证码",rules:[{required:!0,message:"密码不能为空"},{pattern:c(Z),message:"验证码只能是6位数字"},{validator:x,message:"验证码无效"}]},{extra:l(()=>[c(k)?(f(),p("span",me,"已发送("+T(c(V))+")s",1)):(f(),p("span",{key:0,class:"code-button",onClick:N},"获取验证码"))]),_:1},8,["modelValue","rules"])]),_:1}),a("div",null,[t(E,{round:"",block:"",type:"primary","native-type":"submit"},{default:l(()=>[v(" 登录 ")]),_:1})]),a("div",pe,[t(B,{modelValue:_.value,"onUpdate:modelValue":s[2]||(s[2]=d=>_.value=d)},null,8,["modelValue"]),v(" 并同意"),fe,v("和"),ve])]),_:1})])])])}}});const Ie=j(ge,[["__scopeId","data-v-adf8074e"]]);export{Ie as default};
