import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import {connect} from 'react-redux';
import Input from '../pageviews/Input';

import { editVehicle } from '../../actions/vehicle-actions'
import { required, nonEmpty, length, isTrimmed } from '../../validators';

import './AddNewVehicleForm.css';

export class EditVehicleForm extends React.Component {

	onSubmit(values, vehicleId) {
		
		console.log(values);
		console.log('vehicle id', vehicleId)
		
		// console.log('edit vehicle values',values.kind,values.currentMiles,values.note, id);
		// this.props.dispatch(editVehicle(values, id))
		// .then(() => this.props.history.push(`/vehicle/${id}`));
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
			<section className="edit-vehicle form">
				<form
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values, vehicleId)
					)}>
					{error}
					<fieldset>
						<legend>Edit Vehicle</legend>
						<label htmlFor="kind">Model</label>
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
							type="text"
							component={Input}
							label="Miles"
						/>
						<button className="edit-form button" type="submit"
							disabled={this.props.pristine || this.props.submitting} >
							Submit
						</button>
					</fieldset>
				</form>
			</section>
		);
	};
};

const mapStateToProps = state => ({
	initialValues: state.vehicle.singleVehicle
})


EditVehicleForm = reduxForm({
	form: 'Edit Vehicle',
	onSubmitFail: (errors, dispatch) => {
		if(errors)dispatch(focus('Edit Vehicle', Object.keys(errors)[0]));
	}
})(EditVehicleForm);

export default connect(mapStateToProps)(EditVehicleForm);