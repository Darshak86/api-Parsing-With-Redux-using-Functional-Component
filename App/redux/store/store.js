import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "../reducers/rootReducers";

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

 
