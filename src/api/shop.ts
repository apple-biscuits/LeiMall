import axios from '@/api/base'
import type { ISearchShopItem } from '@/types/search'
import type { IShopGoods } from '@/types/shop'

// 根据shopId获取店铺信息
export function getShopDetailsByShopId(shopId: number) {
  return axios.get<ISearchShopItem, ISearchShopItem>('/shop/details', {
    params: {
      shopId
    }
  })
}

// 根据shopId返回店铺的所有商品
export function getShopGoodsByShopId(shopId: number) {
  return axios.get<IShopGoods, IShopGoods>('/shop/goods', {
    params: {
      shopId
    }
  })
}
