<script setup lang="ts">
import LocationView from './LocationView.vue'
import HomeSearch from './HomeSearch.vue'
import BannerView from './BannerView.vue'
import HomeMenu from './HomeMenu.vue'
import SeckillTimer from './SeckillTimer.vue'
import HomeRecommendVue from './HomeRecommend.vue'
</script>

<template>
  <div class="home-page">
    <!-- 定位地址 -->
    <LocationView></LocationView>
    <!-- 搜索框 -->
    <HomeSearch></HomeSearch>
    <!-- banner图 -->
    <BannerView></BannerView>
    <!-- 菜单 -->
    <HomeMenu></HomeMenu>
    <!-- 特价秒杀 -->
    <SeckillTimer></SeckillTimer>
    <!-- 首页推荐 -->
    <HomeRecommendVue></HomeRecommendVue>
  </div>
</template>
<style scoped lang="scss">
.home-page {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    var(--theme-color-important) 0%,
    rgba(255, 121, 148, 0) 204px
  );
  background-color: #f7f8fa;
  padding-bottom: 50px;
}
</style>
