<script setup lang="ts">
import { ref, computed } from 'vue'
import AddCart from '@/components/AddCart.vue'
import ShopingCart from '../shop/ShopingCart.vue'
import { getGoodsDetailsById } from '@/api/goods'
import type { IGoodsDetails } from '@/types/shop'
import { useCartStore } from '@/stores/cart'
import type { IGoods } from '@/types/shop'

import { useRoute } from 'vue-router'
import Demo from './Demo.vue'
const cartStore = useCartStore()
// 接受传递的shopId与goodsId
const route = useRoute()
const { shopId, goodsId } = route.params

const tabs = [
  {
    id: 1,
    title: '商品',
    component: Demo
  },
  {
    id: 2,
    title: '详情',
    component: Demo
  },
  {
    id: 3,
    title: '评价',
    component: Demo
  }
]
const active = ref(0)

// 获取商品详情
const goodsDetails = ref({
  shopId: 0,
  shopName: 'xx',
  goods: {
    goodsId: '',
    name: '',
    imgUrl: '',
    sellCount: 0,
    rating: '',
    price: 0,
    oldPrice: 0,
    tips: [''],
    discount: {
      type: 0,
      value: 0,
      limitCount: 0
    },
    cartCount: 0,
    checked: false
  }
} as IGoodsDetails)
const getGoodsDetailsData = async () => {
  try {
    goodsDetails.value = await getGoodsDetailsById(Number(shopId), goodsId as string)
  } catch {
    goodsDetails.value = {} as IGoodsDetails
  }
}

getGoodsDetailsData()

// 当前加入购物车数量
const cartCount = computed(() => cartStore.getGoodsCartCount(Number(shopId), goodsId as string))

console.log(cartCount.value)

// 加入购物车
const onAdd = (shopId: number, shopName: string, goods: IGoods) => {
  console.log('sss')
  cartStore.pushProductToCart(shopId, shopName, goods)
}

const onClickLeft = () => {
  history.back()
}
</script>

<template>
  <div class="goods-details-page">
    <van-sticky :offset-top="0">
      <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft">
        <template #right> <van-icon name="ellipsis" color="#000" size="30" /> </template
      ></van-nav-bar>
    </van-sticky>

    <div class="goods-details-page__top">
      <img :src="goodsDetails.goods.imgUrl" class="goods-img" />
      <div class="goods-details-page__top-text">
        <div class="title">{{ goodsDetails.goods.name }}</div>
        <div class="infos">
          <span class="tags" v-for="(item, index) in goodsDetails.goods.tips" :key="index">{{
            item
          }}</span>
          <span class="discount"
            >{{ goodsDetails.goods.discount.value }} 折 限{{
              goodsDetails.goods.discount.limitCount
            }}份</span
          >
          <van-icon name="star" color="#FFAF0F" />
          <span class="score"
            >评分 <i>{{ goodsDetails.goods.rating }}</i></span
          >
        </div>
        <div class="sales">月售：{{ goodsDetails.goods.sellCount }}</div>
        <div class="price-or-button">
          <div class="price">
            <span>￥ {{ goodsDetails.goods.price }}</span>
            <del>￥ {{ goodsDetails.goods.oldPrice }}</del>
          </div>
          <div class="add-button">
            <div
              class="add"
              v-if="cartCount === 0"
              @click="onAdd(Number(shopId), goodsDetails.shopName, goodsDetails.goods)"
            >
              <van-icon name="plus" />
              加入购物车
            </div>

            <AddCart
              :shop-id="Number(shopId)"
              :goods="goodsDetails.goods"
              :shop-name="goodsDetails.shopName"
              v-else
            >
            </AddCart>
          </div>
        </div>
      </div>
    </div>
    <div class="goods-details-page__main">
      <van-tabs v-model:active="active" sticky>
        <van-tab v-for="item in tabs" :title="item.title" :key="item.id">
          <component :is="item.component"></component>
        </van-tab>
      </van-tabs>
    </div>

    <ShopingCart :shop-id="1"></ShopingCart>
  </div>
</template>
<style lang="scss">
.goods-details-page {
  --van-nav-bar-background: #f7f8fa;
  --van-tabs-bottom-bar-color: var(--theme-color-important);
  --van-tabs-nav-background: #f7f8fa;
}
</style>
<style scoped lang="scss">
.goods-details-page {
  margin-bottom: 50px;

  &__top {
    &-text {
      padding: 0px 15px;
    }
    .goods-img {
      width: 375px;
      height: 280px;
      background: #f7f8fa;
    }
    .title {
      font-size: 20px;
      color: #051733;
      line-height: 28px;
      margin: 16px 0px 8px 0px;
    }
    .infos {
      display: flex;
      font-size: 14px;
      color: #4f5c70;

      .tags {
        margin-right: 5px;
      }

      .discount {
        //   width: 56px;
        //   height: 13px;
        line-height: 16px;
        border-radius: 1px;
        border: 1px solid #f68d14;
        color: #f68d14;
        font-size: 12px;
        border-radius: 2px;
        margin: 0 12px;
      }
      .score i {
        font-style: normal;
      }
    }
    .sales {
      color: #9ba2ad;
      line-height: 17px;
      margin-top: 8px;
    }
    .price-or-button {
      display: flex;
      margin-top: 11px;
      justify-content: space-between;
      span {
        font-size: 20px;
        font-family:
          PingFangSC-Semibold,
          PingFang SC;
        font-weight: 600;
        color: var(--theme-color-important);
      }
      del {
        font-size: 14px;
        color: #b4b9c1;
      }

      .add {
        width: 118px;
        height: 32px;
        background: var(--theme-color-important);
        border-radius: 16px;
        text-align: center;
        line-height: 32px;
        color: #ffffff;
        font-size: 14px;
      }
    }
  }
  &__main {
    margin-top: 20px;
  }
}
</style>
