<script setup lang="ts">
import type { IAddressItem } from '@/types/address'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const { shopId } = route.params

defineProps<{
  data: IAddressItem | null
}>()
// 跳转到选择收货地址页面
const gotoSelectAddress = () => {
  router.push('/address?shopId=' + shopId)
}
</script>

<template>
  <div class="delivery-address">
    <div class="delivery-address__title">收货信息</div>
    <div class="delivery-address__main">
      <!-- 显示收货地址 -->
      <div class="show-address" v-if="data" @click="gotoSelectAddress">
        <div class="details">
          <span class="">{{ data?.area.split('/').join('') + data.detailsAddress }}</span>
          <van-icon name="arrow" color="#818B98" />
        </div>
        <div class="receiver">
          <span>{{ data?.receiver }}</span>
          <span>{{ data?.phone }}</span>
        </div>
      </div>
      <!-- 选择收货地址 -->
      <div class="select-address" v-else @click="gotoSelectAddress">
        <van-icon name="plus" size="6.8vw" color="#000" />
        <span>选择收货地址</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.delivery-address {
  padding: 20px 16px 12px;
  &__title {
    font-weight: 400;
    color: #fff;
    line-height: 17px;
    margin-bottom: 7px;
  }
  &__main {
    background: #fff;
    border-radius: 6px;
    padding: 12px;
    .show-address {
      .details {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-family:
          PingFangSC-Semibold,
          PingFang SC;
        font-weight: 600;
        color: #051733;
        line-height: 26px;
      }
      .receiver {
        margin-top: 10px;
        font-size: 14px;
        font-weight: 400;
        color: #4f5c70;
        line-height: 20px;
        span {
          margin-right: 12px;
        }
      }
    }
    .select-address {
      font-size: 18px;
      color: #000;
      font-weight: 600;
      display: flex;
      align-items: center;
      span {
        margin-left: 6px;
      }
    }
  }
}
</style>
