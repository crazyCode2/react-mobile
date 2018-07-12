/**
 * 百度地图 组件
 */
import React,{ PureComponent } from 'react';
// 获取屏幕宽高
const width = document.documentElement.clientWidth + 'px';
const height = document.documentElement.clientHeight - 95 + 'px';

class BMap extends PureComponent {
  // 构造函数
  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  // 生命周期
  componentDidMount () {
    var BMap = window.BMap
    var map = new BMap.Map("allmap"); // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  }

  render(){
    return (
      <div id='allmap' style={{width:width,height:height}}></div>
    )
  }
}

export default BMap;
