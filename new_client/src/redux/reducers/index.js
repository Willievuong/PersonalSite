import { combineReducers } from "redux";

import setScreenReducer from './setScreen'
import weatherReducer from './weather'

export default combineReducers({ setScreenReducer, weatherReducer});
