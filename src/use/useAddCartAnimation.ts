import emitter from '@/utils/mitt'
import { ref } from 'vue'
interface IBall {
  isShow: boolean
  addCartEl: HTMLElement
}

export function useAddCartAnimation(left: number = 30, bottom: number = 30) {
  // 定义一个方法，用来创建10个小球的关联对象
  const createBalls = (count: number) => {
    const balls = ref([] as IBall[])
    for (let i = 0; i < count; i++) {
      balls.value.push({
        isShow: false,
        addCartEl: {} as HTMLElement
      })
    }
    return balls
  }
  // 创建一组关联小球数对象，这些对象放在一个数组中
  const balls = createBalls(10)
  // 定义一个数组，用来保存当前被显示的小球关联的对象
  const enteredBalls = [] as IBall[]

  // 定义start方法，用来开始动画  el是指被点击+购的按扭
  const start = (el: HTMLElement) => {
    // 我只找balls中第一个隐藏的小球，让其显示
    const ball = balls.value.find((v) => !v.isShow)
    // 如果找到，则让其显示
    if (ball) {
      ball.isShow = true
      ball.addCartEl = el

      // 将当前被显示的小球关联的对象，添加到数组
      enteredBalls.push(ball)
    }
  }

  // 动画开始之前的状态 (元素没有插入到页面之前的状态)
  const onBeforeEnter = (el: Element) => {
    // 获取当前运动的小球关联的对象
    const ball = enteredBalls[enteredBalls.length - 1]
    // 得到+购按扭 坐标信息
    const rect = ball.addCartEl.getBoundingClientRect()
    // 计算小球x轴要移动距离
    const x = rect.left - left
    // 计算小球y轴要移动的距离
    const y = -(window.innerHeight - rect.top - bottom)
    // 设置小球的坐标  el --->.ball
    ;(el as HTMLElement).style.transform = `translate(0,${y}px)`

    // 设置inner的位置
    const inner = el.getElementsByClassName('inner')[0] as HTMLElement
    if (inner) {
      inner.style.transform = `translate(${x}px,0)`
    }
  }

  // 开始动画
  const onEnter = (el: Element, done: () => void) => {
    // 设置动画结束之后的状态
    setTimeout(() => {
      ;(el as HTMLElement).style.transform = `translate(0,0)`
      const inner = el.getElementsByClassName('inner')[0] as HTMLElement
      if (inner) {
        inner.style.transform = `translate(0,0)`
      }
    })

    // 表示动结束
    el.addEventListener('transitionend', done)
  }

  // 动画结束
  const onAfterEnter = (el: Element) => {
    // 第一个被加入的元素，肯定是最先执行完成动画
    const ball = enteredBalls.shift()
    if (ball) {
      ball.isShow = false
      ;(el as HTMLElement).style.display = 'none'
    }
  }

  // 我们要利用发布与订阅来实现任意组件间通信息
  // 当我们点击+购按扭时，会去触发一个事件，然后这个事件中会去调用start方法
  emitter.on('add-cart', (el: HTMLElement) => {
    console.log('add-cart')
    start(el)
  })

  return {
    start,
    onAfterEnter,
    onBeforeEnter,
    onEnter,
    balls
  }
}
