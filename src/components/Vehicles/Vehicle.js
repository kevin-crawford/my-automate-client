import  React from 'react';
import { connect } from 'react-redux';
import { fetchVehicles, deleteVehicle } from '../../actions/vehicle-actions'
import { Link } from 'react-router-dom';
import './Vehicle.css'

export class Vehicle extends React.Component {

	onCancelClick(e){
		console.log('closing form')
	}

  onDeleteClick(e) {
		const { user } = this.props;
		const id = this.props._id;
		window.confirm("Are you sure you want to delete item?");
		this.props.dispatch(deleteVehicle(id))
		.then(() => this.props.dispatch(fetchVehicles(user)))
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

		return day+month+year;
	}
	


	render(){

		let vehicleListButtons = (
		<>
			<li>
				<Link to={`/vehicle/${this.props._id}`}>
					<button className="view-vehicle form-button" > 
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMElEQVQ4T2NkoBAwYtPv6upax8DA0IgmV7979+4mdPUYBuDQDNOHYQg2A/6DVO/evRtFztXVFas45QZsMxWxZ2T438XAwGBGYnie+s/AWMa43VT4ubatg4SYvCJJ+l89vM9w9fCBFyAD/ttbmjP8//GNJAMYObgYDh4/yQA2wE5HjeHe5x8MDz7/ZFDgZWdQ4uXAahi6mkNXbkENUJNjOPDiM4NC13KGB2WRDA4SvFgNQFdz6NYjiAEg1ec+/WYI3niKYa2/GYMRHytWA7CpAUfjLgux/++EJBl02+YzXK5KZLCVEsJqwOFn7+BqhN49Z3A78YoRboCEvCLDw88/GOR5ORiU+TmxGnD343e4mhcP76MaYK2pTFIsHL1+F80AZWnSDLj7FNUAknRDFYPCAAAmHJIt7P/gUAAAAABJRU5ErkJggg=="/>
					  View
					</button>
				</Link>
			</li>
			<li>
				<button className="delete-vehicle form-Button" onClick={e => this.onDeleteClick(e)}>
				<i class="fas fa-trash-alt"></i>
					Delete
				</button>
			</li>
		</>
			)

			let editVehicleButtons = (
				<div className="vehicle-button block">
					<li>
						<Link to={{pathname: "/EditVehicle", query: {id: this.props.id}}}>
							<button className="edit-vehicle form-button">
							<i className="fas fa-edit"></i>
								Edit Vehicle
							</button>
						</Link>
					</li>
					<li>
						<Link to={{pathname: "/AddMaintenance", query: {id: this.props.id}}}>
							<button className="add-maintenance form-button">
							<i className="fas fa-plus-circle"></i>
								Add Maintenance
							</button>
						</Link>
					</li>
				</div>
			)

		return(
			
			<div className="vehicle wrapper">
				<div className="item-title block">
					<h1> {this.props.year} {this.props.brand} </h1>
					<h2>Vehicle Information</h2>
				</div>

						<>
						<div className="list-item block">
							<li className="vehicle-brand">
								Brand: {this.props.brand}
							</li>
						</div>

						<div className="list-item block">
							<li className="vehicle-model">
								Model: {this.props.model}
							</li>
						</div>

						<div className="list-item block">
							<li className="vehicle-year">
								Year: {this.props.year}
							</li>
						</div>

						<div className="list-item block">
							<li className="vehicle-miles">
								Miles: {this.props.miles}
							</li>
						</div>

						<div className="list-item block">
							<li className="vehicle-addedOn">
								Added On: {this.props.created}
							</li>
						</div>

							{this.props.history.location.pathname === `/garage` ? vehicleListButtons : ''}
							{this.props.history.location.pathname !== `/garage` ? editVehicleButtons : ''}
						</>	
			</div>
		);
	};
};



export default connect()(Vehicle);