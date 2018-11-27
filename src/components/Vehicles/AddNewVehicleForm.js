import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './Input';

import { addVehicle } from '../../actions/vehicle-actions'
import './AddNewVehicleForm.css';

export class AddNewVehicleForm extends React.Component {
	onSubmit(values) {
		console.log(values.brand,values.model,values.year,values.miles);
		this.props.dispatch(addVehicle(values.brand,values.model,values.year,values.miles));
		this.props.history.push('/garage');
	}

	render() {
		return (
			<form	
					onSubmit={this.props.handleSubmit(values =>
							this.onSubmit(values)
							)}>
							<Field 
											name="brand" 
											id="brand" 
											type="text" 
											component={Input}
											label="Brand"
							/>
							<Field 
											name="model" 
											id="model" 
											type="text" 
											component={Input}
											label="Model"
							/>
							<Field 
											name="year" 
											id="year" 
											type="number" 
											component={Input}
											label="Year"
							/>
							<Field 
											name="miles" 
											id="miles" 
											type="number" 
											component={Input}
											label="Miles"
							/>
							<button
											type="submit">
											Submit
							</button>
			</form>
		);
	}
}

export default reduxForm({
		form: 'Add Vehicle',
})(AddNewVehicleForm);