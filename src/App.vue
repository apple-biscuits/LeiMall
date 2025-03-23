<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const active = ref(0)

// 通过map建一个映射关系
const pathMap = new Map([
  ['/', 0],
  ['/cart', 1],
  ['/order', 2],
  ['/my', 3]
])

// 创建一个帧听器
watch(
  () => route.fullPath,
  (v) => {
    active.value = pathMap.get(v) || 0
  }
)

// 默认主题
const theme = useLocalStorage('themeSkin', {
  themeColor: 'red',
  themeSrc: '/theme/red.theme.skin.css'
})

onMounted(() => {
  // 如果原来插入过，再次回到页时，不需要再插入
  const _theme = document.getElementById('theme')
  if (!_theme) {
    // 创建一个link元素
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = theme.value.themeSrc
    link.id = 'theme'

    // 插入head的第一个子元素
    document.getElementsByTagName('head')[0].prepend(link)
  }
})
</script>

<template>
  <div class="app-page">
    <!-- 显示路由组件 -->
    <RouterView></RouterView>

    <!-- 底部Tabbar -->
    <van-tabbar
      v-model="active"
      inactive-color="#24447E"
      active-color="var(--theme-color-important)"
    >
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="contact-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">
body {
  font-family:
    PingFangSC-Regular,
    PingFang SC;
  --van-tabbar-item-font-size: 12px;
}
.van-tabbar {
  box-shadow: 0px -2px 6px 0px rgba(45, 45, 75, 0.06);
  z-index: 101;
  height: 50px;
}

.app-page {
  /*nav-bar */
  --van-nav-bar-icon-color: #000;
  --van-nav-bar-arrow-size: 24px;
  --van-nav-bar-height: 44px;
  --van-nav-bar-title-font-size: 18px;
  --van-nav-bar-title-text-color: rgba(0, 0, 0, 0.85);
  --van-tabbar-item-icon-size: 24px;
  .van-nav-bar__title {
    height: 44px;
    line-height: 44px;
  }
}
</style>
