import axios from 'axios'
import { showDialog } from 'vant'
import 'vant/es/dialog/style'
import router from '@/router/index'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000/api', //  http://127.0.0.1:5173/api
  timeout: 3000
})

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 发送请求时，会在localstorage中读取token
    const token = window.localStorage.getItem('token')
    // 如果有token
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  async (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // 身份认证成功，就会走这里，获得返回的数据
    const { data: _data } = response
    const { data, code, msg } = _data
    // 根据业务状态码来判断要做的事情
    if (code === -1) {
      //弹出提示框
      await showDialog({
        title: '提示',
        message: msg
      })
      // 抛出错误
      return Promise.reject(msg)
    }

    return data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // 如果身份认证失败，就会走这里
    if (error.response && error.response.status === 401) {
      showDialog({
        title: '请登录',
        message: '没有访问权限，请登录后再试'
      }).then(() => {
        // 关闭弹窗后的逻辑
        // 返回到登录页
        router.push('/login')
      })
    }
  }
)

export default instance
