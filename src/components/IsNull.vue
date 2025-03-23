<script setup lang="ts">
interface IProps {
  imgSrc: string
  width?: string
  height?: string
}
withDefaults(defineProps<IProps>(), {
  width: '200px',
  height: '169px'
})

defineEmits<{
  (e: 'submit'): void
}>()
</script>

<template>
  <div class="order-null">
    <div class="order-null__top">
      <img :src="imgSrc" alt="" />
      <div class="text">
        <slot></slot>
      </div>
    </div>

    <div class="go-shoping" @click="$emit('submit')">去购物</div>
    <slot name="bottom"></slot>
  </div>
</template>
<style scoped lang="scss">
.order-null {
  &__top {
    width: 295px;
    background: #ffffff;
    border-radius: 8px;
    margin: 40px auto 54px;
    height: 376px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: v-bind(width);
      height: v-bind(height);
    }
    .text {
      margin-top: 23px;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 14px;
      color: #b4b9c1;
      line-height: 28px;
    }
  }
  .go-shoping {
    width: 279px;
    height: 50px;
    background: var(--theme-color-important);
    border-radius: 25px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #ffffff;
  }
}
</style>
