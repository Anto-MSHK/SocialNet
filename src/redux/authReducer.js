import { profileAPI } from "../api/api"
import { getStatus, setUserProfile } from "./profileReducer"

const SET_AUTH_USER = 'SET-AUTH-USER'

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
}

let authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER:
			return {
				...state,
				...action.data,
				isAuth: true
			}
		default:
			return state
	}
}

export const setAuthUserSuccess = (id, email, login) => ({ type: SET_AUTH_USER, data: { id, email, login } })

export const setAuthUser = () => {
	return (dispatch) => {
		profileAPI.getMyProfile()
			.then((data) => {
				dispatch(setAuthUserSuccess(data.id, data.email, data.login))
				dispatch(setUserProfile(data.id))
				dispatch(getStatus(data.id))
			})
	}
}

export default authReducer