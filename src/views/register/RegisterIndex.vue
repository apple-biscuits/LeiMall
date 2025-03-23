<script setup lang="ts">
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import useSmsCode from '@/use/useSmsCode'
import { showLoadingToast, closeToast, showDialog } from 'vant'
import { useRouter } from 'vue-router'
// 导入需要用到正则
import { PHONE_REG, PASSWORD_REG, USERNAME_REG, CODE_REG } from '@/utils/regular'
import {
  phoneIsExisted,
  usernameIsExisted,
  registerCodeSend,
  registerCodeCheck,
  smsRegistor
} from '@/api/register'

const onClickLeft = () => {
  history.back() // 返回到上一页
}
const router = useRouter()
// 定义变量保存表单字段内容
const phone = ref('')
const username = ref('')
const password = ref('')
const code = ref('')
const checked = ref(false)

// 密码显示与隐藏
const [isShowEye, toggleEye] = useToggle(false)

// 获取验证码
const { isGetCode, countdown, getCode } = useSmsCode()
const onGetCode = () => {
  //调用getCode去获取验证码
  getCode(registerCodeSend, Number(phone.value))
}

// 验证手机号是否被注册过
const asyncPhone = (val: string) =>
  new Promise<boolean>((resolve) => {
    showLoadingToast('验证中...')
    // 发请求，验证手机号是否已注册
    phoneIsExisted(Number(val))
      .then((res) => {
        // res=true表示手机号注册
        resolve(!res)
      })
      .catch(() => {
        resolve(false)
      })
      .finally(() => {
        closeToast()
      })
  })

// 验证用户名是否被注册
const asyncUserName = (val: string) =>
  new Promise<boolean>((resolve) => {
    showLoadingToast('验证中...')
    // 发请求，验证用户名是否已注册
    usernameIsExisted(val)
      .then((res) => {
        // res=true表示手机号注册
        resolve(!res)
      })
      .catch(() => {
        resolve(false)
      })
      .finally(() => {
        closeToast()
      })
  })

//验证验证码是否过期（或无效）
const asyncCode = (val: string) =>
  new Promise<boolean>((resolve) => {
    showLoadingToast('验证中...')
    // 发请求，验证验证码是否过期或无效
    registerCodeCheck(Number(phone.value), val)
      .then((res) => {
        // 验证正确没有过期 {ACK:'ok'} 否则是no
        resolve(res.ACK === 'ok' ? true : false)
      })
      .catch(() => {
        resolve(false)
      })
      .finally(() => {
        closeToast()
      })
  })

// 提交注册表单
const onSubmit = async () => {
  // 验证协议是否有勾选
  // 没有勾选 checked.value=false
  if (!checked.value) {
    // 弹出弹窗提示，要勾选协议
    showDialog({
      message: '请先同意相关条款'
    })
    return
  }

  console.log('ssss')
  // 如果勾选了，则就会发请求，提交数据，注册用户
  //.....
  try {
    await smsRegistor({
      phone: Number(phone.value),
      username: username.value,
      password: password.value,
      code: code.value
    })
    // 注册成功，跳转到登录
    router.push('/')
  } catch {
    //注册失败
  }
}
</script>

<template>
  <div class="register-page">
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft">
      <template #right> <van-icon name="ellipsis" color="#000" size="30" /> </template
    ></van-nav-bar>
    <!-- register-page__body start -->
    <div class="register-page__body">
      <div class="body-title">
        <div class="txt">注册账号</div>
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
              placeholder="填写你常用的手机号码作为登陆账号"
              autocomplete="off"
              :rules="[
                { required: true, message: '请添写手机号' },
                { pattern: PHONE_REG, message: '手机号格式不正确' },
                {
                  validator: asyncPhone,
                  message: '该手机号已注册'
                }
              ]"
            />
            <h3 class="title">用户名</h3>
            <van-field
              v-model="username"
              name="username"
              autocomplete="off"
              placeholder="6-18位英文字母和数字组成"
              :rules="[
                { required: true, message: '请输入用户名' },
                { pattern: USERNAME_REG, message: '用户名格式不正确' },
                { validator: asyncUserName, message: '该用户名已存在' }
              ]"
            />
            <h3 class="title">密码</h3>
            <van-field
              v-model="password"
              type="password"
              autocomplete="off"
              name="password"
              placeholder="8-16位包含数字、大小写字母、特殊符号"
              :rules="[
                { required: true, message: '密码不能为空' },
                { pattern: PASSWORD_REG, message: '密码格式不正确' }
              ]"
              trigger="onChange"
            >
              <template #extra>
                <div @click="toggleEye()">
                  <!-- 开眼 -->
                  <span v-if="isShowEye" class="show-password pos">
                    <van-icon name="eye-o" size="16" color="#B4B9C1" />
                  </span>
                  <!-- 闭眼 -->
                  <span class="close-password pos" v-else>
                    <van-icon name="closed-eye" size="16" color="#B4B9C1" />
                  </span>
                </div>
                <!-- 添加文框 -->
                <input
                  type="text"
                  class="pwd"
                  autocomplete="off"
                  v-model="password"
                  v-if="isShowEye"
                  placeholder="8-16位包含数字、大小写字母、特殊符号"
                />
              </template>
            </van-field>
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
            <van-button round block type="primary" native-type="submit"> 注册 </van-button>
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
  --van-button-primary-background: #ff445b;
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
    background-image: linear-gradient(to bottom, #ff445b 25%, #fff 20%, #fff 100%);
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
