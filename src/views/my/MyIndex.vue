<script setup lang="ts">
import MyTop from './MyTop.vue'
</script>

<template>
  <div class="my-page">
    <div class="top-nav-bar">
      <van-nav-bar title="我的">
        <template #right>
          <van-icon name="ellipsis" color="#000" size="30" />
        </template>
      </van-nav-bar>
    </div>
    <MyTop></MyTop>
  </div>
</template>
<style>
.my-page {
  background-color: #f7f8fa;
  min-height: 100vh;
}
.top-nav-bar {
  --van-nav-bar-height: 44px;
  --van-nav-bar-title-text-color: #000;
  --van-nav-bar-title-font-size: 18px;
}
</style>
