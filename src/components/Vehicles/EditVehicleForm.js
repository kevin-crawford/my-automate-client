import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { editVehicle } from '../../actions/vehicle-actions';
import {connect} from 'react-redux';
import Input from '../pageviews/Input';
import { nonEmpty, length, isTrimmed } from '../../validators';


// const yearLength = length({min: 4, max: 4});


export class EditVehicleForm extends React.Component {

	onSubmit(values, vehicleId) {
		
		console.log(values);
		console.log('vehicle id', vehicleId)
		
		console.log('edit vehicle values',values.brand,values.model,values.year,values.miles, vehicleId);
		
		this.props.dispatch(editVehicle(values, vehicleId))
		.then(() => this.props.history.push(`/vehicle/${vehicleId}`));
	}

	render() {
		let error;
		const vehicleId = this.props.initialValues.id
		
		if (this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		};

		return (
			<section className="edit-vehicle">
				<form className="form-container"
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values, vehicleId)
					)}>
					{error}
					<fieldset>
						<legend className="form-title">Edit Vehicle</legend>
						<Field
							name="brand"
							id="brand"
							type="text"
							component={Input}
							label="Brand"
							validate={[nonEmpty, isTrimmed]}
						/>
						<Field
							name="model"
							id="model"
							type="text"
							component={Input}
							label="Model"
							validate={[nonEmpty, isTrimmed]}
						/>
						<Field
							name="year"
							id="year"
							type="number"
							component={Input}
							label="Year"
							validate={[nonEmpty, isTrimmed]}
						/>
						<Field
							name="miles"
							id="miles"
							type="text"
							component={Input}
							label="Miles"
							validate={[nonEmpty, isTrimmed]}
						/>
						<button className="edit-form form-button" type="submit">
							Submit
						</button>
						<button className="cancel-form form-button">
							Cancel
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