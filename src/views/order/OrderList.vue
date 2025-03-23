<script setup lang="ts">
import type { IOrderItem } from '@/types/order'
import type { IGoods } from '@/types/shop'

defineProps<{
  data: IOrderItem | null
  show: boolean
}>()

const getPrice = (v: IGoods) => {
  let nowPriceTotal = 0
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
  return nowPriceTotal.toFixed(2)
}
</script>

<template>
  <div class="order-list">
    <div class="order-list__top">
      <div class="title common-ellipsis">{{ data?.shopName }}</div>
      <div
        class="order-state"
        v-if="show"
        :class="{ success: !data?.isCanceled, cancel: data?.isCanceled }"
      >
        {{ data!.isCanceled ? '已取消' : '已完成' }}
      </div>
    </div>
    <div class="order-list__main">
      <div class="goods" v-for="goods in data?.goodsList" :key="goods.goodsId">
        <RouterLink to="/">
          <div class="goods-img">
            <img :src="goods.imgUrl" alt="" />
          </div>
          <div class="goods-infos">
            <div class="title common-ellipsis">{{ goods.name }}</div>
            <div class="cart-count">X{{ goods.cartCount }}</div>
          </div>
          <div class="goods-price">
            <div class="nowprice">
              ￥<b>{{ getPrice(goods) }}</b>
            </div>
            <div class="oldprice">
              <del>￥{{ goods.oldPrice * goods.cartCount }}</del>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-list {
  margin: 12px 16px;
  background-color: #fff;
  border-radius: 4px;

  &__top {
    display: flex;
    padding: 12px 12px 10px;
    border-bottom: 1px solid #f2f3f5;
    .title {
      flex-grow: 1;
      font-size: 14px;
      font-family:
        PingFangSC-Semibold,
        PingFang SC;
      font-weight: 600;
      color: #051733;
      line-height: 26px;
    }
    .order-state {
      font-size: 13px;
      font-weight: 400;
      line-height: 22px;
      flex-shrink: 0;
    }
    .success {
      color: #06d506;
    }
    .cancel {
      color: #697485;
    }
  }
  &__main {
    .goods {
      padding: 10px 12px 12px;

      a {
        display: flex;
        align-items: center;
        .goods-img {
          width: 50px;
          height: 50px;
          margin-right: 10px;
          img {
            width: inherit;
            height: inherit;
          }
        }
        .goods-infos {
          flex-grow: 1;
          .title {
            max-width: 200px;
            font-size: 14px;
            font-family:
              PingFangSC-Semibold,
              PingFang SC;
            font-weight: 600;
            color: #051733;
            line-height: 20px;
            margin-bottom: 2px;
          }
          .cart-count {
            font-weight: 400;
            color: #818b98;
            line-height: 22px;
          }
        }

        .goods-price {
          text-align: right;
          .nowprice {
            font-weight: 400;
            color: var(--theme-color-important);
            line-height: 23px;
            font-size: 12px;
            b {
              font-size: 16px;
              font-family:
                PingFangSC-Semibold,
                PingFang SC;
              font-weight: 600;
            }
          }
          .oldprice {
            font-weight: 400;
            color: #b4b9c1;
            line-height: 15px;
          }
        }
      }
    }
  }
}
</style>
