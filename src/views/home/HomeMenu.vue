<script setup lang="ts">
import type { MenuList } from '@/types/home'
import { getMenuList } from '@/api/home'
import { ref } from 'vue'

const menuList = ref([] as MenuList)
const getMenuListData = async () => {
  try {
    menuList.value = await getMenuList()
  } catch (err) {
    menuList.value = []
  }
}

getMenuListData()
</script>

<template>
  <div class="home-menu">
    <div class="item" v-for="item in menuList" :key="item.id">
      <a :href="item.href">
        <img :src="item.imgUrl" alt="" />
        <h3>{{ item.title }}</h3>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-menu {
  padding: 12px 10px;
  width: 324px;
  height: 160px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 6px;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
  column-gap: 11px;

  .item {
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
        margin: 12px 0px 4px 0px;
      }
      h3 {
        height: 20px;
        font-weight: 400;
        color: #051733;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
</style>
