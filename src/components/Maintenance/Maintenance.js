import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


import './Maintenance.css'

class Maintenance extends React.Component {
	render() {

		return (
			<Fragment>
				<ul>
					<li>
						Kind: {this.props.kind}
					</li>
					<li>
						Date Added: {this.props.date}
					</li>
					<li>
						Current Miles: {this.props.currentMiles}
					</li>
					<li>
						Note: {this.props.note}
					</li>
					<li>
						Maintenance ID: {this.props.maintenanceID}
					</li>
				</ul>
			</Fragment>
		)
	}
}

const mapStateToProps = ( state, props ) => {

	const currentVehicle = props.match.params.vehicleID;
	const currentMaintenance = props.match.params.maintenanceID;

	const vehicle = state.automate.vehicles.find( vehicle => vehicle.vehicleID === currentVehicle );
	const item = vehicle.maintenance.find( item => item.maintenanceID === currentMaintenance)

	return Object.assign({}, item, {
		currentMaintenance
	})

}

export default withRouter(connect(mapStateToProps)(Maintenance));