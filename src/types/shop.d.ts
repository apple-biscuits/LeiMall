export interface IGoods {
  goodsId: string
  name: string
  imgUrl: string
  sellCount: number
  rating: string
  price: number
  oldPrice: number
  tips: string[]
  discount: {
    type: number
    value: number
    limitCount: number
  }
  cartCount: number
  checked: boolean
}

export interface IGoodsDetails {
  shopId: number
  shopName: string
  goods: IGoods
}

export interface IGoodsType {
  typeId: number
  typename: string
  icon: string
  goods: IGoods[]
}

export interface IShopGoods {
  shopId: number
  shopName: string
  data: IGoodsType[]
}

export interface IShopingCartInfos {
  shopName: string
  goodsList: IGoods[]
}
