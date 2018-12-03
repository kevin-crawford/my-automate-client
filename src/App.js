import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';

import LandingPage from './components/pageviews/LandingPage';
import Navigation from './components/pageviews/Navigation';
import Login from './components/pageviews/Login';
import SignUp from './components/pageviews/SignUp';
import Garage from './components/pageviews/Garage';
import AddNewVehicleForm from './components/Vehicles/AddNewVehicleForm';  
// SINGLE VEHICLE IMPORT
import Vehicle  from './components/Vehicles/Vehicle';
import Maintenance from './components/Maintenance/Maintenance';
import VehicleView from './components/Vehicles/VehicleView';

import './App.css';

import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {

  componentDidUpdate(prevProps) {
    if(!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount(){
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One Hour
    );
  }

  stopPeriodicRefresh() {
    if(!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

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
            <Route exact path="/vehicle/:vehicleID" component={VehicleView} />
            <Route exact path="/vehicle/:vehicleID/maintenance/:maintenanceID" component={Maintenance}/>
            <Route exact path="/AddNewVehicleForm" component={AddNewVehicleForm} />
          </main>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));