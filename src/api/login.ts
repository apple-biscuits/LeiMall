import axios from '@/api/base'
import type { ISmsSendCode,ISmsCheckCode} from '@/types/register'
import type {IResponseLoginData} from '@/types/login'

// 获取登录验证码
export  function smsLoginCodeSend(phone:number){
    return axios.post<ISmsSendCode,ISmsSendCode>('/login/code/send',{
        phone
    })
}

// 验证登录验证码
export function smsLoginCodeCheck(phone:number,code:string){
    return axios.post<ISmsCheckCode,ISmsCheckCode>('/login/code/check',{
        phone,
        code
    })
}

// 用户登录
export function smsLogin(phone:number,code:string){
    return axios.post<IResponseLoginData,IResponseLoginData>('/sms/login',{
        phone,
        code
    })
}

