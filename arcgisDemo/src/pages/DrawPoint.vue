<template>
  <div class="container">
    <div class="map" id="map" ref="map"></div>
  </div>
</template>

<script>
// 导入arcgis依赖
import * as esriLoader from "esri-loader";
// 导入所需要的js、css、url资源等
import { esriCss,esriJs,czdzUrl } from "@/config/map";
esriLoader.loadScript({url:esriJs});
esriLoader.loadCss(esriCss);
// 导入创建地图api
import createMapApi from "@/api/createMapApi";
// 导入创建静态图层api
import createTileLayerApi from "@/api/createTileLayerApi";
// 导入图形图层
import createGraphicsLayerApi from "@/api/createGraphicsLayerApi";
// 画点
export default {
  data() { 
    return {
      map:"",
      layer1:"",
      graphicsLayer:""
    }
  },
  methods:{
    async createMap(){
      const _this = this;
      if(_this.map === ""){
        // 创建地图
        _this.map = await createMapApi(_this.$refs.map);
        // 创建静态图层
        _this.layer1 = await createTileLayerApi(czdzUrl);
        // 叠图
        _this.map.addLayer(_this.layer1)
        // 创建图形图层,可以在上面画图
        _this.graphicsLayer = await createGraphicsLayerApi();
        // 叠图，
        _this.map.addLayer(_this.graphicsLayer);
      }
    },
  },
  mounted(){
    this.createMap();
  },
 }
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100%;
    position: relative;
    .map{
      width: 100%;
      height: 100%;
    }
  }
</style>