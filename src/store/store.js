import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';

export default createStore(rootReducer, applyMiddleware(thunk));
