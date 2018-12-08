import  React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './AddNewVehicle.css';

class AddNewVehicle extends React.Component {
	render(){
		return(
			<Fragment>
				<div className="AddNewVehicle">
					<Link to={"/AddNewVehicle"} >
						<h4>+ Add New Vehicle</h4>
					</Link>
				</div>
			</Fragment>
		)
	}
}

export default AddNewVehicle;