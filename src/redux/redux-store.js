import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';

let reduser = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer
})

let store = createStore(reduser)

export default store;