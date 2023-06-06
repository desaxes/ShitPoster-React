import {applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { messagesReducer } from "./messages-reducer";
import { subsReducer } from "./subs-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:messagesReducer,
    subsPage:subsReducer,
    auth:authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export {store}