import React from 'react';

import './LandingPage.css';

export default function LandingPage() {
	return(
		<div className="LandingPage">
			<header role="banner">
					<h2> Vehicle Maintenance Web App </h2>
				</header>
				<section>
					<header>
						<h3> Get on top of your vehicle maintenance today!</h3>
						<p>[<em> placeholder for website content image / user flow </em> ] </p>
					</header>
					<p>
					AutoMate is intended to help vehicle owners ( cars, recreational vehicles, motorcycles ) track and log their vehicle maintenance in one uniform web application. Add vehicles and start tracking by adding the most recent vehicle maintenance records and AutoMait will let you know when it is time for your next maintenance for that particular item. Opt in to receive e-mail alerts to be even more up to date!
					</p>
				</section>
				<section>
					<header>
						<h3> Dont Put Off Vehicle Maintenance Any Longer! </h3>
						{/* <SignUpForm /> */}
					</header>
				</section>
				<footer>AutoMate 2018 / Website by Kevin Crawford
				</footer>
		</div>
	)
}