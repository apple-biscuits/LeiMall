<script setup lang="ts">
import { ref } from 'vue'
import { PHONE_REG, CODE_REG } from '@/utils/regular'
import useSmsCode from '@/use/useSmsCode'
import { useRouter } from 'vue-router'
// 需要用到vant组件
import { showLoadingToast, closeToast, showDialog } from 'vant'
// 导入请求方法
import { smsLoginCodeSend, smsLoginCodeCheck, smsLogin } from '@/api/login'
// 导入useStore
import { useUserStore } from '@/stores/user'
const phone = ref('13987654321') // 保存用户手机号
const code = ref('123456') // 保存验证码
const checked = ref(true) // 协议是否同意
const router = useRouter() // 路由实例
// 创建一个仓库
const userStore = useUserStore()

// 返回
const onClickLeft = () => {
  history.back()
}
// 验证登录验证码是否过期（无效）
const asyncCode = (val: string) =>
  new Promise<boolean>((resolve) => {
    showLoadingToast('验证中...')
    // 发请求，验证登录验证码是否过期（或无效）
    smsLoginCodeCheck(Number(phone.value), val)
      .then((res) => {
        resolve(res.ACK === 'ok' ? true : false)
      })
      .catch(() => {
        resolve(false)
      })
      .finally(() => {
        closeToast()
      })
  })

// 获取登录验证码
const { isGetCode, countdown, getCode } = useSmsCode()
const onGetCode = () => {
  //调用getCode去获取验证码
  //  帮我们去发送验证码（等下开发）
  getCode(smsLoginCodeSend, Number(phone.value))
}

// 登录
const onSubmit = async () => {
  if (!checked.value) {
    showDialog({
      message: '请先同意相关条款'
    })
    return
  }
  // 所有条件都满足，则开始登录
  try {
    let result = await smsLogin(Number(phone.value), code.value)
    // 如果登录成功
    // 我们要将用户信息保存在store 仓库， 对用户信息做本地旧化存储
    userStore.addUserInfo(result)
    // 将token保存在localStorage
    // window.localStorage.setItem('token', result.token)
    // 跳转到首页
    router.push('/')
  } catch (error) {
    // 登录失败，啥也不做,拦截器中会帮我们处理，弹出弹窗
  }
}
</script>

<template>
  <div class="register-page">
    <van-nav-bar title="登录" left-arrow @click-left="onClickLeft">
      <template #right> <van-icon name="ellipsis" color="#000" size="30" /> </template
    ></van-nav-bar>
    <!-- register-page__body start -->
    <div class="register-page__body">
      <div class="body-title">
        <div class="txt">验证码登录</div>
        <img src="@/assets/images/register/pho_line.png" alt="橘黄色渐变图" />
      </div>
      <div class="body-cart-img">
        <img src="@/assets/images/register/pho_buy.png" alt="购物车" />
      </div>
      <!-- body-form  start-->
      <div class="body-form">
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <h3 class="title">手机号</h3>
            <van-field
              v-model="phone"
              name="phone"
              placeholder="请输入手机号"
              autocomplete="off"
              :rules="[
                { required: true, message: '请添写手机号' },
                { pattern: PHONE_REG, message: '手机号格式不正确' }
              ]"
            />

            <h3 class="title">短信验证码</h3>
            <van-field
              v-model="code"
              name="code"
              autocomplete="off"
              placeholder="填写短信验证码"
              :rules="[
                { required: true, message: '密码不能为空' },
                { pattern: CODE_REG, message: '验证码只能是6位数字' },
                { validator: asyncCode, message: '验证码无效' }
              ]"
            >
              <template #extra>
                <!-- 获取验证码 -->
                <span class="code-button" v-if="!isGetCode" @click="onGetCode">获取验证码</span>
                <!-- 倒计时 -->
                <span class="code-count-down" v-else>已发送({{ countdown }})s</span>
              </template>
            </van-field>
          </van-cell-group>
          <!--注册-->
          <div>
            <van-button round block type="primary" native-type="submit"> 登录 </van-button>
          </div>
          <!-- 协议 -->
          <div class="agreement">
            <van-checkbox v-model="checked"></van-checkbox>
            并同意<a href="#">《隐私协议》</a>和<a href="#">《免责声明》</a>
          </div>
        </van-form>
      </div>
      <!-- body-form  end-->
    </div>
    <!-- register-page__body end -->
  </div>
</template>

<style>
.register-page {
  /*nav-bar */
  /* --van-nav-bar-icon-color: #000;
  --van-nav-bar-arrow-size: 24px;
  --van-nav-bar-height: 44px;
  --van-nav-bar-title-font-size: 18px;
  --van-nav-bar-title-text-color: rgba(0, 0, 0, 0.85); */

  /* van-cell-group--inset */
  --van-cell-group-inset-padding: 0px;
  .van-cell-group--inset {
    padding: 20px 24px;
  }
  .van-cell {
    padding: 0;
    border-bottom: 1px solid #ecf3fe;
    margin-bottom: 22px;
  }
  .van-cell::after {
    border: 0;
  }
  .van-form {
    box-shadow: 0px 2px 30px 0px rgba(3, 51, 136, 0.15);
    border-radius: 8px;
    position: relative;
  }
  .van-field__control {
    height: 38px;
  }
  .van-field__control::placeholder {
    color: #b4b9c1;
  }
  /* 注册按扭 */
  --van-button-round-radius: 25px;
  --van-button-primary-background: var(--theme-color-important);
  --van-button-border-width: 0px;
  --van-button-default-height: 50px;
  --van-button-normal-font-size: 16px;
  .van-button--block {
    width: 279px;
    position: absolute;
    bottom: -25px;
    left: 24px;
  }
  .van-icon {
    margin-right: 2px;
  }
}
</style>
<style scoped lang="scss">
.register-page {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  background-color: #fff;
  z-index: 2;
  .register-page__body {
    // min-height: 100vh;
    background-image: linear-gradient(
      to bottom,
      var(--theme-color-important) 25%,
      #fff 20%,
      #fff 100%
    );
    padding-top: 134px;
    position: relative;
    padding-bottom: 80px;
    .body-title {
      position: absolute;
      top: 74px;
      left: 24px;
      .txt {
        font-size: 18px;
        font-family:
          PingFangSC-Semibold,
          PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 25px;
      }
      img {
        width: 72px;
        height: 5px;
        display: block;
      }
    }
    .body-cart-img {
      position: absolute;
      right: 25px;
      top: 25px;
      img {
        width: 161px;
        height: 161px;
      }
    }
    .body-form {
      padding: 20px 24px;

      border-radius: 8px;
      h3.title {
        font-size: 14px;
        font-family:
          PingFangSC-Regular,
          PingFang SC;
        font-weight: 400;
        color: #051733;
        line-height: 20px;
        margin: 0px 0 16px 0;
      }

      span.pos {
        position: relative;
        top: 10px;
      }
      .code-button {
        font-size: 12px;
        font-family:
          PingFangSC-Regular,
          PingFang SC;
        font-weight: 400;
        color: #1472ff;
        position: relative;
        top: 8px;
      }
      .code-count-down {
        color: #b4b9c1;
        position: relative;
        top: 8px;
      }
      input.pwd {
        position: absolute;
        background-color: #fff;
        border: 0;
        height: 35px;
        top: 1px;
      }
      input.pwd::placeholder {
        color: #b4b9c1;
      }

      .agreement {
        position: absolute;
        width: 100%;
        bottom: -65px;
        display: flex;
        font-size: 12px;
        font-family:
          PingFangSC-Regular,
          PingFang SC;
        font-weight: 400;
        color: #697485;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
