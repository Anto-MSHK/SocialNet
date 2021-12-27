import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import usersReducer from './usersReducer';
import authReducer from "./authReducer";
import thunk from "redux-thunk";

let reduser = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	usersPage: usersReducer,
	auth: authReducer
})

let store = createStore(reduser, applyMiddleware(thunk))

window.store = store
export default store