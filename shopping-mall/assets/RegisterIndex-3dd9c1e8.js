import{S as v,d as A,R as M,r as f,a7 as O,E as c,e as t,N as i,F as a,a5 as H,a6 as K,D as u,W as l,a8 as L,a9 as W,Q as J,I as Q,H as w,J as $,a2 as j,K as X,M as Y}from"./index-ce5e170b.js";import{F as Z,C as ee,a as se}from"./index-c4bdb8ba.js";import{F as oe}from"./index-78fb2202.js";import{N as te,_ as ae}from"./index-95dee2f0.js";import{u as ne,P as le,U as re,d as de,C as ce,_ as ie,a as ue,b as V,c as k}from"./useSmsCode-2d08b4ae.js";import"./use-id-119f5b86.js";function me(s){return v.post("/register/phone/check",{phone:s})}function pe(s){return v.post("/register/username/check",{username:s})}function _e(s){return v.post("/register/code/send",{phone:s})}function fe(s,p){return v.post("/register/code/check",{phone:s,code:p})}function ve({phone:s,username:p,password:h,code:r}){return v.post("/sms/register",{phone:s,username:p,password:h,code:r})}const m=s=>(X("data-v-b62f8f4e"),s=s(),Y(),s),ge={class:"register-page"},he={class:"register-page__body"},ye=H('<div class="body-title" data-v-b62f8f4e><div class="txt" data-v-b62f8f4e>注册账号</div><img src="'+ie+'" alt="橘黄色渐变图" data-v-b62f8f4e></div><div class="body-cart-img" data-v-b62f8f4e><img src="'+ue+'" alt="购物车" data-v-b62f8f4e></div>',2),be={class:"body-form"},Ce=m(()=>a("h3",{class:"title"},"手机号",-1)),we=m(()=>a("h3",{class:"title"},"用户名",-1)),Ve=m(()=>a("h3",{class:"title"},"密码",-1)),ke={key:0,class:"show-password pos"},xe={key:1,class:"close-password pos"},Ne=m(()=>a("h3",{class:"title"},"短信验证码",-1)),Ee={key:1,class:"code-count-down"},Re={class:"agreement"},Se=m(()=>a("a",{href:"#"},"《隐私协议》",-1)),Ie=m(()=>a("a",{href:"#"},"《免责声明》",-1)),Be=A({__name:"RegisterIndex",setup(s){const p=()=>{history.back()},h=M(),r=f(""),y=f(""),_=f(""),b=f(""),C=f(!1),[x,N]=O(!1),{isGetCode:E,countdown:R,getCode:S}=ne(),I=()=>{S(_e,Number(r.value))},B=d=>new Promise(e=>{V("验证中..."),me(Number(d)).then(n=>{e(!n)}).catch(()=>{e(!1)}).finally(()=>{k()})}),U=d=>new Promise(e=>{V("验证中..."),pe(d).then(n=>{e(!n)}).catch(()=>{e(!1)}).finally(()=>{k()})}),G=d=>new Promise(e=>{V("验证中..."),fe(Number(r.value),d).then(n=>{e(n.ACK==="ok")}).catch(()=>{e(!1)}).finally(()=>{k()})}),P=async()=>{if(!C.value){K({message:"请先同意相关条款"});return}console.log("ssss");try{await ve({phone:Number(r.value),username:y.value,password:_.value,code:b.value}),h.push("/")}catch(d){}};return(d,e)=>{const n=$,D=te,g=oe,F=ee,T=j,q=se,z=Z;return u(),c("div",ge,[t(D,{title:"注册","left-arrow":"",onClickLeft:p},{right:i(()=>[t(n,{name:"ellipsis",color:"#000",size:"30"})]),_:1}),a("div",he,[ye,a("div",be,[t(z,{onSubmit:P},{default:i(()=>[t(F,{inset:""},{default:i(()=>[Ce,t(g,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=o=>r.value=o),name:"phone",placeholder:"填写你常用的手机号码作为登陆账号",autocomplete:"off",rules:[{required:!0,message:"请添写手机号"},{pattern:l(le),message:"手机号格式不正确"},{validator:B,message:"该手机号已注册"}]},null,8,["modelValue","rules"]),we,t(g,{modelValue:y.value,"onUpdate:modelValue":e[1]||(e[1]=o=>y.value=o),name:"username",autocomplete:"off",placeholder:"6-18位英文字母和数字组成",rules:[{required:!0,message:"请输入用户名"},{pattern:l(re),message:"用户名格式不正确"},{validator:U,message:"该用户名已存在"}]},null,8,["modelValue","rules"]),Ve,t(g,{modelValue:_.value,"onUpdate:modelValue":e[4]||(e[4]=o=>_.value=o),type:"password",autocomplete:"off",name:"password",placeholder:"8-16位包含数字、大小写字母、特殊符号",rules:[{required:!0,message:"密码不能为空"},{pattern:l(de),message:"密码格式不正确"}],trigger:"onChange"},{extra:i(()=>[a("div",{onClick:e[2]||(e[2]=o=>l(N)())},[l(x)?(u(),c("span",ke,[t(n,{name:"eye-o",size:"16",color:"#B4B9C1"})])):(u(),c("span",xe,[t(n,{name:"closed-eye",size:"16",color:"#B4B9C1"})]))]),l(x)?L((u(),c("input",{key:0,type:"text",class:"pwd",autocomplete:"off","onUpdate:modelValue":e[3]||(e[3]=o=>_.value=o),placeholder:"8-16位包含数字、大小写字母、特殊符号"},null,512)),[[W,_.value]]):J("",!0)]),_:1},8,["modelValue","rules"]),Ne,t(g,{modelValue:b.value,"onUpdate:modelValue":e[5]||(e[5]=o=>b.value=o),name:"code",autocomplete:"off",placeholder:"填写短信验证码",rules:[{required:!0,message:"密码不能为空"},{pattern:l(ce),message:"验证码只能是6位数字"},{validator:G,message:"验证码无效"}]},{extra:i(()=>[l(E)?(u(),c("span",Ee,"已发送("+Q(l(R))+")s",1)):(u(),c("span",{key:0,class:"code-button",onClick:I},"获取验证码"))]),_:1},8,["modelValue","rules"])]),_:1}),a("div",null,[t(T,{round:"",block:"",type:"primary","native-type":"submit"},{default:i(()=>[w(" 注册 ")]),_:1})]),a("div",Re,[t(q,{modelValue:C.value,"onUpdate:modelValue":e[6]||(e[6]=o=>C.value=o)},null,8,["modelValue"]),w(" 并同意"),Se,w("和"),Ie])]),_:1})])])])}}});const qe=ae(Be,[["__scopeId","data-v-b62f8f4e"]]);export{qe as default};
