/**
 * 我的详情
 */
import React,{ PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class Me extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 返回上一页
  goBack(){
    window.history.go(-1);
  }

  render(){
    return(
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.goBack()}
        >详情</NavBar>
        <p>我的详情页</p>
      </div>
    )
  }
}

export default Me;
