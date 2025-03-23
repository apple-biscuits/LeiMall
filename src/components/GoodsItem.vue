<script setup lang="ts">
import AddCart from '@/components/AddCart.vue'
import type { IGoods } from '@/types/shop'
import { useRouter } from 'vue-router'
interface IProps {
  goods: IGoods
  shopId: number
  shopName: string
  marginBottom?: number
  maxWidth?: number
  sales?: boolean
  discount?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  marginBottom: 20,
  maxWidth: 37.33,
  sales: true,
  discount: true
})

const _marginBottom = props.marginBottom + 'px'
const _maxWidth = props.maxWidth + 'vw'

const router = useRouter()
const gotoGoodsDetail = (shopId: number, goodsId: string) => {
  router.push({
    name: 'goods',
    params: {
      shopId,
      goodsId
    }
  })
}
</script>

<template>
  <div class="goods-item" @click="gotoGoodsDetail(shopId, goods.goodsId)">
    <div class="goods-item__left">
      <img :src="goods.imgUrl" alt="" />
    </div>
    <div class="goods-item__right">
      <div class="title common-ellipsis">{{ goods.name }}</div>
      <div class="tags">
        <span v-for="tag in goods.tips" :key="tag">{{ tag }}</span>
      </div>
      <div class="month-sales" v-if="sales">月销：{{ goods.sellCount }}</div>
      <div class="discount" v-if="discount">
        <span
          ><i>{{ goods.discount.value }}折 限{{ goods.discount.limitCount }}份</i></span
        >
      </div>
      <div class="price-and-button">
        ￥<b>{{ goods.price }}</b>
        <del>￥{{ goods.oldPrice }}</del>
        <div class="addcart">
          <AddCart :shop-id="shopId" :goods="goods" :shop-name="shopName"></AddCart>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.goods-item {
  display: flex;
  flex-grow: 1;
  // width: 263px;
  margin-bottom: v-bind(_marginBottom);
  &__left {
    flex-shrink: 0;
    margin-right: 10px;
    img {
      width: 110px;
      height: 110px;
    }
  }
  &__right {
    flex-grow: 1;
    .title {
      max-width: v-bind(_maxWidth);
      height: 20px;
      font-size: 14px;
      font-family:
        PingFangSC-Semibold,
        PingFang SC;
      font-weight: 600;
      color: #051733;
      line-height: 20px;
      margin-top: 2px;
    }
    .tags {
      height: 17px;
      line-height: 17px;
      margin-top: 6px;
      margin-bottom: 5px;
      color: #051733;
      span {
        margin-right: 12px;
      }
    }
    .month-sales {
      height: 17px;
      line-height: 17px;
      color: #818b98;
      margin-bottom: 5px;
    }
    .discount {
      margin-bottom: 4px;
      span {
        display: inline-block;
        height: 13px;
        border-radius: 1px;
        border: 1px solid #f68d14;
        line-height: 13px;
        text-align: center;
        color: #f68d14;
        i {
          font-style: normal;
          display: inline-block;
          transform: scale(0.85);
        }
      }
    }
    .price-and-button {
      height: 23px;
      display: flex;
      align-items: center;

      color: #ff445b;
      b {
        font-size: 16px;
        font-family:
          PingFangSC-Semibold,
          PingFang SC;
        font-weight: 600;
      }
      del {
        color: #b4b9c1;
        margin-left: 3px;
        flex-grow: 1;
      }
      .addcart {
        // background-color: red;
        width: 53px;
        height: 20px;
      }
    }
  }
}
</style>
