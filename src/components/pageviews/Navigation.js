import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
	return(
		<Fragment>
			<nav role="navigation">
				<ul className="Navigation">
					<h1 className="Navigation-title">
						<Link to={'/'} className="automate-title-link">AutoMate</Link>
					</h1>
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
			</nav>
		</Fragment>
	)
}
