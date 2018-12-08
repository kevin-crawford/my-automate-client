import React from 'react';
import {Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

// PAGE VIEWS
import LandingPage from './components/pageviews/LandingPage';
import Navigation from './components/pageviews/Navigation';
import Login from './components/pageviews/Login';
import SignUpPage from './components/pageviews/SignUpPage';
import Garage from './components/pageviews/Garage';

// FORM IMPORTS --
import AddNewVehicleForm from './components/Vehicles/AddNewVehicleForm'; 
import EditVehicleForm  from './components/Vehicles/EditVehicleForm'; 

// SINGLE VEHICLE IMPORT
import Maintenance from './components/Maintenance/Maintenance';

import './App.css';

// AUTH
import {refreshAuthToken} from './actions/auth';


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
        <div className="router-wrapper">
          <Navigation />
          <main role="main">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/garage" component={Garage} />
            <Route exact path="/vehicle/:vehicleId" component={Maintenance}/>
            <Route exact path="/AddNewVehicle" component={AddNewVehicleForm} />
            <Route exact path="/EditVehicle" component={EditVehicleForm} />
          </main>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));