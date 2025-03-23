<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { ISearchShopItem } from '@/types/search'
interface IProps {
  shopData: ISearchShopItem
}
// 声明接受的props
defineProps<IProps>()

// 跳转到店铺页
const router = useRouter()
const gotoShop = (shopId: number) => {
  router.push({
    name: 'shop',
    params: {
      shopId
    }
  })
}
</script>
<template>
  <div class="shop-item common-wrap" @click="gotoShop(shopData.shopId)">
    <div class="shop-item__logo">
      <img :src="shopData.avatarUrl" alt="" />
    </div>
    <div class="shop-item__content">
      <div class="content-title common-ellipsis">{{ shopData.shopName }}</div>
      <div class="content-delivery">
        <div class="delivery-item delivery-score">
          <van-icon name="star" color="#FF445B" sisze="3.2vw" />
          <span class="score">{{ shopData.score }}</span>
        </div>
        <div class="delivery-item">
          <div class="desc">月售</div>
          <div class="num">{{ shopData.monthlySales }}+</div>
        </div>
        <div class="delivery-item">
          <div class="desc">起送</div>
          <div class="num">{{ shopData.deliveryStratingPrice }}</div>
        </div>
        <div class="delivery-item">
          <div class="desc">配送</div>
          <div class="num">{{ shopData.deliveryStrategy }}</div>
        </div>
        <div class="delivery-item delivery-fast">
          <div class="tags">{{ shopData.deliveryTags }}</div>
          <div class="time">{{ shopData.deliveryTime }} {{ shopData.deliveryDistance }}</div>
        </div>
      </div>
      <div class="content-sort">
        <div>{{ shopData.tops }}</div>
      </div>

      <div class="content-activity">
        <!-- <div class="discount">新客立减1</div> -->
        <div class="discount" v-for="item in shopData.discounts[0].content" :key="item.if">
          <span>{{ item.if }}减{{ item.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.shop-item {
  display: flex;
  &__logo {
    width: 97px;
    height: 97px;
    margin-right: 8px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__content {
    .content-title {
      width: 200px;
      height: 26px;
      font-size: 14px;
      font-family:
        PingFangSC-Semibold,
        PingFang SC;
      font-weight: 600;
      color: #051733;
      line-height: 26px;
    }
    .content-delivery {
      display: flex;
      .delivery-item {
        height: 28px;
        font-size: 12px;
        transform: scale(0.85);
        transform-origin: center;
        padding: 0px 4px;
        .desc {
          color: #818b98;
          white-space: nowrap;
        }
        .num {
          color: #4f5c70;
        }
        .tags {
          color: #f68d14;
          border: 1px solid #f68d14;
          padding: 2px;
          border-radius: 1px;
          display: inline-block;
        }
        .time {
          white-space: nowrap;
          color: #f68d14;
        }
        &::after {
          content: '';
          width: 1px;
          height: 14px;
          background-color: #f2f3f5;
          position: absolute;
          right: -5px;
          top: 7px;
        }
        &:last-child {
          &::after {
            width: 0;
          }
        }
      }
      .delivery-fast {
        text-align: right;
      }
      .delivery-score {
        white-space: nowrap;
        color: var(--theme-color-important);
        padding: 0;
        span.score {
          margin-left: 3px;
        }
      }
    }
    .content-sort {
      height: 20px;
      font-size: 12px;
      font-weight: 400;
      color: #06d506;
      line-height: 20px;
      background: rgba(6, 213, 6, 0.1);
      border-radius: 2px;
      display: inline-block;
      padding: 0px 3px;
      div {
        transform: scale(0.85);
      }
    }
    .content-activity {
      display: flex;
      .discount {
        padding: 2px 3px;
        border-radius: 1px;
        border: 1px solid var(--theme-color-important);
        color: var(--theme-color-important);
        font-weight: 400;
        font-size: 12px;
        transform: scale(0.9);
        transform-origin: left top;
        margin-top: 3px;
        span {
          border-right: 1px solid var(--theme-color-important);
          padding: 0 4px;
        }
        span:last-child {
          border: 0;
        }
      }
    }
  }
}
</style>
