<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import SearchHistory from './SearchHistory.vue'
import ShopItem from '@/components/ShopItem.vue'
import type { IHistoryItem, ISearchShopListData, ISearchShopItem } from '@/types/search'
import { getSearchShopListData } from '@/api/search'
import { on } from 'events'

const emit = defineEmits<{
  (e: 'close'): void
}>()

// 用来保存历史搜索
const historyList = useLocalStorage<IHistoryItem[]>('historyList', [])

// 清空历史记录
const onClearHistroy = () => {
  historyList.value = []
}

// 搜索值
const keyword = ref('')
// 当前页码
const page = ref(0)
// 每页显示的条数
const limit = ref(10)
// 加载状态 false 加载完成
const loading = ref(false)
// 所有数是否全部加载完毕 false 没有
const finished = ref(false)
// 错误提示
const error = ref(false)
// 下拉刷新
const refreshing = ref(false) // 没有下拉
// 当前搜索状态
const searchState = ref(false) // false表示不是搜索状态
// 用来保存返回的店铺列表
const shopList = ref([] as ISearchShopItem[])
// 开始搜索
const onSearch = async (keyword: string) => {
  // 如果搜索框内容为空，则不做任何处理
  if (!keyword) return
  setTimeout(() => {
    searchState.value = false
  }, 0)
  setTimeout(() => {
    // 当前为搜索状态
    searchState.value = true
  }, 10)
  // 不是所有数据都加载完成
  finished.value = false
  // 要将当前的页面设置为0
  page.value = 0
  // 每次搜索新内容时，要将之前的内容清空
  shopList.value = []

  addHistoryList(keyword)
  // 发请求，携带关键词，后台会根据关键词返回对应的搜索内容
  onLoad()
}

const onLoad = async () => {
  if (refreshing.value) {
    shopList.value = []
    refreshing.value = false // 下拉刷新结束
  }
  page.value++
  let result: ISearchShopListData = { total: 0, data: [] } as ISearchShopListData
  try {
    result = await getSearchShopListData(keyword.value, page.value, limit.value)

    shopList.value = shopList.value.concat(result.data)
    // 判断所有数据是否已经全部加载完成
    if (shopList.value.length >= result.total) {
      finished.value = true
    }
  } catch (err) {
    // result = { total: 0, data: [] } as ISearchShopListData
    error.value = true // 加载失败
    page.value = 0 // 出错了，再次加载也是加载第一页的数据
  } finally {
    loading.value = false //  加载完成
  }
}

// 下拉后要做的事情
const onRefresh = () => {
  // 要将页码设置为0 ，表示加载最新的一页数据
  page.value = 0
  // 正在加载中
  loading.value = true
  // 这是新一轮的搜索
  finished.value = false
  // 加载新数据
  onLoad()
}

// 将搜索内容添加到历史记录
const addHistoryList = (keyword: string) => {
  // 如果之前有该历史记录，就要删除，然后将最新的加到最前面
  // 如果之前没有该历史记录，就直接添加一条到最前面
  const index = historyList.value.findIndex((v) => v.keyword === keyword)
  if (index >= 0) {
    //有该历记录，先删除
    historyList.value.splice(index, 1)
  }
  // 不管有没有该历史记录，都要直接添加该关键词到历史记录最前面
  historyList.value.unshift({
    id: Date.now(),
    keyword
  })

  // 只截取当前数组的前20条记录
  historyList.value = historyList.value.slice(0, 20)
}

// 点击搜索关键词，会调用这个方法
const onClickKeword = (historyKeyword: string) => {
  // 将搜索词添加到搜索框
  keyword.value = historyKeyword
  // 去搜索......
  onSearch(historyKeyword)
}

// 点击关闭按扭，关闭弹窗，同时还要清空搜索框和historyList
const onClickLeft = () => {
  // 清空搜索内容
  keyword.value = ''
  // 搜索返回的结果也要清空
  shopList.value = []
  // 关闭弹窗
  emit('close')
}

// 创建一个侦听器
watchEffect(() => {
  if (!keyword.value) {
    shopList.value = []
    searchState.value = false
  }
})
</script>

<template>
  <!-- nav-bar -->
  <van-nav-bar title="搜索" @click-left="onClickLeft">
    <template #left>
      <van-icon name="cross" color="#000" size="4.26vw" />
    </template>
    <template #right> <van-icon name="ellipsis" color="#000" size="30" /> </template>
  </van-nav-bar>

  <!-- 搜索框 -->
  <div class="search-input">
    <van-search v-model.trim="keyword" placeholder="请输入搜索关键词" @search="onSearch">
      <template #left-icon>
        <span class="iconfont icon-sousuo"></span>
      </template>
      <template #right-icon>
        <div class="search-button" @click="onSearch(keyword)">搜索</div>
      </template>
    </van-search>
  </div>
  <!-- 历史搜索 -->
  <SearchHistory v-if="!keyword" @click-keyword="onClickKeword" :history-list="historyList"
    @clear-history="onClearHistroy"></SearchHistory>

  <!-- 店铺列表 -->
  <div class="shop-list" v-if="searchState">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model:loading="loading" v-model:error="error" :finished="finished" finished-text="没有更多了"
        error-text="请求失败，点击重新加载" @load="onLoad" offset="100">
        <div class="shop-list__item" v-for="item in shopList" :key="item.shopId">
          <ShopItem :shop-data="item"></ShopItem>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<style>
.search-input {
  /* 去掉搜索框的容器内容边距 */
  --van-search-padding: 0px;
  /* 搜索容器高度 */
  --van-search-input-height: 36px;
  --van-radius-sm: 22px;
  --van-search-content-background: #f5f6f7;
  --van-padding-sm: 20px;
  --van-padding-base: 4px;
  /* 搜索框文本颜色 */
  --van-field-input-text-color: #051733;
}

.van-hairline--bottom:after {
  border: 0;
}
</style>
<style scoped lang="scss">
.shop-list {
  height: calc(100vh - 100px);
  overflow: auto;
}

.search-input {
  background-color: #fff;
  padding: 4px 16px;

  .icon-sousou {
    color: #f5f6f7;
  }

  .search-button {
    width: 50px;
    height: 26px;
    background: var(--theme-color-important);
    border-radius: 23px;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    line-height: 26px;
  }
}
</style>
