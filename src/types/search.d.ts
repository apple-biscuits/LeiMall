export interface IDiscount{
    type:number
    label:string
    content:{count:number,if:number}[]
}
export interface IRedbag{
    type:number
    count:number
    if:string
    label:string
}

export interface IService{
    type:number
    value:string
}

export interface ISearchShopItem{
    shopId:number
    avatarUrl:string
    shopName:string
    keyword:string[]
    score:number
    monthlySales:number
    deliveryTime:string
    deliveryDistance:string
    deliveryStratingPrice:string
    deliveryStrategy:string
    deliveryTags:string
    comments:string[]
    tops:string
    services:IService[]
    redbags:IRedbag[]
    discounts:IDiscount[]
    announcement:string
}

export interface ISearchShopListData{
    total:number
    data:ISearchShopItem[]
}

export interface IHistoryItem {
    id: number
    keyword: string
  }

export interface ISearchShopListData{
    total:number
    data:ISearchShopItem[]
}