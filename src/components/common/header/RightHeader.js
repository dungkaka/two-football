import React, { Component } from 'react';
import { Button, Drawer } from 'antd';
import Profile from '../../profile/Profile';

class RightHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div style={{ margin: 'auto' }}>
        {this.props.user === null && (
          <Button onClick={this.props.showModal}> LOGIN </Button>
        )}
        {this.props.user !== null && (
          <div className="user-header">
            <div onClick={() => this.showDrawer()}>
              <img
                style={{ height: '1.6rem', marginRight: '10px' }}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                className="rounded-circle"
                alt="User"
              />{' '}
              {this.props.user.username}{' '}
            </div>

            <span style={{ margin: '0px 10px' }}> | </span>
            <a
              href="/home"
              onClick={() => {
                localStorage.clear();
              }}
            >
              <div style={{ marginTop: '-1px', color: 'rgb(212, 212, 212)' }}>
                Log out
              </div>
            </a>
            <Drawer
              width={'40%'}
              title="   USER INFORMATION"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <Profile />
            </Drawer>
          </div>
        )}
      </div>
    );
  }
}

export default RightHeader;
