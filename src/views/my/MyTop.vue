<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

// 用户信息
const userStore = useUserStore()
const router = useRouter()
// 去注册
const toRegister = () => {
  router.push('/register')
}
// 去登录
const toLogin = () => {
  router.push('/login')
}

// 退出登录
const toExit = () => {
  // 将用户信息和token全部清空，localStorage中也要清空
  userStore.removeUserInfo()
  // 清空token
}
</script>

<template>
  <div class="my-top">
    <div class="avatar">
      <img :src="userStore.userInfo.avatarUrl" alt="用户头像" />
    </div>
    <div class="text">
      <p>{{ userStore.userInfo.nickname }}</p>
      <span>{{
        userStore.userInfo.phone ? '账号：' + userStore.userInfo.phone : '登录后即可查看'
      }}</span>
    </div>
    <div class="register-button" v-if="!userStore.userInfo.phone" @click="toRegister">注册</div>
    <div class="exit-button" v-else @click="toExit">退出</div>
  </div>
  <!-- 登录按扭与我的信息 -->
  <div class="login-button" v-if="!userStore.userInfo.phone" @click="toLogin">立即登录</div>
  <div class="my-items" v-else></div>
</template>

<style scoped lang="scss">
.my-top {
  box-sizing: border-box;
  width: 343px;
  height: 92px;
  background: #ffffff;
  border-radius: 2px 2px 0px 0px;
  margin: 16px auto 12px;
  display: flex;
  align-items: center;
  padding: 16px 12px;
  .avatar {
    width: 60px;
    height: 60px;
    border: 1px dashed #818b98;
    margin-right: 12px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text {
    flex-grow: 1;
    p {
      font-size: 16px;
      font-family: PingFang-SC-Heavy, PingFang-SC;
      font-weight: 800;
      color: #051733;
      line-height: 24px;
    }
    span {
      font-size: 12px;
      font-weight: 400;
      color: #818b98;
      line-height: 20px;
    }
  }
  .register-button,
  .exit-button {
    width: 52px;
    height: 32px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #dadce1;
    text-align: center;
    font-family: MicrosoftYaHei;
    line-height: 32px;
    color: #051733;
  }
  .arrow-right {
    width: 19px;
    height: 19px;
    border: 1px dotted #dadce1;
    text-align: center;
    line-height: 19px;
  }
}
.login-button {
  width: 343px;
  background: linear-gradient(270deg, #ff7159 0%, #ff445b 100%);
  border-radius: 6px;
  font-size: 14px;
  font-family: PingFang-SC-Heavy, PingFang-SC;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
  margin: 0 auto;
}
.my-items {
  width: 343px;
  height: 79px;
  background: linear-gradient(270deg, #ff7159 0%, #ff445b 100%);
  border-radius: 6px;
  margin: 0px auto;
}
</style>
