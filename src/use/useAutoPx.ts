import { ref, onMounted, onUnmounted } from 'vue'
// px为需转换为自适应px的值
export function useAutoPx(px: number) {
  const _px = ref(px)
  const convertFn = () => {
    // 首先要计算出91对应vw值
    const _vw = px / 3.75
    // 我们要计算不同屏幕下1vw对应的px大小   375px 1vw=3.75   750px wv=7.5
    _px.value = (document.documentElement.clientWidth / 100) * _vw
  }

  convertFn()
  onMounted(() => {
    window.onresize = convertFn
  })

  onUnmounted(() => {
    window.onresize = null
  })

  return _px
}
