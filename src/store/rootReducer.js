import { combineReducers } from 'redux';
import AuthReducer from './reducers/Auth.reducer';
import navHeightReducer from './reducers/NavHeight.reducer';

export default combineReducers({ AuthReducer, navHeightReducer });
