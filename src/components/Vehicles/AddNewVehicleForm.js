import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import Input from '../pageviews/Input';
import {Link} from 'react-router-dom';
import { addVehicle } from '../../actions/vehicle-actions'

import { required, length, isTrimmed } from '../../validators';

// const milesLength = length({min: 1, max: 6})

import '../Maintenance/MaintenanceForms.css'

export class AddNewVehicleForm extends React.Component {
	onSubmit(values) {
		console.log(values.brand, values.model, values.year, values.miles);
		this.props.dispatch(addVehicle(values));
		this.props.history.push('/garage');
	}

	render() {
		let error;
		if (this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		};
		return (
			<section className="add-vehicle form">
				<form className="form-container"
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values)
					)}>
					{error}
					<fieldset>
						<legend className="form-title">Add New Vehicle</legend>
						<label htmlFor="brand">Brand</label>
						<Field
							name="brand"
							id="brand"
							type="text"
							component={Input}
							validate={[required, isTrimmed]}
						/>
						<label htmlFor="model">Model</label>
						<Field
							name="model"
							id="model"
							type="text"
							component={Input}
							validate={[required, isTrimmed]}
						/>
						<label htmlFor="year">Year</label>
						<Field
							name="year"
							id="year"
							type="number"
							component={Input}
							validate={[required, isTrimmed]}
						/>
						<label htmlFor="miles">Miles</label>
						<Field
							name="miles"
							id="miles"
							type="number"
							component={Input}
							validate={[required, isTrimmed]}
						/>
						<button className="add-form submit-button" type="submit">
							Submit
							</button>
							<Link to={`/garage`}>
							<button className="cancel-maintenance submit-button" type="#">
								Cancel
							</button>
						</Link>
					</fieldset>
				</form>
			</section>
		);
	}
}

export default reduxForm({
	form: 'Add Vehicle',
	onSubmitFail: (errors, dispatch) => {
		if (errors) dispatch(focus('Add Vehicle', Object.keys(errors)[0]));
	}
})(AddNewVehicleForm);