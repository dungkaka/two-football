import React, { Component } from 'react';
import { Menu, Affix } from 'antd';
import './navigation.css';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Affix offsetTop={0}>
                    <Menu
                        mode="horizontal"
                        className="navigation-menu"
                    >

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

                        <Menu.Item key="about_us">
                            <NavLink className="nav-item" to="/aboutus">
                                <span className="nav-link">ABOUT US</span>
                            </NavLink>
                        </Menu.Item>

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

export default Navigation;