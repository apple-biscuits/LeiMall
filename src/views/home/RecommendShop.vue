<script setup lang="ts">
import ShopItemVue from '@/components/ShopItem.vue'
import { ref } from 'vue'
import type { ISearchShopItem, ISearchShopListData } from '@/types/search'
import { getRecommendShop } from '@/api/home'

// 分页相关的内容
const page = ref(0)
const limit = ref(10)
const loading = ref(false)
const finished = ref(false)
const error = ref(false)
const refreshing = ref(false)
const data = ref([] as ISearchShopItem[])
// 发请求获取数据
const getRecommendShopData = async () => {
  const result = ref({} as ISearchShopListData)
  if (refreshing.value) {
    refreshing.value = false // 下拉刷新结束
    data.value = []
  }
  try {
    result.value = await getRecommendShop(page.value, limit.value)
    data.value = data.value.concat(result.value.data)

    // 判断是否所有数所加载完成
    if (data.value.length >= result.value.total) {
      finished.value = true
    }
  } catch (err) {
    //加载失败
    error.value = true
    page.value = 0
  } finally {
    // 加载完
    loading.value = false
  }
}
// getRecommendShopData()
const onLoad = () => {
  console.log('onload.....')
  page.value++
  getRecommendShopData()
}
// 下拉刷新
const onRefresh = () => {
  // 当前页码设置为0
  page.value = 0
  //新一轮加载开始
  finished.value = false
  // 正在加载
  loading.value = true

  onLoad()
}
</script>

<template>
  <div class="recommend-shop">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        v-model:error="error"
        @load="onLoad"
        offset="100"
        error-text="请求失败，点击重新加载"
      >
        <div class="shop-item" v-for="item in data" :key="item.shopId">
          <ShopItemVue :shop-data="item"></ShopItemVue>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<style scoped lang="scss">
.recommend-shop {
  margin-top: 8px;
  height: 600px;
  overflow: auto; // 可滚动
}
</style>
