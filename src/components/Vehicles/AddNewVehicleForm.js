import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../pageviews/Input';

import { addVehicle } from '../../actions/vehicle-actions'
import './AddNewVehicleForm.css';

export class AddNewVehicleForm extends React.Component {
	onSubmit(values) {
		console.log(values.brand,values.model,values.year,values.miles);
		this.props.dispatch(addVehicle(values));
		this.props.history.push('/garage');
	}

	render() {
		let error;
		if(this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}   
				</div>
			);
		};
		return (
		<section className="add-vehicle form">
			<form	
					onSubmit={this.props.handleSubmit(values =>
							this.onSubmit(values)
							)}>
							{error}
				<fieldset>
					<legend>Add New Vehicle</legend>
						<label htmlFor="brand">Brand</label>
							<Field 
											name="brand" 
											id="brand" 
											type="text" 
											component={Input}
											label="Brand"
							/>
						<label htmlFor="model">Model</label>
							<Field 
											name="model" 
											id="model" 
											type="text" 
											component={Input}
											label="Model"
							/>
						<label htmlFor="year">Year</label>
							<Field 
											name="year" 
											id="year" 
											type="number" 
											component={Input}
											label="Year"
							/>
						<label htmlFor="miles">Miles</label>
							<Field 
											name="miles" 
											id="miles" 
											type="number" 
											component={Input}
											label="Miles"
							/>
							<button className="add-form form-button" type="submit">
								Submit
							</button>
							<button className="cancel-form form-button">
								Cancel
							</button>
				</fieldset>
			</form>
		</section>
		);
	}
}

export default reduxForm({
		form: 'Add Vehicle',
		onSubmitFail: (errors, dispatch) => {
			if(errors)dispatch(focus('Add Vehicle', Object.keys(errors)[0]));
		}
})(AddNewVehicleForm);