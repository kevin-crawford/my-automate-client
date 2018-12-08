import React from 'react';
import { connect } from 'react-redux';

import requiresLogin from './requires-login';
import Spinner from 'react-spinkit';

import { fetchVehicles } from '../../actions/vehicle-actions';
import { Link } from 'react-router-dom';
import './Garage.css';
import Vehicle from '../Vehicles/Vehicle';
import AddNewVehicle from '../Vehicles/AddNewVehicle'
// import Vehicle from '../Vehicles/Vehicle'

class Garage extends React.Component {
	
	componentDidMount() {
		const user = this.props.user;
		console.log('username', user);
		this.props.dispatch(fetchVehicles(user))
		.then(() => console.log('vehicles', this.props.vehicles))
	}

	render() {

		let error;

		if(this.props.error) {
			error = (
				<div className="vehicle-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		};

		if(!this.props.vehicles){
			return(
					<div className="vehicleList section" role="region">
						{error}
						<div>
							<ul><Spinner spinnername="circle" fadeIn="none"/></ul>
						</div>
					</div>
			)
		} else if(!this.props.vehicles.length) {
				return(
					<>
					{error}
					<div className="no-vehicles">
						<p> No Vehicles Found </p>
					</div>
					<div className="NewVehicleBtn">
					<AddNewVehicle />
				</div>
				</>
				)
		} else {
	
			const vehicles = this.props.vehicles;
			const vehiclesList = vehicles.map( (vehicle, index) => { 
			return (
					<Vehicle {...vehicle} history={this.props.history} index={index} key={index}/>
					)	
				}
			
		);
	
		return(
			<div className="garage wrapper">
				<h1>Vehicles</h1>
					<div className="NewVehicleBtn">
						<AddNewVehicle />
					</div>
					<div className="vehicles-list wrapper">
						{vehiclesList}
					</div>
			</div>
			)
		}
	}
}

const mapStateToProps = state => ({
	vehicles: state.vehicle.vehicles,
	error: state.vehicle.error,
	user: state.auth.currentUser
})

export default requiresLogin()(connect(mapStateToProps)(Garage));