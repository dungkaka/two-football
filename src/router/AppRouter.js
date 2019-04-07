import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './../views/home/Home';
import Match from './../views/match/Match';
import AboutUs from './../views/about_us/AboutUs';
import Contact from './../views/contact/Contact';



class AppRouter extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/match" component={Match} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}

export default AppRouter;