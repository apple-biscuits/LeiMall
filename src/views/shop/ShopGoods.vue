<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

// 异步加载组件
const AsyncGoodsList = defineAsyncComponent(() => import('./AsyncGoodsList.vue'))

// 计算scroll-wrapper的高度
const height = document.documentElement.clientHeight - 78 + 'px'
</script>

<template>
  <div class="shop-goods">
    <div class="shop-goods__siderbar">
      <van-sticky :offset-top="72">
        <div class="scroll-wrapper">
          <div id="menu"></div>
        </div>
      </van-sticky>
    </div>
    <div class="shop-goods__main">
      <AsyncGoodsList></AsyncGoodsList>
    </div>
  </div>
</template>

<style lang="scss">
.shop-goods {
  .van-tabs .van-sticky--fixed {
    z-index: 102;
  }
  .van-index-bar__sidebar {
    position: relative;
    top: 0;
    left: 0;
    transform: translateY(0);
    font-size: 12px;

    .van-index-bar__index {
      width: 100%;
      height: 68px;
      line-height: 68px;
      text-align: center;
      font-weight: 400;
      color: #818b98;
      padding: 0;
      background-color: #f2f3f5;
      /** 新增 */
      font-size: 12px;
    }
    .van-index-bar__index--active {
      background-color: #fff;
      font-family:
        PingFangSC-Semibold,
        PingFang SC;
      color: #ff445b;
      font-weight: 600;
    }
  }
}
</style>
<style scoped lang="scss">
.shop-goods {
  display: flex;
  &__siderbar {
    width: 86px;
    background-color: #f2f3f5;
    flex-shrink: 0;
  }
  &__main {
    flex-grow: 1;
    margin-left: 10px;
    margin-right: 10px;
    // background-color: khaki;
  }
  .scroll-wrapper {
    height: v-bind(height);
    overflow: hidden;
  }
}
</style>
