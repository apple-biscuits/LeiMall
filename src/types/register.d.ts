export interface ISmsSendCode{
    code:string,
    [prop:string]:string
}

export interface ISmsCheckCode{
    ACK:string
}

export interface IUserInfo{
    phone:number,
    username:string,
    password:string,
    code:string
}