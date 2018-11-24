export const ADD_VEHICLE = 'ADD_LIST';
export const addVehicle = ( brand, model, year, miles, dateAdded ) => ({
	type: ADD_VEHICLE,
	brand,
	model,
	year,
	miles,
	dateAdded
});

export const ADD_MAINTENANCE = 'ADD_MAINTENANCE';
export const addMaintenance = ( kind, date, note, vehicleIndex ) => ({
	type: ADD_MAINTENANCE,
	kind,
	date,
	note,
	vehicleIndex
})