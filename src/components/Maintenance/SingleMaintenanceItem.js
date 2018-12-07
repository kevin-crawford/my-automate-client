import React from 'react';
import { connect } from 'react-redux';


class SingleMaintenanceItem extends React.Component {

	render() {
		console.log(this.props)
	
	return (
		<div className="maintenance wrapper">
		<h3>{this.props.kind} {this.props.created} </h3>
			<li>Kind:{this.props.kind}</li>
			<li>Current Miles: {this.props.currentMiles}</li>
			<li>Note: {this.props.note}</li>
			<li>Reminder: {this.props.reminder}</li>
			<li>
				<button className="viewButton" onClick={e => this.editSingleVehicle(e)}> 
					Edit
				</button>
			</li>
			<li>
				<button className="viewButton" onClick={e => this.onDeleteClick(e)}> 
					Delete
				</button>
			</li>
		</div>
	)
	}
}

export default connect()(SingleMaintenanceItem);