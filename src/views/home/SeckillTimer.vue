<script setup lang="ts">
import { ref } from 'vue'
import { useAutoPx } from '@/use/useAutoPx'
import { getSeckillTimerGoods } from '@/api/home'
import type { ISeckillTimer } from '@/types/home'

const time = ref(50000)
const padStart = (time: number) => {
  return time.toString().padStart(2, '0')
}
// 让width变成一个自适应的
const width = useAutoPx(91)

const data = ref({} as ISeckillTimer)

// 发请获取秒杀倒计时数据
const getSeckillTimerGoodsData = async () => {
  try {
    data.value = await getSeckillTimerGoods()
    time.value = data.value.time
  } catch (error) {
    data.value = {} as ISeckillTimer
  }
}
getSeckillTimerGoodsData()

// 倒计时结束
const finished = ref(true)
const onFinish = () => {
  finished.value = false
}
</script>

<template>
  <!-- 特价秒杀 -->
  <div class="seckill-timer" v-if="finished">
    <div class="seckill-timer__top">
      <div class="text">特价秒杀</div>
      <div class="time">
        <van-count-down :time="time" @finish="onFinish">
          <template #default="timeData">
            <span class="block">{{ padStart(timeData.days * 24 + timeData.hours) }}</span>
            <span class="colon">:</span>
            <span class="block">{{ padStart(timeData.minutes) }}</span>
            <span class="colon">:</span>
            <span class="block">{{ padStart(timeData.seconds) }}</span>
          </template>
        </van-count-down>
      </div>
    </div>
    <div class="seckill-timer__product">
      <van-swipe :loop="false" :width="width" :show-indicators="false">
        <van-swipe-item v-for="item in data.goods" :key="item.goodId">
          <RouterLink :to="`/goods-details/${item.shopId}/${item.goodId}`">
            <div class="item">
              <img :src="item.imgUrl" alt="" />
              <p class="title common-ellipsis">{{ item.name }}</p>
              <p class="price">
                <b>￥</b><span>{{ item.price }}</span>
              </p>
            </div>
          </RouterLink>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<style scoped lang="scss">
.seckill-timer {
  padding: 12px;
  width: 319px;
  background-color: #fff;
  margin: 12px auto 10px;
  border-radius: 12px;

  &__top {
    display: flex;
    .text {
      height: 20px;
      font-size: 14px;
      font-family:
        PingFangSC-Semibold,
        PingFang SC;
      font-weight: 600;
      color: #051733;
      line-height: 20px;
    }
    .time {
      margin-left: 14px;
      span.block {
        display: inline-block;
        width: 22px;
        height: 22px;
        line-height: 22px;
        background: var(--theme-color-important);
        border-radius: 2px;
        text-align: center;
        font-weight: 400;
        color: #fff;
      }
      span.colon {
        display: inline-block;
        width: 8px;
        text-align: center;
        line-height: 22px;
        color: var(--theme-color-important);
      }
    }
  }
  &__product {
    margin-top: 12px;
    .item {
      img {
        width: 80px;
        height: 80px;
        display: block;
      }
      p.title {
        margin-top: 6px;
        margin-bottom: 3px;
        height: 17px;
        font-weight: 400;
        color: #051733;
        line-height: 17px;
      }
      p.price {
        color: var(--theme-color-important);
        b {
          display: inline-block;
          transform: scale(0.85);
        }
        span {
          font-size: 14px;
          font-family:
            PingFangSC-Semibold,
            PingFang SC;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
