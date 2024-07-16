// 画点
import * as esriLoader from "esri-loader";//加载arcgis依赖
import { EPSG,BORDERCOLOR,FILLCOLOR } from "@/config/map";

// 根据坐标画点，因为大小是像素，所以缩放地图，点的显示大不会变化
// 需要参数：x,y坐标，边框颜色，填充颜色
const drawPointByLocationApi = async (x,y,borderColor,fillColor)=>{
    const _this = this;
    const [Point,SpatialReference,Graphic,SimpleMarkerSymbol,SimpleLineSymbol,Color] = await esriLoader.loadModules([
        "esri/geometry/Point",
        "esri/SpatialReference",
        "esri/graphic",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol",
        "esri/Color",
    ]);//加载所需的arcgis组件

    // 如果颜色不传，就给个默认值
    if(borderColor === undefined){
        borderColor = BORDERCOLOR;//边框颜色
    }
    if(fillColor === undefined){
        fillColor = FILLCOLOR;//填充颜色
    }

    let point = new Point(x,y,new SpatialReference({wkid:EPSG}));//创建点，传入坐标和坐标系
    let symbol = new SimpleMarkerSymbol(
        SimpleMarkerSymbol.STYLE_COLOR,//设定填充的样式,正方形、圆形、三角形等等
        20,// 设定点半径的大小(单位是像素)，默认12
        new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_COLOR,//设定外层line的样式
            Color(borderColor),//设定line的颜色
            2,//设定line的粗细
        ),
        new Color(fillColor)//设定填充的颜色
    );
    let graphic = new Graphic(point,symbol);//创建graphic

    return graphic;

}

// 根据坐标画点(使用图片，最常用)
// 需要参数:x,y坐标、图片地址
const drawPicPointByLocationApi = async (x,y,url) => {
    const _this = this;
    const [Point,SpatialReference,graphic,PictureMarkerSymbol] = await esriLoader.loadModules([
        "esri/geometry/Point",
        "esri/SpatialReference",
        "esri/graphic",
        "esri/symbols/PictureMarkerSymbol",
    ]);//加载所需的arcgis组件
}
