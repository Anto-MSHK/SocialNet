import { profileAPI } from "../api/api"

// const SET_MY_ID = 'SET-MY-ID'
const ADD_POST = 'ADD-POST'

const CHANGE_ADD_POST = 'CHANGE-ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const IS_EXPECTATION = 'IS-EXPECTATION'
const GET_STATUS = 'GET_STATUS'
const UPDATE_STATUS = 'UPDATE-STATUS'

const initialState = {
	userInfo: null,
	status: "",
	posts: [
		// {
		// 	text: "Hello!",
		// 	likes: 5
		// },
		// {
		// 	text: "Hello!",
		// 	likes: 5
		// }
	],
	newPostText: '',
	myId: null
}

let profileReducer = (state = initialState, action) => {

	switch (action.type) {
		// case SET_MY_ID:
		// 	return { ...state, myId: action.myId }
		case ADD_POST:
			let newPost = {
				id: 5,
				text: state.newPostText,
				likes: 0
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			}
		case CHANGE_ADD_POST:
			return {
				...state,
				newPostText: action.change
			}
		case SET_USER_PROFILE:
			return {
				...state, userInfo: action.userInfo
			}
		case IS_EXPECTATION:
			return { ...state, isExpectation: action.isExpectation }
		case GET_STATUS:
			return { ...state, status: action.status }
		case UPDATE_STATUS:

			return { ...state, status: action.status }
		default:
			return state
	}

}
// const setMyIdSuccess = (myId) => ({ type: SET_MY_ID, myId })
export const addPost = () => ({ type: ADD_POST })
export const changeAddPost = (change) => ({ type: CHANGE_ADD_POST, change })
export const setUserProfileSuccess = (userInfo) => ({ type: SET_USER_PROFILE, userInfo })
export const setExpectation = (isExpectation) => ({ type: IS_EXPECTATION, isExpectation })
export const getStatusSuccess = (status) => ({ type: GET_STATUS, status })
export const updateStatusSuccess = (status) => ({ type: UPDATE_STATUS, status })


// (function (dispatch) {
// 	dispatch(setMyIdSuccess(profileAPI.getMyProfile().then(data => data.id)))
// }())

export const setUserProfile = (userId) => {
	return (dispatch) => {
		profileAPI.getProfile(userId)
			.then((data) => {
				dispatch(setUserProfileSuccess(data))
			})
	}
}

export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId)
			.then((data) => {
				dispatch(getStatusSuccess(data))
			})
	}
}

export const updateStatus = (status) => (dispatch) => {

	profileAPI.updateStatus(status)
		.then((data) => {

			// if (data.resultCode === 1) {
			dispatch(updateStatusSuccess(status))
			// }
		})
}

export default profileReducer