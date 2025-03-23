<script setup lang="ts">
import { computed, ref } from 'vue'

const emit = defineEmits<{
  (e: 'click-keyword', value: string): void
  (e: 'clear-history'): void
}>()

interface IHistoryItem {
  id: number
  keyword: string
}
interface IProps {
  historyList: IHistoryItem[]
}
const props = defineProps<IProps>()

// 我们希望默认只显示最新的8条历史记录
const isShowAll = ref(false)
// 在页面最终是显示部分历史记录，还是所有所历史记录，是由isShow
const showHistoryList = computed(() => {
  if (isShowAll.value) {
    // 显示所有
    return props.historyList
  } else {
    // 显示最新的8条
    return props.historyList.slice(0, 8)
  }
})

const onClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement // 断言类型
  if (target && target.tagName.toLowerCase() === 'span') {
    // 去做下面的事情
    emit('click-keyword', target.innerText)
  }
}
</script>
<template>
  <div class="search-history common-wrap" v-if="historyList.length !== 0">
    <div class="search-history__title">
      <div class="text">历史搜索</div>
      <van-icon name="delete-o" size="4.26vw" @click="$emit('clear-history')" />
    </div>
    <div class="search-history__content" @click="onClick">
      <TransitionGroup>
        <span v-for="item in showHistoryList" :key="item.id">{{ item.keyword }}</span>
      </TransitionGroup>
      <!-- 向上箭头 -->
      <div class="icon-up" v-if="isShowAll" @click="isShowAll = false">
        <van-icon name="arrow-up" />
      </div>
      <!-- 向下箭头 -->
      <div class="icon-down" v-if="!isShowAll && historyList.length > 8" @click="isShowAll = true">
        <van-icon name="arrow-down" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-history {
  &__title {
    display: flex;
    height: 35px;
    align-items: center;
    justify-content: space-between;
    .text {
      font: 16px;
      color: #000;
      font-weight: bold;
    }
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    span,
    .icon-up,
    .icon-down {
      background-color: #f5f6f7;
      margin: 5px;
      padding: 4px 8px;
      border-radius: 3px;
    }
  }
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.v-move,
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
<style></style>
