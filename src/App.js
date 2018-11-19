import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/pageviews/LandingPage';
import Navigation from './components/pageviews/Navigation';
import Login from './components/pageviews/Login';
import SignUp from './components/pageviews/SignUp';
import Garage from './components/pageviews/Garage';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="router-wrapper">
          <Navigation />
          <main role="main">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/garage" component={Garage} />
          </main>
        </div>
      </Router>
    );
  }
}

