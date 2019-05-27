import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/home_page/Home';
import Match from '../components/match/match_page/Match';
import Contact from '../components/contact/Contact';
import MatchBet from '../components/match/match_bet/MatchBet';
import HistoryBet from './../components/history_bet/HistoryBet';
import Recharge from '../components/recharges.js/Recharge';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/match" exact component={Match} />
        <Route path="/match/:matchId" component={MatchBet} />
        <Route path="/history" component={HistoryBet} />
        <Route path="/recharge" component={Recharge} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default AppRouter;
