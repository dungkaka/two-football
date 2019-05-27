import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Deposit from './../components/recharges.js/deposit/Deposit';
import Withdraw from './../components/recharges.js/withdraw/Withdraw';
import Millionaires from '../components/recharges.js/millionaires/Millionaires';

class RechargeRouter extends Component {
  render() {
    return (
      <div>
        <Route exact path={`${this.props.match.path}/`} component={Deposit} />
        <Route path={`${this.props.match.path}/deposit`} component={Deposit} />
        <Route path={`${this.props.match.path}/withdraw`} component={Withdraw} />
        <Route path={`${this.props.match.path}/millionaires`} component={Millionaires} />
      </div>
    );
  }
}

export default RechargeRouter;
