import React, { Component } from 'react';
import request from './../../utils/axios';
import { URL } from './../../config/end-points-url';
import { connect } from 'react-redux';
import './HistoryBet.css';
import { Tag, Table, Divider } from 'antd';

const columns = [
  {
    title: 'Time',
    dataIndex: 'bet_time',
    key: 'bet_time',
  },
  {
    title: 'Match ID',
    dataIndex: 'match.match_id',
  },
  {
    title: 'Bet Score',
    dataIndex: 'bet_content',
    key: 'bet_content',
  },
  {
    title: 'Bet Amount',
    dataIndex: 'bet_amount',
    key: 'amount',
  },
  {
    title: 'Bet status',
    dataIndex: 'bet_status',
    key: 'bet_status',
    render: (bet_status) => {
      let color = 'geekblue';
      if (bet_status === 'LOSE') {
        color = 'volcano';
      }
      return (
        <span>
          <Tag color={color} key={bet_status}>
            {bet_status.toUpperCase()}
          </Tag>
        </span>
      );
    },
  },
  {
    title: 'Bet Gained',
    dataIndex: 'bet_gain',
    key: 'bet_gain',
  },
  {
    title: 'Bet Type',
    dataIndex: 'bet_type',
    key: 'bet_type',
  },
];

//const dataSource= [this.state.bet_history];
class HistoryBet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bet_history: [],
      visible: false,
    };
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

  componentDidMount = async () => {
    const response = await request.server.get(
      URL.GET_USER_BET_HISTORY(this.props.user.user.user_id)
    );
    this.setState({
      bet_history: response.data.bets,
    });
  };

  render() {
    return (
      <div className="history-bet">
        <h1 style={{ textAlign: 'center', color: 'white' }}>HISTORY BET</h1>
        <Table columns={columns} dataSource={this.state.bet_history} pagination={false} />
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
)(HistoryBet);
