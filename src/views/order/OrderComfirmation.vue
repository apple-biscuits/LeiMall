<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { IOrderList } from '@/types/order'
import OrderDeliveryAddress from './OrderDeliveryAddress.vue'
import OrderList from './OrderList.vue'
import OrderPayControlVue from './OrderPayControl.vue'
import type { IAddressItem } from '@/types/address'
import { getAddress, getDefaultAddress } from '@/api/address'
import { showConfirmDialog } from 'vant'
import { generateOrder } from '@/api/order'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const { shopId } = route.params
const { addressId } = route.query
const cartStore = useCartStore()
// 从路由中获取shopId

const orderList: IOrderList | null = cartStore.getAllCheckedGoodsListByShopId(Number(shopId))

// console.log('orderList', orderList)

const onClickLeft = () => {
  history.back()
}

// 刚交提交订单----去获取默认地址，如果有默认地址，就会渲染默认地址
// 没有默认地址，---他就会让你去选择一个地址
// 选择对应的地址，然后显示在页面中
// 获取默认地址
const address = ref<IAddressItem | null>(null)
// 判断是否有默认地址，如果有，就会渲染默认地址，如果没有，就会显示让你选择地址

// 获取默认地下
const getDefaultAddressData = async () => {
  try {
    address.value = await getDefaultAddress(userStore.userInfo.userId)
  } catch (err) {
    address.value = null
  }
}
// 根据id获取对应地址
const getAddressById = async () => {
  // 发请求获取
  try {
    address.value = (await getAddress(userStore.userInfo.userId, Number(addressId))) as IAddressItem
  } catch (err) {
    address.value = null
  }
}

const getAddressData = async () => {
  // 有addressId，肯定是以他为主
  if (addressId) {
    getAddressById()
  } else {
    // 如果没有，就会去显示默认地址
    getDefaultAddressData()
  }
  // 如果默认地址没有，点击去选择收货地址
}
getAddressData()

// 计算当前订单的总价（现价）
// 当前订单的优惠价
const totalPrice = cartStore.getCartTotalPriceByShopId(Number(shopId))

// 清空当前店铺购物车中被提交订单信息
const clearCartCheckedByShopId = (shopId: number) => {
  cartStore.clearCartCheckedGoodsByShopId(shopId)
}

// 确认支付
const onSubmit = async () => {
  // 当前订信息
  const orderItem = {
    userId: userStore.userInfo.userId,
    shopId: Number(shopId),
    shopName: orderList!.shopName,
    // addressId: Number(addressId),
    addressId: Number(address.value?.addressId),
    goodsList: orderList!.goodsList,
    isCanceled: false
  }
  // 模拟用户支付,用一个弹窗来模拟，如果点击是确认，表示支付成功
  // 如果点击的是取消，表示支付失败或取消订单
  await showConfirmDialog({
    title: '订单支付',
    message: '点击取消按扭可以取消支付。'
  })
    .then(() => {
      // on confirm  确认
      orderItem.isCanceled = false // 没有取消
    })
    .catch(() => {
      // on cancel  取消
      orderItem.isCanceled = true
    })

  // 生成订单
  await generateOrder(orderItem)
  // 将订单商品从购物车中删除
  clearCartCheckedByShopId(Number(shopId))
  // 跳转到我的订单页
  router.push('/order')
}
</script>

<template>
  <div class="order-comfirmation-page">
    <div class="order-comfirmation-page__main">
      <van-sticky :offset-top="0">
        <van-nav-bar title="订单确认" left-arrow @click-left="onClickLeft">
          <template #right> <van-icon name="ellipsis" color="#000" size="30" /> </template
        ></van-nav-bar>
      </van-sticky>
      <OrderDeliveryAddress :data="address"></OrderDeliveryAddress>
      <OrderList :data="orderList" :show="false"></OrderList>
      <OrderPayControlVue
        :show="!!address"
        :total-price="totalPrice.nowPriceTotal"
        :preferential-price="totalPrice.oldPriceTotal - totalPrice.nowPriceTotal"
        @submit="onSubmit"
      >
        确认支付
      </OrderPayControlVue>
    </div>
  </div>

  <!-- <h3>{{ shopInfos?.shopName }}</h3>
  <div v-for="item in shopInfos?.goodsList" :key="item.goodsId">
    {{ item.name }}--
    <img :src="item.imgUrl" />
  </div> -->
</template>
<style scoped lang="scss">
.order-comfirmation-page {
  height: 100vh;

  overflow-y: scroll;
  /* 修改过 */
  background: linear-gradient(
    180deg,
    var(--theme-color-important) 0%,
    var(--theme-color-important) 44px,
    rgba(255, 121, 148, 0) 296px
  );
  background-color: #f7f8fa;
  &__main {
    margin-bottom: 70px;
  }
}
</style>
