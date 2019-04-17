import React, { Component } from 'react';
import AppRouter from './router/AppRouter';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './global_component/header/Header';
import Navigation from './global_component/navigation/Navigation';
import Footer from './global_component/footer/Footer';

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
