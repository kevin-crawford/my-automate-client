import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Garage.css';

import AddNewVehicle from '../Vehicles/AddNewVehicle'
import Vehicle from '../Vehicles/Vehicle'

class Garage extends React.Component {
	render(){
		const vehiclesList = this.props.vehicles.map( (vehicle, index) => (
			<div className="vehicle-list" index={index} key={index}>

				<h1>Vehicle {index + 1}</h1>
					<ul>
						<li>
							Brand: {vehicle.brand}
						</li>
						<li>
							Model: {vehicle.model}
						</li>
						<li>
							Year: {vehicle.year}
						</li>
						<li>
							Miles: {vehicle.miles}
						</li>
						<li>
							Added On: {vehicle.addedOn}
						</li>
					</ul>
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
					{vehiclesList}
				</div>

			</div>
		)
	}
}

const mapStateToProps = state => ({
	vehicles: state.automate.vehicles
})

export default connect(mapStateToProps)(Garage);