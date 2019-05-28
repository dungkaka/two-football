import React, { Component } from 'react';
import AppRouter from './router/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/common/header/Header';
import Navigation from './components/common/navigation/Navigation';
import Footer from './components/common/footer/Footer';
import BetResultNotification from './notification/bet_result_notification/BetResultNotification';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Navigation />
          <AppRouter />
          <Footer />
          <BetResultNotification />
        </div>
      </Router>
    );
  }
}

export default App;
