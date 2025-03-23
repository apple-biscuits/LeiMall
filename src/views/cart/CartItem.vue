<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import GoodsItem from '@/components/GoodsItem.vue'
import type { IShopingCartInfos } from '@/types/shop'
interface IProps {
  data: [number, IShopingCartInfos]
}
const props = defineProps<IProps>()
const cartStore = useCartStore()
// 双向切换（选中或取消选中）-单选
const toggleChecked = (shopId: number, goodsId: string) => {
  cartStore.toggleChecked(shopId, goodsId)
}
// 全选
const isAllChecked = computed(() => cartStore.isAllChecked(Number(props.data[0])))

// 删除对应的商品
const deleteGoodsById = (shopId: number, goodsId: string) => {
  cartStore.deleteGoodsToCartById(shopId, goodsId)
}
</script>

<template>
  <div class="cart-item">
    <!-- cart-item__top start -->
    <div class="cart-item__top">
      <div class="all-checked" @click="cartStore.toggleAllChecked(Number(data[0]))">
        <van-icon
          name="checked"
          size="4.26vw"
          color="var(--theme-color-important)"
          v-if="isAllChecked"
        />
        <van-icon name="circle" size="4.26vw" v-else />
      </div>
      <div class="title common-ellipsis">
        <RouterLink :to="'shop/' + data[0]"> {{ data[1].shopName }} </RouterLink>
      </div>
      <span class="arrow"><van-icon name="arrow" size="4.26vw" /></span>
    </div>
    <!-- cart-item__top end -->
    <!--cart-item__main start-->
    <div class="cart-item__main" v-for="goods in data[1].goodsList" :key="goods.goodsId">
      <van-swipe-cell>
        <!-- 卡片 -->
        <div class="card">
          <div class="check-button" @click="toggleChecked(Number(data[0]), goods.goodsId)">
            <van-icon
              name="checked"
              size="4.26vw"
              color="var(--theme-color-important)"
              v-if="goods.checked"
            />
            <van-icon name="circle" size="4.26vw" v-else />
          </div>
          <GoodsItem
            :shop-id="data[0]"
            :shop-name="data[1].shopName"
            :goods="goods"
            :margin-bottom="0"
            :style="{ paddingRight: '12px' }"
          ></GoodsItem>
        </div>

        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="deleteGoodsById(data[0], goods.goodsId)"
          />
        </template>
      </van-swipe-cell>
    </div>
    <!--cart-item__main end-->
  </div>
</template>
<style lang="scss">
.cart-item {
  --van-button-default-height: 100%;
}
</style>
<style scoped lang="scss">
.cart-item {
  box-sizing: border-box;
  width: 343px;
  //   min-height: 200px;

  background-color: #fff;
  margin: 12px auto 0;
  border-radius: 4px;

  &__top {
    display: flex;
    height: 48px;
    align-items: center;
    border-bottom: 1px solid #f2f3f5;
    .all-checked {
      margin: 0px 12px;
    }
    .title {
      max-width: 280px;
      flex-grow: 1;
      font-size: 14px;
      font-family:
        PingFangSC-Semibold,
        PingFang SC;
      font-weight: 600;

      line-height: 26px;
      a {
        color: #051733;
      }
    }
    .arrow {
      margin-right: 12px;
      flex-shrink: 0;
    }
  }
  &__main {
    .card {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      padding-top: 10px;
      position: relative;
      &::after {
        content: '';
        display: block;
        height: 1px;
        width: 295px;
        background-color: #f2f3f5;
        position: absolute;
        bottom: 0;
        right: 0;
      }
      .check-button {
        margin: 0px 14px;
      }
    }
  }
}
</style>
