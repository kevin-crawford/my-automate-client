import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { SignUpPage } from './SignUpPage'
import './LandingPage.css';
import '../../index.css';

export function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/garage" />
	}
	return (
		<div className="LandingPage">
			<header role="banner" id="title-banner">
				<h1>AutoMate</h1>
			</header>
			<section role="region" aria-labelledby="showcase" id="showcase-section">
				<img id="automate-infographic" src="https://i.imgur.com/eihWrTf.png" alt="automate infographic"></img>
				<p>
					AutoMate is intended to help vehicle owners ( cars, recreational vehicles, motorcycles ) track and log their vehicle maintenance in one uniform web application. Add vehicles and start tracking by adding the most recent vehicle maintenance records and AutoMait will let you know when it is time for your next maintenance for that particular item. Opt in to receive e-mail alerts to be even more up to date!
				</p>

				<Link to='/signup'>
					<button className="signup landing-button">
						Sign Up
						</button>
				</Link>
				<Link to='/login'>
					<button className="login landing-button">
						Login
						</button>
				</Link>

			</section>
			<footer>AutoMate 2018 / Website by Kevin Crawford</footer>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(LandingPage);