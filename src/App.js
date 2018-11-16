import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import Navigation from './components/pageviews/Navigation';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
      </Router>
    );
  }
}

export default App;
