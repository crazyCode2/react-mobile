/**
 * 我的
 */
import React,{ PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Button from '@material-ui/core/Button';

class Me extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
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
        <p>我的</p>
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
    )
  }
}

export default Me;
