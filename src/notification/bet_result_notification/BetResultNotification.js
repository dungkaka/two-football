import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notification, Icon } from 'antd';

notification.config({
  placement: 'bottomLeft',
  duration: 5,
});

class BetResultNotification extends Component {
  convertResult = (result) => {
    const bet_status = result.bet_status;
    const bet_gain = result.bet_gain;
    const home = result.match.match_hometeam_name;
    const away = result.match.match_awayteam_name;
    return `    You've just ${bet_status} in match ${home} - ${away}: ${bet_gain}`;
  };

  showNotification = (data) => {
    notification.open({
      message: 'NOTIFICATION BET',
      description: this.convertResult(data),
      icon: <Icon type="warning" style={{ color: '#108ee9', fontSize: '20px' }} />,
      style: { color: 'red', marginLeft: '10px' },
    });
  };

  render() {
    return (
      <div>
        {this.props.notification.showNotification &&
          this.showNotification(this.props.notification.data)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notification: state.notification,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BetResultNotification);
