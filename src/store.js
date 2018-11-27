import vehicleReducer from './reducers/vehicle-reducer';
// import maintenanceReducer from './reducers/maintenance-reducer';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const composeEnhancers = compose;

const store = createStore(
	combineReducers({
		form: formReducer,
		vehicle: vehicleReducer,
	}),
	composeEnhancers(applyMiddleware(thunk))
);

export default store;