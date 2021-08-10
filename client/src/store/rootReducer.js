import { combineReducers } from 'redux';
import AuthReducer from './reducers/Auth.reducer';
import navHeightReducer from './reducers/NavHeight.reducer';
import WishListReducer from './reducers/Wishlist.reducer';

export default combineReducers({ AuthReducer, navHeightReducer, WishListReducer });
