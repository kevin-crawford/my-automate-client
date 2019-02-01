import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './LandingPage.css';
import '../../App.css';

export function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/garage" />
	}
	return (
		<div className="LandingPage">
			<section aria-labelledby="showcase" id="showcase-section">
			<header role="banner" id="title-banner">
				<h1>Automate</h1>
			</header>
				<img id="automate-infographic" src="https://i.imgur.com/k8nU9hz.png" alt="automate infographic"></img>
				<div id="details">
				<p><b>Automate</b> is intended to help vehicle owners ( cars, recreational vehicles, motorcycles ) track and log their vehicle maintenance in one uniform web application.</p>
				<p> Add vehicles and start tracking by adding the most recent vehicle maintenance records. When you forget when the last time you had done a particular maintenance, use this app for reference.</p>
				</div>
				<Link to='/signup'>
					<button className="signup landing-button">
						Sign Up
						</button>
				</Link>
				<Link to='/login'>
					<button className="login landing-button">
						Log In
						</button>
				</Link>

			</section>
			<footer><p>AutoMate 2018 / Website by Kevin Crawford</p></footer>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(LandingPage);