import type { IGoods } from './shop'
import type { IShopingCartInfos } from '@/types/shop'

export interface IOrderList {
  shopId: number
  shopName: string
  goodsList: IGoods[]
}

export interface IOrderItem extends IShopingCartInfos {
  userId?: number
  orderId?: number
  shopId?: number
  addressId?: number
  isCanceled?: boolean
}
