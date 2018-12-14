import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {saveAuthToken, clearAuthToken} from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
	type: SET_AUTH_TOKEN,
	authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
	type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
	type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
	type: AUTH_SUCCESS,
	currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
	type: AUTH_ERROR,
	error
});

export const storeAuthInfo = (authToken, userId, dispatch) => {
	dispatch(setAuthToken(authToken));
	dispatch(authSuccess(userId));
	saveAuthToken(authToken);
};

export const login = ( username, password ) => dispatch => {
	console.log(username,password, 'login credentials');
	dispatch(authRequest());
	console.log(API_BASE_URL);
	return (
		fetch(`${API_BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			}),
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({authToken, userId}) => storeAuthInfo(authToken, userId, dispatch))
		.catch(err => {
			const {code} = err;
			const message =
			code === 401
					? 'Incorrect email or password'
					: 'Unable to login, please try again';
			dispatch(authError(err));
			return Promise.reject(
				new SubmissionError({
					_error: message
				})
			);
		})
	);
};

export const refreshAuthToken = () => (dispatch, getState) => {
	dispatch(authRequest());
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/auth/refresh`, {
			method: 'POST',
			headers: {
					// Provide our existing token as credentials to get a new one
					Authorization: `Bearer ${authToken}`
			}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({authToken, userId}) => storeAuthInfo(authToken, userId, dispatch))
		.catch(err => {
				// We couldn't get a refresh token because our current credentials
				// are invalid or expired, or something else went wrong, so clear
				// them and sign us out
				dispatch(authError(err));
				dispatch(clearAuth());
				clearAuthToken(authToken);
		});
};