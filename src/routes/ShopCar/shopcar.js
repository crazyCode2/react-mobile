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
  
  render(){
    return (
      <div>
        <NavBar
          rightContent={[
            <Icon key="0" type="search" />
          ]}
        >购物车</NavBar>
        <p>购物车</p>
      </div>
    )
  }
}

export default ShopCar;