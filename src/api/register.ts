import axios from '@/api/base'

import type { ISmsSendCode,ISmsCheckCode ,IUserInfo} from '@/types/register'

// 手机号是否注册
export  function phoneIsExisted(phone:number){
    return axios.post<boolean,boolean>('/register/phone/check',{
        phone
    })
}

// 用户名是否注册
export  function usernameIsExisted(username:string){
    return axios.post<boolean,boolean>('/register/username/check',{
        username
    })
}

// 获取短信验证码
export function registerCodeSend(phone:number){
    return axios.post<ISmsSendCode,ISmsSendCode>('/register/code/send',{
        phone
    })
}

//  验证验证码是否过期或无效
export function registerCodeCheck(phone:number,code:string){
   return axios.post<ISmsCheckCode,ISmsCheckCode>('/register/code/check',{
    phone,
    code
   })
}

// 用户注册
export function smsRegistor({phone,username,password,code}:IUserInfo){
    return axios.post('/sms/register',{
        phone,
        username,
        password,
        code
    })
}