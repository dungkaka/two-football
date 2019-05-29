import React, { Component } from 'react';
import './match-bet.css';
import { Button, InputNumber, Row, Col, Modal } from 'antd';

class BetFullTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home_score: '0',
      away_score: '0',
      bet_amount: 100,
      visible: false,
      pre_visible: false,
      confirmLoading: false,
      disableBet: false,
      bet_error: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps', nextProps);
    console.log('prevState', prevState);

    const betFullTime = nextProps.betFullTime;
    if (betFullTime) {
      const bet_scores = betFullTime.bet_content.split('-');
      const home_score = bet_scores[0];
      const away_score = bet_scores[1];
      const bet_amount = betFullTime.bet_amount;
      return {
        ...prevState,
        home_score: home_score,
        away_score: away_score,
        bet_amount: bet_amount,
        disableBet: true,
      };
    } else {
      const loading = nextProps.loadingModal;
      const errorModal = nextProps.errorModal;
      return {
        ...prevState,
        confirmLoading: loading,
        bet_error: errorModal,
        // disableBet:
        //   nextProps.match_status === '' && nextProps.match_status === 'FT' ? false : true,
      };
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
      pre_visible: false,
    });
  };

  handleOk = async () => {
    await this.props.updateBetStatus(
      {
        bet_type: 2,
        bet_amount: this.state.bet_amount,
        bet_content: `${this.state.home_score}-${this.state.away_score}`,
      },
      this.props.match_id,
      this.props.user_id
    );

    if (this.state.bet_error == null) {
      this.hideModal();
    } else {
      this.setState({
        pre_visible: true,
      });
    }
  };

  hideModal = () => {
    this.setState({
      visible: false,
      pre_visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  onHomeChange = (event) => {
    this.setState({
      home_score: event,
    });
  };

  onAwayChange = (event) => {
    this.setState({
      away_score: event,
    });
  };

  onBetMountChange = (event) => {
    this.setState({
      bet_amount: event,
    });
  };

  handleStyleDoneBet = () => {
    if (this.props.betFullTime) {
      return {
        backgroundColor: '#ff6e3e',
        color: 'white',
      };
    }
  };

  render() {
    const { home, away, betFullTime } = this.props;
    const { home_score, away_score, bet_amount } = this.state;
    const { visible, confirmLoading, disableBet } = this.state;

    return (
      <div className="bet-card">
        <Row className="bet-fix-flex">
          <Col span={6} className="bet-card-title">
            FULL TIME
          </Col>

          <Col span={14} className="bet-card-content">
            <Row style={{ display: 'flex' }}>
              <Col span={12} className="bet-input-content">
                <span style={{ color: '#f13e47' }}> {`${home}`} </span>
                <InputNumber
                  className="bet-input"
                  disabled={disableBet}
                  min={0}
                  max={10}
                  value={home_score}
                  onChange={(event) => this.onHomeChange(event)}
                />
                <br />
                <span style={{ color: 'rgb(57, 167, 219)' }}> {`${away}`} </span>
                <InputNumber
                  className="bet-input"
                  disabled={disableBet}
                  min={0}
                  max={10}
                  value={away_score}
                  onChange={(event) => this.onAwayChange(event)}
                />
              </Col>
              <Col span={2} style={{ borderRight: '1px solid #d75f63', margin: '5px' }} />
              <Col span={10} style={{ textAlign: 'center', margin: 'auto' }}>
                <span> Bet Amount </span>
                <br />
                <InputNumber
                  className="bet-input"
                  min={100}
                  max={10000}
                  step={100}
                  value={bet_amount}
                  onChange={(event) => this.onBetMountChange(event)}
                  disabled={disableBet}
                />
              </Col>
            </Row>
          </Col>

          <Col className="bet-fix-flex" span={4}>
            <Button
              className="bet-card-action"
              onClick={() => this.showModal()}
              disabled={disableBet}
              style={this.handleStyleDoneBet()}
            >
              {betFullTime ? 'DONE' : 'BET'}
            </Button>
          </Col>
        </Row>

        <Modal
          title={null}
          visible={visible}
          closable={false}
          onCancel={this.handleCancel}
          confirmLoading={confirmLoading}
          onOk={this.handleOk}
          centered
        >
          <div>
            <div style={{ margin: 'auto' }}>
              <p> Bet type: First Half</p>
              <p> Bet Amount: {this.state.bet_amount} </p>
              <p style={{ fontWeight: 'bolder', color: '#f13e47' }}>
                {' '}
                {home}: {this.state.home_score}
              </p>
              <p style={{ fontWeight: 'bolder', color: 'rgb(57, 167, 219)' }}>
                {' '}
                {away}: {this.state.away_score}{' '}
              </p>

              {this.state.bet_error && this.state.pre_visible && (
                <p> ${this.state.bet_error.message} </p>
              )}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default BetFullTime;
