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

	onViewClick(e) {
		console.log('event clicked', console.log(this.props));
		//save vehicleId to localStorage;
		// clearVehicleId(this.props.)
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

		let vehicleListButtons = (
			<>
				<p className="vehicle-button">
					<Link to={`/vehicle/${this.props._id}`}>
						<button className="view-vehicle form-button" onClick={e => this.onViewClick(e)} >
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMElEQVQ4T2NkoBAwYtPv6upax8DA0IgmV7979+4mdPUYBuDQDNOHYQg2A/6DVO/evRtFztXVFas45QZsMxWxZ2T438XAwGBGYnie+s/AWMa43VT4ubatg4SYvCJJ+l89vM9w9fCBFyAD/ttbmjP8//GNJAMYObgYDh4/yQA2wE5HjeHe5x8MDz7/ZFDgZWdQ4uXAahi6mkNXbkENUJNjOPDiM4NC13KGB2WRDA4SvFgNQFdz6NYjiAEg1ec+/WYI3niKYa2/GYMRHytWA7CpAUfjLgux/++EJBl02+YzXK5KZLCVEsJqwOFn7+BqhN49Z3A78YoRboCEvCLDw88/GOR5ORiU+TmxGnD343e4mhcP76MaYK2pTFIsHL1+F80AZWnSDLj7FNUAknRDFYPCAAAmHJIt7P/gUAAAAABJRU5ErkJggg==" alt="view vehicle" />
							View
					</button>
					</Link>
				</p>
				<p className="vehicle-button">
					<button className="delete-vehicle form-Button" onClick={e => this.onDeleteClick(e)}>
						<i className="fas fa-trash-alt"></i>
						Delete
				</button>
				</p>
			</>
		)

		let editVehicleButtons = (
			<div className="vehicle-buttons block">
				<p className="vehicle-button">
					<Link to={`/EditVehicle/${this.props.id}`}>
						<button className="edit-vehicle form-button">
							<i className="fas fa-edit"></i>
							Edit Vehicle
							</button>
					</Link>
				</p>
				<p className="vehicle-button">
					<Link to={`/AddMaintenance/${this.props.id}`}>
						<button className="add-maintenance form-button">
							<i className="fas fa-plus-circle"></i>
							Add Maintenance
						</button>
					</Link>
				</p>
			</div>
		)

		return (

			<div className="vehicle wrapper">
				<div className="item-title block">
					<h1> {this.props.year} {this.props.brand} </h1>
					<h2>Vehicle Information</h2>
				</div>
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

					{this.props.history.location.pathname === `/garage` ? vehicleListButtons : ''}
					{this.props.history.location.pathname !== `/garage` ? editVehicleButtons : ''}
			</div>
		);
	};
};



export default connect()(Vehicle);