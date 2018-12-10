import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { editMaintenance } from '../../actions/vehicle-actions';
import {connect} from 'react-redux';
import Input from '../pageviews/Input';
// import { nonEmpty, length, isTrimmed } from '../../validators';


// const yearLength = length({min: 4, max: 4});

import './EditMaintenanceForm.css';

export class EditMaintenanceForm extends React.Component {

	onSubmit(values, maintenanceId, vehicleId) {
		
	
		
		
		console.log('vehicle id', vehicleId);
		console.log('maintenanceId', maintenanceId)
	
		const editedMaintenance = {
			kind: values.kind,
			currentMiles: values.currentMiles,
			note: values.note
		}
		console.log(editedMaintenance)

		this.props.dispatch(editMaintenance(editedMaintenance, maintenanceId))
		.then(() => this.props.history.push(`/vehicle/${vehicleId}`));
	}

	render() {
		let error;
		const maintenanceId = this.props.location.query.id;
		const vehicleId = this.props.initialValues.id;

		console.log(this.props);
		if (this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		};

		return (
			<section className="edit-maintenance form">
				<form
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values, maintenanceId, vehicleId)
					)}>
					{error}
					<fieldset>
						<legend>Edit Maintenance Item</legend>
						<label htmlFor="kind">Kind</label>
						<Field
							name="kind"
							id="kind"
							type="text"
							component={Input}
							label="Kind"
							// validate={[nonEmpty, isTrimmed]}
						/>
						<label htmlFor="kind">Current Vehicle Miles</label>
						<Field
							name="currentMiles"
							id="currentMiles"
							type="number"
							component={Input}
							label="Current Miles"
							// validate={[nonEmpty, isTrimmed]}
						/>
						<label htmlFor="note">Maintenance Note</label>
						<Field
							name="note"
							id="note"
							type="text"
							component={Input}
							label="Note"
							// validate={[nonEmpty, isTrimmed]}
						/>
						<button className="edit-form button" type="submit">
							Submit
						</button>
					</fieldset>
				</form>
			</section>
		);
	};
};

const mapStateToProps = state => ({


	// Get maintenance id from query we passed into form, assign it to a variable.
	// let currentId = this.props.location.query.id

	// get Index of maintenance item we want to edit by comparing our query to the maintenance.currentItem.id in our state.vehicles.maintenance array. 
	// let currentIndex = state.vehicle.singleVehicle.maintenance.findIndex((singleMaintenance, currentId) => singleMaintenance.id == currentId)

	// once we have the index of the current maintenance item, set the initial values of our form to the items in our index.
	// initialValues: state.vehicle.singleVehicle.maintenance[currentIndex]

	initialValues: state.vehicle.singleVehicle
})


EditMaintenanceForm = reduxForm({
	form: 'Edit Maintenance',
	onSubmitFail: (errors, dispatch) => {
		if(errors)dispatch(focus('Edit Maintenance', Object.keys(errors)[0]));
	}
})(EditMaintenanceForm);

export default connect(mapStateToProps)(EditMaintenanceForm);