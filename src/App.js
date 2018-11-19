import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/pageviews/LandingPage';
import Navigation from './components/pageviews/Navigation';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <main>
        <Route exact path="/" component={LandingPage} />
		    <Route exact path="/login" component={Login} />
	  	  <Route exact path="/signup" component={SignUp} />
		    <Route exact path="/garage" component={Garage} />
        </main>
      </Router>
    );
  }
}

export default App;
