import  React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Maintenance  from '../Maintenance/Maintenance';

import './Vehicle.css'

export function Vehicle(props) {
	console.log(props.vehicle)
		return(
			<div className="vehicle wrapper">
				<ul className="vehicle-information">
					<li className="vehicle-brand">
						Brand: {props.vehicle.brand}
					</li>
					<li className="vehicle-model">
						Model: {props.vehicle.model}
					</li>
					<li className="vehicle-year">
						Year: {props.vehicle.year}
					</li>
					<li className="vehicle-miles">
						Miles: {props.vehicle.miles}
					</li>
					<li className="vehicle-addedOn">
						Added On: {props.vehicle.addedOn}
					</li>
				</ul>
		</div>
		)
}


export default Vehicle;