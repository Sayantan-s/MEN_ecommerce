import { createStore } from "redux";
import rootReducer from "./rootReducer";
//import thunk from 'thunk'

//const middlewares = [ thunk ]

export default createStore(rootReducer)