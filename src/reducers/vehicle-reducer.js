import * as actions from '../actions/vehicle-actions';

const initialState = {
			vehicles: null,
			singleVehicle: null,
			error: null,
			vehicleToEdit: null,
			};


const vehicleReducer = (state=initialState, action) => {

		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		if(dd<10) {
				dd = '0'+dd
		} 

		if(mm<10) {
				mm = '0'+mm
		} 
		
		today = mm + '/' + dd + '/' + yyyy;
	
		if(action.type === actions.FETCH_VEHICLES_SUCCESS) {
			return Object.assign({}, state, {
				vehicles: action.fetchedVehicles
		})
	  } else if (action.type === actions.FETCH_VEHICLES_ERROR) {
			return Object.assign({}, state, {
				error: action.error
			});
		} else if (action.type === actions.FETCH_SINGLE_VEHICLE_SUCCESS) {
			return Object.assign({}, state, { 
				singleVehicle: action.fetchedVehicle
			});
		} else if (action.type === actions.FETCH_SINGLE_VEHICLE_ERROR) {
			return Object.assign({}, state, {
				error: action.error
			});
		} else if (action.type === actions.ADD_VEHICLE_SUCCESS) {
		return Object.assign({}, state, { 
		vehicles:	[...state.vehicles, {
				vehicles: action.addedVehicle
			}]
		})
	} else if (action.type === actions.ADD_VEHICLE_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	return state;
}

export default vehicleReducer;