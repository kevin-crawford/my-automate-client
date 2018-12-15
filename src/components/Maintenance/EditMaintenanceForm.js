import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { editMaintenance } from '../../actions/vehicle-actions';
import './MaintenanceForms.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Input from '../pageviews/Input';
import { length, required, minValue0} from '../../validators';
const milesLength = length({min: 1, max: 6})


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
				<form className="form-container"
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values, maintenanceId, vehicleId)
					)}>
					{error}
					<fieldset>
					<label htmlFor="kind" className="form-title">Maintenance Type</label>
						<Field
							name="kind"
							id="kind"
							className="form-field"
							type="text"
							component="select"
							label="Maintenance Type"
						>
							<option disabled defaultValue>---Select An Option---</option>
							<option value="Oil">Oil</option>
							<option value="Brakes">Brakes</option>
							<option value="Tires">Tires</option>
							<option value="Windshield Wipers">Windshield Wipers</option>
						</Field>
						<label htmlFor="currentMiles" className="form-title">Vehicle Miles At Time of Maintenance</label>
						<Field
							name="currentMiles"
							id="currentMiles"
							className="form-field"
							type="number"
							component={Input}
							validate={[required, milesLength, minValue0]}
						/>
						<label htmlFor="note" className="form-title">Maintenance Notes</label>
						<Field
							name="note"
							id="note"
							className="form-field"
							type="text"
							component={Input}
							label="Maintenance Note To Edit"
							// validate={[nonEmpty, isTrimmed]}
						/>
						<button className="edit-form submit-button" type="submit">
							Submit
						</button>
						<Link to={`/vehicle/${vehicleId}`}>
							<button className="cancel-maintenance submit-button" type="#">
								Cancel
							</button>
						</Link>
					</fieldset>
				</form>
			</section>
		);
	};
};

const mapStateToProps = state => ({
	initialValues: state.vehicle.singleVehicle
})


EditMaintenanceForm = reduxForm({
	form: 'Edit Maintenance',
	onSubmitFail: (errors, dispatch) => {
		if(errors)dispatch(focus('Edit Maintenance', Object.keys(errors)[0]));
	}
})(EditMaintenanceForm);

export default connect(mapStateToProps)(EditMaintenanceForm);