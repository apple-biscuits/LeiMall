import axios from '@/api/base'
import type { FruitsList,IUserInfo,ILogin } from '@/types/test'

// 请求所有水果列表
export function getfruits(){
   return axios.get<FruitsList,FruitsList>('/getfruits')
}

// 请求登录
export function login({username,password}:IUserInfo){
    return axios
    .post<ILogin,ILogin>('/login', {
      username,
      password
    })
}


// .....

