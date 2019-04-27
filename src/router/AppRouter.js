import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../views/home/home_page/Home';
import Match from '../views/match/match_page/Match';
import AboutUs from '../views/about_us/about_us_page/AboutUs';
import Contact from '../views/contact/contact_page/Contact';
import MatchBet from './../views/match/match_bet/MatchBet';
import BetCard from './../views/match/match_bet/BetCard';



class AppRouter extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/match" exact component={Match} />
                <Route path="/match/:matchId" component={MatchBet} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}

export default AppRouter;