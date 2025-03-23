import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/api/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // 首页
      name: 'home',
      component: () => import('@/views/home/IndexView.vue'),
      meta: {
        title: '艾鲜生 WebApp'
      }
    },
    {
      path: '/cart', // 购物车
      name: 'cart',
      component: () => import('@/views/cart/CartIndex.vue'),
      meta: {
        requiresAuth: true,
        title: '购物车 - 艾鲜生 WebApp'
      }
    },
    {
      path: '/order', // 订单
      name: 'order',
      component: () => import('@/views/order/OrderIndex.vue'),
      meta: {
        requiresAuth: true,
        title: '订单 - 艾鲜生 WebApp'
      }
    },
    {
      path: '/my', // 我的
      name: 'my',
      component: () => import('@/views/my/MyIndex.vue'),
      meta: {
        title: '我的 - 艾鲜生 WebApp'
      }
    },
    {
      path: '/login', // 登录
      name: 'login',
      component: () => import('@/views/login/LoginIndex.vue'),
      meta: {
        title: '登录 - 艾鲜生 WebApp'
      }
    },
    {
      path: '/register', // 注册
      name: 'register',
      component: () => import('@/views/register/RegisterIndex.vue'),
      meta: {
        title: '注册 - 艾鲜生 WebApp'
      }
    },
    {
      path: '/shop/:shopId', // 商家店铺
      name: 'shop',
      component: () => import('@/views/shop/ShopIndex.vue'),
      meta: {
        requiresAuth: true,
        title: '商家店铺 - 艾鲜生 WebApp'
      }
    },
    {
      path: '/goods-details/:shopId/:goodsId', // 商品详情
      name: 'goods',
      component: () => import('@/views/goods-details/GoodsIndex.vue'),
      meta: {
        requiresAuth: true,
        title: '商品详情 - 艾鲜生 WebApp'
      }
    },
    {
      path: '/order/comfirmation/:shopId', // 订单支付
      name: 'orderComfirmation',
      component: () => import('@/views/order/OrderComfirmation.vue'),
      meta: {
        requiresAuth: true,
        title: '订单支付 - 艾鲜生 WebApp'
      }
    },
    {
      path: '/order/comfirmation', // 购物车结算-生成订单
      name: 'cartOrderComfirmation',
      component: () => import('@/views/order/CartOrderComfirmation.vue'),
      meta: {
        requiresAuth: true,
        title: '购物车结算 - 艾鲜生 WebApp'
      }
    },
    {
      path: '/address', // 地址管理
      name: 'address',
      component: () => import('@/views/address/AddressIndex.vue'),
      meta: {
        requiresAuth: true,
        title: '地址管理 - 艾鲜生 WebApp'
      }
    },
    {
      path: '/address/edit', // 新增或修改地址
      name: 'addressEdit',
      component: () => import('@/views/address/AddressEdit.vue'),
      meta: {
        requiresAuth: true,
        title: '地址管理 - 艾鲜生 WebApp'
      }
    }
  ]
})

// 全局前置守卫  to 要进入的路由
router.beforeEach(async (to) => {
  // 修改页面标题
  document.title = (to as any).meta.title || '大米超市'
  // 对路由做身验证
  // 判断当前路由是否需要身份认证
  if (to.meta.requiresAuth) {
    // 需要
    // 发请求，认证当前否登录（token是否有效）
    try {
      await auth()
      return true
    } catch {
      router.push('/login')
    }
  } else {
    // 不需要认证，直接放行
    return true
  }
})

export default router
