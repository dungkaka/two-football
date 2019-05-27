import React, { Component } from 'react';
import { Button, Drawer } from 'antd';
import User from '../../profile/User';
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
      <div>
        {this.props.user === null && (
          <div>
            <Button onClick={this.props.showModal}> LOGIN </Button>
          </div>
        )}
        {this.props.user !== null && (
          <div>
            <a
              to="/profile"
              style={{
                borderRight: '1.5px solid #b5c7eb',
                paddingRight: '5px',
              }}
            >
              <span>
                <img
                  style={{ height: '1.6rem', marginRight: '10px' }}
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  className="rounded-circle"
                  alt="User"
                />
              </span>
              <span onClick={() => this.showDrawer()}> {this.props.user.username} </span>
            </a>
            <a
              href="/home"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Log out
            </a>
            <Drawer
              width={"30%"}
              title="User Information"
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
