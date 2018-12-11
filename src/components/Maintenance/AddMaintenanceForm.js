import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../pageviews/Input';

import { addMaintenance } from '../../actions/vehicle-actions'
// import { nonEmpty, isTrimmed } from '../../validators';
import './AddMaintenanceForm.css';

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
			<section className="add-maintenance form">
				<form
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values, vehicleId)
					)}>
					{error}
					<fieldset>
						<legend>Add Maintenance</legend>
						<label htmlFor="kind"></label>
						<Field
							name="kind"
							id="kind"
							type="text"
							component={Input}
							label="Type"
							// validate={[nonEmpty, isTrimmed]}
						/>
						<label htmlFor="currentMiles"></label>
						<Field
							name="currentMiles"
							id="currentMiles"
							type="number"
							component={Input}
							label="Current Miles"

						/>
						<label htmlFor="note"></label>
						<Field
							name="note"
							id="note"
							type="text"
							component={Input}
							label="Note"
						/>
						<button className="add-maintenance button" type="submit">
							Submit
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