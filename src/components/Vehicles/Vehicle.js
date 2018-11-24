import  React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Maintenance  from '../Maintenance/Maintenance';

import './Vehicle.css'

export class Vehicle extends React.Component {
	render() {
		return(
			<div className="vehicle wrapper">
				<ul className="vehicle-information">
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
						Added On: {this.props.addedOn}
					</li>
				</ul>
		</div>
		)
	}
}


const mapStateToProps = (state, props) => {
	console.log(state, props)
	return state;
}

export default connect(mapStateToProps)(Vehicle);