import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger'
import { fetchWeather } from "./actions";

const loggerMiddleware = createLogger()
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware);

const store = createStore(rootReducer, composeWithDevTools(middleware));

store.dispatch(fetchWeather())

export default store