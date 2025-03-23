<script setup lang="ts">
import { ref } from 'vue'
import { areaList } from '@vant/area-data'
import { addAddress, getAddress, updateAddress } from '@/api/address'
import { showDialog } from 'vant'
import { useRoute } from 'vue-router'
import type { IAddressItem } from '@/types/address'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const route = useRoute()

interface IArearList {
  text: string
  value: string
  children: IArearList[]
}
// 返回上一页
const onClickLeft = () => {
  history.back()
}

// 地址传递的地址id
const { addressId } = route.query
// 根据收货地址id来判断是新增还是更新
const title = addressId ? '更新' : '新增'

// 保存表格数据的字段
const receiver = ref('') // 收货人
const phone = ref('') // 手机号
const detailsAddress = ref('') // 详细地址

const showArea = ref(false) // 省市区弹窗
const result = ref('') // 显示省市区数据
const areaCode = ref('210102') // 选中项对应的地区码
const onConfirm = ({ selectedOptions }: { selectedOptions: IArearList[] }) => {
  console.log(selectedOptions)
  showArea.value = false
  result.value = selectedOptions.map((item) => item.text).join('/')
}
// 是否为默认地址
const checked = ref(false)

// 提交--保存
const onSubmit = () => {
  if (addressId) {
    // 更新
    onUpdateAddress()
  } else {
    // 发请求，添加的地址信息传递到后，后台会帮我们添加一条新的收货地址
    onAddAddress()
  }
}

// 添加地址
const onAddAddress = async () => {
  try {
    await addAddress({
      userId: userStore.userInfo.userId,
      receiver: receiver.value,
      area: result.value,
      areaCode: areaCode.value,
      detailsAddress: detailsAddress.value,
      phone: phone.value,
      isDefault: checked.value
    })

    // 提示弹窗，提示添加成功
    showDialog({
      title: '提示',
      message: '地址新增成功！'
    }).then(() => {
      // on close
      // 跳转到选择收货地址页
      // router.push('/address')
      history.back()
    })
  } catch (err) {
    // 如果添加失败
    showDialog({
      title: '提示',
      message: '地址添加失败'
    }).then(() => {
      // on close
    })
  }
}

// 更新地址
const onUpdateAddress = async () => {
  // 更新地址的接口
  try {
    await updateAddress({
      userId: userStore.userInfo.userId,
      addressId: Number(addressId),
      receiver: receiver.value,
      area: result.value,
      areaCode: areaCode.value,
      detailsAddress: detailsAddress.value,
      phone: phone.value,
      isDefault: checked.value
    })
    // 更新成功提示
    showDialog({
      title: '提示',
      message: '地址更新成功！'
    }).then(() => {
      // on close
      // 跳转到选择收货地址页
      // router.push('/address')
      history.back()
    })
  } catch (err) {
    showDialog({
      title: '提示',
      message: '地址更新失败'
    }).then(() => {})
  }
}
// 如果有id，就需要发请求获取id对应地址信息
const address = ref({} as IAddressItem)
const getAddressData = async () => {
  if (addressId) {
    // 发请求
    try {
      address.value = (await getAddress(
        userStore.userInfo.userId,
        Number(addressId)
      )) as IAddressItem
      // 拿到数后，就要渲染
      receiver.value = address.value.receiver
      phone.value = address.value.phone
      areaCode.value = address.value.areaCode
      result.value = address.value.area
      detailsAddress.value = address.value.detailsAddress
      checked.value = address.value.isDefault
    } catch (err) {
      //
    }
  }
}
getAddressData()
</script>

<template>
  <div class="address-edit-page">
    <van-nav-bar :title="title + '收货地址'" left-arrow @click-left="onClickLeft">
      <template #right> <van-icon name="ellipsis" color="#000" size="30" /> </template
    ></van-nav-bar>
    <!-- edit-main start -->
    <div class="edit-main">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="receiver"
            name="receiver"
            label="收货人"
            placeholder="收货人姓名"
            :rules="[{ required: true, message: '请填写收货人姓名' }]"
          />
          <van-field
            v-model="phone"
            name="phone"
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
          />

          <!-- 省市区 -->
          <van-field
            v-model="result"
            is-link
            readonly
            name="area"
            label="地区选择"
            placeholder="点击选择省市区"
            @click="showArea = true"
            :rules="[{ required: true, message: '请选择省市区' }]"
          />
          <van-popup v-model:show="showArea" position="bottom">
            <van-area
              :area-list="areaList"
              v-model="areaCode"
              @confirm="onConfirm"
              @cancel="showArea = false"
            />
          </van-popup>
          <!-- 省市区 -->

          <van-field
            v-model="detailsAddress"
            name="detailsAddress"
            label="详细地址"
            placeholder="填写街道小区门牌号"
            :rules="[{ required: true, message: '请填写街道小区门牌号' }]"
          />

          <div class="is-default">
            <span>设为默认收货地址</span>
            <span>
              <van-checkbox v-model="checked" checked-color="#FF445B"></van-checkbox>
            </span>
          </div>
        </van-cell-group>
        <div class="save-control">
          <van-button round block type="primary" native-type="submit" class="save-button">
            保存
          </van-button>
        </div>
      </van-form>
    </div>
    <!-- edit-main end -->
  </div>
</template>
<style lang="scss">
.address-edit-page {
  --van-cell-group-inset-padding: 0px;
  --van-field-label-width: 56px;
  --van-field-label-margin-right: 12px;
  .van-cell {
    padding: 0;
    min-height: 31px;
    margin-bottom: 16px;
  }
  .van-cell:after {
    left: 62px;
    width: 245px;
  }
  .van-cell-group--inset {
    padding: 20px 16px 20px 20px;
  }
  .van-field__label {
    font-size: 14px;
    font-family:
      PingFangSC-Semibold,
      PingFang SC;
    font-weight: 600;
    color: #051733;
    line-height: 20px;
  }
  .van-field__control {
    color: #4f5c70;
    &::placeholder {
      color: #4f5c70;
    }
  }
}
</style>
<style scoped lang="scss">
.address-edit-page {
  height: 100vh;
  background: #f7f8fa;
  .edit-main {
    margin-top: 12px;
    padding: 20px 16px 20px 20px;

    .is-default {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      font-size: 14px;
      font-weight: 600;
      color: #051733;
      line-height: 20px;
    }
    .save-control {
      height: 62px;
      background: #f7f8fa;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 222;
      display: flex;
      align-items: center;
      justify-content: center;
      .save-button {
        width: 327px;
        height: 46px;
        background: #ff445b;
        border-radius: 23px;
        border: 0;
      }
    }
  }
}
</style>
