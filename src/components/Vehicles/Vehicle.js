import  React, {Fragment} from 'react';
import { connect } from 'react-redux';

import { fetchVehicles, deleteVehicle } from '../../actions/vehicle-actions'
import { withRouter, Link } from 'react-router-dom';
import Spinner from 'react-spinkit';


import Maintenance from '../Maintenance/Maintenance';
import './Vehicle.css'

export class Vehicle extends React.Component {



	// viewSingleVehicle(){
		
	// 	console.log('going to single vehicle view');
	// }

	// onEditClick(e){
		
	// 	console.log('edit vehicle');
	// 	dispatch(editVehicle());
	// }

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
		console.log(this.props.history.location)
		let viewSingleVehicleButton = (
			<li>
				<Link to={`/vehicle/${this.props._id}`}>
					<button className="viewButton" > 
						View
					</button>
				</Link>
			</li>
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
						{this.props.history.location.pathname === `/garage` ? viewSingleVehicleButton : ''}
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
					</>	
			</div>
		);
	};
};



export default connect()(Vehicle);