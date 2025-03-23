import axios from '@/api/base'
import type { BannerList, MenuList, ISeckillTimer } from '@/types/home'
import type { ISearchShopListData } from '@/types/search'

// 返回首页banner图
export function getBannerList() {
  return axios.get<BannerList, BannerList>('/banner')
}

// 返回首页菜单
export function getMenuList() {
  return axios.get<MenuList, MenuList>('/menu')
}

// 返回特价秒杀产品
export function getSeckillTimerGoods() {
  return axios.get<ISeckillTimer, ISeckillTimer>('/seckill-timer')
}

// 返回附近推荐店铺
export function getRecommendShop(page?: number, limit?: number) {
  return axios.get<ISearchShopListData, ISearchShopListData>('/recommend-shop', {
    params: {
      page,
      limit
    }
  })
}
