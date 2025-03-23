<script setup lang="ts">
import { ref } from 'vue'
import { getOrderList } from '@/api/order'
import type { IOrderItem } from '@/types/order'
import OrderList from './OrderList.vue'
import IsNull from '@/components/IsNull.vue'
import { useRouter } from 'vue-router'
import imgSrc from '@/assets/images/order/order.png'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const router = useRouter()
const orderList = ref([] as IOrderItem[])
const getOrderListData = async () => {
  try {
    orderList.value = await getOrderList(userStore.userInfo.userId)
  } catch (err) {
    orderList.value = []
  }
}
getOrderListData()

// 去购物
const gotoCart = () => {
  router.push('/')
}
</script>

<template>
  <IsNull
    v-if="orderList.length === 0"
    :img-src="imgSrc"
    width="295px"
    height="182px"
    @submit="gotoCart"
  >
    <span>您还没有订单记录</span>
    <span>快去选择喜欢的商品吧</span>
  </IsNull>

  <template v-for="(data, index) in orderList" :key="index" v-else>
    <OrderList :data="data" :show="true"></OrderList>
  </template>
</template>
