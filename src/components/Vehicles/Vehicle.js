import React from 'react';
import { connect } from 'react-redux';
import { fetchVehicles, deleteVehicle } from '../../actions/vehicle-actions'
import { Link } from 'react-router-dom';

import './Vehicle.css'

export class Vehicle extends React.Component {

	onCancelClick(e) {
		console.log('closing form')
	}

	onDeleteClick(e) {
		const { user } = this.props;
		const id = this.props._id;
		window.confirm("Are you sure you want to delete item?");
		this.props.dispatch(deleteVehicle(id))
			.then(() => this.props.dispatch(fetchVehicles(user)))
	}

	formatDate() {
		let maintenanceDate = new Date(this.props.created)

		let year = maintenanceDate.getFullYear();
		let day = maintenanceDate.getDay().toString();
		let month = maintenanceDate.getMonth();

		year = year.toString().substr(-2);

		month = (month + 1).toString();

		if (month.length === 1) {
			month = "0" + month;
		}

		if (day.length === 1) {
			day = "0" + day;
		}

		return `${day} / ${month} / ${year}`;
	}



	render() {
// render vehicle the vehicle buttons that are used in conditional statements in the return statement.
		let vehicleListButtons = (
			//Garage view// view vehicle button below
			<div className="vehicle-buttons block">
				<p className="vehicle-button">
					<Link to={`/vehicle/${this.props._id}`}>
						<button className="view-vehicle form-button">
						<i class="fas fa-wrench"><span>View</span></i>
					</button>
					</Link>
				</p>
				<p className="vehicle-button">
					<button className="delete-vehicle form-Button" onClick={e => this.onDeleteClick(e)}>
						<i className="fas fa-trash-alt"><span>Delete</span></i>
				</button>
				</p>
			</div>
		// Garage view // delete vehicle button above
		)

		let editVehicleButtons = (
			// Vehicle Maintenance // edit vehicle button below
			<div className="vehicle-buttons block">
				<p className="vehicle-button">
					<Link to={`/EditVehicle/${this.props.id}`}>
						<button className="edit-vehicle form-button">
							<i className="fas fa-edit"><span>Edit Vehicle</span></i>
							</button>
					</Link>
				</p>
				<p className="vehicle-button">
					<Link to={`/AddMaintenance/${this.props.id}`}>
						<button className="add-maintenance form-button">
							<i className="fas fa-plus-circle"><span>Add Maintenance</span></i>
						</button>
					</Link>
				</p>
			</div>
			// Vehicle Maintenance // add maintenence vehicle button above
		)
// Return vehicles item information
		return (
			<div className="vehicle wrapper">
				<div className="item-title block">
					<h1> {this.props.year} {this.props.brand} </h1>
					<h2>Vehicle Information</h2>
				</div>
				<div className="list-item wrapper">
					<div className="list-item block">
						<label htmlFor="vehicle-brand" className="vehicle-label">Brand: </label>
						<p className="vehicle-item">
							{this.props.brand}
						</p>
					</div>

					<div className="list-item block">
						<label htmlFor="vehicle-model" className="vehicle-label">	Model: </label>
						<p className="vehicle-item">
							{this.props.model}
						</p>
					</div>

					<div className="list-item block">
						<label htmlFor="vehicle-year" className="vehicle-label">Year:</label>
						<p className="vehicle-item">
							{this.props.year}
						</p>
					</div>

					<div className="list-item block">
						<label htmlFor="vehicle-miles" className="vehicle-label" >Miles:</label>
						<p className="vehicle-item">
							{this.props.miles}
						</p>
					</div>

					<div className="list-item block">
						<label htmlFor="vehicle-addedOn" className="vehicle-label">Added On:</label>
						<p className="vehicle-item">
							{this.formatDate()}
						</p>
					</div>
					</div>
					{this.props.history.location.pathname === `/garage` ? vehicleListButtons : ''}
					{this.props.history.location.pathname !== `/garage` ? editVehicleButtons : ''}
			</div>
			//if vehicle component is in the garage section, show vehicle navigations ( VIEW , DELETE ) Vehicle buttons //
		);
	};
};



export default connect()(Vehicle);