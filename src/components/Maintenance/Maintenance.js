import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

// vehicle imports
import {fetchSingleVehicle} from '../../actions/vehicle-actions'
import Vehicle from '../Vehicles/Vehicle'

// maintenance imports
import SingleMaintenanceItem from './SingleMaintenanceItem';

class Maintenance extends React.Component {

	componentDidMount() {
		const vehicleId = this.props.match.params.vehicleId;
		this.props.dispatch(fetchSingleVehicle(vehicleId))
		.then(() => console.log('vehicle', this.props.singleVehicle));
	};

	render() {
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
				if(!this.props.singleVehicle.maintenance) {
					maintenanceItems = (<div>No Maintenance Items</div>)
				} else {
				maintenanceItems = this.props.singleVehicle.maintenance.map((item, index) => {
					return (
							<SingleMaintenanceItem 
														kind={item.kind}
														currentMiles={item.currentMiles}
														note={item.note}
														reminder={item.reminder}
														created={item.created}
														id={item._id}
														vehicle={item.vehicle}
														history={this.props.history}
														index={index} key={index}
							/>
					)
				
				});
			}
		};

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