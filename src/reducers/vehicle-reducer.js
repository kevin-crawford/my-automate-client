import * as actions from '../actions/vehicle-actions';

const initialState = {
			vehicles: []
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
		
		
	if (action.type === actions.ADD_VEHICLE) {
		return Object.assign({}, state, { 
		vehicles:	[...state.vehicles, {
				brand: action.brand,
				model: action.model,
				year: action.year,
				miles: action.miles,
				addedOn: today,
				vehicleID: JSON.stringify(state.vehicles.length),
				maintenance: []
			}]
		})
	}
	return state;
}

export default vehicleReducer;