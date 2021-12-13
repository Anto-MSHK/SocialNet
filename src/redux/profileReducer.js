const ADD_POST = 'ADD-POST'
const CHANGE_ADD_POST = 'CHANGE-ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const IS_EXPECTATION = 'IS-EXPECTATION'

const initialState = {
	userInfo: null,
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
}

let profileReducer = (state = initialState, action) => {

	switch (action.type) {
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
		default:
			return state
	}

}
export const addPost = () => ({ type: ADD_POST })
export const changeAddPost = (change) => ({ type: CHANGE_ADD_POST, change })
export const setUserProfile = (userInfo) => ({ type: SET_USER_PROFILE, userInfo })
export const setExpectation = (isExpectation) => ({ type: IS_EXPECTATION, isExpectation })


export default profileReducer