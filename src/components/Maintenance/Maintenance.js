import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


import './Maintenance.css'

class Maintenance extends React.Component {
	render() {

		return (
			<Fragment>
				<ul>
					<li>
						Kind: {this.props.kind}
					</li>
					<li>
						Date Added: {this.props.date}
					</li>
					<li>
						Current Miles: {this.props.currentMiles}
					</li>
					<li>
						Note: {this.props.note}
					</li>
					<li>
						Maintenance ID: {this.props.maintenanceID}
					</li>
				</ul>
			</Fragment>
		)
	}
}

export default connect()(Maintenance);