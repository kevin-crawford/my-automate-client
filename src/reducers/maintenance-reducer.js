import * as actions from '../actions/maintenance-actions';


const maintenanceReducer = (state=initialState, action) => {

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
	
	
if (action.type === actions.ADD_MAINTENANCE) {
	return Object.assign({}, state, { 
	vehicles:	[...state.vehicles, {
			vehicleID: JSON.stringify(state.vehicles.length),
			maintenance: []
		}]
	})
}
return state;
}

export default automateReducer;