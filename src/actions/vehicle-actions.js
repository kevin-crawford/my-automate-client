import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_VEHICLES_SUCCESS = 'FETCH_VEHICLES_SUCCESS';
export const fetchVehiclesSuccess = fetchedVehicles => ({
	type: FETCH_VEHICLES_SUCCESS,
	fetchedVehicles
});

export const FETCH_VEHICLES_ERROR = 'FETCH_VEHICLES_ERROR';
export const fetchVehiclesError = error => ({
	type: FETCH_VEHICLES_SUCCESS,
	error
});

export const ADD_VEHICLE_SUCCESS = 'ADD_VEHICLE_SUCCESS';
export const addVehicleSuccess = addedVehicle => ({
	type: ADD_VEHICLE_SUCCESS,
	addedVehicle
});

export const ADD_VEHICLE_ERROR = 'ADD_VEHICLE_ERROR';
export const addVehicleError = error => ({
	type: ADD_VEHICLE_ERROR,
	error
});

export const EDIT_VEHICLE_SUCCESS = 'EDIT_VEHICLE_SUCCESS';
export const editVehicleSuccess = editedVehicle => ({
	type: EDIT_VEHICLE_SUCCESS,
	editedVehicle
});

export const EDIT_VEHICLE_ERROR = 'EDIT_VEHICLE_ERROR';
export const editVehicleError = error => ({
	type: EDIT_VEHICLE_ERROR,
	error
})


export const DELETE_VEHICLE_SUCCESS = 'DELETE_VEHICLE_SUCCESS';
export const deleteVehicleSuccess = deletedVehicle => ({
	type: DELETE_VEHICLE_SUCCESS,
	deletedVehicle
});

export const DELETE_VEHICLE_ERROR = 'DELETE_VEHICLE_SUCCESS';
export const deleteVehicleError = error => ({
	type: DELETE_VEHICLE_SUCCESS,
	error
});


export const fetchVehicles = (dispatch, getState) => {
	console.log('fetching vehicles');
	const authToken =  getState().auth.authToken;
	const user = getState().user.currentUser;

	return fetch(`${API_BASE_URL}/vehicles/${user}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(vehicles => {
			console.log('vehicles', vehicles)
			dispatch(fetchVehiclesSuccess(vehicles))
		})
		.catch( err => {
			dispatch(fetchVehiclesError(err));
		});

};

export const addVehicle = vehicle => (dispatch, getState) => {
	console.log('adding vehicle', vehicle);
	const authToken =  getState().auth.authToken;

	const addedVehicle = {
		brand: vehicle.brand,
		model: vehicle.model,
		year: vehicle.year,
		miles: vehicle.miles,
		user: vehicle.user
	}

	console.log(JSON.stringify(addedVehicle));

	return fetch(`${API_BASE_URL}/vehicles/add`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${authToken}`
		},
		body: JSON.stringify(addedVehicle),
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(vehicleData => {
			console.log('Vehicle Data', vehicleData);
			dispatch(addVehicleSuccess(vehicleData));
		})
		.catch( err => {
			dispatch(addVehicleError(err));
		});
	
};

export const editVehicle = (vehicle, id) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;

	const vehicleToUpdate = {
		brand: vehicle.brand,
		model: vehicle.model,
		year: vehicle.year,
		miles: vehicle.miles,
	}
	
	console.log('editing vehicle', vehicleToUpdate, id);

	return fetch(`${API_BASE_URL}/vehicles/edit/${id}`, {
		method: 'PUT',
		body: JSON.stringify(vehicleToUpdate),
		headers: {
			'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
		}
	})
	.then(EditedVehicleData => {
		console.log('Edited Vehicle Data', EditedVehicleData);
		dispatch(editVehicleSuccess(EditedVehicleData));
	})
	.catch( err => {
		dispatch(editVehicleError(err));
	});
}

export const deleteVehicle = id => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	
	console.log('deleting vehicle', id);

	return fetch(`${API_BASE_URL}/vehicles/delete/${id}`, {
		method: 'DELETE',
		headers: {
      Authorization: `Bearer ${authToken}`
		}
	})
	.then(res => normalizeResponseErrors(res))
	.then(() => {
		console.log('success');
		dispatch(deleteVehicleSuccess());
	})
	.catch( err => {
		dispatch(deleteVehicleError(err));
	});
}
