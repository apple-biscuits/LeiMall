import axios from '@/api/base'
import type { IAddress, IAddressItem } from '@/types/address'

// 获取收货地址,有addressId就是返回对应地址信息
// 如果有userId，那就返回对应用户的所有地址
// 如果有userId和addressId，则返回用户地址中的addressId为传入id的这个地址
export function getAddress(userId: number, addressId?: number) {
  return axios.get<IAddress, IAddress>('/address', {
    params: {
      userId,
      addressId
    }
  })
}

// 新增一条收货地址
export function addAddress(address: IAddressItem) {
  return axios.post('/address', address)
}

// 更新收货地址  userId和addressId 找到具体某个用户的某个收货地址，然后更新
export function updateAddress(address: IAddressItem) {
  return axios.put<IAddressItem, IAddressItem>('/address', address)
}

// 删除单个收货地址
export function deleteAddress(userId: number, addressId: number) {
  return axios.delete<IAddressItem, IAddressItem>('/address', {
    data: {
      userId,
      addressId
    }
  })
}

// 获取默认地址
export function getDefaultAddress(userId: number) {
  return axios.get<IAddressItem, IAddressItem>('/address/default', {
    params: {
      userId
    }
  })
}
