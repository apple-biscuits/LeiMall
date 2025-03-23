<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAutoPx } from '@/use/useAutoPx'
import { ref } from 'vue'
import { getShopDetailsByShopId } from '@/api/shop'
import type { ISearchShopItem } from '@/types/search'
import { useToggle } from '@vueuse/core'
import { computed } from 'vue'

const route = useRoute()
// shopId是字符串类型
const { shopId } = route.params

const width = useAutoPx(116)
const defaultInfo = {
  shopId: 0,
  avatarUrl: '',
  shopName: '',
  keyword: [''],
  score: 0,
  monthlySales: 0,
  deliveryTime: '',
  deliveryDistance: '',
  deliveryStratingPrice: '',
  deliveryStrategy: '',
  deliveryTags: '',
  comments: [''],
  tops: '',
  services: [
    {
      type: 1,
      value: ''
    }
  ],
  redbags: [
    {
      type: 1,
      label: ''
    }
  ],
  discounts: [
    {
      type: 1,
      label: '',
      content: [
        {
          if: 0,
          count: 0
        }
      ]
    }
  ],
  announcement: ''
}
const data = ref(defaultInfo as ISearchShopItem)

const getShopDetailsByShopIdData = async () => {
  try {
    data.value = await getShopDetailsByShopId(Number(shopId))
  } catch (err) {
    //
    data.value = defaultInfo as ISearchShopItem
  }
}
getShopDetailsByShopIdData()

//
// const active = ref(false)
// const toggleActive = () => {
//   active.value = !active.value
// }

const [active, toggleActive] = useToggle(false)
// 渲染的服务条数
const services = computed(() => {
  if (active.value) {
    return data.value.services
  } else {
    return data.value.services.slice(0, 3)
  }
})

const [show, toggleShow] = useToggle(false)
</script>
<template>
  <!-- 商家头部 -->
  <div class="shop-header">
    <div class="shop-header__top">
      <div class="top-left">
        <div class="name common-ellipsis">{{ data.shopName }}</div>
        <div class="delivery">
          <van-icon name="star" size="3.2vw" color="#FF445B" />
          <span class="score">{{ data.score }}</span>
          <span class="tags"
            ><i>{{ data.deliveryTags }}</i></span
          >
          <span class="time">配送约{{ data.deliveryTime }}分钟</span>
          <span class="sales">月售{{ data.monthlySales }}+</span>
        </div>
        <div class="services">
          <div class="item" v-for="item in services" :key="item.type">
            <van-icon name="checked" color="#06D506" size="3.2vw" /> {{ item.value }}
          </div>
          <div class="icon-arrow item" :class="{ active }" @click="toggleActive()">
            <van-icon name="arrow-down" />
          </div>
        </div>
      </div>
      <div class="top-right">
        <img :src="data.avatarUrl" alt="" />
      </div>
    </div>
    <div class="shop-header__bottom">
      <div class="announcement" v-if="!show">
        <van-icon name="volume" class="volume1" color="#FFAF0F" size="3.2vw" />
        <div class="txt">
          <div class="info common-ellipsis">
            【公告】
            千xx丰水果，活国亚运，杭州亚运会官方指定新鲜水果~诞生于1997年，全国水果连锁品牌。专注高品质鲜果，26年坚持全球优质产地直采，全国23大智慧冷链物流，让水果从枝头鲜到舌头，用水果让生活更美好。免费提供洗切服务，足不出户感受水果惬意~外卖轻松到家
          </div>
        </div>
        <span class="more" @click="toggleShow()"><van-icon name="arrow-down" /></span>
      </div>

      <div class="announcement" v-else>
        <div class="volume"><van-icon name="volume" color="#FFAF0F" size="3.2vw" /></div>

        <div class="txt">
          <div class="info">
            【公告】
            {{ data.announcement }}
            <span class="more" @click="toggleShow()"><van-icon name="arrow-up" /></span>
          </div>
        </div>
      </div>

      <div class="redbags">
        <van-swipe :loop="false" :width="width" :show-indicators="false">
          <van-swipe-item v-for="item in data.discounts[0].content" :key="item.count">
            <div class="redbags-item bg1">
              <div class="count">
                ￥<span>{{ item.count }}</span>
              </div>
              <div class="if">满{{ item.if }}可用</div>
              <div class="button">领</div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.shop-header {
  padding: 10px;
  border-radius: 12px 12px 0px 0px;
  background-color: #fff;
  color: #818b98;
  &__top {
    display: flex;
    justify-content: space-between;
    .top-left {
      width: 375px;
      .name {
        width: 234px;
        height: 26px;
        font-size: 18px;
        font-family: MicrosoftYaHeiSemibold;
        color: #051733;
        line-height: 26px;
        margin-bottom: 8px;
      }
      .delivery {
        .score {
          font-size: 12px;
          display: inline-block;
          transform: scale(0.85);
          color: #ff445b;
          margin-right: 6px;
          margin-left: 4px;
        }
        .tags {
          border-radius: 1px;
          border: 1px solid #f68d14;
          color: #f68d14;
          font-size: 12px;
          i {
            font-style: normal;
            display: inline-block;
            transform: scale(0.85);
          }
        }
        .time,
        .sales {
          display: inline-block;
          font-size: 12px;
          transform: scale(0.85);
        }
        .sales {
          position: relative;
          left: -5px;
        }
      }
      .services {
        margin-top: 8px;
        display: flex;
        flex-wrap: wrap;
        .item {
          line-height: 20px;
          transform: scale(0.85);
          transform-origin: left center;
        }
        .icon-arrow.active {
          transform: rotate(180deg);
          /* 新加样式----- */
          transform-origin: center;
        }
      }
    }
    .top-right {
      flex-shrink: 0;
      width: 70px;
      height: 70px;
      background-color: khaki;
      img {
        width: 70px;
        height: 70px;
        display: block;
      }
    }
  }

  &__bottom {
    .announcement {
      display: flex;
      .volume {
        margin-top: 10px;
      }
      .volume1 {
        /* 新加样式----- */
        margin-top: 4px;
      }
      .txt {
        margin-left: 4px;
        width: 327px;
        overflow-x: hidden;
        .info {
          width: 380px;
          font-size: 12px;
          transform: scale(0.85);
          transform-origin: left center;
          line-height: 18px;
          //   background-color: blue;
        }
      }
    }

    .redbags {
      display: flex;
      margin-top: 8px;
      .redbags-item {
        width: 112px;
        height: 24px;
        color: #fff;
        display: flex;
        align-items: center;

        .count {
          width: 30px;
          span {
            font-size: 16px;
            font-family:
              PingFangSC-Semibold,
              PingFang SC;
            font-weight: 600;
          }
        }
        .if {
          width: 60px;
          text-align: center;
        }
        .button {
          width: 23px;
          text-align: center;
        }
      }
      .bg1 {
        background: url('@/assets/images/regbags/red-bag-bg1.png') no-repeat;
        background-size: 112px 24px;
      }
      .bg2 {
        background: url('@/assets/images/regbags/red-bag-bg2.png') no-repeat;
        background-size: 112px 24px;
      }
      .bg3 {
        background: url('@/assets/images/regbags/red-bag-bg3.png') no-repeat;
        background-size: 112px 24px;
      }
    }
  }
}
</style>
