import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/home_page/Home';
import Match from '../components/match/match_page/Match';
import AboutUs from '../components/about_us/about_us_page/AboutUs';
import Contact from '../components/contact/contact_page/Contact';
import MatchBet from '../components/match/match_bet/MatchBet';
import HistoryBet from './../components/history_bet/HistoryBet';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/match" exact component={Match} />
        <Route path="/match/:matchId" component={MatchBet} />
        <Route path="/history" component={HistoryBet} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default AppRouter;
