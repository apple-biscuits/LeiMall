import { ref, onUnmounted } from 'vue'
import type {ISmsSendCode} from "@/types/register"

export default ()=>{

// 获取验证码倒计时
const isGetCode = ref(false) // 没有获取验证码
const countdown = ref(60)
let timer: number
// 发送请求获取验证码，并开启到计时功能
const getCode = (smsSendCode:(phone:number)=>Promise<ISmsSendCode>,phone:number) => {
  // 正在获取验证码
  isGetCode.value = true
  // 倒计时
  if (timer) {
    clearInterval(timer)
  }
  // 开启定时器
  timer = setInterval(() => {
    console.log('sssss')
    countdown.value--
    if (countdown.value <= 0) {
      //清除定时器
      clearInterval(timer)
      // 未获取验证码
      isGetCode.value = false
      countdown.value=60
    }
  }, 1000)

  // 发请求，去获取验证----后台会发送验证码到对应的手号上
  // .....稍后开发
  // 这里需要用到注册的手机号
  // registerCodeSend(phone)
  try{
    smsSendCode(phone)
  }catch{
    //
  }
    

}

// 组件销毁时，清除定时器
onUnmounted(() => {
  console.log('销毁')
  clearInterval(timer)
})

return {
    isGetCode,
    countdown,
    getCode
}

}