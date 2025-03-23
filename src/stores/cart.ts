// 购物车数据结构设计
// 店铺(shopId---数字)--->对应的购物车信息
/*
对象:
key （shopId)  
value: 购物车信息 (对象){shopName:'xx',goodsList:[]}
*/
/*
Map结构
key: shopId
value:购物车信息(对象){shopName:'xx',goodsList:[]}
new Map([
    [shopId,shopInfos],
    [shopId,shopInfos]
])
new Map([
    [1,{
        shopName:'xxx',
        goodList:[
             {
                goodsId:'10001'
                name: 'B级-进口香蕉2根/300-350g', // 商品名称
                imgUrl: '/images/goods/type1-01.jpg', // 商品图片
                cartCount: 1, // 购物车数量
                checked: false,  // 添加购物车按扭选中
                // ...更多字段
            },
        ]
    }]
])
*/

import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { IGoods, IShopingCartInfos } from '@/types/shop'
import { useUserStore } from './user'
import { watch } from 'vue'
const userStore = useUserStore()

export const useCartStore = defineStore('cart', () => {
  // 定义一个字段，用来存储购物车信息
  // a-- 0001  '0001-cart'
  // b---0002   '0002-cart'
  let cartList = useLocalStorage(
    `${userStore.userInfo.userId}-cart`,
    new Map<number, IShopingCartInfos>()
  )

  // 创建一个侦听器
  watch(
    () => userStore.userInfo.userId,
    (v) => {
      cartList = useLocalStorage(`${v}-cart`, new Map<number, IShopingCartInfos>())
    }
  )

  // 加入购物车
  const pushProductToCart = (shopId: number, shopName: string, goods: IGoods) => {
    // 首先要判断cartList中是否有对就的shopId，如果没有则新加一条，如果有，则看goodsList中是否添加了该商品，如果没有，则是新加一条商品，如果有，只需要更新cartCount+1,checked=true

    const shopInfos = cartList.value.get(shopId)
    if (!shopInfos) {
      // 没有店铺购物车信息
      goods.cartCount = 1 // 购物车数量1
      goods.checked = true
      // 如果没有,就直接新增一条店铺购物信息
      cartList.value.set(shopId, {
        shopName,
        goodsList: [goods]
      })
    } else {
      // 有店铺购物车信息
      const _goods = shopInfos.goodsList.find((v) => v.goodsId === goods.goodsId)
      if (_goods) {
        // 如果存在，则更新购物车数量和选中状态
        _goods.cartCount++
        _goods.checked = true
      } else {
        // 如果不存，则在店铺对应goodsList中新加一条
        goods.cartCount = 1
        goods.checked = true
        shopInfos.goodsList.push(goods)
      }
    }
    // console.log('cartList', cartList.value)
  }

  // 移除购物车
  const removeProductFromCart = (shopId: number, goodsId: string) => {
    const shopInfos = cartList.value.get(shopId)
    if (shopInfos) {
      // 要找到对应的商品
      const item = shopInfos.goodsList.find((v) => v.goodsId === goodsId)
      if (item) {
        // 如果有，则商品加购数减1
        item.cartCount--
        // 如果加购数量为0,则该商品就要从购物车中移除
        if (item.cartCount <= 0) {
          // 将它删除
          const index = shopInfos.goodsList.findIndex((v) => v.goodsId === goodsId)
          shopInfos.goodsList.splice(index, 1)
          // 如果goodsList中没有一条商品信息了，那对应的shopId店铺的加购信息就不应该存在cartList中
          if (shopInfos.goodsList.length === 0) {
            cartList.value.delete(shopId)
          }
        }
      }
    }
    // console.log('cartList-remove', cartList.value)
  }

  // 根据shopId和goodsId来查询对应商品的加购信息
  const getGoodsCartCount = (shopId: number, goodsId: string) => {
    const shopInfos = cartList.value.get(shopId)
    if (shopInfos) {
      // 查找对应的商品的加购数
      const item = shopInfos.goodsList.find((v) => v.goodsId === goodsId)
      return item ? item.cartCount : 0
    } else {
      return 0
    }
  }

  // 返回对应店铺的购物车列表信息
  const getCartListByShopId = (shopId: number) => {
    // 如果有对应shopId，返回对应信息，如果没有返回undefined
    return cartList.value.get(shopId)
  }

  // 动态切换商品的选中与取消状态
  const toggleChecked = (shopId: number, goodsId: string) => {
    const item = cartList.value.get(shopId)!.goodsList.find((v) => v.goodsId === goodsId)
    if (item) {
      item.checked ? (item.checked = false) : (item.checked = true)
    }
  }

  // 判断是否为全选
  const isAllChecked = (shopId: number) => {
    const shopInfos = cartList.value.get(shopId)
    if (shopInfos) {
      // 判断是不是全选
      const goodsList = shopInfos.goodsList
      for (let i = 0; i < goodsList.length; i++) {
        if (!goodsList[i].checked) {
          return false // 不是全选
        }
      }

      return true // 全选
    } else {
      return false // 不是全选
    }
  }

  // 取消全选方法
  const cancelAllChecked = (shopId: number) => {
    const shopInfos = cartList.value.get(shopId)
    if (shopInfos) {
      shopInfos.goodsList.forEach((v) => {
        v.checked = false
      })
    }
  }

  // 设置全选
  const setAllChecked = (shopId: number) => {
    const shopInfos = cartList.value.get(shopId)
    if (shopInfos) {
      shopInfos.goodsList.forEach((v) => {
        v.checked = true
      })
    }
  }

  // 动态切换（全选和取消全选）
  const toggleAllChecked = (shopId: number) => {
    if (isAllChecked(shopId)) {
      // 取消全选
      cancelAllChecked(shopId)
    } else {
      // 设置为全选
      setAllChecked(shopId)
    }
  }

  // 对应店铺购物车加购数量
  const cartCountTotalByShopId = (shopId: number) => {
    const shopInfos = cartList.value.get(shopId)
    if (shopInfos) {
      return shopInfos.goodsList.reduce((prev, next) => prev + next.cartCount, 0)
    } else {
      return 0
    }
  }

  // 对应店铺购物车选中商品数量
  const selectedCartCountByShopId = (shopId: number) => {
    const shopInfos = cartList.value.get(shopId)
    if (shopInfos) {
      // 统计选中商品数量
      return shopInfos.goodsList.reduce((prev, next) => {
        // 判断是否被选中
        if (next.checked) {
          return prev + next.cartCount
        } else {
          return prev
        }
      }, 0)
    } else {
      return 0
    }
  }

  // 定义一个方法，用来计算购物选中商品的总价（原价，现价）
  const getCartTotalPriceByShopId = (shopId: number) => {
    let nowPriceTotal = 0
    let oldPriceTotal = 0
    // 判断是否存在对应的shopId
    const shopInfos = cartList.value.get(shopId)
    if (shopInfos) {
      // 计算被选中的商品总价
      shopInfos.goodsList.forEach((v) => {
        // 要判断是否选中
        if (v.checked) {
          // 原价
          oldPriceTotal += v.cartCount * v.oldPrice
          // 现价
          if (v.cartCount > v.discount.limitCount) {
            // 加购数>折扣限购数
            nowPriceTotal +=
              v.discount.limitCount * v.oldPrice * v.discount.value * 0.1 +
              (v.cartCount - v.discount.limitCount) * v.oldPrice
          } else {
            // 加购数 < 折扣限购数
            // nowPriceTotal+=v.cartCount*v.price
            nowPriceTotal += v.cartCount * v.oldPrice * v.discount.value * 0.1
          }
        }
      })
    }

    return {
      nowPriceTotal: Number(nowPriceTotal.toFixed(2)),
      oldPriceTotal: Number(oldPriceTotal.toFixed(2))
    }
  }

  // 清空购物车
  const clearCartListByShopId = (shopId: number) => {
    cartList.value.delete(shopId)
  }

  // 返回对应店铺购物车中所有被选中的商品列表
  const getAllCheckedGoodsListByShopId = (shopId: number) => {
    // 判断有没有对应id
    const shopInfos = cartList.value.get(shopId)

    if (shopInfos) {
      const filter = shopInfos.goodsList.filter((v) => v.checked)
      return {
        shopId,
        shopName: shopInfos.shopName,
        goodsList: filter
      }
    } else {
      return null
    }
  }

  // 清空购物车中被生成订单的商品-对应店铺
  const clearCartCheckedGoodsByShopId = (shopId: number) => {
    const shopInfos = cartList.value.get(shopId)
    if (shopInfos) {
      // 过滤掉被选中，只留下没有选中的
      const filter = shopInfos.goodsList.filter((v) => !v.checked)
      // 考虑是不是为空
      if (filter.length <= 0) {
        // 移除shopInfos
        cartList.value.delete(shopId)
      } else {
        shopInfos.goodsList = filter
      }
    }
  }

  // 返回购物车列表信息
  const getCartList = () => {
    return cartList
  }

  // 返回购物车中所有被选中商品的总价
  const getAllCheckedGoodsPrice = () => {
    let nowPriceTotal = 0
    let oldPriceTotal = 0

    // 遍历整个cartList中每个店铺中每个被选中的元素的价格，进行累加
    // 1->{} 2->{}
    for (const { goodsList } of cartList.value.values()) {
      goodsList.forEach((v) => {
        if (v.checked) {
          // 如果被选中
          // 计算原价
          oldPriceTotal += v.cartCount * v.oldPrice
          // 现价
          if (v.cartCount > v.discount.limitCount) {
            // 加购数>折扣限购数
            nowPriceTotal +=
              v.discount.limitCount * v.oldPrice * v.discount.value * 0.1 +
              (v.cartCount - v.discount.limitCount) * v.oldPrice
          } else {
            // 加购数 < 折扣限购数
            // nowPriceTotal+=v.cartCount*v.price
            nowPriceTotal += v.cartCount * v.oldPrice * v.discount.value * 0.1
          }
        }
      })
    }

    // 返回商品价格
    return {
      nowPriceTotal,
      oldPriceTotal
    }
  }

  // 返回购物车中所有中的商品及店铺信息
  // [
  //   [1,{  goodsList:[]}],  ==> [1,{goodsList:[]}]
  //   [2,{}],
  // ]
  const getAllCheckedGoodsList = () => {
    const map = new Map<number, IShopingCartInfos>()
    // 遍历
    for (const [key, value] of cartList.value.entries()) {
      // 找到对应店铺下所有被选中的商品
      const goodsList = value.goodsList.filter((v) => v.checked)
      // 我要判断goodsList是不是空的
      if (goodsList.length > 0) {
        const shopInfos = { ...value }
        shopInfos.goodsList = goodsList
        map.set(key, shopInfos)
      }
    }
    return map
  }

  // 将生成订单的商品成购物车移除掉
  const clearAllCheckedGoodsList = () => {
    for (const [key, value] of cartList.value.entries()) {
      // 没有被选中的，留下，选中的删除
      const goodsList = value.goodsList.filter((v) => !v.checked)
      if (goodsList.length > 0) {
        // 留下没被选中的
        value.goodsList = goodsList
        cartList.value.set(key, value)
      } else {
        // 当前店铺没有加购的商品
        cartList.value.delete(key)
      }
    }
  }

  // 根据shopId和goodsId来删除购物车中指定商品
  const deleteGoodsToCartById = (shopId: number, goodsId: string) => {
    const shopInfos = cartList.value.get(shopId)
    if (shopInfos) {
      const index = shopInfos.goodsList.findIndex((v) => v.goodsId == goodsId)
      if (index >= 0) {
        // 有的就删除
        shopInfos.goodsList.splice(index, 1)
        // 判断删除后，对应店铺是否还有加购的商品，如果没有，则将店铺也删除
        if (shopInfos.goodsList.length === 0) {
          cartList.value.delete(shopId)
        }
      }
    }
  }

  return {
    cartList, // 购物车信息
    pushProductToCart, // 添加购物车
    removeProductFromCart, // 移除购物（商品加购数-1）
    getGoodsCartCount, // 返回商品加购数量
    getCartListByShopId, // 返回对应店铺的购物车列表信息
    toggleChecked, // 动态切换商品的选中与取消状态
    isAllChecked, // 判断是否为全选
    toggleAllChecked, // 动态切换（全选和取消全选）
    cartCountTotalByShopId, // 对应店铺购物车加购数量
    selectedCartCountByShopId, // 对应店铺购物车选中商品数量
    getCartTotalPriceByShopId, // 定义一个方法，用来计算购物选中商品的总价（原价，现价）
    clearCartListByShopId, // 清空购物车
    getAllCheckedGoodsListByShopId, // 返回对应店铺购物车中被选中商品数（生成订单）
    clearCartCheckedGoodsByShopId, // 清除掉购物车中生成订单的某个店铺的商品
    getCartList, // 获取购物车中所有数据
    getAllCheckedGoodsPrice, // 获取购物车中所有被选中商品的总价（原价和现价）
    getAllCheckedGoodsList, // 返回购物车中所有被选中的商品
    clearAllCheckedGoodsList, // 清空所有被选中的商品
    deleteGoodsToCartById // 根据shopId和goodsId来删除购物车中指定商品
  }
})
