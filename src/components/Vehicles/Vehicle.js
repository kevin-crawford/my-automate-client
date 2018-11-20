import  React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Maintenance  from '../Maintenance/Maintenance';


export class Vehicle extends React.Component {
	render() {
		const maintenanceList = this.props.maintenance.map((maintenance, index) => 
		<div className="maintenance-list" index={index} key={index}>
			<Maintenance {...maintenance} />
			<div className="view-maintenance">
				<Link to={`/vehicle/${this.props.currentVehicle}/${this.props.maintenanceID}`}>
					<h4> View </h4>
				</Link>
			</div>
		</div>
		)
		return(
			<Fragment>
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
					{maintenanceList}
			</Fragment>
		)
	}
}


const mapStateToProps = (state, props) => {
	const currentVehicle = props.match.params.vehicleID;
	const vehicle = state.automate.vehicles[currentVehicle];
	const maintenanceID = vehicle.maintenance.maintenanceID;
	console.log(props.match.params)
	return Object.assign({}, vehicle, {
		currentVehicle,
		maintenanceID
	})
}

export default withRouter(connect(mapStateToProps)(Vehicle));