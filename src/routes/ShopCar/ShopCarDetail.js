/**
 * 购物车详情
 */
import React,{ PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './ShopCarDetail.less';

class ShopCarDetail extends PureComponent {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 跳转上一页
  goBack(){
    window.history.go(-1);
  }

  render(){
    return (
      <div>
        {/*顶部导航栏*/}
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.goBack()}
        >详情页</NavBar>
        <p>详情页</p>
      </div>
    )
  }
}

export default ShopCarDetail;
