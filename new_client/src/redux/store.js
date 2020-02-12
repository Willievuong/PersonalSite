import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

import thunkMiddleware from "redux-thunk";

const middleware = applyMiddleware(thunkMiddleware);

export default createStore(rootReducer, composeWithDevTools(middleware));
