import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMaintenance, fetchSingleVehicle } from '../../actions/vehicle-actions';

import './SingleMaintenanceItem.css'


class SingleMaintenanceItem extends React.Component {

	onDeleteClick(e) {
		const maintenanceId = this.props.id;
		const vehicleId = this.props.vehicle;
		window.confirm("Are you sure you want to delete item?")
		this.props.dispatch(deleteMaintenance(maintenanceId, vehicleId))
			.then(() => this.props.dispatch(fetchSingleVehicle(vehicleId)));
	}

	formatDate(){
		let maintenanceDate = new Date(this.props.created)

		let year = maintenanceDate.getFullYear();
		let day = maintenanceDate.getDay().toString();
		let month = maintenanceDate.getMonth();

		year = year.toString().substr(-2);

		month = (month + 1).toString();

		if(month.length === 1) {
			month = "0" + month;
		}

		if(day.length === 1){
			day = "0" + day;
		}

		return `${day} / ${month} / ${year}`;
	}
	

	render() {

		console.log(this.formatDate())
		
		return (
			<div className="maintenance wrapper">
			<div className="item-title block">
				<h2>0{this.props.index + 1}</h2>
				<h3>{this.props.kind} Maintenance</h3>
			</div>
			<div class="list-item wrapper">
				<div className="list-item block">
					<label htmlFor="kind" className="maintenance-label">Kind</label>
					<p className="maintenance-item">{this.props.kind}</p>
				</div>

				<div className="list-item block">
					<label htmlFor="currentMiles" className="maintenance-label">Current Miles</label>
					<p className="maintenance-item"> {this.props.currentMiles}</p>
				</div>

				<div className="list-item block">
					<label htmlFor="Note" className="maintenance-label">Note</label>
					<p className="maintenance-item">{this.props.note}</p>
				</div>

				<div className="list-item block">
					<label htmlFor="dateAdded" className="maintenance-label">Date Added</label>
					<p className="maintenance-item">{this.formatDate()}</p>
				</div>
			</div>
				<div className="list-item block">
					<p className="maintenance-button">
						<Link to={{ pathname: "/EditMaintenance", query: { id: this.props.id } }}>
							<button className="edit-maintenance">
							<i className="far fa-edit"></i>
								<span>Edit</span>
							</button>
						</Link>
					</p>
					<p className="maintenance-button">
						<button className="deleteButton" onClick={e => this.onDeleteClick(e)}>
						<i className="fas fa-minus-circle"></i>
							<span>Delete</span>
						</button>
					</p>
				</div>
			</div>
		)
	}
}

export default connect()(SingleMaintenanceItem);