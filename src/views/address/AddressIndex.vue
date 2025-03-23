<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { deleteAddress, getAddress } from '@/api/address'
import { showConfirmDialog, showDialog } from 'vant'
import { ref } from 'vue'
import type { IAddressItem } from '@/types/address'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const { shopId } = route.query
// 返回上一页
const onClickLeft = () => {
  history.back()
}

// 去添加收货地址
const gotoAddAddress = () => {
  router.push('/address/edit')
}

// 获取收货地址
const addressList = ref([] as IAddressItem[])
const getAddressListData = async () => {
  try {
    addressList.value = (await getAddress(userStore.userInfo.userId)) as IAddressItem[]
  } catch (err) {
    addressList.value = []
  }
}
getAddressListData()

// 跳转到更新收货地址页面
const onUpdate = (addressId: number) => {
  router.push('/address/edit?addressId=' + addressId)
}
// 删除某个地址
const onDelete = (addressId: number) => {
  // 提示是否真的要删除
  showConfirmDialog({
    title: '提示',
    message: '确定要删除吗？'
  })
    .then(async () => {
      // on confirm  确定
      try {
        await deleteAddress(userStore.userInfo.userId, addressId)

        showDialog({
          title: '提示',
          message: '删除成功'
        }).then(() => {
          // on close
          getAddressListData()
        })
      } catch (err) {
        //
        showDialog({
          title: '提示',
          message: '删除成失败'
        }).then(() => {})
      }
    })
    .catch(() => {
      // on cancel  取消
    })
}

// 选择地址
const onSeletedAddress = (addressId: number) => {
  setTimeout(() => {
    router.replace({
      name: 'orderComfirmation',
      params: {
        shopId: Number(shopId)
      },
      query: {
        addressId
      }
    })
  }, 10)

  history.back()
}
</script>

<template>
  <div class="address-page">
    <van-nav-bar title="选择收货地址" left-arrow @click-left="onClickLeft">
      <template #right> <van-icon name="ellipsis" color="#000" size="30" /> </template
    ></van-nav-bar>
    <!-- address-list-start -->
    <div class="address-list">
      <div
        class="item"
        v-for="item in addressList"
        :key="item.addressId"
        @click="onSeletedAddress(Number(item.addressId))"
      >
        <div class="details">
          <p>{{ item.area.split('/').join('') + item.detailsAddress }}</p>
          <span v-if="item.isDefault">{{ item.isDefault ? '默认' : '' }}</span>
        </div>
        <div class="receiver">
          <span>{{ item.receiver }}</span>
          <span class="phone">{{ item.phone }}</span>
          <span class="delete" @click.stop="onDelete(item.addressId!)">
            <van-icon name="delete-o" />
          </span>
          <span class="edit" @click.stop="onUpdate(item.addressId!)">
            <van-icon name="edit" />
          </span>
        </div>
      </div>
    </div>
    <!-- address-list-end -->
    <!-- add-address-start -->
    <div class="add-address">
      <div class="button" @click="gotoAddAddress">
        <van-icon name="plus" size="4.26vw" color="#FF445B" />
        <span>添加收货地址</span>
      </div>
    </div>
    <!-- add-address-end -->
  </div>
</template>
<style scoped lang="scss">
.address-page {
  height: 100vh;
  background-color: #f7f8fa;
  overflow-y: scroll;
  .address-list {
    margin: 12px 16px;
    background-color: #fff;
    border-radius: 4px;
    padding: 10px 0px;
    margin-bottom: 72px;
    .item {
      padding: 12px 16px 10px 20px;
      margin-bottom: 10px;
      position: relative;
      &::after {
        content: '';
        display: block;
        height: 1px;
        width: 295px;
        background-color: #f2f3f5;
        position: absolute;
        left: 32px;
        bottom: 0px;
      }
      .details {
        display: flex;
        align-items: center;
        p {
          font-size: 14px;
          font-family:
            PingFangSC-Semibold,
            PingFang SC;
          font-weight: 600;
          color: #051733;
          line-height: 26px;
        }
        span {
          flex-shrink: 0;
          width: 32px;
          height: 20px;
          line-height: 20px;
          background: rgba(255, 68, 91, 0.1);
          border-radius: 2px;
          font-size: 12px;
          color: #ff445b;
          text-align: center;
          margin-left: 11px;
        }
      }
      .receiver {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        color: #4f5c70;
        height: 20px;
        span.phone {
          flex-grow: 1;
          margin-left: 12px;
        }
        span.delete {
          margin-right: 16px;
        }
      }
    }
  }
  .add-address {
    width: 375px;
    height: 62px;
    background: #f7f8fa;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 222;
    display: flex;
    align-items: center;
    justify-content: center;
    .button {
      width: 327px;
      height: 46px;
      border-radius: 23px;
      border: 1px solid #ff445b;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 14px;
        font-weight: 400;
        color: #ff445b;
      }
    }
  }
}
</style>
