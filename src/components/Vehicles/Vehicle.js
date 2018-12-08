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
		console.log("vehicle item props", this.props);  
		console.log("onDelete", id, user);
		window.confirm("Are you sure you want to delete item?");
		this.props.dispatch(deleteVehicle(id))
		.then(() => this.props.dispatch(fetchVehicles(user)))
	}  


	render(){
		console.log(this.props)
		console.log(this.props.history.location.pathname === `/garage`)
		
		

		let vehicleListButtons = (
		<>
			<li>
				<Link to={`/vehicle/${this.props._id}`}>
					<button className="viewButton" > 
						View
					</button>
				</Link>
			</li>
			<li>
				<button className="deleteButton" onClick={e => this.onDeleteClick(e)}> 
					Delete
				</button>
			</li>
		</>
			)

			let editVehicleButtons = (
				<>
					<li>
						{/* <Link to='/EditVehicle' params={{ id: this.props.id}}> */}
						<Link to={{pathname: "/EditVehicle", query: {id: this.props.id}}} >
							<button className="edit-vehicle button">
								Edit Vehicle
							</button>
						</Link>
					</li>
					<li>
						<Link to={`/AddMaintenance`} params={{ id: this.props.id}}>
							<button className="add-maintenance button">
								Add Maintenance
							</button>
						</Link>
					</li>
				</>
			)

		return(
			
			<div className="vehicle wrapper">
				<h2> Vehicle Information </h2>
					<>
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
							Added On: {this.props.created}
						</li>
						{this.props.history.location.pathname === `/garage` ? vehicleListButtons : ''}
						{this.props.history.location.pathname !== `/garage` ? editVehicleButtons : ''}
					</>	
			</div>
		);
	};
};



export default connect()(Vehicle);