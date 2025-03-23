<script setup lang="ts">
import { ref } from 'vue'
import SearchPage from './SearchPage.vue'
// 控制弹窗的显示与隐藏
const isShow = ref(false)
</script>
<template>
  <div class="home-search">
    <van-sticky :offset-top="0">
      <!-- 顶部搜索框 -->
      <div class="search-input" @click="isShow = true">
        <span class="iconfont icon-sousuo"></span>
        <div class="search-txt">请输入搜索关键词</div>
        <div class="search-button">搜索</div>
      </div>
    </van-sticky>

    <!-- 右侧弹出 -->
    <van-popup v-model:show="isShow" position="right" :style="{ width: '100%', height: '100%' }">
      <!-- 搜索页组件 -->
      <SearchPage @close="isShow = false"></SearchPage>
    </van-popup>
  </div>
</template>

<style lang="scss">
.home-search {
  --van-popup-background: #f7f8fa;
  .van-sticky--fixed {
    padding: 10px 0px;
    background-image: linear-gradient(to bottom, var(--theme-color-important), #fb7887);
  }
  .van-popup {
    overflow: hidden;
  }
}
</style>

<style scoped lang="scss">
.search-input {
  display: flex;
  align-items: center;
  width: 343px;
  height: 36px;
  background: #f5f6f7;
  border-radius: 22px;
  margin: 0 auto;
  .icon-sousuo {
    margin-left: 20px;
    margin-right: 4px;
    color: var(--theme-color-important--theme-color-important);
    font-weight: 600;
  }
  .search-txt {
    flex-grow: 1;
    color: #aaaab4;
    font-size: 14px;
  }
  .search-button {
    margin-right: 20px;
    color: #4f5c70;
    font-size: 14px;
  }
}
</style>
