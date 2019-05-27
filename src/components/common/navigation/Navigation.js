import React, { Component } from 'react';
import { Menu, Affix } from 'antd';
import './navigation.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Affix offsetTop={0}>
          <Menu mode="horizontal" className="navigation-menu">
            <Menu.Item key="home">
              <NavLink className="nav-item" to="/home">
                <span className="nav-link">HOME</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="match">
              <NavLink className="nav-item" to="/match">
                <span className="nav-link">MATCH</span>
              </NavLink>
            </Menu.Item>

            {this.props.user.user && (
              <Menu.Item key="history">
                <NavLink className="nav-item" to="/history">
                  <span className="nav-link">HISTORY BET</span>
                </NavLink>
              </Menu.Item>
            )}

            {this.props.user.user && (
              <Menu.Item key="recharge">
                <NavLink className="nav-item" to="/recharge">
                  <span className="nav-link">RECHARGE</span>
                </NavLink>
              </Menu.Item>
            )}

            <Menu.Item key="contact">
              <NavLink className="nav-item" to="/contact">
                <span className="nav-link">CONTACT</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Affix>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
