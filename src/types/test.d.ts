
// 返回的每一项数据类型
export interface FiruitItem{
    id:number,
    name:string,
    price:number,
    benefits:string
}

// 返回数据data的类型
// export type FruitsList=Array<FiruitItem>
export type FruitsList=FiruitItem[]

// 通用的接口
// export interface IResponseData{
//     code:number,
//     msg:string,
//     data:FruitsList
// }

export interface ILogin{
    token:string,
    userInfo:IUserInfo
}

export interface IUserInfo{
    username:string,
    password:string
}