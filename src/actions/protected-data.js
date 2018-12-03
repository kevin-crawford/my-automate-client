import {API_BASE_URL} from '../config';
import {nomralizeReposonseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
	type: FETCH_PROTECTED_DATA_SUCCESS,
	data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataSuccess = error => ({
	type: FETCH_PROTECTED_DATA_ERROR,
	error
});

export const fetchProtectedData = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/protected`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
		.catch(err => {
			dispatch(fetchProtectedDataError(err));
		});
};