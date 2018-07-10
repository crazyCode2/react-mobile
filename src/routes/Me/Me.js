/**
 * 我的
 */
import React,{ PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class Me extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 跳转详情页
  goDetail() {
    this.props.history.push({
      pathname:'/meDetail',
      params:{
        name:'jack'
      }
    });
  }

  render(){
    return(
      <div>
        <NavBar
          mode="light"
          rightContent={[
            <Icon key="0" type="search" />
          ]}
        >我的</NavBar>
      <p onClick={() => this.goDetail()}>跳转我的详情页</p>
      </div>
    )
  }
}

export default Me;
