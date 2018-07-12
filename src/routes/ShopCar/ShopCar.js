/**
 * 购物车
 */
import React,{ PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
// 引入百度地图组件
import BMap from '../../components/BMap';

class ShopCar extends PureComponent {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 跳转详情页
  goDetail() {
    this.props.history.push({
      pathname:'/shopCarDetail',
      params:{
        name:'jack'
      }
    });
  }

  render(){
    return (
      <div>
        {/*顶部导航栏*/}
        <NavBar mode="light">购物车</NavBar>
        {/*百度地图*/}
        <BMap />
      </div>
    )
  }
}

export default ShopCar;
