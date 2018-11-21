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
	if (action.type === actions.ADD_VEHICLE) {
		return Object.assign({}, state, {
			vehicles: [...state.vehicles, {
				brand: action.brand,
				model: action.model,
				year: action.year,
				miles: action.miles,
				vehicleID: state.vehicles.length,
				maintenance: []
			}]
		})
	}
	else if (action.type === actions.ADD_MAINTENANCE) {
		let vehicles = state.vehicles.map((vehicle, index) => {
			if( index !== action.vehicleIndex){
				return vehicle;
			}
			return Object.assign({}, vehicle, {
				maintenance: [...vehicle.maintenance, {
					kind: action.type,
					date: action.date,
					note: action.note
				}]
			});
		});
		
		return Object.assign({}, state, {
			vehicles
		});
	}
	return state;
}

export default automateReducer;