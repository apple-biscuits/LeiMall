<script setup lang="ts">
import { getBannerList } from '@/api/home'
import { ref } from 'vue'
import type { BannerList } from '@/types/home'
const bannerList = ref([] as BannerList)
const getBannerListData = async () => {
  try {
    bannerList.value = await getBannerList()
  } catch (err) {
    bannerList.value = []
  }
}

getBannerListData()
</script>
<template>
  <div class="home-banner">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in bannerList" :key="image.id">
        <a :href="image.advUrl">
          <img :src="image.imageUrl" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<style scoped lang="scss">
.home-banner {
  width: 343px;
  height: 160px;
  margin: 12px auto;
  background-color: beige;
  border-radius: 5px;

  --van-swipe-indicator-active-background: #fff;
  --van-swipe-indicator-inactive-background: #dadce1;

  img {
    width: 343px;
    height: 160px;
    border-radius: 5px;
  }
}
</style>
