import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
	return(
		<Fragment>
			<nav role="navigation">
				<h1 className="Navigation-title">
						<Link to={'/'} className="automate-title-link">AutoMate</Link>
				</h1>
				<ul className="Navigation">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/SignUp">Sign Up</Link>
						</li>
						<li>
							<Link to="/Login">Log In</Link>
						</li>
				</ul>
			</nav>
		</Fragment>
	)
}
