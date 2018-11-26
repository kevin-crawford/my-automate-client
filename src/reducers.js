import * as actions from './actions';

const initialState = {
			vehicles: [
					 {
						brand: 'Honda',
						model: 'Civic',
						year: '2001',
						miles: 28193,
						addedOn: '10/25/2018',
						vehicleID: '1234',
						maintenance: [{
							kind: 'oil',
							date: '10/22/2018',
							currentMiles: 1111,
							note: 'lorem ipsum',
							maintenanceID: '1111'
						},{
							kind: 'breaks',
							date: '1/23/2018',
							currentMiles: 1111,
							note: 'lorem ipsum',
							maintenanceID: '2222'
						}]},
				 	{ 
						brand: 'Audi',
						model: 'R8',
						year: '2017',
						miles: 2193,
						addedOn: '10/25/2018',
						vehicleID: '4567',
						maintenance: [{
							kind: 'oil',
							date: '10/22/2018',
							currentMiles: 1111,
							note: 'lorem ipsum',
							maintenanceID: '3333'
						},{
							kind: 'breaks',
							date: '1/23/2018',
							currentMiles: 1111,
							note: 'lorem ipsum',
							maintenanceID: '4444'
						}]}
					]
				};


const automateReducer = (state=initialState, action) => {

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
				maintenance: []
			}]
		})
	}
	return state;
}

export default automateReducer;