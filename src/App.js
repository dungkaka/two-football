import React, { Component } from 'react';
import Footer from './views/footer/Footer';
import Header from './views/header/Header';
import AppRouter from './router/AppRouter';
import Navigation from './views/navigation/Navigation';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header></Header>
                    <Navigation></Navigation>

                    <AppRouter></AppRouter>

                    <Footer></Footer>
                </div>
            </Router >
        );
    }
}

export default App;
