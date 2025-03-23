<script setup lang="ts">
import SwitchThemeSkin from '@/components/SwitchThemeSkin.vue'
import { onMounted, ref } from 'vue'
const lbsLocation = ref('')

onMounted(() => {
  getCourrenPosition()
})

// 获地址位置信息
const getCourrenPosition = () => {
  var map = new BMapGL.Map('map')
  var point = new BMapGL.Point(116.331398, 39.897445)
  map.centerAndZoom(point, 12)

  var geolocation = new BMapGL.Geolocation()
  // 获取当前的位置
  geolocation.getCurrentPosition(function (this: any, r: { point: { lng: any; lat: any } }) {
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
      var mk = new BMapGL.Marker(r.point)
      map.addOverlay(mk)
      map.panTo(r.point)
      getPosition(r.point.lng, r.point.lat)
    } else {
      alert('failed' + this.getStatus())
    }
  })
}

const getPosition = (lng: any, lat: any) => {
  // 创建地理编码实例
  var myGeo = new BMapGL.Geocoder()
  // 根据坐标得到地址描述
  myGeo.getLocation(new BMapGL.Point(lng, lat), function (result: { address: string }) {
    if (result) {
      lbsLocation.value = result.address
      // console.log(result)
    }
  })
}
</script>

<template>
  <!-- 位置定位 -->
  <div class="location-page">
    <div id="map"></div>
    <div>
      <van-icon name="location" size="4.26vw" color="#fff" />
      <span class="location-txt">{{ lbsLocation }}</span>
    </div>

    <SwitchThemeSkin></SwitchThemeSkin>
  </div>
</template>

<style scoped lang="scss">
#map {
  width: 0px;
  height: 0px;
  display: none;
}
.location-page {
  padding: 15px 16px;
  height: 17px;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .location-txt {
    margin-left: 3px;
  }
}
</style>
