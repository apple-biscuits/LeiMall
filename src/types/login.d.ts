export interface ILoginUserInfo {
  userId: number
  phone?: number
  username?: string
  nickname: string
  avatarUrl: string
}

export interface IResponseLoginData {
  userInfo: ILoginUserInfo
  token: string
}
