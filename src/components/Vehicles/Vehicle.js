import  React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Maintenance  from '../Maintenance/Maintenance';

import './Vehicle.css'

export class Vehicle extends React.Component {
	render() {
		const maintenanceList = this.props.maintenance.map((maintenance, index) => 
		<div className="maintenance-list" index={index} key={index}>
			<Maintenance {...maintenance} />
			<div className="view-maintenance">
				<Link to={`/vehicle/${this.props.currentVehicle}/maintenance/${this.props.maintenanceID}`}>
					<h4> View </h4>
				</Link>
			</div>
		</div>
		)
		return(
			<div className="vehicle wrapper">
			<h3>Vehicle Information</h3>
				<ul className="vehicle-information">
					<li className="vehicle-brand">
						Brand: {this.props.brand}
					</li>
					<li className="vehicle-model">
						Model: {this.props.model}
					</li>
					<li className="vehicle-year">
						Year: {this.props.year}
					</li>
					<li className="vehicle-miles">
						Miles: {this.props.miles}
					</li>
					<li className="vehicle-addedOn">
						Added On: {this.props.addedOn}
					</li>
				</ul>
					{this.props.currentVehicle !== undefined && maintenanceList}
		</div>
		)
	}
}


const mapStateToProps = (state, props) => {
	const currentVehicle = props.match.params.vehicleID;
	console.log(currentVehicle)
	const vehicle = state.automate.vehicles.find( vehicle => vehicle.vehicleID === currentVehicle );
	console.log(vehicle);
	console.log(props.match.params)
	return Object.assign({}, vehicle, {
		currentVehicle
	})
}

export default withRouter(connect(mapStateToProps)(Vehicle));