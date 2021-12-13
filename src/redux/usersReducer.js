const TOGGLE_FOLLOWER = "TOGGLE-FOLLOWER"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const IS_EXPECTATION = "IS-EXPECTATION"

let initialState = {
	users: [],
	totalCount: 0,
	pageSize: 5,
	actualPage: 1,
	isExpectation: true
}

let usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case TOGGLE_FOLLOWER:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, isFollow: !user.isFollow }
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
		default: return state
	}
}
export const toggleFollower = (userId) => ({ type: TOGGLE_FOLLOWER, userId })
export const setUsers = (serverUsers) => ({ type: SET_USERS, serverUsers })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setExpectation = (isExpectation) => ({ type: IS_EXPECTATION, isExpectation })

export default usersReducer