import React, { Component } from 'react';
import BetFirstHalf from './BetFirstHalf';
import BetFullTime from './BetFullTime';
import BetYellowCard from './BetYellowCard';
import { getBetStatus, updateBetStatus } from '../../../actions/bet_status';
import { connect } from 'react-redux';
import './match-bet.css';

class BetBoard extends Component {
  componentDidMount() {
    this.props.getBetStatus(this.props.match_id);
  }

  render() {
    const {
      home,
      away,
      match_id,
      match_status,
      bet_status,
      updateBetStatus,
    } = this.props;
    const betFirstHalf = bet_status.byId['1'];
    const betFullTime = bet_status.byId['2'];
    const betYellowCard = bet_status.byId['3'];
    return (
      <div className="bet-board">
        <BetFirstHalf
          home={home}
          away={away}
          betFirstHalf={betFirstHalf}
          loadingModal={bet_status.loading}
          errorModal={bet_status.error}
          updateBetStatus={updateBetStatus}
          match_status={match_status}
          match_id={match_id}
        />
        <BetFullTime
          home={home}
          away={away}
          betFullTime={betFullTime}
          loadingModal={bet_status.loading}
          errorModal={bet_status.error}
          updateBetStatus={updateBetStatus}
          match_status={match_status}
          match_id={match_id}
        />
        <BetYellowCard
          loadingModal={bet_status.loading}
          betYellowCard={betYellowCard}
          updateBetStatus={updateBetStatus}
          match_status={match_status}
          match_id={match_id}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bet_status: state.bet_status,
});

const mapDispatchToProps = {
  getBetStatus,
  updateBetStatus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BetBoard);
