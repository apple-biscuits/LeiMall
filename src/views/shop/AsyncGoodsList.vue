<script setup lang="ts">
import BScroll from '@better-scroll/core'
import { onMounted, ref } from 'vue'
import { getShopGoodsByShopId } from '@/api/shop'
import { useRoute } from 'vue-router'
import type { IGoodsType, IShopGoods } from '@/types/shop'
import GoodsItem from '@/components/GoodsItem.vue'
import { computed } from 'vue'
import { watch } from 'vue'

const route = useRoute()
const { shopId } = route.params
const shopName = ref('')
const data = ref([] as IGoodsType[])
// 商品分类
const indexList = computed(() => {
  return data.value.map((v) => v.typename)
})

// 侦听器，去侦听数据
watch(
  indexList,
  (value) => {
    if (value.length > 0) {
      setTimeout(() => {
        new BScroll('.scroll-wrapper', {
          click: true
        })
      }, 100)
    }
  },
  { immediate: true }
)

// 获取数据
const getShopGoodsData = async () => {
  let result: IShopGoods
  try {
    result = await getShopGoodsByShopId(Number(shopId))
    data.value = result.data
    shopName.value = result.shopName
    console.log(data.value)
  } catch (err) {
    //
    data.value = []
  }
}
getShopGoodsData()
</script>

<template>
  <div class="goods-list">
    <van-index-bar :index-list="indexList" teleport="#menu" sticky :sticky-offset-top="28">
      <template v-for="item in data" :key="item.typeId">
        <van-index-anchor :index="item.typename">{{ item.typename }}</van-index-anchor>
        <template v-for="goods in item.goods" :key="goods.goodsId">
          <GoodsItem :goods="goods" :shop-id="Number(shopId)" :shop-name="shopName"></GoodsItem>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="scss">
.goods-list {
  --van-index-anchor-sticky-text-color: #ff445b;
}
</style>
