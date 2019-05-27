import React, { Component } from 'react';
import { Input, Button, Row, Icon } from 'antd';
import '../recharge.css';
import { URL } from './../../../config/end-points-url';
import request from './../../../utils/axios';
import { connect } from 'react-redux';

class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      change: true,
      card_code: '',
      password: '',
      message: '',
    };
  }

  onCardChange = (event) => {
    this.setState({
      card_code: event.target.value,
      change: true,
    });
  };

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value,
      change: true,
    });
  };

  onConfirm = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await request.server.post(
        URL.DEPOSIT_BALANCE(this.props.user.user.user_id),
        {
          code: this.state.card_code,
          password: this.state.password,
        }
      );
      this.setState({ isLoading: false, change: false, message: 'Success' });
    } catch (error) {
      this.setState({
        isLoading: false,
        change: false,
        message: error.response.data.message,
      });
    }
  };

  render() {
    return (
      <div className="deposit">
        <h1> DEPOSIT </h1>
        <Row style={{ display: 'flex' }}>
          <p>Card Code</p>
          <Input
            placeholder="ABCX10ASNDF"
            className="input-money"
            onChange={(event) => this.onCardChange(event)}
          />
        </Row>

        <Row style={{ display: 'flex' }}>
          <p>Password</p>
          <Input
            type="password"
            placeholder="*************"
            className="input-money"
            onChange={(event) => this.onPasswordChange(event)}
          />
        </Row>

        <Row style={{ display: 'flex' }}>
          <p>{''}</p>
          <Button className="button-comfirm-money" onClick={this.onConfirm}>
            {this.state.isLoading && <Icon type="loading" />}Confirm
          </Button>
        </Row>

        <Row style={{ display: 'flex' }}>
          <p>{''}</p>
          <div style={{ marginTop: '20px', fontSize: '20px' }}>
            {' '}
            {!this.state.change && this.state.message}
          </div>
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
)(Deposit);
