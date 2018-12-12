export const loadAuthToken = () => {
	return localStorage.getItem('authToken');
}

export const saveAuthToken = authToken => {
	try {
		localStorage.setItem('authToken', authToken);
	} catch (e) {}
};

export const clearAuthToken = () => {
	try {
		localStorage.removeItem('authToken');
	} catch (e) {}
};

// Local Storage for vehicle editing forms 
export const saveVehicleId = vehicleId => {
	try{
		localStorage.setItem('vehicleId', vehicleId);
	} catch(e) {}
}

export const loadVehicleId = () => {
		localStorage.getItem('vehicleId')
	};

export const clearVehicleId = () => {
	localStorage.removeItem('vehicleId');
}

// Local Storage for maintenance editing forms 
export const saveMaintenanceId = vehicleId => {
	try{
		localStorage.setItem('maintenanceId', vehicleId);
	} catch(e) {}
}

export const loadMaintenanceId = () => {
		localStorage.getItem('maintenanceId')
	};

export const clearMaintenanceId = () => {
	localStorage.removeItem('vehicleId');
}
