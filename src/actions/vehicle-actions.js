export const ADD_VEHICLE = 'ADD_VEHICLE';
export const addVehicle = ( brand, model, year, miles ) => ({
	type: ADD_VEHICLE,
	brand,
	model,
	year,
	miles,
});
