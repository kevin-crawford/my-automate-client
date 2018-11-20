import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Garage.css';

import AddNewVehicle from '../Vehicles/AddNewVehicle'
import Vehicle from '../Vehicles/Vehicle'

export class Garage extends React.Component {
	render(){
		const vehicles = this.props.vehicles.map( (vehicle, index) => (
			<div className="vehicle-list" index={index} key={index}>
				<Vehicle  {...vehicle} />
				<div className="vehicle-view">
					<Link to={`/vehicle/${vehicle.vehicleID}`}> 
						<h4> View </h4>
					</Link>
				</div>
			</div>
		));
	
		return(
			<div className="garage wrapper">
				<h1> Vehicles </h1>
			<div className="NewVehicleBtn">
				<AddNewVehicle />
			</div>
				<div className="vehicles-list wrapper">
					{vehicles}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	vehicles: state.automate.vehicles
})

export default connect(mapStateToProps)(Garage);