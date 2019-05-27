import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Row, Col, Avatar } from 'antd';
import './Profile.css';
const dung = require('../../assets/images/dung.jpg');

class Profile extends Component {
  render() {
    const { user } = this.props.user;
    return (
      <div className="profile">
        <Row>
          <Col span={24} align="center">
            {' '}
            <Avatar size={128} icon="user" src={dung} />
          </Col>
        </Row>

        <Row>
          <Col span={24} align="center">
            <b>
              <Avatar
                shape="square"
                size="small"
                icon="user"
                style={{ marginRight: '10px', marginTop: '-6px' }}
              />
              {user.username}
            </b>
          </Col>
        </Row>
        <Row>
          <Col span={24} align="center">
            ID:{user.user_id}
          </Col>
        </Row>

        <br />
        <Row>
          <Col span={6} className="title">
            <b>Name: </b>
          </Col>
          <Col span={12}>{user.name} </Col>
        </Row>
        <Row>
          <Col span={6} className="title">
            <b>Email: </b>
          </Col>
          <Col span={12}>{user.email} </Col>
        </Row>
        <Row>
          <Col span={6} className="title">
            <b>Phone: </b>
          </Col>
          <Col span={12}>{user.phone} </Col>
        </Row>
        <Row>
          <Col span={24} className="title">
            <b className="balance">Current balance: </b>
          </Col>
        </Row>
        <Row>
          {' '}
          <Col span={24} align="center" className="balance">
            {user.balance} <Icon type="dollar" />{' '}
          </Col>
        </Row>
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
)(Profile);
