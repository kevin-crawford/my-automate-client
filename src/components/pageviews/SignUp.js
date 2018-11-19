import React from 'react';
import './SignUp.css';

export default function SignUpForm() {
	return (
		<div className="SignUpForm">
			<form className="signup-form" id="signup-form">
			<legend>Sign Up</legend>
			<fieldset>
				<label> Email </label>
				<input htmlFor="text" placeholder="Email" name="email" id="email"/> 
				<label> Password </label>
				<input htmlFor="text" placeholder="Password" name="password" id="password"/>
			</fieldset>
			<button type="submit">Submit</button>
			</form>
		</div>
		)
};