import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { Link } from "react-router-dom";
import {registerUser} from '../../actions/users';
import {login} from '../../actions/auth';
import Input from './Input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
const passwordLength = length({min: 4, max: 72});
const matchesPassword = matches('password');

export class SignUpForm extends React.Component {

	onSubmit(values) {
		const {email, password } = values;
		const user = {email, password }
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(email, password)))
			.catch( err => {
				console.log(err)
			})
			// .then(this.props.history.push(`/garage`));
	}

	render() {

	
	return (
		<section className="signup">
			<form className="signup-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
      )}>

			<fieldset>
			<legend>Sign Up</legend>
				<label htmlFor="email"> Email </label>
				<Field 
								component={Input}
								type="text"
								name="email"
								placeholder="Email"
								id="email"
								validate={[required, nonEmpty, isTrimmed]}
						/>
				<label htmlFor="password"> Password </label>
				<Field 
								component={Input}
								type="password"
								name="password"
								placeholder="Password"
								id="password"
								validate={[required, passwordLength, isTrimmed]}
						/>
				<label htmlFor="passwordConfirm">Confirm Password</label>
				<Field 
								component={Input}
								type="password"
								name="confirmPassword"
								placeholder="Confirm Password"
								id="confirmPassword"
								validate={[required, matchesPassword, nonEmpty]}
						/>
				<button 
						type="submit"
						id="signupButton"
						disabled={this.props.pristine || this.props.submitting}
						>
						Sign Up
				</button>
			</fieldset>
			</form>
		</section>
		)
	}
};

export default reduxForm({
	form: 'signup',
	onSubmitFail: (errors, dispatch) =>
	dispatch(focus('signup', Object.keys(errors)[0]))
})(SignUpForm);