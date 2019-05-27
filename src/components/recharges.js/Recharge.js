import React, { Component } from 'react';
import { Row, Col, Button, InputNumber } from 'antd';
import './recharge.css';
import RechargeRouter from '../../router/RechargeRouter';
import { Link } from 'react-router-dom';

class Recharge extends Component {
  render() {
    return (
      <div className="recharge">
        <Row>
          <Col span={6}>
            <Link to={`${this.props.match.url}/deposit`}>
              <Button className="button-recharge">Deposit</Button>
            </Link>
            <Link to={`${this.props.match.url}/withdraw`}>
              <Button className="button-recharge">Withdraw</Button>
            </Link>
            <Link to={`${this.props.match.url}/millionaires`}>
              <Button className="button-recharge">Millionaires</Button>
            </Link>
          </Col>
          <Col span={18}>
            <div className="content-recharge">
              <RechargeRouter match={this.props.match} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Recharge;
