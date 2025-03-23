export interface IBannerItem {
  id: number
  advUrl: string
  imageUrl: string
}

export type BannerList = IBannerItem[]

export interface MenuItem {
  id: number
  title: string
  imgUrl: string
  href: string
}

export type MenuList = MenuItem[]

// 特价秒杀
export interface SeckillTimerGoods {
  shopId: number
  goodId: number
  name: string
  imgUrl: string
  rating: string
  price: number
  oldPrice: number
}
export interface ISeckillTimer {
  time: number
  goods: SeckillTimerGoods[]
}
