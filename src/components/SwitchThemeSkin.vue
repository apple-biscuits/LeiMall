<script setup lang="ts">
import { onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import { computed } from 'vue'

// 默认主题
const theme = useLocalStorage('themeSkin', {
  themeColor: 'red',
  themeSrc: '/theme/red.theme.skin.css'
  // themSrc:'/src/assets/css/theme/red.theme.skin.css'
})

const active = computed(() => (theme.value.themeColor === 'red' ? true : false))

// 创建link标签，插入到head中，默认链接的是red.theme.skin.css
onMounted(() => {
  // 如果原来插入过，再次回到页时，不需要再插入
  const _theme = document.getElementById('theme')
  if (!_theme) {
    // 创建一个link元素
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = theme.value.themeSrc
    link.id = 'theme'

    // 插入head的第一个子元素
    document.getElementsByTagName('head')[0].prepend(link)
  }
})

// 切换主题
const onSwitchThemSkin = (themeColor: string) => {
  // 获取link标签
  ;(
    document.getElementById('theme') as HTMLLinkElement
  ).href = `/theme/${themeColor}.theme.skin.css`

  // 也要本地存储
  theme.value.themeColor = themeColor
  theme.value.themeSrc = `/theme/${themeColor}.theme.skin.css`
}
</script>

<template>
  <div class="switch-theme-skin">
    <span :class="{ active }" @click="onSwitchThemSkin('red')">红色主题</span> |
    <span @click="onSwitchThemSkin('blue')" :class="{ active: !active }">蓝色主题</span>
  </div>
</template>
<style scoped lang="scss">
.switch-theme-skin {
  span.active {
    background-color: #fff;
    border-radius: 15px;
    padding: 4px 8px;
    color: var(--theme-color-important);
  }
}
</style>
