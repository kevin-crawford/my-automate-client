import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMaintenance, fetchSingleVehicle } from '../../actions/vehicle-actions';
import { editMaintenance } from '../../actions/vehicle-actions';


class SingleMaintenanceItem extends React.Component {

	onDeleteClick(e) {
		const maintenanceId = this.props.id;
		const vehicleId = this.props.vehicle;
		window.confirm("Are you sure you want to delete item?")
		this.props.dispatch(deleteMaintenance(maintenanceId, vehicleId))
		.then(() => this.props.dispatch(fetchSingleVehicle(vehicleId)));
	}  

	render() {
	
	return (
		<div className="maintenance wrapper">
		<h3>{this.props.kind} {this.props.created} </h3>
			<li>Kind:{this.props.kind}</li>
			<li>Current Miles: {this.props.currentMiles}</li>
			<li>Note: {this.props.note}</li>
			<li>Reminder: {this.props.reminder.toString()}</li>
			<li>
						<Link to={{pathname: "/EditMaintenance", query: {id: this.props.id}}}>
							<button className="edit-maintenance button">
								Edit
							</button>
						</Link>
					</li>
			<li>
				<button className="deleteButton" onClick={e => this.onDeleteClick(e)}> 
					Delete
				</button>
			</li>
		</div>
	)
	}
}

export default connect()(SingleMaintenanceItem);