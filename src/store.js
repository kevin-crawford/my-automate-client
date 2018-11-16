import automateReducer from './reducers';
import { createStore, combineReducers, ApplyMiddleware, compose, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const composeEnhancers = compose;

const store = createStore(
	combineReducers({
		form: formReducer,
		automate: automateReducer
	}),
	composeEnhancers(applyMiddleware(thunk))
);

export default store;