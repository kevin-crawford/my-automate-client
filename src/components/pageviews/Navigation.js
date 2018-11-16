import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
	return(
		<Fragment>
			<ul className="Navigation">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/SignUp">Sign Up</Link>
				</li>
				<li>
					<Link to="/LogOut">Log Out</Link>
				</li>
			</ul>
		</Fragment>
	)
}
