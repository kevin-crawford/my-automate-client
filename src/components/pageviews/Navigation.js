import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import requiresLogin from './requires-login';

import './Navigation.css'

export class Navigation extends React.Component {

	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {

		return (
			<Fragment>
				<nav role="navigation">
					<ul className="Navigation">
						<li className="brand-wrapper">
							<div id="branding">
								AUTOMATE
								<p>: Maintenance Itemizer</p>
							</div>
						</li>
						<li className="nav-button">
							<Link to="/garage">
								<button className="garage-redirectf">
									<i className="fas fa-warehouse">Garage</i>
									</button>
							</Link>
						</li>
						<li className="nav-button">
							<button id="logout" onClick={() => this.logOut()}>
								<i className="fas fa-sign-out-alt">Log Out</i>
								</button>
						</li>
					</ul>
				</nav>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	user: state.auth.currentUser
});

export default requiresLogin()(connect(mapStateToProps)(Navigation));