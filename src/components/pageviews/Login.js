import React from "react";

import './Login.css'

export default function Login() {
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
};