export const ADD_VEHICLE = 'ADD_VEHICLE';
export const addVehicle = ( brand, model, year, miles ) => ({
	type: ADD_VEHICLE,
	brand,
	model,
	year,
	miles,
});

export const ADD_MAINTENANCE = 'ADD_MAINTENANCE';
export const addMaintenance = ( kind, date, note, vehicleIndex ) => ({
	type: ADD_MAINTENANCE,
	kind,
	date,
	note,
	vehicleIndex
})