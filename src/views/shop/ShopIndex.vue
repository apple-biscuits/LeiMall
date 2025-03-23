<script setup lang="ts">
import ShopHeader from './ShopHeader.vue'
// import GoodsItem from '@/components/GoodsItem.vue'
import { ref } from 'vue'
import ShopGoods from './ShopGoods.vue'
import ShopComments from './ShopComments.vue'
import ShopInfos from './ShopInfos.vue'
import ShopingCart from './ShopingCart.vue'
// 返回上一页
const onClickLeft = () => {
  history.back()
}
const shopTab = [
  {
    id: 1,
    title: '全部商品',
    component: ShopGoods
  },
  {
    id: 2,
    title: '评价',
    component: ShopComments
  },
  {
    id: 1,
    title: '商家信息',
    component: ShopInfos
  }
]
const active = ref(0)
</script>

<template>
  <van-sticky :offset-top="0">
    <van-nav-bar title="商家详情" left-arrow @click-left="onClickLeft">
      <template #right> <van-icon name="ellipsis" color="#000" size="30" /> </template
    ></van-nav-bar>
  </van-sticky>
  <div class="shop-page">
    <!-- 商家头部 -->
    <ShopHeader></ShopHeader>
    <!-- 商家产品  评价  商家信息 -->
    <div class="shop-tab">
      <van-tabs v-model:active="active" sticky :offset-top="44">
        <van-tab v-for="item in shopTab" :title="item.title" :key="item.id">
          <component :is="item.component"></component>
        </van-tab>
      </van-tabs>
    </div>
  </div>
  <!-- 购物车 -->
  <ShopingCart></ShopingCart>
</template>

<style lang="scss">
.shop-page {
  // --van-tab-line-height: 28px;
  --van-tabs-line-height: 28px;
  --van-tab-text-color: #697485;
  --van-tab-active-text-color: #051733;
  --van-tabs-bottom-bar-height: 2px;
  --van-tabs-bottom-bar-color: #ff445b;
  --van-tabs-bottom-bar-width: 30px;
  .van-tabs__nav {
    padding-left: 16px;
  }
  .van-tabs__nav::after {
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #f2f3f5;
    position: absolute;
    top: 27px;
    left: 1px;
  }
  .van-tab {
    flex: 0 0 auto;
    margin-right: 95px;
  }
}
</style>

<style scoped lang="scss">
.shop-page {
  padding-top: 70px;
  background: url('@/assets/images/shop/shop-top-img.png') no-repeat;
  background-size: 375px 116px;
  height: 2000px;
}
</style>
