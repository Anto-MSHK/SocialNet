import { usersAPI } from "../api/api"

const TOGGLE_FOLLOWER = "TOGGLE-FOLLOWER"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const IS_EXPECTATION = "IS-EXPECTATION"
const SET_EXPECTATION_FOLLOWERS = "SET-EXPECTATION-FOLLOWERS"

let initialState = {
	users: [],
	totalCount: 0,
	pageSize: 5,
	actualPage: 1,
	isExpectation: true,
	isExpectationFollowers: []
}

let usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case TOGGLE_FOLLOWER:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: !user.followed }
					} else {
						return user
					}
				})
			}
		case SET_USERS:
			return { ...state, users: [...action.serverUsers.items], totalCount: action.serverUsers.totalCount }
		case SET_CURRENT_PAGE:
			return { ...state, actualPage: action.currentPage }
		case IS_EXPECTATION:
			return { ...state, isExpectation: action.isExpectation }
		case SET_EXPECTATION_FOLLOWERS:
			return {
				...state, isExpectationFollowers: action.isExpectation
					? [...state.isExpectationFollowers, action.userId]
					: state.isExpectationFollowers.filter(user => user != action.userId)
			}
		// return !action.isExpectation
		// 	? { ...state, setExpectationFollowers: [...state.isExpectationFollowers, action.userId] }
		// 	: { ...state, setExpectationFollowers: state.setExpectationFollowers.filter(user => user === action.userId) }
		default: return state
	}
}
export const toggleFollowerSucsess = (userId) => ({ type: TOGGLE_FOLLOWER, userId })
export const setUsersSucsess = (serverUsers) => ({ type: SET_USERS, serverUsers })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setExpectation = (isExpectation) => ({ type: IS_EXPECTATION, isExpectation })
export const setExpectationFollowers = (userId, isExpectation) => ({ type: SET_EXPECTATION_FOLLOWERS, userId, isExpectation })

export const toggleFollower = (userId, isfollowing) => {
	return (dispatch) => {
		dispatch(setExpectationFollowers(userId, true))
		usersAPI.follow(isfollowing, userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(toggleFollowerSucsess(userId))
			}
			dispatch(setExpectationFollowers(userId, false))
		})
	}
}

export const setUsers = (pageSize, actualPage) => {
	return (dispatch) => {
		dispatch(setExpectation(true))
		usersAPI.getUsers(pageSize, actualPage).then(data => {
			dispatch(setExpectation(false))
			dispatch(setUsersSucsess(data))
		})
	}
}

export default usersReducer