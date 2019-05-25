import React, { Component } from 'react';
import request from './../../utils/axios';
import { URL } from './../../config/end-points-url';
import { connect } from 'react-redux';

class HistoryBet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bet_history: [],
    };
  }

  componentDidMount = async () => {
    const response = await request.server.get(
      URL.GET_USER_BET_HISTORY(this.props.user.user.user_id)
    );
    this.setState({
      bet_history: response.data.bets,
    });
  };

  render() {
    return <div>{JSON.stringify(this.state.bet_history, null, '\t')}</div>;
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
