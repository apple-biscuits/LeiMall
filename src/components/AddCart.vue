<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import type { IGoods } from '@/types/shop'
import emitter from '@/utils/mitt'
const cartStore = useCartStore()
interface IProps {
  goods: IGoods
  shopId: number
  shopName: string
}
const props = defineProps<IProps>()
// 当前加入购物车数量
const cartCount = computed(() => cartStore.getGoodsCartCount(props.shopId, props.goods.goodsId))
// 移除购物车（个数减1）
const onMinus = () => {
  cartStore.removeProductFromCart(props.shopId, props.goods.goodsId)
}
// 加入购物车
const onAdd = (e: Event) => {
  // 触发add-cart事件
  emitter.emit('add-cart', e.target as HTMLElement)
  cartStore.pushProductToCart(props.shopId, props.shopName, props.goods)
}
</script>
<template>
  <div class="add-cart-control">
    <TransitionGroup name="fade">
      <div class="minus" v-if="cartCount > 0" @click.stop="onMinus"></div>
      <div class="count" v-if="cartCount > 0">{{ cartCount }}</div>
    </TransitionGroup>
    <div class="add" @click.stop="onAdd"></div>
  </div>
</template>
<style scoped lang="scss">
.add-cart-control {
  width: 53px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .minus,
  .add {
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border: 1px solid var(--theme-color-important);
    border-radius: 50%;
    position: relative;
    &::after,
    &::before {
      display: block;
      content: '';
      width: 8px;
      height: 1px;
      background-color: var(--theme-color-important);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .add {
    background-color: var(--theme-color-important);
    &::after {
      background-color: #fff;
    }
    &::before {
      background-color: #fff;
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
  .count {
    width: 21px;
    text-align: center;
    color: #051733;
    font-size: 13px;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>
