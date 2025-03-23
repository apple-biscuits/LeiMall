<script setup lang="ts">
import CartItem from './CartItem.vue'
import OrderPayControl from '../order/OrderPayControl.vue'
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import IsNull from '@/components/IsNull.vue'
import imgSrc from '@/assets/images/order/cart-is-null.png'
const router = useRouter()
const cartStore = useCartStore()

// 保存购物车中所有数据  Map  [ [1,{}],[2,{}]]
const cartList = cartStore.getCartList()
// 获取购物车中被选中商品的总价
const totalPrice = computed(() => cartStore.getAllCheckedGoodsPrice())

// 结算
const onSubmit = () => {
  router.push('/order/comfirmation')
}
// 去购物
const gotoCart = () => {
  router.push('/')
}
</script>

<template>
  <div class="cart-page">
    <van-sticky :offset-top="0">
      <van-nav-bar title="购物车">
        <template #right> <van-icon name="ellipsis" color="#000" size="30" /> </template
      ></van-nav-bar>
    </van-sticky>
    <!-- 购物车主体 -->
    <div class="cart-page__main" v-if="!!cartList.size">
      <CartItem v-for="item in cartList" :key="item[0]" :data="item"></CartItem>
    </div>
    <!-- 底部结算 -->
    <OrderPayControl
      v-if="!!cartList.size"
      :totalPrice="totalPrice.nowPriceTotal"
      :show="true"
      :preferentialPrice="totalPrice.oldPriceTotal - totalPrice.nowPriceTotal"
      bottom="50px"
      @submit="onSubmit"
    >
      结算
    </OrderPayControl>

    <!-- 购物车内容为空 -->
    <IsNull v-if="!cartList.size" :img-src="imgSrc" width="295px" height="182px" @submit="gotoCart">
      <span>您还没有购物记录 </span>
      <span>快去选择喜欢的商品吧</span>
      <template #bottom>
        <div class="history-order">历史订单</div>
      </template>
    </IsNull>
  </div>
</template>
<style scoped lang="scss">
.cart-page {
  height: 100vh;
  background-color: #f7f8fa;
  overflow-y: scroll;
  .cart-page__main {
    margin-bottom: 120px;
  }
  .history-order {
    text-align: center;
    line-height: 50px;
    font-size: 16px;
  }
}
</style>
