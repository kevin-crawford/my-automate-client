import React from "react";
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {login} from '../../actions/auth';
import {required, nonEmpty} from '../../validators';
import  {Link} from 'react-router-dom';

import './Forms.css';

export class Login extends React.Component {

	onSubmit(values){
		return this.props
		.dispatch(login(values.username, values.password))
		.then(() => this.props.history.push(`/garage`));
	}

	render() {
		let error;
		if(this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}   
				</div>
			)
		}
		return (
		<section className="Login">
				<form id="login-form" className="login-form"
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
				)}>
				{error}
					<fieldset>
					<legend>Login</legend>
						<label htmlFor="username">Username</label>
						<Field 
								component={Input}
								type="text"
								name="username"
								placeholder="Username"
								id="username"
								class="form-field"
								validate={[required, nonEmpty]}
						/>
						<label htmlFor="password">Password</label>
						<Field 
								component={Input}
								type="password"
								name="password"
								placeholder="Password"
								id="password"
								class="form-field"
								validate={[required, nonEmpty]}
						/>
						<div className="submit-container">
						<button id="login-button" type="submit" disabled={this.props.pristine || this.props.submitting} >
								Login
						</button>
						</div>
					</fieldset>
					<p>Dont Have an Account?</p>
					<Link to="/signup" className="signup-anchor"> Sign up</Link>
					<Link to="/"><p>Back</p></Link>
				</form>
		</section>
		)
	}
};

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors,dispatch) => dispatch(focus('login', 'username'))
})(Login);