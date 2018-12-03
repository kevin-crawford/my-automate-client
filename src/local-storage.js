export const loadAuthToken = () => {
	return localStorage.getItem('authToken');
}

export const saveAuthToken = authToken => {
	try {
		localStorage.setitem('authToken', authToken);
	} catch (e) {}
};

export const clearAuthToken = () => {
	try {
		localStorage.removeItem('authToken');
	} catch (e) {}
};