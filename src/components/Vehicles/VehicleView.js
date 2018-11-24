import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';


import './VehicleView.css';

import Vehicle from '../Vehicles/Vehicle';

class VehicleView extends React.Component{
	render(){

			const maintenanceList = this.props.maintenance.map((maintenance, index) =>
			<div index={index} key={index}>
				<ul className="maintenance-list">
					<li>
						<h5>Item {index + 1}</h5>
						<p>{maintenance.maintenanceID}</p>
						<p>{maintenance.kind}</p>
						<p>{maintenance.date}</p>
					</li>
				</ul>

				<div className="view-maintenance btn">
					<Link to={`/vehicle/${this.props.currentVehicle}/maintenance/${maintenance.maintenanceID}`}>
						<h3> View </h3>
					</Link>
				</div>

			</div>

		)

		return (
			<div>

				<h1> Vehicle Information </h1>
					<Vehicle {...this.props.vehicle}/>

				<h2> Maintenance Items </h2>
					{maintenanceList}

			</div>
		)

	}
}

const mapStateToProps = ( state, props ) => {
	const currentVehicle = props.match.params.vehicleID;

	const vehicle = state.automate.vehicles.find( vehicle => vehicle.vehicleID === currentVehicle)

	return Object.assign({}, vehicle, {
		currentVehicle
	});

}

export default withRouter(connect(mapStateToProps)(VehicleView))