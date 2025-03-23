import axios from '@/api/base'
import type { IGoodsDetails } from '@/types/shop'
// 返回店铺对应商品数据
export function getGoodsDetailsById(shopId: number, goodsId: string) {
  return axios.get<IGoodsDetails, IGoodsDetails>('/goods/details', {
    params: {
      shopId,
      goodsId
    }
  })
}
