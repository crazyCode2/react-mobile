/**
 * 购物车详情
 */
import React,{ PureComponent } from 'react';
import { NavBar, Icon, Button, List } from 'antd-mobile';
import Header from '../../components/Header';
import './ShopCarDetail.less';

const Item = List.Item;

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

  // 跳转历史页
  handleHistory = () => {
    alert(1);
  }

  render(){
    return (
      <div>
        {/*顶部导航栏*/}
        <Header title={'已选定人员'} />
        {/*人员列表*/}
        <List className="my-list">
          <Item arrow="horizontal" extra={'extra content'}>Title</Item>
          <Item arrow="horizontal" extra={'extra content'}>Title</Item>
          <Item arrow="horizontal" extra={'extra content'}>Title</Item>
          <Item arrow="horizontal" extra={'extra content'}>Title</Item>
          <Item arrow="horizontal" extra={'extra content'}>Title</Item>
          <Item arrow="horizontal" extra={'extra content'}>Title</Item>
        </List>
      </div>
    )
  }
}

export default ShopCarDetail;
