import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { ILoginUserInfo, IResponseLoginData } from '@/types/login'
import type { useCounterStore } from './counter'

export const useUserStore = defineStore('user', () => {
  // 定义一个默认信息（用户未登录时）
  const defaultUserInfo: ILoginUserInfo = {
    userId: 0,
    nickname: '未登录',
    avatarUrl: '/images/avatar/default.jpg'
  }
  // window.localStorage.setItem('userInfo',JSON.stringify(defaultUserInfo))
  // // 定义一个字段来保存用户信息
  // const userInfo=ref(window.localStorage.getItem('userInfo'))

  // watch(userInfo,(value)=>{
  //     window.localStorage.setItem('userInfo',JSON.stringify(value))
  // })

  // 初始化userInfo的值 userInfo是一个ref
  const userInfo = useLocalStorage('userInfo', defaultUserInfo)

  // 添加用户信息
  const addUserInfo = (result: IResponseLoginData) => {
    userInfo.value = result.userInfo
    // 保存token
    window.localStorage.setItem('token', result.token)
  }
  // 移除用户信息
  const removeUserInfo = () => {
    // 不需要再考虑清localStorage
    // 退出后，显示默认信息
    userInfo.value = defaultUserInfo
    // 清空token的方法
    window.localStorage.setItem('token', '')
  }

  return {
    userInfo,
    addUserInfo,
    removeUserInfo
  }
})

export const useNumbererStore=defineStore('numberer',{
  state:()=>({num:1,name:"zhangsan"}),
  getters:{
    doubleNum:(state)=>state.num*2
  },
  actions:{
    increase(){
      this.num++;
    }
  }
})
