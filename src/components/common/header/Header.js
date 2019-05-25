import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'antd';
import './header.css';
import { connect } from 'react-redux';
import { login } from './../../../actions/login';
import RightHeader from './RightHeader';
import ModalLogin from './../login/ModalLogin';
const bgBlur = require('../../../assets/images/background-blur.png');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loading = nextProps.user.loading;
    return {
      ...prevState,
      confirmLoading: loading,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = async (user) => {
    await this.props.login(user);
    if (this.props.user.error == null) this.hideModal();
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log('RENDER');
    const { visible, confirmLoading } = this.state;
    return (
      <div>
        <Row className="header">
          <Col span={6}>
            <div className="logo" />
          </Col>
          <Col span={12} />
          <Col span={6}>
            <RightHeader showModal={this.showModal} user={this.props.user.user} />
          </Col>
        </Row>

        <Modal
          title={null}
          visible={visible}
          closable={false}
          onCancel={this.handleCancel}
          footer={false}
          centered
          width="70%"
          maskStyle={{
            backgroundImage: 'url(' + bgBlur + ')',
            backgroundSize: 'cover',
            backgroundPositionY: 'bottom',
          }}
        >
          <ModalLogin
            error={this.props.user.error}
            loading={this.state.confirmLoading}
            handleOk={this.handleOk}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
