/**
 * 购物车
 */
import React,{ PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './ShopCar.less';

class ShopCar extends PureComponent {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 跳转详情页
  goDetail() {
    //
  }

  render(){
    return (
      <div>
        {/*顶部导航栏*/}
        <NavBar mode="light">购物车</NavBar>
        <p onClick={this.goDetail.bind(this)}>详情</p>
      </div>
    )
  }
}

export default ShopCar;
