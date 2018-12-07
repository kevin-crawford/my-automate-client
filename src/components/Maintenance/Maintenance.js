import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';

import {fetchSingleVehicle} from '../../actions/vehicle-actions'
import Vehicle from '../Vehicles/Vehicle'
import SingleMaintenanceItem from './SingleMaintenanceItem';
import './Maintenance.css'

class Maintenance extends React.Component {

	componentDidMount() {
		const vehicleId = this.props.match.params.vehicleId;
		console.log('vehicleId', vehicleId);
		this.props.dispatch(fetchSingleVehicle(vehicleId))
		.then(() => console.log('vehicle', this.props.singleVehicle));
	};

	render() {
		console.log(this.props)
		console.log(this.props.history)
		
		let singleVehicle;
		let maintenanceItems;
		
		
		if(!this.props.singleVehicle){
			singleVehicle = (
			<div>Loading..</div>
			)
		} else {
			
			singleVehicle = (
				<Vehicle {...this.props.singleVehicle} history={this.props.history} />
			)
			
			maintenanceItems = this.props.singleVehicle.maintenance.map( (item, index) => {
				return(
						<SingleMaintenanceItem 
													kind={item.kind}
													currentMiles={item.currentMiles}
													note={item.note}
													reminder={item.reminder}
													created={item.created}
													id={item._id}
													index={index} key={index}
						/>
					)
				}
			)
			

		}

		return (
			
			<div className="vehicle wrapper">
				{singleVehicle}
				
				{maintenanceItems}
			</div>
		)
	}
}
const mapStateToProps = state => ({
	singleVehicle: state.vehicle.singleVehicle
})

export default withRouter(connect(mapStateToProps)(Maintenance));