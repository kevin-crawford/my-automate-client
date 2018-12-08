import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import requiresLogin from './requires-login';

import './Navigation.css'

export class Navigation extends React.Component {

	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {

		return(
			<Fragment>
				<nav role="navigation">
					{/* <h1 className="Navigation-title">
							<Link to={'/'} className="automate-title-link">AutoMate</Link>
					</h1> */}
					<ul className="Navigation">
							<li>
								<Link to="/garage">Garage</Link>
							</li>
							<li>
								{<button id="logout" onClick={() => this.logOut()}>Log Out</button>}
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