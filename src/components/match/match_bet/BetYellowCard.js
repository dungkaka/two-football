import React, { Component } from 'react';
import './match-bet.css';
import { Button, InputNumber, Row, Col, Modal } from 'antd';

const confirm = Modal.confirm;

class BetYellowCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yellow_card: '0',
      bet_amount: '100',
      visible: false,
      confirmLoading: false,
      disableBet: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps', nextProps);
    console.log('prevState', prevState);

    const betYellowCard = nextProps.betYellowCard;
    if (betYellowCard) {
      const yellow_card = betYellowCard.bet_content;
      const bet_amount = betYellowCard.bet_amount;
      return {
        ...prevState,
        bet_amount: bet_amount,
        yellow_card: yellow_card,
      };
    } else {
      const loading = nextProps.loadingModal;
      return {
        ...prevState,
        confirmLoading: loading,
        // disableBet:
        //   nextProps.match_status === '' && nextProps.match_status === 'FT' ? false : true,
      };
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = async () => {
    await this.props.updateBetStatus({
      bet_type: 3,
      bet_amount: this.state.bet_amount,
      bet_content: `${this.state.yellow_card}`,
    });
    this.hideModal();
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

  onYellowChange = (event) => {
    this.setState({
      yellow_card: event,
    });
  };

  onBetMountChange = (event) => {
    this.setState({
      bet_amount: event,
    });
  };

  handleStyleDoneBet = () => {
    if (this.props.betYellowCard) {
      return {
        backgroundColor: '#ff6e3e',
        color: 'white',
      };
    }
  };

  render() {
    const { betYellowCard } = this.props;
    const { bet_amount } = this.state;
    const { visible, confirmLoading, disableBet } = this.state;

    return (
      <div className="bet-card">
        <Row className="bet-fix-flex">
          <Col span={6} className="bet-card-title">
            YELLOW CARD
          </Col>

          <Col span={14} className="bet-card-content">
            <Row style={{ display: 'flex' }}>
              <Col span={12} style={{ textAlign: 'center', margin: 'auto' }}>
                <span> Yellow Card </span>
                <br />
                <InputNumber
                  className="bet-input"
                  min={0}
                  max={100}
                  value={this.state.yellow_card}
                  onChange={(event) => this.onYellowChange(event)}
                  disabled={disableBet}
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
              {betYellowCard ? 'DONE' : 'BET'}
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
            <p> ARE YOU SURE YOUR BET </p>
            <p> content_modal</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default BetYellowCard;
