<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
// import emitter from '@/utils/mitt'
import { useAddCartAnimation } from '@/use/useAddCartAnimation'
const router = useRouter()
const cartStore = useCartStore()

const props = defineProps<{
  shopId: number
}>()
defineEmits<{
  (e: 'show'): void
}>()

// 当前店铺加购的总数
const cartCountTotal = computed(() => cartStore.cartCountTotalByShopId(props.shopId))
// 计算总价格（原价和现价）
const totalPrice = computed(() => cartStore.getCartTotalPriceByShopId(props.shopId))

// 去订单确认页
const gotoOrderConfirmation = () => {
  router.push({
    name: 'orderComfirmation',
    params: {
      shopId: props.shopId
    }
  })
}

const { balls, onAfterEnter, onBeforeEnter, onEnter } = useAddCartAnimation()
// interface IBall {
//   isShow: boolean
//   addCartEl: HTMLElement
// }

// // 定义一个方法，用来创建10个小球的关联对象
// const createBalls = (count: number) => {
//   const balls = ref([] as IBall[])
//   for (let i = 0; i < count; i++) {
//     balls.value.push({
//       isShow: false,
//       addCartEl: {} as HTMLElement
//     })
//   }
//   return balls
// }
// // 创建一组关联小球数对象，这些对象放在一个数组中
// const balls = createBalls(10)
// // 定义一个数组，用来保存当前被显示的小球关联的对象
// const enteredBalls = [] as IBall[]

// // 定义start方法，用来开始动画  el是指被点击+购的按扭
// const start = (el: HTMLElement) => {
//   // 我只找balls中第一个隐藏的小球，让其显示
//   const ball = balls.value.find((v) => !v.isShow)
//   // 如果找到，则让其显示
//   if (ball) {
//     ball.isShow = true
//     ball.addCartEl = el

//     // 将当前被显示的小球关联的对象，添加到数组
//     enteredBalls.push(ball)
//   }
// }

// // 动画开始之前的状态 (元素没有插入到页面之前的状态)
// const onBeforeEnter = (el: Element) => {
//   // 获取当前运动的小球关联的对象
//   const ball = enteredBalls[enteredBalls.length - 1]
//   // 得到+购按扭 坐标信息
//   const rect = ball.addCartEl.getBoundingClientRect()
//   // 计算小球x轴要移动距离
//   const x = rect.left - 30
//   // 计算小球y轴要移动的距离
//   const y = -(window.innerHeight - rect.top - 30)
//   // 设置小球的坐标  el --->.ball
//   ;(el as HTMLElement).style.transform = `translate(0,${y}px)`

//   // 设置inner的位置
//   const inner = el.getElementsByClassName('inner')[0] as HTMLElement
//   if (inner) {
//     inner.style.transform = `translate(${x}px,0)`
//   }
// }

// // 开始动画
// const onEnter = (el: Element, done: () => void) => {
//   // 设置动画结束之后的状态
//   setTimeout(() => {
//     ;(el as HTMLElement).style.transform = `translate(0,0)`
//     const inner = el.getElementsByClassName('inner')[0] as HTMLElement
//     if (inner) {
//       inner.style.transform = `translate(0,0)`
//     }
//   })

//   // 表示动结束
//   el.addEventListener('transitionend', done)
// }

// // 动画结束
// const onAfterEnter = (el: Element) => {
//   // 第一个被加入的元素，肯定是最先执行完成动画
//   const ball = enteredBalls.shift()
//   if (ball) {
//     ball.isShow = false
//     ;(el as HTMLElement).style.display = 'none'
//   }
// }

// // 我们要利用发布与订阅来实现任意组件间通信息
// // 当我们点击+购按扭时，会去触发一个事件，然后这个事件中会去调用start方法
// emitter.on('add-cart', (el: HTMLElement) => {
//   console.log('add-cart')
//   start(el)
// })
</script>

<template>
  <!-- 购物车底部结算 -->
  <div class="shoping-cart-settlement" @click="$emit('show')">
    <div class="cart">
      <img src="@/assets/images/shop/shoping-cart.png" v-if="cartCountTotal > 0" />
      <img src="@/assets/images/shop/shoping-cart2.png" v-else />

      <div class="count" v-if="cartCountTotal > 0">
        <span>{{ cartCountTotal }}</span>
      </div>
    </div>
    <div class="info">
      <div class="price" v-if="totalPrice.nowPriceTotal > 0">
        <span>￥</span>
        <b>{{ totalPrice.nowPriceTotal }}</b>
        <del>{{ totalPrice.oldPriceTotal }}</del>
      </div>
      <div class="delivery">
        <span>预估配送费￥2.0</span>
        <span>打包费￥1.0</span>
      </div>
    </div>
    <div
      class="settlement-button active"
      @click.stop="gotoOrderConfirmation"
      v-if="totalPrice.nowPriceTotal > 0"
    >
      结算
    </div>
    <div class="settlement-button" v-else>结算</div>
  </div>

  <!-- 小球的容器 -->
  <div class="ball-container">
    <template v-for="(ball, index) in balls" :key="index">
      <Transition @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter">
        <div class="ball" v-if="ball.isShow">
          <div class="inner"></div>
        </div>
      </Transition>
    </template>
  </div>
</template>

<style scoped lang="scss">
.ball-container {
  .ball {
    width: 16px;
    height: 16px;
    // border: 5px solid blue;
    // background-color: blue;
    position: fixed;
    left: 30px;
    bottom: 30px;
    z-index: 9999;
    // transition: all 30s linear;
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    .inner {
      width: inherit;
      height: inherit;
      background-color: #ff445b;
      border-radius: 50%;
      transition: all 0.4s linear;
    }
  }
}

.shoping-cart-settlement {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px -2px 6px 0px rgba(45, 45, 75, 0.06);
  display: flex;
  align-items: center;
  z-index: 9999;
  padding: 0px 16px;
  .cart {
    position: relative;
    margin-right: 12px;
    img {
      width: 40px;
      height: 40px;
    }
    .count {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #06d506;
      text-align: center;
      line-height: 16px;
      color: #fff;
      position: absolute;
      top: 0;
      right: -8px;
      span {
        display: inline-block;
        transform: scale(0.85);
      }
    }
  }
  .info {
    flex-grow: 1;
    .price {
      height: 25px;
      display: flex;
      align-items: center;
      color: #ff445b;
      font-family:
        PingFangSC-Semibold,
        PingFang SC;
      font-weight: 600;
      b {
        font-size: 18px;
      }
      del {
        color: #b4b9c1;
        font-family: PingFang SC;
        font-weight: 400;
        margin-left: 6px;
      }
    }
    .delivery {
      margin-top: 5px;
      span {
        margin-right: 8px;
      }
    }
  }
  .settlement-button {
    width: 80px;
    height: 38px;

    border-radius: 23px;
    background-color: #f2f3f5;
    color: #818b98;
    text-align: center;
    line-height: 38px;
    font-size: 14px;
  }
  .active {
    background: #ff445b;
    color: #fff;
  }
}
</style>
