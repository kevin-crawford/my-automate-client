import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../pageviews/Input';

import { addMaintenance } from '../../actions/vehicle-actions'
// import { nonEmpty, isTrimmed } from '../../validators';
import './MaintenanceForms.css';

export class AddMaintenanceForm extends React.Component {
	onSubmit(values, vehicleId) {
		this.props.dispatch(addMaintenance(values, vehicleId))
		.then(() => this.props.history.push(`/vehicle/${vehicleId}`));
	}

	render() {
		let error;
		const vehicleId = this.props.location.query.id;

		if (this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		};

		return (
			<section className="add-maintenance">

				<form className="form-container"
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values, vehicleId)
					)}>
					{error}
					<fieldset>
						<legend className="form-title">Add A New Maintenance</legend>
						<label htmlFor="kind" className="form-title">Maintenance Type</label>
						<Field
							name="kind"
							id="kind"
							className="form-field"
							type="text"
							component="select"
							label="Maintenance Type"
							// validate={[nonEmpty, isTrimmed]}
						>
							<option></option>
							<option value="Oil">Oil</option>
							<option value="Brakes">Brakes</option>
							<option value="Tires">Tires</option>
							<option value="Windshield Wipers">Windshield Wipers</option>
						</Field>
						<label htmlFor="currentMiles" className="form-title">Vehicle Miles At Time of Maintenance</label>
						<Field
							name="currentMiles"
							id="currentMiles"
							type="number"
							className="form-field"
							component={Input}
						/>
						<label htmlFor="note" className="form-title">Maintenance Notes</label>
						<Field
							name="note"
							id="note"
							type="text"
							className="form-field"
							component={Input}
						/>
						
						<button className="add-maintenance submit-button" type="submit">
							Submit
						</button>
						<button className="cancel-maintenance submit-button">
							Cancel
						</button>
					</fieldset>
				</form>
			</section>
		);
	};
};


export default reduxForm({
		form: 'Add Maintenance',
		onSubmitFail: (errors, dispatch) => {
			if(errors)dispatch(focus('Add Maintenance', Object.keys(errors)[0]));
		}
})(AddMaintenanceForm);