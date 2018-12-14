import  React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class AddNewVehicle extends React.Component {
	render(){
		return(
			<Fragment>
				<div className="AddNewVehicle">
					<Link to="/AddNewVehicle" >
						<button>
						<i className="fas fa-car"></i>
							Add New Vehicle
						</button>
					</Link>
				</div>
			</Fragment>
		)
	}
}

export default AddNewVehicle;