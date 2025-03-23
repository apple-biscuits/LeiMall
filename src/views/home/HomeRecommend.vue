<script setup lang="ts">
import { ref } from 'vue'
import RecommendShop from '@/views/home/RecommendShop.vue'
import SweetView from '@/views/home/SweetView.vue'
const active = ref(0)
const recommendType = [
  {
    id: 1,
    title: '附近推荐',
    component: RecommendShop
  },
  {
    id: 2,
    title: '甜点饮品',
    component: SweetView
  },
  {
    id: 3,
    title: '超市便利',
    component: RecommendShop
  },
  {
    id: 4,
    title: '蔬菜水果',
    component: RecommendShop
  },
  {
    id: 5,
    title: '休闲玩乐',
    component: RecommendShop
  },
  {
    id: 6,
    title: '丽人美发',
    component: RecommendShop
  },
  {
    id: 7,
    title: '浪温鲜花',
    component: RecommendShop
  }
]
</script>

<template>
  <!-- 首页推荐 -->
  <div class="home-recommend">
    <van-tabs v-model:active="active" sticky offset-top="57">
      <van-tab v-for="item in recommendType" :key="item.id" :title="item.title">
        <component :is="item.component"></component>
      </van-tab>
    </van-tabs>
  </div>
</template>
<style lang="scss">
.home-recommend {
  --van-tab-text-color: #818b98;
  --van-tab-active-text-color: var(--theme-color-important);
  --van-tabs-bottom-bar-color: var(--theme-color-important);
  --van-tabs-bottom-bar-height: 2px;
  --van-tabs-line-height: 32px;
  --van-tabs-bottom-bar-width: 28px;
  --van-tabs-nav-background: #f7f8fa;
  .van-tabs__nav--line {
    padding-bottom: 13px;
  }
  .van-sticky--fixed {
    padding-top: 10px;
    background-color: #f7f8fa;
  }
  .van-tab {
    font-size: 14px;
  }
}
</style>
<style scoped lang="scss">
.home-recommend {
  width: 343px;
  min-height: 600px;
  margin: 16px auto 8px;
}
</style>
