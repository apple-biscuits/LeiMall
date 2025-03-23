<script setup lang="ts">
import { ref } from 'vue'
import GoodsItem from '@/components/GoodsItem.vue'
import ShopingCartSettlement from './ShopingCartSettlement.vue'
import { useCartStore } from '@/stores/cart'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const { shopId } = route.params
const cartStore = useCartStore()
const showBottom = ref(false)

const showPopup = () => {
  showBottom.value = true
}

// 获取购物车列表信息
const cartList = computed(() => cartStore.getCartListByShopId(Number(shopId)))
// 双向切换（选中或取消选中）-单选
const toggleChecked = (shopId: number, goodsId: string) => {
  cartStore.toggleChecked(shopId, goodsId)
}

// 全选
const isAllChecked = computed(() => cartStore.isAllChecked(Number(shopId)))

// 选中商品的个数
const selectedCartCount = computed(() => cartStore.selectedCartCountByShopId(Number(shopId)))
</script>

<template>
  <!-- 购物车 -->
  <div class="shoping-cart">
    <van-popup v-model:show="showBottom" position="bottom" :style="{ height: '366px' }">
      <!-- 头部 -->
      <div class="shoping-cart__title">
        <div @click="cartStore.toggleAllChecked(Number(shopId))">
          <van-icon name="checked" size="4.26vw" color="#FF445B" v-if="isAllChecked" />
          <van-icon name="circle" size="4.26vw" v-else />
        </div>

        <span class="txt">购物车</span>
        <span class="selected-count">已选中{{ selectedCartCount }}件</span>
        <div @click="cartStore.clearCartListByShopId(Number(shopId))">
          <van-icon name="delete-o" size="4.26vw" />
          <span>清空购物车</span>
        </div>
      </div>
      <!-- 主体 -->
      <div class="shoping-cart__main">
        <template v-for="goods in cartList?.goodsList" :key="goods.goodsId">
          <div class="item">
            <div class="check-button" @click="toggleChecked(Number(shopId), goods.goodsId)">
              <van-icon name="checked" size="4.26vw" color="#FF445B" v-if="goods.checked" />
              <van-icon name="circle" size="4.26vw" v-else />
            </div>

            <GoodsItem
              :shop-id="Number(shopId)"
              :goods="goods"
              :shop-name="cartList?.shopName || ''"
              :margin-bottom="10"
              :max-width="50.4"
              :sales="false"
              :discount="false"
            ></GoodsItem>
          </div>
        </template>
      </div>
    </van-popup>
    <!-- 购物车底部结算 -->
    <ShopingCartSettlement @show="showPopup" :shop-id="Number(shopId)"></ShopingCartSettlement>
  </div>
</template>

<style lang="scss">
.shoping-cart {
  .van-popup {
    border-radius: 12px 12px 0px 0px;
    /* 新增 */
    overflow-y: hidden;
  }
}
</style>
<style scoped lang="scss">
.shoping-cart {
  &__title {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 20px;
    padding: 10px 16px;
    margin-bottom: 10px;
    z-index: 33;
    background-color: #f2f3f5;
    display: flex;
    align-items: center;
    color: #818b98;
    .txt {
      color: #051733;
      font-size: 14px;
      font-family:
        PingFangSC-Semibold,
        PingFang SC;
      font-weight: 600;
      margin-left: 12px;
      margin-right: 6px;
    }
    .selected-count {
      flex-grow: 1;
    }
  }
  &__main {
    padding-right: 10px;
    margin-bottom: 60px;
    /* 新增 */
    padding-top: 50px;
    height: 256px;
    overflow: auto;

    .item {
      display: flex;
      align-items: center;
      .check-button {
        padding: 0px 16px;
      }
    }
  }
}
</style>
