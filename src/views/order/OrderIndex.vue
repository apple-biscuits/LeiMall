<script setup lang="ts">
import { ref } from 'vue'

import MyOrderList from './MyOrderList.vue'

const active = ref(0)
const tabs = [
  {
    id: 1,
    title: '全部',
    component: MyOrderList
  },
  {
    id: 2,
    title: '待付款',
    component: MyOrderList
  },
  {
    id: 3,
    title: '待配送',
    component: MyOrderList
  },
  {
    id: 4,
    title: '配送中',
    component: MyOrderList
  },
  {
    id: 5,
    title: '已完成',
    component: MyOrderList
  }
]
</script>

<template>
  <div class="my-order-page">
    <div class="my-order-page__main">
      <van-sticky :offset-top="0">
        <van-nav-bar title="我的订单">
          <template #right> <van-icon name="ellipsis" color="#000" size="30" /> </template
        ></van-nav-bar>
      </van-sticky>
      <van-tabs v-model:active="active" sticky :offset-top="44">
        <van-tab v-for="item in tabs" :key="item.id" :title="item.title">
          <component :is="item.component"></component>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<style lang="scss">
.my-order-page {
  --van-tabs-bottom-bar-color: var(--theme-color-important);
  --van-tab-active-text-color: var(--theme-color-important);
}
</style>
<style scoped lang="scss">
.my-order-page {
  height: 100vh;
  background-color: #f7f8fa;
  overflow-y: scroll;
  &__main {
    margin-bottom: 60px;
  }
}
</style>
