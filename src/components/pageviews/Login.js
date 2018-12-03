import React from "react";
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {login} from '../../actions/auth';
import {required, nonEmpty} from '../../validators';
import  {Link} from 'react-router-dom';

import './Login.css'

export class LoginForm extends React.Component {
	onSubmit(values){
		return this.props
		.dispatch(login(values.email, values.password))
		.then(() => this.props.history.push(`/garage`));
	}

	render(){
		let error;
		if(this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}   
				</div>
			)
		}
		return(
			<div className="Login">
				<form id="login-form" className="login-form">
				<legend>Login</legend>
					<label htmlFor="email">Email</label>
					<input type="text" placeholder="Email" name="email" id="email" />
					<label htmlFor="password">Password</label>
					<input type="text" placeholder="password" name="password" id="password" />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
};