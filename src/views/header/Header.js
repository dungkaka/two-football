import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './header.css';

class Header extends Component {
    render() {
        return (
            
            <div>                
                <Row className="header">
                    <Col span={6}>
                        <div className="logo"></div>
                    </Col>
                    <Col span={12}></Col>
                    <Col span={6}>Login</Col>
                </Row>
            </div>
        );
    }
}

export default Header;