import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
	//object w reducers
  auth: authReducer,
  errors: errorReducer
});