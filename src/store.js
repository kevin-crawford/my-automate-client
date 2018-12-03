
// import maintenanceReducer from './reducers/maintenance-reducer';
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';

//-- REDUCERS ----
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/auth';
import vehicleReducer from './reducers/vehicle-reducer';
import protectedDataReducer from './reducers/protected-data';
// -- ACTIONS 
import {setAuthToken, refreshAuthToken } from './actions/auth';


const store = createStore(
	combineReducers({
		form: formReducer,
		vehicle: vehicleReducer,
		auth: authReducer,
		protectedData: protectedDataReducer
	}),
	applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if(authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}
export default store;