import axios from '@/api/base'
// token身份认证
export function auth(){
    return axios.post<Boolean,Boolean>('/auth')
}