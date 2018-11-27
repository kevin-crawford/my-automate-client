export const ADD_MAINTENANCE = 'ADD_MAINTENANCE';
export const addMaintenance = ( kind, date, note, vehicleIndex ) => ({
	type: ADD_MAINTENANCE,
	kind,
	date,
	note,
	vehicleIndex
})