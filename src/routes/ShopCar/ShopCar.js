/**
 * 购物车
 */
import React,{ PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Button from '@material-ui/core/Button';
import './ShopCar.less';

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
        <Button onClick={this.goDetail.bind(this)} variant="raised" color="primary">
          跳转详情页
        </Button>
      </div>
    )
  }
}

export default ShopCar;
