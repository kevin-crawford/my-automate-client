import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';

import Input from '../pageviews/Input';

import { editVehicle } from '../../actions/vehicle-actions'
import {required, nonEmpty, length, isTrimmed} from '../../validators';

import './AddNewVehicleForm.css';

export class EditVehicleForm extends React.Component {

	onSubmit(values) {
		return this.props
		console.log('edit vehicle values',values.brand,values.model,values.year,values.miles);
		console.log('edit vehicle id', this.props.params)
		// .dispatch(editVehicle(values))
		// .then(() => this.props.history.push(`/vehicle/${this.props.id}`));
	}

	render() {
		let error;
		console.log(this.props);
		console.log(this.props.match.params);
		if(this.props.error) {
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
							this.onSubmit(values)
							)}>
							{error}
					<fieldset>
					<legend>Edit Vehicle</legend>
						<label htmlFor="kind">Maintenance Type</label>
							<Field 
											name="kind" 
											id="kind" 
											type="text" 
											component={Input}
											label="Kind"
							/>
							<label htmlFor="currentMiles">Current Miles</label>
							<Field 
											name="currentMiles" 
											id="currentMiles" 
											type="number" 
											component={Input}
											label="Current Miles"
							/>
							<label htmlFor="note">Maintenance Note</label>
							<Field 
											name="note" 
											id="note" 
											type="text" 
											component={Input}
											label="Note"
							/>
						<button className="edit-form button" type="submit" disabled={this.props.pristine || this.props.submitting} >
								Submit
						</button>
					</fieldset>
			</form>
		</section>
		);
	};
};

export default reduxForm({
		form: 'editvehicleform',
		onSubmitFail: (errors, dispatch) => {
			if(errors)dispatch(focus('editvehicleform', Object.keys(errors)[0]));
		}
})(EditVehicleForm);