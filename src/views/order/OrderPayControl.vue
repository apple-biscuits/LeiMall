<script setup lang="ts">
import { useAddCartAnimation } from '@/use/useAddCartAnimation'
// 声明绑定的事件
defineEmits<{
  (e: 'submit'): void
}>()

interface IProps {
  show?: boolean
  totalPrice?: number
  preferentialPrice?: number
  bottom?: string
}
withDefaults(defineProps<IProps>(), {
  show: false,
  totalPrice: 0,
  preferentialPrice: 0,
  bottom: '0px'
})

const { balls, onAfterEnter, onBeforeEnter, onEnter } = useAddCartAnimation(30, 80)
</script>

<template>
  <div class="order-pay-control">
    <div class="amount">合计</div>
    <div class="price">
      <div class="nowprice">
        <i>￥</i>
        <b>{{ totalPrice.toFixed(2) }}</b>
      </div>
      <div class="preferential">
        <span>已优惠￥{{ preferentialPrice.toFixed(2) }}</span>
      </div>
    </div>
    <div class="confirm normal" v-if="show" @click="$emit('submit')">
      <slot></slot>
    </div>
    <div class="confirm disable" v-else>
      <slot></slot>
    </div>
  </div>

  <!-- 小球的容器 -->
  <div class="ball-container">
    <template v-for="(ball, index) in balls" :key="index">
      <Transition @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter">
        <div class="ball" v-if="ball.isShow">
          <div class="inner"></div>
        </div>
      </Transition>
    </template>
  </div>
</template>

<style scoped lang="scss">
.ball-container {
  .ball {
    width: 16px;
    height: 16px;
    // border: 5px solid blue;
    // background-color: blue;
    position: fixed;
    left: 30px;
    bottom: 80px;
    z-index: 9999;
    // transition: all 30s linear;
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    .inner {
      width: inherit;
      height: inherit;
      background-color: #ff445b;
      border-radius: 50%;
      transition: all 0.4s linear;
    }
  }
}

.order-pay-control {
  height: 62px;
  padding: 10px 16px;
  background-color: #fff;
  box-shadow: 0px -2px 6px 0px rgba(45, 45, 75, 0.06);
  position: fixed;
  bottom: v-bind(bottom);
  left: 0;
  right: 0;
  z-index: 222;
  display: flex;
  box-sizing: border-box;

  .amount {
    font-weight: 400;
    color: var(--theme-color-important);
    line-height: 25px;
    margin-right: 2px;
  }

  .price {
    flex-grow: 1;
    color: var(--theme-color-important);
    i {
      font-size: 12px;
      font-style: normal;
    }
    b {
      font-size: 18px;
      font-family:
        PingFangSC-Semibold,
        PingFang SC;
      font-weight: 600;

      line-height: 25px;
    }
    .preferential {
      margin-top: 2px;
      font-size: 12px;
      font-weight: 400;
      color: #818b98;
      line-height: 14px;
    }
  }
  .confirm {
    width: 110px;
    height: 38px;

    border-radius: 23px;

    line-height: 38px;
    text-align: center;
  }
  .normal {
    background: var(--theme-color-important);
    color: #fff;
  }
  .disable {
    background-color: #f7f8fa;
    color: #051733;
  }
}
</style>
